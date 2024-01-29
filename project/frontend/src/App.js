// /frontend/src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthenticationPage from "./features/authentication";
import HomePage from "./pages/HomePage";
import HomeGame from "./pages/Game";
import MainLayout from "./layouts/MainLayout";
import GameLayout from "./layouts/GameLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/authentication/*"
                  element={<AuthenticationPage />}
                />
              </Routes>
            </MainLayout>
          }
        />
        <Route
          path="/game/*"
          element={
            <GameLayout>
              <Routes>
                <Route path="/" element={<HomeGame />} />
              </Routes>
            </GameLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
