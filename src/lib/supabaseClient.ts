import { createClient } from '@supabase/supabase-js'
import type { Database } from '../../database/database.types'

// Create a single supabase client for interacting with your database
/*export const supabase = createClient(
  'https://bxizytnuivjhvhokmdlw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4aXp5dG51aXZqaHZob2ttZGx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2MjU3NTAsImV4cCI6MjA1MDIwMTc1MH0.wmiiNmOfO3q5dMeAz9QbHHYiiKi0dflMJ97kbc5yJ84',
)*/
export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY,
)
/*console.log(import.meta.env.VITE_SUPER_SECRET_KEY)*/
