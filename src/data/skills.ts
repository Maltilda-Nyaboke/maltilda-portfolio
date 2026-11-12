export type Skill = {
  name: string;
  level: "Proficient" | "Comfortable" | "Familiar";
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: Skill[];
};

const levelWidth: Record<Skill["level"], number> = {
  Proficient: 90,
  Comfortable: 70,
  Familiar: 50,
};

export function widthFor(level: Skill["level"]) {
  return levelWidth[level];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Structure, styling, and interactivity on the client.",
    skills: [
      { name: "HTML", level: "Proficient" },
      { name: "CSS", level: "Proficient" },
      { name: "Bootstrap", level: "Proficient" },
      { name: "JavaScript", level: "Comfortable" },
      { name: "Angular", level: "Familiar" },
    ],
  },
  {
    title: "Backend",
    description: "Server-side logic and application architecture.",
    skills: [
      { name: "Python", level: "Proficient" },
      { name: "Django", level: "Proficient" },
    ],
  },
  {
    title: "Databases",
    description: "Persisting and querying application data.",
    skills: [
      { name: "PostgreSQL", level: "Comfortable" },
      { name: "SQLite", level: "Comfortable" },
      { name: "SQL", level: "Comfortable" },
    ],
  },
  {
    title: "Tools",
    description: "The daily workflow around writing and shipping code.",
    skills: [
      { name: "Git", level: "Proficient" },
      { name: "GitHub", level: "Proficient" },
      { name: "VS Code", level: "Proficient" },
      { name: "Figma", level: "Familiar" },
      { name: "Trello", level: "Comfortable" },
    ],
  },
  {
    title: "Customer Experience",
    description: "Platforms for supporting customers and managing relationships.",
    skills: [
      { name: "Salesforce", level: "Proficient" },
      { name: "Zendesk", level: "Proficient" },
      { name: "Freshdesk", level: "Proficient" },
      { name: "Shopify", level: "Proficient" },
      { name: "Notion", level: "Proficient" },
    ],
  },
];
