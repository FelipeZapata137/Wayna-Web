import { useEffect } from 'react'
import { ArrowRight, MapPin, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react'

export default function Contacto() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="pt-32 pb-24 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-gray-900">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos listos para ayudarte con tu próximo proyecto de empaque. ¡Escríbenos y cotizamos en minutos!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div data-aos="fade-right" data-aos-delay="100">
            <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-wayna-green">Ponte en contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-wayna-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-wayna-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                    <p className="text-gray-600 mb-2">
                      Respuesta rápida de lunes a viernes
                    </p>
                    <a
                      href="https://wa.me/593979116621"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-wayna-green text-white px-6 py-3 rounded-full font-medium hover:bg-[#F58220] transition shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      <MessageCircle size={20} />
                      +593 979 116 621
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-wayna-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-wayna-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Horario</h3>
                    <p className="text-gray-600">
                      Lunes a Viernes: 9:00 AM - 5:00 PM<br />
                      (Horarios flexibles para coordinar retiros)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-wayna-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-wayna-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Retiro en Quito</h3>
                    <p className="text-gray-600">
                      Av. 13 de Junio S2-93 y Segundo Silva, Quito<br />
                      <span className="text-sm text-gray-500">
                        (Solo con cita previa – coordinamos día y hora)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-6 justify-center md:justify-start">
              <a
                href="https://instagram.com/wayna_en_linea/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-wayna-green/10 transition"
              >
                <Instagram size={28} className="text-gray-700 hover:text-wayna-green" />
              </a>
              <a
                href="https://facebook.com/wayna.enlinea.7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-wayna-green/10 transition"
              >
                <Facebook size={28} className="text-gray-700 hover:text-wayna-green" />
              </a>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="200">
            <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-wayna-green">Sobre Wayna</h2>
              
              <div className="prose text-gray-700 leading-relaxed space-y-4">
                <p>
                  Wayna nació de una idea familiar: ofrecer soluciones de empaque sostenibles, bonitas y prácticas para pequeños y medianos negocios, con la misma calidad que las grandes empresas.
                </p>
                <p>
                  Somos una familia trabajando juntos. Este emprendimiento es el sueño de varios años que finalmente hicimos realidad, combinando nuestras habilidades en diseño, producción y atención al cliente.
                </p>
                <p>
                  Actualmente operamos desde casa en Quito, por lo que los retiros son solo con cita previa (adaptamos horarios según disponibilidad). Estamos en la búsqueda activa de un local físico para poder atenderlos aún mejor.
                </p>
                <p className="font-medium">
                  Lo que más nos motiva es ver cómo tus productos llegan a tus clientes con un empaque que los haga sentir especiales. ¡Gracias por confiar en nosotros!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-4 overflow-hidden">
              <h3 className="text-xl font-bold mb-4 text-center text-wayna-green">
                Ubicación aproximada (solo retiro con cita)
              </h3>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d593.0899800936884!2d-78.44806295149944!3d-0.01184056654970949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAv.%2013%20de%20Junio%20S2-93%20y%20Segundo%20Silva%2C%20Quito%2C%20Ecuador!5e0!3m2!1sen!2sec!4v1767498268636!5m2!1sen!2sec"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">
                Av. 13 de Junio S2-93 y Segundo Silva, Quito<br />
                (Coordenadas aproximadas – coordinamos ubicación exacta al agendar)
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para tu próximo empaque?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Escríbenos ahora y te respondemos en minutos
          </p>
          <a
            href="https://wa.me/593979116621"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-wayna-green text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#F58220] transition shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <MessageCircle size={28} />
            Chatea por WhatsApp ahora
          </a>
        </div>
      </div>
    </section>
  )
}