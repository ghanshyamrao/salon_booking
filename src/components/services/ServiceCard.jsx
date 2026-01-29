import { Link } from 'react-router-dom'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Heart, MapPin, Star } from 'lucide-react'
import { ROUTES, APP_CONFIG } from '../../constants'
import servicePlaceholder from '../../assets/Service Image.png'
import userImage from '../../assets/userimage.png'
import { useState } from 'react'

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false)
  const formatPrice = (price) => {
    return price.toLocaleString('en-IN')
  }

  return (
    <Card  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="overflow-hidden hover:shadow-md hover:border-[#B56584] shadow-none transition-all duration-200 rounded-lg border border-gray-200 bg-white">
      <div className="relative h-[200px] overflow-hidden bg-gray-100">
        <img
          src={service.image || servicePlaceholder}
          alt={service.name}
          className="w-full h-full object-cover"
        />
        <Badge variant="primary" className="absolute hover:bg-white bg-white text-gray-900 top-3 left-3 text-[11px] font-medium px-2.5 py-1 rounded-md shadow-sm">
          {service.category}
        </Badge>
        <button className="absolute top-3 right-3 p-1.5 bg-white/95 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-sm hover:shadow-md">
          <Heart className="h-4 w-4 text-gray-600 hover:text-pink-600 transition-colors" />
        </button>
        <div className="absolute bottom-3 right-3">
          <div className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:shadow-md transition-shadow overflow-hidden">
            <img
              src={userImage}
              alt='user image'
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 text-gray-900 leading-tight">{service.name}</h3>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-1.5 flex-shrink-0 text-gray-500" />
            <span className="text-gray-600">{service.location}</span>
          </div>
          <div className="flex items-center mb-4">
            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
            <span className="text-sm text-gray-700">{service.rating}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-semibold text-black">
              {APP_CONFIG.CURRENCY}
              {formatPrice(service.price)}
            </span>
            <span className="text-sm text-gray-500 line-through">
              {APP_CONFIG.CURRENCY}
              {formatPrice(service.originalPrice)}
            </span>
          </div>
          <Link to={`${ROUTES.BOOKING}?serviceId=${service.id}`}>
            <Button  className={`w-full ${isHovered ? 'bg-[#B56584] text-white' : 'bg-gray-200 text-gray-700'} h-8 text-sm font-medium rounded-lg`}>
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}

export default ServiceCard

