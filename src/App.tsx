import {
  ArrowUpRight,
  BookOpenText,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
} from "lucide-react";

const cvPath = "/OGUNDERO_STEPHEN_CV_Updated.docx";

const work = [
  {
    role: "Software Engineer Intern",
    company: "PropMind",
    dates: "27 Apr. 2026 - 19 Jun. 2026",
    location: "Remote, Spain",
    detail:
      "Accepted 13 Mar. 2026 for an 8-week software engineering internship focused on professional feature development, debugging, testing, and product implementation.",
  },
  {
    role: "Data Scientist",
    company: "Freelancer",
    dates: "Mar. 2025 - Present",
    location: "Remote",
    detail:
      "Building predictive modelling, ETL, EDA, and forecasting workflows using Python, SQL, Pandas, NumPy, Scikit-learn, and TensorFlow.",
  },
  {
    role: "Senior Software Engineer (Backend)",
    company: "MidroHub",
    dates: "Mar. 2020 - Nov. 2024",
    location: "Nigeria",
    detail:
      "Designed APIs, microservices, cloud deployments, database optimisation, CI/CD pipelines, and maintainable backend services.",
  },
  {
    role: "Software Engineer (Backend)",
    company: "Cervitech",
    dates: "Apr. 2019 - Feb. 2020",
    location: "Nigeria",
    detail:
      "Built backend services, CMS features, data extraction pipelines, authentication workflows, and automated testing for a mobile health product.",
  },
];

const projects = [
  {
    title: "Madupe",
    type: "Production-ready application",
    story:
      "A confidential product build that moved from idea to deployable application while protecting sensitive product logic and workflows.",
    build:
      "Worked across architecture, frontend/backend development, database design, authentication, QR-code flows, Redis-backed performance patterns, deployment, testing, UX, and maintainability.",
    stack: ["Full-stack", "QR codes", "Redis", "Auth", "Database design", "Deployment"],
    links: [],
    privateNote: "Private codebase",
  },
  {
    title: "FindMyScholarship AI",
    type: "Agentic scholarship discovery platform",
    story:
      "An AI agent that helps students and researchers discover scholarships, fellowships, studentships, and research grants from live authoritative sources.",
    build:
      "Implemented a two-track workflow combining national funding databases with university discovery, crawling, LLM extraction, and conversational follow-up handling.",
    stack: ["OpenAI Agents SDK", "MCP", "Gradio", "Playwright", "SQLite", "Docker"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Stephen-OG/FindMyScholarship",
      },
    ],
  },
  {
    title: "Safe Tweet",
    type: "Harmful content classifier",
    story:
      "A machine-learning project for detecting harmful or toxic social media content using NLP preprocessing and multiple model architectures.",
    build:
      "Built and evaluated Logistic Regression, SVC, and LSTM approaches on the BeaverTails dataset with feature engineering and model comparison.",
    stack: ["NLP", "LSTM", "SVC", "Scikit-learn", "TensorFlow"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Stephen-OG/SafeTweetDetector",
      },
    ],
  },
  {
    title: "Credit Risk Analysis",
    type: "Predictive analytics project",
    story:
      "A data science project for predicting loan default risk at origination using the German Credit Data dataset as a proxy for retail lending.",
    build:
      "Explored credit-risk features, prepared modelling workflows, and evaluated default-risk prediction patterns for practical lending decision support.",
    stack: ["Python", "Credit risk", "Classification", "EDA", "Model evaluation"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Stephen-OG/Credit-Risk-Analysis",
      },
    ],
  },
];

const skills = [
  "Python",
  "TypeScript",
  "Node.js",
  "NestJS",
  "FastAPI",
  "ASP.NET Core",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "OpenAI Agents",
  "MCP",
  "Pandas",
  "Scikit-learn",
  "TensorFlow",
];

