import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bella PetCare - Tu tienda de mascotas',
  description: 'Tienda especializada en productos para mascotas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=greycliff-cf@1,2,3,4,5,6,7&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} font-greycliff`}>{children}</body>
    </html>
  )
}

