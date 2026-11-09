'use client';

import React, { useState } from 'react';
import { LegalSection } from '@/data/legal/legalNavigation';

interface LegalSectionRendererProps {
  sections: LegalSection[];
}

export default function LegalSectionRenderer({ sections }: LegalSectionRendererProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyAnchor = (id: string) => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}${window.location.pathname}#${id}`;
      navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    }
  };

  // Helper to render content blocks, lists, bold text, or inline formatting
  const renderParagraph = (text: string, pIdx: number) => {
    // Check if paragraph is a bullet list item
    if (text.startsWith('• ') || text.startsWith('- ')) {
      const content = text.slice(2);
      return (
        <li key={pIdx} className="ml-4 pl-2 text-[#05062F]/90 leading-relaxed list-disc">
          {renderFormattedInline(content)}
        </li>
      );
    }

    // Check if it's a sub-item indented
    if (text.startsWith('  - ') || text.startsWith('  • ')) {
      const content = text.slice(4);
      return (
        <li key={pIdx} className="ml-8 pl-2 text-[#05062F]/85 text-sm leading-relaxed list-[circle]">
          {renderFormattedInline(content)}
        </li>
      );
    }

    return (
      <p key={pIdx} className="text-[#05062F]/90 leading-relaxed mb-3 text-sm md:text-base">
        {renderFormattedInline(text)}
      </p>
    );
  };

  // Basic inline bold and code formatter
  const renderFormattedInline = (str: string) => {
    const parts = str.split(/(\*\*.*?\*\*|`.*?`)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={idx} className="font-semibold text-[#05062F]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code
            key={idx}
            className="font-mono text-xs bg-[#080B72]/10 text-[#080B72] px-1.5 py-0.5 rounded"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-36 pb-8 border-b border-[#080B72]/10 last:border-b-0"
        >
          {/* Section Heading Bar */}
          <div className="flex items-baseline justify-between gap-4 mb-4 group">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#080B72] flex items-baseline gap-3">
              <span className="font-mono text-sm md:text-base text-[#080B72]/60 font-semibold select-none">
                {section.number}
              </span>
              <span>{section.title}</span>
            </h2>

            <button
              onClick={() => handleCopyAnchor(section.id)}
              aria-label={`Copy link to section ${section.title}`}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-[#080B72]/60 hover:text-[#080B72] flex items-center gap-1 print:hidden"
              title="Copy anchor link"
            >
              {copiedId === section.id ? '✓ Copied' : '# Link'}
            </button>
          </div>

          {/* Callout Box if present */}
          {section.callout && (
            <div
              className={`my-4 p-4 rounded-lg border text-sm leading-relaxed ${
                section.callout.type === 'warning'
                  ? 'bg-amber-50/80 border-amber-300 text-amber-950'
                  : section.callout.type === 'review'
                  ? 'bg-purple-50/80 border-purple-300 text-purple-950'
                  : section.callout.type === 'distinction'
                  ? 'bg-indigo-50/80 border-indigo-300 text-indigo-950'
                  : 'bg-blue-50/80 border-blue-200 text-blue-950'
              }`}
            >
              <div className="flex items-center gap-2 font-semibold text-xs uppercase font-mono tracking-wider mb-1">
                <span>
                  {section.callout.type === 'warning' && '⚠️ Important Warning'}
                  {section.callout.type === 'review' && '⚖️ Legal Review Required'}
                  {section.callout.type === 'distinction' && '🔍 Scope Distinction'}
                  {section.callout.type === 'info' && 'ℹ️ Operational Context'}
                </span>
                <span className="opacity-70">— {section.callout.title}</span>
              </div>
              <p className="text-xs md:text-sm font-sans">{section.callout.text}</p>
            </div>
          )}

          {/* Section Main Content */}
          <div className="space-y-2 text-[#05062F]/90">
            {section.content.map((p, pIdx) => renderParagraph(p, pIdx))}
          </div>

          {/* Subsections if present */}
          {section.subsections && section.subsections.length > 0 && (
            <div className="mt-6 pl-3 sm:pl-5 border-l-2 border-[#080B72]/15 space-y-6">
              {section.subsections.map((sub) => (
                <div key={sub.id} id={sub.id} className="scroll-mt-36">
                  <div className="flex items-baseline justify-between gap-4 mb-2 group">
                    <h3 className="text-base md:text-lg font-semibold text-[#080B72] flex items-baseline gap-2">
                      <span className="font-mono text-xs text-[#080B72]/60 select-none">
                        {sub.number}
                      </span>
                      <span>{sub.title}</span>
                    </h3>
                    <button
                      onClick={() => handleCopyAnchor(sub.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-mono text-[#080B72]/60 hover:text-[#080B72] print:hidden"
                      title="Copy subsection anchor link"
                    >
                      {copiedId === sub.id ? '✓' : '#'}
                    </button>
                  </div>
                  <div className="space-y-1.5">
                    {sub.content.map((p, pIdx) => renderParagraph(p, pIdx))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
