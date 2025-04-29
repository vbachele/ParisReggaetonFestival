const FestivalOnsite = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">Lors de l'évènement</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold  mb-3">Pour faciliter l'accueil, l'équipe vous remercie :</h3>
          <ul className="list-disc pl-6 space-y-2 font-body">
            <li>D'arriver 20 min en avance</li>
            <li>De prévoir une tenue confortable et des baskets propres</li>
            <li>De présenter votre pass en version papier ou numérique à votre arrivée</li>
          </ul>
        </div>

        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-yellow-800 font-medium">
            L'équipe ne fait pas crédit et ne fait aucun remboursement en cas de désistement, de retard ou d'absence.
          </p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-blue-800 font-medium">
            Pour les règlements sur place (sous réserve de disponibilité), merci de faire l'appoint (Attention : pas de lecteur CB sur place).
          </p>
        </div>
      </div>
    </div>
  );
};

export default FestivalOnsite; 