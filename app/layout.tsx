import { Inter } from 'next/font/google'
import './globals.css'
import '../styles/custom.css'  // Añade esta línea
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hotel Del Ángel - Sistema de Facturación',
  description: 'Sistema de facturación para huéspedes del Hotel Del Ángel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}