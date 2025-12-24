/**
 * Comparisons Metadata
 * 
 * This file contains comparison metadata (app info, comparison rows, SEO, etc.).
 * Content is stored separately in markdown files in comparisons/content/
 * Add new comparisons to the comparisons array below.
 */

import type { ComparisonData } from "../comparisons-metadata";

export const comparisons: ComparisonData[] = [
  {
  slug: "n8n-vs-langflow",
  app1: {
    name: "n8n",
    slug: "n8n",
    logo: "undefined",
    websiteUrl: "https://n8n.io",
    domain: "n8n.io",
    description: "Fair-code workflow automation and integration platform with a visual editor and developer extensibility.",
  },
  app2: {
    name: "Langflow",
    slug: "langflow",
    logo: "undefined",
    websiteUrl: "https://www.langflow.org",
    domain: "langflow.org",
    description: "Open-source visual builder and runtime for LLM-based flows, agents, and RAG applications.",
  },
  comparisonRows: [
    {
      feature: "Focus & Primary Use Case",
      app1Value: "General-purpose workflow automation and integrations across SaaS, DBs, APIs.",
      app2Value: "LLM/agent orchestration, RAG, and multi-step model workflows.",
      app1Wins: false,
      
    },
    {
      feature: "Core Features",
      app1Value: "Drag-and-drop nodes, 400+ connectors, function (JS/Python) nodes, triggers, credential management.",
      app2Value: "Visual LLM components, prompts, memories, agents, Playground, runtime API.",
      app1Wins: false,
      
    },
    {
      feature: "Architecture & Deployment",
      app1Value: "Docker, npm, Kubernetes, Postgres recommended, optional Redis; offers n8n Cloud and enterprise.",
      app2Value: "Python app, Docker, Helm charts for Kubernetes; separates IDE and runtime for scaling.",
      app1Wins: false,
      
    },
    {
      feature: "Integrations & Ecosystem",
      app1Value: "Large official connector library (400+) and community marketplace for workflows.",
      app2Value: "Connectors focused on LLM providers, vector DBs, and agent tools; growing community components.",
      app1Wins: true,
      
    },
    {
      feature: "Extensibility",
      app1Value: "Custom nodes in TypeScript/JavaScript, function nodes, REST API, npm packages in self-host.",
      app2Value: "Custom components in Python, components path, runtime API, embeddable runtime.",
      app1Wins: false,
      
    },
    {
      feature: "UI & UX",
      app1Value: "Node editor for non-devs and devs; execution logs, Insights in cloud tiers; steeper curve for complex flows.",
      app2Value: "LLM-focused editor with interactive Playground and debugging of agent calls and memory state.",
      app1Wins: false,
      
    },
    {
      feature: "Target Users",
      app1Value: "Technical teams, DevOps, power users, product teams needing broad automations.",
      app2Value: "ML engineers, AI product teams, researchers building agentic and RAG systems.",
      app1Wins: false,
      
    },
    {
      feature: "Pricing & Licensing",
      app1Value: "Fair-code Community edition free; paid n8n Cloud and enterprise licensing.",
      app2Value: "Open-source OSS (check GitHub for exact license); primarily self-hosted with community support.",
      app1Wins: false,
      
    },
    {
      feature: "Community & Support",
      app1Value: "Active GitHub, community forums, marketplace; vendor cloud/enterprise support options.",
      app2Value: "Active GitHub, docs, Helm charts repo; community via Discord and blog posts.",
      app1Wins: false,
      
    },
    {
      feature: "Security & Compliance",
      app1Value: "Self-hosting and enterprise features allow data control; docs for SSL, SSO, 2FA; operational hardening required.",
      app2Value: "Self-hosted OSS: security depends on deployment; release notes include CVE advisories; keep versions updated.",
      app1Wins: null,
      
    }
  ],
  contentPath: "n8n-vs-langflow",
  seo: {
    title: "n8n vs Langflow: Which is Best? [2026] | Seer",
    description: "Compare n8n and Langflow across architecture, integrations, extensibility, security, pricing, and use cases to pick the right automation or LLM orchestration tool.",
    keywords: ["n8n vs Langflow", "LLM orchestration", "workflow automation"],
  },
  hashtags: ["#n8n", "#Langflow", "#LLMOrchestration"],
  author: "Seer Team",
  readTime: 8,
},
  {
  slug: "make-vs-n8n",
  app1: {
    name: "Make",
    slug: "make",
    logo: "undefined",
    websiteUrl: "https://www.make.com/en/product",
    domain: "make.com",
    description: "A mature visual automation and integration SaaS (formerly Integromat) focused on a polished visual editor, large connector library and enterprise governance.",
  },
  app2: {
    name: "n8n",
    slug: "n8n",
    logo: "undefined",
    websiteUrl: "https://n8n.io/",
    domain: "n8n.io",
    description: "A developer-friendly workflow automation tool with fair-code/open-source roots, self-hosting capabilities and a cloud offering; emphasizes extensibility and custom code.",
  },
  comparisonRows: [
    {
      feature: "Open-source / Licensing",
      app1Value: "Proprietary SaaS (Make).",
      app2Value: "Fair-code/community edition with changes; historically MIT but moved to fair-code/sustainable licensing for some distributions.",
      app1Wins: false,
      
    },
    {
      feature: "Hosting Options",
      app1Value: "Primarily SaaS (Make Cloud); enterprise managed control plane for large customers.",
      app2Value: "Both SaaS (n8n Cloud) and self-host (Community & Business/Enterprise); Docker/K8s/VM deployments supported.",
      app1Wins: false,
      
    },
    {
      feature: "Visual Editor UX",
      app1Value: "Polished canvas-style editor aimed at non-developers with strong data mapping helpers.",
      app2Value: "Developer-focused node/graph editor with JS function nodes; more flexible but less polished UX.",
      app1Wins: true,
      
    },
    {
      feature: "Extensibility & Custom Code",
      app1Value: "Webhook/HTTP modules and Make Code app (JS/Python on paid tiers); SDKs/partner connectors for enterprise.",
      app2Value: "Strong custom code via Function nodes, custom node development (TypeScript), webhooks and community packages; excellent for developers.",
      app1Wins: false,
      
    },
    {
      feature: "Integrations Count",
      app1Value: "Large catalog (350+ connectors and AI apps referenced).",
      app2Value: "Hundreds of pre-built nodes and many community nodes; easy to add any API via HTTP node.",
      app1Wins: false,
      
    },
    {
      feature: "Execution Model & Billing",
      app1Value: "Operations-based billing; scenarios and operation counts; max execution time per scenario varies by plan.",
      app2Value: "Cloud billed by executions/runs; self-host Community historically unlimited but newer licensing adds nuance.",
      app1Wins: false,
      
    },
    {
      feature: "Scaling & Performance",
      app1Value: "Managed multi-tenant scaling by Make; enterprise SLAs and Managed Control Plane.",
      app2Value: "Scales via self-host architecture (workers/K8s/queues) or n8n Cloud managed scaling; performance depends on infra.",
      app1Wins: null,
      
    },
    {
      feature: "Security & Compliance",
      app1Value: "Enterprise security controls and governance; marketing references to SOC 2 Type II (contact sales for attestations).",
      app2Value: "n8n Cloud provides managed security; self-host allows full control for compliance. Check enterprise docs for certifications.",
      app1Wins: null,
      
    },
    {
      feature: "Community & Ecosystem",
      app1Value: "Large user base, templates and partner ecosystem but SaaS-centric.",
      app2Value: "Active open-source community, GitHub contributions and many community nodes and deployment guides.",
      app1Wins: false,
      
    },
    {
      feature: "Best Fit",
      app1Value: "Non-developers, organizations wanting managed SaaS with strong connectors and governance.",
      app2Value: "Developer teams, self-hosting, custom node development and data-sensitive deployments.",
      app1Wins: null,
      
    }
  ],
  contentPath: "make-vs-n8n",
  seo: {
    title: "Make vs n8n: Which is Best? [2026] | Seer",
    description: "Compare Make and n8n: hosting, pricing, extensibility, integrations, execution model and security to choose the right automation platform.",
    keywords: ["Make vs n8n", "workflow automation", "integration platform", "self-hosted automation"],
  },
  hashtags: ["#MakeVsN8N", "#WorkflowAutomation"],
  author: "Seer Team",
  readTime: 8,
},
];

