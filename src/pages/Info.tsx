import React from 'react';
import { MapPin, Building2, Car, Train, UtensilsCrossed, ExternalLink, Mail, Instagram } from 'lucide-react';

const Info = () => {
  return (
    <div className="min-h-screen bg-[#1269cb]/10">
      {/* Hero Banner */}
      

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Adresse Section */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#4323FC]">Adresse du Festival</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-medium mb-4">Rungis International Festival</h3>
              <div className="aspect-video w-full rounded-lg mb-4 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.5441843491747!2d2.345082300000001!3d48.7481609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6769a65d8006f%3A0x1e8881e2141a341!2sSalle%20de%20r%C3%A9ception%20La%20Grange!5e0!3m2!1sfr!2sfr!4v1708977254435!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
              <a 
                href="https://www.google.com/maps/place/Salle+de+r%C3%A9ception+La+Grange/@48.7481609,2.3450823,16z/data=!3m1!4b1!4m6!3m5!1s0x47e6769a65d8006f:0x1e8881e2141a341!8m2!3d48.7481574!4d2.3476572!16s%2Fg%2F11bwfknhlw?entry=ttu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline"
              >
                <MapPin className="w-4 h-4 mr-2" /> Voir sur Google Maps
              </a>
            </div>
          </section>

          {/* Transport Section */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#4323FC]">Transport et Hébergement</h2>
            
            {/* À pied & Hébergement */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4">À pied & Hébergement</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Hôtels à proximité</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Building2 className="w-4 h-4 mr-2" /> Hôtel Mercure Rungis
                    </li>
                    <li className="flex items-center">
                      <Building2 className="w-4 h-4 mr-2" /> Ibis Orly Airport
                    </li>
                    <li className="flex items-center">
                      <Building2 className="w-4 h-4 mr-2" /> Best Western Plus Paris Orly
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Airbnb</h4>
                  <a 
                    href="https://www.airbnb.fr/s/Rungis--France" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:underline"
                  >
                    Voir les logements sur Airbnb
                  </a>
                </div>
              </div>
            </div>

            {/* En voiture */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4">En voiture</h3>
              <div>
                <h4 className="font-medium mb-2">Villes accessibles</h4>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <Car className="w-4 h-4 mr-2" /> Orly
                  </li>
                  <li className="flex items-center">
                    <Car className="w-4 h-4 mr-2" /> Fresnes
                  </li>
                  <li className="flex items-center">
                    <Car className="w-4 h-4 mr-2" /> Wissous
                  </li>
                  <li className="flex items-center">
                    <Car className="w-4 h-4 mr-2" /> Antony
                  </li>
                  <li className="flex items-center">
                    <Car className="w-4 h-4 mr-2" /> L'Haÿ-les-Roses
                  </li>
                </ul>
                <div className="mt-4">
                  <a 
                    href="https://www.google.com/maps/dir//La+Grange+Sainte+Geneviève,+5+Rue+Sainte+Geneviève,+94150+Rungis" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:underline"
                  >
                    Calculer votre itinéraire
                  </a>
                </div>
              </div>
            </div>

            {/* Transports en commun */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Transports en commun</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center text-sm mr-2">T7</div>
                  Tram T7
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded bg-purple-600 text-white flex items-center justify-center text-sm mr-2">14</div>
                  Ligne 14
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded bg-yellow-500 text-white flex items-center justify-center text-sm mr-2">C</div>
                  RER C
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded bg-green-600 text-white flex items-center justify-center text-sm mr-2">B</div>
                  Bus TVM
                </li>
              </ul>
              <div className="mt-4">
                <a 
                  href="https://www.ratp.fr/itineraires" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:underline"
                >
                  Planifier votre trajet RATP
                </a>
              </div>
            </div>
          </section>

          {/* Restauration Section */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#4323FC]">Restauration</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-6">Plus d'informations à venir sur les options de restauration pendant le festival.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Info; 