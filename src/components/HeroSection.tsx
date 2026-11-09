'use client';

import { Suspense, lazy } from 'react';
import HaikeiBlobs from './HaikeiBlobs';
import TextReveal from './TextReveal';

const ThreeScene = lazy(() => import('./HeroThreeScene'));

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#F7F7F5]"
      style={{ paddingBottom: '80px' }}
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

      {/* Hero Content positioned comfortably in the lower viewport half */}
      <div className="relative z-10 section-padding pt-0" style={{ paddingTop: '0', paddingBottom: '0' }}>
        <div className="max-w-[1600px] mx-auto">
          {/* Status Tag */}
          <div className="mb-6 sm:mb-8">
            <span
              className="tag-pill"
              style={{
                color: '#080B72',
                borderColor: 'rgba(8,11,114,0.3)',
                background: 'rgba(8,11,114,0.04)',
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
              }}
            >
              ● Available for Projects · Est. 2024 · Software &amp; SaaS Innovation Studio
            </span>
          </div>

          {/* Headline with animated character reveal and guaranteed word spacing */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-display" style={{ color: '#080B72', maxWidth: '1050px' }}>
              <TextReveal text="WE BUILD" as="span" delay={150} />
              <br />
              <TextReveal text="WHAT'S NEXT." as="span" delay={400} />
            </h1>
          </div>

          {/* Subtitle + CTA row */}
          <div className="mt-8 sm:mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-10">
            <p
              className="text-body"
              style={{
                color: '#05062F',
                opacity: 0.75,
                maxWidth: '480px',
                fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
                lineHeight: 1.7,
              }}
            >
              Technology, thoughtfully engineered. We design, architect, and scale
              intelligent software platforms, bespoke SaaS products, and high-performance
              automation systems that empower ambitious businesses to dominate.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                type="button"
                className="btn-primary w-full sm:w-auto justify-center cursor-pointer"
                onClick={() => handleScroll('#products')}
              >
                <span>Explore Our Work</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              <button
                type="button"
                className="btn-outline w-full sm:w-auto justify-center cursor-pointer"
                onClick={() => handleScroll('#contact')}
              >
                <span>Let&apos;s Build Something</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator (desktop only) */}
      <button
        type="button"
        onClick={() => handleScroll('#products')}
        className="hidden md:flex absolute bottom-8 right-[5vw] flex-col items-center gap-3 z-10 cursor-pointer group bg-transparent border-0"
        aria-label="Scroll down to view our work"
      >
        <div
          style={{
            writingMode: 'vertical-rl',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.62rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            color: '#080B72',
            opacity: 0.45,
            textTransform: 'uppercase',
          }}
          className="group-hover:opacity-90 transition-opacity"
        >
          Scroll to View Work
        </div>
        <div style={{ width: '1px', height: '60px', background: 'rgba(8,11,114,0.2)', position: 'relative', overflow: 'hidden' }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '40%',
              background: '#080B72',
              animation: 'scrollDown 1.5s ease-in-out infinite',
            }}
          />
        </div>
        <style jsx>{`
          @keyframes scrollDown {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(250%); }
          }
        `}</style>
      </button>
    </section>
  );
}
