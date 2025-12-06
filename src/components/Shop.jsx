const products = [
  {
    id: 1,
    name: "Caja Corrugada Pequeña",
    desc: "Caja de cartón corrugado ideal para envíos pequeños. Dimensiones: 20x15x10cm",
    price: 1.50,
    image: "src/assets/arte.png",
  },
  {
    id: 2,
    name: "Caja Kraft Grande",
    desc: "Caja ecológica de kraft para productos grandes. Dimensiones: 40x30x25cm",
    price: 3.50,
    image: "src/assets/arte.png",
  },
  {
    id: 3,
    name: "Caja Para Alimentos",
    desc: "Caja especializada para delivery de alimentos con interior resistente a grasa",
    price: 2.00,
    image: "src/assets/arte.png",
  },
  {
    id: 4,
    name: "Caja Premium Blanca",
    desc: "Caja elegante con acabado mate para productos premium y regalos",
    price: 4.50,
    image: "src/assets/arte.png",
  },
  {
    id: 5,
    name: "Caja Para Repostería",
    desc: "Caja con ventana transparente ideal para pasteles y postres",
    price: 2.50,
    image: "src/assets/arte.png",
  },
  {
    id: 6,
    name: "Caja Multiusos Mediana",
    desc: "Caja versátil de tamaño mediano. Dimensiones: 30x20x15cm",
    price: 1.80,
    image: "src/assets/arte.png",
  },
   {
    id: 7,
    name: "Big Box",
    desc: "Caja versátil de tamaño mediano. Dimensiones: 30x20x15cm",
    price: 5.00,
    image: "src/assets/arte.png",
  },
]

export default function Shop() {
  return (
    <section className="pt-24 pb-32 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 data-aos="fade-up" className="text-5xl md:text-6xl font-black mb-4">
            Nuestros Productos
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-600">
            Explora nuestro catálogo de cajas y soluciones de empaque personalizadas
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                  {product.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-wayna-green">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}