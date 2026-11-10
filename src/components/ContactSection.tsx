'use client';

import { useRef, useEffect, useState } from 'react';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    [titleRef.current, formRef.current].forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setTimeout(() => {
              el.style.transition = `opacity 0.8s ease ${i * 0.15}s, transform 0.8s ease ${i * 0.15}s`;
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, 50);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    });
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('support@tatakaelabs.tech');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding bg-[#F7F7F5] relative scroll-mt-12"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div ref={titleRef} className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#080B72]/60">
                06 / Start a Project
              </span>
              <div className="flex-1 max-w-[80px] h-[1px] bg-[#080B72]/15" />
            </div>

            <h2 className="text-headline text-[#080B72] tracking-tight mb-8">
              HAVE AN IDEA?
              <br />
              LET&apos;S MAKE
              <br />
              IT REAL.
            </h2>

            <p className="text-body text-[#05062F]/70 mb-10 max-w-md text-base sm:text-lg leading-relaxed">
              Whether you have an architectural specification ready or just a concept
              looking for engineering guidance — let&apos;s build something exceptional together.
            </p>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              <div
                className="rounded-xl border border-[#080B72]/10 bg-white/70 backdrop-blur-xs transition-all hover:bg-white hover:border-[#080B72]/20 shadow-xs"
                style={{ padding: '22px 24px' }}
              >
                <span className="block text-[10px] font-mono uppercase tracking-widest text-[#080B72]/50 mb-1.5">
                  Direct Inquiries &amp; Project RFPs
                </span>
                <a
                  href="mailto:support@tatakaelabs.tech"
                  className="text-base sm:text-lg font-bold text-[#080B72] hover:underline"
                >
                  support@tatakaelabs.tech
                </a>
              </div>

              <div
                className="rounded-xl border border-[#080B72]/10 bg-white/70 backdrop-blur-xs transition-all hover:bg-white hover:border-[#080B72]/20 shadow-xs"
                style={{ padding: '22px 24px' }}
              >
                <span className="block text-[10px] font-mono uppercase tracking-widest text-[#080B72]/50 mb-1.5">
                  Global Availability &amp; Response Time
                </span>
                <p className="text-sm font-medium text-[#05062F]">
                  Operating from Nagpur, India · Guaranteed reply within 24 hours
                </p>
              </div>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-6 mt-8">
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com' },
                { label: 'Twitter / X', href: 'https://x.com' },
                { label: 'GitHub', href: 'https://github.com' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono font-semibold tracking-wider uppercase text-[#080B72]/60 hover:text-[#080B72] transition-colors"
                >
                  {social.label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Right Column — Project Intake Coming Soon Card */}
          <div ref={formRef} className="lg:col-span-7">
            <div
              className="rounded-2xl bg-white border border-[#080B72]/15 shadow-sm relative overflow-hidden"
              style={{ padding: 'clamp(28px, 4vw, 48px)' }}
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase text-[#080B72] bg-[#080B72]/5 border border-[#080B72]/15">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Interactive Form · Coming Soon
                </span>
                <span className="text-[11px] font-mono text-[#080B72]/45 uppercase tracking-widest hidden sm:inline-block">
                  Direct Intake Portal
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#080B72] tracking-tight mb-3">
                Project Scoping Portal
              </h3>

              <p className="text-sm sm:text-base text-[#05062F]/75 leading-relaxed mb-8 max-w-xl">
                Our automated project scoping and intake engine is currently under active development.
                In the meantime, our core engineering team directly reviews briefs, specifications, and RFPs via email.
              </p>

              {/* Direct Email Action Box */}
              <div className="p-6 sm:p-7 rounded-xl border border-[#080B72]/15 bg-[#F7F7F5]/90 mb-8 transition-all hover:border-[#080B72]/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-[#080B72]/60 mb-1 font-semibold">
                      Direct Project Intake Channel
                    </span>
                    <a
                      href="mailto:support@tatakaelabs.tech?subject=Project%20Inquiry%20%E2%80%94%20TATAKAE%20LABS"
                      className="text-lg sm:text-xl font-bold text-[#080B72] hover:underline break-all"
                    >
                      support@tatakaelabs.tech
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="px-4 py-2 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider border border-[#080B72]/20 text-[#080B72] bg-white hover:bg-[#080B72] hover:text-white transition-all cursor-pointer shadow-xs"
                    >
                      {copied ? '✓ Copied' : 'Copy Email'}
                    </button>
                    <a
                      href="mailto:support@tatakaelabs.tech?subject=Project%20Inquiry%20%E2%80%94%20TATAKAE%20LABS"
                      className="btn-primary px-5 py-2 text-xs font-mono font-semibold uppercase tracking-wider cursor-pointer inline-flex items-center gap-2"
                    >
                      <span>Send Brief</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* What To Include - Maps directly to form fields */}
              <div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#080B72]/70 block mb-3.5">
                  Recommended Brief Particulars:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl border border-[#080B72]/10 bg-white/80">
                    <span className="font-mono text-xs font-bold text-[#080B72] block mb-1">
                      01 / Identity &amp; Company
                    </span>
                    <p className="text-xs text-[#05062F]/70 leading-relaxed">
                      Your full name, business email, and organization or company name.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-[#080B72]/10 bg-white/80">
                    <span className="font-mono text-xs font-bold text-[#080B72] block mb-1">
                      02 / Solution Category
                    </span>
                    <p className="text-xs text-[#05062F]/70 leading-relaxed">
                      SaaS platform, custom web/mobile app, AI/ML systems, or automation workflow.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-[#080B72]/10 bg-white/80">
                    <span className="font-mono text-xs font-bold text-[#080B72] block mb-1">
                      03 / Technical Requirements
                    </span>
                    <p className="text-xs text-[#05062F]/70 leading-relaxed">
                      Core architectural needs, integrations, existing tech stack, or problem statement.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-[#080B72]/10 bg-white/80">
                    <span className="font-mono text-xs font-bold text-[#080B72] block mb-1">
                      04 / Goals &amp; Timeline
                    </span>
                    <p className="text-xs text-[#05062F]/70 leading-relaxed">
                      Target delivery milestones, launch horizon, and expected scale.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom SLA Notice */}
              <div className="mt-8 pt-6 border-t border-[#080B72]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#080B72]/65">
                <span>Guaranteed reply within 24 business hours</span>
                <span className="hidden sm:inline">Operating from Nagpur, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
