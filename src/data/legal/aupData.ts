import { LegalSection } from './legalNavigation';

export const AUP_SECTIONS: LegalSection[] = [
  {
    id: 'purpose-and-scope',
    number: '01',
    title: 'Purpose, Scope, and Binding Applicability',
    content: [
      'This Acceptable Use Policy ("AUP") delineates the mandatory standards of conduct, operational restrictions, and security boundaries governing all users, organizations, developers, and automated agents accessing the websites, SaaS platforms, APIs, software deliverables, and digital networks operated by **TATAKAE LABS** ("Tatakae Labs", "we", "us").',
      'This AUP is designed to protect platform resilience, customer data privacy, network security, and compliance with the laws of the **Republic of India** and international standards.',
      'By utilizing our digital assets, you agree to comply unreservedly with this AUP. Any breach of this policy constitutes a material breach of the Master Terms and Conditions and may result in immediate suspension or permanent termination of access.',
    ],
  },
  {
    id: 'security-and-system-integrity',
    number: '02',
    title: 'Network Security and System Integrity Rules',
    content: [
      'Users are strictly prohibited from engaging in activities that compromise, disrupt, degrade, or probe our infrastructure. Prohibited actions include:',
      '• **Unauthorized Testing & Probing:** Port-scanning, vulnerability scanning, network mapping, penetration testing, or fuzzing our production servers without prior written authorization from Tatakae Labs Security.',
      '• **Denial of Service (DoS/DDoS):** Launching or facilitating volumetric attacks, SYN floods, application-layer HTTP floods, or consuming disproportionate network bandwidth.',
      '• **Reverse Engineering:** Decompiling, reverse assembling, disassembling, or extracting algorithms, neural weights, or proprietary software architectures from any Tatakae Labs platform or binary.',
      '• **Malware Distribution:** Injecting, uploading, or propagating viruses, worms, trojans, ransomware, rootkits, or malicious JavaScript payloads.',
      '• **Credential Abuse:** Conducting brute-force attacks, dictionary attacks, credential-stuffing campaigns, or session hijacking against any account or endpoint.',
    ],
  },
  {
    id: 'content-standards-and-statutory-compliance',
    number: '03',
    title: 'Content Standards and IT Rules Compliance',
    content: [
      'Users must not transmit, upload, publish, or store any content that violates Applicable Law or fails the content standards established under **Rule 3(1)(b) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021**.',
      'Specifically, you shall not host, display, upload, modify, publish, transmit, store, update, or share any information that:',
      '• Belongs to another person and to which the user does not have any right.',
      '• Is obscene, pornographic, pedophilic, invasive of another\'s privacy, insulting or harassing on the basis of gender, racially or ethnically objectionable, or promotes money laundering or gambling.',
      '• Is harmful to child welfare or infringes any patent, trademark, copyright, or other proprietary rights.',
      '• Deceives or misleads the addressee about the origin of the message or knowingly communicates false or misleading information.',
      '• Threatens the unity, integrity, defense, security, or sovereignty of India, friendly relations with foreign States, or public order.',
      '• Contains software viruses or any other computer code designed to interrupt, destroy, or limit computer resource functionality.',
    ],
  },
  {
    id: 'ai-acceptable-use-restrictions',
    number: '04',
    title: 'Artificial Intelligence Acceptable Use Constraints',
    content: [
      'Where utilizing Tatakae Labs AI capabilities (including automated assessment generation, prompt engineering environments, and intelligent workflow agents), users shall strictly adhere to the following AI safeguards:',
      '• **No Adversarial Prompt Injection:** You shall not attempt prompt injection, jailbreaking, or algorithmic subversion designed to bypass safety filters or system guardrails.',
      '• **No Prohibited AI Synthesis:** You shall not use our AI engines to generate:',
      '  - Cyber-attack tooling, automated exploit payloads, or malicious scripts.',
      '  - Deceptive content, deepfake synthesis, political misinformation, or mass disinformation campaigns.',
      '  - Content facilitating illegal weaponry manufacture, hazardous biological agents, or severe physical harm.',
      '  - Unlicensed medical diagnoses, statutory legal determinations, or regulated financial advice intended for automated reliance without human validation.',
      '• **Human Oversight:** You must implement human-in-the-loop validation for all high-stakes assessments, educational examinations, or enterprise-critical decisions assembled with AI assistance.',
    ],
    callout: {
      type: 'warning',
      title: 'Zero Tolerance for AI Abuse',
      text: 'Adversarial manipulation, jailbreak attacks, or synthesizing deceptive and illegal content using our AI endpoints will result in instantaneous API revocation and potential reporting to law enforcement authorities.',
    },
  },
  {
    id: 'api-usage-and-developer-rules',
    number: '05',
    title: 'API Usage, Rate Limits, and Developer Protocols',
    content: [
      'When integrating with Tatakae Labs developer APIs and programmatic endpoints:',
      '• **Secret Key Confidentiality:** API keys, secret tokens, and bearer credentials must be kept strictly confidential in server-side environment variables. Never commit secret credentials to client-side code, public GitHub repositories, or client bundles.',
      '• **Rate Limiting Adherence:** Clients must respect HTTP 429 (Too Many Requests) headers and implement exponential backoff retry algorithms. Circumventing rate limits through rotating proxies is strictly forbidden.',
      '• **No Reselling or Whitelabeling:** API access may not be resold, leased, or bundled into a competing multi-tenant commercial proxy service without an explicit enterprise partnership agreement.',
    ],
  },
  {
    id: 'enforcement-and-investigation',
    number: '06',
    title: 'Investigation, Enforcement, and Incident Reporting',
    content: [
      'Tatakae Labs reserves the right to monitor platform telemetry and audit usage patterns to ensure compliance with this AUP.',
      '• **Immediate Remediative Powers:** In the event of a verified or suspected violation, Tatakae Labs may:',
      '  - Issue formal compliance warnings.',
      '  - Quarantine, throttle, or rate-limit suspicious API keys or accounts.',
      '  - Temporarily suspend access pending remediation.',
      '  - Permanently terminate accounts for severe or repeated non-compliance.',
      '• **Statutory Escalation:** Severe security breaches, unauthorized system penetration, or cyber crimes will be formally reported to the **Indian Computer Emergency Response Team (CERT-In)** and relevant cyber crime police cells in accordance with Indian law.',
    ],
  },
  {
    id: 'reporting-violations',
    number: '07',
    title: 'Reporting AUP Violations and Security Incidents',
    content: [
      'If you discover or suspect an abuse of Tatakae Labs infrastructure, security vulnerability, or violation of this AUP, report it immediately to:',
      '• **TATAKAE LABS — Security & Trust Desk**',
      '• **Email:** `tatakaelabs+security@gmail.com`',
      '• **General Contact:** `support@tatakaelabs.tech`',
      '• We practice coordinated vulnerability disclosure and will acknowledge receipt within 24 hours.',
    ],
  },
];
