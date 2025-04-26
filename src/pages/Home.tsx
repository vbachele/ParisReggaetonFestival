import { Layout } from '@/components/Layout';
import ArtistList from '@/components/home/ArtistList';
import FeatureCards from '@/components/home/FeatureCards';
import HeroSection from '@/components/home/HeroSection';

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        <HeroSection />
        <div className="bg-background-primary">
          <div className="container mx-auto px-4 py-8">
            <div className="text-white space-y-12 text-center">
              <FeatureCards />
              <ArtistList />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
