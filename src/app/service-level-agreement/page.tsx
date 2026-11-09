import { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';
import { LEGAL_DOCUMENTS } from '@/data/legal/legalNavigation';
import { SLA_SECTIONS } from '@/data/legal/slaData';

const meta = LEGAL_DOCUMENTS.find((d) => d.slug === 'service-level-agreement')!;

export const metadata: Metadata = {
  title: 'Service Level Agreement (SLA) | TATAKAE LABS',
  description: 'Service availability commitments, uptime metrics, incident response times, and support tiers for hosted SaaS platforms at Tatakae Labs.',
  alternates: {
    canonical: 'https://www.tatakaelabs.tech/service-level-agreement',
  },
  openGraph: {
    title: 'Service Level Agreement (SLA) | TATAKAE LABS',
    description: 'System uptime targets, severity triage, and operational resilience commitments for Tatakae Labs platforms.',
    url: 'https://www.tatakaelabs.tech/service-level-agreement',
    siteName: 'TATAKAE LABS',
    type: 'website',
  },
};

export default function SLAPage() {
  return <LegalLayout meta={meta} sections={SLA_SECTIONS} />;
}
