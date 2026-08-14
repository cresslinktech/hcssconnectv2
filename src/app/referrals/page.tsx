'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Send, CheckCircle2, Users, Stethoscope, Building2, HeartHandshake } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import GlobalCTA from '@/components/GlobalCTA';
import { SITE_CONFIG } from '@/lib/constants';

export default function ReferralsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
    formData.append("access_key", accessKey);
    formData.append("subject", "New Client Referral Submission");
    formData.append("from_name", "Humanity CSS Referrals Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setSubmitError(data.message || "Failed to submit referral. Please try again later.");
      }
    } catch (err) {
      setSubmitError("Failed to submit form. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-brand-50/50 pt-36 md:pt-40 pb-16">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-stretch">
            <FadeIn>
              <div className="py-6 md:py-10">
                <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-brand-600">Referrals</p>
                <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-brand-900 leading-[1.08] max-w-3xl">
                  Refer a client to our care team
                </h1>
                <p className="mt-5 text-base md:text-lg font-medium leading-8 text-slate-800 max-w-2xl">
                  Whether you are a social worker, GP, hospital discharge coordinator, or family member, we keep the referral process simple, fast, and transparent.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative min-h-[340px] h-full">
                <div className="pointer-events-none absolute -top-6 -right-6 h-2/3 w-2/3 rounded-full bg-spark-500/15 blur-2xl" />
                <div className="relative min-h-[340px] h-full overflow-hidden rounded-[44%_56%_62%_38%/46%_40%_60%_54%] border border-brand-100">
                  <Image
                    src="https://images.pexels.com/photos/6749742/pexels-photo-6749742.jpeg"
                    alt="Professional completing a care referral"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4">Who Can Refer</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Referrals welcome from anyone involved in someone's care</h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: <Stethoscope className="w-6 h-6" />, title: 'GPs & Clinicians', desc: 'Primary and secondary care professionals identifying a home care need.' },
              { icon: <Building2 className="w-6 h-6" />, title: 'Hospital Discharge Teams', desc: 'Coordinators arranging safe, timely discharge into home-based care.' },
              { icon: <Users className="w-6 h-6" />, title: 'Social Workers', desc: 'Local authority and council teams referring on behalf of a client.' },
              { icon: <HeartHandshake className="w-6 h-6" />, title: 'Families & Individuals', desc: 'Self-referrals from the person needing care or their loved ones.' },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.08}>
                <div className="h-full rounded-lg border border-brand-100 bg-brand-50/10 p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm font-medium text-slate-600 leading-6">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-50/20 py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-center">
            <FadeIn>
              <div>
                <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4">The Process</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  How Our Referral Process Works
                </h2>
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Submit Referral', desc: 'Complete the form below or call our team directly with your client\'s details.' },
                    { step: '02', title: 'Acknowledgement', desc: 'We acknowledge receipt within 2 working hours and assign a dedicated care manager.' },
                    { step: '03', title: 'Assessment', desc: 'A comprehensive needs assessment is conducted within 48 hours.' },
                    { step: '04', title: 'Care Begins', desc: 'A bespoke care plan is agreed and care can commence within 24 to 72 hours of referral.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 rounded-md border border-brand-100 bg-brand-50/10 p-4">
                      <div className="w-10 h-10 bg-brand-600 rounded-md flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-base font-medium text-slate-800">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative min-h-[340px] h-full overflow-hidden rounded-md border border-brand-100">
                <Image
                  src="https://images.pexels.com/photos/8204324/pexels-photo-8204324.jpeg"
                  alt="Care team reviewing referral details"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4">Online Referral</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Submit a Referral</h2>
                <p className="text-base font-medium text-slate-800">
                  Complete the form below and our team will be in touch within 2 working hours. For urgent referrals, 
                  please call <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="text-accent-600 font-semibold hover:underline">{SITE_CONFIG.phone}</a>.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              {submitted ? (
                <div className="bg-white rounded-xl border border-brand-100 p-12 text-center">
                  <div className="w-16 h-16 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-success-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Referral Submitted</h3>
                  <p className="text-base font-medium text-slate-800 mb-6">
                    Thank you for your referral. Our team will review the details and contact you within 2 working hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="rounded-md bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-sm shadow-accent-500/20 hover:bg-accent-700 transition-colors">
                    Submit Another Referral
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-brand-100 p-8 md:p-10 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="referrer-name" className="block text-base font-semibold text-slate-800 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="referrer-name"
                        name="referrer_name"
                        type="text"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none text-base disabled:opacity-60"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="referrer-role" className="block text-base font-semibold text-slate-800 mb-2">
                        Your Role / Organisation
                      </label>
                      <input
                        id="referrer-role"
                        name="referrer_role"
                        type="text"
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none text-base disabled:opacity-60"
                        placeholder="e.g. Social Worker, Southwark Council"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="referrer-email" className="block text-base font-semibold text-slate-800 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="referrer-email"
                        name="referrer_email"
                        type="email"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none text-base disabled:opacity-60"
                        placeholder="your@email.co.uk"
                      />
                    </div>
                    <div>
                      <label htmlFor="referrer-phone" className="block text-base font-semibold text-slate-800 mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="referrer-phone"
                        name="referrer_phone"
                        type="tel"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none text-base disabled:opacity-60"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="client-name" className="block text-base font-semibold text-slate-800 mb-2">
                      Client Name
                    </label>
                    <input
                      id="client-name"
                      name="client_name"
                      type="text"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none text-base disabled:opacity-60"
                      placeholder="Client's full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="service-needed" className="block text-base font-semibold text-slate-800 mb-2">
                      Service Needed <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service-needed"
                      name="service_needed"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none bg-white text-base disabled:opacity-60"
                    >
                      <option value="">Select a service</option>
                      <option value="personal-care">Personal Care</option>
                      <option value="complex-care">Complex Care</option>
                      <option value="drug-alcohol-dual-diagnosis">Drug, Alcohol &amp; Dual Diagnosis</option>
                      <option value="companionship">Companionship</option>
                      <option value="medication">Medication Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="referral-details" className="block text-base font-semibold text-slate-800 mb-2">
                      Referral Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="referral-details"
                      name="referral_details"
                      required
                      disabled={isSubmitting}
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none resize-none text-base disabled:opacity-60"
                      placeholder="Please provide a brief overview of the client's needs, current situation, and any relevant background..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="consent"
                      name="consent_given"
                      type="checkbox"
                      required
                      disabled={isSubmitting}
                      className="mt-1 w-4 h-4 text-accent-600 border-brand-100 rounded focus:ring-accent-500 disabled:opacity-60"
                    />
                    <label htmlFor="consent" className="text-base font-medium text-slate-800">
                      I confirm that I have the appropriate authority to make this referral 
                      and the client (or their representative) has given consent for their information 
                      to be shared with Humanity CSS. <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {submitError && (
                    <div className="p-4 text-sm font-semibold text-red-600 bg-red-50 rounded-md border border-red-100">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-sm shadow-accent-500/20 hover:bg-accent-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-w-[170px]"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Referral
                      </>
                    )}
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>

      <GlobalCTA />
    </>
  );
}
