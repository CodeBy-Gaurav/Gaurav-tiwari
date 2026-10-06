export interface UsesItem {
  label: string;
  name: string;
  link?: string;
}

export interface UsesCategory {
  category: string;
  items: UsesItem[];
}

export const usesData: UsesCategory[] = [
  {
    category: 'Software & Development',
    items: [
      { label: 'Editor', name: 'Visual Studio Code', link: 'https://code.visualstudio.com/' },
      { label: 'Terminal', name: 'PowerShell & Git Bash', link: 'https://git-scm.com/' },
      { label: 'Theme', name: 'One Dark Pro', link: 'https://marketplace.visualstudio.com/' },
      { label: 'Font', name: 'JetBrains Mono', link: 'https://www.jetbrains.com/lp/mono/' },
      { label: 'API Testing', name: 'Postman', link: 'https://www.postman.com/' },
      { label: 'Database GUI', name: 'Drizzle Studio & pgAdmin', link: 'https://orm.drizzle.team/drizzle-studio/overview' },
      { label: 'Version Control', name: 'Git & GitHub', link: 'https://github.com/' },
      { label: 'Browser', name: 'Google Chrome & Brave', link: 'https://www.google.com/chrome/' },
      { label: 'AI Assistance', name: 'Google Gemini & Claude', link: 'https://gemini.google.com/' },
    ],
  },
  {
    category: 'Hardware & Gear',
    items: [
      { label: 'Machine', name: 'Intel Core i5 / Windows 11 Workstation' },
      { label: 'Display', name: 'FHD IPS External Monitor' },
      { label: 'Keyboard', name: 'Mechanical Keyboard (Linear Switches)' },
      { label: 'Mouse', name: 'Ergonomic Optical Mouse' },
      { label: 'Audio', name: 'Wireless Noise Canceling Headphones' },
    ],
  },
];
