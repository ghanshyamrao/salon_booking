import ServiceCard from './ServiceCard'
import ServiceCardSkeleton from './ServiceCardSkeleton'

const ServiceGrid = ({ services, loading, itemsPerPage }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: itemsPerPage }).map((_, index) => (
          <ServiceCardSkeleton key={index} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}

export default ServiceGrid

