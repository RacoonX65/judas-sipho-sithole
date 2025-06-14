import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

// Database connection configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Error: Required environment variables are missing');
  console.log('Make sure you have the following in your .env.local file:');
  console.log('NEXT_PUBLIC_SUPABASE_URL=your_supabase_url');
  console.log('SUPABASE_SERVICE_ROLE_KEY=your_service_role_key');
  process.exit(1);
}

// Initialize Supabase client with admin privileges
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
  db: {
    schema: 'public',
  },
});

async function runSetup() {
  try {
    console.log('🚀 Starting database setup...');
    
    // Execute SQL statements one by one
    const statements = [
      // Create users table
      `CREATE TABLE IF NOT EXISTS public.users (
        id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        is_admin BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
      )`,
      
      // Enable RLS
      'ALTER TABLE public.users ENABLE ROW LEVEL SECURITY',
      
      // Drop existing policies
      'DROP POLICY IF EXISTS "Users can view their own data" ON public.users',
      'DROP POLICY IF EXISTS "Admins can manage all users" ON public.users',
      
      // Create policies
      `CREATE POLICY "Users can view their own data"
        ON public.users FOR SELECT
        USING (auth.uid() = id)`,
        
      `CREATE POLICY "Admins can manage all users"
        ON public.users FOR ALL
        USING (EXISTS (
          SELECT 1 FROM auth.users
          WHERE auth.users.id = auth.uid() 
          AND (auth.users.raw_user_meta_data->>'role' = 'admin' OR auth.users.raw_user_meta_data->>'is_admin' = 'true')
        ))`
    ];

    // Execute each statement
    for (const [index, sql] of statements.entries()) {
      console.log(`🔨 Executing statement ${index + 1}/${statements.length}...`);
      const { error } = await supabase.rpc('execute_sql', { query: sql });
      
      if (error) {
        console.error(`❌ Error executing statement ${index + 1}:`);
        console.error('SQL:', sql);
        console.error('Error:', error);
        process.exit(1);
      }
    }

    console.log('✅ Database setup completed successfully!');
    console.log('\n🎉 You can now access the admin panel at /admin/login');
    process.exit(0);
  } catch (error) {
    console.error('❌ An unexpected error occurred:');
    console.error(error);
    process.exit(1);
  }
}

runSetup();
