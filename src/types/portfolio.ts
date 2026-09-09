export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  category: 'AI/ML' | 'Web' | 'Android' | 'IoT' | 'Data';
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  cgpa?: string;
  coursework: string[];
  achievements?: string[];
  researchInterests?: string[];
}

export interface LeadershipItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  bullets: string[];
}
