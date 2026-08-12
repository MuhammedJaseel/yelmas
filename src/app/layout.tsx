import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real Estate UAE | Property Listings & Investment Opportunities",
  description:
    "Discover premium real estate properties in UAE. Find apartments, villas, commercial spaces, and investment opportunities in Dubai, Abu Dhabi, and across the Emirates.",
  keywords:
    "real estate UAE, properties for sale, apartments Dubai, villas Abu Dhabi, property investment, UAE real estate",
  authors: [{ name: "Yelmas Real Estate" }],
  openGraph: {
    title: "Real Estate UAE | Premium Properties & Investment",
    description: "Explore exclusive real estate opportunities across UAE",
    type: "website",
    locale: "en_AE",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
