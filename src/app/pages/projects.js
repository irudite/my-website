"use client";
import { useState } from "react";

const PROJECT_DATA = [
  {
    id: 1,
    title: "HTTP Server",
    year: "2026",
    tech: "C",
    short: "An HTTP/1.1 server written in C.",
    long: "An HTTP server built to get closer to the metal than the high-level languages I usually reach for. Written against C's socket library, it's an ongoing exercise in systems programming — a field I want to be far more fluent in.",
  },
  {
    id: 2,
    title: "Nota",
    year: "2026",
    tech: "Next.js · Spring Boot · DynamoDB · Docker",
    short: "A minimalist note-taking app.",
    long: "Nota decouples a React/Electron frontend from a Spring Boot backend in a strict three-layer architecture, with CRUD handled against AWS DynamoDB using UUID generation and timestamp indexing for sub-100ms retrieval. The goal was native-feeling desktop performance with web flexibility.",
  },
  {
    id: 3,
    title: "Fincrate",
    year: "2025",
    tech: "Next.js · Express · Supabase · Gemini",
    short: "An investment portfolio manager, built for a course project.",
    long: "Fincrate aggregates fragmented financial data, ingesting real-time market streams from the CoinGecko and Alpha Vantage APIs into interactive visualizations. Supabase's real-time layer keeps state consistent across multi-device sessions.",
  },
  {
    id: 4,
    title: "Ceiptr",
    year: "2025",
    tech: "React Native · AWS",
    short: "A pantry inventory app from a 24-hour hackathon.",
    long: "Built in a 24-hour sprint, Ceiptr digitizes receipts with a serverless AWS Lambda + DynamoDB backend, using AWS Textract to parse expiration dates and line items. It cuts manual food-waste tracking from minutes to seconds per trip.",
  },
  {
    id: 5,
    title: "FoundationFirst",
    year: "2025",
    tech: "React · Supabase · Gemini",
    short: "A housing-instability awareness app from a 24-hour hackathon.",
    long: "FoundationFirst uses the Gemini API to model realistic housing-crisis scenarios as a dynamic decision engine, generating constraint-based pathways from socioeconomic inputs rather than static lessons.",
  },
];

const Projects = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="work-list">
      {PROJECT_DATA.map((project) => {
        const open = openId === project.id;
        return (
          <article
            key={project.id}
            className={`work-item ${open ? "open" : ""}`}
            onClick={() => setOpenId(open ? null : project.id)}
          >
            <div className="work-row">
              <div className="work-head">
                <span className="work-title">{project.title}</span>
                <span className="work-short">{project.short}</span>
              </div>
              <div className="work-meta">
                <span className="work-year">{project.year}</span>
                <svg
                  className="work-chevron"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>

            <div className="work-detail">
              <div className="work-detail-inner">
                <div className="work-tech">{project.tech}</div>
                <p className="work-long">{project.long}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Projects;
