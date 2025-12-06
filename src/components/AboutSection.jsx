export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div data-aos="fade-right">
          <h2 className="text-5xl font-black text-wayna-green mb-2">La empresa</h2>
          <div className="w-24 h-1 bg-wayna-green mb-10" />

          <h3 className="text-2xl font-bold mb-4">MISIÓN</h3>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Conocer las necesidades de los consumidores en el área de alimentos que día a día va cambiando 
            de tendencia de acuerdo al mercado y a la competencia. Estamos de la mano de la industria HORECA 
            para avanzar al mismo tiempo y poder ofrecer una solución a cada uno de los nuevos requerimientos.
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
            src="/assets/arte.png" 
            alt="Wayna visión" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}