import { HotelLogo } from "./hotel-logo"

interface InvoiceTemplateProps {
  invoiceNumber: string
  date: string
  customerName: string
  customerRFC: string
  customerEmail: string
  reservationFolio: string
  checkIn: string
  checkOut: string
  roomType: string
  nights: number
  items: {
    description: string
    unitPrice: number
    quantity: number
    total: number
  }[]
  subtotal: number
  tax: number
  total: number
}

export function InvoiceTemplate({
  invoiceNumber,
  date,
  customerName,
  customerRFC,
  customerEmail,
  reservationFolio,
  checkIn,
  checkOut,
  roomType,
  nights,
  items,
  subtotal,
  tax,
  total,
}: InvoiceTemplateProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex justify-between items-start mb-8">
        <div>
          <HotelLogo size="medium" />
          <div className="mt-4 text-sm text-gray-600">
            <p>Abasolo col. Pueblo Nuevo</p>
            <p>Col. Centro, La Paz</p>
            <p>CP 23080, México</p>
            <p>Tel: +52 612 1234 5678</p>
          </div>
        </div>
        <div className="text-right">
          <h1 className="text-2xl font-bold text-hotelblue">FACTURA</h1>
          <p className="text-gray-600">No. {invoiceNumber}</p>
          <p className="text-gray-600">Fecha: {date}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="border-t pt-4">
          <h2 className="text-lg font-semibold text-hotelblue mb-2">Cliente</h2>
          <p className="text-gray-800">{customerName}</p>
          <p className="text-gray-600">RFC: {customerRFC}</p>
          <p className="text-gray-600">Email: {customerEmail}</p>
        </div>
        <div className="border-t pt-4">
          <h2 className="text-lg font-semibold text-hotelblue mb-2">Detalles de Hospedaje</h2>
          <p className="text-gray-600">Folio: {reservationFolio}</p>
          <p className="text-gray-600">Check-in: {checkIn}</p>
          <p className="text-gray-600">Check-out: {checkOut}</p>
          <p className="text-gray-600">Habitación: {roomType}</p>
          <p className="text-gray-600">Noches: {nights}</p>
        </div>
      </div>

      <div className="border-t pt-4 mb-8">
        <h2 className="text-lg font-semibold text-hotelblue mb-4">Detalle de Cargos</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-hotelblue/10 text-left">
                <th className="py-2 px-4 font-semibold">Descripción</th>
                <th className="py-2 px-4 font-semibold text-right">Precio Unitario</th>
                <th className="py-2 px-4 font-semibold text-right">Cantidad</th>
                <th className="py-2 px-4 font-semibold text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4">{item.description}</td>
                  <td className="py-3 px-4 text-right">${item.unitPrice.toFixed(2)}</td>
                  <td className="py-3 px-4 text-right">{item.quantity}</td>
                  <td className="py-3 px-4 text-right">${item.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end mb-8">
        <div className="w-64">
          <div className="flex justify-between py-2">
            <span className="font-medium">Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="font-medium">IVA (16%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 font-bold text-lg">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="border-t pt-4 text-center text-sm text-gray-600">
        <p className="mb-2">Esta factura es un comprobante fiscal digital conforme a la legislación vigente.</p>
        <p className="text-hotelblue">¡Gracias por hospedarse en Hotel Del Ángel!</p>
      </div>
    </div>
  )
}