function Nav() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Stephen Ogundero home">
        stephen.dev
      </a>
      <nav aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href="#notes">Notes</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function TerminalCard() {
  return (
    <div className="terminal-card" aria-label="Stephen profile code snippet">
      <div className="terminal-bar">
        <span />
        <span />
        <span />
        <p>profile.ts</p>
      </div>
      <pre>
        <code>{`const stephen = {
  location: "Luton, UK",
  role: "Software Engineer",
  focus: ["Backend", "Agentic AI", "Data", "Production Apps"],
  openToWork: true
}`}</code>
      </pre>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="location">
          <MapPin size={16} />
          Luton, United Kingdom
        </p>
        <h1>Software Engineer, AI Builder & Data Science MSc Candidate.</h1>
        <p className="hero-text">
          I build production-ready applications, agentic AI tools, backend
          systems, and data workflows with a practical delivery mindset.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button primary" href="#projects">
            View projects <ArrowUpRight size={18} />
          </a>
          <a className="button ghost" href="#contact">
            Contact
          </a>
          <a className="button text" href={cvPath} download>
            <Download size={18} />
            Download CV
          </a>
        </div>
      </div>
      <TerminalCard />
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-heading">
        <span>01</span>
        <h2>About</h2>
      </div>
      <div className="about-grid">
        <p>
          I am a software engineer with 6+ years across backend engineering,
          data science, QA, cloud deployment, and independent product builds.
          I am currently pursuing an MSc in Data Science at the University of
          Hertfordshire, with a growing focus on agentic AI and production app
          delivery.
        </p>
        <div className="proof-grid">
          <div>
            <strong>6+</strong>
            <span>years engineering experience</span>
          </div>
          <div>
            <strong>2026</strong>
            <span>MSc Data Science expected</span>
          </div>
          <div>
            <strong>AI</strong>
            <span>agentic tools and ML workflows</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section" id="work">
      <div className="section-heading">
        <span>02</span>
        <h2>Work</h2>
      </div>
      <div className="timeline">
        {work.map((item) => (
          <article className="work-item" key={`${item.company}-${item.role}`}>
            <div>
              <BriefcaseBusiness size={20} />
            </div>
            <div>
              <p className="dates">{item.dates}</p>
              <h3>
                {item.role} <span>{item.company}</span>
              </h3>
              <p className="work-location">
                <MapPin size={15} />
                {item.location}
              </p>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <span>03</span>
        <h2>Projects</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-top">
              <Code2 size={22} />
              <p>{project.type}</p>
            </div>
            <h3>{project.title}</h3>
            <p>{project.story}</p>
            <p className="build-note">{project.build}</p>
            <div className="stack-list" aria-label={`${project.title} stack`}>
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="project-links" aria-label={`${project.title} links`}>
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  <Github size={16} />
                  {link.label}
                </a>
              ))}
              {project.privateNote ? <span>{project.privateNote}</span> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Notes() {
  return (
    <section className="section notes" id="notes">
      <div className="section-heading">
        <span>04</span>
        <h2>Notes</h2>
      </div>
      <div className="notes-panel">
        <BookOpenText size={24} />
        <div>
          <p className="note-meta">DEV Community · Dec 11, 2025</p>
          <h3>Understanding Overfitting in Neural Networks (TensorFlow-CNN)</h3>
          <p>
            A structured Fashion-MNIST experiment explaining how overfitting
            appears in CNN training curves, then comparing Dropout, L2
            regularisation, and Early Stopping as mitigation techniques.
          </p>
          <a
            className="inline-link"
            href="https://dev.to/stephen_ogundero_7c2f6842/understanding-overfitting-in-neural-networks-tensorflow-cnn-353b"
            target="_blank"
            rel="noreferrer"
          >
            Read article <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-heading">
        <span>05</span>
        <h2>Contact</h2>
      </div>
      <div className="contact-panel">
        <div>
          <Sparkles size={24} />
          <h3>Open to software, AI, data, and automation roles.</h3>
          <p>
            I am especially interested in teams building useful products with
            strong backend foundations, AI workflows, or data-heavy systems.
          </p>
        </div>
        <div className="contact-links">
          <a href="mailto:ogunderostephen@gmail.com">
            <Mail size={18} />
            Email
          </a>
          <a href="https://github.com/Stephen-OG" target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/stephen-ogundero-5b1814124"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a href={cvPath} download>
            <Download size={18} />
            CV
          </a>
        </div>
      </div>
    </section>
  );
}

export function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Projects />
        <section className="section skills-strip" aria-label="Technical skills">
          <Terminal size={22} />
          <div>
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>
        <Notes />
        <Contact />
      </main>
    </>
  );
}
