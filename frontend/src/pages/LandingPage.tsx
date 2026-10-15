import React from 'react';
import { Button, Card } from '../components/ui/Elements';
import { MapPin, Package, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LandingPage = () => (
  <div>
    {/* Hero Section */}
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-navy leading-tight mb-6">
          Your journey can take <br />
          <span className="text-primary-blue">someone further.</span>
        </h1>
        <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Connect planned journeys with passenger rides and parcel deliveries.
          Find compatible routes, make better use of return trips, and travel smarter.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/rides">
            <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg">Find a Ride</Button>
          </Link>
          <Link to="/parcels">
            <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-lg">Send a Parcel</Button>
          </Link>
        </div>

        {/* Visual Route Mockup */}
        <div className="mt-20 relative max-w-4xl mx-auto h-64 bg-white rounded-3xl border border-border shadow-xl flex items-center justify-center p-8 overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:20px_20px]"></div>
           <div className="relative flex items-center justify-between w-full max-w-2xl px-10">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white"><MapPin size={20}/></div>
                <span className="text-xs font-semibold">Origin</span>
              </div>
              <div className="flex-grow h-1 bg-slate-200 relative mx-4">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-blue rounded-full animate-pulse border-4 border-white shadow-sm"></div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center text-white"><MapPin size={20}/></div>
                <span className="text-xs font-semibold">Destination</span>
              </div>
           </div>
           <div className="absolute bottom-6 right-6 text-text-secondary text-xs font-medium italic">
             Visualizing route compatibility...
           </div>
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">How it Works</h2>
          <p className="text-text-secondary">Three simple steps to optimize your travel.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { step: '1', title: 'Share your request', desc: 'Tell us where you need to go or where your parcel needs to arrive.', icon: <User className="text-primary-blue" /> },
            { step: '2', title: 'Find a compatible route', desc: 'Our engine matches you with travellers already heading that way.', icon: <MapPin className="text-primary-blue" /> },
            { step: '3', title: 'Coordinate and Trip', desc: 'Confirm the details and coordinate your pickup and drop-off.', icon: <CheckCircle className="text-primary-blue" /> },
          ].map((item, idx) => (
            <div key={idx} className="relative p-8 rounded-2xl bg-background-light border border-border hover:border-primary-blue transition-all group">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center font-bold text-sm">{item.step}</div>
              <div className="mb-4 p-3 bg-white w-fit rounded-xl shadow-sm group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Offerings */}
    <section className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-10 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 bg-blue-100 text-primary-blue rounded-xl flex items-center justify-center mb-6"><User size={24}/></div>
              <h3 className="text-2xl font-bold text-navy mb-4">Ride Sharing</h3>
              <p className="text-text-secondary mb-8">Find compatible drivers for your next trip. Save costs and reduce carbon footprint.</p>
            </div>
            <Link to="/rides"><Button variant="primary" className="w-full flex items-center justify-center gap-2">Explore Rides <ArrowRight size={18}/></Button></Link>
          </Card>
          <Card className="p-10 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 bg-teal-100 text-primary-teal rounded-xl flex items-center justify-center mb-6"><Package size={24}/></div>
              <h3 className="text-2xl font-bold text-navy mb-4">Parcel Delivery</h3>
              <p className="text-text-secondary mb-8">Get your packages delivered faster and cheaper by leveraging existing trips.</p>
            </div>
            <Link to="/parcels"><Button variant="primary" className="w-full flex items-center justify-center gap-2">Send a Parcel <ArrowRight size={18}/></Button></Link>
          </Card>
        </div>
      </div>
    </section>
  </div>
);
