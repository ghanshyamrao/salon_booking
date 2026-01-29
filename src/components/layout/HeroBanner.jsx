import { Link } from 'react-router-dom'
import heroBanner from '../../assets/Background.png'
import { ChevronRight, HomeIcon } from 'lucide-react'
import { ROUTES } from '@/constants'

const HeroBanner = ({ title, breadcrumbs = [] }) => {
  return (
    <div className="relative h-[240px] overflow-hidden">
      <img
        src={heroBanner}
        alt="Banner"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-center">{title}</h1>
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center text-xs sm:text-sm flex-wrap justify-center gap-1">
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center">
                {index > 0 && <span className=""> <ChevronRight className="h-5 w-5" /></span>}
                {crumb.href && index < breadcrumbs.length - 1 ? crumb.href === ROUTES.HOME ? (
                  <Link to={crumb.href} className="hover:text-pink-400 transition">
                   <HomeIcon className="h-4 w-4" />
                  </Link>
                ) : (
                  <Link to={crumb.href} className="hover:text-pink-400 transition">
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </div>
  )
}

export default HeroBanner

