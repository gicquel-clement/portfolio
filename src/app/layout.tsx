import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gicquel Clément - Technicien Informatique',
  description: 'Portfolio de Gicquel Clément - Technicien informatique en alternance chez Panpharma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <div className="pt-16">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
} 