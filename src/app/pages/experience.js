const ROLES = [
  {
    period: "May 2026 — Now",
    title: "Software Engineer Intern",
    org: "TheZealot",
    points: [
      "Building AI agents that autonomously produce social media content",
      "Working across the stack with Next.js, Python, and Firebase",
    ],
  },
  {
    period: "Aug 2025 — Now",
    title: "Computer Science Teaching Assistant",
    org: "Lehigh University",
    points: [
      "Mentor 50+ students across software engineering, computer architecture, and web development",
      "Hold 15+ office hours weekly for one-on-one support",
    ],
  },
  {
    period: "Aug 2025 — Dec 2025",
    title: "DevOps Engineer Intern",
    org: "BVA Bear's IT Solutions",
    points: [
      "Automated hiring and onboarding workflows to improve efficiency",
      "Built an internal web app for hiring and onboarding",
    ],
  },
  {
    period: "Aug 2024 — Jan 2026",
    title: "Vice President",
    org: "Lehigh Cybersecurity Club",
    points: [
      "Ran a 75+ participant hackathon and organized guest speaker events",
      "Grew membership ~50% through cross-organization workshops",
    ],
  },
  {
    period: "May 2025 — Jan 2026",
    title: "Vice President",
    org: "Lehigh ACM Club",
    points: [
      "Planned 5+ technical workshops and talks on AI, security, and web; grew membership 25%+",
      "Partnered with faculty and student groups to design events",
    ],
  },
  {
    period: "Aug 2024 — Aug 2025",
    title: "Research Assistant, Computer Vision",
    org: "Lehigh Bina Lab",
    points: [
      "Annotated 30,000+ frames of UAV hurricane footage for post-disaster recovery work",
      "Applied semantic segmentation models (Detectron2, DVIS++, TMaNNet) to damage assessment",
    ],
  },
];

const Experience = () => (
  <div className="timeline">
    {ROLES.map((role, i) => (
      <div className="exp-item" key={i}>
        <div className="exp-period">{role.period}</div>
        <div>
          <h3 className="exp-role">{role.title}</h3>
          <p className="exp-org">{role.org}</p>
          <ul className="exp-points">
            {role.points.map((p, j) => (
              <li key={j}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

export default Experience;
