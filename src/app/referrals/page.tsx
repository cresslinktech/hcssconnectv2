'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Send, CheckCircle2 } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import GlobalCTA from '@/components/GlobalCTA';
import { SITE_CONFIG } from '@/lib/constants';

export default function ReferralsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-[#f2f8f7] pt-28 md:pt-32 pb-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-stretch">
            <FadeIn>
              <div className="py-6 md:py-10">
                <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-[#0d9488]">Referrals</p>
                <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f2d2a] leading-[1.08] max-w-3xl">
                  Refer a client to our care team
                </h1>
                <p className="mt-5 text-base md:text-lg font-medium leading-8 text-slate-800 max-w-2xl">
                  Whether you are a social worker, GP, hospital discharge coordinator, or family member, we keep the referral process simple, fast, and transparent.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative min-h-[340px] h-full overflow-hidden rounded-md border border-[#d6e7e5]">
                <Image
                  src="https://images.pexels.com/photos/6749742/pexels-photo-6749742.jpeg"
                  alt="Professional completing a care referral"
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
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-center">
            <FadeIn>
              <div>
                <span className="inline-block text-[#0d9488] font-semibold text-sm uppercase tracking-wider mb-4">The Process</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  How Our Referral Process Works
                </h2>
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Submit Referral', desc: 'Complete the form below or call our team directly with your client\'s details.' },
                    { step: '02', title: 'Acknowledgement', desc: 'We acknowledge receipt within 2 working hours and assign a dedicated care manager.' },
                    { step: '03', title: 'Assessment', desc: 'A comprehensive needs assessment is conducted within 48 hours.' },
                    { step: '04', title: 'Care Begins', desc: 'A bespoke care plan is agreed and care can commence within 24–72 hours of referral.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 rounded-md border border-[#deeeec] bg-[#f9fcfc] p-4">
                      <div className="w-10 h-10 bg-[#0d9488] rounded-md flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
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
              <div className="relative min-h-[340px] h-full overflow-hidden rounded-md border border-[#d6e7e5]">
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

      <section className="bg-[#f7fbfa] py-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="inline-block text-[#0d9488] font-semibold text-sm uppercase tracking-wider mb-4">Online Referral</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Submit a Referral</h2>
                <p className="text-base font-medium text-slate-800">
                  Complete the form below and our team will be in touch within 2 working hours. For urgent referrals, 
                  please call <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="text-[#0d9488] font-semibold hover:underline">{SITE_CONFIG.phone}</a>.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              {submitted ? (
                <div className="bg-white rounded-xl border border-[#dcebe9] p-12 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Referral Submitted</h3>
                  <p className="text-base font-medium text-slate-800 mb-6">
                    Thank you for your referral. Our team will review the details and contact you within 2 working hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="rounded-md bg-[#0d9488] px-6 py-3 text-base font-semibold text-white hover:bg-[#0b7f75] transition-colors">
                    Submit Another Referral
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-[#dcebe9] p-8 md:p-10 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="referrer-name" className="block text-base font-semibold text-slate-800 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="referrer-name"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-md border border-[#cfe2df] focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 transition-all outline-none text-base"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="referrer-role" className="block text-base font-semibold text-slate-800 mb-2">
                        Your Role / Organisation
                      </label>
                      <input
                        id="referrer-role"
                        type="text"
                        className="w-full px-4 py-3 rounded-md border border-[#cfe2df] focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 transition-all outline-none text-base"
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
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-md border border-[#cfe2df] focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 transition-all outline-none text-base"
                        placeholder="your@email.co.uk"
                      />
                    </div>
                    <div>
                      <label htmlFor="referrer-phone" className="block text-base font-semibold text-slate-800 mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="referrer-phone"
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-md border border-[#cfe2df] focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 transition-all outline-none text-base"
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
                      type="text"
                      className="w-full px-4 py-3 rounded-md border border-[#cfe2df] focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 transition-all outline-none text-base"
                      placeholder="Client's full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="service-needed" className="block text-base font-semibold text-slate-800 mb-2">
                      Service Needed <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service-needed"
                      required
                      className="w-full px-4 py-3 rounded-md border border-[#cfe2df] focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 transition-all outline-none bg-white text-base"
                    >
                      <option value="">Select a service</option>
                      <option value="personal-care">Personal Care</option>
                      <option value="complex-care">Complex Care</option>
                      <option value="mental-health">Mental Health Support</option>
                      <option value="addiction-recovery">Addiction &amp; Recovery</option>
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
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-[#cfe2df] focus:border-[#0d9488] focus:ring-2 focus:ring-[#0d9488]/20 transition-all outline-none resize-none text-base"
                      placeholder="Please provide a brief overview of the client's needs, current situation, and any relevant background..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="consent"
                      type="checkbox"
                      required
                      className="mt-1 w-4 h-4 text-[#0d9488] border-[#cfe2df] rounded focus:ring-[#0d9488]"
                    />
                    <label htmlFor="consent" className="text-base font-medium text-slate-800">
                      I confirm that I have the appropriate authority to make this referral 
                      and the client (or their representative) has given consent for their information 
                      to be shared with HCSS Connect. <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <button type="submit" className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-[#0d9488] px-6 py-3 text-base font-semibold text-white hover:bg-[#0b7f75] transition-colors">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Referral
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
