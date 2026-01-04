import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation()
  const scrollYRef = useRef(0)

  useEffect(() => {
    if (mobileMenuOpen) {
      scrollYRef.current = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollYRef.current}px`
      document.body.style.width = '100%'
      document.body.style.overscrollBehavior = 'none'
    } else {
      const currentScroll = scrollYRef.current

      window.scrollTo({ top: currentScroll, behavior: 'instant' })

      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overscrollBehavior = ''

      requestAnimationFrame(() => {
        window.scrollTo({ top: currentScroll, behavior: 'instant' })
      })
    }

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overscrollBehavior = ''
    }
  }, [mobileMenuOpen])

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
      ? 'bg-white/40 backdrop-blur-xl shadow-xl border-b border-gray-100' 
      : 'bg-white shadow-md'
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

  const handleMenuToggle = () => {
    if (mobileMenuOpen) {
      setIsAnimating(true)
      setShowMenu(false)
      setTimeout(() => {
        setMobileMenuOpen(false)
        setIsAnimating(false)
      }, 300)
    } else {
      setMobileMenuOpen(true)
      setIsAnimating(false)
      setTimeout(() => {
        setShowMenu(true)
      }, 10)
    }
  }

  const closeMobileMenu = () => {
    setIsAnimating(true)
    setShowMenu(false)
    setTimeout(() => {
      setMobileMenuOpen(false)
      setIsAnimating(false)
    }, 300)
  }

  return (
    <>
      <header className={`${headerClasses} ${mobileMenuOpen ? 'opacity-30 pointer-events-none' : ''}`}>
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
              onClick={handleMenuToggle}
              className="lg:hidden p-3 hover:bg-gray-100 rounded-full transition"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div 
          className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300
            ${showMenu ? 'opacity-100' : 'opacity-0'}
          `}
          onClick={closeMobileMenu}
        >
          <div 
            className={`bg-white h-full w-4/5 max-w-xs ml-auto shadow-2xl overflow-y-auto
              transition-transform duration-300 ease-out
              ${showMenu ? 'translate-x-0' : 'translate-x-full'}
            `}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pt-8 pb-6 px-8 border-b flex justify-between items-center">
              <span className="text-3xl font-black text-wayna-green">WAYNA</span>
              <button 
                onClick={closeMobileMenu} 
                className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:rotate-90"
                aria-label="Cerrar menú"
              >
                <X size={28} className="text-gray-700" />
              </button>
            </div>

            <nav className="flex flex-col py-10 px-8 gap-8 text-xl font-medium">
              {[
                { to: '/', label: 'Inicio' },
                { to: '/tienda', label: 'Catálogo' },
                { to: '/contacto', label: 'Contacto' }
              ].map((link, index) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMobileMenu}
                  className={`${linkClasses(link.to)} transform transition-all duration-300
                    ${showMenu 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-8 opacity-0'
                    }`}
                  style={{
                    transitionDelay: showMenu ? `${100 + index * 80}ms` : '0ms'
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}