import Image from 'next/image';
import Link from 'next/link';
import { Heart, Pill, Users, Activity, Brain, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import GlobalCTA from '@/components/GlobalCTA';
import { SERVICES } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Humanity CSS — Domiciliary Care Services London',
  description: 'Explore our comprehensive domiciliary care services including personal care, medication support, complex care, mental health, and addiction recovery across London.',
};

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-7 h-7" />,
  Pill: <Pill className="w-7 h-7" />,
  Users: <Users className="w-7 h-7" />,
  Activity: <Activity className="w-7 h-7" />,
  Brain: <Brain className="w-7 h-7" />,
  Shield: <Shield className="w-7 h-7" />,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-50/50 pt-28 md:pt-32 pb-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-stretch">
            <FadeIn>
              <div className="py-6 md:py-10">
                <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-[#2563eb]">Our Services</p>
                <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-[#1e3a8a] leading-[1.08]">
                  Specialist care services across London
                </h1>
                <p className="mt-5 text-base md:text-lg font-medium leading-8 text-slate-800 max-w-2xl">
                  From personal care and medication support to complex care, mental health, and substance misuse support, we deliver safe, person-centred care at home.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative min-h-[340px] h-full overflow-hidden rounded-md border border-brand-100">
                <Image
                  src="https://images.pexels.com/photos/29354077/pexels-photo-29354077.jpeg"
                  alt="Care professional supporting a client in their home"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.1}>
                <div className="h-full rounded-lg border border-brand-100 bg-brand-50/10 p-6 transition-all duration-300 hover:border-brand-200 group">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-base font-medium text-slate-800 leading-7 mb-5">{service.description}</p>
                  <Link href={service.href} className="inline-flex items-center text-base font-semibold text-brand-600">
                    Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-center">
            <FadeIn>
              <div>
                <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4">Our Process</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                  How We Deliver Care
                </h2>
                <p className="text-base md:text-lg font-medium text-slate-800 leading-8 mb-7">
                  Every care journey begins with a thorough assessment to understand your unique needs, 
                  preferences, and goals. We work closely with you, your family, and healthcare professionals 
                  to create a bespoke care plan.
                </p>
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Initial Consultation', desc: 'Free, no-obligation discussion about your care needs and preferences.' },
                    { step: '02', title: 'Comprehensive Assessment', desc: 'Detailed assessment by our experienced care managers in your home.' },
                    { step: '03', title: 'Bespoke Care Plan', desc: 'Tailored care plan developed in partnership with you and your family.' },
                    { step: '04', title: 'Matched Care Team', desc: 'Carefully matched carers based on skills, personality, and cultural fit.' },
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
              <div className="relative min-h-[360px] overflow-hidden rounded-md border border-brand-100">
                <Image
                  src="https://images.pexels.com/photos/29372708/pexels-photo-29372708.jpeg"
                  alt="Care assessment conversation in a home setting"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-brand-50/50 py-14">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="inline-block text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4">Specialist Services</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
                Explore Our Specialist Care Pathways
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <Link href="/services/complex-care" className="group block rounded-lg border border-accent-200 bg-white p-8 hover:border-accent-300 transition-all duration-300">
                <Activity className="w-10 h-10 text-brand-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Complex Care</h3>
                <p className="text-base font-medium text-slate-800 leading-relaxed mb-4">Specialist support for individuals with complex medical and clinical needs including PEG feeding, tracheostomy, and ventilation care.</p>
                <span className="inline-flex items-center text-brand-600 text-base font-semibold group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/services/addiction-recovery" className="group block rounded-lg border border-accent-200 bg-white p-8 hover:border-accent-300 transition-all duration-300">
                <Shield className="w-10 h-10 text-brand-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Addiction & Recovery</h3>
                <p className="text-base font-medium text-slate-800 leading-relaxed mb-4">Non-judgmental, person-centred support for individuals on their recovery journey from substance misuse and addiction.</p>
                <span className="inline-flex items-center text-brand-600 text-base font-semibold group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <GlobalCTA />
    </>
  );
}
