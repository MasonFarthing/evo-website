import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { isValidRedirectUrl } from '@/utils/auth'
import { SECURITY_CONFIG } from '@/utils/security'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { session }, error } = await supabase.auth.getSession()

    if (error || !session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { redirectUrl } = await request.json()

    if (!redirectUrl || !isValidRedirectUrl(redirectUrl)) {
      return NextResponse.json(
        { error: 'Invalid redirect URL' },
        { status: 400 }
      )
    }

    // Create secure redirect URL with session token
    const url = new URL(redirectUrl)
    
    // Add session information as secure parameters
    const payload = {
      access_token: session.access_token,
      refresh_token: session.refresh_token,
      expires_at: session.expires_at,
      user_id: session.user.id,
      issued_at: Date.now()
    }

    // Base64 encode the payload (in production, encrypt this)
    const authToken = btoa(JSON.stringify(payload))
    url.searchParams.set('auth_token', authToken)
    url.searchParams.set('t', Date.now().toString())

    const response = NextResponse.json({ 
      redirectUrl: url.toString(),
      success: true 
    })

    // Add security headers
    Object.entries(SECURITY_CONFIG.SECURITY_HEADERS).forEach(([key, value]) => {
      response.headers.set(key, value)
    })

    return response

  } catch (error) {
    console.error('Redirect API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}