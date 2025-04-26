import React from 'react';
import { Building2, Car } from 'lucide-react';

const FestivalTransport = () => (
  <>
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Transport et Hébergement</h2>
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
            className={`inline-flex items-center text-text-primary hover:underline`}
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
            className={`inline-flex items-center text-text-primary hover:underline`}
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
          className={`inline-flex items-center text-text-primary hover:underline`}
        >
          Planifier votre trajet RATP
        </a>
      </div>
    </div>
  </>
);

export default FestivalTransport; 