import { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';
import { LEGAL_DOCUMENTS } from '@/data/legal/legalNavigation';
import { AUP_SECTIONS } from '@/data/legal/aupData';

const meta = LEGAL_DOCUMENTS.find((d) => d.slug === 'acceptable-use-policy')!;

export const metadata: Metadata = {
  title: 'Acceptable Use Policy | TATAKAE LABS',
  description: 'Rules of conduct, security constraints, prohibited activities, and compliance boundaries for all platform users, developers, and API consumers.',
  alternates: {
    canonical: 'https://www.tatakaelabs.tech/acceptable-use-policy',
  },
  openGraph: {
    title: 'Acceptable Use Policy | TATAKAE LABS',
    description: 'System security rules, content standards under IT Rules 2021, and acceptable AI conduct at Tatakae Labs.',
    url: 'https://www.tatakaelabs.tech/acceptable-use-policy',
    siteName: 'TATAKAE LABS',
    type: 'website',
  },
};

export default function AUPPage() {
  return <LegalLayout meta={meta} sections={AUP_SECTIONS} />;
}
