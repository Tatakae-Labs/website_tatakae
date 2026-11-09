import { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';
import { LEGAL_DOCUMENTS } from '@/data/legal/legalNavigation';
import { TERMS_SECTIONS } from '@/data/legal/termsData';

const meta = LEGAL_DOCUMENTS.find((d) => d.slug === 'terms-and-conditions')!;

export const metadata: Metadata = {
  title: 'Terms and Conditions | TATAKAE LABS',
  description: 'Master legal agreement governing the use of Tatakae Labs website, SaaS products, software engineering services, and APIs under Indian Law.',
  alternates: {
    canonical: 'https://www.tatakaelabs.tech/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms and Conditions | TATAKAE LABS',
    description: 'Master legal agreement governing the use of Tatakae Labs website, SaaS products, and software engineering services.',
    url: 'https://www.tatakaelabs.tech/terms-and-conditions',
    siteName: 'TATAKAE LABS',
    type: 'website',
  },
};

export default function TermsPage() {
  return <LegalLayout meta={meta} sections={TERMS_SECTIONS} />;
}
