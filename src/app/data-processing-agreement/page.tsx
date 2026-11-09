import { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';
import { LEGAL_DOCUMENTS } from '@/data/legal/legalNavigation';
import { DPA_SECTIONS } from '@/data/legal/dpaData';

const meta = LEGAL_DOCUMENTS.find((d) => d.slug === 'data-processing-agreement')!;

export const metadata: Metadata = {
  title: 'Data Processing Agreement (DPA) | TATAKAE LABS',
  description: 'Contractual template governing data processing relationships where Tatakae Labs processes personal data on behalf of enterprise clients under DPDP Act 2023.',
  alternates: {
    canonical: 'https://www.tatakaelabs.tech/data-processing-agreement',
  },
  openGraph: {
    title: 'Data Processing Agreement (DPA) | TATAKAE LABS',
    description: 'B2B data processing agreement aligned with India DPDP Act 2023 and global data protection standards.',
    url: 'https://www.tatakaelabs.tech/data-processing-agreement',
    siteName: 'TATAKAE LABS',
    type: 'website',
  },
};

export default function DPAPage() {
  return <LegalLayout meta={meta} sections={DPA_SECTIONS} />;
}

