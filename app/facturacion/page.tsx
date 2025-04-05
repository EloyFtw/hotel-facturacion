"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// Update the imports to include the HotelLogo
import { HotelLogo } from "@/components/hotel-logo"

export default function FacturacionPage() {
  const [folioReserva, setFolioReserva] = useState("")
  const [reservaEncontrada, setReservaEncontrada] = useState(false)

  const buscarReserva = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para buscar la reserva en el backend
    // Por ahora, simulamos que se encontró la reserva si el folio no está vacío
    if (folioReserva.trim() !== "") {
      setReservaEncontrada(true)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Replace the header with this updated version */}
      <header className="border-b bg-white shadow-sm">
        <div className="container flex h-20 items-center px-4 sm:px-6 lg:px-8">
          <HotelLogo />
        </div>
      </header>
      <main className="flex-1 container py-10 px-4 md:px-6">
        <div className="flex items-center mb-8">
          <Link href="/" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Volver</span>
            </Button>
          </Link>
          {/* Update the main section title */}
          <h1 className="text-2xl font-bold text-hotelblue">Facturación de Estancia</h1>
        </div>

        {!reservaEncontrada ? (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              {/* Update the card header colors */}
              <CardTitle className="text-hotelblue">Buscar </CardTitle>
              <CardDescription>Ingrese su número de folio para generar su factura</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={buscarReserva}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="folio">Folio de Hospedaje</Label>
                    <div className="flex gap-2">
                      <Input
                        id="folio"
                        placeholder="Ej. RES-12345"
                        value={folioReserva}
                        onChange={(e) => setFolioReserva(e.target.value)}
                      />
                      {/* Update the button colors */}
                      <Button type="submit" size="icon" className="bg-hotelblue hover:bg-hotelblue/90">
                        <Search className="h-4 w-4" />
                        <span className="sr-only">Buscar</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">
                Si no conoce su número de folio, puede consultarlo en su correo de confirmación o contactar a recepción.
              </p>
            </CardFooter>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                {/* Update the reservation details card */}
                <CardTitle className="text-hotelblue">Detalles de su Estancia</CardTitle>
                <CardDescription>Folio: {folioReserva}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm font-medium">Huésped:</div>
                    <div className="text-sm">Juan Pérez</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm font-medium">Check-in:</div>
                    <div className="text-sm">15/03/2024</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm font-medium">Check-out:</div>
                    <div className="text-sm">18/03/2024</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm font-medium">Habitación:</div>
                    <div className="text-sm">Doble 203</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm font-medium">Noches:</div>
                    <div className="text-sm">3</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                {/* Update the billing card */}
                <CardTitle className="text-hotelblue">Facturación</CardTitle>
                <CardDescription>Complete los datos para su factura</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="personal">
                  {/* Update the tabs */}
                  <TabsList className="grid w-full grid-cols-2 mb-4 tabs-list-hotel">
                  <TabsTrigger value="personal" className="tabs-trigger-hotel">
                    Personal
                  </TabsTrigger>
                  <TabsTrigger value="empresa" className="tabs-trigger-hotel">
                    Empresa
                  </TabsTrigger>
                  </TabsList>
                  <TabsContent value="personal" className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="nombre">Nombre Completo</Label>
                      <Input id="nombre" placeholder="Nombre y apellidos" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="rfc">RFC</Label>
                      <Input id="rfc" placeholder="RFC con homoclave" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input id="email" type="email" placeholder="correo@ejemplo.com" />
                    </div>
                  </TabsContent>
                  <TabsContent value="empresa" className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="razon-social">Razón Social</Label>
                      <Input id="razon-social" placeholder="Nombre de la empresa" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="rfc-empresa">RFC</Label>
                      <Input id="rfc-empresa" placeholder="RFC de la empresa" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="direccion">Dirección Fiscal</Label>
                      <Input id="direccion" placeholder="Dirección completa" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email-empresa">Correo Electrónico</Label>
                      <Input id="email-empresa" type="email" placeholder="correo@empresa.com" />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                {/* Update the generate invoice button */}
                <Button className="w-full bg-hotelblue hover:bg-hotelblue/90">Generar Factura</Button>
              </CardFooter>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                {/* Update the charges summary card */}
                <CardTitle className="text-hotelblue">Resumen de Cargos</CardTitle>
                <CardDescription>Desglose de los cargos de su estancia</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg">
                  <div className="grid grid-cols-4 gap-4 p-4 font-medium border-b">
                    <div>Concepto</div>
                    <div className="text-right">Precio Unitario</div>
                    <div className="text-right">Cantidad</div>
                    <div className="text-right">Total</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 p-4 border-b">
                    <div>Habitación Suite Deluxe</div>
                    <div className="text-right">$2,500.00</div>
                    <div className="text-right">3 noches</div>
                    <div className="text-right">$7,500.00</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 p-4 border-b">
                    <div>Servicio a la habitación</div>
                    <div className="text-right">$350.00</div>
                    <div className="text-right">2</div>
                    <div className="text-right">$700.00</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 p-4 border-b">
                    <div>Toallas</div>
                    <div className="text-right">$180.00</div>
                    <div className="text-right">1</div>
                    <div className="text-right">$180.00</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 p-4 font-medium">
                    <div className="col-span-3 text-right">Subtotal:</div>
                    <div className="text-right">$8,380.00</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 px-4 pb-2 font-medium">
                    <div className="col-span-3 text-right">IVA (16%):</div>
                    <div className="text-right">$1,340.80</div>
                  </div>
                   <div className="grid grid-cols-4 gap-4 px-4 pb-2 font-medium">
                    <div className="col-span-3 text-right">ISH (4%):</div>
                    <div className="text-right">$388.83</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 px-4 pb-4 font-bold">
                    <div className="col-span-3 text-right">Total:</div>
                    <div className="text-right">$9,720.80</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
      {/* Update the footer to match the home page */}
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
                  Mis Reservas
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

