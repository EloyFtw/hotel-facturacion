 
import Link from "next/link"
import { ArrowLeft, FileText, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HotelLogo } from "@/components/hotel-logo"

export default function ReservasPage() {
  return (
    <div className="flex flex-col min-h-screen">
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
          <h1 className="text-2xl font-bold text-hotelblue">Mis Estancias</h1>
        </div>

        <Tabs defaultValue="activas" className="mb-8">
          <TabsList className="bg-hotelblue/10">
            <TabsTrigger value="activas" className="data-[state=active]:bg-hotelblue data-[state=active]:text-white">
              Activas
            </TabsTrigger>
            <TabsTrigger value="pasadas" className="data-[state=active]:bg-hotelblue data-[state=active]:text-white">
              Pasadas
            </TabsTrigger>
          </TabsList>
          <TabsContent value="activas" className="mt-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-hotelblue">Hospedaje #HOS-12345</CardTitle>
                      <CardDescription>15/03/2024 - 18/03/2024</CardDescription>
                    </div>
                    <Badge className="bg-hotelblue">Confirmada</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <div className="text-sm font-medium mb-1">Habitación</div>
                      <div>Doble 203</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Huéspedes</div>
                      <div>2 adultos</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Total</div>
                      <div>$9,720.80 MXN</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="border-hotelblue text-hotelblue hover:bg-hotelblue/10">
                    Ver detalles
                  </Button>
                  <Link href="/facturacion">
                    <Button size="sm" className="bg-hotelblue hover:bg-hotelblue/90">
                      <FileText className="mr-2 h-4 w-4" />
                      Facturar
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-hotelblue">Hospedaje #HOS-12346</CardTitle>
                      <CardDescription>20/04/2024 - 25/04/2024</CardDescription>
                    </div>
                    <Badge variant="outline">Pendiente</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <div className="text-sm font-medium mb-1">Habitación</div>
                      <div>Habitación Sencilla 105</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Huéspedes</div>
                      <div>1 adulto</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Total</div>
                      <div>$6,380.00 MXN</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="border-hotelblue text-hotelblue hover:bg-hotelblue/10">
                    Ver detalles
                  </Button>
                  <Button size="sm" disabled>
                    <FileText className="mr-2 h-4 w-4" />
                    Facturar
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="pasadas" className="mt-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-hotelblue">Hospedaje #HOS-11987</CardTitle>
                      <CardDescription>10/01/2024 - 12/01/2024</CardDescription>
                    </div>
                    <Badge variant="secondary">Completada</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <div className="text-sm font-medium mb-1">Habitación</div>
                      <div>Habitación Suite Estándar 108</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Huéspedes</div>
                      <div>2 adultos</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Total</div>
                      <div>$4,350.50 MXN</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="border-hotelblue text-hotelblue hover:bg-hotelblue/10">
                    Ver detalles
                  </Button>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-hotelblue text-hotelblue hover:bg-hotelblue/10"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Descargar factura
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-hotelblue">Hospedaje #HOS-11654</CardTitle>
                      <CardDescription>05/12/2023 - 10/12/2023</CardDescription>
                    </div>
                    <Badge variant="secondary">Completada</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <div className="text-sm font-medium mb-1">Habitación</div>
                      <div>Suite Familiar 302</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Huéspedes</div>
                      <div>2 adultos, 2 niños</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Total</div>
                      <div>$12,780.30 MXN</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="border-hotelblue text-hotelblue hover:bg-hotelblue/10">
                    Ver detalles
                  </Button>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-hotelblue text-hotelblue hover:bg-hotelblue/10"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Descargar factura
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <footer className="border-t py-8 bg-gradient-to-t from-hotelblue/10 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <HotelLogo size="small" className="mb-4" />
              <p className="text-sm text-muted-foreground">Ofreciendo la mejor experiencia de hospedaje desde #.</p>
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

