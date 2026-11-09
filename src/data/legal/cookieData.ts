import { LegalSection } from './legalNavigation';

export const COOKIE_SECTIONS: LegalSection[] = [
  {
    id: 'what-are-cookies',
    number: '01',
    title: 'What Are Cookies and Web Storage Technologies?',
    content: [
      'Cookies are small alphanumeric text files placed on your computer, smartphone, or other digital device when you visit websites. They are widely utilized by online services to facilitate site functionality, retain user preferences, maintain session state, and deliver analytical diagnostics.',
      'In addition to HTTP cookies, modern web applications utilize related browser storage technologies including **HTML5 Local Storage (`localStorage`)**, **Session Storage (`sessionStorage`)**, and **IndexedDB**. Throughout this policy, references to "cookies" encompass these analogous browser caching and data persistence mechanisms.',
    ],
  },
  {
    id: 'our-cookie-philosophy',
    number: '02',
    title: 'Tatakae Labs Cookie Philosophy and Actual Website Status',
    content: [
      'At **TATAKAE LABS**, we design our public web architecture with a privacy-by-design ethos. We believe website visitors should be free from intrusive cross-site surveillance, invasive advertising trackers, and third-party data brokers.',
      '• **No Advertising or Behavioral Profiling Trackers:** The public website at `https://www.tatakaelabs.tech` does **NOT** deploy third-party advertising cookies, retargeting pixels (such as Meta Pixel or Google Ads Remarketing), or cross-domain user tracking engines.',
      '• **No Sale of Visitor Data:** We never monetize, package, or sell browser identifiers or website navigation trails.',
    ],
    callout: {
      type: 'info',
      title: 'Cookieless Public Experience',
      text: 'You can navigate the public marketing pages of Tatakae Labs without being subjected to commercial advertising cookies or persistent advertising trackers.',
    },
  },
  {
    id: 'categories-of-cookies',
    number: '03',
    title: 'Categories of Cookies and Storage We Utilize',
    content: [
      'The storage mechanisms utilized across Tatakae Labs digital assets fall into three distinct classifications:',
      '• **1. Strictly Necessary & Technical Storage:** Essential for the fundamental operation of the website. These enable secure HTTPS session verification, UI state hydration, and defensive rate-limiting. Without these, core portions of the platform cannot operate.',
      '• **2. Functional & Preference Storage:** Local storage items utilized to record your UI choices, such as dark/light display preferences, collapsed navigation states, or dismissing promotional modal notices.',
      '• **3. Technical Performance Telemetry:** Ephemeral performance counters measuring WebGL rendering performance, animation framerates, and client-side page load latency to ensure optimal multi-device responsiveness.',
    ],
  },
  {
    id: 'specific-storage-inventory',
    number: '04',
    title: 'Specific Storage Inventory and External Assets',
    content: [
      'The following specific browser elements and third-party network assets are engaged upon loading our site:',
      '• **Google Fonts (`fonts.googleapis.com` / `fonts.gstatic.com`):** Used to load our brand typography (Space Grotesk). When your browser fetches font binaries, standard HTTP headers (including client IP and user-agent) are received by Google’s edge CDN for asset delivery.',
      '• **`tatakae_ui_state` (Local Storage):** Stores transient client UI preferences, such as navigation bar state and dismissed notification banners.',
      '• **Session Identifiers (SaaS Applications Only):** When logged into customer portals (such as Assessment Engine), secure HTTP-Only, SameSite=Strict session tokens are deployed to maintain authenticated access.',
    ],
  },
  {
    id: 'managing-and-disabling-cookies',
    number: '05',
    title: 'Managing and Disabling Cookies via Browser Settings',
    content: [
      'You have complete sovereignty over cookie files stored on your local machine. Most modern web browsers allow you to review, block, or delete cookies via their configuration preferences:',
      '• **Google Chrome:** Settings → Privacy and Security → Third-party cookies.',
      '• **Mozilla Firefox:** Settings → Privacy & Security → Enhanced Tracking Protection.',
      '• **Apple Safari:** Preferences → Privacy → Block all cookies / Manage Website Data.',
      '• **Microsoft Edge:** Settings → Cookies and Site Permissions → Manage and delete cookies.',
      'Please note that if you choose to disable all cookies and local storage entirely, certain dynamic features of our SaaS dashboards or interactive visual shaders may function with diminished capability.',
    ],
  },
  {
    id: 'dnt-and-gpc-signals',
    number: '06',
    title: 'Do Not Track (DNT) and Global Privacy Control (GPC)',
    content: [
      'Some web browsers transmit "Do Not Track" (DNT) or "Global Privacy Control" (GPC) signals to visited websites. Because Tatakae Labs does not track visitors across third-party websites or engage in behavioral advertising, our platform already operates in harmony with the intent of DNT and GPC protocols.',
    ],
  },
  {
    id: 'policy-updates-and-contact',
    number: '07',
    title: 'Policy Updates and Contact Inquiries',
    content: [
      'We may update this Cookie Policy periodically to reflect enhancements in our digital platform or evolving statutory standards.',
      'For any questions regarding our storage practices, contact our compliance desk at `tatakaelabs@gmail.com` or write to our Grievance Officer at `tatakaelabs+grievance@gmail.com`.',
    ],
  },
];
