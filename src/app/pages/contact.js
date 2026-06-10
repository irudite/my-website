const LINKS = [
  { label: "Email", value: "kerricktruong@gmail.com", href: "mailto:kerricktruong@gmail.com" },
  { label: "GitHub", value: "github.com/irudite", href: "https://github.com/irudite" },
  { label: "LinkedIn", value: "linkedin.com/in/kerrick-truong", href: "https://www.linkedin.com/in/kerrick-truong/" },
];

const Contact = () => (
  <div>
    <p className="contact-intro">
      Open to internships, research, and collaborative projects. Email is the
      best way to reach me.
    </p>

    <div className="contact-links">
      {LINKS.map((l) => (
        <div key={l.label} className="contact-row">
          <span className="contact-label">{l.label}</span>
          <a
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="contact-value"
          >
            {l.value}
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Contact;
