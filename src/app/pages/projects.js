import { useState } from 'react';

// --- PROJECT DATA ---
const PROJECT_DATA = [
  {
    id: 1,
    title: "HTTP Server",
    year: "2026",
    tech: "C",
    status: "IN-PROGRESS",
    short: "A C implementation of HTTP 1.1.",
    long: "This HTTP server implementation was used to learn a relatively lower-level language compared to the normal high-level language. I am currently working on the implementation and am using C's socket library to get most of the project done. I was also further motivated to start this project because I have a strong interest in systems programming and would like to be more literate in the field."
  },
  {
    id: 2,
    title: "Nota",
    year: "2026",
    tech: "NEXT / SPRINGBOOT / DYNAMODB / DOCKER",
    status: "COMPLETED",
    short: "A minimalist note taking app.",
    long: "Nota was engineered to solve a specific latency problem in digital note-taking. By decoupling the frontend (React/Electron) from a robust Spring Boot backend, I implemented a strict 3-layer architecture that handles CRUD operations with extreme precision. The system integrates directly with AWS DynamoDB, utilizing automatic UUID generation and timestamp indexing to achieve sub-100ms retrieval times. It bridges the gap between web-based flexibility and native desktop performance."
  },
  {
    id: 3,
    title: "Fincrate",
    year: "2025",
    tech: "NEXT / EXPRESS / SUPABASE / GEMINI",
    status: "COMPLETED",
    short: "A investment portfolio management web app made for a college course project.",
    long: "Fincrate serves as a central aggregation point for fragmented financial data. The system ingests real-time market streams via CoinGecko and Alpha Vantage APIs, processing them into interactive visualizations that increased user engagement by 30%. The core challenge was state synchronization; utilizing Supabase’s real-time capabilities, I architected a cloud-based storage system that ensures 100% data consistency across multi-device user sessions."
  },
  {
    id: 4,
    title: "Ceiptr",
    year: "2025",
    tech: "REACT NATIVE / AWS",
    status: "COMPLETED",
    short: "A digitized pantry inventory management app created for a 24-hour hackathon.",
    long: "Born from a 24-hour rapid prototyping sprint, Ceiptr automates the digitization of physical procurement. I architected a serverless backend using AWS Lambda and DynamoDB that processes receipt images in under 3 seconds. By leveraging AWS Textract to parse expiration dates and line items, the application reduces manual food waste tracking time from 5 minutes to just 15 seconds per trip. It represents a practical application of computer vision in daily logistics."
  },
  {
    id: 5,
    title: "FoundationFirst",
    year: "2025",
    tech: "REACT / SUPABASE / GEMINI",
    status: "COMPLETED",
    short: "A housing instability awareness app created for a 24-hour hackathon.",
    long: "Foundation First utilizes the generative capabilities of the Gemini API to model realistic housing crisis scenarios. Unlike static educational tools, this application functions as a dynamic decision engine; it ingests real-time socioeconomic variables to generate unique, constraint-based user pathways. The React frontend manages complex state transitions while the LLM integration provides context-aware feedback, effectively simulating the systemic friction of housing instability."
  }
];

const Projects = () => {
  // State to track if a specific project is open
  const [selectedId, setSelectedId] = useState(null);

  // Helper to find the active project data
  const activeProject = PROJECT_DATA.find(p => p.id === selectedId);

  // VIEW 1: THE DETAIL "FILE" VIEW
  if (selectedId && activeProject) {
    return (
      <div className="animate-in fade-in duration-300">
        {/* Navigation / Back Button */}
        <button 
          onClick={() => setSelectedId(null)}
          className="tech-font text-sm mb-8 hover:text-[#003366] group flex items-center gap-2"
        >
          <span>←</span> <span className="group-hover:underline">RETURN TO INDEX</span>
        </button>

        {/* Project Header */}
        <div className="border-b-2 border-black pb-4 mb-8">
          <div className="flex justify-between items-end mb-2">
            <span className="tech-font text-xs bg-black text-white px-2 py-1">
              FIG_0{activeProject.id}
            </span>
            <span className="tech-font text-xs border border-black px-2 py-1">
              STATUS: {activeProject.status}
            </span>
          </div>
          <h2 className="text-4xl font-bold leading-tight">{activeProject.title}</h2>
        </div>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8 text-sm border-b border-black pb-8">
          <div>
            <span className="tech-font block opacity-50 mb-1">Year</span>
            <span className="font-bold">{activeProject.year}</span>
          </div>
          <div>
            <span className="tech-font block opacity-50 mb-1">Technology</span>
            <span className="font-bold">{activeProject.tech}</span>
          </div>
        </div>

        {/* Long Description */}
        <div className="prose max-w-none">
          <p className="text-lg leading-relaxed font-serif">
            {activeProject.long}
          </p>
          
          <div className="mt-8 border border-dashed border-black bg-[#E8E4DE] h-64 flex items-center justify-center">
             <span className="tech-font text-xs opacity-50">[ NEEDS_IMAGE ]</span>
          </div>
        </div>
      </div>
    );
  }

  // VIEW 2: THE INDEX LIST VIEW (Default)
  return (
    <div className="animate-in fade-in duration-500">
      <h2 className="tech-font text-xl mb-8 border-b border-black pb-2">
        FIG_01: Index of Works
      </h2>
      
      <div className="space-y-8">
        {PROJECT_DATA.map((project) => (
          <div 
            key={project.id}
            onClick={() => setSelectedId(project.id)}
            className="group cursor-pointer block"
          >
            <div className="transition-transform duration-200 group-hover:translate-x-2">
              <div className="tech-font text-xs text-gray-500 mb-1">
                {project.year} // {project.tech}
              </div>
              
              <h3 className="text-2xl font-bold group-hover:text-[#003366] group-hover:underline decoration-2 underline-offset-4">
                {project.title}
              </h3>
              
              <p className="mt-2 text-sm opacity-80 max-w-lg font-serif">
                {project.short} <span className="tech-font text-[10px] ml-2 opacity-50">[READ MORE]</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
