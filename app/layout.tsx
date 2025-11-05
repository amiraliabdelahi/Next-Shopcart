import Footer from "@/app/components/Footer";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import Navbar from "./components/Navbar";
import { Toaster } from "./components/ui/sonner";
import "./globals.css";

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
        <body>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Toaster />
          <Footer />
        </body>
      </SessionProvider>
    </html>
  );
}
