export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  imageUrl: string;
  category: 'AI/ML' | 'Full-Stack' | 'Mobile' | 'Backend';
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
