import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

// Use placeholder values for development if environment variables are not set
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);