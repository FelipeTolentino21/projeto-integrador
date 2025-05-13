import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://unpwemjugtntyiedmdvc.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVucHdlbWp1Z3RudHlpZWRtZHZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4OTc0NzksImV4cCI6MjA1NzQ3MzQ3OX0.xpnqywzyfeF1U6H3zEhIFSytr9xEi0zk4jM9wXqPmSc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
