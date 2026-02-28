// Supabase client placeholder
// Install: npm install @supabase/supabase-js

/*
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const createClient = () => {
  // @ts-ignore
  return import('@supabase/supabase-js').then(({ createClient }) => 
    createClient(supabaseUrl, supabaseAnonKey)
  )
}
*/

// Placeholder - to be implemented after Supabase setup
export const supabase = {
  from: () => ({ select: () => ({ order: () => ({ data: [] }) }) }),
  auth: { getUser: () => Promise.resolve({ data: { user: null } }) }
}