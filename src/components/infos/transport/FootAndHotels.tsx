import { Building2 } from 'lucide-react';

const FootAndHotels = () => (
  <div className="bg-gray-50 p-6 rounded-lg mb-6">
    <h3 className="text-xl font-bold mb-4 font-title">À pieds et Hébergements</h3>
    <div className="space-y-4">
      <div>
        <h4 className="font-medium mb-2 font-title">Hôtels à proximité</h4>
        <ul className="space-y-2">
          <li className="flex items-center font-body">
            <Building2 className="w-4 h-4 mr-2" /> Hôtel Mercure Rungis
          </li>
          <li className="flex items-center font-body">
            <Building2 className="w-4 h-4 mr-2" /> Ibis Orly Airport
          </li>
          <li className="flex items-center font-body">
            <Building2 className="w-4 h-4 mr-2" /> Best Western Plus Paris Orly
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-medium mb-2 font-title">Airbnb</h4>
        <a 
          href="https://www.airbnb.fr/s/Rungis--France" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-text-primary hover:underline"
        >
          Voir les logements sur Airbnb
        </a>
      </div>
    </div>
  </div>
);

export default FootAndHotels; 