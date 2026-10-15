import React from 'react';
import { Card, Button, Badge } from '../components/ui/Elements';
import { DASHBOARD_METRICS, DEMO_TRIPS } from '../data/demo';
import { LayoutDashboard, MapPin, Package, Plus, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Dashboard = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="flex justify-between items-end mb-10">
      <div>
        <h1 className="text-3xl font-bold text-navy mb-2">Welcome back, Traveller</h1>
        <p className="text-text-secondary">Here is your mobility overview for today.</p>
      </div>
      <div className="flex gap-3">
        <Link to="/rides"><Button variant="outline" className="hidden sm:flex gap-2"><Plus size={18}/> Find Ride</Button></Link>
        <Link to="/parcels"><Button variant="primary" className="flex gap-2"><Plus size={18}/> Send Parcel</Button></Link>
      </div>
    </div>

    {/* Metrics */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {DASHBOARD_METRICS.map((m, i) => (
        <Card key={i} className="flex flex-col">
          <span className="text-text-secondary text-sm font-medium mb-2">{m.label}</span>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-navy">{m.value}</span>
            <span className={`text-xs font-bold ${m.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {m.change}
            </span>
          </div>
        </Card>
      ))}
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      {/* Recent Activity */}
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-navy flex items-center gap-2">
            <LayoutDashboard size={20} className="text-primary-blue"/> Recent Activity
          </h2>
          <Button variant="ghost" className="text-sm">View all</Button>
        </div>
        <div className="space-y-4">
          {DEMO_TRIPS.map(trip => (
            <Card key={trip.id} className="p-4 flex items-center justify-between hover:border-primary-blue transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${trip.type === 'passenger' ? 'bg-blue-100 text-primary-blue' : 'bg-teal-100 text-primary-teal'}`}>
                  {trip.type === 'passenger' ? <User size={20}/> : <Package size={20}/>}
                </div>
                <div>
                  <div className="font-bold text-navy">{trip.origin} → {trip.destination}</div>
                  <div className="text-xs text-text-secondary">{trip.date} • {trip.time}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge color={trip.status === 'available' ? 'blue' : 'green'}>{trip.status}</Badge>
                <Button variant="ghost" className="p-2"><ArrowRight size={16}/></Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-bold text-navy mb-6">Quick Actions</h2>
        <div className="space-y-4">
          <Card className="p-6 bg-primary-blue text-white border-none">
            <h3 className="font-bold mb-2">Offer a Trip</h3>
            <p className="text-blue-100 text-sm mb-4">Share your upcoming journey to help others and earn rewards.</p>
            <Button variant="secondary" className="w-full py-2 text-sm">Get Started</Button>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold text-navy mb-2">Need Help?</h3>
            <p className="text-text-secondary text-sm mb-4">Check our guides on how route matching works.</p>
            <Link to="/how-it-works"><Button variant="outline" className="w-full py-2 text-sm">Read Guides</Button></Link>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

// Import User if needed since it was missed in imports
import { User, ArrowRight } from 'lucide-react';
