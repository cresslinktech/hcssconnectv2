import Image from 'next/image';
import { BadgeCheck, Users, HeartHandshake } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import GlobalCTA from '@/components/GlobalCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | HCSS Connect — Specialist Domiciliary Care London',
  description: 'Humanity Care & Support Services is a Southwark-based domiciliary care provider delivering safe, compassionate, person-centred care across London.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#f2f8f7] pt-28 md:pt-32 pb-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-stretch">
            <FadeIn>
              <div className="py-6 md:py-10">
                <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-[#0d9488]">About Us</p>
                <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f2d2a] leading-[1.08]">
                  Trusted domiciliary care across London
                </h1>
                <p className="mt-5 text-base md:text-lg font-medium leading-8 text-slate-800 max-w-2xl">
                  Humanity Care &amp; Support Services is a domiciliary care provider based in Southwark, delivering high-quality care across London.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/contact" className="rounded-md bg-[#0d9488] px-6 py-3 text-base font-semibold text-white hover:bg-[#0b7f75] transition-colors">
                    Request a Call Back
                  </Link>
                  <Link href="/referrals" className="rounded-md border border-[#7ea9a4] px-6 py-3 text-base font-semibold text-slate-800 hover:bg-white transition-colors">
                    Refer a Client
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="relative min-h-[340px] h-full overflow-hidden rounded-md border border-[#d6e7e5]">
                <Image
                  src="https://images.pexels.com/photos/29372734/pexels-photo-29372734.jpeg"
                  alt="Care professional supporting a client at home"
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
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-lg border border-[#dcebe9] bg-[#f7fbfa] p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#eaf6f4] text-[#0d9488]">
                  <Users className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-xl font-bold text-slate-900">Experienced Leadership</h2>
                <p className="mt-2 text-base font-medium leading-7 text-slate-800">
                  Our leadership team brings over 40 years of combined experience in substance misuse, mental health, and complex care.
                </p>
              </div>

              <div className="rounded-lg border border-[#dcebe9] bg-[#f7fbfa] p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#eaf6f4] text-[#0d9488]">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-xl font-bold text-slate-900">Specialist Background</h2>
                <p className="mt-2 text-base font-medium leading-7 text-slate-800">
                  Our team includes senior experience within specialist addiction services, shaping how we support people with complex and changing needs.
                </p>
              </div>

              <div className="rounded-lg border border-[#dcebe9] bg-[#f7fbfa] p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#eaf6f4] text-[#0d9488]">
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

      <section className="bg-white pb-16">
        <div className="container-wide">
          <FadeIn className="grid lg:grid-cols-[1fr_1fr] gap-8 items-center">
            <div className="relative min-h-[320px] rounded-md overflow-hidden border border-[#dcebe9]">
              <Image
                src="https://images.pexels.com/photos/18459192/pexels-photo-18459192.jpeg"
                alt="Care worker and client sharing a supportive moment"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:pl-4">
              <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-[#0d9488]">Who We Are</p>
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

      <GlobalCTA />
    </>
  );
}
