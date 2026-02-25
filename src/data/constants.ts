// NOTE: SkillNames enum VALUES must match the Spline 3D keycap object names exactly.
export enum SkillNames {
  // --- Keycaps with matching logos baked in ---
  HTML   = "html",
  CSS    = "css",
  REACT  = "react",
  NODEJS = "nodejs",
  GIT    = "git",
  GITHUB = "github",
  DOCKER = "docker",
  LINUX  = "linux",

  // --- Real keycaps (newly found) ---
  JS      = "js",       // JavaScript  → js keycap
  TS      = "ts",       // TypeScript  → ts keycap
  PYTHON  = "vim",      // Python      → vim keycap
  EXPRESS = "express",  // Express.js  → express keycap

  // --- Freed keycaps now assigned their actual skill ---
  TAILWINDCSS = "tailwind", // Tailwind CSS → tailwind keycap
  NEXTJS      = "nextjs",   // Next.js     → nextjs keycap

  // --- Engineering skills assigned to leftover keycaps ---
  SIGNAL_PROCESSING = "vue", // Signal Processing → vue keycap
  TIME_SERIES       = "npm", // Time-Series       → npm keycap
  CONTROL_SYSTEMS   = "aws", // Control Systems   → aws keycap

  // --- Remapped dead keycaps (skill ≠ keycap logo) ---
  FASTAPI = "firebase",  // FastAPI  → firebase keycap
  NUMPY   = "mongodb",   // NumPy    → mongodb keycap
  PANDAS  = "postgres",  // Pandas   → postgres keycap
  SQLITE  = "prettier",  // SQLite   → prettier keycap
  THREEJS = "vercel",    // Three.js → vercel keycap
  LEAFLET = "nginx",     // Leaflet  → nginx keycap
  MATLAB  = "wordpress", // MATLAB   → wordpress keycap
}

