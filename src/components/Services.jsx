import { Package, ShieldCheck, Leaf, Truck } from 'lucide-react'

export default function Services() {
  const features = [
    { icon: Package, title: "Variedad de Productos", desc: "Contamos con gran variedad de productos nacionales e importados." },
    { icon: ShieldCheck, title: "Alta Calidad", desc: "Productos de alta calidad garantizados para proteger tus envíos." },
    { icon: Leaf, title: "Precios Asequibles", desc: "Orientado a satisfacer las diferentes necesidades de los consumidores." },
    { icon: Truck, title: "Envíos Nacionales", desc: "Llegamos a donde estés con nuestra red de distribución." },
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 data-aos="fade-up" className="text-5xl font-black mb-4">¿Qué ofrecemos?</h2>
        <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-600 mb-16">
          Soluciones integrales para tu negocio con el mejor servicio del mercado.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-wayna-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-wayna-green" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}