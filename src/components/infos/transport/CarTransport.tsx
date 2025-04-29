import { Car } from 'lucide-react';

const CarTransport = () => (
  <div className="bg-gray-50 p-6 rounded-lg mb-6">
    <h3 className="text-xl font-bold mb-4">En voiture</h3>
    <div>
      <h4 className="font-medium mb-2 font-title">Villes à proximité</h4>
      <ul className="grid grid-cols-2 gap-2">
        <li className="flex items-center font-body">
          <Car className="w-4 h-4 mr-2" /> Orly
        </li>
        <li className="flex items-center font-body">
          <Car className="w-4 h-4 mr-2" /> Fresnes
        </li>
        <li className="flex items-center font-body">
          <Car className="w-4 h-4 mr-2" /> Wissous
        </li>
        <li className="flex items-center font-body">
          <Car className="w-4 h-4 mr-2" /> Antony
        </li>
        <li className="flex items-center font-body">
          <Car className="w-4 h-4 mr-2" /> L'Haÿ-les-Roses
        </li>
      </ul>
      <p className="mt-4 text-gray-600 font-body">
        Il est assez facile de circuler dans le secteur. Les villes avoisinantes sont une bonne alternative pour le logement.
      </p>
    </div>
  </div>
);

export default CarTransport; 