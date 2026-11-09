import { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';
import { LEGAL_DOCUMENTS } from '@/data/legal/legalNavigation';
import { REFUND_SECTIONS } from '@/data/legal/refundData';

const meta = LEGAL_DOCUMENTS.find((d) => d.slug === 'refund-policy')!;

export const metadata: Metadata = {
  title: 'Refund and Cancellation Policy | TATAKAE LABS',
  description: 'Rules governing SaaS subscription cancellations, billing cycles, custom development milestones, and refund eligibility at Tatakae Labs.',
  alternates: {
    canonical: 'https://www.tatakaelabs.tech/refund-policy',
  },
  openGraph: {
    title: 'Refund and Cancellation Policy | TATAKAE LABS',
    description: 'Commercial cancellation rules and refund eligibility criteria for SaaS platforms and software engineering services.',
    url: 'https://www.tatakaelabs.tech/refund-policy',
    siteName: 'TATAKAE LABS',
    type: 'website',
  },
};

export default function RefundPolicyPage() {
  return <LegalLayout meta={meta} sections={REFUND_SECTIONS} />;
}
