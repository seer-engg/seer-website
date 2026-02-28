Marcus opens Slack at 8:47 AM.

Four messages waiting. All from clients. All variations of the same three questions he's answered a hundred times:

- "What's your cancellation policy again?"
- "Do you offer refunds if I'm not satisfied?"
- "How long does onboarding take?"

Every answer is in the FAQ doc he built three months ago. He spent a whole afternoon on it. He sent the link to every new client. They still Slack him.

Marcus isn't real — I made him up. But I've had this exact conversation with more than 10 automation consultants in the last month. Solo operators who've documented everything, yet still lose 30–60 minutes every day answering questions their documentation already covers.

The fix takes about 30 minutes to build.

---

## Why Documentation Doesn't Stop Questions

Before building anything, it's worth understanding the actual problem.

Clients don't skip your FAQ because they're lazy. They skip it because Slack is already open, asking you directly takes 10 seconds, and waiting for a reply isn't much worse than hunting through a Notion doc they can't remember the URL for.

The documentation solution treats this as a discovery problem ("they just need to find the docs"). The real problem is friction. Slack feels instant. Docs feel like work.

The agent removes the friction without removing you.

---

## What the Agent Does

Three steps:

1. **Watches a Slack channel** for new messages
2. **Searches your knowledge base** (your FAQ doc, pricing page, process docs — anything you've uploaded)
3. **If confident**: replies directly in the thread with the answer
   **If not confident**: sends you a DM with the question so you can answer manually

The second branch is the important one. The agent doesn't hallucinate or make up answers. When it doesn't find relevant information in your knowledge base, it escalates to you — quietly, without the client seeing a failed attempt.

---

## Build Guide

You don't need to write code. Seer builds the workflow from a description.

### Step 1: Describe what you want

Start with a plain-language description of the workflow:

> I want a bot that watches my support channel in Slack. When someone sends a message, it searches my knowledge base. If the answer is in there and the AI is confident, it replies directly. If it can't find a confident answer, it DMs me the question instead.

That's it. Seer will generate a workflow proposal and ask clarifying questions — which workspace, which channel, which knowledge base.

### Step 2: Connect your Slack workspace

Select the workspace and restrict it to a specific channel. For Marcus, that's his client support channel. You don't want the bot watching every channel — just the one where FAQ-style questions land.

### Step 3: Build your knowledge base

Upload the documents the agent should search. For a consulting practice, this typically includes:

- **FAQ document**: cancellation policy, refunds, response times, scope of work
- **Pricing page or proposal template**: common questions about rates and packages
- **Process doc**: what to expect during onboarding, how deliverables work
- **Past answered questions**: if you have a log of questions you've answered repeatedly, add it

The quality of the agent's answers is directly proportional to the quality of what you feed it. A vague FAQ produces vague answers. Specific, complete answers in your knowledge base produce specific, complete responses.

### Step 4: Set up the fallback DM

When the agent can't answer confidently, it should DM you — not post a confused response in the channel. Configure the DM to include:
- The original question
- The channel it came from
- A note that the knowledge base didn't have a match

This gives you context to reply directly and, when patterns emerge, add the missing answer to your knowledge base.

### Step 5: Publish and backtest

Before going live, test it against real past messages. Seer lets you replay events from your channel history — this means you can run the workflow against the last month of support questions without sending actual Slack messages. You'll see exactly which questions it would have answered, what it would have said, and which ones would have escalated to you.

Adjust your knowledge base based on what you see. The backtest usually reveals 3–5 gaps worth filling before launch.

---

## The Confidence Threshold

The escalation pattern is what makes this trustworthy.

A common mistake when building FAQ bots: configure the agent to always respond, even when uncertain. The result is confident-sounding wrong answers — which is worse than no answer at all. Clients don't know the agent was guessing; they act on it.

The correct pattern: **high confidence threshold, hard escalation fallback.**

If the agent finds a clear match in the knowledge base, it answers. If it finds ambiguous information, or nothing relevant, it DMs you. You get a short DM; the client gets a slightly delayed but accurate answer from you directly.

Over time, the DMs tell you what's missing from your knowledge base. You add it. The agent handles more. You get fewer DMs. The loop closes.

---

## Before and After

| Metric | Before | After |
|---|---|---|
| Time spent on FAQ questions | 30–60 min/day | ~5 min/day (reviewing escalations) |
| Response time for clients | Minutes to hours | Under 2 minutes |
| Consistency | Depends on your bandwidth | Identical every time |
| What happens at 7 PM | Client waits until morning | Agent replies immediately |
| Knowledge gaps | Invisible | Surfaced via DMs |

The last row matters. When you're answering manually, you don't always notice that the same question keeps coming up. The DM log shows you exactly which questions your documentation is missing.

---

## What Still Goes to You

The agent handles factual FAQ questions: policy, process, pricing, scope, timelines. It doesn't handle:

- **Judgment calls**: "Is my project in scope?" — needs context the agent doesn't have
- **Complaints and frustration**: a human should handle these
- **Ambiguous questions**: "Can you do something custom?" — too open-ended for KB lookup
- **New client negotiations**: pricing and scope discussions need you in the loop

The DM fallback routes all of these to you correctly, assuming your knowledge base is scoped to documented facts rather than open-ended queries.

---

## What It Costs

The workflow runs on Seer Pro at $39/month. At typical consulting volume — a few dozen FAQ-style questions per week — you're looking at a few hundred workflow runs per month. That's a rounding error against the 1M run allocation.

The bigger cost is building the knowledge base. If your FAQ doc doesn't exist yet, write it first. The agent is only as good as what you give it. A morning spent documenting your top 20 client questions is the most valuable part of this setup.

---

## Starting Point

If you're starting from scratch:

1. **Document your top 20 FAQ questions** (pull from your message history — they're already there)
2. **Connect Seer to your Slack workspace** (takes 2 minutes)
3. **Upload the FAQ doc as a knowledge base**
4. **Build the workflow** (describe it in plain language; Seer generates the proposal)
5. **Backtest against past messages**
6. **Publish**

The setup takes one focused afternoon. The DMs slow down within a week as you fill knowledge base gaps. By week three, most clients get instant answers and you're spending 5 minutes a day on the ones that actually need you.

---

*If you're Marcus — or you work with a lot of Marcus types — reach out at akshay@getseer.dev. The setup is fast; I'm happy to walk through it.*
