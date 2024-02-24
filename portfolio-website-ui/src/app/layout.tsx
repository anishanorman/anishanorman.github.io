import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Links } from "../components/Links";

export const metadata: Metadata = {
  title: "Anisha Norman",
  description: "Portfolio for Anisha Norman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Links />
        <main>{children}</main>
      </body>
    </html>
  );
}
