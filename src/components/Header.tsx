'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, ChevronDown, X, Menu, BadgeCheck, Home, Info, HeartHandshake, Car, UserPlus, MapPin } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG, AREAS } from '@/lib/constants';

const NAV_ICONS: Record<string, React.ReactNode> = {
  'Home': <Home className="w-[18px] h-[18px]" />,
  'About Us': <Info className="w-[18px] h-[18px]" />,
  'Our Services': <HeartHandshake className="w-[18px] h-[18px]" />,
  'School Run': <Car className="w-[18px] h-[18px]" />,
  'Referrals': <UserPlus className="w-[18px] h-[18px]" />,
  'Contact': <Mail className="w-[18px] h-[18px]" />,
};

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [expandedMobileLink, setExpandedMobileLink] = useState<string | null>(null);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      // Auto-expand the Services accordion if the user is already on a services page
      setExpandedMobileLink(pathname.startsWith('/services') ? 'Our Services' : null);
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen, pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobileLink(expandedMobileLink === label ? null : label);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* Utility bar */}
      <div className="bg-brand-800 text-white">
        <div className="container-wide">
          <div className="flex items-center justify-between h-8 md:h-9 text-[11px] md:text-xs font-semibold">
            <div className="flex items-center gap-4 md:gap-5 min-w-0">
              <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="flex items-center gap-1.5 hover:text-accent-200 transition-colors whitespace-nowrap">
                <Phone className="w-3 h-3 flex-shrink-0" />
                {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="hidden sm:flex items-center gap-1.5 hover:text-accent-200 transition-colors whitespace-nowrap">
                <Mail className="w-3 h-3 flex-shrink-0" />
                {SITE_CONFIG.email}
              </a>
            </div>
            <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 whitespace-nowrap">
                <BadgeCheck className="w-3 h-3 flex-shrink-0" />
                <span className="sm:hidden">CQC GOOD</span>
                <span className="hidden sm:inline">CQC Rated GOOD</span>
              </span>
              <span className="hidden md:inline-flex items-center gap-1.5 text-brand-200 whitespace-nowrap">
                <MapPin className="w-3 h-3 flex-shrink-0" />
                {AREAS.slice(0, 3).map((a) => a.name).join(' · ')}
              </span>
              <span className="hidden lg:inline text-brand-200 whitespace-nowrap">Mon to Fri 8am to 6pm</span>
              {SITE_CONFIG.mobile && (
                <a
                  href={`tel:${SITE_CONFIG.mobile.replace(/\s/g, '')}`}
                  className="hidden xl:flex items-center gap-1.5 rounded-full bg-accent-500/20 px-2.5 py-1 text-accent-100 hover:bg-accent-500/30 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3 h-3 flex-shrink-0" />
                  24/7 Emergency: {SITE_CONFIG.mobile}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-white border-b border-brand-100 shadow-sm'
            : 'bg-white/95 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-[68px] md:h-[76px]">
            {/* Logo */}
            <Link href="/" className="flex items-center z-[110]" onClick={() => setMobileOpen(false)}>
              <div className="relative h-9 w-52 md:h-11 md:w-64">
                <Image
                  src="/images/logo.png"
                  alt="Humanity CSS Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setDropdownOpen(link.label)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-base font-semibold transition-all flex items-center gap-1.5 ${
                      isActive(link.href) ? 'text-brand-700 bg-brand-50' : 'text-slate-800 hover:text-brand-600 hover:bg-brand-50'
                    }`}
                  >
                    {link.label}
                    {link.children && <ChevronDown className="w-4 h-4 opacity-40" />}
                  </Link>

                  <AnimatePresence>
                    {link.children && dropdownOpen === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-white rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-slate-100 py-2 min-w-[200px] overflow-hidden">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={`block px-4 py-2.5 text-sm font-semibold transition-colors ${
                                isActive(child.href) && (child.href !== '/services' || pathname === '/services')
                                  ? 'text-brand-700 bg-brand-50'
                                  : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden xl:flex items-center">
              <Link href="/contact" className="bg-accent-500 text-white px-6 py-2.5 rounded-md text-sm font-bold hover:bg-accent-700 transition-all shadow-sm shadow-accent-500/20">
                Request a Call Back
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`xl:hidden z-[110] p-2 -mr-2 transition-colors ${mobileOpen ? 'text-accent-600' : 'text-slate-900'}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[90] xl:hidden flex flex-col pt-[100px]"
          >
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <nav className="space-y-1">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.04 }}
                    className="group"
                  >
                    {link.children ? (
                      <div>
                        <button
                          onClick={() => toggleMobileSubmenu(link.label)}
                          className={`flex items-center gap-3 w-full py-3.5 text-lg font-extrabold transition-colors ${
                            expandedMobileLink === link.label || isActive(link.href) ? 'text-brand-600' : 'text-slate-900'
                          }`}
                        >
                          <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${
                            expandedMobileLink === link.label || isActive(link.href) ? 'bg-brand-50 text-brand-600' : 'bg-slate-50 text-slate-400'
                          }`}>
                            {NAV_ICONS[link.label]}
                          </span>
                          <span className="flex-1 text-left">{link.label}</span>
                          <motion.div
                            animate={{ rotate: expandedMobileLink === link.label ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className={`w-5 h-5 ${expandedMobileLink === link.label ? 'text-brand-600' : 'text-slate-400'}`} />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {expandedMobileLink === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-brand-50/30 rounded-xl mt-1 mb-2 ml-3"
                            >
                              <div className="py-2 px-4 space-y-1">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block py-3 text-base font-bold transition-colors ${
                                      isActive(child.href) && (child.href !== '/services' || pathname === '/services')
                                        ? 'text-brand-700'
                                        : 'text-slate-600 hover:text-brand-600'
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-3 py-3.5 text-lg font-extrabold transition-colors ${
                          isActive(link.href) ? 'text-brand-600' : 'text-slate-900 hover:text-brand-600'
                        }`}
                      >
                        <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${
                          isActive(link.href) ? 'bg-brand-50 text-brand-600' : 'bg-slate-50 text-slate-400'
                        }`}>
                          {NAV_ICONS[link.label]}
                        </span>
                        <span className="flex-1">{link.label}</span>
                        {isActive(link.href) && <span className="h-2 w-2 rounded-full bg-accent-500 flex-shrink-0" />}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="p-5 border-t border-brand-100 bg-brand-50/20 flex-shrink-0">
              <div className="space-y-3">
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-3 w-full py-3.5 text-xl font-black text-accent-600 bg-white rounded-xl border border-brand-100 shadow-sm"
                >
                  <Phone className="w-5 h-5" />
                  {SITE_CONFIG.phone}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full bg-accent-500 text-white text-center py-3.5 rounded-xl font-black text-lg shadow-lg shadow-accent-500/20 hover:bg-accent-700 transition-all active:scale-[0.98]"
                >
                  Request a Call Back
                </Link>
                <div className="flex items-center justify-center gap-3 text-xs font-bold text-slate-400">
                  <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-accent-600 transition-colors">
                    {SITE_CONFIG.email}
                  </a>
                  <span aria-hidden="true">&middot;</span>
                  <span className="uppercase tracking-[0.15em]">CQC Rated GOOD</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
