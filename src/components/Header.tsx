'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ChevronDown, X, Menu } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [expandedMobileLink, setExpandedMobileLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      setExpandedMobileLink(null); // Reset when menu opens
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobileLink(expandedMobileLink === label ? null : label);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled || mobileOpen 
          ? 'bg-white border-b border-brand-100 shadow-sm' 
          : 'bg-white/80 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-[72px] md:h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex items-center z-[110]" onClick={() => setMobileOpen(false)}>
            <div className="relative h-12 w-48 md:h-14 md:w-56">
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
                  className="px-4 py-2 rounded-lg text-base font-semibold text-slate-800 hover:text-brand-600 hover:bg-brand-50 transition-all flex items-center gap-1.5"
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
                            className="block px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-brand-600 hover:bg-slate-50 transition-colors"
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
          <div className="hidden xl:flex items-center gap-6">
            <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="text-lg font-bold text-slate-900 hover:text-brand-600 transition-colors">
              {SITE_CONFIG.phone}
            </a>
            <Link href="/contact" className="bg-brand-600 text-white px-6 py-2.5 rounded-md text-sm font-bold hover:bg-brand-700 transition-all shadow-sm">
              Call Now
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden z-[110] p-2 -mr-2 text-slate-700"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Regular Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-white z-[90] xl:hidden flex flex-col"
          >
            <div className="flex flex-col h-full pt-[80px]">
              <nav className="flex-1 overflow-y-auto px-6 py-8">
                <div className="space-y-1">
                  {NAV_LINKS.map((link) => (
                    <div key={link.label} className="border-b border-slate-50 last:border-0">
                      {link.children ? (
                        <button
                          onClick={() => toggleMobileSubmenu(link.label)}
                          className="flex items-center justify-between w-full py-5 text-xl font-bold text-slate-900 text-left"
                        >
                          {link.label}
                          <motion.div
                            animate={{ rotate: expandedMobileLink === link.label ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-5 h-5 opacity-40" />
                          </motion.div>
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-5 text-xl font-bold text-slate-900"
                        >
                          {link.label}
                        </Link>
                      )}
                      
                      {link.children && (
                        <AnimatePresence>
                          {expandedMobileLink === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pb-4 space-y-4">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-base font-semibold text-slate-500 hover:text-brand-600 active:text-brand-600"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  ))}
                </div>
              </nav>

              <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-4">
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-3 w-full py-4 text-2xl font-black text-brand-600"
                >
                  <Phone className="w-6 h-6" />
                  {SITE_CONFIG.phone}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full bg-brand-600 text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand-600/10"
                >
                  Request a Call Back
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
