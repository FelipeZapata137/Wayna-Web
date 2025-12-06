import { Link } from 'react-router-dom'
import { Facebook, Instagram, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
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
            <li className="text-gray-500 cursor-not-allowed">
              Política de Privacidad
            </li>
            <li className="text-gray-500 cursor-not-allowed">
              Términos y Condiciones
            </li>
          </ul>
        </div>

      </div>

      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        © 2025 Wayna. Todos los derechos reservados.
      </div>
    </footer>
  )
}