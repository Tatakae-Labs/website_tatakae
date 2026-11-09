'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LegalDocumentMeta } from '@/data/legal/legalNavigation';

interface LegalHeaderProps {
  meta: LegalDocumentMeta;
}

export default function LegalHeader({ meta }: LegalHeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <header className="mb-10 pb-8 border-b border-[#080B72]/15">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-4 text-xs font-mono text-[#080B72]/70 flex items-center gap-2 print:hidden">
        <Link href="/" className="hover:text-[#080B72] hover:underline font-semibold flex items-center gap-1">
          <span>←</span> TATAKAE LABS
        </Link>
        <span>/</span>
        <span className="text-[#05062F]/60">Legal Compliance</span>
        <span>/</span>
        <span className="text-[#080B72] font-semibold">{meta.shortTitle}</span>
      </nav>

      {/* Category & Status Pills */}
      <div className="flex flex-wrap items-center gap-2.5 mb-4">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-[#080B72]/10 text-[#080B72] uppercase">
          {meta.category}
        </span>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono tracking-wide bg-emerald-50 text-emerald-800 border border-emerald-200">
          ● Active Policy
        </span>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono text-[#05062F]/70 bg-white border border-[#080B72]/10">
          DOC ID: {meta.documentCode}
        </span>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono text-[#05062F]/70 bg-white border border-[#080B72]/10">
          JURISDICTION: INDIA
        </span>
      </div>

      {/* Main Document Title */}
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#080B72] mb-4">
        {meta.title}
      </h1>

      {/* Description */}
      <p className="text-base md:text-lg text-[#05062F]/80 max-w-3xl leading-relaxed mb-6">
        {meta.description}
      </p>

      {/* Metadata & Actions Grid */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#080B72]/10 bg-white/50 p-4 rounded-lg">
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:gap-6 text-xs text-[#05062F]/80 font-mono">
          <div>
            <span className="block text-[10px] text-[#05062F]/50 uppercase tracking-wider">Version</span>
            <span className="font-semibold text-[#080B72]">v{meta.version}</span>
          </div>
          <div>
            <span className="block text-[10px] text-[#05062F]/50 uppercase tracking-wider">Effective Date</span>
            <span className="font-semibold text-[#080B72]">{meta.effectiveDate}</span>
          </div>
          <div>
            <span className="block text-[10px] text-[#05062F]/50 uppercase tracking-wider">Last Revised</span>
            <span className="font-semibold text-[#080B72]">{meta.lastUpdated}</span>
          </div>
          <div>
            <span className="block text-[10px] text-[#05062F]/50 uppercase tracking-wider">Legal Framework</span>
            <span className="font-semibold text-[#080B72]">DPDP Act / IT Act 2000</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 self-start sm:self-auto print:hidden">
          <button
            onClick={handleCopyUrl}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-white border border-[#080B72]/20 hover:border-[#080B72] text-[#080B72] transition-colors shadow-2xs"
            title="Copy document URL to clipboard"
          >
            {copied ? '✓ Link Copied' : '🔗 Copy Link'}
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-[#080B72] hover:bg-[#05062F] text-white transition-colors shadow-2xs"
            title="Print or save as PDF"
          >
            🖨 Print / PDF
          </button>
        </div>
      </div>
    </header>
  );
}
