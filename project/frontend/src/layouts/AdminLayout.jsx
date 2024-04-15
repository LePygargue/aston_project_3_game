/*
 * Author : Thierry Maurouzel
 * Description : Main Layout for the game part of the site
 * Last update :
 */

import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default AdminLayout;
