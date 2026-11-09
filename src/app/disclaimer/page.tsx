
import { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';
import { LEGAL_DOCUMENTS } from '@/data/legal/legalNavigation';
import { DISCLAIMER_SECTIONS } from '@/data/legal/disclaimerData';

const meta = LEGAL_DOCUMENTS.find((d) => d.slug === 'disclaimer')!;

export const metadata: Metadata = {
  title: 'Website & Service Disclaimer | TATAKAE LABS',
  description: 'Legal limitations regarding informational materials, AI outputs, pre-release products, technical estimations, and third-party dependencies.',
  alternates: {
    canonical: 'https://www.tatakaelabs.tech/disclaimer',
  },
  openGraph: {
    title: 'Website & Service Disclaimer | TATAKAE LABS',
    description: 'Important legal notices, AI limitations, and product status disclaimers at Tatakae Labs.',
    url: 'https://www.tatakaelabs.tech/disclaimer',
    siteName: 'TATAKAE LABS',
    type: 'website',
  },
};

export default function DisclaimerPage() {
  return <LegalLayout meta={meta} sections={DISCLAIMER_SECTIONS} />;
}
