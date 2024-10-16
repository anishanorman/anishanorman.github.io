import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar/Navbar"
import Bubbles from "@/components/Bubbles/Bubbles"
import { Footer } from "@/components/Footer/Footer"

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
      <body className="flex flex-col">
        <Bubbles />
        <Navbar />
        <main className="size-full overflow-x-hidden flex flex-col justify-center items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
