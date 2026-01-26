# Seer Privacy Policy

**Last Updated: January 2025**

**Operating Entity:** Seer is a product of X26, Inc., a US-based company. All references to "Seer," "we," "us," and "our" throughout this policy refer to X26, Inc. and its Seer platform.

## TL;DR

**Self-Hosted:** We don't see your data. Period.

**Cloud (app.getseer.dev):** We store only what's needed to run your workflows. We don't sell data, train models on it, or do anything sketchy. You can export or delete everything anytime.

---

## The Full Story

We're developers building for developers. This policy explains exactly what data we collect, why, and what we do with it. No legal jargon runaround.

## 1. Two Different Privacy Models

### Self-Hosted Seer

**What we collect:** Nothing. Zero. Nada.

When you run Seer on your own infrastructure:
- All data stays on your servers
- No telemetry phones home
- No analytics tracking
- No "product improvement" data collection
- We have no technical ability to see your workflows, data, or usage

**Your responsibility:** Security, backups, compliance with laws, protecting your own users' data if you're running it for others.

### Cloud Seer (app.getseer.dev)

We collect what's necessary to provide the service. Here's everything:

## 2. Information We Collect (Cloud Only)

### Account Information
- Email address (for login and notifications)
- Password (hashed with bcrypt, we never see the plaintext)
- Account creation date
- Last login time

### Workflow Data
- Workflow configurations you create
- Node connections and logic you build
- Execution logs (what ran, when, success/failure)
- Intermediate data generated during workflow runs

### OAuth & Integration Data
- OAuth tokens for services you connect (Gmail, Slack, Google Drive, etc.)
- These are encrypted in our PostgreSQL database on Railway
- We store them only to make API calls on your behalf
- Integration metadata (which services connected, when)

### Usage Data
- How many workflows you run
- API call counts (to manage rate limits)
- Error logs (to help debug issues)
- Feature usage (which nodes you use most)

### Technical Data
- IP address (for security and rate limiting)
- Browser/device type (for compatibility)
- Session data (to keep you logged in)

## 3. What We Don't Collect

