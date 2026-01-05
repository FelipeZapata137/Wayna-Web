export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div data-aos="fade-right">
          <h2 className="text-5xl font-black text-wayna-green mb-2">La empresa</h2>
          <div className="w-24 h-1 bg-wayna-green mb-10" />

          <h3 className="text-2xl font-bold mb-4">MISIÓN</h3>
          <p className="text-gray-600 leading-relaxed">
            Impulsar a los emprendedores y negocios de todos los tamaños ofreciendo cajas de cartulina de alta calidad
            a precios justos y accesibles. 
          </p>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Producimos al por mayor para que incluso en compras mínimas nuestros clientes se beneficien del costo real 
            de producción, y desarrollamos soluciones personalizadas que se adaptan 100% a la identidad, necesidad y 
            visión de cada marca.
          </p>

          <h3 className="text-2xl font-bold mb-4">VISIÓN</h3>
          <p className="text-gray-600 leading-relaxed">
            Crear conciencia en los consumidores para comprender el impacto ambiental de cambiar los estereotipos 
            y abrirse a nuevas opciones. Nuestros clientes deben sentirse respaldados ya que somos su socio 
            estratégico para alcanzar nuevos objetivos.
          </p>
        </div>

        <div data-aos="fade-left" data-aos-delay="200" className="rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="/assets/mision-vision.png" 
            alt="Wayna visión" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}