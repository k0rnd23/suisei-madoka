import SiteHeader from "@/components/site-header"
import HeroSection from "@/components/hero-section"
import BannerSection from "@/components/banner-section"
import AboutSection from "@/components/about-section"
import ShopSection from "@/components/shop-section"
import TestimonialSection from "@/components/testimonial-section"
import OfferSection from "@/components/offer-section"
import JourneySection from "@/components/journey-section"
import NewsSection from "@/components/news-section"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"
import Live2DViewer from "@/components/live2d-viewer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <BannerSection />
        <AboutSection />
        <ShopSection />
        <TestimonialSection />
        <OfferSection />
        <JourneySection />
        <NewsSection />
        <NewsletterSection />
        <Live2DViewer />
      </main>
      <Footer />
    </>
  )
}

