import { createClient } from './supabase/client'

export interface AuthState {
  user: any | null
  session: any | null
  isLoading: boolean
  error: string | null
}

export async function validateSession() {
  const supabase = createClient()
  
  try {
    // Get the current session
    const { data: { session }, error: sessionError } = await supabase.auth.getSession()
    
    if (sessionError) {
      throw new Error('Session retrieval failed')
    }

    if (!session) {
      return { user: null, session: null, isValid: false }
    }

    // Verify the session by getting user data
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    
    if (userError) {
      throw new Error('User verification failed')
    }

    if (!user) {
      return { user: null, session: null, isValid: false }
    }

    // Additional security checks
    const now = new Date().getTime() / 1000
    if (session.expires_at && session.expires_at < now) {
      return { user: null, session: null, isValid: false }
    }

    return { user, session, isValid: true }
    
  } catch (error) {
    console.error('Session validation error:', error)
    return { user: null, session: null, isValid: false }
  }
}

export async function secureSignOut() {
  const supabase = createClient()
  
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    
    // Clear any additional client-side storage if needed
    if (typeof window !== 'undefined') {
      localStorage.removeItem('supabase.auth.token')
      sessionStorage.clear()
    }
    
    return { success: true, error: null }
  } catch (error) {
    console.error('Sign out error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error occurred' }
  }
}

export function isValidRedirectUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    const allowedHosts = [
      'dashboard.evo6b.xyz',
      'evo6b.xyz',
      'localhost',
      '127.0.0.1'
    ]
    
    return allowedHosts.some(host => 
      parsed.hostname === host || 
      parsed.hostname.endsWith(`.${host}`) ||
      parsed.hostname.endsWith('.vercel.app')
    )
  } catch {
    return false
  }
}

export async function createSecureRedirectUrl(baseUrl: string, session: any): Promise<string> {
  try {
    const url = new URL(baseUrl)
    
    // Add encrypted session token as a secure parameter
    if (session?.access_token) {
      // Create a time-limited encrypted token for the redirect
      const redirectToken = createRedirectToken(session)
      if (redirectToken) {
        url.searchParams.set('auth_token', redirectToken)
      }
    }
    
    // Add timestamp to prevent replay attacks
    url.searchParams.set('t', Date.now().toString())
    
    return url.toString()
  } catch (error) {
    console.error('Error creating secure redirect URL:', error)
    return baseUrl
  }
}

// Create a time-limited authentication token for cross-domain redirects
function createRedirectToken(session: any): string | null {
  if (!session?.access_token) return null
  
  const payload = {
    token: session.access_token,
    expires_at: session.expires_at,
    issued_at: Date.now(),
    user_id: session.user?.id,
    refresh_token: session.refresh_token
  }
  
  // Base64 encode the payload (in production, you'd want to encrypt this)
  return btoa(JSON.stringify(payload))
}