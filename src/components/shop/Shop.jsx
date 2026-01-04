// src/components/shop/Shop.jsx
import { useState, useEffect } from 'react'
import { products } from './productsData.js'
import ProductCard from './ProductCard.jsx'
import AntigrasaCarouselCard from './AntigrasaCarouselCard.jsx'
import StickersCard from './StickersCard.jsx'
import PizzaBoxCard from './PizzaBoxCard.jsx'
import CupcakesToggleCard from './CupcakesToggleCard.jsx'
import PackageToggleCard from './PackageToggleCard.jsx' // componente para toggles 12/25 y con/sin ventana
import { ArrowUp } from 'lucide-react'

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'porta-productos', name: 'Porta Productos' },
  { id: 'recipientes-contenedores', name: 'Recipientes Contenedores' },
  { id: 'canoas-bandejas', name: 'Canoas y Bandejas' },
  { id: 'papel-antigrasa', name: 'Papel Antigrasa' },
  { id: 'delivery-box', name: 'Delivery Box' },
  { id: 'dulces-bocaditos', name: 'Dulces y Bocaditos' },
  { id: 'cajas-ventana', name: 'Cajas con Ventana' },
  { id: 'para-pizza', name: 'Para Pizza' },
  { id: 'extras', name: 'Extras' },
]

