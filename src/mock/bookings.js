import { BOOKING_STATUS } from '../constants'

export const mockBookings = [
  {
    id: 'R123',
    serviceName: 'Hair Cut',
    salonName: 'Glow & Glam Studio',
    date: 'Tue 30 Sep',
    time: '7:30 PM',
    total: 459,
    status: BOOKING_STATUS.COMPLETED,
  },
  {
    id: 'R124',
    serviceName: 'Hair Cut',
    salonName: 'The Velvet Touch',
    date: 'Tue 30 Sep',
    time: '7:30 PM',
    total: 459,
    status: BOOKING_STATUS.COMPLETED,
  },
  {
    id: 'R125',
    serviceName: 'Hair Cut',
    salonName: 'Aura Luxe Salon',
    date: 'Tue 30 Sep',
    time: '7:30 PM',
    total: 459,
    status: BOOKING_STATUS.CANCELLED,
  },
  {
    id: 'R126',
    serviceName: 'Hair Spa',
    salonName: 'Opal Beauty Lounge',
    date: 'Tue 30 Sep',
    time: '7:30 PM',
    total: 459,
    status: BOOKING_STATUS.CANCELLED,
  },
  {
    id: 'R127',
    serviceName: 'Hair Color',
    salonName: 'The Glam Society',
    date: 'Wed 1 Oct',
    time: '2:00 PM',
    total: 699,
    status: BOOKING_STATUS.PENDING,
  },
  {
    id: 'R128',
    serviceName: 'Makeup',
    salonName: 'Crown & Curl',
    date: 'Wed 1 Oct',
    time: '4:00 PM',
    total: 749,
    status: BOOKING_STATUS.PENDING,
  },
  {
    id: 'R129',
    serviceName: 'Hair Cut',
    salonName: 'Elan Beauty Bar',
    date: 'Thu 2 Oct',
    time: '10:00 AM',
    total: 399,
    status: BOOKING_STATUS.CONFIRMED,
  },
]

export const getMockBookings = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockBookings)
    }, 600) 
  })
}

