import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck, CheckCircle2, MapPin, ShieldCheck, Stethoscope, Heart, Pill, Users, Brain, Shield } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { AREAS } from '@/lib/constants';

const services = [
  { icon: <Heart className="h-5 w-5" />, title: 'Personal care' },
  { icon: <Pill className="h-5 w-5" />, title: 'Medication support' },
  { icon: <Users className="h-5 w-5" />, title: 'Companionship' },
  { icon: <Stethoscope className="h-5 w-5" />, title: 'Complex care' },
  { icon: <Brain className="h-5 w-5" />, title: 'Mental health' },
  { icon: <Shield className="h-5 w-5" />, title: 'Substance misuse' },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-[#f2f8f7] pt-28 md:pt-32 pb-0">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-10 items-stretch">
            <FadeIn>
              <div className="py-8 md:py-12">
                <h1 className="text-[2.25rem] md:text-5xl font-extrabold tracking-tight text-[#0f2d2a] leading-[1.05] mb-5">
                  CQC Rated <span className="text-[#0d9488]">GOOD</span>
                  <br />
                  Home Care Across London
                </h1>
                <p className="text-[1.06rem] font-medium text-slate-800 leading-relaxed mb-7 max-w-xl">
                  Specialist domiciliary care for complex needs, including mental health, substance misuse, and rapid out-of-hours support. Providing services across London, including Southwark, Harrow and Ealing.
                </p>
                <div className="flex flex-wrap gap-4">
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
              <div className="relative min-h-[360px] h-full overflow-hidden rounded-md border border-[#d6e7e5]">
                <Image
                  src="https://images.pexels.com/photos/7551592/pexels-photo-7551592.jpeg"
                  alt="Carer supporting an older client at home"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                <div className="absolute top-4 right-4 md:top-5 md:right-5 w-[138px] rounded-md border border-[#d9e8e6] bg-white p-2 shadow-sm">
                  <div className="relative h-8 w-full rounded border border-[#e3d8ef] bg-white overflow-hidden">
                    <Image
                      src="/images/cqc-logo.svg"
                      alt="Care Quality Commission logo"
                      fill
                      className="object-contain object-left p-1"
                    />
                  </div>
                  <p className="mt-1 text-[10px] leading-none font-medium text-slate-700">CQC Safe and Effective</p>
                  <div className="mt-1 inline-flex w-full items-center justify-center rounded-sm bg-[#2f8f46] px-2 py-1 text-[10px] font-bold text-white tracking-wide">
                    GOOD
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-wide">
          <FadeIn>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
              <div>
                <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-[#0d9488]">Introduction</p>
                <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                  Trusted home care, delivered with dignity and consistency
                </h2>
                <p className="mt-4 text-base md:text-lg font-medium leading-8 text-slate-800">
                  Humanity Care &amp; Support Services provides person-centred domiciliary care across London, including specialist support for complex needs, mental health, and substance misuse.
                </p>
                <p className="mt-3 text-base md:text-lg font-medium leading-8 text-slate-800">
                  With a <span className="font-bold text-[#0d9488]">GOOD CQC rating</span> and a leadership team bringing <span className="font-bold text-slate-900">40+ years of combined experience</span>, we focus on safe, reliable care that adapts to each individual.
                </p>
              </div>

              <div className="space-y-4 border-l border-[#dcebe9] pl-0 lg:pl-8">
                <div>
                  <p className="text-sm uppercase tracking-wider text-slate-500 font-semibold">CQC Rating</p>
                  <div className="mt-1 inline-flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-[#0d9488]" />
                    <span className="text-lg font-bold text-slate-900">Rated GOOD</span>
                  </div>
                </div>
                <div className="h-px w-full bg-[#dcebe9]" />
                <div>
                  <p className="text-sm uppercase tracking-wider text-slate-500 font-semibold">Leadership Experience</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">40+ Years Combined</p>
                </div>
                <div className="h-px w-full bg-[#dcebe9]" />
                <div>
                  <p className="text-sm uppercase tracking-wider text-slate-500 font-semibold">Local Reach</p>
                  <p className="mt-1 text-base font-semibold text-slate-800">Southwark, Harrow, Ealing, and Greater London</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white pb-14">
        <div className="container-wide">
          <FadeIn className="relative h-[300px] md:h-[430px] overflow-hidden rounded-md border border-[#dbe8e6]">
            <Image
              src="https://images.pexels.com/photos/7345446/pexels-photo-7345446.jpeg"
              alt="Carer supporting elderly person in home setting"
              fill
              className="object-cover"
            />
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#dcefee] py-12 md:py-14">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 items-stretch">
            <FadeIn className="rounded-md border border-[#c7e1de] bg-[#ecf6f5] p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#123c39]">
                Rapid Response &amp;
                <br />
                Out-of-Hours Support
              </h2>
              <p className="mt-4 text-slate-800 text-base md:text-lg font-medium">
                We provide focused services where quick intervention and specialist knowledge matter most.
              </p>
              <ul className="mt-5 space-y-2 text-base font-medium text-slate-800">
                {['Welfare checks', 'Crisis response', 'Out-of-hours support'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#0d9488]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 grid sm:grid-cols-3 gap-3">
                {services.map((service) => (
                  <div key={service.title} className="rounded-md border border-[#d2e6e3] bg-white p-3">
                    <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded bg-[#ecf7f5] text-[#0d9488]">
                      {service.icon}
                    </div>
                    <p className="text-sm font-semibold text-slate-800">{service.title}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right" className="relative min-h-[360px] rounded-md overflow-hidden border border-[#c8e0dc]">
              <Image
                src="https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg"
                alt="Care worker smiling with client in London"
                fill
                className="object-cover"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container-wide grid lg:grid-cols-[1fr_1fr] gap-8 items-start">
          <FadeIn className="rounded-md border border-[#d8e8e6] bg-white p-7">
            <h3 className="text-2xl font-bold text-slate-900">What Makes Us Different</h3>
            <ul className="mt-5 space-y-3">
              {[
                'Specialist in high-risk care',
                'Supporting difficult-to-engage clients',
                'Rated GOOD by CQC',
                'Leadership with 40 years combined experience',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-base font-medium text-slate-800">
                  <ShieldCheck className="mt-0.5 h-4 w-4 text-[#0d9488]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="right" className="rounded-md border border-[#dbe8e6] bg-[#f7fbfa] p-6">
            <h3 className="text-base font-semibold tracking-wide uppercase text-slate-700 mb-4">Areas We Cover</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {AREAS.map((area) => (
                <div key={area.name} className="rounded-md border border-[#dcebe9] bg-white px-3 py-2.5 text-base font-medium text-slate-800 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#0d9488]" />
                  {area.name}
                </div>
              ))}
            </div>
            <div className="mt-5 relative h-[220px] rounded-md overflow-hidden border border-[#dcebe9]">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                alt="London map style placeholder"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#e7f3f2] py-12">
        <div className="container-wide">
          <FadeIn className="rounded-md border border-[#d4e8e5] bg-white p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p className="text-2xl md:text-[2rem] font-bold text-slate-900">Speak to our team today</p>
              <p className="text-base font-medium text-slate-700 mt-2">We are here to answer your questions and arrange care quickly.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-md bg-[#0d9488] px-5 py-2.5 text-base font-semibold text-white">
                Request a Call Back
              </Link>
              <Link href="/referrals" className="rounded-md border border-[#8cafaa] px-5 py-2.5 text-base font-semibold text-slate-800">
                Refer a Client
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white pt-0">
        <div className="container-wide">
          <div className="h-px w-full bg-[#e2ecea]" />
          <div className="py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-slate-500">
            <div className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-[#0d9488]" />
              CQC Rated GOOD Home Care Provider
            </div>
            <div>© Humanity Care &amp; Support Services</div>
          </div>
        </div>
      </section>
    </>
  );
}