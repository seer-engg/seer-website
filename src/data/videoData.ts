export interface Video {
  id: string;              // YouTube video ID
  title: string;           // Marketing-focused title
  description: string;     // Brief description (1-2 sentences)
  duration: string;        // "3:45" format
  category: string;        // "Getting Started", "Email Automation", etc.
}

export const featuredVideo: Video = {
  id: "ppLQWPAlKLA",
  title: "Sort and Route Leads Automatically",
  description: "Incoming leads get classified and routed to the right person. No manual sorting. No expensive setup experiments.",
  duration: "4:48",
  category: "Lead Management"
};

export const productDemoVideos: Video[] = [
  {
    id: "Q1wPRnTGf0w",
    title: "Email Inbox Triage — Automated",
    description: "Your inbox gets triaged automatically. Important emails float to the top. You save 30 minutes every morning.",
    duration: "4:15",
    category: "Email Automation"
  },
  {
    id: "cmQvmla8sl0",
    title: "Set Up Your First Automation in 3 Minutes",
    description: "Watch us go from zero to a running automation. No code, no configuration files, just point and click.",
    duration: "3:42",
    category: "Getting Started"
  },
  {
    id: "HbZD8aZRiaA",
    title: "LinkedIn Posts on Autopilot",
    description: "Seer drafts your LinkedIn posts from your notes and drops them in Google Docs for review. One less thing to stare at.",
    duration: "5:23",
    category: "Content Creation"
  }
];
