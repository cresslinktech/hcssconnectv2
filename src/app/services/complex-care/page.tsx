import Image from 'next/image';
import { Activity, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import GlobalCTA from '@/components/GlobalCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complex Care | HCSS Connect — Specialist Clinical Care at Home',
  description: 'Expert complex care services including PEG feeding, tracheostomy care, ventilation support, and clinical interventions delivered safely in the comfort of your home.',
};

export default function ComplexCarePage() {
  return (
    <>
      <section className="bg-[#f2f8f7] pt-28 md:pt-32 pb-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-stretch">
            <FadeIn>
              <div className="py-6 md:py-10">
                <div className="flex items-center gap-2 text-[#0d9488] text-sm md:text-base font-semibold mb-4">
                  <Link href="/services" className="hover:underline">Our Services</Link>
                  <span>/</span>
                  <span>Complex Care</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f2d2a] leading-[1.08] mb-5 max-w-3xl">
                  Specialist Complex Care at Home
                </h1>
                <p className="text-base md:text-lg font-medium text-slate-800 max-w-2xl leading-8">
                  Expert clinical support for individuals with complex medical needs, delivered safely and compassionately in the comfort of home.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative min-h-[340px] h-full overflow-hidden rounded-md border border-[#d6e7e5]">
                <Image
                  src="https://images.pexels.com/photos/8439676/pexels-photo-8439676.jpeg"
                  alt="Specialist carer supporting an older client"
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
                <span className="inline-block text-[#0d9488] font-semibold text-sm uppercase tracking-wider mb-4">Complex Care</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                  Clinical excellence in your home
                </h2>
                <p className="text-base md:text-lg font-medium text-slate-800 leading-8 mb-6">
                  Our complex care service supports people who require specialist clinical interventions and ongoing medical support. Care is delivered by trained professionals with nurse-led oversight.
                </p>
                <p className="text-base md:text-lg font-medium text-slate-800 leading-8 mb-7">
                  We combine technical competence with empathy and consistency, so individuals and families feel safe, respected, and supported at every stage.
                </p>
                <Link href="/contact" className="inline-flex items-center rounded-md bg-[#0d9488] px-6 py-3 text-base font-semibold text-white hover:bg-[#0b7f75] transition-colors group">
                  Discuss Your Needs
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative min-h-[340px] overflow-hidden rounded-md border border-[#dcebe9]">
                <Image
                  src="https://images.pexels.com/photos/6248954/pexels-photo-6248954.jpeg"
                  alt="Professional complex care planning discussion"
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
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-[#0d9488] font-semibold text-sm uppercase tracking-wider mb-4">What We Provide</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complex Care Services</h2>
              <p className="text-base md:text-lg font-medium text-slate-800">Our trained professionals provide these specialist interventions.</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'PEG Feeding & Nutritional Support',
              'Tracheostomy Care & Management',
              'Ventilator & Respiratory Support',
              'Catheter Care & Management',
              'Stoma Care & Management',
              'Epilepsy & Seizure Management',
              'Spinal Injury Support',
              'Acquired Brain Injury Support',
              'Neurological Conditions',
              'Palliative & End-of-Life Care',
              'Diabetes Management',
              'Post-Surgical Recovery',
            ].map((service, index) => (
              <FadeIn key={service} delay={index * 0.05}>
                <div className="flex items-start gap-3 rounded-md border border-[#dcebe9] bg-white p-5">
                  <CheckCircle2 className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" />
                  <span className="text-base font-medium text-slate-800">{service}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-center">
            <FadeIn>
              <div className="relative min-h-[320px] rounded-md overflow-hidden border border-[#dcebe9]">
                <Image
                  src="https://images.pexels.com/photos/6130948/pexels-photo-6130948.jpeg"
                  alt="Care professional reviewing clinical notes"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div>
                <span className="inline-block text-[#0d9488] font-semibold text-sm uppercase tracking-wider mb-4">Our Standards</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                  Safety & Quality Assurance
                </h2>
                <p className="text-base md:text-lg font-medium text-slate-800 leading-8 mb-7">
                  All complex care is delivered under robust clinical governance frameworks. Our staff 
                  receive specialist training accredited by recognised healthcare bodies, with regular 
                  competency assessments and clinical supervision.
                </p>
                <ul className="space-y-4">
                  {[
                    'Nurse-led care planning and oversight',
                    'Accredited clinical skills training for all carers',
                    'Regular competency assessments and refresher courses',
                    'Detailed risk assessments and safety protocols',
                    'Close collaboration with GPs, district nurses, and specialists',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" />
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
