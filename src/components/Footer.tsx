import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f4faf9] text-slate-600 border-t border-[#dcebe9]">
      <div className="container-wide py-14 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-[#0d9488] rounded-md flex items-center justify-center">
                <span className="text-white font-bold">H</span>
              </div>
              <div className="leading-tight">
                <span className="font-bold text-lg text-slate-900">Humanity CSS</span>
              </div>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-5 max-w-xs">
              CQC Rated GOOD specialist domiciliary care across London. Compassion, dignity, excellence.
            </p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-slate-600 hover:text-[#0d9488] transition-colors">
                <Phone className="w-4 h-4 text-[#0d9488]" />
                {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 text-slate-600 hover:text-[#0d9488] transition-colors">
                <Mail className="w-4 h-4 text-[#0d9488]" />
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-slate-900 font-semibold text-sm mb-5 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Personal Care', href: '/services' },
                { label: 'Complex Care', href: '/services/complex-care' },
                { label: 'Mental Health', href: '/services' },
                { label: 'Addiction Support', href: '/services/addiction-recovery' },
                { label: 'Companionship', href: '/services' },
                { label: 'Live-in Care', href: '/services' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-slate-600 hover:text-[#0d9488] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-slate-900 font-semibold text-sm mb-5 uppercase tracking-wider">Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Our Services', href: '/services' },
                { label: 'Referrals', href: '/referrals' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-slate-600 hover:text-[#0d9488] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-slate-900 font-semibold text-sm mb-5 uppercase tracking-wider">Areas</h4>
            <ul className="space-y-2.5">
              {['Southwark', 'Harrow', 'Ealing', 'Greater London'].map((area) => (
                <li key={area}>
                  <span className="text-sm text-slate-600">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#dcebe9]">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved. CQC Registered Provider.
          </p>
          <div className="flex items-center gap-5 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-slate-700 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-700 transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-slate-700 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
