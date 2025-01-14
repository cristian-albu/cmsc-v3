import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LangContextProvider } from "@/lib/contexts/LangContext";
import { GdprContextProvider } from "@/lib/contexts/GdprContext";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { WindowContextProvider } from "@/lib/contexts/WindowContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <WindowContextProvider>
          <GdprContextProvider>
            <LangContextProvider>
              <Navbar />
              {children}
              <Footer />
            </LangContextProvider>
          </GdprContextProvider>
        </WindowContextProvider>
      </body>
    </html>
  );
}
