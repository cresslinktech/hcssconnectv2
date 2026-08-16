import Image from 'next/image';
import { BadgeCheck, Users, HeartHandshake, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import GlobalCTA from '@/components/GlobalCTA';
import { DIFFERENTIATORS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Humanity CSS: Specialist Domiciliary Care London',
  description: 'Humanity CSS is a Southwark-based domiciliary care provider delivering safe, compassionate, person-centred care across London.',
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-50/50 pt-36 md:pt-40 pb-16">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-stretch">
            <FadeIn>
              <div className="py-6 md:py-10">
                <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-brand-600">About Us</p>
                <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-brand-900 leading-[1.08]">
                  Trusted domiciliary care across London
                </h1>
                <p className="mt-5 text-base md:text-lg font-medium leading-8 text-slate-800 max-w-2xl">
                  Humanity CSS is a domiciliary care provider based in Southwark, delivering high-quality care across London.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/contact" className="rounded-md bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-sm shadow-accent-500/20 hover:bg-accent-700 transition-colors">
                    Request a Call Back
                  </Link>
                  <Link href="/referrals" className="rounded-md border border-accent-300 px-6 py-3 text-base font-semibold text-slate-800 hover:bg-white transition-colors">
                    Refer a Client
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="relative min-h-[340px] h-full">
                <div className="pointer-events-none absolute -top-6 -right-6 h-2/3 w-2/3 rounded-full bg-spark-500/15 blur-2xl" />
                <div className="relative min-h-[340px] h-full overflow-hidden rounded-[44%_56%_62%_38%/46%_40%_60%_54%] border border-brand-100">
                  <Image
                    src="/images/team-office-meeting.png"
                    alt="The Humanity CSS team together in our office"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <FadeIn className="grid lg:grid-cols-[1fr_1fr] gap-8 items-center">
            <div className="relative min-h-[320px] rounded-md overflow-hidden border border-brand-100">
              <Image
                src="/images/care-team-lounge.png"
                alt="Humanity CSS carers spending time with clients in their home"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:pl-4">
              <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-brand-600">Who We Are</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Southwark-based, London-focused care
              </h2>
              <p className="mt-4 text-base md:text-lg font-medium leading-8 text-slate-800">
                We work closely with families, professionals, and local partners to deliver dependable care at home across London boroughs.
              </p>
              <p className="mt-3 text-base md:text-lg font-medium leading-8 text-slate-800">
                Every plan is built around the person, with practical support that is respectful, responsive, and tailored to individual outcomes.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Leadership pillars */}
      <section className="bg-brand-50/30 py-16">
        <div className="container-wide">
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-lg border border-brand-100 bg-white p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                  <Users className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-xl font-bold text-slate-900">Experienced Leadership</h2>
                <p className="mt-2 text-base font-medium leading-7 text-slate-800">
                  Our leadership team brings over 40 years of combined experience in drug and alcohol support, dual diagnosis, and complex care.
                </p>
              </div>

              <div className="rounded-lg border border-brand-100 bg-white p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-xl font-bold text-slate-900">Specialist Background</h2>
                <p className="mt-2 text-base font-medium leading-7 text-slate-800">
                  Our team includes senior experience within specialist addiction services, shaping how we support people with complex and changing needs.
                </p>
              </div>

              <div className="rounded-lg border border-brand-100 bg-white p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-xl font-bold text-slate-900">Our Care Approach</h2>
                <p className="mt-2 text-base font-medium leading-7 text-slate-800">
                  We provide safe, compassionate, and person-centred care focused on dignity, trust, and continuity in every visit.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Full differentiators */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-wide">
          <FadeIn>
            <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-brand-600 text-center">What Makes Us Different</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 leading-tight text-center max-w-2xl mx-auto">
              The standards behind every visit
            </h2>
          </FadeIn>
          <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto">
            {DIFFERENTIATORS.map((item, index) => (
              <FadeIn key={item} delay={index * 0.04}>
                <div className="flex items-start gap-3 rounded-md border border-brand-100 bg-brand-50/10 p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-brand-600 flex-shrink-0" />
                  <span className="text-base font-medium text-slate-800">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA />
    </>
  );
}
