import React from 'react';
import { Navbar, Footer } from '../navigation/Nav';

export const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-background-light text-text-main">
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);
