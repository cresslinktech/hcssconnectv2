import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'HCSS Connect | CQC Rated GOOD Home Care Across London',
  description:
    'Specialist domiciliary care for complex needs, mental health, and addiction recovery. CQC Rated GOOD with over 40 years of combined experience serving London communities.',
  keywords: 'home care London, domiciliary care, CQC rated, complex care, mental health support, addiction recovery, personal care London',
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
