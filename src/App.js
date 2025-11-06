import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';

// Router selection:
// - In development: use HashRouter to avoid subpath issues when homepage is set
// - In GitHub Pages: use HashRouter with basename '/My-portfolio'
// - In Firebase production: use BrowserRouter
const publicUrl = process.env.PUBLIC_URL || '';
const isDev = process.env.NODE_ENV !== 'production';
// Only treat as GitHub Pages when building for production
const isGitHubPages = !isDev && (publicUrl.includes('github.io') || publicUrl.includes('/My-portfolio'));
const useHashRouter = isDev || isGitHubPages;
const Router = useHashRouter ? HashRouter : BrowserRouter;
// In dev, no basename. On GitHub Pages production, use '/My-portfolio'
const routerBasename = isGitHubPages ? '/My-portfolio' : undefined;

function App() {
  return (
    <Router basename={routerBasename}>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;




