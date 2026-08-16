import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck, CheckCircle2, MapPin, ShieldCheck, Heart, Pill, Users, Activity, Car, ArrowRight, Clock, PhoneCall } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { AREAS, SERVICES, RAPID_RESPONSE, DIFFERENTIATORS } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-6 h-6" />,
  Pill: <Pill className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  Car: <Car className="w-6 h-6" />,
};

const rapidResponseIcons = [PhoneCall, Clock, ShieldCheck];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-50/50 pt-36 md:pt-40 pb-0">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-10 items-stretch">
            <FadeIn>
              <div className="py-8 md:py-12">
                <p className="inline-flex items-center gap-2 text-xs md:text-sm font-bold tracking-[0.14em] uppercase text-brand-600 mb-4">
                  <span className="h-[2px] w-5 bg-spark-500 inline-block rounded-full" />
                  CQC Rated Good &middot; Domiciliary Care
                </p>
                <h1 className="text-[2.25rem] md:text-5xl font-extrabold tracking-tight text-brand-900 leading-[1.05] mb-5">
                  Home Care Across London, Built on Trust
                </h1>
                <p className="text-[1.06rem] font-medium text-slate-800 leading-relaxed mb-7 max-w-xl">
                  Specialist domiciliary care for complex needs, including personal care for drug, alcohol and dual diagnosis needs, and rapid out-of-hours support. Providing services across London, including Southwark, Harrow and Ealing.
                </p>
                <div className="flex flex-wrap gap-4 mb-9">
                  <Link href="/contact" className="rounded-md bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-sm shadow-accent-500/20 hover:bg-accent-700 transition-colors">
                    Request a Call Back
                  </Link>
                  <Link href="/referrals" className="rounded-md border border-accent-300 px-6 py-3 text-base font-semibold text-slate-800 hover:bg-white transition-colors">
                    Refer a Client
                  </Link>
                </div>
                <div className="flex items-center gap-6">
                  {[
                    { value: '40+', label: 'Years experience' },
                    { value: '3+', label: 'London boroughs' },
                    { value: '24/7', label: 'Rapid response' },
                  ].map((stat, i) => (
                    <div key={stat.label} className={i > 0 ? 'pl-6 border-l border-brand-100' : ''}>
                      <p className="font-heading text-xl font-bold text-brand-700 leading-none">{stat.value}</p>
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
                    src="/images/care-companionship-sofa-1.png"
                    alt="Humanity CSS carer sharing a warm moment with a client at home"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                </div>
                <div className="absolute left-2 bottom-4 md:-left-4 md:bottom-6 flex items-center gap-3 rounded-xl border border-brand-100 bg-white p-3 pr-5 shadow-lg">
                  <div className="relative h-9 w-9 flex-shrink-0 rounded-lg bg-success-50 p-1.5">
                    <Image
                      src="/images/cqc-logo.svg"
                      alt="Care Quality Commission logo"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 leading-tight">Rated GOOD</p>
                    <p className="text-[11px] font-medium text-slate-500 leading-tight">CQC Safe &amp; Effective</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust intro strip */}
      <section className="bg-white py-14 md:py-16">
        <div className="container-wide">
          <FadeIn>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
              <div>
                <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-brand-600">Introduction</p>
                <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                  Trusted home care, delivered with dignity and consistency
                </h2>
                <p className="mt-4 text-base md:text-lg font-medium leading-8 text-slate-800">
                  Humanity CSS provides person-centred domiciliary care across London, including specialist support for complex needs and personal care for drug, alcohol and dual diagnosis needs.
                </p>
                <p className="mt-3 text-base md:text-lg font-medium leading-8 text-slate-800">
                  With a <span className="font-bold text-brand-600">GOOD CQC rating</span> and a leadership team bringing <span className="font-bold text-slate-900">40+ years of combined experience</span>, we focus on safe, reliable care that adapts to each individual.
                </p>
              </div>

              <div className="space-y-4 border-l border-brand-100 pl-0 lg:pl-8">
                <div>
                  <p className="text-sm uppercase tracking-wider text-slate-500 font-semibold">CQC Rating</p>
                  <div className="mt-1 inline-flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-brand-600" />
                    <span className="text-lg font-bold text-slate-900">Rated GOOD</span>
                  </div>
                </div>
                <div className="h-px w-full bg-brand-100" />
                <div>
                  <p className="text-sm uppercase tracking-wider text-slate-500 font-semibold">Leadership Experience</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">40+ Years Combined</p>
                </div>
                <div className="h-px w-full bg-brand-100" />
                <div>
                  <p className="text-sm uppercase tracking-wider text-slate-500 font-semibold">Local Reach</p>
                  <p className="mt-1 text-base font-semibold text-slate-800">Southwark, Harrow, Ealing, and Greater London</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-brand-50/30 py-16 md:py-20">
        <div className="container-wide">
          <FadeIn>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-brand-600">What We Do</p>
                <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 leading-tight max-w-xl">
                  Care built around the person, not a checklist
                </h2>
              </div>
              <Link href="/services" className="inline-flex items-center text-base font-semibold text-brand-600 hover:text-brand-700">
                View all services <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {SERVICES.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.08}>
                <Link href={service.href} className="group h-full flex flex-col rounded-lg border border-brand-100 bg-white p-6 hover:border-accent-300 transition-colors">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-brand-600 flex-shrink-0">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm font-medium text-slate-600 leading-6 flex-1">{service.description}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-600">
                    Learn more <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-wide">
          <FadeIn>
            <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-brand-600 text-center">Why Humanity CSS</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 leading-tight text-center max-w-2xl mx-auto">
              What makes our care different
            </h2>
          </FadeIn>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto">
            {DIFFERENTIATORS.slice(0, 4).map((item, index) => (
              <FadeIn key={item} delay={index * 0.04}>
                <div className="flex items-start gap-3 rounded-md border border-brand-100 bg-brand-50/10 p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-brand-600 flex-shrink-0" />
                  <span className="text-base font-medium text-slate-800">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-8 text-center">
              <Link href="/about" className="inline-flex items-center text-base font-semibold text-brand-600 hover:text-brand-700">
                More about our approach <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Rapid Response */}
      <section className="bg-accent-100 py-14 md:py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 items-stretch">
            <FadeIn className="rounded-md border border-accent-200 bg-brand-50/30 p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-brand-900">
                Rapid Response &amp;
                <br />
                Out-of-Hours Support
              </h2>
              <p className="mt-4 text-slate-800 text-base md:text-lg font-medium">
                We provide focused services where quick intervention and specialist knowledge matter most.
              </p>
              <div className="mt-7 space-y-4">
                {RAPID_RESPONSE.map((item, index) => {
                  const Icon = rapidResponseIcons[index] ?? ShieldCheck;
                  return (
                    <div key={item.title} className="flex gap-4 rounded-md border border-brand-100 bg-white p-4">
                      <div className="w-9 h-9 rounded-md bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                        <p className="mt-0.5 text-sm font-medium text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>

            <FadeIn direction="right" className="relative min-h-[360px] rounded-md overflow-hidden border border-accent-200">
              <Image
                src="/images/care-companionship-tea.png"
                alt="Humanity CSS carer bringing tea to a client at home"
                fill
                className="object-cover"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Areas we cover */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-wide">
          <FadeIn className="rounded-md border border-brand-100 bg-brand-50/10 overflow-hidden">
            <div className="grid md:grid-cols-[1fr_1fr]">
              <div className="p-7 md:p-10">
                <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-brand-600">Coverage</p>
                <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 leading-tight">Areas We Cover</h2>
                <p className="mt-3 text-base font-medium text-slate-700 max-w-md">
                  Delivering care today across Southwark, Harrow and Ealing, with plans to expand into further London boroughs.
                </p>
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {AREAS.map((area) => (
                    <div key={area.name} className="rounded-md border border-brand-100 bg-white px-3 py-2.5 text-base font-medium text-slate-800 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent-500 flex-shrink-0" />
                      {area.name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[280px] md:min-h-full">
                <iframe
                  title="Map of Southwark, Harrow and Ealing, London"
                  src="https://maps.google.com/maps?q=Southwark,London,UK&z=10&output=embed"
                  className="absolute inset-0 h-full w-full grayscale-[15%]"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute left-3 bottom-3 md:left-4 md:bottom-4 rounded-lg border border-brand-100 bg-white/95 px-3 py-2 shadow-md">
                  <p className="text-xs font-bold text-slate-900">Southwark &middot; Harrow &middot; Ealing</p>
                  <p className="text-[11px] font-medium text-slate-500">Expanding borough by borough</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-50/50 py-12">
        <div className="container-wide">
          <FadeIn className="rounded-md border border-brand-100 bg-white p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p className="text-2xl md:text-[2rem] font-bold text-slate-900">Speak to our team today</p>
              <p className="text-base font-medium text-slate-700 mt-2">We are here to answer your questions and arrange care quickly.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-md bg-accent-500 px-5 py-2.5 text-base font-semibold text-white shadow-sm shadow-accent-500/20 hover:bg-accent-700 transition-colors">
                Request a Call Back
              </Link>
              <Link href="/referrals" className="rounded-md border border-accent-300 px-5 py-2.5 text-base font-semibold text-slate-800 hover:bg-white transition-colors">
                Refer a Client
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white pt-0">
        <div className="container-wide">
          <div className="h-px w-full bg-brand-100" />
          <div className="py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-slate-500">
            <div className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-brand-600" />
              CQC Rated GOOD Home Care Provider
            </div>
            <div>© Humanity CSS</div>
          </div>
        </div>
      </section>
    </>
  );
}
