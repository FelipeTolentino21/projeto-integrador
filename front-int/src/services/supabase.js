import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kkuodrgubxxifivvzinb.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrdW9kcmd1Ynh4aWZpdnZ6aW5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4MTM1MTMsImV4cCI6MjA1NzM4OTUxM30.rGsNLatfS8ZEOl8oSBBOIweEf19ChdUno2KjByIzWx8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
