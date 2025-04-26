import React, { useState } from 'react';
import { Layout } from '@/components/Layout';

export const Planning = () => {
  const [activeDay, setActiveDay] = useState('vendredi');

  const days = [
    { id: 'vendredi', label: 'Vendredi' },
    { id: 'samedi', label: 'Samedi' },
    { id: 'dimanche', label: 'Dimanche' }
  ];

  return (
    <Layout>
      <div className="relative min-h-screen">
        {/* Top Section with Background Image */}
        <div className="absolute top-0 left-0 right-0 h-[50vh] overflow-hidden">
          <img 
            src="/cover_Reggaeton_Festival.png"
            alt="Festival Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
          <div className="absolute inset-0"></div>
        </div>

        {/* Content Section */}
        <div className="relative pt-32 min-h-screen bg-gradient-to-b from-transparent to-background-primary">
          <div className="container mx-auto px-4">
            <div className="relative mb-8">
             
            </div>

            {/* Day Selection Tabs */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-lg bg-white/90 backdrop-blur-sm p-2 shadow-lg">
                {days.map((day) => (
                  <button
                    key={day.id}
                    onClick={() => setActiveDay(day.id)}
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                      activeDay === day.id ? `text-white bg-text-primary`
                        : 'text-black hover:bg-white/50'
                    }`}
                  >
                    {day.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Planning Content */}
            <div className="max-w-3xl mx-auto pb-16">
              <div className={`transition-all ${activeDay === 'vendredi' ? 'block' : 'hidden'}`}>
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
                  <img
                    src="/planning_vendredi.png"
                    alt="Programme Vendredi"
                    className="w-full rounded-xl"
                  />
                </div>
              </div>

              <div className={`transition-all ${activeDay === 'samedi' ? 'block' : 'hidden'}`}>
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
                  <img
                    src="/planning_samedi.png"
                    alt="Programme Samedi"
                    className="w-full rounded-xl"
                  />
                </div>
              </div>

              <div className={`transition-all ${activeDay === 'dimanche' ? 'block' : 'hidden'}`}>
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
                  <img
                    src="/planning_dimanche.png"
                    alt="Programme Dimanche"
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

