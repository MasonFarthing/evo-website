import { createClient } from "@supabase/supabase-js"
import Cookies from "js-cookie"

// It is expected that you provide NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
// in your local `.env.local` file. These variables are exposed to the browser at build time
// because of the NEXT_PUBLIC_ prefix.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Persist Supabase session in a first-party cookie that is shared with
// every sub-domain of evo6b.xyz (e.g. dashboard.evo6b.xyz).
const cookieStorage = {
  getItem: (key: string) => Cookies.get(key) ?? null,
  setItem: (key: string, value: string) => {
    Cookies.set(key, value, {
      domain: ".evo6b.xyz",
      secure: true,
      sameSite: "lax",
    })
  },
  removeItem: (key: string) => {
    Cookies.remove(key, { domain: ".evo6b.xyz" })
  },
}

export const supabase = createClient(supabaseUrl, supabaseAnon, {
  auth: {
    storage: cookieStorage,
    storageKey: "sb-auth-token",
    autoRefreshToken: true,
    persistSession: true,
  },
})

export async function signInWithEmail(email: string) {
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      // This URL must be allowed in your Supabase dashboard → Authentication → URL Configuration
      emailRedirectTo: "https://dashboard.evo6b.xyz",
    },
  })

  if (error) {
    console.error("Login failed:", error.message)
  } else if (typeof window !== "undefined") {
    alert("Check your email for the magic link!")
  }
} 