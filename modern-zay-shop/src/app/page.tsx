import TopNav from '@/components/TopNav';
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import CategoriesSection from '@/components/CategoriesSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <Header />
      <HeroCarousel />
      <CategoriesSection />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}
