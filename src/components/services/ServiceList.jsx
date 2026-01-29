import { Link } from 'react-router-dom'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Heart, MapPin, Star } from 'lucide-react'
import { ROUTES, APP_CONFIG } from '../../constants'
import servicePlaceholder from '../../assets/Service Image.png'
import userImage from '../../assets/userimage.png'

const ServiceList = ({ services }) => {
  const formatPrice = (price) => {
    return price.toLocaleString('en-IN')
  }

      return (
        <div className="space-y-4">
          {services.map((service) => (
            <Card
              key={service.id}
              className="flex flex-col w-full md:flex-row overflow-hidden hover:shadow-lg shadow-none transition-shadow rounded-lg border-gray-200 hover:border-[#B56584]"
            >
          <div className="relative md:w-56 flex-shrink-0">
            <img
              src={service.image || servicePlaceholder}
              alt={service.name}
              className="w-full h-40 md:h-full object-cover"
            />
            <Badge variant="primary" className="absolute hover:bg-white bg-white text-gray-900 font-sm top-2 left-2">
              {service.category}
            </Badge>
            <button className="absolute top-2 right-2 p-2 bg-white rounded-full hover:bg-pink-100 transition shadow-sm">
              <Heart className="h-4 w-4 text-gray-600" />
            </button>
            <div className="absolute bottom-2 right-2">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
                <img
                  src={userImage}
                  alt='user image'
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-semibold text-lg mb-1">{service.name}</h3>
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <MapPin className="h-4 w-4 mr-1" />
                {service.location}
              </div>
              <div className="flex items-center mb-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                <span className="text-sm font-medium">{service.rating}</span>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <div>
                <span className="text-xl text-gray-900 font-semibold">
                  {APP_CONFIG.CURRENCY}
                  {formatPrice(service.price)}
                </span>
                <span className="text-sm text-gray-500 line-through ml-2">
                  {APP_CONFIG.CURRENCY}
                  {formatPrice(service.originalPrice)}
                </span>
              </div>
              <Link to={`${ROUTES.BOOKING}?serviceId=${service.id}`}>
                <Button variant="primary" className="h-8">Book Now</Button>
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default ServiceList

