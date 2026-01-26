export type Language = 'EN' | 'TA';

export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string[];
  type: 'work' | 'education' | 'sabbatical';
}

export interface NavItem {
  label: string;
  taLabel: string;
  href: string;
}