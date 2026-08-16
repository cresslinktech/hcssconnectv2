'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import GlobalCTA from '@/components/GlobalCTA';
import { SITE_CONFIG } from '@/lib/constants';

export default function ContactPage() {
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
    formData.append("subject", "New Contact Form Submission");
    formData.append("from_name", "Humanity CSS Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setSubmitError(data.message || "Failed to send message. Please try again later.");
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
                <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-brand-600">Contact Us</p>
                <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-brand-900 leading-[1.08] max-w-3xl">
                  Get in touch with our care team
                </h1>
                <p className="mt-5 text-base md:text-lg font-medium leading-8 text-slate-800 max-w-2xl">
                  Ready to discuss your care needs? Call, email, or complete the form below and we will respond promptly.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative min-h-[340px] h-full">
                <div className="pointer-events-none absolute -top-6 -right-6 h-2/3 w-2/3 rounded-full bg-spark-500/15 blur-2xl" />
                <div className="relative min-h-[340px] h-full overflow-hidden rounded-[44%_56%_62%_38%/46%_40%_60%_54%] border border-brand-100">
                  <Image
                    src="/images/care-companionship-sofa-2.png"
                    alt="Humanity CSS carer chatting with a client over tea"
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
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info (Left) */}
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>

                <div className="space-y-6 mb-10">
                  <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-accent-50 rounded-md flex items-center justify-center text-accent-600 flex-shrink-0 transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 mb-1">Phone (Office)</h3>
                      <p className="text-base font-medium text-slate-800">{SITE_CONFIG.phone}</p>
                      <p className="text-sm font-medium text-slate-600 mt-1">Office hours support</p>
                    </div>
                  </a>

                  {SITE_CONFIG.mobile && (
                    <a href={`tel:${SITE_CONFIG.mobile.replace(/\s/g, '')}`} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-accent-50 rounded-md flex items-center justify-center text-accent-600 flex-shrink-0 transition-all">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-slate-900 mb-1">Mobile / Out-of-Hours</h3>
                        <p className="text-base font-medium text-slate-800">{SITE_CONFIG.mobile}</p>
                        <p className="text-sm font-medium text-slate-600 mt-1">24/7 emergency line available</p>
                      </div>
                    </a>
                  )}

                  <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-accent-50 rounded-md flex items-center justify-center text-accent-600 flex-shrink-0 transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 mb-1">Email</h3>
                      <p className="text-base font-medium text-slate-800">{SITE_CONFIG.email}</p>
                      <p className="text-sm font-medium text-slate-600 mt-1">We respond within 24 hours</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-50 rounded-md flex items-center justify-center text-brand-600 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 mb-1">Address</h3>
                      <p className="text-base font-medium text-slate-800">{SITE_CONFIG.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-50 rounded-md flex items-center justify-center text-brand-600 flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 mb-1">Office Hours</h3>
                      <p className="text-base font-medium text-slate-800">Monday to Friday: 8:00 AM to 6:00 PM</p>
                      <p className="text-base font-medium text-slate-800">Saturday: 9:00 AM to 1:00 PM</p>
                      <p className="text-sm font-medium text-slate-600 mt-1">24/7 emergency support available</p>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-md overflow-hidden aspect-[4/3] border border-brand-100">
                  <iframe
                    title="Map of Southwark, London"
                    src="https://maps.google.com/maps?q=Southwark,London,UK&z=10&output=embed"
                    className="absolute inset-0 h-full w-full grayscale-[15%]"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="pointer-events-none absolute left-3 bottom-3 rounded-lg border border-brand-100 bg-white/95 px-3 py-2 shadow-md">
                    <p className="text-xs font-bold text-slate-900">London, UK</p>
                    <p className="text-[11px] font-medium text-slate-500">Serving Greater London</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form (Right) */}
            <div className="lg:col-span-3">
              <FadeIn direction="right" delay={0.2}>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Send Us a Message</h2>

                {submitted ? (
                  <div className="bg-brand-50/20 rounded-xl border border-brand-100 p-12 text-center">
                    <div className="w-16 h-16 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-success-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Sent!</h3>
                    <p className="text-base font-medium text-slate-800 mb-6">
                      Thank you for reaching out. Our care team will get back to you within 24 hours.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="rounded-md bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-sm shadow-accent-500/20 hover:bg-accent-700 transition-colors">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-brand-100 bg-brand-50/10 p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-name" className="block text-base font-semibold text-slate-800 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none text-base bg-white disabled:opacity-60"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-base font-semibold text-slate-800 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none text-base bg-white disabled:opacity-60"
                          placeholder="your@email.co.uk"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-phone" className="block text-base font-semibold text-slate-800 mb-2">
                          Phone Number
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none text-base bg-white disabled:opacity-60"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-service" className="block text-base font-semibold text-slate-800 mb-2">
                          Service Needed
                        </label>
                        <select
                          id="contact-service"
                          name="service"
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none bg-white text-base disabled:opacity-60"
                        >
                          <option value="">Select a service</option>
                          <option value="personal-care">Personal Care</option>
                          <option value="complex-care">Complex Care</option>
                          <option value="drug-alcohol-dual-diagnosis">Drug, Alcohol &amp; Dual Diagnosis</option>
                          <option value="companionship">Companionship</option>
                          <option value="medication">Medication Support</option>
                          <option value="careers">Careers Enquiry</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-base font-semibold text-slate-800 mb-2">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                          id="contact-message"
                          name="message"
                          required
                          disabled={isSubmitting}
                          rows={6}
                          className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none resize-none text-base bg-white disabled:opacity-60"
                          placeholder="Tell us how we can help..."
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        id="contact-consent"
                        type="checkbox"
                        required
                        disabled={isSubmitting}
                        className="mt-1 w-4 h-4 text-accent-600 border-brand-100 rounded focus:ring-accent-500 disabled:opacity-60"
                      />
                      <label htmlFor="contact-consent" className="text-base font-medium text-slate-800">
                        I agree to Humanity CSS processing my personal data in accordance with their
                        Privacy Policy. <span className="text-red-500">*</span>
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
                      className="inline-flex items-center justify-center rounded-md bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-sm shadow-accent-500/20 hover:bg-accent-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-w-[170px]"
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
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <GlobalCTA />
    </>
  );
}
