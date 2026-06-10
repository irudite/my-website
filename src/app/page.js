"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./globals.css";

import ShaderBackground from "./components/ShaderBackground.js";
import Projects from "./pages/projects.js";
import Experience from "./pages/experience.js";
import Contact from "./pages/contact.js";

const MENU = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Screen transition
const screen = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.28, ease: "easeIn" } },
};

// Staggered children
const list = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const item = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const Home = () => {
  const [started, setStarted] = useState(false);
  const [view, setView] = useState("home");

  return (
    <div className="page">
      <ShaderBackground />

      <div className="content">
        <AnimatePresence mode="wait">
          {!started ? (
            /* ---------- START SCREEN ---------- */
            <motion.div
              key="start"
              className="start-screen"
              variants={screen}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.p className="start-eyebrow" variants={item} initial="initial" animate="animate">
                Kerrick Truong
              </motion.p>
              <motion.h1 className="start-title" variants={item} initial="initial" animate="animate">
                Portfolio
              </motion.h1>

              <motion.button
                className="start-btn"
                onClick={() => setStarted(true)}
                variants={item}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  ▶ Press Start
                </motion.span>
              </motion.button>
            </motion.div>
          ) : (
            /* ---------- GAME UI ---------- */
            <motion.div
              key="app"
              className="game"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.4 } }}
            >
              {/* Menu buttons */}
              <motion.nav className="menu" variants={list} initial="initial" animate="animate">
                {MENU.map((m) => (
                  <motion.button
                    key={m.id}
                    className={`menu-btn ${view === m.id ? "active" : ""}`}
                    onClick={() => setView(m.id)}
                    variants={item}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <span className="menu-cursor">▶</span>
                    {m.label}
                  </motion.button>
                ))}
              </motion.nav>

              {/* Active screen */}
              <div className="screen-wrap">
                <AnimatePresence mode="wait">
                  <motion.section
                    key={view}
                    className="screen"
                    variants={screen}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {view === "home" && (
                      <div className="screen-home">
                        <h2 className="screen-name">Kerrick Truong</h2>
                        <p className="screen-lede">
                          Computer Science student working across systems and the web.
                        </p>
                        <p className="screen-hint">Select a destination from the menu.</p>
                      </div>
                    )}
                    {view === "projects" && (
                      <div className="screen-body">
                        <h2 className="screen-heading">Projects</h2>
                        <Projects />
                      </div>
                    )}
                    {view === "experience" && (
                      <div className="screen-body">
                        <h2 className="screen-heading">Experience</h2>
                        <Experience />
                      </div>
                    )}
                    {view === "contact" && (
                      <div className="screen-body">
                        <h2 className="screen-heading">Contact</h2>
                        <Contact />
                      </div>
                    )}
                  </motion.section>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;
