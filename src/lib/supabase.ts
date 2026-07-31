import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl as string, supabaseAnonKey as string)
    : {
        from: (_table: string) => ({
          insert: async () => ({
            data: null,
            error: {
              message:
                'Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.',
            },
          }),
        }),
      };

export { supabase };
