import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Humanity CSS | CQC Rated GOOD Home Care Across London',
  description:
    'Specialist domiciliary care for complex needs and personal care for drug, alcohol and dual diagnosis needs. CQC Rated GOOD with over 40 years of combined experience serving London communities.',
  keywords: 'home care London, domiciliary care, CQC rated, complex care, drug and alcohol care, dual diagnosis care, personal care London',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
