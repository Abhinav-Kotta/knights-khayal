import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Knights Khayal - Where Imagination Meets Music',
  description: 'Experience the dreamlike fusion of Indian music with Knights Khayal',
};

function StarryBackground() {
  // Generate random stars
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 3 + 2
  }));

  return (
    <div className="stars">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            '--duration': `${star.duration}s`
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body>
        <div className="starry-bg min-h-screen text-white relative">
          <StarryBackground />
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}