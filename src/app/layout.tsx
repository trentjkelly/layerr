import type { Metadata } from "next";
import { Noto_Sans, Press_Start_2P } from "next/font/google";
import "./globals.css";

export const noto = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto',
  display: 'swap',
})
 
export const press_start_2p = Press_Start_2P({
  weight: '400',
  variable: '--font-press-start-2p',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "underground",
  description: "Streaming designed for artists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto.variable} ${press_start_2p.variable}`}>{children}</body>
    </html>
  );
}
