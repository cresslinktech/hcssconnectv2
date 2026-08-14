import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import GlobalCTA from '@/components/GlobalCTA';
import { SITE_CONFIG } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Humanity CSS',
  description: 'How Humanity CSS collects, uses, and protects your personal data across our care and transport services.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-50/50 pt-36 md:pt-40 pb-16">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="container-wide relative">
          <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-brand-600">Legal</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-brand-900 leading-[1.08]">
            Privacy Policy
          </h1>
          <p className="mt-5 text-base md:text-lg font-medium leading-8 text-slate-800 max-w-2xl">
            Last updated: August 2026. This policy explains how {SITE_CONFIG.name} collects, uses, and protects
            personal data when you use our website, submit an enquiry, or make a referral.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-3xl mx-auto space-y-10 text-base md:text-lg font-medium leading-8 text-slate-800">

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Who we are</h2>
                <p>
                  {SITE_CONFIG.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a domiciliary care and
                  transport provider based in {SITE_CONFIG.address}. We are the data controller for the personal data
                  described in this policy. If you have any questions, you can reach us at{' '}
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-accent-600 font-semibold hover:underline">{SITE_CONFIG.email}</a>{' '}
                  or <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="text-accent-600 font-semibold hover:underline">{SITE_CONFIG.phone}</a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">2. What data we collect</h2>
                <p className="mb-4">We collect personal data when you interact with our website, including through our contact, referral, and school run enquiry forms:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li><strong className="text-slate-900">Contact details</strong> such as your name, email address, and phone number.</li>
                  <li><strong className="text-slate-900">Enquiry details</strong> such as the service you are interested in and any message you send us.</li>
                  <li><strong className="text-slate-900">Referral details</strong> where a professional or family member submits a referral on behalf of a client, which may include information about the client&rsquo;s care needs, circumstances, and relevant background. This can include special category data (such as health information), which we only process with appropriate consent, as confirmed by the referral form&rsquo;s consent checkbox.</li>
                  <li><strong className="text-slate-900">School run enquiry details</strong> such as a parent or guardian&rsquo;s contact details, a child&rsquo;s school, and journey requirements, including any accessibility needs disclosed to us.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">3. How we use your data</h2>
                <p className="mb-4">We use the personal data we collect to:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Respond to your enquiry, referral, or booking request.</li>
                  <li>Assess care or transport needs and arrange appropriate support.</li>
                  <li>Maintain records required for safeguarding, compliance, and service quality.</li>
                  <li>Communicate with you about the services you have requested.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Our legal basis for processing</h2>
                <p>
                  We process most enquiry and referral data on the basis of your consent (given when you submit a form)
                  and, where a care or transport service is subsequently agreed, to perform that contract. Where
                  special category data is involved, such as health information within a referral, we rely on your
                  explicit consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Sharing your data</h2>
                <p>
                  We do not sell your personal data. We share it only where necessary, including with:
                </p>
                <ul className="space-y-2 list-disc pl-5 mt-4">
                  <li><strong className="text-slate-900">Web3Forms</strong>, the third-party service that delivers form submissions from this website to our team by email.</li>
                  <li><strong className="text-slate-900">Google Maps</strong>, which powers the embedded maps on our Contact and Home pages. Interacting with these maps is subject to Google&rsquo;s own privacy policy.</li>
                  <li>Relevant healthcare, social care, or education professionals already involved in a client&rsquo;s or child&rsquo;s care, where necessary to coordinate support.</li>
                  <li>Regulators or authorities where we are required to do so by law.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Data retention</h2>
                <p>
                  We keep personal data only for as long as necessary to fulfil the purposes described in this policy,
                  including any legal, accounting, or safeguarding record-keeping requirements that apply to care and
                  transport providers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Your rights</h2>
                <p className="mb-4">Under UK data protection law, you have the right to:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Access the personal data we hold about you.</li>
                  <li>Ask us to correct inaccurate data.</li>
                  <li>Ask us to delete your data, in certain circumstances.</li>
                  <li>Object to or restrict certain processing.</li>
                  <li>Request that your data be provided in a portable format.</li>
                  <li>Withdraw consent at any time, where processing is based on consent.</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, contact us at{' '}
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-accent-600 font-semibold hover:underline">{SITE_CONFIG.email}</a>.
                  You also have the right to lodge a complaint with the Information Commissioner&rsquo;s Office (ICO) at{' '}
                  <span className="text-slate-900 font-semibold">ico.org.uk</span>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Cookies</h2>
                <p>
                  Our website uses only the minimal cookies necessary for it to function correctly. See our{' '}
                  <Link href="/cookies" className="text-accent-600 font-semibold hover:underline">Cookie Policy</Link>{' '}
                  for details.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">9. Changes to this policy</h2>
                <p>
                  We may update this policy from time to time. Any changes will be posted on this page with an updated
                  revision date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">10. Contact us</h2>
                <p>
                  If you have any questions about this policy or how we handle your data, please contact us at{' '}
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
