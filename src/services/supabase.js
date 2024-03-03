import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fhjzgmaatpfsdujdnerb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoanpnbWFhdHBmc2R1amRuZXJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0MjAzNzUsImV4cCI6MjAyNDk5NjM3NX0.zHP6q3rwCFqv3G3vbvBHDMuMjGoJATKJy_IXo7wIDXA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
