'use client';

import { useRef, useEffect, useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  discipline: string;
  bio: string;
  tags: string[];
  initials: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Rugved Kadu',
    role: 'Founder & Principal Systems Architect',
    discipline: 'Systems Architecture',
    bio: 'Architecting distributed cloud infrastructures, multi-tenant SaaS backbones, and mission-critical digital systems. Obsessed with performance, clean abstractions, and scale.',
    tags: ['Distributed Systems', 'Cloud Native', 'Product Vision'],
    initials: 'RK',
  },
  {
    name: 'AI & Research Core',
    role: 'Lead AI & Autonomous Systems Engineer',
    discipline: 'Applied Intelligence',
    bio: 'Directing domain-specific LLM fine-tuning, autonomous agent meshes, and intelligent workflow reasoning pipelines that drive real-world business automation.',
    tags: ['Autonomous Agents', 'RAG Meshes', 'Applied ML'],
    initials: 'AI',
  },
  {
    name: 'Product & Design Systems',
    role: 'Principal Product & UX Architect',
    discipline: 'Interface Design',
    bio: 'Crafting high-velocity digital experiences, complex enterprise dashboards, and mathematical design systems. Bridging user intuition with deep software utility.',
    tags: ['Design Systems', 'UX Architecture', 'Micro-Interactions'],
    initials: 'UX',
  },
  {
    name: 'Platform & Infrastructure',
    role: 'Senior Cloud & Reliability Engineer',
    discipline: 'Infrastructure & DevOps',
    bio: 'Overseeing container orchestration, multi-region database replication, zero-downtime CI/CD pipelines, and 99.9% architectural uptime targets.',
    tags: ['Kubernetes', 'CI/CD Automation', 'Security & SLA'],
    initials: 'DE',
  },
];

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
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

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col justify-between p-8 sm:p-9 rounded-2xl transition-all duration-400 cursor-default h-full min-h-[380px]"
      style={{
        background: hovered ? '#080B72' : 'rgba(255, 255, 255, 0.75)',
        color: hovered ? '#F7F7F5' : '#05062F',
        border: `1px solid ${hovered ? '#080B72' : 'rgba(8, 11, 114, 0.12)'}`,
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 24px 44px -12px rgba(8, 11, 114, 0.28)' : '0 2px 10px -2px rgba(8, 11, 114, 0.04)',
      }}
    >
      <div className="flex flex-col flex-1">
        {/* Top Header: Monogram Avatar & Discipline Pill */}
        <div className="flex items-center justify-between mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-sm tracking-wider transition-all"
            style={{
              background: hovered ? 'rgba(247, 247, 245, 0.15)' : 'rgba(8, 11, 114, 0.08)',
              color: hovered ? '#FFFFFF' : '#080B72',
              border: `1px solid ${hovered ? 'rgba(247, 247, 245, 0.25)' : 'rgba(8, 11, 114, 0.15)'}`,
            }}
          >
            {member.initials}
          </div>

          <span
            className="text-[10px] font-mono font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border transition-all"
            style={{
              borderColor: hovered ? 'rgba(247, 247, 245, 0.25)' : 'rgba(8, 11, 114, 0.15)',
              color: hovered ? 'rgba(247, 247, 245, 0.85)' : 'rgba(8, 11, 114, 0.6)',
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
          className="text-xs font-mono font-semibold uppercase tracking-wider mb-4 transition-opacity"
          style={{
            color: hovered ? '#818CF8' : '#080B72',
            opacity: hovered ? 1 : 0.8,
          }}
        >
          {member.role}
        </p>

        {/* Bio */}
        <p
          className="text-sm leading-relaxed mb-6 font-light transition-opacity flex-1"
          style={{ opacity: hovered ? 0.85 : 0.65 }}
        >
          {member.bio}
        </p>
      </div>

      {/* Specialty Tags */}
      <div
        className="flex flex-wrap gap-1.5 pt-5 border-t mt-auto"
        style={{ borderColor: hovered ? 'rgba(247, 247, 245, 0.15)' : 'rgba(8, 11, 114, 0.08)' }}
      >
        {member.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono px-2.5 py-0.5 rounded-md border transition-all"
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
            A multidisciplinary collective of systems architects, AI researchers, and product engineers
            dedicated to crafting software with mathematical rigor and long-term utility.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Culture / Hiring Callout Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl border border-[#080B72]/15 bg-white/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#080B72]/60 font-semibold block mb-1">
              Engineering Culture · Studio Expansion
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-[#080B72] tracking-tight">
              Interested in engineering what&apos;s next?
            </h4>
            <p className="text-xs sm:text-sm text-[#05062F]/70 mt-1 max-w-xl">
              We collaborate with world-class engineers, designers, and AI researchers on high-impact systems.
            </p>
          </div>
          <a
            href="mailto:tatakaelabs@gmail.com?subject=Engineering%20Career%20Inquiry%20%E2%80%94%20TATAKAE%20LABS"
            className="btn-outline px-6 py-3 text-xs tracking-wider uppercase font-semibold whitespace-nowrap self-stretch sm:self-auto text-center"
          >
            Join The Studio →
          </a>
        </div>
      </div>
    </section>
  );
}

