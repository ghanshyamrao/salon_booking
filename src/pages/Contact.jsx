import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroBanner from '../components/layout/HeroBanner'
import { ROUTES } from '../constants'

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroBanner title="Contact" breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'Contact' }]} />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          <h2>Contact Us</h2>
          <p>Get in touch with us.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contact

