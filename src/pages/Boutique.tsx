import { Layout } from '@/components/Layout';

const Boutique = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-background-primary px-4">
        <div className="flex flex-col items-center justify-center w-full max-w-2xl py-16">
        <h1 className="text-text-primary text-4xl md:text-6xl font-extrabold font-title text-center mb-8 leading-tight">
            Boutique en cours de construction
          </h1>
          <video
            src="/videos/work_in_progress.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-48 h-48 object-contain mb-6 drop-shadow-xl"
          />
        
          <p className="text-white text-xl md:text-2xl font-bold font-body text-center mb-8">
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Boutique; 