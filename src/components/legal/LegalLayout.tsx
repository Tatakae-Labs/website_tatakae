'use client';

import React from 'react';
import Link from 'next/link';
import { LegalDocumentMeta, LegalSection, LEGAL_DOCUMENTS } from '@/data/legal/legalNavigation';
import LegalHeader from './LegalHeader';
import TableOfContents from './TableOfContents';
import LegalSectionRenderer from './LegalSectionRenderer';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

interface LegalLayoutProps {
  meta: LegalDocumentMeta;
  sections: LegalSection[];
}

export default function LegalLayout({ meta, sections }: LegalLayoutProps) {
  // Find current index to provide next/previous navigation
  const currentIndex = LEGAL_DOCUMENTS.findIndex((doc) => doc.slug === meta.slug);
  const prevDoc = currentIndex > 0 ? LEGAL_DOCUMENTS[currentIndex - 1] : null;
  const nextDoc = currentIndex < LEGAL_DOCUMENTS.length - 1 ? LEGAL_DOCUMENTS[currentIndex + 1] : null;

  return (
    <>
      <CustomCursor />
      <Navigation />

      <div className="min-h-screen bg-[#F7F7F5] text-[#05062F] pt-24 sm:pt-28 pb-20">
        {/* Top Document Switcher Strip - Sticky under fixed navigation */}
        <div className="border-y border-[#080B72]/10 bg-white/90 backdrop-blur-md sticky top-[64px] sm:top-[72px] z-30 print:hidden shadow-2xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 overflow-x-auto scrollbar-thin">
            <div className="flex items-center gap-2 text-xs font-mono whitespace-nowrap min-w-max">
              <span className="text-[#05062F]/40 uppercase text-[10px] tracking-wider mr-1">
                Legal Hub:
              </span>
              {LEGAL_DOCUMENTS.map((doc) => {
                const isActive = doc.slug === meta.slug;
                return (
                  <Link
                    key={doc.slug}
                    href={doc.href}
                    className={`px-3 py-1 rounded-full text-xs transition-colors ${isActive
                        ? 'bg-[#080B72] text-[#F7F7F5] font-semibold shadow-xs'
                        : 'text-[#05062F]/70 hover:text-[#080B72] hover:bg-[#080B72]/5'
                      }`}
                  >
                    {doc.shortTitle}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Container */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Sticky Table of Contents */}
            <aside className="lg:col-span-3 xl:col-span-3">
              <TableOfContents sections={sections} />
            </aside>

            {/* Right Column: Main Legal Content */}
            <article className="lg:col-span-9 xl:col-span-9">
              {/* Header with Title, Meta, and Print Action */}
              <LegalHeader meta={meta} />

              {/* Rendered Sections */}
              <LegalSectionRenderer sections={sections} />

              {/* Official Contact & Statutory Grievance Card */}
              <div className="mt-16 p-6 sm:p-8 rounded-xl bg-white border border-[#080B72]/15 shadow-xs">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#080B72]/10">
                  <div>
                    <h3 className="text-lg font-bold text-[#080B72] tracking-tight">
                      Statutory Inquiries & Grievance Redressal
                    </h3>
                    <p className="text-xs text-[#05062F]/70 mt-1">
                      Designated point of contact pursuant to Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 & Digital Personal Data Protection Act, 2023.
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#080B72]/10 text-[#080B72] text-xs font-mono">
                    INDIA COMPLIANCE
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-xs text-[#05062F]/80">
                  <div>
                    <p className="font-semibold text-[#080B72] uppercase tracking-wider text-[11px] mb-1">
                      General Legal & Contract Inquiries
                    </p>
                    <p className="text-sm font-medium text-[#05062F] mb-1">TATAKAE LABS Legal Desk</p>
                    <p>
                      Email:{' '}
                      <a href="mailto:tatakaelabs@gmail.com" className="text-[#080B72] font-mono hover:underline">
                        tatakaelabs@gmail.com
                      </a>
                    </p>
                    <p className="mt-1 text-[#05062F]/70">
                      Entity:{' '}
                      <span className="font-medium text-[#080B72]">TATAKAE LABS Technologies (CIN pending incorporation)</span>
                    </p>
                    <p className="text-[#05062F]/70">
                      Jurisdiction: Bengaluru, Karnataka, Republic of India
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-[#080B72] uppercase tracking-wider text-[11px] mb-1">
                      Designated Grievance Officer
                    </p>
                    <p className="text-sm font-medium text-[#05062F] mb-1">
                      Grievance Officer (Privacy & Data Protection)
                    </p>
                    <p>
                      Email:{' '}
                      <a href="mailto:tatakaelabs+grievance@gmail.com" className="text-[#080B72] font-mono hover:underline">
                        tatakaelabs+grievance@gmail.com
                      </a>
                    </p>
                    <p className="mt-1 text-[#05062F]/70">
                      Statutory Response: Acknowledgment within 24 hours, resolution within 15 days.
                    </p>
                    <p className="text-[#05062F]/70">
                      CERT-In Security Reporting:{' '}
                      <a href="mailto:tatakaelabs+security@gmail.com" className="text-[#080B72] font-mono hover:underline">
                        tatakaelabs+security@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#080B72]/10 text-[11px] text-[#05062F]/60">
                  <p>
                    <strong>Legal Notice:</strong> This documentation is an integral legal instrument of TATAKAE LABS. By accessing or using our websites, digital applications, SaaS platforms, or engaging our engineering consulting services, you signify your unreserved assent to the terms stipulated herein.
                  </p>
                </div>
              </div>

              {/* Document Navigation: Previous / Next */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#080B72]/10 print:hidden">
                {prevDoc ? (
                  <Link
                    href={prevDoc.href}
                    className="w-full sm:w-auto p-3 rounded-lg border border-[#080B72]/15 hover:border-[#080B72] bg-white transition-colors text-left group"
                  >
                    <span className="block text-[10px] font-mono text-[#05062F]/50 uppercase tracking-wider">
                      ← Previous Document
                    </span>
                    <span className="text-sm font-bold text-[#080B72] group-hover:underline">
                      {prevDoc.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}

                {nextDoc ? (
                  <Link
                    href={nextDoc.href}
                    className="w-full sm:w-auto p-3 rounded-lg border border-[#080B72]/15 hover:border-[#080B72] bg-white transition-colors text-right group ml-auto"
                  >
                    <span className="block text-[10px] font-mono text-[#05062F]/50 uppercase tracking-wider">
                      Next Document →
                    </span>
                    <span className="text-sm font-bold text-[#080B72] group-hover:underline">
                      {nextDoc.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </article>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
