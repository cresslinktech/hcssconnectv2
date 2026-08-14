import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-brand-300">
      <div className="container-wide py-14 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center mb-5">
              <div className="relative h-9 w-56">
                <Image
                  src="/images/logo.png"
                  alt="Humanity CSS Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-brand-300 text-sm leading-relaxed mb-5 max-w-xs">
              CQC Rated GOOD specialist domiciliary care across London. Compassion, dignity, excellence.
            </p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-brand-200 hover:text-accent-300 transition-colors">
                <Phone className="w-4 h-4 text-accent-400" />
                {SITE_CONFIG.phone}
              </a>
              {SITE_CONFIG.mobile && (
                <a href={`tel:${SITE_CONFIG.mobile.replace(/\s/g, '')}`} className="flex items-center gap-2 text-brand-200 hover:text-accent-300 transition-colors">
                  <Phone className="w-4 h-4 text-accent-400" />
                  {SITE_CONFIG.mobile}
                </a>
              )}
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 text-brand-200 hover:text-accent-300 transition-colors">
                <Mail className="w-4 h-4 text-accent-400" />
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Personal Care', href: '/services' },
                { label: 'Complex Care', href: '/services/complex-care' },
                { label: 'Drug & Alcohol Care', href: '/services/drug-alcohol-dual-diagnosis' },
                { label: 'Companionship', href: '/services' },
                { label: 'Live-in Care', href: '/services' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-brand-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'School Run', href: '/school-run' },
                { label: 'Our Services', href: '/services' },
                { label: 'About Us', href: '/about' },
                { label: 'Referrals', href: '/referrals' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-brand-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Areas</h4>
            <ul className="space-y-2.5">
              {['Southwark', 'Harrow', 'Ealing', 'Greater London'].map((area) => (
                <li key={area}>
                  <span className="text-sm text-brand-300">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-brand-400">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved. CQC Registered Provider.
          </p>
          <div className="flex items-center gap-5 text-xs text-brand-400">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
