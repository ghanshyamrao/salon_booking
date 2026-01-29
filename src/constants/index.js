export const API_URL = '/services.json'

export const API_ENDPOINTS = {
  BOOKINGS: '/api/bookings',
  SERVICES: '/api/services',
  USERS: '/api/users',
  AUTH: '/api/auth',
};

export const ROLES = {
  CUSTOMER: 'customer',
  PROVIDER: 'provider',
  ADMIN: 'admin',
};

export const BOOKING_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
};

export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  BOOKING: '/booking',
  DASHBOARD: '/dashboard',
  BOOKINGS: '/dashboard/bookings',
  FAVORITES: '/dashboard/favorites',
  WALLET: '/dashboard/wallet',
  REVIEWS: '/dashboard/reviews',
  CHAT: '/dashboard/chat',
  SETTINGS: '/dashboard/settings',
  LOGIN: '/login',
  REGISTER: '/register',
  ABOUT: '/about',
  CONTACT: '/contact',
  NOT_FOUND: '/404',
  UNAUTHORIZED: '/401',
};

export const SERVICE_CATEGORIES = [
  'All Categories',
  'Hair Spa',
  'Nails',
  'Makeup',
  'Hair Color',
  'Kids Cut',
];

export const PRICE_RANGE = {
  MIN: 0,
  MAX: 999,
};

export const RATINGS = [5, 4, 3, 2, 1];

export const APP_CONFIG = {
  NAME: 'HAIR RAP BY YOYO',
  BRAND_NAME: 'SalonWala',
  CURRENCY: '₹',
  DEFAULT_LANGUAGE: 'English',
  DEFAULT_CURRENCY: 'USD',
};

