import clsx from 'clsx';
import type { Metadata } from 'next';
import { Montserrat, Anton, Bonheur_Royale } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
});

const bonheur = Bonheur_Royale({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bonheur',
});

export const metadata: Metadata = {
  title: 'Edwin Anderson - Junior Frontend Developer',
  description:
    'Frontend developer passionate about creating seamless digital experiences that are fast, responsive, and user-friendly.',
  keywords: [
    'frontend developer',
    'react',
    'next.js',
    'typescript',
    'tailwind css',
    'web development',
  ],
  authors: [{ name: 'Edwin Anderson' }],
  creator: 'Edwin Anderson',
  openGraph: {
    title: 'Edwin Anderson - Junior Frontend Developer',
    description:
      'Frontend developer passionate about creating seamless digital experiences that are fast, responsive, and user-friendly.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={clsx(
          montserrat.variable,
          anton.variable,
          bonheur.variable,
          'antialiased'
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
