'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import GlobalCTA from '@/components/GlobalCTA';
import { SITE_CONFIG } from '@/lib/constants';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-brand-50/50 pt-28 md:pt-32 pb-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-stretch">
            <FadeIn>
              <div className="py-6 md:py-10">
                <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-[#2563eb]">Contact Us</p>
                <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-[#1e3a8a] leading-[1.08] max-w-3xl">
                  Get in touch with our care team
                </h1>
                <p className="mt-5 text-base md:text-lg font-medium leading-8 text-slate-800 max-w-2xl">
                  Ready to discuss your care needs? Call, email, or complete the form below and we will respond promptly.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative min-h-[340px] h-full overflow-hidden rounded-md border border-brand-100">
                <Image
                  src="https://images.pexels.com/photos/7658404/pexels-photo-7658404.jpeg"
                  alt="Support team member assisting a client"
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
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info (Left) */}
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>

                <div className="space-y-6 mb-10">
                  <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-brand-50 rounded-md flex items-center justify-center text-brand-600 flex-shrink-0 transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 mb-1">Phone</h3>
                      <p className="text-base font-medium text-slate-800">{SITE_CONFIG.phone}</p>
                      <p className="text-sm font-medium text-slate-600 mt-1">24/7 emergency line available</p>
                    </div>
                  </a>

                  <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-brand-50 rounded-md flex items-center justify-center text-brand-600 flex-shrink-0 transition-all">
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
                      <p className="text-base font-medium text-slate-800">Monday – Friday: 8:00 AM – 6:00 PM</p>
                      <p className="text-base font-medium text-slate-800">Saturday: 9:00 AM – 1:00 PM</p>
                      <p className="text-sm font-medium text-slate-600 mt-1">24/7 emergency support available</p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="rounded-md overflow-hidden aspect-[4/3] border border-brand-100 bg-brand-50/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-12 h-12 mx-auto mb-3 text-brand-600" />
                    <p className="text-slate-900 text-base font-semibold">London, UK</p>
                    <p className="text-slate-700 text-base font-medium mt-1">Serving Greater London</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form (Right) */}
            <div className="lg:col-span-3">
              <FadeIn direction="right" delay={0.2}>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Send Us a Message</h2>

                {submitted ? (
                  <div className="bg-brand-50/30 rounded-xl border border-brand-100 p-12 text-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Sent!</h3>
                    <p className="text-base font-medium text-slate-800 mb-6">
                      Thank you for reaching out. Our care team will get back to you within 24 hours.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="rounded-md bg-brand-600 px-6 py-3 text-base font-semibold text-white hover:bg-brand-700 transition-colors">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-[#dbeafe] bg-[#f8fbff] p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-name" className="block text-base font-semibold text-slate-800 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none text-base bg-white"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-base font-semibold text-slate-800 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none text-base bg-white"
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
                          type="tel"
                          className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none text-base bg-white"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-service" className="block text-base font-semibold text-slate-800 mb-2">
                          Service Needed
                        </label>
                        <select
                          id="contact-service"
                          className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none bg-white text-base"
                        >
                          <option value="">Select a service</option>
                          <option value="personal-care">Personal Care</option>
                          <option value="complex-care">Complex Care</option>
                          <option value="mental-health">Mental Health Support</option>
                          <option value="addiction-recovery">Addiction &amp; Recovery</option>
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
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none resize-none text-base bg-white"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        id="contact-consent"
                        type="checkbox"
                        required
                        className="mt-1 w-4 h-4 text-brand-600 border-brand-100 rounded focus:ring-brand-500"
                      />
                      <label htmlFor="contact-consent" className="text-base font-medium text-slate-800">
                        I agree to Humanity CSS processing my personal data in accordance with their 
                        Privacy Policy. <span className="text-red-500">*</span>
                      </label>
                    </div>

                    <button type="submit" className="inline-flex items-center rounded-md bg-brand-600 px-6 py-3 text-base font-semibold text-white hover:bg-brand-700 transition-colors">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
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
