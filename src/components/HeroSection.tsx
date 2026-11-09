'use client';

import { Suspense, lazy, useEffect, useState } from 'react';
import HaikeiBlobs from './HaikeiBlobs';
import TextReveal from './TextReveal';

const ThreeScene = lazy(() => import('./HeroThreeScene'));

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#F7F7F5] pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16"
    >
      {/* Haikei Organic Blobs Background */}
      <HaikeiBlobs />

      {/* 3D WebGL Canvas Layer */}
      <div className="canvas-wrapper pointer-events-none" aria-hidden="true">
        <Suspense fallback={null}>
          <ThreeScene />
        </Suspense>
      </div>

      {/* Architectural Swiss grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          style={{
            position: 'absolute',
            left: '5vw',
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'rgba(8,11,114,0.06)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '5vw',
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'rgba(8,11,114,0.06)',
          }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-[6vw] my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Value Prop & CTAs */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            
            {/* Live Studio Status Pill */}
            <div
              className={`mb-6 sm:mb-8 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#080B72]/20 bg-white/70 backdrop-blur-md shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-mono font-medium tracking-wider text-[#080B72] uppercase">
                  Software & SaaS Innovation Studio · Available for New Projects
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-display text-[#080B72] tracking-tight">
                <TextReveal text="WE BUILD" as="span" delay={150} />
                <br />
                <TextReveal text="WHAT'S NEXT." as="span" delay={350} />
              </h1>
            </div>

            {/* Subtitle & Value Proposition */}
            <p
              className={`text-body text-[#05062F]/80 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed mb-8 transition-all duration-700 delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Technology, thoughtfully engineered. We design, architect, and scale
              intelligent software platforms, bespoke SaaS products, and high-performance
              automation systems that empower ambitious businesses to dominate.
            </p>

            {/* Capability Badges */}
            <div
              className={`flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8 sm:mb-10 transition-all duration-700 delay-400 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {['Bespoke SaaS Platforms', 'AI & Intelligent Systems', 'Distributed Web & Mobile', 'Workflow Automation'].map(
                (badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium text-[#080B72] bg-[#080B72]/5 border border-[#080B72]/15 hover:bg-[#080B72]/10 transition-colors"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto transition-all duration-700 delay-500 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                type="button"
                onClick={() => handleScroll('#products')}
                className="btn-primary group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm tracking-widest font-semibold uppercase rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <span>Explore Our Work</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 3v10M3 9l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => handleScroll('#contact')}
                className="btn-outline inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-sm tracking-widest font-semibold uppercase rounded-full transition-all"
              >
                <span>Start a Project</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column Spacer for the 3D Scene */}
          <div className="hidden lg:flex lg:col-span-4 items-center justify-center pointer-events-none" />
        </div>
      </div>

      {/* Bottom Bar: Trust Indicators + Interactive Scroll Prompter */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-[6vw] pt-8 sm:pt-10 border-t border-[#080B72]/10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Trust Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full md:w-auto">
            <div>
              <span className="block text-xl sm:text-2xl font-bold text-[#080B72] tracking-tight">10+</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#05062F]/60">Capabilities</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-bold text-[#080B72] tracking-tight">99.9%</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#05062F]/60">Architecture SLA</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-bold text-[#080B72] tracking-tight">Bespoke</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#05062F]/60">Engineering</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-bold text-[#080B72] tracking-tight">Cloud Native</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#05062F]/60">Scale Ready</span>
            </div>
          </div>

          {/* Magnetic Scroll To View Work Prompter */}
          <button
            type="button"
            onClick={() => handleScroll('#products')}
            className="group flex items-center gap-3 text-xs font-mono tracking-widest text-[#080B72] uppercase hover:opacity-80 transition-all self-center md:self-auto cursor-pointer"
            aria-label="Scroll down to view our work"
          >
            <span className="hidden sm:inline font-semibold">Scroll to View Work</span>
            <div className="w-7 h-11 rounded-full border-2 border-[#080B72]/30 flex items-start justify-center p-1.5 group-hover:border-[#080B72] transition-colors">
              <div className="w-1.5 h-2.5 rounded-full bg-[#080B72] animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
