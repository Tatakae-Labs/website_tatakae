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

  const handleInquire = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleInquire}
      className="group relative flex flex-col justify-between rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden w-full"
      style={{
        padding: '32px 28px 56px 28px',
        background: hovered ? '#080B72' : 'rgba(255, 255, 255, 0.85)',
        color: hovered ? '#F7F7F5' : '#05062F',
        border: `1px solid ${hovered ? '#080B72' : 'rgba(8, 11, 114, 0.12)'}`,
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 24px 44px -12px rgba(8, 11, 114, 0.28)' : '0 2px 10px -2px rgba(8, 11, 114, 0.04)',
      }}
    >
      <div>
        {/* Number Bar */}
        <div className="flex items-center justify-between mb-6">
          <span
            className="font-mono text-xs font-semibold tracking-widest uppercase transition-opacity"
            style={{ opacity: hovered ? 0.7 : 0.4 }}
          >
            {service.number}
          </span>
          <span
            className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border transition-all"
            style={{
              borderColor: hovered ? 'rgba(247, 247, 245, 0.25)' : 'rgba(8, 11, 114, 0.15)',
              color: hovered ? 'rgba(247, 247, 245, 0.85)' : 'rgba(8, 11, 114, 0.65)',
            }}
          >
            Capability
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-3 leading-snug transition-all ${hovered ? 'underline' : ''}`}>
          {service.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm sm:text-[0.95rem] leading-[1.75] mb-6 font-light transition-opacity sm:min-h-[72px]"
          style={{ opacity: hovered ? 0.85 : 0.65 }}
        >
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pr-14 sm:pr-16">
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

      {/* George Francis Docked Corner Arrow Badge */}
      <div
        className="absolute bottom-0 right-0 px-4 py-3 sm:px-5 sm:py-3.5 rounded-tl-2xl rounded-br-2xl flex items-center justify-center transition-all duration-300"
        style={{
          background: hovered ? '#FFFFFF' : '#080B72',
          color: hovered ? '#080B72' : '#FFFFFF',
          boxShadow: hovered ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className={`w-4 h-4 transform transition-transform duration-300 ${hovered ? 'translate-x-1' : ''}`}
        >
          <path
            fill="currentColor"
            d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
          />
        </svg>
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

        {/* Grid - Spacious layout with generous gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
