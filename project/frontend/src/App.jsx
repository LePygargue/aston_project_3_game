import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthenticationPage from "./features/authentication/Authentication";
import HomePage from "./components/HomePage";
import HomeGame from "./components/Game";
import MainLayout from "./layouts/MainLayout";
import GameLayout from "./layouts/GameLayout";
import Missing from "./components/Missing";
import RequireAuth from "./components/RequireAuth";

const ROLES = {
    User: 0,
    Admin: 1,
};

const App = () => {
    return (
        <Routes>
            {/* public routes */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route
                    path="authentication/*"
                    element={<AuthenticationPage />}
                />
            </Route>

            {/* Protected routes */}
            <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                <Route path="game" element={<GameLayout />}>
                    <Route index element={<HomeGame />} />
                </Route>
            </Route>

            {/* catch all */}
            <Route path="*" element={<Missing />} />
        </Routes>
    );
};

export default App;
