import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://celukfeqgthiawbapskm.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlbHVrZmVxZ3RoaWF3YmFwc2ttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5MTgwNzUsImV4cCI6MjA4OTQ5NDA3NX0.aA1c2DzSm5MhhJ3m3sEHe2RdlocVkm7RDdfcWKBodGY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);