We explicitly **DO NOT** collect:
- Payment information (we're free right now, and when we charge, we'll use Stripe)
- Location data beyond IP-based country
- Biometrics or sensitive personal identifiers
- Contents of your connected services (we don't read your emails or messages)
- Phone numbers or physical addresses
- Social security numbers or government IDs
- Anything not listed in Section 2

## 4. How We Use Your Data

**To Run the Service:**
- Execute your workflows when triggered
- Make API calls to integrated services using your OAuth tokens
- Send you notifications about workflow status
- Authenticate you when you log in

**To Improve Seer:**
- Analyze which features are used (aggregated, not personally identified)
- Debug errors and fix bugs
- Improve performance and reliability

**To Communicate:**
- Send service updates or security alerts
- Respond to your support requests
- Notify you of terms/policy changes (rare)

**What We DON'T Do:**
- Sell or rent your data to anyone
- Use your data to train AI models
- Share data with advertisers
- Send marketing emails (unless you opt in, which isn't even an option yet)
- Give governments access unless legally compelled (see Section 8)

## 5. Data Sharing & Third Parties

### Services We Use

**Railway (Hosting):**
- Where we run app.getseer.dev
- Has access to database backups
- Subject to Railway's privacy policy
- US-based infrastructure

**OpenAI (AI Processing):**
- Your workflow prompts and data go to OpenAI's API when you use AI nodes
- Subject to OpenAI's data policies (they claim not to train on API data as of Jan 2025)
- This is unavoidable if you want AI in workflows—data must reach the model

**OAuth Providers (Google, Slack, etc.):**
- We receive only what you authorize via OAuth scopes
- Data flows through Seer to complete your workflows
- We use read-only scopes by default

### Who We Don't Share With
- Advertisers
- Data brokers
- Random third parties
- Other users (your workflows are private)

### When We Might Share

We'll share data only if:
1. **You direct us to** (e.g., sharing a workflow with a teammate—feature not built yet)
2. **Required by law** (subpoena, court order, legal obligation)
3. **To prevent harm** (fraud, security threats, illegal activity)
4. **Company sale** (if we get acquired, data transfers with the service—we'd notify you)

## 6. Data Storage & Security

### Where Data Lives
- **Primary:** Railway's PostgreSQL database (US region)
- **Backups:** Railway's automated backup system
- **Encryption:** Data encrypted in transit (TLS) and at rest (database-level encryption)

### Security Measures
- OAuth tokens stored encrypted with application-level encryption
- Passwords hashed with bcrypt (industry standard)
- Regular security updates to dependencies
- Read-only OAuth scopes to minimize risk
- Rate limiting to prevent abuse

### What We Can't Prevent
As a lean team at X26, Inc., we do our best, but:
- No system is 100% secure
- Railway could have a breach (we'd notify you)
- OpenAI could have issues
- If you reuse passwords, that's on you

**Use strong, unique passwords. Enable 2FA when we add it.**

## 7. Your Rights & Controls

### Access Your Data
- Export your workflows anytime (feature coming soon)
- Request a copy of all data we have on you: email akshay@getseer.dev

### Delete Your Data
- **Account Deletion:** Settings → Delete Account
  - We delete all workflows, logs, OAuth tokens, and account data within 30 days
  - Some data may persist in backups for up to 90 days, then it's gone
- **Specific Data:** Disconnect OAuth integrations in settings to delete those tokens

### Modify Your Data
- Edit workflows anytime
- Update email in account settings
- Revoke OAuth tokens through the provider (Google, Slack, etc.)

### Object to Processing
- Don't like how we handle data? Self-host instead.
- For cloud users: we need certain data to function, but you can always delete your account

## 8. Law Enforcement & Transparency

### Our Policy
- We'll push back on overly broad requests
- We'll notify you if legally permitted
- We'll publish a transparency report if we ever receive requests (none so far)

### What We'd Provide if Required
- Account information (email, creation date)
- Workflow configurations and logs
- IP addresses and access logs
- We cannot provide plaintext passwords (we don't have them)

## 9. Children's Privacy

Seer is not intended for users under 13. We don't knowingly collect data from children. If we discover we have, we'll delete it immediately.

If you're under 18, get parental permission before using Seer.

## 10. International Users

### US-Based Service
- Data stored in the US
- Subject to US law
- No GDPR compliance yet (we're not targeting EU)

### If You're Outside the US
- Your data transfers to and is stored in the US
- US privacy laws may differ from your country's
- Use self-hosted version if data residency is critical

## 11. Cookies & Tracking

### What We Use
- **Session cookies:** Keep you logged in
- **Security cookies:** CSRF protection

### What We Don't Use
- Advertising cookies
- Social media tracking pixels
- Analytics beyond basic usage stats

### Your Browser
Modern browsers let you control cookies. Disabling them will break login functionality.

## 12. Data Retention

### Active Accounts (Cloud)
- Workflow data: Kept until you delete it
- Logs: Kept for 90 days, then deleted
- OAuth tokens: Kept until you disconnect or delete account

### Deleted Accounts
- Data deleted within 30 days of account deletion
- Backups purged within 90 days
- Some aggregated analytics may persist (anonymized, no personal identifiers)

### Self-Hosted
- You control retention completely

## 13. Changes to This Policy

We may update this policy as Seer evolves:
- Major changes: We'll email you 30 days in advance
- Minor clarifications: Posted on GitHub with changelog
- Continued use after changes means acceptance
- Don't like it? You can delete your account or migrate to self-hosted

## 14. Your Choices Summary

| Concern | Cloud Solution | Self-Hosted Solution |
|---------|----------------|----------------------|
| Data privacy | Trust us + Railway + OpenAI | Complete control |
| No third-party access | Not possible (needs OpenAI API) | Use your own API key directly |
| Data residency | US only | Wherever you host |
| Right to delete | Yes, anytime | You control it |
| Audit trail | Request from us | In your database |
| No vendor lock-in | Export workflows | You have the code |

## 15. Contact & Questions

**Privacy concerns or questions:**
- Email: akshay@getseer.dev
- Community Forum: forum.getseer.dev (for general questions)
- For data deletion or access requests: Email only (akshay@getseer.dev)
- Response time: We'll try for 48 hours, but we're a small team

**Security issues:**
- Email: akshay@getseer.dev with subject "SECURITY"
- We'll acknowledge within 24 hours
- We don't have a bug bounty program yet, but we'll credit you if you want

## 16. Compliance & Certifications

**Current Status:**
- Not GDPR compliant (US-only for now)
- Not HIPAA compliant (don't use for healthcare data)
- Not SOC 2 certified (it's on the roadmap for enterprise)

**If You Need Compliance:**
- Self-host and handle it yourself, or
- Wait for enterprise cloud offering with certifications, or
- Use Seer only for non-sensitive workflows

---

## 17. Legal Entity & Organization

**Operating Company:** X26, Inc.

Seer is a product of X26, Inc., a US-based company incorporated in the United States. X26, Inc. is the legal entity responsible for the Seer platform, cloud infrastructure (app.getseer.dev), and all associated services.

References throughout this Privacy Policy to "we," "us," "our," and "Seer" refer to X26, Inc. and its Seer product offering.

All data processing, legal obligations, and operational responsibility for the Seer service fall under X26, Inc.'s authority and US jurisdiction.

---

## Final Word from the Developer

At X26, Inc., we built Seer because we were frustrated with workflow tools that asked for full read/write access to everything. Read-only by default is our philosophy.

This privacy policy reflects that: we take only what we need, store it securely, and give you control. No hidden agendas, no data brokering, no bullshit.

If you don't trust us? Self-host. The code is open. That's the point.

Questions? akshay@getseer.dev

— Akshay, Founder