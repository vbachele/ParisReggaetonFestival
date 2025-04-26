import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import FestivalAddress from '@/components/infos/FestivalAddress';
import FestivalTransport from '@/components/infos/FestivalTransport';
import FestivalRestauration from '@/components/infos/FestivalRestauration';

const baseAnim = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.7 }
};

const titleAnim = {
  ...baseAnim,
  transition: { ...baseAnim.transition, delay: 0.1 }
};

const subtitleAnim = {
  ...baseAnim,
  transition: { ...baseAnim.transition, delay: 0.25 }
};

const cardAnim = {
  ...baseAnim,
  transition: { ...baseAnim.transition }
};

const Info = () => {
  return (
    <Layout>
      <div className="relative w-full">
        <div className="md:block hidden relative w-full mt-14 h-[40vh] md:h-[400px]">
          <img 
            src="/cover_Reggaeton_Festival.png" 
            alt="Paris Reggaeton Festival Information" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="container mx-auto">
              <motion.h1 {...titleAnim} className="text-4xl md:text-5xl font-bold mb-4 font-title">
                Informations Pratiques
              </motion.h1>
              <motion.p {...subtitleAnim} className="text-xl md:text-2xl text-white/90 font-body">
                Tout ce que vous devez savoir pour profiter du festival
              </motion.p>
            </div>
          </div>
        </div>
        <div className="md:hidden relative w-full mt-20 h-[48vh]">
          <img 
            src="/cover_Mobile_Raggaeton_Festival.png" 
            alt="Paris Reggaeton Festival Information" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <motion.h1 {...titleAnim} className="text-3xl font-bold mb-2">
              Informations Pratiques
            </motion.h1>
            <motion.p {...subtitleAnim} className="text-lg text-white/90">
              Tout ce que vous devez savoir
            </motion.p>
          </div>
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