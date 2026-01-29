import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroBanner from "@/components/layout/HeroBanner"

const ComingSoon = ({ title = 'Coming Soon' }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <HeroBanner title={title} />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          <p className="text-gray-500 text-sm">This page is under construction. Please check back later.</p>
        </div>
      </main>
      <Footer />
    </div>  
  )
}

export default ComingSoon


