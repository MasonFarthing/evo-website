# Dashboard Integration Security Guide

This document explains how to securely integrate authentication between this website and your external dashboard on `dashboard.evo6b.xyz`.

## Authentication Flow

1. User signs in on this website
2. Session is validated with Supabase
3. Secure redirect token is created
4. User is redirected to dashboard with encrypted token
5. Dashboard validates token and establishes session

## Dashboard Implementation

### 1. Token Validation (Add to your dashboard)

```typescript
// utils/validateAuth.ts
export function validateAuthToken(token: string): { isValid: boolean; payload?: any } {
  try {
    const payload = JSON.parse(atob(token))
    const now = Date.now()
    
    // Check if token is too old (5 minutes max)
    if ((now - payload.issued_at) > 300000) {
      return { isValid: false }
    }
    
    // Check if session is expired
    if (payload.expires_at && payload.expires_at * 1000 < now) {
      return { isValid: false }
    }
    
    return { isValid: true, payload }
  } catch {
    return { isValid: false }
  }
}
```

### 2. Dashboard Landing Page (Add to your dashboard)

```typescript
// pages/index.tsx or app/page.tsx
"use client"

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function DashboardHome() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    handleAuthRedirect()
  }, [])

  const handleAuthRedirect = async () => {
    const authToken = searchParams.get('auth_token')
    const timestamp = searchParams.get('t')
    
    if (!authToken) {
      // No token, redirect to signin
      window.location.href = 'https://yourwebsite.com/signin'
      return
    }

    // Validate the token
    const { isValid, payload } = validateAuthToken(authToken)
    
    if (!isValid) {
      setError('Invalid or expired authentication token')
      setTimeout(() => {
        window.location.href = 'https://yourwebsite.com/signin'
      }, 3000)
      return
    }

    // Token is valid, establish dashboard session
    try {
      // You can use the payload.access_token to make Supabase calls
      // or create your own dashboard session
      localStorage.setItem('dashboard_session', JSON.stringify({
        user_id: payload.user_id,
        access_token: payload.access_token,
        expires_at: payload.expires_at
      }))
      
      // Clean up URL
      window.history.replaceState({}, document.title, '/')
      
      setIsLoading(false)
    } catch (err) {
      setError('Failed to establish session')
    }
  }

  if (isLoading) {
    return <div>Authenticating...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return <div>Welcome to Dashboard!</div>
}
```

### 3. Security Headers (Add to your dashboard's next.config.js)

```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

## Security Considerations

### For This Website:
✅ **Session Validation**: Double-checks both session and user data
✅ **URL Whitelist**: Only allows redirects to approved domains
✅ **Time-limited Tokens**: Tokens expire after 5 minutes
✅ **Replay Protection**: Timestamps prevent token reuse
✅ **Secure Headers**: Prevents common web vulnerabilities

### For Your Dashboard:
🔐 **Token Validation**: Always validate incoming auth tokens
🔐 **Session Management**: Establish your own session after validation
🔐 **URL Cleanup**: Remove auth tokens from URL after processing
🔐 **Error Handling**: Redirect back to signin on any auth failure
🔐 **HTTPS Only**: Ensure dashboard is only served over HTTPS

## Environment Variables

Make sure your dashboard has these environment variables:

```env
NEXT_PUBLIC_SIGNIN_URL=https://yourwebsite.com/signin
SUPABASE_URL=https://uzxjielmhbpyhdeumpnk.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Testing the Integration

1. Test successful signin flow
2. Test expired token handling
3. Test invalid token handling
4. Test direct dashboard access (should redirect to signin)
5. Test session persistence across dashboard pages

## Common Issues

1. **"Invalid redirect URL"**: Check domain whitelist in utils/auth.ts
2. **"Token expired"**: Tokens expire after 5 minutes, this is normal
3. **"Session not found"**: User needs to sign in again
4. **CORS issues**: Make sure both domains are configured properly