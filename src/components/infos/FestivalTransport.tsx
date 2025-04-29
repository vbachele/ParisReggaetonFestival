import FootAndHotels from './transport/FootAndHotels';
import CarTransport from './transport/CarTransport';
import Accommodation from './transport/Accommodation';

const FestivalTransport = () => (
  <>
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary font-title">Transport et Hébergement</h2>
    <FootAndHotels />
    <CarTransport />
    <Accommodation />
  </>
);

export default FestivalTransport; 