export type Skill = {
  id: number;
  name: string;         // Must match the Spline keycap object name
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  // --- Proper keycaps ---
  [SkillNames.HTML]: {
    id: 1, name: "html", label: "HTML",
    shortDescription: "The skeleton of every page on the internet.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 2, name: "css", label: "CSS",
    shortDescription: "Making things look good, one property at a time.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 3, name: "react", label: "React",
    shortDescription: "Component-based UI that actually scales.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 4, name: "nodejs", label: "Node.js",
    shortDescription: "JavaScript on the server — surprisingly capable.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.GIT]: {
    id: 5, name: "git", label: "Git",
    shortDescription: "Version control — the safety net under everything.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 6, name: "github", label: "GitHub",
    shortDescription: "Where all the projects live and PRs get reviewed.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 7, name: "docker", label: "Docker",
    shortDescription: "Containerize it and ship it anywhere.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 8, name: "linux", label: "Linux",
    shortDescription: "Comfortable in the terminal, no GUI needed.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },

  // --- Real keycaps (newly found) ---
  [SkillNames.JS]: {
    id: 9, name: "js", label: "JavaScript",
    shortDescription: "The language of the web — chaos included.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 10, name: "ts", label: "TypeScript",
    shortDescription: "Types that actually catch your bugs before runtime does.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 11, name: "vim", label: "Python",
    shortDescription: "From data analysis to backend APIs — Python does it all.",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 12, name: "express", label: "Express.js",
    shortDescription: "Minimal, fast Node.js web framework.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },

  // --- Freed keycaps with their actual skill ---
  [SkillNames.TAILWINDCSS]: {
    id: 13, name: "tailwind", label: "Tailwind CSS",
    shortDescription: "Utility-first CSS — style without leaving HTML.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 14, name: "nextjs", label: "Next.js",
    shortDescription: "React with SSR, routing, and deployment built in.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  // --- Engineering skills on leftover keycaps ---
  [SkillNames.SIGNAL_PROCESSING]: {
    id: 15, name: "vue", label: "Signal Processing",
    shortDescription: "Filtering, FFT, and feature extraction from sensor data.",
    color: "#8e44ad",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scipy/scipy-original.svg",
  },
  [SkillNames.TIME_SERIES]: {
    id: 16, name: "npm", label: "Time-Series",
    shortDescription: "Pattern detection and feature extraction from temporal data.",
    color: "#27ae60",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  [SkillNames.CONTROL_SYSTEMS]: {
    id: 17, name: "aws", label: "Control Systems",
    shortDescription: "PID, state-space, and feedback control design.",
    color: "#c0392b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
  },

  // --- Remapped dead keycaps ---
  [SkillNames.FASTAPI]: {
    id: 18, name: "firebase", label: "FastAPI",
    shortDescription: "Fast, modern Python APIs with automatic docs built in.",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.NUMPY]: {
    id: 19, name: "mongodb", label: "NumPy",
    shortDescription: "Numerical computing — the backbone of data analysis.",
    color: "#4dabcf",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  [SkillNames.PANDAS]: {
    id: 20, name: "postgres", label: "Pandas",
    shortDescription: "DataFrames make messy data manageable.",
    color: "#150458",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  [SkillNames.SQLITE]: {
    id: 21, name: "prettier", label: "SQLite",
    shortDescription: "Lightweight, embedded, and surprisingly powerful.",
    color: "#003b57",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
  [SkillNames.THREEJS]: {
    id: 22, name: "vercel", label: "Three.js",
    shortDescription: "3D graphics in the browser — particles and all.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  },
  [SkillNames.LEAFLET]: {
    id: 23, name: "nginx", label: "Leaflet",
    shortDescription: "Interactive maps that actually feel good to use.",
    color: "#199900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leaflet/leaflet-original.svg",
  },
  [SkillNames.MATLAB]: {
    id: 24, name: "wordpress", label: "MATLAB",
    shortDescription: "Simulation, control design, and signal analysis.",
    color: "#e16737",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "2025",
    endDate: "Present",
    title: "Full-Stack Developer",
    company: "QuickFix",
    description: [
      "Built the company's Android and iOS mobile applications using Swift and Kotlin.",
      "Implemented backend services to support the mobile apps end-to-end.",
    ],
    skills: [
      SkillNames.TS,
      SkillNames.NODEJS,
      SkillNames.GIT,
      SkillNames.DOCKER,
    ],
  },
  {
    id: 2,
    startDate: "2021",
    endDate: "2023",
    title: "Front-End Developer",
    company: "Skipperi",
    description: [
      "Participated in development and maintenance of the company's website.",
      "Programmed mainly in TypeScript using Web APIs.",
      "Fixed bugs, improved UX flows, and supported deployments.",
    ],
    skills: [
      SkillNames.TS,
      SkillNames.JS,
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.GIT,
    ],
  },
  {
    id: 3,
    startDate: "2025",
    endDate: "5 months",
    title: "Monitoring Team",
    company: "Wolt",
    description: [
      "Monitored service health and operational stability using dashboards and alerting workflows.",
      "Investigated incidents and identified probable root causes.",
    ],
    skills: [
      SkillNames.LINUX,
      SkillNames.GIT,
    ],
  },
];

export type Education = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  institution: string;
  description: string[];
  skills?: SkillNames[];
};

export const EDUCATION: Education[] = [
  {
    id: 1,
    startDate: "2021",
    endDate: "2026",
    title: "M.Sc. Computer Engineering",
    institution: "Åbo Akademi University",
    description: [
      "Specializing in Computational Data Analytics, graduating 2026.",
      "Coursework in mathematics, machine learning, data engineering, automation/control, distributed systems, signal processing, and system safety (STAMP/STPA).",
      "Building real-world projects applying control theory, data visualization, and full-stack development.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.NUMPY,
      SkillNames.PANDAS,
      SkillNames.MATLAB,
      SkillNames.SIGNAL_PROCESSING,
      SkillNames.CONTROL_SYSTEMS,
      SkillNames.TIME_SERIES,
      SkillNames.REACT,
      SkillNames.TS,
      SkillNames.GIT,
      SkillNames.LINUX,
    ],
  },
  {
    id: 2,
    startDate: "2018",
    endDate: "2019",
    title: "NCO School · Coastal Jaeger Recon",
    institution: "Finnish Defence Forces",
    description: [
      "Completed 12-month conscript service.",
      "Specialized as NCO in Coastal Jaeger Recon unit.",
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
  ],
  dark: [
    "Welcome back to the dark side!",
  ],
};
