import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Optinly | Qualified B2B Leads for Insurance & Debt Relief",
    template: "%s | Optinly",
  },
  description:
    "Pay-per-lead marketplace for insurance agents and debt relief companies. Real-time, verified, exclusive leads with no monthly fees or retainers.",
  metadataBase: new URL("https://optinly.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://optinly.io",
    siteName: "Optinly",
    title: "Optinly | Qualified B2B Leads for Insurance & Debt Relief",
    description:
      "Pay-per-lead marketplace for insurance agents and debt relief companies. Real-time, verified, exclusive leads with no monthly fees or retainers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optinly | Qualified B2B Leads for Insurance & Debt Relief",
    description:
      "Pay-per-lead marketplace for insurance agents and debt relief companies. Real-time, verified, exclusive leads with no monthly fees or retainers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} ${dmSans.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
