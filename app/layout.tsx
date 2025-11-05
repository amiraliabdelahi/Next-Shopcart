import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "../components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Abdelahi Gym Store",
  description: "Welcome to my sites!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className="bg-[#e9e7e3]">
          <Navbar />
          <main className="my-8 h-screen">{children}</main>
          <Toaster />
          <Footer />
        </body>
      </SessionProvider>
    </html>
  );
}
