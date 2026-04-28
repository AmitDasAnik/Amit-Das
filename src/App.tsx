/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar, Hero, About, Expertise, Freelance, IELTS, Contact, Footer } from '@/src/components/Portfolio';
import { GraphicsPortfolio } from '@/src/components/GraphicsPortfolio';
import { CVModal } from '@/src/components/CVModal';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero onDownloadCV={() => setIsCVModalOpen(true)} />
        <About />
        <Expertise />
        <GraphicsPortfolio />
        <Freelance />
        <IELTS />
        <Contact />
      </main>
      <Footer onDownloadCV={() => setIsCVModalOpen(true)} />
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
}
