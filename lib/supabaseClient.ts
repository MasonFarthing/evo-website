import { createClient } from "@supabase/supabase-js"

// It is expected that you provide NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
// in your local `.env.local` file. These variables are exposed to the browser at build time
// because of the NEXT_PUBLIC_ prefix.

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function signInWithEmail(email: string) {
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      // This URL must be allowed in your Supabase dashboard → Authentication → URL Configuration
      emailRedirectTo: "https://dashboard.domain.xyz",
    },
  })

  if (error) {
    console.error("Login failed:", error.message)
  } else if (typeof window !== "undefined") {
    alert("Check your email for the magic link!")
  }
} 