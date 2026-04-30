import Image from 'next/image';
import { Shield, CheckCircle2, ArrowRight, Heart, UserCheck, Handshake } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import GlobalCTA from '@/components/GlobalCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Addiction & Recovery Support | Humanity CSS — Substance Misuse Care London',
  description: 'Non-judgmental, person-centred support for individuals recovering from addiction and substance misuse. Specialist domiciliary care across London.',
};

export default function AddictionRecoveryPage() {
  return (
    <>
      <section className="bg-brand-50/50 pt-28 md:pt-32 pb-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-stretch">
            <FadeIn>
              <div className="py-6 md:py-10">
                <div className="flex items-center gap-2 text-[#0d9488] text-sm md:text-base font-semibold mb-4">
                  <Link href="/services" className="hover:underline">Our Services</Link>
                  <span>/</span>
                  <span>Addiction & Recovery</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-900 leading-[1.08] mb-5 max-w-3xl">
                  Addiction & Recovery Support
                </h1>
                <p className="text-base md:text-lg font-medium text-slate-800 max-w-2xl leading-8">
                  Non-judgmental, person-centred support for individuals on their recovery journey, delivered with compassion and consistency by experienced professionals.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative min-h-[340px] h-full overflow-hidden rounded-md border border-brand-100">
                <Image
                  src="https://images.pexels.com/photos/7176324/pexels-photo-7176324.jpeg"
                  alt="Supportive conversation during recovery care"
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
                <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4">Our Approach</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                  Recovery-Focused, Person-Centred Care
                </h2>
                <p className="text-base md:text-lg font-medium text-slate-800 leading-8 mb-6">
                  We understand that addiction is a complex condition that requires a compassionate, 
                  holistic approach. Our team is experienced in supporting individuals with substance 
                  misuse issues, dual diagnosis, and co-occurring mental health conditions.
                </p>
                <p className="text-base md:text-lg font-medium text-slate-800 leading-8 mb-7">
                  We work alongside community drug and alcohol teams, mental health services, and 
                  housing providers to deliver integrated support that addresses the whole person — 
                  not just the addiction. Our goal is to empower individuals to build stability, 
                  develop coping strategies, and work towards sustained recovery.
                </p>
                <Link href="/contact" className="inline-flex items-center rounded-md bg-brand-600 px-6 py-3 text-base font-semibold text-white hover:bg-brand-700 transition-colors group">
                  Get Support Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative min-h-[340px] overflow-hidden rounded-md border border-brand-100">
                <Image
                  src="https://images.pexels.com/photos/7447065/pexels-photo-7447065.jpeg"
                  alt="Recovery support session with care professional"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-brand-50/20 py-16">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4">Key Points</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">What You Can Expect From Our Service</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Heart className="w-6 h-6" />, title: 'We Provide Care, Not Treatment', desc: 'Our role is to deliver practical, person-centred care at home, not clinical addiction treatment.' },
              { icon: <Shield className="w-6 h-6" />, title: 'We Understand Addiction and Relapse', desc: 'Our team supports people with compassion, consistency, and realistic recovery-focused care.' },
              { icon: <Handshake className="w-6 h-6" />, title: 'We Work With Professionals', desc: 'We coordinate with drug and alcohol teams, mental health services, and other local partners.' },
              { icon: <CheckCircle2 className="w-6 h-6" />, title: 'We Attend Reviews and Manage Risk', desc: 'We contribute to multi-agency reviews, monitor risks, and help keep support plans safe and current.' },
              { icon: <UserCheck className="w-6 h-6" />, title: 'We Support Housebound Clients', desc: 'We provide reliable home-based support for people unable to access community services independently.' },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="h-full rounded-lg border border-brand-100 bg-white p-7 transition-all duration-300 hover:border-brand-200">
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

      <section className="bg-white pb-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <FadeIn>
              <div className="relative min-h-[320px] rounded-md overflow-hidden border border-brand-100">
                <Image
                  src="https://images.pexels.com/photos/7447080/pexels-photo-7447080.jpeg"
                  alt="Recovery support in community care setting"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div>
                <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4">Who We Help</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                  Supporting All Stages of Recovery
                </h2>
                <p className="text-base md:text-lg font-medium text-slate-800 leading-8 mb-7">
                  Our service is designed for adults at all stages of their recovery journey, including those who 
                  may be reluctant to engage with traditional services.
                </p>
                <ul className="space-y-4">
                  {[
                    'Individuals with alcohol and/or drug dependency',
                    'Those with dual diagnosis (addiction + mental health)',
                    'People transitioning from residential rehab to community',
                    'Clients referred by social services or probation',
                    'Individuals at risk of homelessness due to substance issues',
                    'Hard-to-engage clients requiring a patient, flexible approach',
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
