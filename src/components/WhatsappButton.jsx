import { MessageCircle } from 'lucide-react'

export default function WhatsappButton() {
  const phone = "593979116621"

  return (
    <a
      href={`https://wa.me/${phone}?text=%C2%A1Hola%20Wayna!%20Vengo%20desde%20la%20web%20y%20quiero%20hacer%20un%20pedido%20o%20cotizaci%C3%B3n`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea con nosotros por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        <span className="absolute inset-0 bg-wayna-green rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-70 transition-all duration-1000"></span>
        
        <span className="absolute inset-0 bg-wayna-green rounded-full scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-50 transition-all duration-1000 delay-200"></span>

        <div className="relative bg-wayna-green/75 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-wayna-green/60 transform hover:scale-110 transition-all duration-300">
          <MessageCircle size={30} strokeWidth={2.5} />
        </div>
      </div>

      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        ¡Chatea con nosotros!
      </span>
    </a>
  )
}