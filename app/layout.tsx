import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Arcbase | Full-Service Automation Agency',
  description: 'Arcbase specializes in custom infrastructure, AI integration, and workflow optimization designed to scale with your business.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body suppressHydrationWarning className="bg-[#050a14] text-white antialiased">{children}</body>
    </html>
  );
}
