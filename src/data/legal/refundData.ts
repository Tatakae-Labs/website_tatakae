import { LegalSection } from './legalNavigation';

export const REFUND_SECTIONS: LegalSection[] = [
  {
    id: 'policy-overview',
    number: '01',
    title: 'Policy Scope and Commercial Framework',
    content: [
      'This Refund and Cancellation Policy governs all commercial transactions executed with **TATAKAE LABS** ("Tatakae Labs", "we", "us"), including recurring SaaS platform subscriptions and bespoke software engineering consulting engagements.',
      'Our commercial terms are structured to reflect the substantial computational infrastructure, engineering labor, and intellectual capital deployed upon the inception of any subscription or custom development project.',
      'By initiating an online payment, subscribing to a SaaS tier, or executing a Statement of Work (SOW), you explicitly acknowledge and agree to the billing, cancellation, and refund principles set forth herein.',
    ],
  },
  {
    id: 'saas-subscriptions-cancellation',
    number: '02',
    title: 'SaaS Platform Subscriptions and Cancellation Terms',
    content: [
      '• **Subscription Model:** Subscriptions to Tatakae Labs SaaS platforms (such as Assessment Engine, CRM Platform, and BusinessOS) are billed in advance on a recurring monthly or annual cadence.',
      '• **Cancellation at Will:** You may cancel your SaaS subscription at any time directly through your account billing dashboard or by submitting an email to `tatakaelabs@gmail.com`.',
      '• **Effective Date of Cancellation:** Cancellation takes effect at the expiration of the current paid billing cycle. You will retain full operational access to the platform through the remainder of your paid term.',
      '• **No Partial Billing Refunds:** Payments made for SaaS subscriptions are **non-refundable for the current billing interval**. We do not issue prorated refunds for partially elapsed months or unused user seats.',
      '• **Annual Plans:** Subscriptions paid annually in advance may be canceled at any time; however, prepaid annual fees are non-refundable once thirty (30) calendar days have elapsed from the initial subscription activation.',
    ],
    callout: {
      type: 'warning',
      title: 'Advance Billing Cycle Notice',
      text: 'To avoid automatic renewal charges for the next billing cycle, cancellation requests must be executed at least forty-eight (48) hours prior to the scheduled renewal date.',
    },
  },
  {
    id: 'custom-engineering-milestones',
    number: '03',
    title: 'Bespoke Software Engineering and Milestone Deliverables',
    content: [
      'Custom software development projects, architectural audits, and enterprise consulting engagements are executed pursuant to a bespoke Statement of Work (SOW) structured around distinct milestone deliveries:',
      '• **Initial Retainer / Mobilization Advance:** The initial deposit or mobilization advance paid upon contract execution covers architectural blueprinting, resource allocation, and project setup. This fee is **strictly non-refundable** once engineering mobilization has commenced.',
      '• **Milestone Payments & Acceptance:** Subsequent milestone payments are payable upon the completion and delivery of specified engineering deliverables. The client is afforded a formal **User Acceptance Testing (UAT) period** (typically seven (7) business days, unless specified otherwise in the SOW) to inspect and test the deliverable.',
      '• **Deemed Acceptance:** If written defect notices specifying failure against agreed acceptance criteria are not delivered within the UAT period, the deliverable is deemed formally accepted, and the corresponding milestone fee becomes non-refundable.',
      '• **Defect Remediation:** In the event a deliverable fails agreed technical criteria, Tatakae Labs will dedicate engineering resources to rectify the non-conformities during an agreed cure period without additional charge.',
    ],
    callout: {
      type: 'distinction',
      title: 'SaaS vs. Custom Development SOW',
      text: 'Custom software development requires dedicated engineering hours and bespoke system design. Milestone disbursements fund actual labor and are earned upon delivery of the corresponding project milestone.',
    },
  },
  {
    id: 'free-trials-and-pilot-programs',
    number: '04',
    title: 'Free Trials, Pilot Programs, and Promotional Credits',
    content: [
      '• **Trial Periods:** Where complimentary evaluation periods or pilot trials are offered, no billing occurs during the specified trial interval.',
      '• **Transition to Paid Tiers:** Upon expiration of a trial period, account access will pause until an authorized payment instrument is entered. If you voluntarily provide payment credentials and authorize billing, standard recurring charges commence.',
      '• **Promotional Credits:** Service credits, promotional discounts, or courtesy fee reductions are non-transferable, possess no independent cash redemption value, and expire within twelve (12) months of issuance.',
    ],
  },
  {
    id: 'payment-disputes-and-chargebacks',
    number: '05',
    title: 'Payment Disputes, Chargebacks, and Reconciliation',
    content: [
      '• **Good-Faith Inquiries:** If you believe a billing error or duplicate debit has occurred, please notify our accounts desk immediately at `tatakaelabs@gmail.com` with invoice particulars before initiating a bank dispute.',
      '• **Resolution Commitment:** Tatakae Labs will investigate the billing discrepancy within three (3) business days. Confirmed billing overcharges or technical payment duplicates will be refunded promptly in full.',
      '• **Unwarranted Chargebacks:** Initiating an unwarranted or fraudulent payment chargeback without prior good-faith communication may result in immediate suspension of all associated accounts, termination of active API keys, and legal recovery for fees incurred.',
    ],
  },
  {
    id: 'statutory-taxes-and-gst-adjustments',
    number: '06',
    title: 'Statutory Taxes and GST Credit Notes',
    content: [
      '• Under Indian tax laws, Goods and Services Tax (GST) is collected and remitted to the government upon invoice issuance.',
      '• Where a refund or billing adjustment is formally approved, Tatakae Labs will issue a statutory **GST Credit Note** in compliance with the Central Goods and Services Tax Act, 2017.',
      '• Refunds will reflect the adjusted tax value in strict adherence to statutory accounting guidelines.',
    ],
  },
  {
    id: 'refund-disbursement-timelines',
    number: '07',
    title: 'Refund Disbursement Method and Processing Timelines',
    content: [
      '• **Disbursement Route:** Approved refunds will be remitted exclusively to the original payment instrument or bank account from which the payment originated.',
      '• **Processing Horizon:** Following written approval from our finance desk, refunds are dispatched to our payment aggregator (e.g., Razorpay, Stripe, Cashfree) within three (3) business days.',
      '• **Banking Clearance:** Depending on the client’s banking institution or card issuer, the credited funds typically reflect on the account statement within **five (5) to ten (10) business days**.',
    ],
  },
  {
    id: 'refund-contact-desk',
    number: '08',
    title: 'Billing and Refund Inquiries Desk',
    content: [
      'For all billing inquiries, invoice reconciliation, subscription cancellations, or refund queries, contact:',
      '• **TATAKAE LABS — Finance & Accounts Desk**',
      '• **Email:** `tatakaelabs@gmail.com`',
      '• **Subject Line Convention:** `[BILLING / REFUND] Account ID - Invoice Reference`',
      '• **Operational Desk Hours:** Monday through Friday, 10:00 AM to 06:00 PM IST',
    ],
  },
];
