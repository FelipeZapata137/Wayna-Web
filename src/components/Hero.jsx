import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section data-aos="fade-down" className="relative h-screen flex items-center justify-center overflow-hidden mt-16 lg:mt-0">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/White_WAYNA_Food_Boxes.png')" }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 data-aos="fade-up" data-aos-delay="200" className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
          Bienvenido a <span className="text-wayna-green">Wayna</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="400" className="text-xl md:text-3xl text-white mb-10 drop-shadow-lg">
          Cajas hechas a la medida de tus expectativas
        </p>

        <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/tienda"
            className="bg-wayna-green text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-green-600 transition shadow-xl inline-block text-center"
          >
            Ver Productos
          </Link>

          <a
            href="https://wa.me/593979116621?text=%C2%A1Hola%20Wayna!%20Vengo%20desde%20la%20web%20y%20quiero%20hacer%20un%20pedido%20o%20cotizaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-12 py-5 rounded-full text-lg font-bold hover:border-[#F58220] hover:bg-[#F58220] hover:text-white transition inline-block text-center"
          >
           Contáctanos
          </a>


        </div>
      </div>
    </section>
  )
}