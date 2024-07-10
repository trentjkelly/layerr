// Authentication helper for supabase

import supabase from './supabaseClient';
import withPageAuth from '@supabase/auth-helpers-nextjs';
import getUser from '@supabase/auth-helpers-nextjs';

export { supabase, withPageAuth, getUser };