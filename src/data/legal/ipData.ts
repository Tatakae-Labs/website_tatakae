import { LegalSection } from './legalNavigation';

export const IP_SECTIONS: LegalSection[] = [
  {
    id: 'ip-overview-and-ownership',
    number: '01',
    title: 'Overview and Allocation of Intellectual Property',
    content: [
      'This Intellectual Property Policy ("IP Policy") sets forth the legal principles, rights allocation, and protection mechanisms maintained by **TATAKAE LABS** ("Tatakae Labs", "we", "us") regarding proprietary software, brand assets, custom client deliverables, and third-party open-source components.',
      'We recognize that clarity regarding Intellectual Property Rights (IPR) is vital in modern software engineering and enterprise SaaS engagements. This policy governs how intellectual property is created, assigned, licensed, and protected across all our commercial interactions.',
    ],
  },
  {
    id: 'tatakae-labs-proprietary-assets',
    number: '02',
    title: 'Tatakae Labs Proprietary Technology and Brand Assets',
    content: [
      '• **Core SaaS Platforms & Engines:** All right, title, and interest in and to our proprietary platforms (including Assessment Engine, CRM Platform, BusinessOS, BookingFlow, FlowAutomate), source code, database architectures, machine learning models, algorithms, and software compilers are the exclusive intellectual property of Tatakae Labs.',
      '• **Branding & Trademarks:** The name **TATAKAE LABS**, the emblem/logo, the brand slogan **"Technology · Intelligence · Scale"**, and all associated graphical identities, domain names (`tatakaelabs.tech`), and trade dress are proprietary marks of Tatakae Labs protected under the Trade Marks Act, 1999 and the Copyright Act, 1957 of India.',
      '• **Visual & Interactive Shaders:** Custom WebGL shaders, Three.js animation pipelines, 3D interactive graphics, and visual layouts published on our websites are proprietary artistic and software works protected by copyright.',
    ],
  },
  {
    id: 'client-data-and-proprietary-content',
    number: '03',
    title: 'Client Data and Client-Owned Assets',
    content: [
      '• **Unreserved Client Ownership:** The Client retains complete, absolute, and unreserved ownership of all proprietary data, examination questions, curriculum materials, customer databases, logos, trade secrets, and documentation uploaded or provided to Tatakae Labs.',
      '• **No Cross-Client Reuse:** Tatakae Labs will never reuse, repurpose, license, or expose proprietary Client Data or client examination questions to other customers or third parties.',
    ],
  },
  {
    id: 'bespoke-deliverables-vs-background-ip',
    number: '04',
    title: 'Bespoke Custom Deliverables vs. Background Frameworks',
    content: [
      'To provide unequivocal clarity in bespoke software engineering engagements governed by a Statement of Work (SOW):',
      '• **Custom Engineering Deliverables:** Upon receipt of full, final, and unconditional payment for milestones under an executed SOW, Tatakae Labs irrevocably assigns to the Client all copyright in the bespoke application code engineered exclusively for that Client.',
      '• **Tatakae Labs Background IP:** Tatakae Labs retains sole and perpetual ownership of all pre-existing software engines, utility libraries, common scaffolding, devops pipelines, and foundational architectural design patterns developed prior to or independently of the SOW ("Background IP").',
      '• **Perpetual Client License:** To ensure the Client can freely operate, maintain, and expand the custom software deliverable, Tatakae Labs grants the Client a **perpetual, irrevocable, worldwide, royalty-free, non-exclusive license** to utilize, execute, and modify the Background IP solely as integrated within the delivered custom software.',
    ],
    callout: {
      type: 'distinction',
      title: 'Bespoke Assignment vs. Reusable Frameworks',
      text: 'Clients own their unique business logic and custom source code. Foundational libraries and reusable design patterns remain licensed to the client perpetually, enabling seamless operation without restricting Tatakae Labs from utilizing generic software tools.',
    },
  },
  {
    id: 'open-source-software',
    number: '05',
    title: 'Open Source Software Integration and Licensing',
    content: [
      '• Our software engineering solutions may incorporate verified open-source software libraries (such as React, Next.js, Node.js, Tailwind CSS, PostgreSQL, and Linux kernel utilities).',
      '• Open-source components are distributed under their respective permissive licenses (e.g., MIT, Apache 2.0, BSD 2-Clause / 3-Clause).',
      '• Tatakae Labs adheres strictly to open-source licensing requirements, ensuring all copyright notices, license texts, and attribution disclaimers are preserved in deliverable software packages.',
    ],
  },
  {
    id: 'infringement-and-takedown-notice',
    number: '06',
    title: 'Copyright Infringement and Statutory Takedown Procedure',
    content: [
      'Tatakae Labs respects the intellectual property rights of others and responds to notices of alleged copyright infringement in accordance with the **Copyright Act, 1957** and **Rule 3(1)(d) of the Information Technology (Intermediary Guidelines) Rules, 2021**.',
      'If you believe that your copyrighted work has been copied or stored on our platforms in a manner constituting infringement, submit a formal written notice containing:',
      '• Identification of the copyrighted work claimed to have been infringed.',
      '• Identification of the material claimed to be infringing and its precise URL or location.',
      '• Contact coordinates of the complaining party (name, address, telephone, email).',
      '• A statement that the complaining party has a good-faith belief that use of the material is unauthorized.',
      '• A statement made under penalty of perjury that the information in the notification is accurate and that the notifier is authorized to act on behalf of the copyright owner.',
      'Submit infringement notifications to our Designated Grievance Desk at `tatakaelabs+grievance@gmail.com`. Upon receipt of a valid notice, we will investigate and take expeditious remediative action within thirty-six (36) hours.',
    ],
  },
  {
    id: 'brand-usage-guidelines',
    number: '07',
    title: 'Brand Usage Guidelines and Press Inquiries',
    content: [
      '• Third parties, partners, and media organizations may not use the Tatakae Labs logo, wordmark, or brand assets without prior written consent.',
      '• Clients and technology partners may reference Tatakae Labs as their technology studio or software provider using approved brand assets available upon request from `support@tatakaelabs.tech`.',
    ],
  },
];
