import type { Metadata } from 'next'
import { Header } from '@/src/components/layout/header'
import { SearchBar } from '@/src/components/layout/search-bar'
import localFont from 'next/font/local'
import './globals.css'

const greycliffCF = localFont({
  src: [
    {
      path: '../../public/fonts/Fontspring-DEMO-greycliffcf-thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-greycliffcf-thinoblique.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-greycliffcf-extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-greycliffcf-extralightoblique.otf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-greycliffcf-light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-greycliffcf-lightoblique.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-greycliffcf-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-greycliffcf-regularoblique.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-greycliffcf-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-greycliffcf-mediumoblique.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-greycliffcf-demibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-greycliffcf-demiboldoblique.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-greycliffcf-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-greycliffcf-boldoblique.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-greycliffcf-extrabold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-greycliffcf-extraboldoblique.otf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-greycliffcf-heavy.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-greycliffcf-heavyoblique.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-greycliff',
  display: 'swap',
})

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
    <html lang="es" className={greycliffCF.variable}>
      <body className="font-greycliff">
        <Header />
        <SearchBar />
        {children}
      </body>
    </html>
  )
}

