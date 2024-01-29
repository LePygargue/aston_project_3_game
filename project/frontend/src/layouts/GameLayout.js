// /frontend/src/layouts/SpecialLayout.js
/*
 * Author : Thierry Maurouzel
 * Description : Main Layout for the game part of the site
 * Last update :
 */

import React from "react";
import GameLeftMenu from "../components/ui/GameLeftMenu";
// import SpecialHeader from './SpecialHeader';
//

const GameLayout = ({ children }) => {
  return (
    <div>
      <GameLeftMenu />
      <main>{children}</main>
    </div>
  );
};

export default GameLayout;
