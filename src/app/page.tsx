import Navbar from '@/components/Navbar';
import Link from 'next/link';
import WhatWeDo from '@/components/WhatWeDo';

export default function Home() {
  return (
    <div className="min-h-screen">
      <header>
        <div className="bg-header">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-4 text-white font-serif">FOSSCU</h1>
            <div className="text-xl text-center mb-4 text-white">Free and Open Source Software Community</div>
            <Navbar />
          </div>
        </div>
        <div className="bg-header">
          <div className="w-full h-8 bg-white" style={{
            maskImage: 'url("data:image/svg+xml,%3Csvg width=\'96\' height=\'32\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M 0 0 C 24 0, 24 32, 48 32 C 72 32, 72 0, 96 0 L 96 32 L 0 32 Z\' fill=\'white\'/%3E%3C/svg%3E")',
            maskSize: '96px 32px',
            maskRepeat: 'repeat-x',
          }} />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <WhatWeDo />
      </main>
    </div>
  );
}