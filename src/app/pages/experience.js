const Experience = () => (
  <div className="animate-in fade-in duration-500">
    <h2 className="tech-font text-xl mb-8 border-b border-black pb-2">FIG_02: Personnel File</h2>
    
    <div className="grid grid-cols-[120px_1fr] gap-4 mb-8">
      <div className="tech-font font-bold text-sm">AUG 2025 — NOW</div>
      <div>
        <h3 className="font-bold text-lg">Computer Science Teaching Assistant</h3>
        <p className="italic text-sm mb-2">Lehigh University</p>
        <ul className="list-disc pl-4 text-sm space-y-1">
          <li>Mentor cohorts of 50+ students on CS topics (Software Engineering, Computer Architecture, Web Development)</li>
          <li>Host 15+ office hours weekly for one-on-one support to strengthen students' foundation</li>
        </ul>
      </div>

      <div className="tech-font font-bold text-sm">AUG 2025 — DEC 2025</div>
      <div>
        <h3 className="font-bold text-lg">DevOps Engineer Intern</h3>
        <p className="italic text-sm mb-2">BVA Bear's IT Solutions</p>
        <ul className="list-disc pl-4 text-sm space-y-1">
          <li>Automated hiring & on-boarding processes to increase company efficiency</li>
          <li>Created a web app for hiring and onboarding with intuitive UI design</li>
        </ul>
      </div>

      <div className="tech-font font-bold text-sm">AUG 2024 — JAN 2026</div>
      <div>
        <h3 className="font-bold text-lg">Vice President</h3>
        <p className="italic text-sm mb-2">Lehigh University Cybersecurity Club</p>
        <ul className="list-disc pl-4 text-sm space-y-1">
          <li>Coordinated a successful hackathon with 75+ participants and arranged guest speaking events, enhancing engagement and knowledge-sharing within the club.</li>
          <li>Served as an executive board member of the Cybersecurity Club, planning and organizing workshops that increased club membership by 50% through collaboration with other student organizations.</li>
        </ul>
      </div>

      <div className="tech-font font-bold text-sm">MAY 2025 — JAN 2026</div>
      <div>
        <h3 className="font-bold text-lg">Vice President</h3>
        <p className="italic text-sm mb-2">Lehigh University ACM Club</p>
        <ul className="list-disc pl-4 text-sm space-y-1">
          <li>Led cross-functional teams to plan 5+ technical workshops and speaker events on AI, security, and web technologies, enhancing communication skills, collaboration, and team environments while boosting membership by over 25%.</li>
          <li>Collaborated with faculty and student organizations to design and implement events that strengthened user experience and promoted professional software development practices.</li>
        </ul>
      </div>

      <div className="tech-font font-bold text-sm">AUG 2024 — AUG 2025</div>
      <div>
        <h3 className="font-bold text-lg">Research Assistant: Computer Vision</h3>
        <p className="italic text-sm mb-2">Lehigh University Bina Lab</p>
        <ul className="list-disc pl-4 text-sm space-y-1">
          <li>Developed computer vision and machine learning solutions to aid post-natural disaster recovery by leveraging annotation tools like V7 Darwin and LabelBox to analyze 30,000+ frames of UAV hurricane footage</li>
          <li>Utilized state-of-the-art semantic segmentation models, including Detectron2, DVIS++, and TMaNNet, to improve automated damage assessment compared to instance segmentation models</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Experience;
