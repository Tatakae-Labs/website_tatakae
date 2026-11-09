import { LegalSection } from './legalNavigation';

export const DPA_SECTIONS: LegalSection[] = [
  {
    id: 'context-and-purpose',
    number: '01',
    title: 'Context, Scope, and Statutory Alignment',
    content: [
      'This Data Processing Agreement ("DPA") supplements the Master Terms and Conditions and governs the processing of personal data by **TATAKAE LABS** ("Data Processor" or "Processor") on behalf of commercial enterprise clients ("Data Fiduciary" or "Client" or "Controller") in connection with the provision of our SaaS platforms and engineering consulting services.',
      'This DPA is formulated to fulfill the statutory requirements of the **Digital Personal Data Protection Act, 2023 ("DPDP Act 2023")** and the **Information Technology Act, 2000 ("IT Act 2000")** of the Republic of India.',
      'In the event of any conflict between the provisions of this DPA and the Master Terms and Conditions, the provisions of this DPA shall prevail with respect to the processing of Personal Data.',
    ],
    callout: {
      type: 'info',
      title: 'Data Fiduciary vs. Data Processor',
      text: 'Under the DPDP Act 2023, the Client determines the purpose and means of processing (Data Fiduciary), while Tatakae Labs processes personal data solely on behalf of and pursuant to the documented instructions of the Client (Data Processor).',
    },
  },
  {
    id: 'details-of-processing',
    number: '02',
    title: 'Specification of Data Processing Activities',
    content: [
      'The particulars of processing Personal Data under this Agreement are defined as follows:',
      '• **Subject-Matter:** The provision of hosted software-as-a-service (SaaS) platforms, examination systems, CRM architectures, and custom engineering support as requested by the Client.',
      '• **Duration of Processing:** The term of the underlying Master Agreement plus the period until all Client Personal Data is securely purged or returned.',
      '• **Nature and Purpose:** Cloud hosting, database indexing, user authentication, automated assessment compilation, algorithmic grading computation, API dispatch, and technical support.',
      '• **Categories of Data Principals:** Client employees, system administrators, test-takers, students, end-customers, and authorized business users.',
      '• **Types of Personal Data:** Names, corporate email addresses, authentication credentials, organizational roles, test submissions, scoring performance, and technical session telemetry.',
    ],
  },
  {
    id: 'processor-obligations',
    number: '03',
    title: 'Obligations and Warranties of the Data Processor',
    content: [
      'Tatakae Labs warrants, represents, and agrees that it shall:',
      '• **Process on Documented Instructions:** Process Personal Data solely in accordance with the documented instructions of the Client, including with respect to data transfers, unless required to do so by applicable Indian law.',
      '• **Personnel Confidentiality:** Ensure that all engineers, developers, and personnel authorized to access Personal Data have committed themselves to strict contractual confidentiality and data protection obligations.',
      '• **Technical Safeguards:** Implement and maintain robust Technical and Organizational Measures (TOMs) as detailed in Section 04 to ensure a level of security appropriate to the risks of data processing.',
      '• **Sub-processor Oversight:** Engage Sub-processors only in accordance with Section 05 and impose equivalent data protection obligations upon them.',
      '• **Assistance with Data Principal Rights:** Provide reasonable technical assistance to enable the Client to fulfill its statutory obligations to respond to Data Principal requests under Chapter III of the DPDP Act 2023.',
    ],
  },
  {
    id: 'technical-and-organizational-measures',
    number: '04',
    title: 'Technical and Organizational Security Measures (TOMs)',
    content: [
      'Tatakae Labs maintains stringent technical safeguards to secure Client Personal Data:',
      '• **Cryptographic Controls:** End-to-end TLS 1.3 encryption for data in transit; AES-256 cryptographic encryption for data at rest across persistent databases and encrypted object stores.',
      '• **Logical Separation:** Strong multi-tenant logical partitioning ensuring complete isolation of Client Data across database rows, schemas, and API access tokens.',
      '• **Access Controls & IAM:** Strict Role-Based Access Control (RBAC), multi-factor authentication (MFA), ephemeral session tokens, and automated session invalidation.',
      '• **Vulnerability Management:** Regular static code analysis, third-party dependency vulnerability patching, and automated container scanning in CI/CD pipelines.',
      '• **Audit Logging:** Immutably preserved administrative audit trails tracking system configuration and data access events.',
    ],
  },
  {
    id: 'sub-processors',
    number: '05',
    title: 'Sub-processors and Third-Party Infrastructure',
    content: [
      '• **General Authorization:** The Client hereby provides general written authorization for Tatakae Labs to engage verified third-party cloud infrastructure sub-processors (e.g., AWS, GCP, Vercel, Razorpay, OpenAI Enterprise).',
      '• **Sub-processor Agreements:** Tatakae Labs binds each sub-processor to written agreements imposing data protection standards no less protective than those stipulated in this DPA.',
      '• **Notification of Changes:** Tatakae Labs will maintain an up-to-date schedule of sub-processors and notify the Client electronically of any intended additions or replacements, affording the Client ten (10) business days to object on reasonable data protection grounds.',
      '• **Liability:** Tatakae Labs remains responsible to the Client for the performance of its sub-processors’ data protection obligations.',
    ],
  },
  {
    id: 'data-breach-notification-dpa',
    number: '06',
    title: 'Security Incident and Breach Notification Procedures',
    content: [
      '• **Immediate Breach Notice:** Upon becoming aware of a confirmed personal data breach affecting Client Personal Data, Tatakae Labs will notify the Client without undue delay (and in any event within **twenty-four (24) hours** of confirmation).',
      '• **Information Provided:** The breach notice will specify the nature of the breach, categories and approximate numbers of data principals impacted, likely consequences, and remediation measures initiated.',
      '• **Regulatory Support:** Tatakae Labs will cooperate with the Client in fulfilling its mandatory breach reporting obligations to the **Data Protection Board of India (DPBI)** and **CERT-In**.',
    ],
  },
  {
    id: 'data-return-and-deletion',
    number: '07',
    title: 'Data Deletion, Return, and Sanitization at Contract Conclusion',
    content: [
      '• Upon termination or expiration of the Master Agreement, Tatakae Labs shall, at the choice of the Client, securely return or permanently delete all Client Personal Data in its possession.',
      '• **Purge Horizon:** Deletion will be completed within thirty (30) calendar days of formal termination, utilizing digital data sanitization standards.',
      '• **Statutory Retention Exception:** Tatakae Labs may retain data records strictly to the extent required by Indian law (such as GST audit records or CERT-In security logs), which shall remain confidential and protected until statutory retention periods expire.',
    ],
  },
  {
    id: 'audit-rights-and-compliance-verification',
    number: '08',
    title: 'Audit Rights and Compliance Verification',
    content: [
      '• To verify compliance with this DPA, Tatakae Labs will make available to the Client reasonable technical documentation, architecture summaries, and third-party security audit reports.',
      '• If a formal on-site or virtual audit is mandated by a competent regulatory authority, it shall be conducted during normal business hours, upon thirty (30) days advance notice, subject to reasonable confidentiality protections and without disrupting other clients’ operations.',
    ],
  },
  {
    id: 'governing-law-dpa',
    number: '09',
    title: 'Governing Law and Jurisdiction',
    content: [
      'This Data Processing Agreement shall be governed by and construed in accordance with the laws of the **Republic of India**.',
      'Any disputes arising from or in connection with this DPA shall be subject to the exclusive jurisdiction of the courts located in **Bengaluru, Karnataka, India**.',
    ],
  },
];
