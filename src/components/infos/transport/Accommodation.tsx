const Accommodation = () => (
    <>
    <div className="bg-gray-50 p-6 rounded-lg">
    <h3 className="text-xl font-bold mb-4">Logement</h3>
    <div className="space-y-4">
      <div>
        <h4 className="font-medium mb-2 font-title">À pied</h4>
        <p className="text-gray-600 font-body">
          Si tu es à pied, nous te recommandons de trouver un logement au sein de la ville si possible (type AirBnb et autres). À l'entrée de la ville, il y a également plusieurs hôtels.
        </p>
      </div>
    </div>
  </div>

  {/* Transports en commun */}
  <div className="bg-gray-50 p-6 rounded-lg">
    <h3 className="text-xl font-bold mb-4 font-title">Transports en commun</h3>
    <ul className="space-y-3">
      <li className="flex items-center font-body">
        <div className="w-6 h-6 rounded bg-[#6E4B98] text-white flex items-center justify-center text-sm mr-2">T7</div>
        Tram T7
      </li>
      <li className="flex items-center font-body">
        <div className="w-6 h-6 rounded bg-[#62259D] text-white flex items-center justify-center text-sm mr-2">14</div>
        Ligne 14
      </li>
      <li className="flex items-center font-body">
        <div className="w-6 h-6 rounded bg-[#DC9F1E] text-white flex items-center justify-center text-sm mr-2">C</div>
        RER C
      </li>
      <li className="flex items-center font-body">
        <div className="w-6 h-6 rounded bg-[#1E90FF] text-white flex items-center justify-center text-sm mr-2">B</div>
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
        Planifier ton trajet RATP
      </a>
    </div>
  </div>
  </>
);

export default Accommodation; 