import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Velora Hotel - Coming Soon",
  description: "A new era of luxury hospitality awaits",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/faviconn.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/faviconn.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/faviconn.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/faviconn.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
