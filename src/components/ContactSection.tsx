'use client';

import { useRef, useEffect, useState } from 'react';

const projectTypes = [
  'SaaS Product',
  'Web Application',
  'Mobile App',
  'Business Automation',
  'CRM System',
  'AI Integration',
  'Digital Transformation',
  'Consulting',
  'Other',
];

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  description?: string;
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    description: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    [titleRef.current, formRef.current].forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setTimeout(() => {
              el.style.transition = `opacity 0.8s ease ${i * 0.15}s, transform 0.8s ease ${i * 0.15}s`;
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, 50);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    });
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Please describe your project or requirements';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding bg-[#F7F7F5] relative"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div ref={titleRef} className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#080B72]/60">
                06 / Start a Project
              </span>
              <div className="flex-1 max-w-[80px] h-[1px] bg-[#080B72]/15" />
            </div>

            <h2 className="text-headline text-[#080B72] tracking-tight mb-8">
              HAVE AN IDEA?
              <br />
              LET&apos;S MAKE
              <br />
              IT REAL.
            </h2>

            <p className="text-body text-[#05062F]/70 mb-10 max-w-md text-base sm:text-lg leading-relaxed">
              Whether you have an architectural specification ready or just a concept
              looking for engineering guidance — let&apos;s build something exceptional together.
            </p>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              <div
                className="rounded-xl border border-[#080B72]/10 bg-white/70 backdrop-blur-xs transition-all hover:bg-white hover:border-[#080B72]/20 shadow-xs"
                style={{ padding: '22px 24px' }}
              >
                <span className="block text-[10px] font-mono uppercase tracking-widest text-[#080B72]/50 mb-1.5">
                  Direct Inquiries &amp; Project RFPs
                </span>
                <a
                  href="mailto:tatakaelabs@gmail.com"
                  className="text-base sm:text-lg font-bold text-[#080B72] hover:underline"
                >
                  tatakaelabs@gmail.com
                </a>
              </div>

              <div
                className="rounded-xl border border-[#080B72]/10 bg-white/70 backdrop-blur-xs transition-all hover:bg-white hover:border-[#080B72]/20 shadow-xs"
                style={{ padding: '22px 24px' }}
              >
                <span className="block text-[10px] font-mono uppercase tracking-widest text-[#080B72]/50 mb-1.5">
                  Global Availability &amp; Response Time
                </span>
                <p className="text-sm font-medium text-[#05062F]">
                  Operating from Nagpur, India · Guaranteed reply within 24 hours
                </p>
              </div>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-6 mt-8">
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com' },
                { label: 'Twitter / X', href: 'https://x.com' },
                { label: 'GitHub', href: 'https://github.com' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono font-semibold tracking-wider uppercase text-[#080B72]/60 hover:text-[#080B72] transition-colors"
                >
                  {social.label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Right Column — Elevated Form Card */}
          <div ref={formRef} className="lg:col-span-7">
            <div
              className="rounded-2xl bg-white border border-[#080B72]/15 shadow-sm"
              style={{ padding: 'clamp(28px, 4vw, 44px)' }}
            >
              {submitted ? (
                <div className="flex flex-col items-start justify-center py-12">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl mb-6">
                    ✓
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#080B72] tracking-tight mb-3">
                    Inquiry Received.
                  </h3>
                  <p className="text-base text-[#05062F]/70 leading-relaxed max-w-md">
                    Thank you for reaching out to TATAKAE LABS. Our engineering directors will
                    review your brief and schedule an initial discovery call within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="space-y-6">
                    {/* Name */}
                    <FormField label="Your Full Name *" error={errors.name}>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        autoComplete="name"
                      />
                    </FormField>

                    {/* Email */}
                    <FormField label="Business Email *" error={errors.email}>
                      <input
                        className="form-input"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        autoComplete="email"
                      />
                    </FormField>

                    {/* Company */}
                    <FormField label="Company / Organisation">
                      <input
                        className="form-input"
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        autoComplete="organization"
                      />
                    </FormField>

                    {/* Project Type */}
                    <FormField label="Project / Solution Category">
                      <div className="relative">
                        <select
                          className="form-input pr-8 cursor-pointer appearance-none"
                          value={formData.projectType}
                          onChange={(e) => handleChange('projectType', e.target.value)}
                        >
                          <option value="">Select scope or service area...</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-[#080B72]/60">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </FormField>

                    {/* Description */}
                    <FormField label="Tell Us About Your Goals & Timeline *" error={errors.description}>
                      <textarea
                        className="form-input"
                        placeholder="Describe your vision, technical requirements, or problem to solve..."
                        value={formData.description}
                        onChange={(e) => handleChange('description', e.target.value)}
                        rows={4}
                        style={{ resize: 'vertical', minHeight: '110px' }}
                      />
                    </FormField>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="btn-primary w-full sm:w-auto justify-center px-10 py-4 text-xs font-semibold tracking-widest uppercase cursor-pointer"
                        disabled={submitting}
                        style={{ opacity: submitting ? 0.7 : 1 }}
                      >
                        {submitting ? 'Transmitting Brief...' : 'Send Project Inquiry'}
                        {!submitting && (
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[11px] font-mono font-semibold tracking-wider text-[#080B72]/70 uppercase mb-2">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-rose-600 mt-1 font-mono">{error}</p>}
    </div>
  );
}
