import { useState } from 'react'

const ORANGE_COLOR = "#F58220"

export default function PizzaBoxCard({ products, onCotizar }) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const product = products[selectedIndex]

  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-gray-900">Cajas para Pizza</h3>

        <select
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(Number(e.target.value))}
          className="w-full px-4 py-2 mb-4 text-lg font-medium text-gray-900 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-wayna-green focus:border-wayna-green transition-all duration-300 cursor-pointer hover:shadow-md"
        >
          {products.map((p, idx) => (
            <option key={p.id} value={idx}>
              {p.dimensions.split(' ')[0]} cm - ${p.price.toFixed(2)} / u
            </option>
          ))}
        </select>

        <p className="text-lg font-black mb-4" style={{ color: ORANGE_COLOR }}>
          {product.dimensions}
        </p>

        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
          {product.desc}
        </p>

        <div className="flex items-center justify-center mb-6">
          <span className="text-3xl font-black text-wayna-green">
            ${product.price.toFixed(2)} / u
          </span>
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={() => onCotizar(product)}
            className="bg-wayna-green text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#F58220] transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Cotizar
          </button>
        </div>
      </div>
    </div>
  )
}