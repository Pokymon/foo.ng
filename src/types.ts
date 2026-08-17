export type ViewType = "home" | "services" | "about" | "pricing" | "contact" | "service-web" | "service-mobile" | "service-game" | "service-uiux" | "service-branding";

export interface ServiceDetail {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  icon: string; // Lucide icon name
  tag: string;
  techStack: string[];
  capabilities: string[];
}

export interface CaseStudy {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  tags: string[];
  mockAppId: "hylefit" | "vaultify" | "mercato";
  stats: { label: string; value: string }[];
}

export interface TechTool {
  name: string;
  category: "Languages" | "Development" | "Design" | "Infrastructure" | "AI & Cloud";
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
