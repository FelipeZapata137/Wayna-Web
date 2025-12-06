const products = [
  {
    id: 1,
    name: "Caja Corrugada Pequeña",
    desc: "Caja de cartón corrugado ideal para envíos pequeños.",
    dimensions: "20 x 15 x 10 cm",
    price: 1.50,
    image: "/assets/arte.png",
  },
  {
    id: 2,
    name: "Caja Kraft Grande",
    desc: "Caja ecológica de kraft para productos grandes.",
    dimensions: "40 x 30 x 25 cm",
    price: 3.50,
    image: "/assets/arte.png",
  },
  {
    id: 3,
    name: "Caja Para Alimentos",
    desc: "Caja especializada para delivery de alimentos con interior resistente a grasa.",
    dimensions: "35 x 25 x 12 cm",
    price: 2.00,
    image: "/assets/arte.png",
  },
  {
    id: 4,
    name: "Caja Premium Blanca",
    desc: "Caja elegante con acabado mate para productos premium y regalos.",
    dimensions: "30 x 30 x 30 cm",
    price: 4.50,
    image: "/assets/arte.png",
  },
  {
    id: 5,
    name: "Caja Para Repostería",
    desc: "Caja con ventana transparente ideal para pasteles y postres.",
    dimensions: "25 x 25 x 12 cm",
    price: 2.50,
    image: "/assets/arte.png",
  },
  {
    id: 6,
    name: "Caja Multiusos Mediana",
    desc: "Caja versátil de tamaño mediano.",
    dimensions: "30 x 20 x 15 cm",
    price: 1.80,
    image: "/assets/arte.png",
  },
  {
    id: 7,
    name: "Big Box",
    desc: "Caja grande y resistente para envíos pesados.",
    dimensions: "60 x 40 x 40 cm",
    price: 5.00,
    image: "/assets/arte.png",
  },
]

const WHATSAPP_NUMBER = "593979116621"
const ORANGE_COLOR = "#F58220"

export default function Shop() {
  const handleCotizar = (productName, productPrice, dimensions) => {
    const message = encodeURIComponent(
      `¡Hola Wayna! \n\nEstoy interesado(a) en:\n\n` +
      `Producto: *${productName}*\n` +
      `Medidas: *${dimensions}*\n` +
      `Precio: *$${productPrice.toFixed(2)}*\n\n` +
      `Quisiera más información acerca de tiempos de entrega y cotizar por un número de paquetes de: `
    )

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
  }

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
                <h3 className="text-xl font-bold mb-1 text-gray-900">{product.name}</h3>
                
                <p className="text-lg font-black mb-4" style={{ color: ORANGE_COLOR }}>
                  {product.dimensions}
                </p>

                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {product.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-wayna-green">
                    ${product.price.toFixed(2)}
                  </span>

                  <button
                    onClick={() => handleCotizar(product.name, product.price, product.dimensions)}
                    className="bg-wayna-green text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#F58220] transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Cotizar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}