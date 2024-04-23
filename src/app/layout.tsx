import type { Metadata } from 'next'
import { StyledJsxRegistry } from '@/components/styled-jsx-registry'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Next Chess',
}
