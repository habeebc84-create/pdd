import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/layout/Layout';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { RidesPage } from './pages/RidesPage';
import { ParcelsPage } from './pages/ParcelsPage';
import { HowItWorksPage } from './pages/HowItWorksPage';

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rides" element={<RidesPage />} />
          <Route path="/parcels" element={<ParcelsPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="*" element={<div className="py-20 text-center"><h1>404 - Page Not Found</h1><p>The route you are looking for doesn't exist.</p></div>} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
