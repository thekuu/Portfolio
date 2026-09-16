export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  overview?: string;
  problem?: string;
  solution?: string;
  technologies: string[];
  image: string;
  features: string[];
  challenges: string[];
  lessons: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Technology {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  description: string;
  projectsUsed: string[];
}
