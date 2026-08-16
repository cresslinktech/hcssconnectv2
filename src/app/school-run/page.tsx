'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  GraduationCap,
  Accessibility,
  Backpack,
  Link2,
  Brain,
  MapPin,
  Users,
  ShieldCheck,
  BadgeCheck,
  Award,
  CheckCircle2,
  Send,
  Phone,
  Sunrise,
  Sunset,
  Clock,
  UsersRound,
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import GlobalCTA from '@/components/GlobalCTA';
import { SITE_CONFIG } from '@/lib/constants';

const TRANSPORT_EMAIL = 'humanitycsscars@gmail.com';

const SERVICES = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Daily School Runs',
    desc: 'Reliable morning and afternoon pickups and drop-offs for mainstream schools, with punctual, secure journeys so children arrive ready to learn.',
    bullets: ['On-time, every day', 'Same driver where possible', 'Door-to-door service'],
  },
  {
    icon: <Accessibility className="w-6 h-6" />,
    title: 'SEND & Special School Transport',
    desc: 'Specialized transport for children with Special Educational Needs and Disabilities, delivered by patient, trained staff in fully accessible vehicles.',
    bullets: ['Autism-friendly journeys', 'Wheelchair accessible vehicles', 'Trained 1:1 escorts'],
  },
  {
    icon: <Backpack className="w-6 h-6" />,
    title: 'Educational Trips & Outings',
    desc: 'Safe, well-organised transport for school trips and outings, giving teachers and parents complete peace of mind.',
    bullets: ['Group bookings', 'Experienced drivers', 'Flexible scheduling'],
  },
];

const DIFFERENTIATORS = [
  { icon: <Link2 className="w-5 h-5" />, title: 'Same Trusted Driver', desc: 'Wherever possible, your child is collected by the same familiar driver and escort each day, building routine and trust.' },
  { icon: <Brain className="w-5 h-5" />, title: 'SEND-Trained & Patient', desc: 'Our team is specially trained to provide patient, understanding support for children with additional needs.' },
  { icon: <MapPin className="w-5 h-5" />, title: 'Community-First', desc: 'Proudly based in Southwark, we know the schools, streets, and routes of South East London.' },
  { icon: <Users className="w-5 h-5" />, title: 'Family Peace of Mind', desc: "Real-time updates and dedicated drivers mean you always know your child arrived safely." },
];

const RUN_TYPES = [
  { icon: <Sunrise className="w-5 h-5" />, title: 'Morning Drop-off', desc: 'Collected from home and delivered safely to school in good time for the bell.' },
  { icon: <Sunset className="w-5 h-5" />, title: 'Afternoon Pickup', desc: 'Collected from the school gates and taken home or on to after-school activities.' },
  { icon: <Clock className="w-5 h-5" />, title: 'After-School Clubs', desc: 'Flexible pickup from sports, music, tutoring, and other after-school activities.' },
  { icon: <UsersRound className="w-5 h-5" />, title: 'Sibling Coordination', desc: 'Siblings at different schools collected and dropped off on one coordinated route.' },
];

const PROCESS = [
  { step: '01', title: 'Initial Consultation', desc: 'Tell us your child’s school, schedule, and any additional requirements.' },
  { step: '02', title: 'Trial Period', desc: 'Start with a trial run so your child gets comfortable with their driver and vehicle.' },
  { step: '03', title: 'Daily School Runs', desc: 'Settle into a consistent routine with the same time and the same trusted driver.' },
];

const SAFETY = [
  { icon: <ShieldCheck className="w-5 h-5" />, title: 'Fully DBS-Checked', desc: 'All our drivers and escorts undergo rigorous background checks.' },
  { icon: <Award className="w-5 h-5" />, title: 'Comprehensive Training', desc: 'First Aid, Moving & Handling, and Safeguarding certified.' },
  { icon: <BadgeCheck className="w-5 h-5" />, title: 'Experienced School Run Staff', desc: 'Specialized in supporting children with additional needs.' },
];

