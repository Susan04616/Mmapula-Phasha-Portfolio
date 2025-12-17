
import { Project, SkillCategory, SocialLink } from './types';
import { Github, Linkedin, Mail, Layout, Database, Server, Cpu, Code2, Globe } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Mmapula Suzan Phasha",
  title: "Full-Stack Developer & Data Engineer",
  tagline: "Building impactful technology and changing the world through innovation.",
  bio: "Driven Software Developer with real-world experience, a sharp problem-solving mindset, and a passion for building smart, reliable, and user-focused solutions. Skilled in full-stack development, digital banking platforms, and modern technologies, I thrive on tackling challenging tasks and delivering high-quality results.",
  email: "susansusie04@gmail.com",
  location: "Johannesburg, Gauteng"
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/mmapula-phasha-9350452a4/",
    icon: "Linkedin"
  },
  {
    platform: "GitHub",
    url: "https://github.com/Susan04616",
    icon: "Github"
  },
  {
    platform: "Email",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=susansusie04@gmail.com",
    icon: "Mail"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "C#", "Kotlin", "TypeScript", "JavaScript", "SQL (Oracle, MySQL, PL/SQL)", "HTML/CSS"]
  },
  {
    category: "Backend Engineering",
    skills: ["Spring Boot", "RESTful APIs", "Temenos Infinity", "Apache Fineract", "Microservices", "Kafka", "JWT"]
  },
  {
    category: "Frontend & Mobile",
    skills: ["React", "Angular", "Ionic", "Temenos Visualizer", "Tailwind CSS", "Figma"]
  },
  {
    category: "Data & AI",
    skills: ["Oracle", "PostgreSQL", "MariaDB", "Generative AI API", "Voiceflow", "Data Ethics"]
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Analytical Thinking", "Team Collaboration", "Adaptability"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "marketgen",
    title: "MarketGen AI",
    description: "An innovative AI-powered marketing generation tool that assists businesses in creating targeted content. Leverages Generative AI to automate copy and strategy.",
    technologies: ["React", "GenAI API", "Tailwind", "Vercel"],
    liveLink: "https://marketgen2.vercel.app/",
    githubLink: "https://github.com/Susan04616",
    imageUrl: "https://placehold.co/800x600/1e293b/60a5fa?text=MarketGen+AI",
    category: "AI/ML"
  },
  {
    id: "sentiment",
    title: "Sentiment Analyzer",
    description: "A natural language processing application that analyzes text input to determine emotional tone. Useful for customer feedback and social listening.",
    technologies: ["Python", "NLP", "React", "API Integration"],
    liveLink: "https://sentimentanalyzes.vercel.app/",
    githubLink: "https://github.com/Susan04616",
    imageUrl: "https://placehold.co/800x600/1e293b/60a5fa?text=Sentiment+Analysis",
    category: "AI/ML"
  },
  {
    id: "voiceflow",
    title: "Customer Support Chatbot",
    description: "An intelligent conversational agent built on Voiceflow designed to handle customer inquiries, demonstrating flow logic and conversational design best practices.",
    technologies: ["Voiceflow", "Conversational AI", "No-Code/Low-Code"],
    liveLink: "https://creator.voiceflow.com/share/68e64a7384b166a6498eb31f/production",
    imageUrl: "https://placehold.co/800x600/1e293b/60a5fa?text=Voiceflow+Chatbot",
    category: "AI/ML"
  },
  {
    id: "gender-bias-audit",
    title: "Gender Bias Audit Report",
    description: "A data science project auditing gender bias in datasets and algorithmic models. Focuses on Responsible AI practices, fairness metrics, and bias mitigation strategies.",
    technologies: ["Python", "Jupyter", "Data Analysis", "AI Ethics"],
    githubLink: "https://github.com/durksie/GENDER-BIAS-AUDIT-REPORT",
    imageUrl: "https://placehold.co/800x600/1e293b/60a5fa?text=Bias+Audit+Report",
    category: "AI/ML"
  },
  {
    id: "employee-manager",
    title: "Employee Manager System",
    description: "A robust backend service for managing employee records. Features CRUD operations and server status monitoring.",
    technologies: ["Spring Boot", "Java", "REST API", "MySQL"],
    githubLink: "https://github.com/Susan04616/EmployeeManagerApp",
    imageUrl: "https://placehold.co/800x600/1e293b/60a5fa?text=Employee+Manager",
    category: "Backend"
  },
  {
    id: "rl-carriers",
    title: "RL Carriers Website",
    description: "A responsive logistics and freight management website. Features a modern user interface for streamlining shipping operations and tracking services.",
    technologies: ["PHP", "HTML", "SCSS", "CSS", "Bootstrap", "JavaScript"],
    liveLink: "https://rl-carrierswebsite.onrender.com",
    githubLink: "https://github.com/Susan04616/RL-CarriersWebsite",
    imageUrl: "https://placehold.co/800x600/1e293b/60a5fa?text=RL+Carriers",
    category: "Full-Stack"
  },
  {
    id: "mzansi-market",
    title: "Mzansi Market",
    description: "A digital marketplace platform empowering local South African businesses to list and sell products. Features user-friendly navigation and cart management.",
    technologies: ["React", "JavaScript", "CSS", "Frontend"],
    liveLink: "https://mzansimarket.vercel.app/",
    githubLink: "https://github.com/TshegofatsoSebone/Mzansi-market",
    imageUrl: "https://placehold.co/800x600/1e293b/60a5fa?text=Mzansi+Market",
    category: "Full-Stack"
  },
  {
    id: "flight-reservation",
    title: "Flight Reservation System",
    description: "A comprehensive airline booking system allowing users to search flights, manage reservations, and view booking history. Demonstrates full-stack CRUD implementation and database management.",
    technologies: ["Java", "Spring Boot", "Angular", "MySQL"],
    githubLink: "https://github.com/Susan04616/flightreservation",
    imageUrl: "https://placehold.co/800x600/1e293b/60a5fa?text=Flight+Reservation",
    category: "Full-Stack"
  }
];

