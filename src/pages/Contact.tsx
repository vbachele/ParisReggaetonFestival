import React from 'react';
import { Star, Ticket, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from '@/components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-24 max-w-6xl">
        {/* About Section */}
        <section className="text-center mb-24">
          <h1 className="text-4xl font-bold mb-4 text-text-primary">À propos de l'association</h1>
          <p className="text-xl mb-16">
            Créée en 2012, nous apportons la joie de la danse à Paris et en Ile-De-France
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Specialties */}
            <Card className="group hover:scale-105 transition-transform duration-300 cursor-pointer ">
              <div className="bg-text-primary rounded-2xl h-full shadow-lg overflow-hidden">
                <div className="aspect-[3/2] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&auto=format&fit=crop&q=60" 
                    alt="Reggaeton dance" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-text-primary/90 via-text-primary/40 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">Nos Spécialités</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="transform hover:translate-x-2 transition-transform duration-300">
                      <span className="font-semibold">REGGAETON</span>
                    </li>
                    <li className="transform hover:translate-x-2 transition-transform duration-300">
                      <span className="font-semibold">ZUMBA</span>
                      <br />
                      <span className="text-sm">(version World Music)</span>
                    </li>
                    <li className="transform hover:translate-x-2 transition-transform duration-300">
                      <span className="font-semibold">TECHNIQUES de DÉHANCHÉS</span>
                      <br />
                      <span className="text-sm">(BOOTYSHAKE et BODYMOVE)</span>
                    </li>
                  </ul>
                </CardContent>
              </div>
            </Card>

            {/* Activities */}
            <Card className="group hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="bg-text-primary rounded-2xl h-full shadow-lg overflow-hidden">
                <div className="aspect-[3/2] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&auto=format&fit=crop&q=60" 
                    alt="Dance class" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-text-primary/90 via-text-primary/40 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">Activités</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="transform hover:translate-x-2 transition-transform duration-300">
                      <div className="font-semibold">Cours</div>
                      <div className="text-sm">Tous niveaux et styles</div>
                    </li>
                    <li className="transform hover:translate-x-2 transition-transform duration-300">
                      <div className="font-semibold">Stages</div>
                      <div className="text-sm">Intensifs et thématiques</div>
                    </li>
                    <li className="transform hover:translate-x-2 transition-transform duration-300">
                      <div className="font-semibold">Événements Multi-Danses</div>
                      <div className="text-sm">Festivals et soirées</div>
                    </li>
                  </ul>
                </CardContent>
              </div>
            </Card>

            {/* Location */}
            <Card className="group hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="bg-text-primary rounded-2xl h-full shadow-lg overflow-hidden">
                <div className="aspect-[3/2] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=60" 
                    alt="Paris" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-text-primary/90 via-text-primary/40 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">Localisation</h3>
                  <div className="space-y-3 text-white/90">
                    <div className="transform hover:translate-x-2 transition-transform duration-300">
                      <div className="font-semibold">Paris</div>
                      <div className="text-sm">Centre ville</div>
                    </div>
                    <div className="transform hover:translate-x-2 transition-transform duration-300">
                      <div className="font-semibold">Ile-De-France</div>
                      <div className="text-sm">Multiples lieux</div>
                    </div>
                    <div className="transform hover:translate-x-2 transition-transform duration-300">
                      <div className="font-semibold">Événements</div>
                      <div className="text-sm">Salles partenaires</div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-16 text-text-primary">L'équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-white/10">
                <img 
                  src="https://i.pravatar.cc/150?img=32" 
                  alt="Philippe" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-text-primary">PHILIPPE</h3>
                <p className="text-lg font-medium text-gray-300 mb-2">Président</p>
                <p className="text-gray-400">Partie administrative et logistique</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-white/10">
                <img 
                  src="https://i.pravatar.cc/150?img=44" 
                  alt="Farah" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-text-primary">FARAH</h3>
                <p className="text-lg font-medium text-gray-300 mb-2">Directrice Artistique</p>
                <p className="text-gray-400">Partie artistique et communication</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="md:text-4xl text-2xl font-bold mb-4 text-text-primary">Contactez-nous</h2>
          <div className="flex flex-row justify-center gap-4">
            <a href="tel:0670423211" className="group inline-flex items-center space-x-3 text-2xl hover:text-text-primary transition-colors">
              <Phone className="h-5 w-5 text-text-primary group-hover:scale-110 transition-transform" />
              <span className='text-lg'>06 70 42 32 11</span>
            </a>
            <a href="mailto:ambiance-zumba@hotmail.fr" className="group inline-flex items-center space-x-3 text-2xl hover:text-text-primary transition-colors">
              <Mail className="h-5 w-5 text-text-primary group-hover:scale-110 transition-transform" />
              <span className='text-lg'>ambiance-zumba@hotmail.fr</span>
            </a>
          </div>

          <div className="mt-8">
            <div className="flex justify-center space-x-8">
              <a href="#" className="group flex items-center space-x-4 text-lg hover:text-text-primary transition-colors p-4 rounded-xl hover:bg-white/5">
                <Facebook className="h-8 w-8 text-text-primary group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="font-semibold">Ambiance Zumba Reggaeton</div>
                </div>
              </a>
              <a href="#" className="group flex items-center space-x-4 text-lg hover:text-text-primary transition-colors p-4 rounded-xl hover:bg-white/5">
                <Facebook className="h-8 w-8 text-text-primary group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="font-semibold">Farah AlwaysWanna-Dance</div>
                </div>
              </a>
              <a href="#" className="group flex items-center space-x-4 text-lg hover:text-text-primary transition-colors p-4 rounded-xl hover:bg-white/5">
                <Instagram className="h-8 w-8 text-text-primary group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="font-semibold">@farah_alwayswannadance</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact; 