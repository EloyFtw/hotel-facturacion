"use client"
 
import type React from "react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HotelLogo } from "@/components/hotel-logo";

import { parse, eachDayOfInterval, format } from "date-fns";

const parseDate = (dateStr: string) => parse(dateStr, "dd/MM/yyyy", new Date());

export default function FacturacionPage() {
  const checkIn = "15/03/2024";
  const checkOut = "18/03/2024";
  const precioPorNoche = 2500;

  const nochesDisponibles = useMemo(() => {
    return eachDayOfInterval({
      start: parseDate(checkIn),
      end: new Date(parseDate(checkOut).getTime() - 86400000),
    });
  }, [checkIn, checkOut]);

  const [nochesSeleccionadas, setNochesSeleccionadas] = useState<Date[]>(nochesDisponibles);
  const totalNoches = nochesSeleccionadas.length;
  const totalHospedaje = totalNoches * precioPorNoche;

  const [folioReserva, setFolioReserva] = useState("");
  const [reservaEncontrada, setReservaEncontrada] = useState(false);

  const buscarReserva = (e: React.FormEvent) => {
    e.preventDefault();
    if (folioReserva.trim() !== "") setReservaEncontrada(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Encabezado con logo */}
      <header className="border-b bg-white shadow-sm">
        <div className="container flex h-20 items-center px-4 sm:px-6 lg:px-8">
          <HotelLogo />
        </div>
      </header>

      <main className="flex-1 container py-10 px-4 md:px-6">
        {/* Título y botón volver */}
        <div className="flex items-center mb-8">
          <Link href="/" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Volver</span>
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-hotelblue">Facturación de Estancia</h1>
        </div>

        {/* Si no se ha buscado aún la reserva */}
        {!reservaEncontrada ? (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-hotelblue">Buscar</CardTitle>
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
                      <Button type="submit" size="icon" className="bg-hotelblue hover:bg-hotelblue/90">
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Si no conoce su número de folio, puede consultarlo en su correo de confirmación o contactar a recepción.
              </p>
            </CardFooter>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {/* Detalles de Estancia */}
            <Card>
              <CardHeader>
                <CardTitle className="text-hotelblue">Detalles de su Estancia</CardTitle>
                <CardDescription>Folio: {folioReserva}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 text-sm">
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-medium">Huésped:</div>
                  <div>Juan Pérez</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-medium">Check-in:</div>
                  <div>{checkIn}</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-medium">Check-out:</div>
                  <div>{checkOut}</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-medium">Habitación:</div>
                  <div>Doble 203</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-medium">Noches:</div>
                  <div>{totalNoches}</div>
                </div>
              </CardContent>
            </Card>

            {/* Facturación Tabs */}
            <Card>
              <CardHeader>
                <CardTitle className="text-hotelblue">Facturación</CardTitle>
                <CardDescription>Complete los datos para su factura</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="personal">
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
                <Button className="w-full bg-hotelblue hover:bg-hotelblue/90">Generar Factura</Button>
              </CardFooter>
            </Card>

            {/* Resumen de Cargos */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-hotelblue">Resumen de Cargos</CardTitle>
                <CardDescription>Desglose de los cargos de su estancia</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg divide-y">
                  <div className="grid grid-cols-4 gap-4 p-4 font-medium bg-gray-100">
                    <div>Concepto</div>
                    <div className="text-right">Precio Unitario</div>
                    <div className="text-right">Cantidad</div>
                    <div className="text-right">Total</div>
                  </div>

                  {/* Habitación */}
                  <div className="grid grid-cols-4 gap-4 p-4">
                    <div>
                      Habitación Suite Deluxe
                      <div className="mt-2 text-sm text-gray-600">Selecciona noches a facturar:</div>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-1">
                                {nochesDisponibles.map((noche, idx) => {
                                  const fechaStr = format(noche, "dd/MM/yyyy");
                                  const isChecked = nochesSeleccionadas.some(n => format(n, "dd/MM/yyyy") === fechaStr);
                                  return (
                                    <label
                                      key={idx}
                                      className="flex items-center space-x-2 text-sm bg-gray-50 border rounded-md px-2 py-1 hover:bg-gray-100 cursor-pointer"
                                    >
                                      <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={() => {
                                          if (isChecked) {
                                            setNochesSeleccionadas(nochesSeleccionadas.filter(n => format(n, "dd/MM/yyyy") !== fechaStr));
                                          } else {
                                            setNochesSeleccionadas([...nochesSeleccionadas, noche]);
                                          }
                                        }}
                                      />
                                      <span>{fechaStr}</span>
                                    </label>
                                  );
                       })}                        
                      </div>
                    </div>
                    <div className="text-right">{precioPorNoche.toLocaleString("es-MX", { style: "currency", currency: "MXN" })}</div>
                    <div className="text-right">{totalNoches} noche{totalNoches > 1 ? "s" : ""}</div>
                    <div className="text-right">{totalHospedaje.toLocaleString("es-MX", { style: "currency", currency: "MXN" })}</div>
                  </div>

                  {/* Servicio a la habitación (ejemplo adicional) */}
                  <div className="grid grid-cols-4 gap-4 p-4">
                    <div>Servicio a la habitación</div>
                    <div className="text-right">$350.00</div>
                    <div className="text-right">2</div>
                    <div className="text-right">$700.00</div>
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
  );
}
