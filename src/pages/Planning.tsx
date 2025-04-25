import React, { useState } from 'react';

export const Planning = () => {
  const [activeDay, setActiveDay] = useState('vendredi');

  const days = [
    { id: 'vendredi', label: 'Vendredi' },
    { id: 'samedi', label: 'Samedi' },
    { id: 'dimanche', label: 'Dimanche' }
  ];

  return (
    <div className="min-h-screen bg-[#1269cb]/10 py-16">
      <div className="container mx-auto px-4 py-8">
        <div className="relative mb-8">
          <h1 className="text-2xl md:text-5xl font-bold text-[#4323FC] text-center relative z-10 uppercase tracking-wider">
            Programme du Festival
          </h1>
       
        </div>

        {/* Day Selection Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-white backdrop-blur-sm p-2">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeDay === day.id ? 'text-white bg-[#4323FC]'
                    : ' text-black'
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className={`transition-all ${activeDay === 'vendredi' ? 'block' : 'hidden'}`}>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl">
              <img
                src="/planning_vendredi.png"
                alt="Programme Vendredi"
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>

          <div className={`transition-all ${activeDay === 'samedi' ? 'block' : 'hidden'}`}>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl">
              <img
                src="/planning_samedi.png"
                alt="Programme Samedi"
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>

          <div className={`transition-all ${activeDay === 'dimanche' ? 'block' : 'hidden'}`}>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl">
              <img
                src="/planning_dimanche.png"
                alt="Programme Dimanche"
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

