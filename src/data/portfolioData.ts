export interface Project {
  id: string;
  name: string;
  role: string;
  description: string;
  problem: string;
  solution: string;
  contributions: string[];
  technologies: string[];
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  projects: {
    name: string;
    details: string[];
  }[];
  technologies: string[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; projectsUsed: string[] }[];
}

export const personalInfo = {
  fullName: "Shubhjit Bobade",
  title: "Full Stack Developer (MERN)",
  subTitle: "GenAI & Scalable Architecture Specialist",
  experienceYears: 3,
  location: "Pune, Maharashtra, India",
  email: "shubhjit.bobade@gmail.com",
  phone: "+91 7040279070",
  linkedin: "https://linkedin.com/in/shubhjit-bobade",
  github: "https://github.com/shubhjitbobade07",
  availability: "Open to opportunities / Immediate",
  summary: "Full Stack Developer with 3 years of experience building enterprise web applications using React.js, Node.js, Express.js, and MongoDB. Skilled in REST API design, scalable frontend architecture, database optimization, and Agile/Scrum delivery. Recently expanded scope to include Generative AI feature integration (Gemini, Runway, Kling APIs) into production workflows.",
  aboutStory: "I am a Full Stack Developer who thrives at the intersection of robust backend scalability and premium frontend experiences. Over the past 3 years, I have built complex enterprise systems—ranging from metadata-driven dynamic form engines to multi-stage Generative AI image/video workflows. My design philosophy is rooted in technical precision, performance optimization, and building products that provide real business value. I approach engineering with a focus on writing clean, maintainable code, implementing strict security layers like Role-Based Access Control, and constantly optimizing workflows to minimize latency and boost reliability."
};

export const experiences: Experience[] = [
  {
    company: "Prospera Soft",
    role: "Full Stack Developer",
    duration: "Aug 2023 – Present",
    description: "Built scalable web architectures and integrated cutting-edge AI technologies for enterprise and generative applications.",
    projects: [
      {
        name: "Enterprise Data Governance Platform",
        details: [
          "Developed enterprise-grade REST APIs using Node.js, Express.js, and MongoDB for core modules including user management, audit logging, inventory, and data source onboarding.",
          "Built a metadata-driven dynamic onboarding engine that generated React forms from JSON connector configurations, reducing connector integration time by 75%.",
          "Implemented Role-Based Access Control (RBAC), reusable global filtering, and optimized complex MongoDB indexing and queries, reducing database response latency by 35%.",
          "Designed and implemented a bulk data onboarding module processing 10,000+ records per batch using dynamic Excel templates with automated schema validation and partial success handling.",
          "Developed background cron job schedulers for metadata synchronization, automated report generation, inventory updates, and scheduled AWS S3 file processing, achieving 99.9% sync reliability.",
          "Led migration of the application backend from Node.js 14 to Node.js 18, resolving dependency compatibility issues and improving runtime efficiency by 20%."
        ]
      },
      {
        name: "AI-Powered Advertisement Platform (Generative AI)",
        details: [
          "Integrated Runway AI, Gemini, and Kling APIs to build configurable, multi-stage image and video generation workflows for automated ad creation.",
          "Developed reusable React components and workspace modules with interactive canvas states for AI-powered content generation and product shoot mockups.",
          "Collaborated with backend teams to integrate Python services, optimize API workflows, and reduce GenAI asset generation latency by 25%.",
          "Enhanced page load speed and SEO through server-side prerendering, image optimization, and dynamic metadata injection, boosting page visibility by 30%."
        ]
      }
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "FastAPI", "Python", "Gemini API", "Runway API", "Kling API", "AWS S3", "Docker", "Redux Toolkit", "WebSockets"]
  }
];

