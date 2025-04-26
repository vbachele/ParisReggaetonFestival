import React from 'react';
import { MapPin } from 'lucide-react';

const FestivalAddress = () => (
  <>
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">Adresse du Festival</h2>
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
      className={`inline-flex items-center text-text-primary hover:underline`}
    >
      <MapPin className="w-4 h-4 mr-2" /> Voir sur Google Maps
    </a>
  </>
);

export default FestivalAddress; 