import { Card } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

const ServiceCardSkeleton = () => {
  return (
    <Card className="overflow-hidden  hover:shadow-md shadow-none transition-all duration-200 rounded-lg border border-gray-200 bg-white">
      <div className="relative h-[200px] overflow-hidden bg-gray-100">
        <Skeleton className="w-full h-full" />
        <Skeleton className="absolute top-3 left-3 h-6 w-20 rounded-md" />
        <Skeleton className="absolute top-3 right-3 h-8 w-8 rounded-full" />
        <Skeleton className="absolute bottom-3 right-3 h-8 w-8 rounded-full" />
      </div>
      <div className="p-5">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <div className="flex items-center justify-between mb-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-4 w-12" />
        </div>
        <div className="flex items-center justify-between mb-2">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-8 w-full max-w-[120px] rounded-lg" />
        </div>
      </div>
    </Card>
  )
}

export default ServiceCardSkeleton

