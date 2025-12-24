# App Comparison Content Recipe

This document defines the structure and expectations for creating app comparison pages.

## Overview

Each comparison page compares two software applications side-by-side, providing users with detailed information to help them make informed decisions. The content should be comprehensive, objective, and SEO-optimized.

## Required Sections

### 1. Hero Section
- **App Names**: Both apps being compared (e.g., "Zapier vs. Lindy")
- **Headline**: Compelling title that includes both app names and a value proposition
- **Subheadline**: Brief description of what the comparison covers
- **Year Tag**: Include current year in brackets (e.g., "[2026]")

**Example**:
```
Zapier vs. Lindy: Which is best? [2026]
Compare functionality, ease of use, pricing, and more to find the right automation tool for your needs.
```

### 2. App Images
- **Format**: One image per app
- **Naming**: Use app slug (e.g., `zapier.png`, `lindy.png`)
- **Requirements**: 
  - High quality logo or app icon
  - Transparent background preferred
  - Square aspect ratio recommended
  - Minimum 200x200px resolution

### 3. Comparison Table
A side-by-side comparison table showing key features and differences.

**Required Columns**:
- Feature name
- App 1 value/description
- App 2 value/description
- Optional: Winner indicator (app1Wins or app2Wins)

**Example Rows**:
- Pricing (starting price, pricing model)
- Key Features (core capabilities)
- Integrations (number and types)
- Ease of Use (user experience rating)
- Use Cases (best suited for)
- Support (customer support options)
- Free Trial (availability and duration)

**Format**:
```typescript
{
  feature: "Pricing",
  app1Value: "Starting at $19.99/month",
  app2Value: "Starting at $29.99/month",
  app1Wins: true  // Optional: indicates which app wins this category
}
```

### 4. External Links
- **App 1 Website**: Official website URL
- **App 2 Website**: Official website URL
- **Format**: Full URLs (e.g., `https://zapier.com`)

### 5. Research Content Sections

#### Introduction
- Brief overview of both apps
- Context for why this comparison matters
- What readers will learn

#### Detailed Sections
Each section should cover a specific aspect:
- **Pricing Comparison**: Detailed pricing breakdown, value proposition
- **Feature Comparison**: Deep dive into key features
- **Use Cases**: When to use each app, ideal user profiles
- **Pros and Cons**: Balanced view of each app's strengths and weaknesses
- **Integration Capabilities**: Available integrations and ecosystem
- **Support and Documentation**: Customer support quality and resources

#### Conclusion
- Summary of key differences
- Recommendations based on different user needs
- Final verdict or guidance

**Format**:
```typescript
{
  introduction: "Zapier and Lindy are both automation platforms...",
  sections: [
    {
      title: "Pricing Comparison",
      content: "Zapier offers a freemium model..."
    },
    {
      title: "Feature Comparison",
      content: "Both platforms offer workflow automation..."
    }
  ],
  conclusion: "Choose Zapier if you need extensive integrations..."
}
```

### 6. SEO Metadata
- **Title**: SEO-optimized title (e.g., "Zapier vs Lindy: Complete Comparison [2026]")
- **Description**: Meta description (150-160 characters)
- **Keywords**: Relevant keywords array (e.g., ["zapier", "lindy", "automation", "workflow"])

**Format**:
```typescript
{
  title: "Zapier vs Lindy: Complete Comparison [2026] | Seer",
  description: "Compare Zapier and Lindy side-by-side. Find pricing, features, integrations, and more to choose the right automation tool.",
  keywords: ["zapier", "lindy", "automation", "workflow", "comparison"]
}
```

### 7. Index Page Metadata
- **Author**: Author name (e.g., "Seer Team")
- **Read Time**: Estimated reading time in minutes (e.g., 8)

## Content Guidelines

### Tone and Style
- **Objective**: Present facts without bias
- **Professional**: Use clear, professional language
- **Helpful**: Focus on helping users make decisions
- **Comprehensive**: Cover all important aspects

### Research Requirements
- Research both apps' official websites
- Check current pricing and features
- Review recent updates and changes
- Compare user reviews and ratings
- Verify integration capabilities
- Check support documentation quality

### Accuracy
- Use current information (verify dates)
- Cite sources when possible
- Update pricing and features regularly
- Note when information may change

### SEO Best Practices
- Include target keywords naturally
- Use descriptive headings
- Optimize for featured snippets
- Include internal links where relevant
- Use alt text for images
- Ensure mobile-friendly content

## File Structure

```
src/content/comparisons/
├── recipe.md (this file)
└── comparisons-metadata.ts (TypeScript metadata file)
```

## Metadata Location

All comparison data is stored in `src/content/comparisons-metadata.ts` as TypeScript objects following the `ComparisonData` interface.

## Image Storage

- **Naming**: `{app-slug}.png` (e.g., `zapier.png`)

## Example Complete Structure

```typescript
{
  slug: "zapier-vs-lindy",
  app1: {
    name: "Zapier",
    slug: "zapier",
    websiteUrl: "https://zapier.com",
    description: "Automate workflows between apps",
  },
  app2: {
    name: "Lindy",
    slug: "lindy",
    websiteUrl: "https://lindy.ai",
    description: "AI-powered automation platform",
  },
  comparisonRows: [
    // ... comparison rows
  ],
  researchContent: {
    introduction: "...",
    sections: [...],
    conclusion: "..."
  },
  seo: {
    title: "...",
    description: "...",
    keywords: [...]
  },
  author: "Seer Team",
  readTime: 8
}
```

## Notes

- Keep content up-to-date with app changes
- Regularly review and update comparisons
- Ensure all links are valid
- Verify images load correctly
- Test on mobile devices
- Monitor SEO performance

