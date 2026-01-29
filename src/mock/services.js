import servicePlaceholder from './../assets/Service Image.png'

export const mockServices = [
  { id: 1, name: 'Glow & Glam Studio', category: 'Hair Color', location: 'Maryland City, MD, USA', rating: 4.9, price: 499, originalPrice: 699, image: servicePlaceholder },
  { id: 2, name: 'The Velvet Touch', category: 'Hair Spa', location: 'New Jersey, USA', rating: 4.7, price: 569, originalPrice: 699, image: servicePlaceholder },
  { id: 3, name: 'Aura Luxe Salon', category: 'Hair Cut', location: 'California, USA', rating: 4.5, price: 399, originalPrice: 699, image: servicePlaceholder },
  { id: 4, name: 'Opal Beauty Lounge', category: 'Makeup', location: 'Texas, USA', rating: 4.8, price: 749, originalPrice: 999, image: servicePlaceholder },
  { id: 5, name: 'The Glam Society', category: 'Nails', location: 'Texas, USA', rating: 4.2, price: 459, originalPrice: 699, image: servicePlaceholder },
  { id: 6, name: 'Crown & Curl', category: 'Hair Cut', location: 'Texas, USA', rating: 4.9, price: 699, originalPrice: 899, image: servicePlaceholder },
  { id: 7, name: 'Elan Beauty Bar', category: 'Hair Color', location: 'Alabama, USA', rating: 4.6, price: 599, originalPrice: 799, image: servicePlaceholder },
  { id: 8, name: 'The Polished Room', category: 'Hair Spa', location: 'Washington DC, USA', rating: 4.8, price: 649, originalPrice: 899, image: servicePlaceholder },
  { id: 9, name: 'Noir Luxury Salon', category: 'Hair Cut', location: 'Montana, USA', rating: 4.4, price: 449, originalPrice: 699, image: servicePlaceholder },
  { id: 10, name: 'Blush & Gold Studio', category: 'Makeup', location: 'Virginia, USA', rating: 4.7, price: 799, originalPrice: 1099, image: servicePlaceholder },
  { id: 11, name: 'Allure Unisex Studio', category: 'Nails', location: 'Texas, USA', rating: 4.3, price: 479, originalPrice: 699, image: servicePlaceholder },
  { id: 12, name: 'Urban Blend', category: 'Hair Cut', location: 'Alabama, USA', rating: 4.0, price: 299, originalPrice: 600, image: servicePlaceholder },
  { id: 13, name: 'Élan Beauty Bar', category: 'Hair Color', location: 'New Jersey, USA', rating: 4.6, price: 499, originalPrice: 600, image: servicePlaceholder },
  { id: 14, name: 'The Polished Room', category: 'Hair Spa', location: 'Alabama, USA', rating: 4.5, price: 569, originalPrice: 600, image: servicePlaceholder },
  { id: 15, name: 'Noir Luxury Salon', category: 'Hair Cut', location: 'Washington DC, USA', rating: 4.2, price: 399, originalPrice: 699, image: servicePlaceholder },
  { id: 16, name: 'Blush & Gold Studio', category: 'Makeup', location: 'Montana, USA', rating: 4.0, price: 399, originalPrice: 600, image: servicePlaceholder },
  { id: 17, name: 'Allure Unisex Studio', category: 'Nails', location: 'Virginia, USA', rating: 4.3, price: 419, originalPrice: 600, image: servicePlaceholder },
  { id: 18, name: 'Royal Hair Studio', category: 'Royal Hair Cut', location: 'New York, USA', rating: 4.8, price: 899, originalPrice: 1299, image: servicePlaceholder },
  { id: 19, name: 'Elegant Wash Salon', category: 'Elegant Hair Wash', location: 'Florida, USA', rating: 4.7, price: 549, originalPrice: 799, image: servicePlaceholder },
  { id: 20, name: 'Root Touch Salon', category: 'Root Touch up', location: 'Illinois, USA', rating: 4.5, price: 449, originalPrice: 699, image: servicePlaceholder },
  { id: 21, name: 'Kids Cut Studio', category: 'Kids Cut', location: 'Colorado, USA', rating: 4.6, price: 349, originalPrice: 599, image: servicePlaceholder },
  { id: 22, name: 'Luxe Hair Studio', category: 'Hair Cut and Blow Dry', location: 'Arizona, USA', rating: 4.4, price: 429, originalPrice: 649, image: servicePlaceholder },
  { id: 23, name: 'Glamour Makeup', category: 'Makeup', location: 'Nevada, USA', rating: 4.9, price: 849, originalPrice: 1199, image: servicePlaceholder },
  { id: 24, name: 'Perfect Nails', category: 'Nails', location: 'Oregon, USA', rating: 4.3, price: 389, originalPrice: 599, image: servicePlaceholder },
]

export const getMockServices = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockServices)
    }, 1000) 
  })
}

