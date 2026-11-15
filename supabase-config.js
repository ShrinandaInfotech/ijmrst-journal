// IJMRST Secure Supabase Configuration
const SUPABASE_URL = 'https://hhflmdnwrtjpzyxdpdew.supabase.co';
const SUPABASE_KEY = 'sb_publishable_sTmGhApqvQrV0rOPw7t3YQ_zSnuyK7l';

// Initialize Supabase Client
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Helper: Generate Unique Paper ID (e.g., IJMRST-2026-4821)
function generatePaperId() {
  const year = new Date().getFullYear();
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `IJMRST-${year}-${rand}`;
}

// Helper: Generate Unique Partner Code (e.g., IJMRST-P412)
function generatePartnerCode() {
  const rand = Math.floor(100 + Math.random() * 900);
  return `IJMRST-P${rand}`;
}
