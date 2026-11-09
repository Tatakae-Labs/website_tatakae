'use client';

import { useRef, useEffect, useState } from 'react';

const products = [
  {
    name: 'CRM Platform',
    description:
      'An intelligent customer relationship management engine engineered for high-velocity sales teams. Streamline lead capture, automate follow-up sequences, and gain deep pipeline visibility.',
    category: 'Sales & Growth',
    status: 'In Development',
    statusColor: '#34D399',
    badge: 'Alpha Q2',
    tags: ['AI Lead Scoring', 'Pipeline Automation', 'Omnichannel Sync'],
  },
  {
    name: 'Assessment Engine',
    description:
      'Enterprise-grade examination, testing, and evaluation engine built for institutions and academies. Features adaptive question banks, real-time telemetry, and instant analytics.',
    category: 'EdTech & Testing',
    status: 'In Development',
    statusColor: '#60A5FA',
    badge: 'Beta Preview',
    tags: ['Adaptive Testing', 'Instant Grading', 'Psychometrics'],
  },
  {
    name: 'BusinessOS',
    description:
      'A unified operational cockpit unifying team bandwidth, project accounting, invoice generation, and operational milestones into one coherent, real-time command center.',
    category: 'Operations Suite',
    status: 'Concept Architecture',
    statusColor: '#9898A8',
    badge: 'Design Stage',
    tags: ['Resource Tracking', 'Financial Telemetry', 'Task Mesh'],
  },
  {
    name: 'BookingFlow',
    description:
      'Smart scheduling and reservation platform designed to eliminate no-shows and resource bottlenecks for service businesses through intelligent calendar sync and automated reminders.',
    category: 'Scheduling Engine',
    status: 'Concept Architecture',
    statusColor: '#9898A8',
    badge: 'Design Stage',
    tags: ['Real-Time Booking', 'Payment Gateways', 'Calendar Sync'],
  },
  {
    name: 'FlowAutomate',
    description:
      'Visual no-code automation canvas that bridges legacy software, internal databases, and third-party APIs to trigger complex operational workflows without manual code.',
    category: 'Workflow Automation',
    status: 'Concept Architecture',
    statusColor: '#9898A8',
    badge: 'Design Stage',
    tags: ['Visual Logic', 'API Orchestration', 'Event Webhooks'],
  },
];

function ProductCard({ product, index }: { product: (typeof products)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            el.style.transition = `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, 50);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  const handleInquire = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl transition-all duration-300"
      style={{
        background: hovered ? 'rgba(8, 11, 114, 0.45)' : 'rgba(255, 255, 255, 0.035)',
        border: `1px solid ${hovered ? 'rgba(247, 247, 245, 0.28)' : 'rgba(247, 247, 245, 0.1)'}`,
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 40px -15px rgba(0, 0, 0, 0.5)' : 'none',
      }}
    >
      <div>
        {/* Top Bar: Category Pill & Status Beacon */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase text-[#F7F7F5]/80 bg-white/5 border border-white/10">
            {product.category}
          </span>

          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: product.statusColor,
                boxShadow: product.status === 'In Development' ? `0 0 8px ${product.statusColor}` : 'none',
              }}
            />
            <span className="text-[10px] font-mono font-medium tracking-wider uppercase text-[#F7F7F5]/60">
              {product.badge}
            </span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F7F7F5] mb-3 group-hover:text-white transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-[#F7F7F5]/70 font-light mb-6">
          {product.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/5 text-[#F7F7F5]/75 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-xs font-mono tracking-wider uppercase text-[#F7F7F5]/50 group-hover:text-[#F7F7F5]/80 transition-colors">
          {product.status}
        </span>

        <button
          type="button"
          onClick={handleInquire}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white tracking-wider uppercase hover:underline cursor-pointer"
        >
          <span>Early Access</span>
          <svg
            className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="section-padding bg-[#05062F] relative overflow-hidden">
      {/* Subtle background architectural grid */}
      <div className="absolute inset-0 pointer-events-none opacity-5" aria-hidden="true">
        <div
          style={{
            backgroundImage:
              'linear-gradient(rgba(247,247,245,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(247,247,245,0.2) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Header */}
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[11px] font-mono tracking-widest uppercase font-semibold text-[#F7F7F5]/40">
                02 / Proprietary Products
              </span>
              <div className="flex-1 max-w-[80px] h-[1px] bg-white/15" />
            </div>
            <h2 className="text-headline text-[#F7F7F5] tracking-tight">
              A Growing
              <br />
              Ecosystem.
            </h2>
          </div>
          <p className="text-body text-[#F7F7F5]/60 max-w-md text-base sm:text-lg leading-relaxed">
            We are engineering a multi-product technology ecosystem. Each platform is crafted
            to solve foundational business challenges — precisely, beautifully, and at scale.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>

        {/* Bottom Note & CTA Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-xs font-mono text-[#F7F7F5]/50 uppercase tracking-wider">
              Continuous Roadmap: New platforms added quarterly under active R&D.
            </p>
          </div>
          <a
            href="#contact"
            className="text-xs font-mono font-semibold text-[#F7F7F5] uppercase tracking-wider hover:text-white underline"
          >
            Request Private Demo or Architecture SOW →
          </a>
        </div>
      </div>
    </section>
  );
}
