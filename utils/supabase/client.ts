import { createBrowserClient } from '@supabase/ssr'

export const createClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  
  console.log('Creating Supabase client with:', { supabaseUrl, hasAnonKey: !!supabaseAnonKey })
  
  return createBrowserClient(supabaseUrl, supabaseAnonKey)
} 