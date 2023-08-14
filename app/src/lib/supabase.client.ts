/**
 * * Library imports
 */
// ? https://www.npmjs.com/package/@supabase/supabase-js
import { createClient } from '@supabase/supabase-js'
// ? https://www.npmjs.com/package/dotenv

import { writable } from 'svelte/store'
// ? https://svelte.dev/docs/introduction

const supabaseUrl = process.env.SupabaseUrl as string
const apiKey = process.env.SupabaseApiKey as string
if (!apiKey) {
  throw new Error(
    'SupabaseApiKey is not defined in the environment variables.(look up .env.example)',
  )
}

if (!supabaseUrl) {
  throw new Error(
    'SupabaseUrl is not defined in the environment variables.(look up .env.example)',
  )
}

export const supabase = createClient(supabaseUrl, apiKey)

export const currentUser = writable((await supabase.auth.getUser()).data.user)

supabase.auth.onAuthStateChange(async () => {
  currentUser.set((await supabase.auth.getUser()).data.user)
})
