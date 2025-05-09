import { Layout } from '@/components/Layout';
import { MobileTopImageCrop } from '@/components/MobileTopImageCrop';

const Boutique = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-background-primary">
      <div className="relative w-full">
        <div className="md:block hidden relative w-full pt-20 h-[40vh] md:h-[480px]">
          <img 
            src="/cover_Reggaeton_Festival.png" 
            alt="Paris Reggaeton Festival Information" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          </div>
        </div>
        <MobileTopImageCrop
        />
      </div>
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