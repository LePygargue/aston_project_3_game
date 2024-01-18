// /frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthenticationPage from './features/authentication';
import HomePage from './components/HomePage';
import MainLayout from './layouts/MainLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/authentication/*" element={<AuthenticationPage />} />
                <Route path="/" element={<HomePage />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
