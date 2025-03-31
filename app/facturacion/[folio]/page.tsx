"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Download, Printer } from "lucide-react"
import { useParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { HotelLogo } from "@/components/hotel-logo"
import { InvoiceTemplate } from "@/components/invoice-template"

export default function InvoiceDetailPage() {
  const params = useParams()
  const folio = params.folio as string

  const [loading, setLoading] = useState(true)

  // Simulamos la carga de datos
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Datos de ejemplo para la factura
  const invoiceData = {
    invoiceNumber: "FAC-2024-0123",
    date: "18/03/2024",
    customerName: "Juan Pérez",
    customerRFC: "PERJ850512ABC",
    customerEmail: "juan.perez@ejemplo.com",
    reservationFolio: folio,
    checkIn: "15/03/2024",
    checkOut: "18/03/2024",
    roomType: "Habitación Doble 203",
    nights: 3,
    items: [
      {
        description: "Habitación Doble ",
        unitPrice: 2500.0,
        quantity: 3,
        total: 7500.0,
      },
      {
        description: "Servicio a la habitación",
        unitPrice: 350.0,
        quantity: 2,
        total: 700.0,
      },
      {
        description: "Toallas",
        unitPrice: 180.0,
        quantity: 1,
        total: 180.0,
      },
    ],
    subtotal: 8380.0,
    tax: 1340.8,
    total: 9720.8,
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    // En una implementación real, aquí se generaría el PDF para descargar
    alert("Descargando factura en PDF...")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white shadow-sm print:hidden">
        <div className="container flex h-20 items-center px-4 sm:px-6 lg:px-8">
          <HotelLogo />
        </div>
      </header>
      <main className="flex-1 container py-10 px-4 md:px-6">
        <div className="flex items-center mb-8 print:hidden">
          <Link href="/facturacion" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Volver</span>
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-hotelblue">Factura</h1>
          <div className="ml-auto flex gap-2">
            <Button variant="outline" onClick={handlePrint} className="flex items-center gap-2">
              <Printer className="h-4 w-4" />
              <span>Imprimir</span>
            </Button>
            <Button onClick={handleDownload} className="flex items-center gap-2 bg-hotelblue hover:bg-hotelblue/90">
              <Download className="h-4 w-4" />
              <span>Descargar PDF</span>
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-hotelblue"></div>
          </div>
        ) : (
          <InvoiceTemplate {...invoiceData} />
        )}
      </main>
      <footer className="border-t py-8 bg-gradient-to-t from-hotelblue/10 to-white print:hidden">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <HotelLogo size="small" className="mb-4" />
              <p className="text-sm text-muted-foreground">Ofreciendo la mejor experiencia de hospedajes.</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4 text-hotelblue">Enlaces Rápidos</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/facturacion" className="text-sm text-muted-foreground hover:text-hotelblue">
                  Facturación
                </Link>
                <Link href="/reservas" className="text-sm text-muted-foreground hover:text-hotelblue">
                  Mis Estancias
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


