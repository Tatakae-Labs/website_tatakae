import { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';
import { LEGAL_DOCUMENTS } from '@/data/legal/legalNavigation';
import { IP_SECTIONS } from '@/data/legal/ipData';

const meta = LEGAL_DOCUMENTS.find((d) => d.slug === 'intellectual-property-policy')!;

export const metadata: Metadata = {
  title: 'Intellectual Property Policy | TATAKAE LABS',
  description: 'Allocation of intellectual property rights across proprietary SaaS platforms, client custom code, open-source elements, trademarks, and copyright notices.',
  alternates: {
    canonical: 'https://www.tatakaelabs.tech/intellectual-property-policy',
  },
  openGraph: {
    title: 'Intellectual Property Policy | TATAKAE LABS',
    description: 'Ownership allocation between SaaS platforms, bespoke code deliverables, and brand assets at Tatakae Labs.',
    url: 'https://www.tatakaelabs.tech/intellectual-property-policy',
    siteName: 'TATAKAE LABS',
    type: 'website',
  },
};

export default function IPPage() {
  return <LegalLayout meta={meta} sections={IP_SECTIONS} />;
}
