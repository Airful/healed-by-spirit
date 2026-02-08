import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Healed by Spirit — Brian Kurtz",
    template: "%s | Healed by Spirit",
  },
  description:
    "Spiritual healing, workshops, and courses by G. Brian Kurtz. Over 40 years of energy healing, chakra clearing, and divine connection. Albuquerque, NM & Remote.",
  keywords: [
    "spiritual healing",
    "energy healing",
    "chakra clearing",
    "Brian Kurtz",
    "Albuquerque healer",
    "soul connection",
    "Access the Real You",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
