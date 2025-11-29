import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      quote_requests: {
        Row: {
          id: string;
          created_at: string;
          first_name: string;
          last_name: string;
          email: string;
          phone: string;
          device_type: string;
          description: string;
          service_type: 'revitaliser' | 'modifier';
          interested_in_donation: boolean;
        };
        Insert: Omit<Database['public']['Tables']['quote_requests']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['quote_requests']['Insert']>;
      };
      donations: {
        Row: {
          id: string;
          created_at: string;
          first_name: string;
          last_name: string;
          email: string;
          phone: string;
          device_type: string;
          device_condition: string;
          notes: string;
        };
        Insert: Omit<Database['public']['Tables']['donations']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['donations']['Insert']>;
      };
      ecological_counter: {
        Row: {
          id: string;
          devices_saved: number;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['ecological_counter']['Row'], 'id' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['ecological_counter']['Insert']>;
      };
    };
  };
};
