import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Package, User, LayoutDashboard, Info } from 'lucide-react';

export const Navbar = () => (
  <nav className="bg-white border-b border-border sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-blue rounded-lg flex items-center justify-center text-white font-bold">RR</div>
          <span className="text-navy font-bold text-xl tracking-tight">ReturnRoute</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/how-it-works" className="text-text-secondary hover:text-primary-blue text-sm font-medium transition-colors">How It Works</Link>
          <Link to="/rides" className="text-text-secondary hover:text-primary-blue text-sm font-medium transition-colors">Rides</Link>
          <Link to="/parcels" className="text-text-secondary hover:text-primary-blue text-sm font-medium transition-colors">Parcels</Link>
          <Link to="/dashboard" className="bg-primary-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">Dashboard</Link>
        </div>
      </div>
    </div>
  </nav>
);

export const Footer = () => (
  <footer className="bg-navy text-white py-12 mt-auto">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-6 h-6 bg-primary-blue rounded flex items-center justify-center text-white text-xs font-bold">RR</div>
        <span className="font-bold text-lg">ReturnRoute</span>
      </div>
      <p className="text-slate-400 text-sm mb-6">People • Parcels • Smarter Trips</p>
      <div className="flex justify-center gap-6 text-sm text-slate-400 mb-8">
        <a href="/how-it-works" className="hover:text-white">How It Works</a>
        <a href="/rides" className="hover:text-white">Rides</a>
        <a href="/parcels" className="hover:text-white">Parcels</a>
      </div>
      <p className="text-xs text-slate-500">Project Stage: Day 2 Foundation. Experimental Demo.</p>
    </div>
  </footer>
);
