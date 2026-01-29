# Salon Booking Application

A modern, responsive salon booking application built with React and Tailwind CSS, featuring role-based authentication, service listings, booking management, and a pixel-perfect UI matching the provided Figma designs.

##  Setup Instructions

## Login 
- Email : user@gmail.com pass
- Pass : 123123

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd salon_booking
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The application will be available at `http://localhost:5173`
   - Vite will automatically open the browser or you can navigate manually

### Additional Setup (if needed)

**Install Sonner for toast notifications:**
```bash
npm install sonner
```

##  Project Structure

```
salon_booking/
├── src/
│   ├── assets/              # Images and static assets
│   ├── components/
│   │   ├── layout/          # Header, Footer, HeroBanner
│   │   ├── services/        # Service-related components
│   │   └── ui/               # Shadcn/ui components
│   ├── constants/           # API endpoints, routes, roles, etc.
│   ├── context/             # AuthContext for authentication
│   ├── mock/                # Mock data providers
│   ├── pages/               # Page components
│   ├── routes/              # Route configuration
│   ├── services/            # API service functions
│   └── lib/                 # Utility functions
├── public/                  # Public assets
└── package.json
```

##  Key Features

- **Role-Based Authentication**: Customer, Provider, and Admin roles with protected routes
- **Service Listing**: Filterable and searchable service catalog with grid/list views
- **Booking Management**: Complete booking flow with form validation
- **My Bookings**: View and manage bookings with status filtering and pagination
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Toast Notifications**: User-friendly success/error messages using Sonner
- **Mock Data**: Centralized mock data providers for development

##  Technology Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS framework
- **Shadcn/ui** - High-quality component library
- **Lucide React** - Icon library
- **Sonner** - Toast notification library
- **date-fns** - Date formatting utilities

##  Approach & Architecture

### Component Architecture

The application follows a component-based architecture with clear separation of concerns:

1. **Layout Components** (`src/components/layout/`):
   - `Header.jsx` - Navigation bar with hamburger menu for mobile
   - `Footer.jsx` - Footer with links, subscription, and app store buttons
   - `HeroBanner.jsx` - Reusable hero banner with breadcrumbs

2. **Service Components** (`src/components/services/`):
   - `ServiceCard.jsx` - Individual service card display
   - `ServiceGrid.jsx` - Grid view layout
   - `ServiceList.jsx` - List view layout
   - `ServiceFilters.jsx` - Filter sidebar component
   - `ServiceCardSkeleton.jsx` - Loading skeleton for cards
   - `Pagination.jsx` - Reusable pagination component
   - `ViewModeToggle.jsx` - Grid/List view toggle

3. **UI Components** (`src/components/ui/`):
   - Shadcn/ui components: Card, Button, Badge, Input, Label, Textarea, Select, Skeleton, Sonner

### State Management

- **React Hooks**: `useState` and `useEffect` for local component state
- **Context API**: `AuthContext` for global authentication state
- **Local Storage**: Persistence for user data and bookings

### Routing Strategy

- **Centralized Routes** (`src/routes/Routes.jsx`):
  - Public routes: Home, Services, Booking, Login, Register, About, Contact
  - Protected routes: Dashboard, MyBookings, and other dashboard pages
  - Role-based route protection with redirects

### Data Management

- **Mock Data Providers** (`src/mock/`):
  - `services.js` - Service listings data
  - `salon.js` - Salon/service detail data
  - `bookings.js` - User bookings data
  - Centralized exports via `index.js`

### Styling Approach

- **Tailwind CSS**: Utility-first styling with custom color scheme
- **Responsive Design**: Mobile-first approach with breakpoints:
  - Mobile: Default styles
  - Tablet: `sm:` (640px+)
  - Desktop: `md:` (768px+), `lg:` (1024px+)
- **Custom Colors**: Primary color `#B56584` (pink) used throughout

### Key Design Decisions

1. **Functional Components**: All components use `const Component = () => {}` syntax with default exports
2. **Reusable Components**: Small, focused components for maintainability
3. **Constants File**: Centralized configuration for routes, roles, API endpoints
4. **Mock Data**: Separate mock data layer for easy API integration later
5. **Skeleton Loading**: Loading states for better UX
6. **Toast Notifications**: Non-intrusive feedback for user actions
7. **Responsive First**: Mobile hamburger menu, flexible layouts, responsive grids

##  Authentication

The application uses a simple mock authentication system:

- **Login**: Any email/password combination works (mock)
- **User Data**: Stored in localStorage
- **Protected Routes**: Automatically redirect to login if not authenticated
- **Role-Based Access**: Different routes accessible based on user role

##  Responsive Breakpoints

- **Mobile**: < 640px - Single column layouts, hamburger menu
- **Tablet**: 640px - 1024px - 2-column grids, side-by-side forms
- **Desktop**: > 1024px - Full layouts with sidebars, 3-4 column grids

##  UI/UX Features

- Smooth transitions and hover effects
- Loading skeletons for better perceived performance
- Toast notifications for user feedback
- Form validation with error messages
- Accessible form controls and navigation

##  Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint



