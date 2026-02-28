export interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  publishDate: string;
}

export const productDemoVideos: Video[] = [
  {
    id: "TLeQfdlY9l4",
    title: "Automate Client FAQs with a Slack AI Agent",
    description: "Build a Slack bot that answers client questions from your knowledge base — and DMs you when it can't. Setup takes 30 minutes.",
    duration: "4:20",
    category: "Slack",
    publishDate: "2026-02-21",
  },
  {
    id: "ppLQWPAlKLA",
    title: "AI Email Agent for a Rug Store in 3 Minutes",
    description: "Build and deploy a customer support email agent — no code, no surprise bill. Auto-answers product questions, forwards sales leads.",
    duration: "3:22",
    category: "Email",
    publishDate: "2026-02-11",
  },
  {
    id: "HbZD8aZRiaA",
    title: "Sort Your Inbox in 90 Seconds with Claude + Seer",
    description: "Build an AI agent that reads your last 10 emails, categorizes them by importance, and flags the ones that matter — all from Claude's chat window.",
    duration: "5:25",
    category: "Email",
    publishDate: "2026-02-06",
  },
  {
    id: "Q1wPRnTGf0w",
    title: "Self-Hosted Welcome Emails with Supabase & Seer",
    description: "Automate welcome emails for new users by integrating Supabase with Seer. AI-generated drafts with human review before sending.",
    duration: "7:13",
    category: "Integrations",
    publishDate: "2026-01-14",
  },
  {
    id: "cmQvmla8sl0",
    title: "AI Workflows with Read-Only OAuth Scopes",
    description: "Most platforms ask for full Gmail access when they only need to read. Seer implements read-only OAuth scopes by default.",
    duration: "2:49",
    category: "Security",
    publishDate: "2026-01-02",
  },
];
