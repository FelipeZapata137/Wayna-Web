// src/components/shop/PackageToggleCard.jsx
import { useState } from 'react'

const ORANGE_COLOR = "#F58220"

export default function PackageToggleCard({ groupProducts, onCotizar }) {
  const [is12Units, setIs12Units] = useState(true) // Por defecto: 12 unidades (primero)

  const with12 = groupProducts.find(p => p.variant === "12u")
  const with25 = groupProducts.find(p => p.variant === "25u")

  const currentProduct = is12Units ? with12 : with25

  if (!currentProduct) return null

  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group relative"
    >
      {/* Toggle con orden 12 u primero */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full shadow-md px-4 py-1 flex items-center gap-3 text-xs font-medium border border-gray-200 whitespace-nowrap">
        <button
          onClick={() => setIs12Units(true)}
          className={`transition-colors px-3 py-0.5 rounded-full ${
            is12Units 
              ? 'bg-wayna-green text-white shadow-sm' 
              : 'text-gray-600 hover:text-wayna-green hover:bg-gray-100'
          }`}
        >
          12 u
        </button>
        <span className="text-gray-400">|</span>
        <button
          onClick={() => setIs12Units(false)}
          className={`transition-colors px-3 py-0.5 rounded-full ${
            !is12Units 
              ? 'bg-wayna-green text-white shadow-sm' 
              : 'text-gray-600 hover:text-wayna-green hover:bg-gray-100'
          }`}
        >
          25 u
        </button>
      </div>

      {/* Resto del componente igual (imagen, título, desc, precio, botón Cotizar) */}
      <div className="relative h-64 overflow-hidden bg-gray-50">
        <img
          src={currentProduct.image}
          alt={currentProduct.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-gray-900">{currentProduct.name}</h3>
        <p className="text-lg font-black mb-4" style={{ color: ORANGE_COLOR }}>
          {currentProduct.dimensions}
        </p>
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
          {currentProduct.desc}
        </p>
        <div className="flex items-center justify-center mb-6">
          <span className="text-3xl font-black text-wayna-green">
            ${currentProduct.price.toFixed(2)} / {currentProduct.units} u
          </span>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() => onCotizar(currentProduct)}
            className="bg-wayna-green text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#F58220] transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Cotizar
          </button>
        </div>
      </div>
    </div>
  )
}