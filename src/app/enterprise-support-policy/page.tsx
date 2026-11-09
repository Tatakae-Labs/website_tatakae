import { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';
import { LEGAL_DOCUMENTS } from '@/data/legal/legalNavigation';
import { ENTERPRISE_SUPPORT_SECTIONS } from '@/data/legal/enterpriseSupportData';

const meta = LEGAL_DOCUMENTS.find((d) => d.slug === 'enterprise-support-policy')!;

export const metadata: Metadata = {
  title: 'Enterprise Support Policy | TATAKAE LABS',
  description: 'Dedicated support frameworks, escalation matrix, dedicated engineering response, and service channels for high-tier enterprise accounts at Tatakae Labs.',
  alternates: {
    canonical: 'https://www.tatakaelabs.tech/enterprise-support-policy',
  },
  openGraph: {
    title: 'Enterprise Support Policy | TATAKAE LABS',
    description: 'High-touch technical support, dedicated Slack channels, and incident response frameworks for Enterprise clients.',
    url: 'https://www.tatakaelabs.tech/enterprise-support-policy',
    siteName: 'TATAKAE LABS',
    type: 'website',
  },
};

export default function EnterpriseSupportPage() {
  return <LegalLayout meta={meta} sections={ENTERPRISE_SUPPORT_SECTIONS} />;
}
