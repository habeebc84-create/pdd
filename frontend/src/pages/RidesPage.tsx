import React, { useState } from 'react';
import { Card, Button, Badge } from '../components/ui/Elements';
import { DEMO_TRIPS } from '../data/demo';
import { MapPin, User, Search, Package } from 'lucide-react';

export const RidesPage = () => {
  const [search, setSearch] = useState({ from: '', to: '', date: '', passengers: 1 });
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.from || !search.to) return;

    setLoading(true);
    setTimeout(() => {
      setResults(DEMO_TRIPS.filter(t => t.type === 'passenger'));
      setLoading(false);
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-navy mb-4">Find a Ride</h1>
        <p className="text-text-secondary">Enter your journey details to find compatible trips.</p>
      </div>

      <Card className="mb-12 p-8">
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-text-main">From</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18}/>
              <input
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary-blue outline-none transition-all"
                placeholder="Origin city"
                value={search.from}
                onChange={e => setSearch({...search, from: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-text-main">To</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18}/>
              <input
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary-blue outline-none transition-all"
                placeholder="Destination city"
                value={search.to}
                onChange={e => setSearch({...search, to: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-text-main">Departure Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary-blue outline-none transition-all"
              value={search.date}
              onChange={e => setSearch({...search, date: e.target.value})}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-text-main">Passengers</label>
            <input
              type="number"
              min="1"
              className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary-blue outline-none transition-all"
              value={search.passengers}
              onChange={e => setSearch({...search, passengers: parseInt(e.target.value)})}
              required
            />
          </div>
          <div className="md:col-span-4 flex justify-end">
            <Button variant="primary" className="flex items-center gap-2 px-8 py-3">
              {loading ? 'Searching...' : <><Search size={18}/> Search Rides</>}
            </Button>
          </div>
        </form>
      </Card>

      {loading && <div className="text-center py-20 text-text-secondary">Searching for compatible routes...</div>}

      {!loading && results.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-border">
          <User size={48} className="mx-auto text-slate-300 mb-4"/>
          <h3 className="text-xl font-bold text-navy">No trips found yet</h3>
          <p className="text-text-secondary">Try adjusting your date or destination.</p>
        </div>
      )}

      <div className="grid gap-4">
        {results.map(trip => (
          <Card key={trip.id} className="p-6 flex items-center justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-blue-100 text-primary-blue rounded-xl flex items-center justify-center"><User size={24}/></div>
              <div>
                <div className="font-bold text-navy text-lg">{trip.origin} → {trip.destination}</div>
                <div className="text-sm text-text-secondary">{trip.date} • {trip.time} • {trip.seats} seats available</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge color="blue">{trip.status}</Badge>
              <Button variant="outline">Book Ride</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
