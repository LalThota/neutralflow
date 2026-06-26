import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN SECTIONS */}
      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* STATS BAR */}
        <StatsBar />

        {/* FEATURE SHOWCASE (BENTO-TO-ACCORDION) */}
        <Features />

        {/* SOCIAL PROOF / TESTIMONIALS */}
        <Testimonials />

        {/* PRICING (MATRIX-DRIVEN) */}
        <Pricing />

        {/* FAQ SECTION */}
        <FAQ />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
