import HeroSection from '@/components/Hero';
import PopularMovies from '@/components/PopularMovies';
import TopRated from '@/components/TopRated';
import TrendingMovies from '@/components/TrendingMovies';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className='container mx-auto px-4 py-8'>
        <TrendingMovies />
        <PopularMovies />
        <TopRated />
      </div>
    </div>
  );
}
