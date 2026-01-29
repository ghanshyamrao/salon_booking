import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroBanner from '../components/layout/HeroBanner'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'
import { ROUTES, APP_CONFIG, API_ENDPOINTS } from '../constants'
import { useAuth } from '../context/AuthContext'
import { Calendar, Clock, User, Mail, Phone, MapPin, Star, Heart, Facebook, Instagram, Twitter, Youtube, Linkedin, MessageCircle } from 'lucide-react'
import { format } from 'date-fns'
import { getMockSalonAsync } from '../mock'
import { Skeleton } from '../components/ui/skeleton'
import { toast } from 'sonner'

const Booking = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { user, isAuthenticated } = useAuth()
  const serviceId = searchParams.get('serviceId')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    chooseWhom: '',
    chooseStylist: '',
    gender: '',
    servicesType: '',
    serviceCategory: '',
    date: '',
    time: '',
    message: '',
  });

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [serviceLoading, setServiceLoading] = useState(true)
  const [service, setService] = useState(null)

  useEffect(() => {
    const loadService = async () => {
      setServiceLoading(true)
      try {
        const serviceData = await getMockSalonAsync(serviceId)
        setService(serviceData)
      } catch (error) {
        console.error('Error loading service:', error)
      } finally {
        setServiceLoading(false)
      }
    }
    loadService()
  }, [serviceId])

  const formatPrice = (price) => {
    return price.toLocaleString('en-IN');
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      setFormData(prev => ({
        ...prev,
        email: user.email || '',
        firstName: user.firstName || '',
        lastName: user.lastName || '',
      }))
    }
  }, [isAuthenticated, user])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  };

  const socialIcons = [
    { icon: Facebook, href: '#', color: 'bg-[#1877F2]' },
    { icon: Instagram, href: '#', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
    { icon: Twitter, href: '#', color: 'bg-black' },
    { icon: MessageCircle, href: '#', color: 'bg-[#25D366]' },
    { icon: Youtube, href: '#', color: 'bg-[#FF0000]' },
    { icon: Linkedin, href: '#', color: 'bg-[#0077B5]' },
  ];

  const validate = () => {
    const newErrors = {}
    if (!formData.firstName) newErrors.firstName = 'First name is required'
    if (!formData.lastName) newErrors.lastName = 'Last name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.phone) newErrors.phone = 'Phone is required'
    if (!formData.date) newErrors.date = 'Date is required'
    if (!formData.time) newErrors.time = 'Time is required'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))

      const bookingData = {
        userId: user?.id || '123',
        serviceId: serviceId || '1',
        ...formData,
        total: service?.price || 1499,
        status: 'confirmed',
      }

      const existing = localStorage.getItem('bookings')
      const parsed = existing ? JSON.parse(existing) : []
      const updated = [...parsed, { ...bookingData, id: Date.now().toString() }]
      localStorage.setItem('bookings', JSON.stringify(updated))
      
      toast.success('Your booking Request successfully created', {
        description: `Booking ID: ${bookingData.id}`,
        duration: 3000,
      })
      
      setTimeout(() => {
        navigate(ROUTES.BOOKINGS)
      }, 1500)
    } catch (error) {
      toast.error('Booking failed', {
        description: 'Please try again.',
        duration: 3000,
      })
      console.error('Booking error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <HeroBanner
        title="Booking"
        breadcrumbs={[
          { label: 'Home', href: ROUTES.HOME },
          { label: 'Services', href: ROUTES.SERVICES },
          { label: 'Booking', href: ROUTES.BOOKING }
        ]}
      />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8 border border-gray-200">
          <div className="p-6">
            {serviceLoading ? (
              <div className="flex flex-col md:flex-row gap-6">
                <Skeleton className="w-32 h-32 rounded-lg flex-shrink-0" />
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-6 w-12" />
                  </div>
                  <Skeleton className="h-4 w-3/4" />
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-10 w-32" />
                    <Skeleton className="h-5 w-40" />
                  </div>
                </div>
              </div>
            ) : service ? (
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=200"
                  alt={service.name}
                  className="w-28 h-28 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex flex-col lg:flex-row w-full">
                  <div className="w-auto min-w-[400px] mb-4 lg:mb-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="font-semibold text-base">{service.rating}</span>
                      <span className="text-gray-500 text-sm">({service.reviews} reviews)</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">{service.name}</h2>

                    <p className="text-gray-600 mb-3 text-sm">We connect top talents with top companies.</p>

                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-600 flex-wrap">
                      <span className="font-medium">{service.industry}</span>
                      <span className="text-gray-400">•</span>
                      <span>Member Since {service.memberSince}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-2 text-sm mb-4">
                    <div>
                      <p className="text-gray-700 mb-1.5 flex flex-col">
                        <span className="font-semibold">Email:</span> {service.email}
                      </p>
                      <p className="text-gray-700 flex flex-col">
                        <span className="font-semibold">Phone Number:</span> {service.phone}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700 flex flex-col mb-1.5">
                        <span className="font-semibold">Language Known:</span> {service.languages.join(', ')} +4 More
                      </p>
                      <p className="text-gray-700 flex flex-col">
                        <span className="font-semibold">Address:</span> {service.location}
                      </p>
                    </div>
                    <div>
                      <Button variant="primary" size="sm" className="w-full mb-2 bg-[#B56584] hover:bg-[#B56584]">View Salon</Button>
                      <p className="text-gray-700 flex flex-col">
                        <span className="font-semibold">Social Profiles:</span> <div className="flex items-center gap-2 mt-2">
                          {socialIcons.map((social, index) => (
                            <a
                              key={index}
                              href={social.href}
                              className={`w-6 h-6 rounded-full ${social.color} flex items-center justify-center text-white hover:opacity-80 transition`}
                            >
                              <social.icon className="h-3.5 w-3.5" />
                            </a>
                          ))}
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </Card>


        <h2 className="text-2xl font-bold mb-4 text-gray-900">Book an Appointment</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.
        </p>

        <Card className="border border-gray-400">
          <div className="p-4 sm:p-8 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">First Name</Label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter First Name"
                    className={`h-10 border-none bg-gray-200 ${errors.firstName ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  />
                  {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Last Name</Label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter Last Name"
                    className={`h-10 border-none bg-gray-200 ${errors.lastName ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  />
                  {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your Email"
                      className={`pl-9 h-10 border-none bg-gray-200 ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    />
                  </div>
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Phone Number"
                      className={`pl-9 h-10 border-none bg-gray-200 ${errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    />
                  </div>
                  {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Choose Whom</Label>
                <Select value={formData.chooseWhom} onValueChange={(v) => setFormData((p) => ({ ...p, chooseWhom: v }))}>
                  <SelectTrigger className="h-10 border-none bg-gray-200">
                    <SelectValue placeholder="Select gender" className="text-gray-400" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Choose Stylist</Label>
                  <Select value={formData.chooseStylist} onValueChange={(v) => setFormData((p) => ({ ...p, chooseStylist: v }))}>
                    <SelectTrigger className="h-10 border-none bg-gray-200">
                      <SelectValue placeholder="Select Stylist" className="text-gray-400" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="stylist1">Stylist 1</SelectItem>
                      <SelectItem value="stylist2">Stylist 2</SelectItem>
                      <SelectItem value="stylist3">Stylist 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Gender</Label>
                  <Select value={formData.gender} onValueChange={(v) => setFormData((p) => ({ ...p, gender: v }))}>
                    <SelectTrigger className="h-10 border-none bg-gray-200">
                      <SelectValue placeholder="Select Gender" className="text-gray-400" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Services Type</Label>
                  <Select value={formData.servicesType} onValueChange={(v) => setFormData((p) => ({ ...p, servicesType: v }))}>
                    <SelectTrigger className="h-10 border-none bg-gray-200">
                      <SelectValue placeholder="Select Services" className="text-gray-400" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="haircut">Hair Cut</SelectItem>
                      <SelectItem value="hairspa">Hair Spa</SelectItem>
                      <SelectItem value="haircolor">Hair Color</SelectItem>
                      <SelectItem value="makeup">Makeup</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Service Category</Label>
                  <Select value={formData.serviceCategory} onValueChange={(v) => setFormData((p) => ({ ...p, serviceCategory: v }))}>
                    <SelectTrigger className="h-10 border-none bg-gray-200">
                      <SelectValue placeholder="Select Category" className="text-gray-400" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="haircut">Hair Cut</SelectItem>
                      <SelectItem value="hairspa">Hair Spa</SelectItem>
                      <SelectItem value="haircolor">Hair Color</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Select Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <Input
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={format(new Date(), 'yyyy-MM-dd')}
                      className={`pl-9 h-10 border-none bg-gray-200 ${errors.date ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    />
                  </div>
                  {errors.date && <p className="text-sm text-red-500">{errors.date}</p>}
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <Input
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`pl-9 h-10 border-none bg-gray-200 ${errors.time ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    />
                  </div>
                  {errors.time && <p className="text-sm text-red-500">{errors.time}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Message</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your Message here.."
                  rows={4}
                  className="resize-none border-none bg-gray-200"
                />
              </div>

              {service && (
                <div className="bg-gray-50 rounded-lg border-none border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-700">Total</span>
                      <div className="flex items-center gap-2">
                        <div className="text-2xl font-bold ">
                          {APP_CONFIG.CURRENCY}{formatPrice(service.price)}
                        </div>
                        <div className="text-sm text-gray-500 line-through mt-1">
                          {APP_CONFIG.CURRENCY}{formatPrice(service.originalPrice)}
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex items-center gap-3">
                      <Badge variant="success" className="bg-green-500 text-white">
                        {service.discount}% OFF
                      </Badge>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 accent-[#B56584] border-gray-300 rounded  cursor-pointer"
                />
                <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                  I agree with{' '}
                  <a href="#" className="underline">Terms of Use</a>
                  {' '}and{' '}
                  <a href="#" className="underline">Privacy Policy</a>
                </label>
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={loading}
                  className="bg-[#B56584] hover:bg-[#B56584] text-white px-8"
                >
                  {loading ? 'Booking...' : 'Book Now'}
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

export default Booking

