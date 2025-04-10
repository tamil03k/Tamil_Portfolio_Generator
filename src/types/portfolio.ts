export interface UserData {
  name: string;
  profession: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  skills: string[];
  projects: Project[];
  education: Education[];
  experience: Experience[];
  socialLinks: SocialLinks;
  imageUrl?: string;
  logoUrl?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Education {
  institution: string;
  degree: string;
  year : string;
}

export interface Experience {
  company: string;
  position: string;
  year: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  website?: string;
  instagram?: string;
}

export type TemplateId = 'minimal' | 'modern' | 'creative' | 'cyber' | 'future' | 'alex';