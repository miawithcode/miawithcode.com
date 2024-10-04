import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/layouts/navbar';
import { db } from '@/db';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Mia - Frontend Developer',
  description: 'Frontend Developer using React',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(db);

  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          'font-geist-sans relative mx-auto flex h-full min-h-screen w-full max-w-screen-md flex-col px-4 antialiased sm:px-16 lg:px-24',
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <Navbar />
        <main className="flex flex-1 flex-grow flex-col">{children}</main>
      </body>
    </html>
  );
}
