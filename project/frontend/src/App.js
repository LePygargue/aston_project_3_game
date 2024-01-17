// frontend/src/App.js
import './App.css';
import { React} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Authentication from './features/authentication/index';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/authentication">Authentication</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/authentication/*" element={<Authentication />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;