import './globals.css';
import { Figtree } from 'next/font/google';
import Sidebar from '@/components/Sidebar';

const fontType = Figtree({ subsets: ['latin'] });

export const metadata = {
  title: 'TinT-Tunes',
  description: 'Feel all the Beat',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontType.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
