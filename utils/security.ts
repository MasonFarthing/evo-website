// Security configuration for cross-domain authentication

export const SECURITY_CONFIG = {
  // Allowed domains for redirects
  ALLOWED_REDIRECT_DOMAINS: [
    'dashboard.evo6b.xyz',
    'evo6b.xyz',
    '*.vercel.app',
    'localhost',
    '127.0.0.1'
  ],
  
  // Session security settings
  SESSION: {
    // How long to wait before redirect (in ms)
    REDIRECT_DELAY: 1500,
    // Maximum age for redirect tokens (in seconds)
    MAX_TOKEN_AGE: 300, // 5 minutes
  },
  
  // Security headers for cross-domain requests
  SECURITY_HEADERS: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Content-Security-Policy': "default-src 'self'; connect-src 'self' https://*.supabase.co https://dashboard.evo6b.xyz; frame-ancestors 'none';",
  }
}

// Validate if a URL is safe for redirect
export function isSecureDomain(url: string): boolean {
  try {
    const parsed = new URL(url)
    
    return SECURITY_CONFIG.ALLOWED_REDIRECT_DOMAINS.some(domain => {
      if (domain.startsWith('*.')) {
        const baseDomain = domain.slice(2)
        return parsed.hostname.endsWith(baseDomain)
      }
      return parsed.hostname === domain
    })
  } catch {
    return false
  }
}

// Create a time-limited authentication token for cross-domain redirects
export function createRedirectToken(session: any): string | null {
  if (!session?.access_token) return null
  
  const payload = {
    token: session.access_token,
    expires_at: session.expires_at,
    issued_at: Date.now(),
    user_id: session.user?.id
  }
  
  // In production, you'd want to encrypt this payload
  return btoa(JSON.stringify(payload))
}

// Validate a redirect token (for use on the dashboard side)
export function validateRedirectToken(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token))
    const now = Date.now()
    
    // Check if token is too old
    if ((now - payload.issued_at) > SECURITY_CONFIG.SESSION.MAX_TOKEN_AGE * 1000) {
      return false
    }
    
    // Check if session is expired
    if (payload.expires_at && payload.expires_at * 1000 < now) {
      return false
    }
    
    return true
  } catch {
    return false
  }
}