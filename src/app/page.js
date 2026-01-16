"use client";
import { useState } from 'react';
import './globals.css';

import Experience from './pages/experience.js';
import Hero from './pages/hero.js';
import Projects from './pages/projects.js';
import Contact from './pages/contact.js'

const Home = () => {
  const [activeView, setActiveView] = useState('home');

  return (
    <div className="layout-container">
      
      {/* LEFT SIDEBAR */}
      <aside className="sidebar">
        <div className="font-var(--font-space) font-bold text-xl tracking-tighter border-b border-black pb-2">
          (Kerrick <span className="italic font-var(--font-libre)">*Truong</span>)
            <br/>
          <span className="text-right text-xs font-light">{new Date().toDateString()}</span>
        </div>
        
        <nav className="nav-menu">
          <button 
            className={`nav-btn ${activeView === 'home' ? 'active' : ''}`} 
            onClick={() => setActiveView('home')}
          >
            [00] Home
          </button>

          <button 
            className={`nav-btn ${activeView === 'projects' ? 'active' : ''}`} 
            onClick={() => setActiveView('projects')}
          >
            [01] Projects
          </button>

          <button 
            className={`nav-btn ${activeView === 'experience' ? 'active' : ''}`} 
            onClick={() => setActiveView('experience')}
          >
            [02] Experience
          </button>

          <button 
            className={`nav-btn ${activeView === 'contact' ? 'active' : ''}`} 
            onClick={() => setActiveView('contact')}
          >
            [03] Contact 
          </button>
        </nav>
        
        <div className="mt-auto tech-font text-[10px] opacity-50">
          © {new Date().getFullYear()}<br/>
          ALL RIGHTS RESERVED
        </div>
      </aside>

      {/* RIGHT CONTENT */}
      <section className="content-area">
        {activeView === 'home' && <Hero />}
        {activeView === 'projects' && <Projects />}
        {activeView === 'experience' && <Experience />}
        {activeView === 'contact' && <Contact />}
      </section>

    </div>
  );
}

export default Home;
