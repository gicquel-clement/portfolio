'use client'

import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'
import BackgroundAnimation from './BackgroundAnimation'

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
      {mounted && <BackgroundAnimation />}
      {children}
    </ThemeProvider>
  )
} 