// /frontend/src/layouts/MainLayout.js

import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default MainLayout;
