import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="bg-white shadow-lg mt-auto py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Mohamed's Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;