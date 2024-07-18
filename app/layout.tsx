import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lakshita | Portfolio",
  description: "This is my Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} bg-[#030014] overflow-y-auto overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
