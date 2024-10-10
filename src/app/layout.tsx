import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar/Navbar"
import { useEffect } from "react"
import Bubbles from "@/components/Bubbles/Bubbles"

export const metadata: Metadata = {
  title: "Anisha Norman",
  description: "Portfolio for Anisha Norman",
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="w-full flex overflow-hidden">
        <Navbar />
        <main className="flex flex-col size-full justify-between overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}
