import FadeIn from '@/components/FadeIn';
import GlobalCTA from '@/components/GlobalCTA';
import { SITE_CONFIG } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Humanity CSS',
  description: 'The terms governing your use of the Humanity CSS website and our care and transport enquiry services.',
};

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-50/50 pt-36 md:pt-40 pb-16">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="container-wide relative">
          <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-brand-600">Legal</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-brand-900 leading-[1.08]">
            Terms of Service
          </h1>
          <p className="mt-5 text-base md:text-lg font-medium leading-8 text-slate-800 max-w-2xl">
            Last updated: August 2026. These terms govern your use of the {SITE_CONFIG.name} website.
            Please read them alongside our{' '}
            <a href="/privacy" className="text-accent-600 font-semibold hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-3xl mx-auto space-y-10 text-base md:text-lg font-medium leading-8 text-slate-800">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">1. About us</h2>
                <p>
                  This website is operated by {SITE_CONFIG.name}, a domiciliary care and transport provider based in
                  {' '}{SITE_CONFIG.address}. By accessing or using this website, you agree to be bound by these terms.
                  If you do not agree, please do not use the site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Use of this website</h2>
                <p>
                  This website is provided for informational purposes, to help you learn about our care and transport
                  services and to submit enquiries, referrals, or school run requests. You agree to use the site only
                  for lawful purposes and to provide accurate information when completing any form.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Enquiries, referrals, and bookings</h2>
                <p>
                  Submitting a contact form, referral, or school run enquiry through this website does not itself
                  create a contract for care or transport services, and does not guarantee availability. Any care
                  package, referral, or transport arrangement is subject to a separate assessment and agreement
                  between you (or the relevant client) and {SITE_CONFIG.name}, with its own terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Accuracy of information</h2>
                <p>
                  We take reasonable care to keep the information on this website accurate and up to date, including
                  details of our services and coverage areas. However, service availability, coverage, and specific
                  arrangements should always be confirmed directly with our team before you rely on them.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Third-party services and links</h2>
                <p>
                  This website uses third-party services, including Web3Forms to process form submissions and Google
                  Maps to display coverage areas. These services are governed by their own terms and privacy policies,
                  and we are not responsible for their content or availability.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Intellectual property</h2>
                <p>
                  The content on this website, including text, graphics, and the {SITE_CONFIG.name} name and logo, is
                  owned by or licensed to us and may not be copied, reproduced, or used without our permission, except
                  as necessary to view the site in a standard web browser.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Limitation of liability</h2>
                <p>
                  To the extent permitted by law, {SITE_CONFIG.name} is not liable for any loss or damage arising from
                  your use of this website, including reliance on information published here, except where that loss
                  or damage results from our negligence or breach of a duty we owe you under applicable law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Changes to these terms</h2>
                <p>
                  We may update these terms from time to time to reflect changes to our services or legal
                  requirements. Continued use of the website after any changes constitutes acceptance of the updated
                  terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">9. Governing law</h2>
                <p>
                  These terms are governed by the laws of England and Wales, and any disputes relating to them will be
                  subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">10. Contact us</h2>
                <p>
                  If you have any questions about these terms, please contact us at{' '}
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-accent-600 font-semibold hover:underline">{SITE_CONFIG.email}</a>{' '}
                  or <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="text-accent-600 font-semibold hover:underline">{SITE_CONFIG.phone}</a>.
                </p>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      <GlobalCTA />
    </>
  );
}