export default function SchoolRunPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE';
    formData.append('access_key', accessKey);
    formData.append('subject', 'New School Run Enquiry');
    formData.append('from_name', 'Humanity CSS School Run Enquiry Form');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setSubmitError(data.message || 'Failed to send your enquiry. Please try again later.');
      }
    } catch (err) {
      setSubmitError('Failed to submit form. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-50/50 pt-36 md:pt-40 pb-16">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-10 items-stretch">
            <FadeIn>
              <div className="py-8 md:py-12">
                <p className="inline-flex items-center gap-2 text-xs md:text-sm font-bold tracking-[0.14em] uppercase text-brand-600 mb-4">
                  <span className="h-[2px] w-5 bg-spark-500 inline-block rounded-full" />
                  School Run Transport &middot; South East London
                </p>
                <h1 className="text-[2.15rem] md:text-5xl font-extrabold tracking-tight text-brand-900 leading-[1.06] mb-5">
                  Driven by Care, Delivered with Reliability
                </h1>
                <p className="text-[1.06rem] font-medium text-slate-800 leading-relaxed mb-7 max-w-xl">
                  Every school morning matters. HumanityCSSCars provides safe, punctual school run transport across South East London for mainstream schools and SEND placements alike, with a trusted, DBS-checked driver your child gets to know.
                </p>
                <div className="flex flex-wrap gap-4 mb-9">
                  <a href="#enquiry" className="rounded-md bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-sm shadow-accent-500/20 hover:bg-accent-700 transition-colors">
                    Request School Run
                  </a>
                  <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 rounded-md border border-accent-300 px-6 py-3 text-base font-semibold text-slate-800 hover:bg-white transition-colors">
                    <Phone className="w-4 h-4" />
                    {SITE_CONFIG.phone}
                  </a>
                </div>
                <div className="flex items-center gap-6">
                  {[
                    { value: 'DBS-Checked', label: 'All drivers & escorts' },
                    { value: 'Mainstream + SEND', label: 'Schools supported' },
                    { value: 'SE London', label: 'Coverage area' },
                  ].map((stat, i) => (
                    <div key={stat.label} className={i > 0 ? 'pl-6 border-l border-brand-100' : ''}>
                      <p className="font-heading text-base font-bold text-brand-700 leading-none">{stat.value}</p>
                      <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="relative h-full min-h-[380px]">
                <div className="pointer-events-none absolute -top-8 -right-8 h-2/3 w-2/3 rounded-full bg-spark-500/20 blur-2xl" />
                <div className="relative h-full min-h-[380px] overflow-hidden rounded-[44%_56%_62%_38%/46%_40%_60%_54%] border border-brand-100">
                  <Image
                    src="/images/school-run-dropoff.png"
                    alt="Humanity CSS driver walking a child into school from the car"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                </div>
                <div className="absolute left-2 bottom-4 md:-left-4 md:bottom-6 flex items-center gap-3 rounded-xl border border-brand-100 bg-white p-3 pr-5 shadow-lg">
                  <div className="relative h-9 w-9 flex-shrink-0 rounded-lg bg-success-50 flex items-center justify-center text-success-500">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 leading-tight">Fully DBS-Checked</p>
                    <p className="text-[11px] font-medium text-slate-500 leading-tight">Every driver &amp; escort</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <FadeIn className="grid lg:grid-cols-[1fr_1fr] gap-8 items-center">
            <div className="order-2 lg:order-1 relative min-h-[300px] rounded-md overflow-hidden border border-brand-100">
              <Image
                src="/images/school-run-morning-prep.png"
                alt="Parent getting their daughter ready for the school run"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 lg:pl-4">
              <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-brand-600">About Our School Run Service</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                South East London&rsquo;s specialist in school run transport
              </h2>
              <p className="mt-4 text-base md:text-lg font-medium leading-8 text-slate-800">
                We are a specialized transport company with expertise in school run and SEND (Special Educational Needs and Disabilities) transport across South East London. Our trained professionals understand the unique needs of children with additional requirements, ensuring safe and comfortable journeys to and from school, every day.
              </p>
              <p className="mt-3 text-base md:text-lg font-medium leading-8 text-slate-800">
                Children thrive on routine. That&rsquo;s why we match each family with a consistent driver and vehicle wherever possible, so the school run becomes a familiar, reassuring part of the day rather than a source of stress.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-50/30 py-16 md:py-20">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-brand-600">School Run Services</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Every kind of school journey, covered
              </h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.08}>
                <div className="h-full rounded-lg border border-brand-100 bg-white p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm font-medium text-slate-600 leading-6 mb-4">{service.desc}</p>
                  <ul className="space-y-1.5">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Run types */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-wide">
          <FadeIn>
            <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-brand-600 text-center">How We Run It</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 leading-tight text-center max-w-2xl mx-auto">
              Built around your family&rsquo;s daily routine
            </h2>
          </FadeIn>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RUN_TYPES.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.08}>
                <div className="h-full rounded-lg border border-brand-100 bg-brand-50/10 p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-50 text-brand-600">
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

      {/* What Makes Us Different */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-wide">
          <FadeIn>
            <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-brand-600 text-center">What Makes Us Different</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 leading-tight text-center max-w-2xl mx-auto">
              We&rsquo;re not a regular cab company. We&rsquo;re caregivers on wheels.
            </h2>
          </FadeIn>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DIFFERENTIATORS.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.08}>
                <div className="h-full rounded-lg border border-brand-100 bg-brand-50/10 p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-50 text-brand-600">
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

      {/* Safety */}
      <section className="bg-brand-800 py-14">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center max-w-xl mx-auto mb-9">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Safety First, Always</h2>
              <p className="mt-2 text-brand-200 font-medium">Our vehicles are maintained to the highest safety standards. All staff are:</p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {SAFETY.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.08}>
                <div className="h-full rounded-lg border border-white/10 bg-white/5 p-6 text-center">
                  <div className="mx-auto mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-sm font-medium text-brand-200 leading-6">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How to get started */}
      <section className="bg-brand-50/30 py-16 md:py-20">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-brand-600">Getting Started</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                From first call to daily routine
              </h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {PROCESS.map((item, index) => (
              <FadeIn key={item.step} delay={index * 0.1}>
                <div className="h-full flex gap-4 rounded-md border border-brand-100 bg-white p-5">
                  <div className="w-10 h-10 bg-accent-500 rounded-md flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm font-medium text-slate-600 leading-6">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquiry" className="bg-white py-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4">Get in Touch</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Request a School Run</h2>
                <p className="text-base font-medium text-slate-800">
                  Whether it&rsquo;s a daily school run or an occasional trip, complete the form below and our transport team will get back to you.
                  For urgent enquiries, call <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="text-accent-600 font-semibold hover:underline">{SITE_CONFIG.phone}</a>.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              {submitted ? (
                <div className="bg-white rounded-xl border border-brand-100 p-12 text-center">
                  <div className="w-16 h-16 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-success-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Enquiry Sent</h3>
                  <p className="text-base font-medium text-slate-800 mb-6">
                    Thank you for reaching out. Our transport team will review your request and get back to you shortly.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="rounded-md bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-sm shadow-accent-500/20 hover:bg-accent-700 transition-colors">
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-brand-100 p-8 md:p-10 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="sr-name" className="block text-base font-semibold text-slate-800 mb-2">
                        Parent / Guardian Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="sr-name"
                        name="name"
                        type="text"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none text-base disabled:opacity-60"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="sr-phone" className="block text-base font-semibold text-slate-800 mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="sr-phone"
                        name="phone"
                        type="tel"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none text-base disabled:opacity-60"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="sr-email" className="block text-base font-semibold text-slate-800 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="sr-email"
                        name="email"
                        type="email"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none text-base disabled:opacity-60"
                        placeholder="your@email.co.uk"
                      />
                    </div>
                    <div>
                      <label htmlFor="sr-school" className="block text-base font-semibold text-slate-800 mb-2">
                        Child&rsquo;s School
                      </label>
                      <input
                        id="sr-school"
                        name="school"
                        type="text"
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none text-base disabled:opacity-60"
                        placeholder="School name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="sr-type" className="block text-base font-semibold text-slate-800 mb-2">
                        Transport Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="sr-type"
                        name="transport_type"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none bg-white text-base disabled:opacity-60"
                      >
                        <option value="">Select an option</option>
                        <option value="daily-school-run">Daily School Run</option>
                        <option value="send-school-transport">SEND School Transport</option>
                        <option value="educational-trip">Educational Trip / Outing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="sr-frequency" className="block text-base font-semibold text-slate-800 mb-2">
                        Frequency <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="sr-frequency"
                        name="frequency"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none bg-white text-base disabled:opacity-60"
                      >
                        <option value="">Select an option</option>
                        <option value="daily">Daily</option>
                        <option value="few-times-week">A few times a week</option>
                        <option value="term-time">Term-time only</option>
                        <option value="occasional">One-off / Occasional</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="sr-details" className="block text-base font-semibold text-slate-800 mb-2">
                      Journey Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="sr-details"
                      name="journey_details"
                      required
                      disabled={isSubmitting}
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-brand-100 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all outline-none resize-none text-base disabled:opacity-60"
                      placeholder="Pickup and drop-off address, preferred times, any accessibility needs..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="sr-consent"
                      name="consent_given"
                      type="checkbox"
                      required
                      disabled={isSubmitting}
                      className="mt-1 w-4 h-4 text-accent-600 border-brand-100 rounded focus:ring-accent-500 disabled:opacity-60"
                    />
                    <label htmlFor="sr-consent" className="text-base font-medium text-slate-800">
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
                        Send Enquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </FadeIn>

            <p className="mt-6 text-center text-sm text-slate-500">
              Prefer email? Reach the transport team directly at{' '}
              <a href={`mailto:${TRANSPORT_EMAIL}`} className="text-accent-600 font-semibold hover:underline">{TRANSPORT_EMAIL}</a>.
            </p>
          </div>
        </div>
      </section>

      <GlobalCTA />
    </>
  );
}
