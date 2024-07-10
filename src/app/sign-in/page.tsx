import { useState } from 'react';
import supabase from '@/utils/supabaseClient';
import { useUser } from '@supabase/auth-helpers-react';
import { User } from '@supabase/supabase-js'

export default function SignIn() {
    const curUser = useUser();
    const { user, isLoading, error } = curUser as {
      user: User | null;
      isLoading: boolean;
      error: Error | null;
    };
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) console.log('Error signing in:', error.message);
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.log('Error signing out:', error.message);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.email}</p>
          <button onClick={handleSignOut}>Sign out</button>
        </>
      ) : (
        <>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignIn}>Sign in</button>
        </>
      )}
    </div>
  );
}