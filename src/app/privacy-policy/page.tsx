import { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';
import { LEGAL_DOCUMENTS } from '@/data/legal/legalNavigation';
import { PRIVACY_SECTIONS } from '@/data/legal/privacyData';

const meta = LEGAL_DOCUMENTS.find((d) => d.slug === 'privacy-policy')!;

export const metadata: Metadata = {
  title: 'Privacy Policy | TATAKAE LABS',
  description: 'Comprehensive disclosure of data collection, processing, DPDP Act 2023 compliance, data principal rights, and security standards at Tatakae Labs.',
  alternates: {
    canonical: 'https://www.tatakaelabs.tech/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | TATAKAE LABS',
    description: 'Data protection standards and privacy governance under the DPDP Act 2023 and IT Act 2000.',
    url: 'https://www.tatakaelabs.tech/privacy-policy',
    siteName: 'TATAKAE LABS',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return <LegalLayout meta={meta} sections={PRIVACY_SECTIONS} />;
}
