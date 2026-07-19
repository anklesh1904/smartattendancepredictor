import Hero from '../components/Hero'
import FeaturedCategories from '../components/FeaturedCategories'
import BestSellers from '../components/BestSellers'
import AboutSection from '../components/AboutSection'
import WhyChoose from '../components/WhyChoose'
import GallerySection from '../components/GallerySection'
import OrderingTimeline from '../components/OrderingTimeline'
import Testimonials from '../components/Testimonials'
import FAQSection from '../components/FAQSection'
import InstagramSection from '../components/InstagramSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <AboutSection />
      <WhyChoose />
      <GallerySection />
      <OrderingTimeline />
      <Testimonials />
      <FAQSection />
      <InstagramSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
