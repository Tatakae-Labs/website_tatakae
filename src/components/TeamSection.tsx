'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  discipline: string;
  username: string;
  githubUrl: string;
  bio: string;
  tags: string[];
  initials: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Rugved Kadu',
    role: 'Founder & Principal Systems Architect',
    discipline: 'Founder & Core Systems',
    username: 'rugvedkadu06',
    githubUrl: 'https://github.com/rugvedkadu06',
    bio: 'Architecting distributed cloud infrastructures, multi-tenant SaaS backbones, and mission-critical digital systems. Obsessed with high concurrency, clean abstractions, and scale.',
    tags: ['Distributed Systems', 'Cloud Native', 'Product Vision'],
    initials: 'RK',
  },
  {
    name: 'Abha Dhandre',
    role: 'Co-Founder',
    discipline: 'Co-Founder',
    username: 'gloomingtwilight',
    githubUrl: 'https://github.com/gloomingtwilight',
    bio: 'Co-founding the studio with a focus on AI strategy, domain-specific LLM fine-tuning, autonomous agent reasoning meshes, and intelligent workflow pipelines.',
    tags: ['Autonomous Agents', 'RAG Meshes', 'Applied ML'],
    initials: 'AD',
  },
  {
    name: 'Vedanti',
    role: 'Co-Founder',
    discipline: 'Co-Founder',
    username: 'Vedvina',
    githubUrl: 'https://github.com/Vedvina',
    bio: 'Co-founding the studio with a focus on crafting accessible digital interfaces, complex SaaS workflows, and unified design systems with precision and smooth interaction physics.',
    tags: ['Design Systems', 'Interactive UI', 'Client Apps'],
    initials: 'VD',
  },
  {
    name: 'Vedang Pathak',
    role: 'Cloud & DevOps Architect',
    discipline: 'Platform & Infra',
    username: 'Vedang1710',
    githubUrl: 'https://github.com/Vedang1710',
    bio: 'Overseeing automated zero-downtime CI/CD delivery pipelines, container orchestration, multi-region cloud resilience, and continuous architectural reliability.',
    tags: ['Kubernetes', 'CI/CD Automation', 'Cloud Reliability'],
    initials: 'VP',
  },
  {
    name: 'Sparsh Khandagale',
    role: 'Product Outreach & GTM',
    discipline: 'Outreach & GTM',
    username: 'Sparshkhandagale29',
    githubUrl: 'https://github.com/Sparshkhandagale29',
    bio: 'Driving product outreach, go-to-market strategy, and client acquisition. Connecting engineering capabilities with market opportunities through strategic positioning.',
    tags: ['Go-To-Market', 'Product Strategy', 'Outreach'],
    initials: 'SK',
  },
];

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
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
      className="group relative flex flex-col justify-between p-8 sm:p-9 lg:p-10 pb-16 sm:pb-18 rounded-2xl transition-all duration-300 cursor-default h-full w-full overflow-hidden"
      style={{
        background: hovered ? '#080B72' : 'rgba(255, 255, 255, 0.85)',
        color: hovered ? '#F7F7F5' : '#05062F',
        border: `1px solid ${hovered ? '#080B72' : 'rgba(8, 11, 114, 0.12)'}`,
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 24px 44px -12px rgba(8, 11, 114, 0.28)' : '0 2px 10px -2px rgba(8, 11, 114, 0.04)',
      }}
    >
      <div>
        {/* Top Header: Avatar & Discipline Pill */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div
            className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center font-mono font-bold text-sm tracking-wider transition-all relative flex-shrink-0"
            style={{
              background: hovered ? 'rgba(247, 247, 245, 0.15)' : 'rgba(8, 11, 114, 0.08)',
              color: hovered ? '#FFFFFF' : '#080B72',
              border: `1px solid ${hovered ? 'rgba(247, 247, 245, 0.25)' : 'rgba(8, 11, 114, 0.15)'}`,
            }}
          >
            {!imageError ? (
              <Image
                src={`https://github.com/${member.username}.png`}
                alt={member.name}
                width={48}
                height={48}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
                unoptimized
              />
            ) : (
              <span>{member.initials}</span>
            )}
          </div>

          <span
            className="text-[10px] font-mono font-semibold tracking-wider uppercase px-3 py-1 rounded-full border transition-all whitespace-nowrap"
            style={{
              borderColor: hovered ? 'rgba(247, 247, 245, 0.25)' : 'rgba(8, 11, 114, 0.15)',
              color: hovered ? 'rgba(247, 247, 245, 0.85)' : 'rgba(8, 11, 114, 0.65)',
              background: hovered ? 'rgba(247, 247, 245, 0.06)' : 'rgba(8, 11, 114, 0.02)',
            }}
          >
            {member.discipline}
          </span>
        </div>

        {/* Member Name */}
        <h3 className={`text-2xl sm:text-[1.65rem] font-bold tracking-tight mb-2 leading-snug transition-all ${hovered ? 'underline' : ''}`}>
          {member.name}
        </h3>

        {/* Member Role */}
        <p
          className="text-xs font-mono font-semibold uppercase tracking-wider mb-4 transition-opacity leading-snug"
          style={{
            color: hovered ? '#818CF8' : '#080B72',
            opacity: hovered ? 1 : 0.85,
          }}
        >
          {member.role}
        </p>

        {/* Bio */}
        <p
          className="text-sm sm:text-[0.95rem] leading-[1.75] mb-6 font-light transition-opacity"
          style={{ opacity: hovered ? 0.85 : 0.65 }}
        >
          {member.bio}
        </p>

        {/* Specialty Tags */}
        <div className="flex flex-wrap gap-2 pr-28 sm:pr-36">
          {member.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md border transition-all"
              style={{
                borderColor: hovered ? 'rgba(247, 247, 245, 0.25)' : 'rgba(8, 11, 114, 0.12)',
                color: hovered ? '#F7F7F5' : '#080B72',
                background: hovered ? 'rgba(247, 247, 245, 0.08)' : 'rgba(8, 11, 114, 0.02)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* George Francis Docked Corner Arrow Badge */}
      <a
        href={member.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${member.name} on GitHub`}
        className="absolute bottom-0 right-0 px-4 py-3 sm:px-5 sm:py-3.5 rounded-tl-2xl rounded-br-2xl flex items-center gap-2 transition-all duration-300 cursor-pointer"
        style={{
          background: hovered ? '#FFFFFF' : '#080B72',
          color: hovered ? '#080B72' : '#FFFFFF',
          boxShadow: hovered ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none',
        }}
      >
        <span className="text-[11px] font-mono font-semibold tracking-wider">
          @{member.username}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className={`w-3.5 h-3.5 transform transition-transform duration-300 ${hovered ? 'translate-x-1' : ''}`}
        >
          <path
            fill="currentColor"
            d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
          />
        </svg>
      </a>
    </div>
  );
}

export default function TeamSection() {
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
    <section id="team" className="section-padding bg-[#F7F7F5] relative">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#080B72]/60">
                05 / Leadership &amp; Engineering Team
              </span>
              <div className="flex-1 max-w-[80px] h-[1px] bg-[#080B72]/15" />
            </div>
            <h2 className="text-headline text-[#080B72] tracking-tight">
              The Architects
              <br />
              Behind The Vision.
            </h2>
          </div>
          <p className="text-body text-[#05062F]/70 max-w-md text-base sm:text-lg leading-relaxed">
            A multidisciplinary collective of systems architects, AI engineers, and product designers
            dedicated to crafting intelligent software with engineering rigor and real-world scale.
          </p>
        </div>

        {/* Team Grid: Balanced responsive grid (3 on top row, 2 centered on bottom row) with generous gaps */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10 items-stretch">
          {teamMembers.map((member, i) => (
            <div
              key={member.username}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.75rem)] flex"
            >
              <TeamCard member={member} index={i} />
            </div>
          ))}
        </div>

        {/* Culture / Hiring Callout Banner */}
        <div className="mt-14 sm:mt-16 p-7 sm:p-9 rounded-2xl border border-[#080B72]/15 bg-white/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#080B72]/60 font-semibold block mb-1">
              Engineering Collective · Tatakae Labs
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-[#080B72] tracking-tight">
              Interested in collaborating or joining our ranks?
            </h4>
            <p className="text-xs sm:text-sm text-[#05062F]/70 mt-1 max-w-xl">
              We partner with ambitious software engineers, design architects, and researchers on high-impact projects.
            </p>
          </div>
          <a
            href="mailto:tatakaelabs@gmail.com?subject=Engineering%20Career%20Inquiry%20%E2%80%94%20TATAKAE%20LABS"
            className="btn-outline px-6 py-3 text-xs tracking-wider uppercase font-semibold whitespace-nowrap self-stretch sm:self-auto text-center cursor-pointer"
          >
            Join The Studio →
          </a>
        </div>
      </div>
    </section>
  );
}
