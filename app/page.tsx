import Link from "next/link"
import { Hotel } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HotelLogo } from "@/components/hotel-logo"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white shadow-sm">
        <div className="container flex h-20 items-center px-4 sm:px-6 lg:px-8">
          <HotelLogo />
          <nav className="ml-auto flex gap-4">
            <Link href="/facturacion">
              <Button variant="ghost">Facturación</Button>
            </Link>
            <Link href="/reservas">
              <Button variant="ghost">Mis Estancias</Button>
            </Link>
            <Link href="/contacto">
              <Button variant="ghost">Contacto</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-hotelblue/10 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-hotelblue sm:text-4xl md:text-5xl">
                  Sistema de Facturación para Huéspedes
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Gestione sus facturas y pagos de manera rápida y sencilla durante su estancia en Hotel Del Ángel.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/facturacion">
                  <Button className="bg-hotelblue hover:bg-hotelblue/90">Facturar mi estancia</Button>
                </Link>
                <Link href="/reservas">
                  <Button variant="outline" className="border-hotelblue text-hotelblue hover:bg-hotelblue/10">
                    Ver mis reservas
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-hotelblue/10">
                  <Hotel className="h-8 w-8 text-hotelblue" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Facturación Rápida</h3>
                  <p className="text-muted-foreground">
                    Obtenga su factura en minutos ingresando su número de reserva.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-hotelblue/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-hotelblue"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Múltiples Métodos de Pago</h3>
                  <p className="text-muted-foreground">
                    Pague con tarjeta de crédito, débito o transferencia bancaria.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-hotelblue/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-hotelblue"
                  >
                    <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-2" />
                    <path d="M18 8h4v4" />
                    <path d="m15 15 7-7" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Descarga de Facturas</h3>
                  <p className="text-muted-foreground">Descargue sus facturas en formato PDF para sus registros.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8 bg-gradient-to-t from-hotelblue/10 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <HotelLogo size="small" className="mb-4" />
              <p className="text-sm text-muted-foreground">Ofreciendo la mejor experiencia en hospedajes.</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4 text-hotelblue">Enlaces Rápidos</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/facturacion" className="text-sm text-muted-foreground hover:text-hotelblue">
                  Facturación
                </Link>
                <Link href="/reservas" className="text-sm text-muted-foreground hover:text-hotelblue">
                  Mis Hospedajes
                </Link>
                <Link href="/contacto" className="text-sm text-muted-foreground hover:text-hotelblue">
                  Contacto
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4 text-hotelblue">Legal</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/terminos" className="text-sm text-muted-foreground hover:text-hotelblue">
                  Términos y Condiciones
                </Link>
                <Link href="/privacidad" className="text-sm text-muted-foreground hover:text-hotelblue">
                  Política de Privacidad
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t text-center">
             <p className="text-sm text-muted-foreground">© 2024 Promotora Hotelera del Angel. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

