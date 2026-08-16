import Image from 'next/image';
import { Shield, CheckCircle2, ArrowRight, Heart, UserCheck, Handshake } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import GlobalCTA from '@/components/GlobalCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drug, Alcohol & Dual Diagnosis Personal Care | Humanity CSS',
  description: 'Compassionate, person-centred personal care for people living with substance dependency, alcohol dependency, or dual diagnosis. Specialist domiciliary care across London.',
};

export default function DrugAlcoholDualDiagnosisPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-50/50 pt-36 md:pt-40 pb-16">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-stretch">
            <FadeIn>
              <div className="py-6 md:py-10">
                <div className="flex items-center gap-2 text-brand-600 text-sm md:text-base font-semibold mb-4">
                  <Link href="/services" className="hover:underline">Our Services</Link>
                  <span>/</span>
                  <span>Drug, Alcohol & Dual Diagnosis</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-900 leading-[1.08] mb-5 max-w-3xl">
                  Personal Care for People with Drug, Alcohol and Dual Diagnosis Needs
                </h1>
                <p className="text-base md:text-lg font-medium text-slate-800 max-w-2xl leading-8">
                  Safe, compassionate, and person-centred domiciliary personal care, delivered with understanding and consistency.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative min-h-[340px] h-full">
                <div className="pointer-events-none absolute -top-6 -right-6 h-2/3 w-2/3 rounded-full bg-spark-500/15 blur-2xl" />
                <div className="relative min-h-[340px] h-full overflow-hidden rounded-[44%_56%_62%_38%/46%_40%_60%_54%] border border-brand-100">
                  <Image
                    src="/images/care-companionship-sofa-1.png"
                    alt="Humanity CSS carer sharing a supportive moment with a client"
                    fill
                    className="object-cover"
                    priority
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
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4">Key Points</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">What You Can Expect From Our Service</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Heart className="w-6 h-6" />, title: 'Person-Centred Care', desc: 'Dignified and safe personal care tailored to the individual\'s unique circumstances, goals, and needs.' },
              { icon: <Handshake className="w-6 h-6" />, title: 'Working With Professionals', desc: 'We work closely with each person’s existing professionals and service providers, including attending reviews and sharing updates.' },
              { icon: <Shield className="w-6 h-6" />, title: 'Risk Management & Welfare', desc: 'We complete welfare checks, share relevant updates, report risks, and help ensure care remains safe and responsive.' },
              { icon: <UserCheck className="w-6 h-6" />, title: 'Experienced Team', desc: 'Carers with combined decades of experience in dual diagnosis, substance dependency, and domiciliary support.' },
              { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Non-Clinical Focus', desc: 'Our focus is not clinical treatment. We provide physical care, comfort, safety, and routine stability at home.' },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="h-full rounded-lg border border-brand-100 bg-brand-50/10 p-7 transition-all duration-300 hover:border-brand-200">
                  <div className="w-12 h-12 bg-brand-50 rounded-md flex items-center justify-center text-brand-600 mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-base font-medium text-slate-800 leading-7">{item.desc}</p>
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
                <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4">Our Approach</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                  Safe, Dignified Domiciliary Support
                </h2>
                <p className="text-base md:text-lg font-medium text-slate-800 leading-8 mb-6">
                  Humanity CSS does not provide specialist drug, alcohol, or mental health treatment. Our role is to provide safe, compassionate, person-centred personal care for people who may also be living with substance dependency, alcohol dependency, or dual diagnosis.
                </p>
                <p className="text-base md:text-lg font-medium text-slate-800 leading-8 mb-7">
                  Our team has over 40 years’ combined experience supporting people affected by drug and alcohol dependency and mental health needs. This experience helps us deliver care with understanding, patience, dignity, and consistency.
                </p>
                <Link href="/contact" className="inline-flex items-center rounded-md bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-sm shadow-accent-500/20 hover:bg-accent-700 transition-colors group">
                  Get Support Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative min-h-[340px] overflow-hidden rounded-md border border-brand-100">
                <Image
                  src="/images/care-companionship-sofa-2.png"
                  alt="Humanity CSS carer supporting a client with respect and dignity"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <FadeIn>
              <div className="relative min-h-[320px] rounded-md overflow-hidden border border-brand-100">
                <Image
                  src="/images/team-office-meeting.png"
                  alt="Humanity CSS team coordinating client care together"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div>
                <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4">Wellbeing & Safety</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                  Who We Support
                </h2>
                <p className="text-base md:text-lg font-medium text-slate-800 leading-8 mb-7">
                  Our focus is not clinical treatment. Our focus is personal care, wellbeing, safety, and working in partnership with the professionals already involved.
                </p>
                <ul className="space-y-4">
                  {[
                    'Individuals with alcohol and/or drug dependency needs',
                    'Those living with a dual diagnosis (substance dependency + co-occurring mental health needs)',
                    'Clients needing structured, reliable home-based support',
                    'Coordinated care working in partnership with community drug & alcohol teams',
                    'Flexible, patient, and non-judgmental support to build stability and routine',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span className="text-base font-medium text-slate-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <GlobalCTA />
    </>
  );
}
