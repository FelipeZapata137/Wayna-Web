// src/components/Footer.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, MessageCircle, MapPin, Clock } from 'lucide-react'

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

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
  );
}

export default function Footer() {
  const [modalTermsOpen, setModalTermsOpen] = useState(false);
  const [modalPrivacyOpen, setModalPrivacyOpen] = useState(false);

  return (
    <>
      <footer data-aos="fade-up" className="bg-wayna-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

          <div>
            <h3 className="text-3xl font-black mb-4">Wayna</h3>
            <p className="text-gray-300 leading-relaxed">
              Soluciones de empaque sostenibles y personalizadas para la industria moderna.
            </p>

            <div className="flex gap-6 mt-6">
              <a
                href="https://facebook.com/wayna.enlinea.7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-wayna-green transition"
              >
                <Facebook size={28} />
              </a>

              <a
                href="https://instagram.com/wayna_en_linea/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-wayna-green transition"
              >
                <Instagram size={28} />
              </a>

              <a
                href="https://wa.me/593979116621"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-wayna-green transition"
              >
                <MessageCircle size={28} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-8">Visítanos</h4>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-wayna-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-wayna-green" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed">
                  Av 13 de Junio S2-93 y<br />
                  Segundo Silva, Quito,<br />
                  Ecuador (Solo retiro)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-wayna-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-wayna-green" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-gray-300 font-medium">Lun - Vie: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Enlaces</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="/" className="hover:text-wayna-green transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/tienda" className="hover:text-wayna-green transition">
                  Catálogo
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => setModalTermsOpen(true)}
                  className="hover:text-wayna-green transition text-left w-full"
                >
                  Términos y Condiciones
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setModalPrivacyOpen(true)}
                  className="hover:text-wayna-green transition text-left w-full"
                >
                  Política de Privacidad
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          © 2026 Wayna. Todos los derechos reservados.
        </div>
      </footer>

      <Modal 
        isOpen={modalTermsOpen} 
        onClose={() => setModalTermsOpen(false)} 
        title="Términos y Condiciones"
      >
        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>Al usar este sitio web o solicitar cotización, aceptas los siguientes términos:</p>
          
          <h4 className="text-xl font-bold mt-6">1. Precios y Disponibilidad</h4>
          <p>Los precios mostrados son referenciales y por paquete (excepto cajas para pizza, que se venden por unidad). Pueden cambiar sin previo aviso. El precio definitivo es el que confirmamos por WhatsApp antes de procesar el pedido.</p>

          <h4 className="text-xl font-bold mt-6">2. Forma de Pago</h4>
          <p>El pago es del 50% anticipado antes de iniciar la producción. Aceptamos transferencia bancaria o efectivo al momento de la entrega.</p>

          <h4 className="text-xl font-bold mt-6">3. Envíos y Entregas</h4>
          <p>
            - <strong>Quito:</strong> Entrega a domicilio $3.00.<br/>
            - <strong>Resto del país:</strong> Envío por Servientrega o similar (costo aparte, te lo confirmamos antes).<br/>
            No nos hacemos responsables por retrasos o daños causados por la empresa de envíos.
          </p>

          <h4 className="text-xl font-bold mt-6">4. Cambios y Devoluciones</h4>
          <p>No aceptamos cambios ni devoluciones en productos personalizados (stickers, impresiones, etc.). Si el producto llega dañado, avísanos en las primeras 48 horas con foto del paquete y lo resolvemos.</p>

          <h4 className="text-xl font-bold mt-6">5. Tiempos de Entrega</h4>
          <p>Manejamos nuestros tiempos de entrega de la siguiente manera:</p>
          <ul className="list-disc pl-6">
            <li>Para productos en stock el tiempo de entrega es de un máximo de hasta 24 horas.</li>
            <li>Generalmente entre 2 y 5 días hábiles después de aprobado el diseño y recibido el pago. Pedidos grandes o personalizados pueden tardar más (te avisamos siempre).</li>
          </ul>
          <h4 className="text-xl font-bold mt-6">6. Responsabilidad</h4>
          <p>Nos esforzamos por entregar todo en perfectas condiciones, pero no respondemos por daños o pérdidas una vez entregado el producto al cliente o transportista.</p>

          <p className="mt-6">Para cualquier duda: chatea con nosotros al <a href="https://wa.me/593979116621" className="text-wayna-green hover:underline">593-979-116-621</a>.</p>
        </div>
      </Modal>

      <Modal 
        isOpen={modalPrivacyOpen} 
        onClose={() => setModalPrivacyOpen(false)} 
        title="Política de Privacidad"
      >
        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>En Wayna respetamos tu privacidad y solo recolectamos la información estrictamente necesaria.</p>

          <h4 className="text-xl font-bold mt-6">1. Información que recolectamos</h4>
          <p>Solo tu nombre y número de WhatsApp cuando solicitas cotización o haces un pedido. No pedimos correos, direcciones completas ni datos bancarios en esta web.</p>

          <h4 className="text-xl font-bold mt-6">2. Uso de la información</h4>
          <p>Usamos esos datos exclusivamente para:</p>
          <ul className="list-disc pl-6">
            <li>Responder tu cotización</li>
            <li>Confirmar tu pedido</li>
            <li>Coordinar la entrega</li>
          </ul>
          <p><strong>NUNCA</strong> vendemos, compartimos ni cedemos tu información a terceros.</p>

          <h4 className="text-xl font-bold mt-6">3. Cookies y tecnología</h4>
          <p>Usamos cookies básicas para que la web funcione bien y sea rápida. No rastreamos tu comportamiento ni usamos herramientas de publicidad invasiva.</p>

          <h4 className="text-xl font-bold mt-6">4. Tus derechos</h4>
          <p>Si en algún momento deseas que eliminemos cualquier información personal que nos hayas proporcionado (como tu número de teléfono o detalles de cotizaciones), solo indícanoslo mediante mensaje directo. Como nuestras operaciones se realizan principalmente a través de WhatsApp y no contamos con una base de datos formal de clientes, normalmente basta con que elimines la conversación desde tu dispositivo. De todas formas, revisaremos y eliminaremos cualquier registro interno que tengamos (notas, capturas o mensajes guardados) en un plazo máximo de 24 horas, y te confirmaremos cuando el proceso haya finalizado.</p>

          <p className="mt-6">¿Dudas? Escríbenos al <a href="https://wa.me/593979116621" className="text-wayna-green hover:underline">593-979-116-621</a>. Estamos para ayudarte.</p>
        </div>
      </Modal>
    </>
  )
}