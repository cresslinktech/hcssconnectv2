import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Humanity CSS | CQC Rated GOOD Home Care Across London',
  description:
    'Specialist domiciliary care for complex needs and personal care for drug, alcohol and dual diagnosis needs. CQC Rated GOOD with over 40 years of combined experience serving London communities.',
  keywords: 'home care London, domiciliary care, CQC rated, complex care, drug and alcohol care, dual diagnosis care, personal care London',
  icons: {
    icon: '/images/logo-mark.png',
    apple: '/images/logo-mark.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
