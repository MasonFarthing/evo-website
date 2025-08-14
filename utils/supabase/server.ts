import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export const createClient = async () => {
  const cookieStore = await cookies()
  
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Server component - can't set cookies
          }
        },
      },
    }
  )
}

export async function signInWithEmail(email: string) {
  const supabase = await createClient()
  
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      // This URL must be allowed in your Supabase dashboard → Authentication → URL Configuration
      emailRedirectTo: process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://dashboard.evo6b.xyz",
    },
  })

  if (error) {
    return { error }
  }
  
  return { error: null }
} 