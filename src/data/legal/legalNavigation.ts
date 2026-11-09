export interface LegalDocumentMeta {
  slug: string;
  href: string;
  title: string;
  shortTitle: string;
  description: string;
  version: string;
  effectiveDate: string;
  lastUpdated: string;
  category: 'Core Terms' | 'Privacy & Data' | 'Operations & Support' | 'Policies & Disclaimers';
  documentCode: string;
}

export const LEGAL_DOCUMENTS: LegalDocumentMeta[] = [
  {
    slug: 'terms-and-conditions',
    href: '/terms-and-conditions',
    title: 'Terms and Conditions',
    shortTitle: 'Terms',
    description: 'Master contract governing the use of Tatakae Labs website, digital products, SaaS subscriptions, engineering services, and APIs.',
    version: '1.0.0',
    effectiveDate: 'November 1, 2024',
    lastUpdated: 'November 4, 2026',
    category: 'Core Terms',
    documentCode: 'TTL-LEG-TC-2026-V1',
  },
  {
    slug: 'privacy-policy',
    href: '/privacy-policy',
    title: 'Privacy Policy',
    shortTitle: 'Privacy',
    description: 'Comprehensive disclosure of data collection, processing, storage, data principal rights under India DPDP Act 2023, IT Act 2000, and security standards.',
    version: '1.0.0',
    effectiveDate: 'November 1, 2024',
    lastUpdated: 'November 4, 2026',
    category: 'Privacy & Data',
    documentCode: 'TTL-LEG-PP-2026-V1',
  },
  {
    slug: 'service-level-agreement',
    href: '/service-level-agreement',
    title: 'Service Level Agreement (SLA)',
    shortTitle: 'SLA',
    description: 'Service uptime metrics, maintenance procedures, incident severity levels, support targets, and customer responsibilities for hosted platforms.',
    version: '1.0.0',
    effectiveDate: 'November 1, 2024',
    lastUpdated: 'November 4, 2026',
    category: 'Operations & Support',
    documentCode: 'TTL-LEG-SLA-2026-V1',
  },
  {
    slug: 'cookie-policy',
    href: '/cookie-policy',
    title: 'Cookie Policy',
    shortTitle: 'Cookies',
    description: 'Detailed explanation of cookies, local storage technologies, purpose of usage, and how users can manage preferences.',
    version: '1.0.0',
    effectiveDate: 'November 1, 2024',
    lastUpdated: 'November 4, 2026',
    category: 'Privacy & Data',
    documentCode: 'TTL-LEG-CP-2026-V1',
  },
  {
    slug: 'refund-policy',
    href: '/refund-policy',
    title: 'Refund and Cancellation Policy',
    shortTitle: 'Refunds',
    description: 'Clear rules governing SaaS subscription cancellations, billing cycles, custom development milestones, chargebacks, and refund eligibility.',
    version: '1.0.0',
    effectiveDate: 'November 1, 2024',
    lastUpdated: 'November 4, 2026',
    category: 'Core Terms',
    documentCode: 'TTL-LEG-RP-2026-V1',
  },
  {
    slug: 'acceptable-use-policy',
    href: '/acceptable-use-policy',
    title: 'Acceptable Use Policy',
    shortTitle: 'AUP',
    description: 'Rules of conduct, security constraints, prohibited activities, and compliance boundaries for all platform users, developers, and API consumers.',
    version: '1.0.0',
    effectiveDate: 'November 1, 2024',
    lastUpdated: 'November 4, 2026',
    category: 'Policies & Disclaimers',
    documentCode: 'TTL-LEG-AUP-2026-V1',
  },
  {
    slug: 'disclaimer',
    href: '/disclaimer',
    title: 'Website & Service Disclaimer',
    shortTitle: 'Disclaimer',
    description: 'Important legal limitations regarding informational materials, AI outputs, pre-release products, technical estimations, and third-party dependencies.',
    version: '1.0.0',
    effectiveDate: 'November 1, 2024',
    lastUpdated: 'November 4, 2026',
    category: 'Policies & Disclaimers',
    documentCode: 'TTL-LEG-DISC-2026-V1',
  },
  {
    slug: 'data-processing-agreement',
    href: '/data-processing-agreement',
    title: 'Data Processing Agreement (DPA)',
    shortTitle: 'DPA',
    description: 'Contractual template governing data processing relationships where Tatakae Labs processes personal data on behalf of business clients.',
    version: '1.0.0',
    effectiveDate: 'November 1, 2024',
    lastUpdated: 'November 4, 2026',
    category: 'Privacy & Data',
    documentCode: 'TTL-LEG-DPA-2026-V1',
  },
  {
    slug: 'intellectual-property-policy',
    href: '/intellectual-property-policy',
    title: 'Intellectual Property Policy',
    shortTitle: 'IP Policy',
    description: 'Allocation of intellectual property rights across proprietary SaaS platforms, client custom code, open-source elements, trademarks, and copyright notices.',
    version: '1.0.0',
    effectiveDate: 'November 1, 2024',
    lastUpdated: 'November 4, 2026',
    category: 'Core Terms',
    documentCode: 'TTL-LEG-IPP-2026-V1',
  },
  {
    slug: 'enterprise-support-policy',
    href: '/enterprise-support-policy',
    title: 'Enterprise Support Policy',
    shortTitle: 'Enterprise Support',
    description: 'Dedicated support frameworks, escalation matrix, dedicated engineering response, and service channels for high-tier enterprise accounts.',
    version: '1.0.0',
    effectiveDate: 'November 1, 2024',
    lastUpdated: 'November 4, 2026',
    category: 'Operations & Support',
    documentCode: 'TTL-LEG-ESP-2026-V1',
  },
];

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  content: string[];
  subsections?: {
    id: string;
    number: string;
    title: string;
    content: string[];
  }[];
  callout?: {
    type: 'info' | 'warning' | 'review' | 'distinction';
    title: string;
    text: string;
  };
}
