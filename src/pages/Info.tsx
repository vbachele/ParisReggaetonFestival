import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import FestivalAddress from '@/components/infos/FestivalAddress';
import FestivalTransport from '@/components/infos/FestivalTransport';
import FestivalRestauration from '@/components/infos/FestivalRestauration';
import FestivalOnsite from '@/components/infos/FestivalOnsite';
import { MobileTopImageCrop } from '@/components/MobileTopImageCrop';

const baseTitleAnim = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.7 }
};

const titleAnim = {
  ...baseTitleAnim,
  transition: { ...baseTitleAnim.transition, delay: 0.1 }
};

const baseCardAnim = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.7 }
};

const cardAnim = {
  ...baseCardAnim,
  transition: { ...baseCardAnim.transition }
};

const Info = () => {
  return (
    <Layout>
      <div className="relative w-full">
        <div className="md:block hidden relative w-full pt-20 h-[40vh] md:h-[480px]">
          <img 
            src="/cover_Reggaeton_Festival.png" 
            alt="Paris Reggaeton Festival Information" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="container mx-auto">
              <motion.h1 {...titleAnim} className="text-4xl md:text-5xl font-bold mb-8 font-title">
                Informations Pratiques
              </motion.h1>
            </div>
          </div>
        </div>
        <MobileTopImageCrop
        />
         <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <motion.h1 {...titleAnim} className="text-3xl font-bold mb-4 text-center md:text-left">
              Informations Pratiques
            </motion.h1>
          </div>
      </div>

      <div className={`min-h-screen bg-background-primary`}>
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <motion.div {...cardAnim} transition={{ ...cardAnim.transition, delay: 0.1 }}>
                <Card>
                  <CardContent className="p-8 bg-white rounded-lg">
                    <FestivalAddress />
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            <section>
              <motion.div {...cardAnim} transition={{ ...cardAnim.transition, delay: 0.25 }}>
                <Card>
                  <CardContent className="p-8 bg-white rounded-lg">
                    <FestivalTransport />
                  </CardContent>
                </Card>
              </motion.div>
            </section>
            <section>
              <motion.div {...cardAnim} transition={{ ...cardAnim.transition, delay: 0.55 }}>
                <Card>
                  <CardContent className="p-8 bg-white rounded-lg">
                    <FestivalOnsite />
                  </CardContent>
                </Card>
              </motion.div>
            </section>
            <section>
              <motion.div {...cardAnim} transition={{ ...cardAnim.transition, delay: 0.4 }}>
                <Card>
                  <CardContent className="p-8 bg-white rounded-lg">
                    <FestivalRestauration />
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Info; 