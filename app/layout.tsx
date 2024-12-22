import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "İnkira",
  description:
    "İnkira, ev sahiplerinin bir yıllık kira gelirlerini enflasyon karşısında erimeden peşin almalarına imkan tanıyan bir fintech uygulamasıdır. Kiracılar da inkira sayesinde evden çıkarılma ya da hukuksuz kira artışı baskısına maruz kalmadan evlerinde güvenle ikamet edebilirler.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
