export const getMockSalon = (serviceId) => {
  return {
    id: serviceId || 1,
    name: 'Glamora Hair Studio',
    rating: 4.9,
    reviews: 255,
    location: 'Texas, USA',
    email: 'Glamxxxxxx@example.com',
    phone: '+1 888 8XX XXXX',
    languages: ['English', 'Arabic', 'French'],
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    industry: 'Salon Industry',
    memberSince: '19 Aug 2023',
  }
}

export const getMockSalonAsync = (serviceId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getMockSalon(serviceId))
    }, 800)
  })
}

