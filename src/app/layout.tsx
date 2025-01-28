import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Knights Khayal - Indian Music Group',
  description: 'Experience the magic of Bollywood music with Knights Khayal',
  keywords: ['music', 'bollywood', 'indian music', 'fusion', 'knights khayal'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}