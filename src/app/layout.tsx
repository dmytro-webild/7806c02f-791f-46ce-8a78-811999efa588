import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Longmeadow Business Estate | Premium Logistics & Offices',
  description: 'Secure facilities, prime location, professional management. Longmeadow Business Estate provides logistics and office space for growth-focused businesses.',
  keywords: ["business estate, logistics space, office rental, commercial property, warehouse rental, Longmeadow, corporate office"],
  openGraph: {
    "title": "Longmeadow Business Estate | Premium Logistics & Offices",
    "description": "Secure facilities, prime location, professional management.",
    "siteName": "Longmeadow Business Estate",
    "type": "website"
  },
};

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${publicSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
