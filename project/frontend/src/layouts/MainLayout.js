// /frontend/src/layouts/MainLayout.js
import React from 'react';
import Header from './Header';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      {/* Ajoutez d'autres éléments de mise en page ici si nécessaire */}
    </div>
  );
};

export default MainLayout;
