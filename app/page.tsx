import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import DealsSection from '@/components/DealsSection';
import RestaurantGrid from '@/components/RestaurantGrid';
import TrendingSection from '@/components/TrendingSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CategorySection />
      <div style={{ padding: '48px 0' }}>
        <div className="container">
          <RestaurantGrid title="Top Restaurants Near You" subtitle="Explore the best dining experiences in your area" filter="top" />
        </div>
      </div>
      <DealsSection />
      <div style={{ padding: '48px 0', background: 'white' }}>
        <div className="container">
          <RestaurantGrid title="Trending Now" subtitle="What everyone is talking about this week" filter="trending" />
        </div>
      </div>
      <div style={{ padding: '48px 0' }}>
        <div className="container">
          <RestaurantGrid title="Most Reviewed" subtitle="Restaurants with the most customer feedback" filter="reviewed" />
        </div>
      </div>
      <div style={{ padding: '48px 0', background: 'white' }}>
        <div className="container">
          <RestaurantGrid title="Best Dinner Spots" subtitle="Perfect places for a memorable dinner" filter="dinner" />
        </div>
      </div>
      <div style={{ padding: '48px 0' }}>
        <div className="container">
          <RestaurantGrid title="Brunch Favorites" subtitle="Start your weekend right with these brunch gems" filter="brunch" />
        </div>
      </div>
      <TrendingSection />
      <Footer />
    </main>
  );
}