export const projects: Project[] = [
  {
    id: "data-governance",
    name: "Enterprise Data Governance Platform",
    role: "Core Full-Stack Developer",
    description: "An enterprise platform built for managing high-volume data source onboarding, automated schema validations, and role-based metadata indexing.",
    problem: "Data source onboarding was slow, and manual form generation took too much development time. Database query responses delayed platform operations, and schema parsing was prone to user error.",
    solution: "Built a JSON-driven dynamic form engine to eliminate hardcoded UI elements, optimized MongoDB indexes, and implemented batch-processing with schema validation.",
    contributions: [
      "Designed and implemented Node.js backend REST APIs for user management and audit logs.",
      "Developed the metadata-driven React form renderer, reducing configuration-to-UI times by 75%.",
      "Created bulk Excel onboarding parser handling 10,000+ records asynchronously.",
      "Optimized MongoDB query performance, decreasing response latencies by 35%."
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "Redux Toolkit", "Excel Template Parser", "RBAC", "AWS S3"],
    highlights: ["75% reduction in connector integration time", "35% lower database response latency", "Handles 10k+ records per batch"]
  },
  {
    id: "ai-ad-platform",
    name: "AI-Powered Advertisement Platform",
    role: "Lead Frontend & AI Integration Engineer",
    description: "A generative ad-tech platform orchestrating multi-stage image/video workflows with top AI models for dynamic asset creation.",
    problem: "Ad creators spent hours manually scripting, editing, and mocking up products. Integrating multiple generation models (Runway, Kling, Gemini) generated high latency and complex visual state issues.",
    solution: "Built a React-based workspace canvas with interactive states to edit AI mockups, and created an orchestrator to schedule model outputs.",
    contributions: [
      "Integrated Runway AI, Gemini, and Kling APIs into configurable workflow templates.",
      "Developed the interactive HTML5 canvas space for asset layout editing.",
      "Collaborated with backend teams to optimize API workflows, saving 25% on asset generation latency.",
      "Implemented SEO optimization and server-side prerendering for final ad landing previews."
    ],
    technologies: ["React.js", "Redux Toolkit", "Gemini API", "Runway API", "Kling API", "Python", "FastAPI", "Server-Side Prerendering"],
    highlights: ["25% latency reduction in asset creation", "30% boost in SEO page visibility", "Interactive workspace canvas support"]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", projectsUsed: ["Enterprise Data Governance Platform", "AI-Powered Advertisement Platform"] },
      { name: "TypeScript", projectsUsed: ["Enterprise Data Governance Platform", "AI-Powered Advertisement Platform"] },
      { name: "Python", projectsUsed: ["AI-Powered Advertisement Platform"] },
      { name: "Java", projectsUsed: [] }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", projectsUsed: ["Enterprise Data Governance Platform", "AI-Powered Advertisement Platform"] },
      { name: "Redux Toolkit", projectsUsed: ["Enterprise Data Governance Platform", "AI-Powered Advertisement Platform"] },
      { name: "Context API", projectsUsed: ["Enterprise Data Governance Platform"] },
      { name: "HTML5 & CSS3", projectsUsed: ["Enterprise Data Governance Platform", "AI-Powered Advertisement Platform"] },
      { name: "Tailwind CSS", projectsUsed: ["AI-Powered Advertisement Platform"] },
      { name: "Material UI", projectsUsed: ["Enterprise Data Governance Platform"] },
      { name: "Styled Components", projectsUsed: [] }
    ]
  },
  {
    category: "Backend & Auth",
    skills: [
      { name: "Node.js", projectsUsed: ["Enterprise Data Governance Platform"] },
      { name: "Express.js", projectsUsed: ["Enterprise Data Governance Platform"] },
      { name: "REST APIs", projectsUsed: ["Enterprise Data Governance Platform", "AI-Powered Advertisement Platform"] },
      { name: "FastAPI", projectsUsed: ["AI-Powered Advertisement Platform"] },
      { name: "JWT / OAuth 2.0", projectsUsed: ["Enterprise Data Governance Platform"] },
      { name: "WebSockets", projectsUsed: [] },
      { name: "RBAC (Role-Based Access Control)", projectsUsed: ["Enterprise Data Governance Platform"] }
    ]
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MongoDB", projectsUsed: ["Enterprise Data Governance Platform"] },
      { name: "MySQL", projectsUsed: [] },
      { name: "AWS S3", projectsUsed: ["Enterprise Data Governance Platform"] },
      { name: "Supabase", projectsUsed: [] },
      { name: "Cloudflare Turnstile", projectsUsed: [] },
      { name: "Docker", projectsUsed: [] }
    ]
  },
  {
    category: "AI / GenAI Integration",
    skills: [
      { name: "Gemini API", projectsUsed: ["AI-Powered Advertisement Platform"] },
      { name: "Runway API", projectsUsed: ["AI-Powered Advertisement Platform"] },
      { name: "Kling API", projectsUsed: ["AI-Powered Advertisement Platform"] },
      { name: "LLM API Integration", projectsUsed: ["AI-Powered Advertisement Platform"] }
    ]
  }
];

export const education = [
  {
    degree: "B.Tech, Information Technology",
    institution: "Vishwakarma Institute of Information Technology, Pune",
    duration: "Jul 2020 – Jun 2023",
    details: "CGPA: 8.76"
  },
  {
    degree: "Diploma, Information Technology",
    institution: "SVPM's ITE, Malegaon (BK)",
    duration: "Jul 2018 – Jun 2020",
    details: "Percentage: 90.25%"
  }
];
