'use client';

import { useRef, useEffect, useState } from 'react';

const services = [
  {
    number: '01',
    title: 'Software Engineering',
    description:
      'Custom-built software architectures and scalable digital platforms engineered for enterprise resilience, high concurrency, and long-term maintainability.',
    tags: ['Distributed Systems', 'Cloud Native', 'API Mesh'],
  },
  {
    number: '02',
    title: 'SaaS Product Development',
    description:
      'Turnkey development of multi-tenant cloud subscription products — from strategic ideation and architecture to production deployment and growth scale.',
    tags: ['Multi-Tenant', 'Billing Systems', 'Enterprise B2B'],
  },
  {
    number: '03',
    title: 'Web & Mobile Applications',
    description:
      'Ultra-responsive, accessible digital applications engineered across modern frameworks. Blazing fast, intuitively designed, and built to convert.',
    tags: ['React & Next.js', 'React Native', 'TypeScript'],
  },
  {
    number: '04',
    title: 'Business Automation',
    description:
      'Eliminating manual friction across corporate operations via intelligent workflow automation, robust data pipelines, and deep multi-platform integrations.',
    tags: ['Workflow Logic', 'Data Pipelines', 'ERP & CRM'],
  },
  {
    number: '05',
    title: 'AI & Intelligent Systems',
    description:
      'Purpose-built machine learning workflows, retrieval-augmented generation (RAG), and autonomous AI agent architectures delivering measurable ROI.',
    tags: ['Autonomous Agents', 'LLM Fine-Tuning', 'Applied ML'],
  },
  {
    number: '06',
    title: 'Product Design & Strategy',
    description:
      'Transforming ambitious concepts into intuitive, scalable digital interfaces through rigorous systems thinking, design systems, and rapid prototyping.',
    tags: ['Design Systems', 'UX Architecture', 'Prototyping'],
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            el.style.transition = `opacity 0.7s ease ${index * 0.08}s, transform 0.7s ease ${index * 0.08}s`;
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

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl transition-all duration-400 cursor-default h-full"
      style={{
        background: hovered ? '#080B72' : 'rgba(255, 255, 255, 0.75)',
        color: hovered ? '#F7F7F5' : '#05062F',
        border: `1px solid ${hovered ? '#080B72' : 'rgba(8, 11, 114, 0.12)'}`,
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 36px -12px rgba(8, 11, 114, 0.25)' : '0 2px 8px -2px rgba(8, 11, 114, 0.04)',
      }}
    >
      <div>
        {/* Number Bar */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="font-mono text-xs font-semibold tracking-widest uppercase transition-opacity"
            style={{ opacity: hovered ? 0.7 : 0.4 }}
          >
            {service.number}
          </span>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center transition-all"
            style={{
              background: hovered ? 'rgba(247, 247, 245, 0.15)' : 'rgba(8, 11, 114, 0.06)',
            }}
          >
            <svg
              className={`w-3.5 h-3.5 transform transition-transform ${hovered ? 'translate-x-0.5' : ''}`}
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 7h12M7 1l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-2.5 leading-snug">
          {service.title}
        </h3>

        {/* Description */}
        <p
          className="text-xs sm:text-sm leading-relaxed mb-5 font-light transition-opacity"
          style={{ opacity: hovered ? 0.85 : 0.65 }}
        >
          {service.description}
        </p>
      </div>

      {/* Tags */}
      <div
        className="flex flex-wrap gap-1.5 pt-4 border-t mt-auto"
        style={{ borderColor: hovered ? 'rgba(247, 247, 245, 0.15)' : 'rgba(8, 11, 114, 0.08)' }}
      >
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border transition-all"
            style={{
              borderColor: hovered ? 'rgba(247, 247, 245, 0.25)' : 'rgba(8, 11, 114, 0.15)',
              color: hovered ? '#F7F7F5' : '#080B72',
              background: hovered ? 'rgba(247, 247, 245, 0.08)' : 'rgba(8, 11, 114, 0.03)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ServicesSection() {
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
    <section id="services" className="section-padding bg-[#F7F7F5] relative">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#080B72]/60">
                01 / Capabilities &amp; Services
              </span>
              <div className="flex-1 max-w-[80px] h-[1px] bg-[#080B72]/15" />
            </div>
            <h2 className="text-headline text-[#080B72] tracking-tight">
              Our
              <br />
              Capabilities.
            </h2>
          </div>
          <p className="text-body text-[#05062F]/70 max-w-md text-base sm:text-lg leading-relaxed">
            A comprehensive, battle-tested engineering stack designed to take ideas from
            architectural concept to enterprise production with speed, precision, and discipline.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
