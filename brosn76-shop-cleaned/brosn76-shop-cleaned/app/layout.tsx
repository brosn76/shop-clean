
import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Brosn76 Shop Tech Now',
  description: 'Live affiliate tech store with Google Sheets automation',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
