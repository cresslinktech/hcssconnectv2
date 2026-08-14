import Link from 'next/link';
import { Home, Phone, ArrowRight, HeartHandshake } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-brand-50/50 pt-36 md:pt-40 pb-20 min-h-[70vh] flex items-center">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 right-0 h-64 w-64 rounded-full bg-spark-500/15 blur-3xl" />
      <div className="container-wide relative">
        <div className="max-w-xl">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 mb-6">
            <HeartHandshake className="w-7 h-7" />
          </div>
          <p className="text-xs md:text-sm font-bold tracking-[0.14em] uppercase text-brand-600 mb-4">
            Error 404
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-900 leading-[1.08] mb-5">
            We couldn&rsquo;t find that page
          </h1>
          <p className="text-base md:text-lg font-medium leading-8 text-slate-800 mb-8">
            The page you&rsquo;re looking for may have been moved or no longer exists. If you were expecting to find
            something here, our team is happy to help you find it.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link href="/" className="inline-flex items-center gap-2 rounded-md bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-sm shadow-accent-500/20 hover:bg-accent-700 transition-colors">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 rounded-md border border-accent-300 px-6 py-3 text-base font-semibold text-slate-800 hover:bg-white transition-colors">
              <Phone className="w-4 h-4" />
              {SITE_CONFIG.phone}
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: 'Our Services', href: '/services' },
              { label: 'School Run', href: '/school-run' },
              { label: 'Referrals', href: '/referrals' },
              { label: 'Contact Us', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center text-base font-semibold text-brand-600 hover:text-brand-700"
              >
                {link.label} <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
