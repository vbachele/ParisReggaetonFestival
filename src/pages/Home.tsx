import { Layout } from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeatureCards from '@/components/home/FeatureCards';
import ArtistList from '@/components/home/ArtistList';
import FestivalPersonnalizePhoto from '@/components/home/FestivalPersonnalizePhoto';

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
              <FestivalPersonnalizePhoto />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
