// /frontend/src/layouts/SpecialLayout.js
/*
* Author : Thierry Maurouzel
* Description : Main Layout for the game part of the site
* Last update : 
*/

import React from 'react';
// import SpecialHeader from './SpecialHeader';
//

const SpecialLayout = ({ children }) => {
  return (
    <div>
      <SpecialHeader />
      <main>{children}</main>
      {/* Ajoutez d'autres éléments de mise en page spéciale ici si nécessaire */}
    </div>
  );
};

export default SpecialLayout;
