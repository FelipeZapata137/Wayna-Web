const products = [
  {
    id: 1,
    name: "Papel Antigrasa para Alimentos",
    desc: "Papel especial resistente a la grasa, ideal para envolver alimentos.",
    dimensions: "35 x 33 cm",
    price: 5.00,
    units: 100,
    image: "/assets/arte.png",
  },
  // Sección Conos
  {
    id: 2,
    name: "Cono Portavasos",
    desc: "Cono diseñado para transportar múltiples vasos de manera segura.",
    dimensions: "17.5 x 8 x 16 cm",
    price: 12.50,
    units: 50,
    image: "/assets/arte.png",
  },
  {
    id: 3,
    name: "Cono pequeño",
    desc: "Cono ideal para snacks y frituras.",
    dimensions: "7 x 7 x 15 cm",
    price: 7.00,
    units: 100,
    image: "/assets/arte.png",
  },
  {
    id: 4,
    name: "Cono grande",
    desc: "Cono grande para porciones más generosas.",
    dimensions: "7 x 7 x 22m",
    price: 8.00,
    units: 100,
    image: "/assets/arte.png",
  },
  {
    id: 5,
    name: "Cono Gigante",
    desc: "Cono gigante para eventos y grandes porciones.",
    dimensions: "9 x 9 x 33 cm",
    price: 10.00,
    units: 100,
    image: "/assets/arte.png",
  },
  {
    id: 6,
    name: "Big Box",
    desc: "Caja grande y resistente para envíos y delivery.",
    dimensions: "20 x 20 x 7 cm",
    price: 8.00,
    units: 25,
    image: "/assets/arte.png",
  },
  {
    id: 7,
    name: "Mega Big Box",
    desc: "Caja extra grande para envíos voluminosos.",
    dimensions: "25 x 25 x 7.5 cm",
    price: 11.00,
    units: 25,
    image: "/assets/arte.png",
  },
  // Seccion Canoas
  {
    id: 8,
    name: "Canoas 1",
    desc: "Caja tipo canoa para alimentos y snacks.",
    dimensions: "11.5 x 7.5 x 5.2 cm",
    price: 5.00,
    units: 100,
    image: "/assets/arte.png",
  },
  {
    id: 9,
    name: "Canoa 2",
    desc: "Caja grande y resistente para envíos pesados.",
    dimensions: "15 x 14 x 4 cm",
    price: 5.00,
    units: 50,
    image: "/assets/arte.png",
  },
  {
    id: 10,
    name: "Canoa 3",
    desc: "Caja grande y resistente para envíos pesados.",
    dimensions: "16.5 x 9 x 5 cm",
    price: 5.50,
    units: 50,
    image: "/assets/arte.png",
  },
  {
    id: 11,
    name: "Canoa 4",
    desc: "Caja grande y resistente para envíos pesados.",
    dimensions: "20 x 20 x 4.5 cm",
    price: 5.50,
    units: 50,
    image: "/assets/arte.png",
  },
  // Sección Contenedores
  {
    id: 12,
    name: "Contenedor 1",
    desc: "Contenedor ideal para alimentos y snacks.",
    dimensions: "19 x 12 x 8 cm",
    price: 5.75,
    units: 25,
    image: "/assets/arte.png",
  },
  {
    id: 13,
    name: "Contenedor 2",
    desc: "Contenedor grande y resistente para envío de alimentos.",
    dimensions: "17.5 x 15 x 8.5 cm",
    price: 6.00,
    units: 25,
    image: "/assets/arte.png",
  },
  {
    id: 14,
    name: "Contenedor 3",
    desc: "Contenedor grande y resistente para envío de alimentos.",
    dimensions: "9 x 7 x 10.5 cm",
    price: 6.50,
    units: 25,
    image: "/assets/arte.png",
  },
  {
    id: 15,
    name: "Porta Papas Grande",
    desc: "Contenedor ideal para papas fritas y snacks.",
    dimensions: "7.5 x 2.5 x 15.5 cm",
    price: 8.50,
    units: 100,
    image: "/assets/arte.png",
  },
  {
    id: 16,
    name: "Porta Papas Pequeño",
    desc: "Contenedor ideal para papas fritas y snacks.",
    dimensions: "6 x 3 x 11 cm",
    price: 6.50,
    units: 100,
    image: "/assets/arte.png",
  },
  {
    id: 17,
    name: "Porta Hot Dog",
    desc: "Contenedor diseñado para hot dogs y similares.",
    dimensions: "18 x 6 x 4 cm",
    price: 5.50,
    units: 100,
    image: "/assets/arte.png",
  },
  {
    id: 18,
    name: "Porta Hamburguesa",
    desc: "Contenedor diseñado para hamburguesas y similares.",
    dimensions: "9 x 5 x 9 cm",
    price: 5.50,
    units: 100,
    image: "/assets/arte.png",
  },
  {
    id: 19,
    name: "Porta Vasos",
    desc: "Contenedor diseñado para transportar vasos de manera segura.",
    dimensions: "18 x 8 x 17 cm",
    price: 5.50,
    units: 25,
    image: "/assets/arte.png",
  },
  // Seccion Bandejas Bocaditos
  {
    id: 20,
    name: "Bandeja Bocaditos Alta",
    desc: "Bandeja ideal para servir bocaditos y aperitivos.",
    dimensions: "27 x 18 x 8 cm",
    price: 6.00,
    units: 25,
    image: "/assets/arte.png",
  },
  {
    id: 21,
    name: "Bandeja Bocaditos Baja",
    desc: "Bandeja ideal para servir bocaditos y aperitivos.",
    dimensions: "27.5 x 18.5 x 3 cm",
    price: 4.50,
    units: 25,
    image: "/assets/arte.png",
  },
  {
    id: 22,
    name: "Lonchera",
    desc: "Contenedor ideal para llevar almuerzos y snacks.",
    dimensions: "20 x 12 x 13 cm",
    price: 15.00,
    units: 50,
    image: "/assets/arte.png",
  },
  {
    id: 23,
    name: "Cajita Cuadrada",
    desc: "Contenedor ideal para pequeños alimentos y snacks.",
    dimensions: "12 x 12 x 8 cm",
    price: 7.00,
    units: 50,
    image: "/assets/arte.png",
  },
  {
    id: 24,
    name: "Cajita Rectangular",
    desc: "Contenedor ideal para pequeños alimentos y snacks.",
    dimensions: "14 x 9.5 x 7 cm",
    price: 7.00,
    units: 50,
    image: "/assets/arte.png",
  },
  {
    id: 25,
    name: "Caja Combos",
    desc: "Caja ideal para combos de alimentos y snacks.",
    dimensions: "27 x 18 x 8 cm",
    price: 8.50,
    units: 25,
    image: "/assets/arte.png",
  },
  {
    id: 26,
    name: "Stickers Personalizados",
    desc: "Stickers personalizados para tus empaques y productos.",
    dimensions: "5 x 5 cm",
    price: 2.00,
    units: 40,
    image: "/assets/arte.png",
  },
  {
    id: 27,
    name: "Caja de 1 Cupcake",
    desc: "Caja ideal para transportar un cupcake de manera segura.",
    dimensions: "10 x 10 x 10 cm",
    price: 5.50, // Recotizar precio
    units: 25,
    image: "/assets/arte.png",
  },
  {
    id: 28,
    name: "Caja de 3 o 4 Cupcakes sin Ventana",
    desc: "Caja ideal para transportar tres cupcakes de manera segura.",
    dimensions: "17.5 x 15 x 8.5 cm",
    price: 8.50,
    units: 25,
    image: "/assets/arte.png",
  },
  {
    id: 29,
    name: "Caja de 3 o 4 Cupcakes con Ventana",
    desc: "Caja ideal para transportar tres cupcakes con ventana para mejor presentación.",
    dimensions: "17.5 x 15 x 8.5 cm",
    price: 13.50,
    units: 25,
    image: "/assets/arte.png",
  },
  {
    id: 30,
    name: "Caja de 6 Cupcakes sin Ventana",
    desc: "Caja ideal para transportar seis cupcakes de manera segura.",
    dimensions: "27 x 18 x 8 cm",
    price: 10.00,
    units: 25,
    image: "/assets/arte.png",
  },
  // Cajas con Ventana
  {
    id: 31,
    name: "Mini Box con Ventana",
    desc: "Caja pequeña con ventana para pequeños productos.",
    dimensions: "23 x 4.5 x 4.5 cm",
    price: 5.50, // Recotizar precio
    units: 25,
    image: "/assets/arte.png",
  },
  {
    id: 32,
    name: "Box 1 con Ventana",
    desc: "Caja mediana con ventana para productos variados.",
    dimensions: "19 x 12 x 8 cm",
    price: 11.50,
    units: 25,
    image: "/assets/arte.png",
  },
  {
    id: 33,
    name: "Box 2 con Ventana",
    desc: "Caja grande con ventana para productos variados.",
    dimensions: "17.5 x 15.5 x 8.5 cm",
    price: 12.00,
    units: 25,
    image: "/assets/arte.png",
  },
  {
    id: 34,
    name: "Box 3 con Ventana",
    desc: "Caja extra grande con ventana para productos variados.",
    dimensions: "20 x 20 x 7 cm",
    price: 13.00,
    units: 25,
    image: "/assets/arte.png",
  },
  {
    id: 35,
    name: "Box 4 con Ventana",
    desc: "Caja gigante con ventana para productos variados.",
    dimensions: "27 x 18 x 8 cm",
    price: 14.00,
    units: 25,
    image: "/assets/arte.png",
  },
  {
    id: 36,
    name: "Box 5 con Ventana",
    desc: "Caja extra gigante con ventana para productos variados.",
    dimensions: "10 x 10 x 10 cm",
    price: 5.50, // Recotizar precio
    units: 25,
    image: "/assets/arte.png",
  },
  {
    id: 37,
    name: "Caja para Botella de Vino sin Impresión",
    desc: "Contenedor diseñado para botellas de vino y similares.",
    dimensions: "8.5 x 8.5 x 38 cm",
    price: 4.75,
    units: 12,
    image: "/assets/arte.png",
  },
  {
    id: 38,
    name: "Caja para Botella de Vino con Impresió Genérica",
    desc: "Contenedor diseñado para botellas de vino y similares.",
    dimensions: "8.5 x 8.5 x 38 cm",
    price: 5.00,
    units: 12,
    image: "/assets/arte.png",
  },
  {
    id: 39,
    name: "Porta Pizza",
    desc: "Contenedor diseñado para transportar porciones de pizzas de manera segura.",
    dimensions: "14 x 20 x 1.5 cm",
    price: 5.00,
    units: 100,
    image: "/assets/arte.png",
  },

  // Cajas de Pizza Kraft varios tamaños
  // Implementar la lógica para los diferentes tamaños
  // ( {17 x 17 cm [ $ 0,27 / u ]} - {20 x 20 cm [ $ 0,29 / u ]} - {22 x 22 cm [ $ 0,32 / u ]} - {26 x 26 cm [ $ 0,38 / u ]}
  //   {29 x 29 cm [ $ 0,41 / u ]} - {31.5 x 31.5 cm [ $ 0,47 / u ]} - {34 x 34 cm [ $ 0,52 / u ]} - {36.5 x 36.5 cm [ $ 0,55 / u ]}
  //   {37.8 x 37.8 cm [ $ 0,59 / u ]} - {40 x 40 cm [ $ 0,60 / u ]} - {42 x 42 cm [ $ 0,67 / u ]} - {45 x 45 cm [ $ 0,82 / u ]}
  //   {48 x 48 cm [ $ 0,84 / u ]} - {52 x 52 cm [ $ 0,92 / u ]} ) x 4.2 cm de alto
  
  {
    id: 40,
    name: "Cajas de Pizza sin Impresión color Kraft",
    desc: "Contenedor diseñado para hot dogs y similares.",
    dimensions: "18 x 6 x 4 cm",
    price: 5.50,
    units: 100,
    image: "/assets/arte.png",
  },
]

const WHATSAPP_NUMBER = "593979116621"
const ORANGE_COLOR = "#F58220"

export default function Shop() {
  const handleCotizar = (productName, productPrice, productDimensions, productUnits) => {
    const message = encodeURIComponent(
      `¡Hola Wayna! \n\nEstoy interesado(a) en:\n\n` +
      `Producto: *${productName}*\n` +
      `Medidas: *${productDimensions}*\n` +
      `Precio: *$${productPrice.toFixed(2)} / ${productUnits} unidades*\n\n` +
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

                <div className="flex items-center justify-center">
                  <span className="text-3xl font-black text-wayna-green">
                    ${product.price.toFixed(2)} / {product.units} u
                  </span>
                </div>
                <div className="mt-6 flex items-center justify-center">
                <button
                    onClick={() => handleCotizar(product.name, product.price, product.dimensions, product.units)}
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