'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur border-b border-[#e5efee] shadow-sm' : 'bg-white/90 backdrop-blur border-b border-transparent'
      }`}
    >
      {/* Main Nav */}
      <div className="container-wide">
        <div className="flex items-center justify-between h-[76px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50">
            <div className="w-10 h-10 bg-[#0d9488] rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div className="leading-tight">
              <span className="font-extrabold text-xl text-slate-900 tracking-tight">Humanity</span>
              <span className="block text-[10px] text-slate-500 font-medium tracking-widest uppercase -mt-0.5">Care &amp; Support Services</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setDropdownOpen(link.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:text-[#0d9488] hover:bg-[#f1f8f7] transition-all flex items-center gap-1"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {link.children && dropdownOpen === link.label && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-xl shadow-2xl shadow-black/10 border border-slate-100 py-2 min-w-[220px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:text-[#0d9488] hover:bg-[#f1f8f7] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="text-[#0f172a] font-extrabold text-lg tracking-tight">
            07877 200 381
            </a>
            <Link href="/contact" className="bg-[#0d9488] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#0b7f75] transition-colors">
              Call Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden z-50 p-2 rounded-lg text-slate-700"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-all duration-500 xl:hidden ${
          mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="pt-32 px-6 pb-8 h-full overflow-y-auto">
          <nav className="space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3.5 text-lg font-medium text-slate-800 hover:text-[#0d9488] hover:bg-[#f1f8f7] rounded-xl transition-all"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-6 space-y-1 mt-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2.5 text-base text-slate-500 hover:text-[#0d9488] hover:bg-[#f1f8f7] rounded-lg transition-all"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-8 pt-8 border-t border-slate-100 space-y-4">
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 px-4 py-3 text-[#0d9488] font-semibold"
            >
              <Phone className="w-5 h-5" />
              07877 200 381
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block bg-[#0d9488] text-white text-center px-6 py-3.5 rounded-lg font-semibold"
            >
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
