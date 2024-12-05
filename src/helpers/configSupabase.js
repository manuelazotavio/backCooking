import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cfmnpntlrukzfdcndlwm.supabase.co'; // URL do Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmbW5wbnRscnVremZkY25kbHdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0MjE3NTgsImV4cCI6MjA0ODk5Nzc1OH0.ykueLnbtGMcnEcn1X1lQIE6sZkuQRgw7arlKT_OkidE'; // Chave gerada no dashboard
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;