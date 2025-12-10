import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, Menu } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-500
    ${scrolled 
      ? 'bg-white/40 backdrop-blur-xl shadow-xl' 
      : 'bg-white/80 shadow-md'
    }
  `

  const linkClasses = (path) =>
    location.pathname === path
      ? 'text-wayna-green font-bold'
      : 'text-gray-700 hover:text-wayna-green transition'

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-wayna-green rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">
            W
          </div>
          <span className="text-2xl font-black text-gray-900">WAYNA</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-12 text-lg font-medium">
          <Link to="/" className={linkClasses('/')}>Inicio</Link>
          <Link to="/tienda" className={linkClasses('/tienda')}>Catálogo</Link>
          <Link to="/contacto" className={linkClasses('/contacto')}>Contacto</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/tienda" className="p-3 hover:bg-gray-100 rounded-full transition inline-block">
          <ShoppingCart size={26} className="text-gray-700" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 hover:bg-gray-100 rounded-full transition"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl shadow-2xl border-t">
          <nav className="flex flex-col py-6 px-8 gap-6 text-xl font-medium">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className={linkClasses('/')}>
              Inicio
            </Link>
            <Link to="/tienda" onClick={() => setMobileMenuOpen(false)} className={linkClasses('/tienda')}>
              Catálogo
            </Link>
            <Link to="/contacto" onClick={() => setMobileMenuOpen(false)} className={linkClasses('/contacto')}>
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}