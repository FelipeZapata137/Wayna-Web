import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, Menu, X } from 'lucide-react'
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
      ? 'bg-white/90 backdrop-blur-xl shadow-xl border-b border-gray-100' 
      : 'bg-white/80 shadow-md'
    }
  `

  const linkClasses = (path) => `
    relative text-lg font-medium transition-all duration-300
    ${location.pathname === path 
      ? 'text-wayna-green font-bold' 
      : 'text-gray-700 hover:text-wayna-green'
    }
    after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 
    after:bg-wayna-green after:transition-all after:duration-300
    ${location.pathname === path ? 'after:w-full' : 'hover:after:w-full'}
  `

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105"
        >
          <div className="w-10 h-10 bg-wayna-green rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:shadow-xl transition-shadow">
            W
          </div>
          <span className="text-2xl font-black text-gray-900 group-hover:text-wayna-green transition-colors">
            WAYNA
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-12">
          <Link to="/" className={linkClasses('/')}>Inicio</Link>
          <Link to="/tienda" className={linkClasses('/tienda')}>Catálogo</Link>
          <Link to="/contacto" className={linkClasses('/contacto')}>Contacto</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            to="/tienda" 
            className="p-3 hover:bg-gray-100 rounded-full transition transform hover:scale-110"
          >
            <ShoppingCart size={26} className="text-gray-700 hover:text-wayna-green transition-colors" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 hover:bg-gray-100 rounded-full transition"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={closeMobileMenu}
        >
          <div 
            className="bg-white h-full w-4/5 max-w-xs ml-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 flex justify-between items-center border-b">
              <span className="text-2xl font-black text-wayna-green">WAYNA</span>
              <button onClick={closeMobileMenu}>
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col py-10 px-8 gap-8 text-xl font-medium">
              <Link 
                to="/" 
                onClick={closeMobileMenu} 
                className={linkClasses('/')}
              >
                Inicio
              </Link>
              <Link 
                to="/tienda" 
                onClick={closeMobileMenu} 
                className={linkClasses('/tienda')}
              >
                Catálogo
              </Link>
              <Link 
                to="/contacto" 
                onClick={closeMobileMenu} 
                className={linkClasses('/contacto')}
              >
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}