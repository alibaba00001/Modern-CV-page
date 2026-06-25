import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorEffect from "@/components/CursorEffect";
import ParticleField from "@/components/ParticleField";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omar Ali | Mechanical Engineer",
  description: "Portfolio of Omar Ali Iqbal Davila - Mechanical Engineer (Manufacturing, Sourcing & Automation)",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect x='25' y='15' width='50' height='70' rx='6' stroke='%234a80a6' stroke-width='6' fill='none'/><line x1='35' y1='35' x2='65' y2='35' stroke='%234a80a6' stroke-width='6' stroke-linecap='round'/><line x1='35' y1='50' x2='65' y2='50' stroke='%234a80a6' stroke-width='6' stroke-linecap='round'/><line x1='35' y1='65' x2='50' y2='65' stroke='%234a80a6' stroke-width='6' stroke-linecap='round'/></svg>",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <ParticleField />
        <CursorEffect />
        {children}
      </body>
    </html>
  );
}
