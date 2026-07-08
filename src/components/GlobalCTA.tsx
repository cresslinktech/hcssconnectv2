import Link from 'next/link';
import { Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import FadeIn from './FadeIn';

export default function GlobalCTA() {
  return (
    <section className="bg-brand-700">
      <div className="container-wide py-16 md:py-20">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Speak to our team today
              </h2>
              <p className="text-brand-200 max-w-lg">
                Our experienced care team are here to discuss your needs, answer your questions, 
                or guide you through the referral process.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <Link href="/contact" className="bg-white text-brand-700 px-6 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                Request a Call Back
              </Link>
              <Link href="/referrals" className="border-2 border-white/30 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
                Refer a Client
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
