import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Search, Filter, MapPin, Star, ChevronDown } from 'lucide-react'
import { SERVICE_CATEGORIES, PRICE_RANGE, RATINGS, APP_CONFIG } from '../../constants'

const ServiceFilters = ({ filters, setFilters, resetFilters }) => {
  const handlePriceChange = (e, index) => {
    const value = parseInt(e.target.value)
    if (index === 0) {
      setFilters({ ...filters, priceRange: [value, filters.priceRange[1]] })
    } else {
      setFilters({ ...filters, priceRange: [filters.priceRange[0], value] })
    }
  }

  const handleCategoryToggle = (category) => {
    if (category === 'All Categories') {
      setFilters({ ...filters, categories: [] })
    } else {
      setFilters(prev => ({
        ...prev,
        categories: prev.categories.includes(category)
          ? prev.categories.filter(c => c !== category)
          : [...prev.categories, category]
      }))
    }
  }

  return (
    <aside className="w-full lg:w-72 flex-shrink-0">
      <Card className="shadow-none border-none border-gray-200 rounded-2xl bg-white">
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="font-semibold text-base flex items-center gap-2 text-gray-900">
              <Filter className="h-5 w-5 text-gray-700" />
              Filters
            </h3>
            <button
              type="button"
              onClick={resetFilters}
              className="text-xs font-medium text-gray-600 cursor-pointer"
            >
              Reset Filter
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Search By Keyword</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <Input
                  placeholder="What are you looking for?"
                  value={filters.keyword}
                  onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
                  className="pl-9 h-10 border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3 flex items-center justify-between cursor-pointer text-gray-700">
                <span>Categories</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </label>
              <div className="space-y-2.5 text-sm max-h-64 overflow-y-auto pr-2">
                <label className="flex items-center gap-2.5 cursor-pointer py-1 hover:bg-gray-50 rounded px-1 -mx-1">
                  <input
                    type="checkbox"
                    checked={filters.categories.length === 0}
                    onChange={() => handleCategoryToggle('All Categories')}
                    className="h-4 w-4 text-pink-600 accent-[#B56584] border-gray-300 rounded focus:ring-pink-500 cursor-pointer"
                  />
                  <span className="text-gray-700 text-sm">All Categories</span>
                </label>
                {SERVICE_CATEGORIES.filter(
                  (cat) => cat !== 'All Categories',
                ).map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-2.5 cursor-pointer py-1 hover:bg-gray-50 rounded px-1 -mx-1"
                  >
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(cat)}
                      onChange={() => handleCategoryToggle(cat)}
                      className="h-4 w-4 text-pink-600 accent-[#B56584] border-gray-300 rounded focus:ring-pink-500 cursor-pointer"
                    />
                    <span className="text-gray-700 text-sm">{cat}</span>
                  </label>
                ))}
                <button className="text-xs text-[#B56584] hover:underline mt-2 block font-medium">
                  View More
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <Input
                  placeholder="Select Location"
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  className="pl-9 h-10 border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3 text-gray-700">Price Range</label>
              <div className="relative">
                <input
                  type="range"
                  min={PRICE_RANGE.MIN}
                  max={999}
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  className="w-full border-none accent-[#B56584] h-2 cursor-pointer"
                />
              </div>
              <div className="flex justify-between items-center text-sm mt-3">
                <span className="text-gray-600">{APP_CONFIG.CURRENCY}{String(filters.priceRange[0]).padStart(2, '0')}</span>
                <span className="text-[#B56584] font-semibold">{APP_CONFIG.CURRENCY}{filters.priceRange[1]}</span>
                <span className="text-gray-600">{APP_CONFIG.CURRENCY}999</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Price: {APP_CONFIG.CURRENCY}05 - {APP_CONFIG.CURRENCY}2000</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3 flex items-center justify-between text-gray-700">
                <span>Ratings</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </label>
              <div className="space-y-2 text-sm">
                {RATINGS.map((rating) => {
                  const filledStars = rating
                  const emptyStars = 5 - rating
                  const count = [55, 48, 13, 5, 0][rating - 1]
                  return (
                    <label
                      key={rating}
                      className="flex items-center gap-2.5 cursor-pointer py-1 hover:bg-gray-50 rounded px-1 -mx-1"
                    >
                      <input
                        type="checkbox"
                        name="rating"
                        checked={filters.rating === rating}
                        onChange={() => setFilters({ ...filters, rating })}
                        className="h-4 w-4 text-pink-600 accent-[#B56584] border-gray-300 rounded focus:ring-pink-500 cursor-pointer"
                      />
                      <div className="flex items-center gap-1">
                        {Array(filledStars).fill(0).map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                        ))}
                        {Array(emptyStars).fill(0).map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 text-gray-300" />
                        ))}
                        <span className="ml-1 text-gray-700">({count})</span>
                      </div>
                    </label>
                  )
                })}
              </div>
            </div>

            <Button variant="primary" className="w-full bg-black">
              <Search className="h-4 w-4 mr-2 inline" />
              Search
            </Button>
          </div>
        </div>
      </Card>
    </aside>
  )
}

export default ServiceFilters

