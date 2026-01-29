import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroBanner from '../components/layout/HeroBanner'
import { ROUTES } from '../constants'

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroBanner title="About Us" breadcrumbs={[{ label: 'Home', href: ROUTES.HOME }, { label: 'About Us' }]} />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          <h2>About SalonWala</h2>
          <p>We connect top talents with top companies.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About