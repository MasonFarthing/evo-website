import { createClient } from "@supabase/supabase-js"
import Cookies from "js-cookie"



const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!


const cookieStorage = {
  getItem: (key: string) => Cookies.get(key) ?? null,
  setItem: (key: string, value: string) => {
    Cookies.set(key, value, {
      domain: ".evo6b.xyz",
      secure: true,
      sameSite: "none",
      path: "/",
      expires: 365,
    })
  },
  removeItem: (key: string) => {
    Cookies.remove(key, { domain: ".evo6b.xyz", path: "/" })
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