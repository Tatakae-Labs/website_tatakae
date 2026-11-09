import { LegalSection } from './legalNavigation';

export const ENTERPRISE_SUPPORT_SECTIONS: LegalSection[] = [
  {
    id: 'support-charter-and-purpose',
    number: '01',
    title: 'Enterprise Support Charter and Purpose',
    content: [
      'The **TATAKAE LABS Enterprise Support Policy** governs the premium operational, architectural, and technical support frameworks provided to enterprise-tier SaaS subscribers and high-impact engineering clients.',
      'Our enterprise support model is designed to deliver rapid incident remediation, direct senior engineering access, proactive system monitoring, and continuous architectural advisory to ensure zero-disruption operation of mission-critical systems.',
      'This policy operates in conjunction with our Service Level Agreement (SLA) and executed Enterprise Service Orders.',
    ],
  },
  {
    id: 'support-tier-matrix',
    number: '02',
    title: 'Support Tier Comparison Matrix',
    content: [
      'Tatakae Labs structures its technical support across three operational tiers:',
      '• **Standard Tier (Included with Basic SaaS & Pilot Accounts):**',
      '  - Support Channels: Email support desk (`tatakaelabs@gmail.com`).',
      '  - Availability: Monday to Friday, 09:30 AM – 06:30 PM IST.',
      '  - Initial Response Time: Within 12 to 24 business hours.',
      '• **Professional Tier (Growth SaaS & Standard Consulting Clients):**',
      '  - Support Channels: Priority email desk + web portal ticketing.',
      '  - Availability: Business hours with extended coverage.',
      '  - Initial Response Time: P1 within 2 hours; P2 within 6 hours.',
      '• **Enterprise Tier (Mission-Critical Accounts & Dedicated Custom Contracts):**',
      '  - Support Channels: 24/7/365 Emergency P1 hotline + Private Slack/Discord Connect channel + Dedicated Technical Account Manager (TAM).',
      '  - Initial Response Time: P1 within 1 hour (24/7); P2 within 4 hours.',
      '  - Architecture & Advisory: Quarterly Business Reviews (QBRs) and bi-weekly engineering syncs.',
    ],
  },
  {
    id: 'dedicated-channels-and-tam',
    number: '03',
    title: 'Dedicated Communication Channels and Technical Account Manager',
    content: [
      'Enterprise clients receive high-touch direct access to Tatakae Labs technical leadership:',
      '• **Named Technical Account Manager (TAM):** A dedicated senior systems engineer assigned to your account who possesses comprehensive knowledge of your architecture, deployment configurations, and operational workflows.',
      '• **Private Slack Connect / Discord Bridge:** A private, real-time communication channel linking your engineering team directly with our core engineering specialists for synchronous troubleshooting and consultation.',
      '• **Direct Telephonic Emergency Escalation:** Direct phone access for authorized client incident commanders during P1 critical system outages.',
    ],
  },
  {
    id: 'severity-response-and-rca',
    number: '04',
    title: 'Severity Response Protocols and Root Cause Analysis (RCA)',
    content: [
      '• **P1 Emergency Bridging:** Upon receipt of a P1 critical incident alert from an Enterprise client, Tatakae Labs initiates an immediate virtual incident bridge with senior infrastructure leads within sixty (60) minutes.',
      '• **Status Dispatch:** Continuous status updates are published every forty-five (45) minutes until service stability is restored.',
      '• **Comprehensive Root Cause Analysis (RCA):** For any P1 outage, our engineering team produces a formal, written RCA document within **five (5) business days**. The RCA details the root causal mechanism, timeline of events, immediate hotfix deployed, and permanent architectural preventative measures implemented.',
    ],
  },
  {
    id: 'proactive-monitoring-and-advisory',
    number: '05',
    title: 'Proactive Health Monitoring and Architecture Reviews',
    content: [
      'Enterprise support extends beyond reactive incident ticketing to include proactive systems governance:',
      '• **Automated Synthetic Health Probes:** 24/7 synthetic monitoring testing core API endpoints, database latency, and user journeys at 60-second intervals.',
      '• **Capacity & Performance Audits:** Periodic database query optimization, serverless cold-start analysis, and cloud cost efficiency reviews.',
      '• **Quarterly Business Reviews (QBR):** Executive technical briefings reviewing historical uptime, security posture, roadmap evolutions, and upcoming scalability milestones.',
    ],
  },
  {
    id: 'client-support-prerequisites',
    number: '06',
    title: 'Client Prerequisites for Enterprise Support',
    content: [
      'To maintain optimal enterprise support velocity, the client agrees to:',
      '• Designate up to three (3) certified **Authorized Support Contacts** empowered to log P1 critical tickets and approve production deployments.',
      '• Provide required diagnostic telemetry, error stack traces, and reproduction workflows promptly during active investigations.',
      '• Maintain modern client environments and adhere to recommended security updates and API version upgrades.',
    ],
  },
  {
    id: 'enterprise-activation-and-contact',
    number: '07',
    title: 'Enterprise Support Activation and Contacts',
    content: [
      'To upgrade your account to Enterprise Support or discuss customized engineering support schedules, contact:',
      '• **TATAKAE LABS — Enterprise Support Desk**',
      '• **Email:** `tatakaelabs@gmail.com`',
      '• **Critical Security Escalation:** `tatakaelabs+security@gmail.com`',
      '• **Headquarters:** Bengaluru / New Delhi, Republic of India',
    ],
  },
];