const WHATSAPP_NUMBER = "593979116621"

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  const handleCotizar = (product) => {
    const message = encodeURIComponent(
      `¡Hola Wayna! \n\nEstoy interesado(a) en:\n\n` +
      `Producto: *${product.name}*\n` +
      `Medidas: *${product.dimensions}*\n` +
      `Precio: *$${product.price.toFixed(2)} / ${product.units} unidades*\n\n` +
      `Quisiera más información acerca de tiempos de entrega y cotizar por un número de paquetes de: `
    )

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
  }

  // Grupos especiales
  const antigrasaProducts = products.filter(p => p.category === 'papel-antigrasa')
  const stickersProducts = products.filter(p => p.category === 'extras' && p.name.includes('Stickers'))
  const pizzaBoxes = products.filter(p => p.category === 'para-pizza' && p.name.includes('Caja para Pizza'))
  const portaPizza = products.find(p => p.name === 'Porta Pizza')

  // Grupos para toggles de cupcakes
  const portaCupcakes = products.find(p => p.name.includes('Porta Cupcakes'))
  const tresCupcakesProducts = products.filter(p => p.toggleGroup === 'tres-cupcakes')
  const cuatroCupcakesProducts = products.filter(p => p.toggleGroup === 'cuatro-cupcakes')
  const seisCupcakesProducts = products.filter(p => p.toggleGroup === 'seis-cupcakes')

  // Grupos para toggles de paquetes 12/25
  const botellaVinoProducts = products.filter(p => p.toggleGroup === 'botella-vino')
  const giganteBigBoxProducts = products.filter(p => p.toggleGroup === 'gigante-bigbox')
  const box6VentanaProducts = products.filter(p => p.toggleGroup === 'box6-ventana')

  return (
    <section className="pt-24 pb-32 px-6 bg-gray-50 min-h-screen relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 data-aos="fade-up" className="text-5xl md:text-6xl font-black mb-4">
            Nuestros Productos
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-600">
            Explora nuestro catálogo de cajas y soluciones de empaque personalizadas
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-md">
            <label htmlFor="category" className="block text-lg font-medium text-gray-700 mb-3 text-center">
              Buscar por:
            </label>
            <select
              id="category"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full px-6 py-4 text-lg font-medium text-gray-900 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-wayna-green focus:border-wayna-green transition-all duration-300 cursor-pointer hover:shadow-md"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 text-xl py-12">
            No hay productos en esta categoría aún...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {activeCategory === 'all' ? (
              <>
                {/* Antigrasa carousel */}
                {antigrasaProducts.length > 0 && (
                  <AntigrasaCarouselCard products={antigrasaProducts} onCotizar={handleCotizar} />
                )}

                {/* Stickers select */}
                {stickersProducts.length > 0 && (
                  <StickersCard products={stickersProducts} onCotizar={handleCotizar} />
                )}

                {/* Pizza boxes select */}
                {pizzaBoxes.length > 0 && (
                  <PizzaBoxCard products={pizzaBoxes} onCotizar={handleCotizar} />
                )}

                {/* Porta Pizza normal */}
                {portaPizza && (
                  <ProductCard key={portaPizza.id} product={portaPizza} onCotizar={handleCotizar} />
                )}

                {/* Porta Cupcakes normal */}
                {portaCupcakes && (
                  <ProductCard key={portaCupcakes.id} product={portaCupcakes} onCotizar={handleCotizar} />
                )}

                {/* Cupcakes toggles */}
                {tresCupcakesProducts.length === 2 && (
                  <CupcakesToggleCard groupProducts={tresCupcakesProducts} onCotizar={handleCotizar} />
                )}
                {cuatroCupcakesProducts.length === 2 && (
                  <CupcakesToggleCard groupProducts={cuatroCupcakesProducts} onCotizar={handleCotizar} />
                )}
                {seisCupcakesProducts.length === 2 && (
                  <CupcakesToggleCard groupProducts={seisCupcakesProducts} onCotizar={handleCotizar} />
                )}

                {/* Paquetes 12/25 toggles (12 u primero) */}
                {botellaVinoProducts.length === 2 && (
                  <PackageToggleCard groupProducts={botellaVinoProducts} onCotizar={handleCotizar} />
                )}
                {giganteBigBoxProducts.length === 2 && (
                  <PackageToggleCard groupProducts={giganteBigBoxProducts} onCotizar={handleCotizar} />
                )}
                {box6VentanaProducts.length === 2 && (
                  <PackageToggleCard groupProducts={box6VentanaProducts} onCotizar={handleCotizar} />
                )}

                {/* Resto de productos normales */}
                {filteredProducts
                  .filter(p => 
                    p.category !== 'papel-antigrasa' &&
                    !p.name.includes('Stickers') &&
                    !p.name.includes('Caja para Pizza') &&
                    p.name !== 'Porta Pizza' &&
                    !p.name.includes('Cupcakes') &&
                    !p.name.includes('Botella de Vino') &&
                    !p.name.includes('Gigante Big Box') &&
                    !p.name.includes('Box 6 con Ventana')
                  )
                  .map(product => (
                    <ProductCard key={product.id} product={product} onCotizar={handleCotizar} />
                  ))}
              </>
            ) : activeCategory === 'porta-productos' ? (
              <>
                {/* Resto de Porta Productos (ordenados manualmente si quieres) */}
                {filteredProducts
                  .filter(p => 
                    p.category === 'porta-productos' &&
                    !p.name.includes('Botella de Vino')
                  )
                  .map(product => (
                    <ProductCard key={product.id} product={product} onCotizar={handleCotizar} />
                  ))}

                {/* Toggle de Botella de Vino al final */}
                {botellaVinoProducts.length === 2 && (
                  <PackageToggleCard groupProducts={botellaVinoProducts} onCotizar={handleCotizar} />
                )}
              </>
            ) : activeCategory === 'delivery-box' ? (
              <>
                {/* Orden específico */}
                {filteredProducts
                  .filter(p => p.name === 'Cajita Cuadrada' || p.name === 'Cajita Rectangular' || p.name === 'Lonchera' || p.name === 'Big Box' || p.name === 'Mega Big Box' || p.name === 'Caja Combos')
                  .sort((a, b) => {
                    const order = ['Cajita Cuadrada', 'Cajita Rectangular', 'Lonchera', 'Big Box', 'Mega Big Box', 'Caja Combos']
                    return order.indexOf(a.name) - order.indexOf(b.name)
                  })
                  .map(product => (
                    <ProductCard key={product.id} product={product} onCotizar={handleCotizar} />
                  ))}

                {/* Toggle para Gigante Big Box */}
                {giganteBigBoxProducts.length === 2 && (
                  <PackageToggleCard groupProducts={giganteBigBoxProducts} onCotizar={handleCotizar} />
                )}
              </>
            ) : activeCategory === 'cajas-ventana' ? (
              <>
                {/* Orden manual exacto */}
                {filteredProducts
                  .filter(p => p.name === 'Mini Box con Ventana' || 
                               p.name === 'Box 1 con Ventana' || 
                               p.name === 'Box 2 con Ventana' || 
                               p.name === 'Box 3 con Ventana' || 
                               p.name === 'Box 4 con Ventana' || 
                               p.name === 'Box 5 con Ventana')
                  .sort((a, b) => {
                    const order = [
                      'Mini Box con Ventana',
                      'Box 1 con Ventana',
                      'Box 2 con Ventana',
                      'Box 3 con Ventana',
                      'Box 4 con Ventana',
                      'Box 5 con Ventana'
                    ]
                    return order.indexOf(a.name) - order.indexOf(b.name)
                  })
                  .map(product => (
                    <ProductCard key={product.id} product={product} onCotizar={handleCotizar} />
                  ))}

                {/* Box 6 con toggle al final */}
                {box6VentanaProducts.length === 2 && (
                  <PackageToggleCard groupProducts={box6VentanaProducts} onCotizar={handleCotizar} />
                )}
              </>
            ) : activeCategory === 'dulces-bocaditos' ? (
              <>
                {portaCupcakes && (
                  <ProductCard key={portaCupcakes.id} product={portaCupcakes} onCotizar={handleCotizar} />
                )}
                {tresCupcakesProducts.length === 2 && (
                  <CupcakesToggleCard groupProducts={tresCupcakesProducts} onCotizar={handleCotizar} />
                )}
                {cuatroCupcakesProducts.length === 2 && (
                  <CupcakesToggleCard groupProducts={cuatroCupcakesProducts} onCotizar={handleCotizar} />
                )}
                {seisCupcakesProducts.length === 2 && (
                  <CupcakesToggleCard groupProducts={seisCupcakesProducts} onCotizar={handleCotizar} />
                )}
                {filteredProducts
                  .filter(p => !p.name.includes('Cupcakes') && p.name !== 'Porta Cupcakes')
                  .map(product => (
                    <ProductCard key={product.id} product={product} onCotizar={handleCotizar} />
                  ))}
              </>
            ) : (
              filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} onCotizar={handleCotizar} />
              ))
            )}
          </div>
        )}

        {/* Botón Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-50 group bg-wayna-green/75 text-white p-3 rounded-full shadow-2xl hover:bg-[#F58220] hover:shadow-wayna-green/60 transform hover:scale-110 transition-all duration-300"
            aria-label="Volver al top"
          >
            <ArrowUp size={18} strokeWidth={2.5} />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900/90 text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              Volver arriba
            </span>
          </button>
        )}
      </div>
    </section>
  )
}