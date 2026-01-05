import { Package, MapPin, Clock } from 'lucide-react'

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-500 hover:text-wayna-green text-3xl font-bold transition"
        >
          &times;
        </button>

        <h3 className="text-3xl font-black text-wayna-green mb-6">{title}</h3>
        
        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
          {children}
        </div>

        <p className="mt-8 text-sm text-gray-500 text-center">
          Última actualización: Enero 2026
        </p>
      </div>
    </div>
  )
}

export default function DeliveryModal({ isOpen, onClose }) {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Costos de Entrega"
    >
      <div className="space-y-6">
        <div className="bg-wayna-green/5 rounded-xl p-6 border border-wayna-green/20">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="text-wayna-green" size={28} strokeWidth={2.5} />
            <h4 className="text-2xl font-bold text-gray-900">Quito</h4>
          </div>
          
          <div className="space-y-2 ml-10">
            <p className="text-gray-700"><strong>Norte:</strong> $3.00</p>
            <p className="text-gray-700"><strong>Centro:</strong> $4.00</p>
            <p className="text-gray-700"><strong>Sur:</strong> $6.00</p>
            <p className="text-gray-700"><strong>Valles:</strong> $7.00</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <Package className="text-wayna-green" size={28} strokeWidth={2.5} />
            <h4 className="text-2xl font-bold text-gray-900">Resto del País</h4>
          </div>
          
          <p className="text-gray-700 ml-10">
            Envíos por <strong>Servientrega</strong> o empresa similar. 
            El costo varía según el destino y lo confirmamos antes de procesar tu pedido.
          </p>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="text-blue-600" size={28} strokeWidth={2.5} />
            <h4 className="text-2xl font-bold text-gray-900">Tiempos de Entrega</h4>
          </div>
          
          <div className="space-y-3 ml-10">
            <p className="text-gray-700">
              <strong>Productos en stock:</strong> Máximo 24 horas.
            </p>
            <p className="text-gray-700">
              <strong>Productos personalizados:</strong> 5 días hábiles después de aprobado el diseño y recibido el pago.
            </p>
            <p className="text-gray-700 text-sm italic">
              * Pedidos grandes o personalizados pueden tardar más (siempre te avisamos).
            </p>
          </div>
        </div>

        <p className="text-center text-gray-600 pt-4">
          ¿Dudas? Escríbenos al{' '}
          <a 
            href="https://wa.me/593979116621" 
            className="text-wayna-green hover:underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            593-979-116-621
          </a>
        </p>
      </div>
    </Modal>
  )
}