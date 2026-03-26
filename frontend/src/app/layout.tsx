import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Mohamed Mamdoh — Obstetrics & Gynecology",
    template: "%s | Dr. Mohamed Mamdoh",
  },
  description:
    "Leading obstetrics & gynecology clinic in Riyadh. Book your appointment online for prenatal care, gynecological services, and more.",
  keywords: [
    "obstetrics",
    "gynecology",
    "prenatal care",
    "Riyadh",
    "Dr. Mohamed Mamdoh",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cairo.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-text-primary">
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <AuthProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
