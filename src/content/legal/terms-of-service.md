# Seer Terms of Service

**Last Updated: January 2025**

**Operating Entity:** Seer is operated by X26, Inc., a US-based company. All references to "Seer," "we," "us," and "our" refer to X26, Inc. and its Seer platform.

## The Straightforward Version

We built Seer to give you control over your AI workflows with security baked in. Here's how it works and what we expect from each other.

## 1. What Seer Is

Seer is an open-source AI workflow platform available in two flavors:

- **Self-Hosted**: You run everything on your infrastructure. Your data never touches our servers.
- **Cloud (app.getseer.dev)**: We host it for you on Railway. We store what's needed to make workflows run.

## 2. Your Account (Cloud Version)

When you use app.getseer.dev:
- You're responsible for keeping your credentials secure
- One account per person (no sharing logins)
- Don't use it for anything illegal or to harm others
- You can delete your account anytime, which deletes all your data

## 3. What We Store (Cloud Version)

We're transparent about data:

**We Store:**
- Your workflow configurations
- OAuth tokens for connected services (Gmail, Slack, etc.)
- Workflow execution logs and intermediate data
- Account information (email, usage metrics)

**We Don't:**
- Train AI models on your data
- Sell your data to anyone
- Share your data except as required by law
- Access your data unless you explicitly request support

**Storage Location:** Railway's infrastructure (US-based)

## 4. What We Don't Store (Self-Hosted)

When you self-host:
- Everything stays on your infrastructure
- No telemetry, analytics, or data flows back to us
- You're responsible for your own backups and security
- We literally can't see your data

## 5. Third-Party Services

**OAuth Integrations:**
We use read-only OAuth scopes by default. When you connect Gmail, Slack, or other services:
- We only request the minimum permissions needed
- Tokens are stored encrypted in our database (cloud) or your database (self-hosted)
- You can revoke access anytime through the service provider
- We pass data through to make workflows work, but we're not reading your emails or snooping

**AI Models (OpenAI GPT-4 class):**
- Cloud: Your workflow data goes to OpenAI's API to process requests
- Self-Hosted: You supply your own API key; data goes directly from your instance to OpenAI
- OpenAI has their own terms—check them out at openai.com/policies

## 6. Open Source & Licensing

**Code License:** MIT
- The core Seer platform is available under the MIT license
- You can fork, modify, and self-host freely
- Enterprise features (if any exist) in the `ee/` directory have a separate license

**Enterprise Licensing:**
Need enterprise features or a custom agreement? Email us at akshay@getseer.dev

## 7. What You Can't Do

Don't:
- Use Seer to break laws or violate others' rights
- Attempt to hack, abuse, or overwhelm our systems
- Scrape or reverse-engineer our cloud service (but the code is open source anyway!)
- Resell our cloud service without permission
- Use it to generate spam, phishing, malware, or other harmful content
- Violate the terms of integrated services (OpenAI, Google, Slack, etc.)

## 8. Service Availability

**Cloud Version:**
- We provide app.getseer.dev "as is"
- We aim for high uptime but can't guarantee 100%
- We may need to do maintenance (we'll try to warn you)
- It's currently free, but we plan to add paid tiers soon

**Self-Hosted:**
- You're responsible for uptime, backups, security
- We provide the code and updates, you handle infrastructure

## 9. Pricing & Subscriptions

**14-Day Trial:**
- All new users start with a 14-day free trial
- Credit card required to start trial
- No charges during the trial period
- Auto-renews to paid subscription after 14 days unless canceled

**Subscription Pricing:**
- Standard pricing: $49/month
- Early adopter pricing: First 50 users get $29/month locked-in forever
- Annual billing available with discount
- Cancel anytime - access continues until end of billing period

**What Happens After Trial:**
- If you don't cancel, subscription auto-renews at your monthly rate
- Early adopters keep their $29/month rate permanently
- You can cancel before trial ends to avoid charges

**Grandfather Clause:**
- Users who signed up before February 1, 2026 are grandfathered with free access
- Early adopter pricing is locked-in for the first 50 subscribers
- We'll notify users of any future pricing changes with 30 days notice

## 10. Support & Warranties

**What We Provide:**
- Community support via GitHub Issues
- Documentation and guides
- Bug fixes and security updates

**What We Don't Promise:**
- That Seer will be perfect (no software is)
- That your workflows will always work (APIs change, stuff breaks)
- That we'll fix every feature request
- Legal advice about how you use Seer

**THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES.** We built this to be useful, but we can't guarantee it'll work perfectly for every use case.

## 11. Liability Limits

We're a small team building something useful. We're not a giant corporation with deep pockets.

**Here's the deal:**
- We're not liable for data loss, workflow failures, or business impacts
- Maximum liability is $100 or what you paid us in the last 12 months (currently $0 for cloud)
- We're not responsible for third-party services (OpenAI, Railway, OAuth providers)

**Translation:** Use Seer responsibly. Don't rely on it for life-critical systems without proper backups and fallbacks.

## 12. Privacy & Data Deletion

See our Privacy Policy for details, but the key points:
- You own your data
- Cloud users can export and delete data anytime
- When you delete your account, we delete your data within 30 days
- Self-hosted users control their own data completely

## 13. Changes to These Terms

We may update these terms:
- We'll post updates on GitHub and email cloud users
- Continued use means you accept the changes
- If you don't like changes, you can stop using the service or migrate to self-hosted

## 14. Termination

**You can leave anytime:**
- Delete your cloud account
- Stop using self-hosted version

**We can terminate your account if:**
- You violate these terms
- You're abusing the system
- Required by law

We'll try to warn you first unless it's an emergency.

## 15. Governing Law

These terms are governed by US law. X26, Inc., the US-based operating entity for Seer, is subject to US jurisdiction. Any disputes will be handled in US courts.

## 16. Contact

Questions, concerns, or feedback?
- Email: akshay@getseer.dev
- Community Forum: forum.getseer.dev (for discussions and questions)
- GitHub Issues: github.com/seer-engg/seer (for bug reports and technical issues)
- Website: getseer.dev

---

## 17. Operating Company & Legal Entity

Seer is operated by X26, Inc., a US-based company. X26, Inc. is the legal entity responsible for:
- The Seer platform and all cloud services
- Data processing and storage
- Service availability and support
- Compliance with applicable laws

All references to "we," "us," "our," and "Seer" in these terms refer to X26, Inc. and its Seer product.

Contact for legal inquiries: akshay@getseer.dev

---

## Developer's Note

We wrote these terms to be clear, not sneaky. We're building Seer in the open because we believe AI workflows should be transparent and secure. If something here is confusing or seems unfair, let us know. We're developers like you, and we want these terms to be reasonable.

Read-only by default. Open source by design. That's the Seer way.