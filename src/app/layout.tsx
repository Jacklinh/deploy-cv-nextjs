import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/theme-provider";
import { Suspense } from 'react';
import LoadingPage from './loading';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Resume Le Van Linh",
  description: "Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={poppins.className}
        suppressHydrationWarning
      >
        <Providers>
          <Suspense fallback={<LoadingPage />}>
            {children}
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
