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
    role: 'AI & Machine Learning Engineer',
    discipline: 'Applied Intelligence',
    username: 'gloomingtwilight',
    githubUrl: 'https://github.com/gloomingtwilight',
    bio: 'Directing domain-specific LLM fine-tuning, autonomous agent reasoning meshes, and intelligent workflow pipelines that convert complex data into automated intelligence.',
    tags: ['Autonomous Agents', 'RAG Meshes', 'Applied ML'],
    initials: 'AD',
  },
  {
    name: 'Sparsh Khandagale',
    role: 'Full-Stack Systems Engineer',
    discipline: 'Software Engineering',
    username: 'Sparshkhandagale29',
    githubUrl: 'https://github.com/Sparshkhandagale29',
    bio: 'Engineering resilient modern web applications, high-performance API layers, and multi-tenant SaaS features with end-to-end type safety, speed, and clean code.',
    tags: ['Next.js & React', 'API Engineering', 'TypeScript'],
    initials: 'SK',
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
    name: 'Vedanti',
    role: 'Product & Frontend Engineer',
    discipline: 'Frontend & UI/UX',
    username: 'Vedvina',
    githubUrl: 'https://github.com/Vedvina',
    bio: 'Crafting accessible digital interfaces, complex SaaS workflows, and unified design systems with pixel-level mathematical precision and smooth interaction physics.',
    tags: ['Design Systems', 'Interactive UI', 'Client Apps'],
    initials: 'VD',
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
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl transition-all duration-400 cursor-default h-full w-full"
      style={{
        background: hovered ? '#080B72' : 'rgba(255, 255, 255, 0.85)',
        color: hovered ? '#F7F7F5' : '#05062F',
        border: `1px solid ${hovered ? '#080B72' : 'rgba(8, 11, 114, 0.12)'}`,
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 24px 44px -12px rgba(8, 11, 114, 0.28)' : '0 2px 10px -2px rgba(8, 11, 114, 0.04)',
      }}
    >
      <div>
        {/* Top Header: Avatar & Discipline Pill */}
        <div className="flex items-center justify-between mb-4">
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
            className="text-[10px] font-mono font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border transition-all truncate max-w-[160px]"
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
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1 leading-snug">
          {member.name}
        </h3>

        {/* Member Role */}
        <p
          className="text-[11px] font-mono font-semibold uppercase tracking-wider mb-3 transition-opacity leading-snug"
          style={{
            color: hovered ? '#818CF8' : '#080B72',
            opacity: hovered ? 1 : 0.85,
          }}
        >
          {member.role}
        </p>

        {/* Bio */}
        <p
          className="text-xs sm:text-sm leading-relaxed mb-4 font-light transition-opacity"
          style={{ opacity: hovered ? 0.85 : 0.65 }}
        >
          {member.bio}
        </p>

        {/* Specialty Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {member.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md border transition-all"
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

      {/* GitHub Link Action */}
      <div
        className="pt-4 border-t flex items-center justify-between mt-auto"
        style={{ borderColor: hovered ? 'rgba(247, 247, 245, 0.15)' : 'rgba(8, 11, 114, 0.08)' }}
      >
        <span
          className="text-[11px] font-mono transition-opacity"
          style={{ opacity: hovered ? 0.7 : 0.5 }}
        >
          GitHub
        </span>

        <a
          href={member.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider hover:underline transition-colors"
          style={{ color: hovered ? '#FFFFFF' : '#080B72' }}
        >
          <span>@{member.username}</span>
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
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

        {/* Team Grid: Balanced responsive grid (3 on top row, 2 centered on bottom row) */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-7 items-stretch">
          {teamMembers.map((member, i) => (
            <div
              key={member.username}
              className="w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)] flex"
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
