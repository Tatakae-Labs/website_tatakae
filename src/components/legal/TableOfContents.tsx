'use client';

import React, { useEffect, useState } from 'react';
import { LegalSection } from '@/data/legal/legalNavigation';

interface TableOfContentsProps {
  sections: LegalSection[];
  activeId?: string;
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || '');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-140px 0px -55% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
      sec.subsections?.forEach((sub) => {
        const subEl = document.getElementById(sub.id);
        if (subEl) observer.observe(subEl);
      });
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -140;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Drawer Trigger Bar */}
      <div className="lg:hidden mb-8 sticky top-[124px] z-20 bg-[#F7F7F5]/95 backdrop-blur-md border border-[#080B72]/15 rounded-xl p-3 shadow-xs print:hidden">
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-between text-left text-xs font-mono font-semibold text-[#080B72] tracking-wider uppercase px-2 py-1 cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#080B72]" />
            Table of Contents ({sections.length} Sections)
          </span>
          <span>{isMobileOpen ? '▲ Close' : '▼ Jump to Section'}</span>
        </button>

        {isMobileOpen && (
          <div className="mt-3 pt-3 border-t border-[#080B72]/10 max-h-72 overflow-y-auto space-y-1">
            {sections.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => handleScrollTo(sec.id)}
                className={`w-full text-left py-1.5 px-2.5 rounded text-xs transition-colors flex items-center gap-2 cursor-pointer ${
                  activeId === sec.id
                    ? 'bg-[#080B72] text-[#F7F7F5] font-semibold'
                    : 'text-[#05062F]/80 hover:bg-[#080B72]/5'
                }`}
              >
                <span className="font-mono text-[10px] opacity-70 min-w-[20px]">{sec.number}</span>
                <span className="truncate">{sec.title}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Table of Contents */}
      <nav
        aria-label="Document Navigation"
        className="hidden lg:block sticky top-36 max-h-[calc(100vh-170px)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-[#080B72]/20 print:hidden"
      >
        <div className="pb-3 border-b border-[#080B72]/10 mb-4">
          <div className="text-[11px] font-mono tracking-widest text-[#080B72] uppercase font-bold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#080B72]" />
            Table of Contents
          </div>
          <p className="text-[11px] text-[#05062F]/60 mt-0.5">
            {sections.length} Indexed Sections
          </p>
        </div>

        <ul className="space-y-1 text-xs">
          {sections.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <li key={sec.id}>
                <button
                  type="button"
                  onClick={() => handleScrollTo(sec.id)}
                  className={`w-full text-left py-1.5 px-2.5 rounded-md transition-all flex items-start gap-2.5 group cursor-pointer ${
                    isActive
                      ? 'bg-[#080B72] text-[#F7F7F5] font-semibold shadow-xs translate-x-1'
                      : 'text-[#05062F]/75 hover:text-[#080B72] hover:bg-[#080B72]/5'
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] pt-0.5 transition-opacity ${
                      isActive ? 'text-[#F7F7F5]' : 'text-[#080B72]/60 group-hover:text-[#080B72]'
                    }`}
                  >
                    {sec.number}
                  </span>
                  <span className="leading-snug">{sec.title}</span>
                </button>

                {/* Subsections if active */}
                {isActive && sec.subsections && sec.subsections.length > 0 && (
                  <ul className="ml-5 mt-1 space-y-1 pl-2 border-l border-[#080B72]/20">
                    {sec.subsections.map((sub) => (
                      <li key={sub.id}>
                        <button
                          type="button"
                          onClick={() => handleScrollTo(sub.id)}
                          className="w-full text-left py-1 px-2 text-[11px] text-[#05062F]/70 hover:text-[#080B72] truncate rounded hover:bg-[#080B72]/5 transition-colors cursor-pointer"
                        >
                          {sub.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