export const SYSTEM_INSTRUCTION = `
You are a helpful portfolio assistant for Mmapula Suzan Phasha. 
Your goal is to answer questions about Mmapula's skills, experience, projects, and contact information based strictly on the following context derived from her CV.
Do not hallucinate. If you don't know an answer, suggest the user contact Mmapula via email.

--- CONTEXT START ---

PERSONAL DETAILS:
Name: Mmapula Suzan Phasha
Age: 23
Location: Johannesburg, Gauteng
Languages: Sepedi, English
Drivers Licence: No
Tagline: Driven Software Developer with a sharp problem-solving mindset and passion for building smart, reliable solutions.

CONTACT INFORMATION:
- Email: susansusie04@gmail.com
- LinkedIn: https://www.linkedin.com/in/mmapula-phasha-9350452a4/
- GitHub: https://github.com/Susan04616
- CV Download: https://capeitinitiative.sharepoint.com/sites/FNBAcademy2025JHB_dp1y4b/Shared%20Documents/General/Personal%20branding/Mmapula%20Phasha/Mmapula%20Phasha%20CV%20(2).pdf?CT=1765954146505&OR=ItemsView&wdOrigin=TEAMSFILE.FILEBROWSER.DOCUMENTLIBRARY

TECHNICAL PROFICIENCIES:
- Languages: Java, C#, Kotlin, JavaScript, HTML & CSS, SQL (Oracle, MySQL, PL/SQL).
- Frameworks & Tools: Spring Boot, Angular, RESTful APIs, Temenos Infinity (Digital Banking), Docker, Git.
- Systems: Mifos X / Apache Fineract, Kafka, JWT.

SOFT SKILLS:
- Problem Solving
- Analytical Thinking
- Team Collaboration
- Adaptability

EDUCATION:
- Diploma in Information Technology in Software Development from IIE Rosebank College.
- Currently in the FNB Academy Programme at CAPACITI (Oct 2025 – Present) upskilling in software development and AI.

WORK EXPERIENCE:
1. Mpilo Technologies (Pty) Ltd (Sep 2024 – Oct 2025)
   - Role: Involved in development and support of Mifos X / Apache Fineract platform.
   - Key Duties: 
     - Backend development with Java Spring Boot.
     - Frontend development using Angular.
     - Database enhancements in MariaDB/PostgreSQL.
     - Implemented new features, improved data retrieval, and supported smooth system operations.
     - Wrote and tested SQL scripts.
     - Handled integration through RESTful APIs and Kafka events with secure access via JWT.

REFERENCES:
- Tekane Sandy – Mentor (Intermediate Java Developer)
- Phone: 061 408 4309

PROJECTS (Key Highlights):
- Employee Manager App: https://github.com/Susan04616/EmployeeManagerApp
- RL Carriers Website: Logistics and freight management.
- MarketGen AI: AI-powered marketing tool.

INTERESTS:
- Content creation & videography
- Software Dev & AI

--- CONTEXT END ---

Be professional, concise, and friendly. 
When providing links, ensure they are formatted clearly.
If asked for the CV or Resume, provide the SharePoint link above or direct them to the "Download CV" button in the footer.
`;
