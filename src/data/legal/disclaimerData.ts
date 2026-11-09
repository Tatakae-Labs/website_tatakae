import { LegalSection } from './legalNavigation';

export const DISCLAIMER_SECTIONS: LegalSection[] = [
  {
    id: 'general-informational-disclaimer',
    number: '01',
    title: 'General Informational and Editorial Disclaimer',
    content: [
      'The materials, architectural blueprints, case studies, technology descriptions, and informational content published on `https://www.tatakaelabs.tech` and affiliated digital properties by **TATAKAE LABS** ("Tatakae Labs", "we", "us") are provided solely for general informational, educational, and commercial orientation purposes.',
      'While we endeavor to present accurate, current, and technically sound information, we make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose.',
      'Any reliance you place on such informational content is strictly at your own legal and commercial risk.',
    ],
  },
  {
    id: 'ai-outputs-disclaimer',
    number: '02',
    title: 'Artificial Intelligence Outputs and Algorithmic Analysis',
    content: [
      'Certain software features and automated modules engineered by Tatakae Labs (including AI Question Studio, prompt-driven exam synthesis, and workflow automations) leverage probabilistic artificial intelligence models and large language models (LLMs).',
      '• **Non-Deterministic Outputs:** Machine learning models are inherently probabilistic and non-deterministic. Outputs may on occasion contain factual inaccuracies, unintended algorithmic biases, incomplete logic, or hallucinations.',
      '• **No Academic, Legal, or Certified Guarantee:** AI-synthesized examination questions, grading rationales, technical summaries, or code snippets do NOT constitute certified academic curriculum standards, official statutory examination solutions, professional legal counsel, or certified engineering stamps.',
      '• **Mandatory Human Verification:** Users and client institutions bear exclusive responsibility for reviewing, fact-checking, and verifying all AI-generated content with qualified human domain specialists prior to institutional release, grading, or production deployment.',
    ],
    callout: {
      type: 'warning',
      title: 'Human Validation Imperative',
      text: 'AI-generated assessment materials, test questions, and automated code outputs must always be validated by qualified human professionals before deployment in examination or production settings.',
    },
  },
  {
    id: 'in-development-products-disclaimer',
    number: '03',
    title: 'Pre-Release Products, Concepts, and Roadmap Disclaimers',
    content: [
      'Our digital catalog features software products in various phases of engineering lifecycle:',
      '• **"In Development" / "Concept" Products:** Products designated on our website as "In Development", "Concept", "Preview", or "Alpha" (such as early builds of Assessment Engine, CRM Platform, BusinessOS, BookingFlow, and FlowAutomate) are works in active progress.',
      '• **Non-Binding Roadmaps:** Architectural descriptions, UI mockups, and feature projections represent current engineering aspirations and do not constitute binding contractual commitments or warranties regarding eventual commercial availability, features, or timelines.',
      '• Commercial commitments regarding software deliverables apply exclusively when formalized within an executed Statement of Work (SOW) or Enterprise SaaS Order.',
    ],
  },
  {
    id: 'no-professional-advice',
    number: '04',
    title: 'No Professional Legal, Financial, or Regulatory Advice',
    content: [
      'Content published by Tatakae Labs—including technical blog posts, architectural advisories, compliance summaries, and data security write-ups—does not constitute legal, tax, financial, or regulatory compliance advice.',
      'While our platform architectures incorporate compliance standards (such as the DPDP Act 2023), each enterprise client must consult its own qualified legal counsel and compliance advisors to ensure its specific business practices meet all statutory mandates.',
    ],
  },
  {
    id: 'third-party-links-disclaimer',
    number: '05',
    title: 'Third-Party Links, External Repositories, and Tools',
    content: [
      'Our website and documentation may provide hyperlinks to external third-party websites, open-source repositories, developer forums, or API documentation (e.g., GitHub, npm, Vercel, Google Cloud).',
      'These external links are provided solely for user convenience. Tatakae Labs exercises no operational or editorial control over external websites and assumes no liability or responsibility for their content, privacy policies, uptime, or security practices.',
    ],
  },
  {
    id: 'no-warranties-and-as-is',
    number: '06',
    title: '"AS-IS" and "AS-AVAILABLE" Service Provision',
    content: [
      'To the fullest extent permitted by the laws of the Republic of India, the website, digital tools, downloadable materials, and software demonstrations are provided strictly on an **"AS IS"** and **"AS AVAILABLE"** basis without warranties of any kind.',
      'Tatakae Labs explicitly disclaims all statutory and implied warranties, including implied warranties of merchantability, fitness for a particular purpose, non-infringement, security, and continuous uninterrupted operation.',
    ],
  },
  {
    id: 'statutory-jurisdiction-and-inquiries',
    number: '07',
    title: 'Statutory Jurisdiction and Communications',
    content: [
      'This Disclaimer is governed exclusively by the laws of the **Republic of India**.',
      'If you have questions regarding the terms or scope of this Disclaimer, you may contact our legal desk at `tatakaelabs@gmail.com`.',
    ],
  },
];
