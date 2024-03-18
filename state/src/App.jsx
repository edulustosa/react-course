import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState('Eduardo');

  return (
    <Router>
      <AppContext.Provider value={{ username, setUsername }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
