// src/components/shop/Shop.jsx
import { useState } from 'react'
import { products } from './productsData.js'
import ProductCard from './ProductCard.jsx'
import AntigrasaCarouselCard from './AntigrasaCarouselCard.jsx'
import StickersCard from './StickersCard.jsx'
import PizzaBoxCard from './PizzaBoxCard.jsx'
import CupcakesToggleCard from './CupcakesToggleCard.jsx'  // ← tu componente de toggle

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'porta-productos', name: 'Porta Productos' },
  { id: 'recipientes-contenedores', name: 'Recipientes Contenedores' },
  { id: 'canoas-bandejas', name: 'Canoas y Bandejas' },
  { id: 'papel-antigrasa', name: 'Papel Antigrasa' },
  { id: 'delivery-box', name: 'Delivery Box' },
  { id: 'dulces-bocaditos', name: 'Dulces y Bocaditos' },
  { id: 'para-pizza', name: 'Para Pizza' },
  { id: 'extras', name: 'Extras' },
]

const WHATSAPP_NUMBER = "593979116621"

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all')

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

  // Grupos separados para cupcakes
  const portaCupcakes = products.find(p => p.name.includes('Porta Cupcakes')) // card normal
  const tresCupcakesProducts = products.filter(p => p.name.includes('3 Cupcakes'))
  const cuatroCupcakesProducts = products.filter(p => p.name.includes('4 Cupcakes'))
  const seisCupcakesProducts = products.filter(p => p.name.includes('6 Cupcakes'))

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

                {/* Porta Cupcakes (1 unidad) - card normal */}
                {portaCupcakes && (
                  <ProductCard key={portaCupcakes.id} product={portaCupcakes} onCotizar={handleCotizar} />
                )}

                {/* Caja 3 cupcakes con toggle */}
                {tresCupcakesProducts.length === 2 && (
                  <CupcakesToggleCard
                    groupProducts={tresCupcakesProducts}
                    onCotizar={handleCotizar}
                  />
                )}

                {/* Caja 4 cupcakes con toggle */}
                {cuatroCupcakesProducts.length === 2 && (
                  <CupcakesToggleCard
                    groupProducts={cuatroCupcakesProducts}
                    onCotizar={handleCotizar}
                  />
                )}

                {/* Caja 6 cupcakes con toggle */}
                {seisCupcakesProducts.length === 2 && (
                  <CupcakesToggleCard
                    groupProducts={seisCupcakesProducts}
                    onCotizar={handleCotizar}
                  />
                )}

                {/* Resto de productos normales */}
                {filteredProducts
                  .filter(p => 
                    p.category !== 'papel-antigrasa' && 
                    !p.name.includes('Stickers') && 
                    !p.name.includes('Caja para Pizza') &&
                    p.name !== 'Porta Pizza' &&
                    !p.name.includes('Cupcakes')  // evita duplicar cupcakes
                  )
                  .map(product => (
                    <ProductCard key={product.id} product={product} onCotizar={handleCotizar} />
                  ))}
              </>
            ) : activeCategory === 'para-pizza' ? (
              <>
                {/* Pizza boxes select */}
                {pizzaBoxes.length > 0 && (
                  <PizzaBoxCard products={pizzaBoxes} onCotizar={handleCotizar} />
                )}

                {/* Porta Pizza normal */}
                {portaPizza && (
                  <ProductCard key={portaPizza.id} product={portaPizza} onCotizar={handleCotizar} />
                )}
              </>
            ) : activeCategory === 'dulces-bocaditos' ? (
              <>
                {/* Porta Cupcakes normal */}
                {portaCupcakes && (
                  <ProductCard key={portaCupcakes.id} product={portaCupcakes} onCotizar={handleCotizar} />
                )}

                {/* Caja 3 cupcakes con toggle */}
                {tresCupcakesProducts.length === 2 && (
                  <CupcakesToggleCard
                    groupProducts={tresCupcakesProducts}
                    onCotizar={handleCotizar}
                  />
                )}

                {/* Caja 4 cupcakes con toggle */}
                {cuatroCupcakesProducts.length === 2 && (
                  <CupcakesToggleCard
                    groupProducts={cuatroCupcakesProducts}
                    onCotizar={handleCotizar}
                  />
                )}

                {/* Caja 6 cupcakes con toggle */}
                {seisCupcakesProducts.length === 2 && (
                  <CupcakesToggleCard
                    groupProducts={seisCupcakesProducts}
                    onCotizar={handleCotizar}
                  />
                )}

                {/* Resto en dulces-bocaditos */}
                {filteredProducts
                  .filter(p => 
                    !p.name.includes('Cupcakes') &&
                    p.name !== 'Porta Cupcakes'
                  )
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
      </div>
    </section>
  )
}