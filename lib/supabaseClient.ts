import { createClient } from "@supabase/supabase-js"

// It is expected that you provide NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
// in your local `.env.local` file. These variables are exposed to the browser at build time
// because of the NEXT_PUBLIC_ prefix.

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
) 