import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import { Planning } from './pages/Planning';
import Contact from './pages/Contact';
import { Header } from './components/Header';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background-primary">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
