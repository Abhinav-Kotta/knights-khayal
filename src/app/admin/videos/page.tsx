// app/admin/videos/page.tsx
'use client';

import { useSession, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import AdminVideoInterface from '@/components/AdminVideoInterface';
import { Button } from "@/components/ui/button";
import { Toaster } from 'sonner';

export default function AdminVideosPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-300"></div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    redirect('/admin/login');
    return null;
  }

  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Admin Dashboard
                </h1>
              </div>
              <div className="flex items-center">
                <Button variant="ghost" onClick={() => signOut()}>
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdminVideoInterface />
        </main>
      </div>
    </>
  );
}