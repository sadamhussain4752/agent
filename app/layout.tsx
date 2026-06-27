import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Think Mangoes | India's Trusted Digital Growth Partner",
  description:
    "Think Mangoes helps businesses grow with Digital Marketing, Branding, Website Development, Performance Marketing & Creative Solutions. Book a free consultation.",
  keywords: "digital marketing, branding, website development, SEO, Google Ads, Meta Ads, performance marketing, India",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${syne.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
