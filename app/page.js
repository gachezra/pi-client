'use client'

import { usePiAuth } from './hooks/usePiAuth';
import { UserProfile } from './components/UserProfile';

export default function Home() {
  const { user, loading, error, isSandbox } = usePiAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg">Not authenticated</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-4">
      <UserProfile user={user} isSandbox={isSandbox} />
    </main>
  );
}