import { Metadata } from 'next';
import LegalLayout from '@/components/legal/LegalLayout';
import { LEGAL_DOCUMENTS } from '@/data/legal/legalNavigation';
import { COOKIE_SECTIONS } from '@/data/legal/cookieData';

const meta = LEGAL_DOCUMENTS.find((d) => d.slug === 'cookie-policy')!;

export const metadata: Metadata = {
  title: 'Cookie Policy | TATAKAE LABS',
  description: 'Detailed explanation of cookie and local storage usage on Tatakae Labs websites and how users can manage preferences.',
  alternates: {
    canonical: 'https://www.tatakaelabs.tech/cookie-policy',
  },
  openGraph: {
    title: 'Cookie Policy | TATAKAE LABS',
    description: 'Learn about our privacy-first cookie policy and local storage practices.',
    url: 'https://www.tatakaelabs.tech/cookie-policy',
    siteName: 'TATAKAE LABS',
    type: 'website',
  },
};

export default function CookiePolicyPage() {
  return <LegalLayout meta={meta} sections={COOKIE_SECTIONS} />;
}
