import type { Metadata } from 'next'
import { Nunito, Fredoka } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap'
});

const fredoka = Fredoka({ 
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Aguachiloco - Marisquería & Sushi',
  description: 'Los mejores mariscos y sushi fresco en un ambiente playero único. Visita nuestras sucursales.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${nunito.variable} ${fredoka.variable}`}>
      <body className="font-sans antialiased bg-background overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
