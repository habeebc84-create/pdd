import React from 'react';
import { AppLayout } from '../components/layout/Layout';

export const HowItWorksPage = () => (
  <div className="max-w-4xl mx-auto px-4 py-20">
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-navy mb-4">How ReturnRoute Works</h1>
      <p className="text-text-secondary text-lg">Making the most of journeys already in progress.</p>
    </div>
    <div className="space-y-12">
      {[
        { title: 'The Journey', desc: 'Drivers or travellers plan a trip from A to B. Instead of driving an empty car, they offer seats or parcel space.' },
        { title: 'The Match', desc: 'Our AI analyzes route corridors, pickup/drop-off proximity, and time-windows to find a compatible match.' },
        { title: 'The Coordination', desc: 'Both parties agree on a meeting point and time, ensuring a seamless transfer.' },
      ].map((item, idx) => (
        <div key={idx} className="flex gap-8 p-8 rounded-2xl bg-white border border-border shadow-sm">
          <div className="w-12 h-12 bg-primary-blue text-white rounded-full flex-shrink-0 flex items-center justify-center font-bold">{idx + 1}</div>
          <div>
            <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
            <p className="text-text-secondary leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
