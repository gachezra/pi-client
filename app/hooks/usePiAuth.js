import { useState, useEffect } from 'react';

export const usePiAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSandbox, setIsSandbox] = useState(false);

  const authenticate = async () => {
    try {
      if (!window.Pi) {
        throw new Error('Pi Network SDK not loaded');
      }

      // Check if we're in sandbox mode
      setIsSandbox(process.env.NODE_ENV !== 'production');

      const auth = await window.Pi.authenticate(['username'], () => {
        console.log('Incomplete payment found!');
      });
      
      setUser(auth.user);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  return { user, loading, error, isSandbox };
};
