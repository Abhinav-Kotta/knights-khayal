'use client';

import { VideoGrid } from '@/components/VideoGrid';

export default function Performances() {
  return (
    <section id="performances" className="py-16 bg-gradient-to-b from-black to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Our Performances
        </h2>

        {/* Featured Performances */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-purple-300">Featured Performances</h3>
          <VideoGrid featured={true} initialLimit={3} />
        </div>

        {/* Recent Performances */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-purple-300">Recent Performances</h3>
          <VideoGrid category="Performance" initialLimit={6} />
        </div>
      </div>
    </section>
  );
}