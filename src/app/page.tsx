import { Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Members from '@/components/Members';
import Performances from '@/components/Performances/index';
import Contact from '@/components/Contact/index';
import Footer from '@/components/Footer/index';

const ComponentLoader = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-300"></div>
  </div>
);

export default function Home() {
  return (
    <main className="relative">
      <Header />
      
      <Suspense fallback={<ComponentLoader />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<ComponentLoader />}>
        <Members />
      </Suspense>

      <Suspense fallback={<ComponentLoader />}>
        <Performances />
      </Suspense>

      <Suspense fallback={<ComponentLoader />}>
        <Contact />
      </Suspense>

      <Footer />
    </main>
  );
}