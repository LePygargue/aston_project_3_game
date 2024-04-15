// /frontend/src/layouts/SpecialLayout.js
/*
 * Author : Thierry Maurouzel
 * Description : Main Layout for the game part of the site
 * Last update :
 */

import { Outlet } from "react-router-dom";

const GameLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default GameLayout;
