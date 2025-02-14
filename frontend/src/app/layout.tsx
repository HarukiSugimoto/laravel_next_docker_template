import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import '@/app/global.css';
import React from 'react';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = (props: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={`${nunito.className} text-gray-900 antialiased`}>{props.children}</body>
  </html>
);

export default RootLayout;
