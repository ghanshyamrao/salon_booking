import { useState, useEffect } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroBanner from '../components/layout/HeroBanner'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'
import { ROUTES, PRICE_RANGE } from '../constants'
import { fetchServices } from '../services/servicesApi'
import { getMockServices } from '../mock'
import ServiceFilters from '../components/services/ServiceFilters'
import ServiceGrid from '../components/services/ServiceGrid'
import ServiceList from '../components/services/ServiceList'
import ViewModeToggle from '../components/services/ViewModeToggle'
import Pagination from '../components/services/Pagination'

const Services = () => {
  const [services, setServices] = useState([])
  const [filteredServices, setFilteredServices] = useState([])
  const INITIAL_FILTERS = {
    keyword: '',
    categories: [],
    subCategory: '',
    location: '',
    priceRange: [PRICE_RANGE.MIN, 999],
    rating: null,
  }
  const [filters, setFilters] = useState(INITIAL_FILTERS)
  const [sortBy, setSortBy] = useState('lowToHigh')
  const [viewMode, setViewMode] = useState('grid')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  useEffect(() => {
    const loadServices = async () => {
      setLoading(true)
      setError('')
      const mockData = await getMockServices()
      setServices(mockData)
      setFilteredServices(mockData)
      setLoading(false)
    }
    loadServices()
  }, [])

  useEffect(() => {
    let filtered = [...services];

    if (filters.keyword) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        service.category.toLowerCase().includes(filters.keyword.toLowerCase())
      );
    }

    if (filters.categories.length > 0) {
      filtered = filtered.filter(service => filters.categories.includes(service.category));
    }

    if (filters.location) {
      filtered = filtered.filter(service =>
        service.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    filtered = filtered.filter(service =>
      service.price >= filters.priceRange[0] && service.price <= filters.priceRange[1]
    );

    if (filters.rating) {
      filtered = filtered.filter(service => Math.floor(service.rating) >= filters.rating);
    }

    if (sortBy === 'lowToHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'highToLow') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredServices(filtered);
    setCurrentPage(1);
  }, [filters, sortBy, services]);

  const resetFilters = () => {
    setFilters(INITIAL_FILTERS)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <HeroBanner 
        title="Services" 
        breadcrumbs={[
          { label: 'Home', href: ROUTES.HOME },
          { label: 'Services', href: ROUTES.SERVICES }
        ]}
      />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-4 rounded-md bg-yellow-50 border border-yellow-200 px-4 py-2 text-xs text-yellow-800">
            {error}
          </div>
        )}
        <div className="flex flex-col lg:flex-row gap-8">
          <ServiceFilters 
            filters={filters} 
            setFilters={setFilters} 
            resetFilters={resetFilters} 
          />

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Found <span className="text-[#B56584]">{filteredServices.length} {filteredServices.length === 1 ? 'Service' : 'Services'}</span></h2>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-56 h-10 border-gray-300">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lowToHigh">Sort Price Low to High</SelectItem>
                    <SelectItem value="highToLow">Sort Price High to Low</SelectItem>
                  </SelectContent>
                </Select>
                <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
              </div>
            </div>

            {!loading && filteredServices.length === 0 ? (
              <div className="flex items-center justify-center h-[500px]">
                <p className="text-gray-500">No services found</p>
              </div>
            ) : (
              <>
              </>
            )}

            {(() => {
              const totalPages = Math.ceil(filteredServices.length / itemsPerPage)
              const startIndex = (currentPage - 1) * itemsPerPage
              const endIndex = startIndex + itemsPerPage
              const paginatedServices = filteredServices.slice(startIndex, endIndex)

              return (
                <>
                  {viewMode === 'grid' ? (
                    <ServiceGrid 
                      services={paginatedServices} 
                      loading={loading} 
                      itemsPerPage={itemsPerPage} 
                    />
                  ) : (
                    <ServiceList services={paginatedServices} />
                  )}
                  <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </>
              )
            })()}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Services