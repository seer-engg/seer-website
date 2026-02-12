export interface Video {
  id: string;              // YouTube video ID
  title: string;           // Marketing-focused title
  description: string;     // Brief description (1-2 sentences)
  duration: string;        // "3:45" format
  category: string;        // "Getting Started", "Email Automation", etc.
}

export const productDemoVideos: Video[] = [
  {
    id: "cmQvmla8sl0",
    title: "Getting Started with Seer",
    description: "Learn how to build your first AI workflow in minutes without writing any code. Perfect for marketing teams new to automation.",
    duration: "3:42",
    category: "Getting Started"
  },
  {
    id: "Q1wPRnTGf0w",
    title: "Email Automation Made Simple",
    description: "See how Seer automatically triages your inbox and prioritizes what matters most to your marketing campaigns.",
    duration: "4:15",
    category: "Email Automation"
  },
  {
    id: "HbZD8aZRiaA",
    title: "Content Creation Workflows",
    description: "Watch how marketing teams use Seer to draft LinkedIn posts, blog content, and social media updates on autopilot.",
    duration: "5:23",
    category: "Content Creation"
  },
  {
    id: "ppLQWPAlKLA",
    title: "Lead Management & Routing",
    description: "Discover how to classify leads, route inquiries, and automate follow-ups without expensive agent setup costs.",
    duration: "4:48",
    category: "Lead Management"
  }
];
