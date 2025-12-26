I wanted to share a demo with you today. Instead, I’m sharing a confession.

We’ve been heads-down building **Seer**, and while the goal is to launch something beautiful and delightful for enterprise devs by New Year’s Eve, the reality of building production-grade AI agents is... messy.

I’m sharing these insights now because I don’t want to get attached to "secret sauce." If you’re building AI workflows, I hope this saves you a few weeks of debugging.



### 1. Plan First, Code Later: The Alignment Gap

One "secret" we found: If you and your agent aren't aligned on the **plan**, no matter how beautiful the code it generates, the product will fail its purpose.

We’ve moved to an **Outline First, Details Later** architecture. Before the agent touches a single line of code, it must produce a high-level execution plan. This "Alignment Phase" prevents the agent from spiraling into a 1,000-line hallucination that is technically correct but logically useless.

### 2. Evals First, Code Later: Grounding the "Hype"

It is easy to think you’ve discovered a groundbreaking secret to AGI (spoiler: [you probably haven't](https://www.lesswrong.com/posts/2pkNCvBtK6G6FKoNn/so-you-think-you-ve-awoken-chatgpt)).

The only way to build reliable enterprise agents is to ground them in reality **before** you write logic. We've shifted to an **Evals-Driven Development** cycle. Before optimizing a workflow, we test it against rigorous open benchmarks for tool usage, retrieval, and instruction adherence:

* **GAIA:** General AI Assistants benchmark for real-world tasks.
* **SWE-bench (2025):** The gold standard for software engineering agents (recent 2025 results show specialized agents hitting 74%+ resolution).
* **τ-bench (Tau-bench):** Specifically for tool-use and strategy compliance in complex dialogues.

### 3. The Delegation "Barbell Strategy"

We’ve stopped obsessing over long-term memory and exhaustive traces. Instead, we use a **Barbell Strategy** for information load:

* **Crisp Inter-Agent Communication:** Keep the data passed between agents extremely lean. High-level instructions only.
* **High Agent-to-Artifact Load:** Give the sub-agent a massive, rich context for the specific task (the "artifact") it’s working on, but let that sub-agent **die as soon as the task is done.**

By letting sub-spawned agents vanish along with their local context, we prevent "context poisoning." You don't need a "brain" that remembers everything; you need specialized experts who do one thing perfectly and then leave.

### 4. The Freshness Problem (Why Context7 Matters)

If you're building an agent builder and you haven't solved the **latest documentation problem**, you're already lagging. Models are trained on snapshots; the real world moves in real-time.

We’ve found tools like [Context7 (by Upstash)](https://upstash.com/blog/context7-llmtxt-cursor) to be essential. It provides always-up-to-date, version-specific documentation directly to the LLM. If your agent is writing code using a library updated two weeks ago but the LLM thinks it’s 2024, the workflow is broken before it starts.

### 5. The "Plumbing" is the Product

The "AI" part of agents is becoming a commodity. The real value is in the "boring" stuff:

* **Authentication:** Managing OAuth flows and session persistence across enterprise tools.
* **Time-Travel & Interruptibility:** The ability to pause an agent, roll back its state to , and resume.
* **Human-in-the-Loop (HITL):** Creating "wait states" where a human can approve a high-stakes action.

> **Note to Devs:** Don't get trapped building "agent infra." Any good dev can spin up a sandbox in an afternoon. Focus on the **Developer Experience (DX)** of managing state and reliability. That is where the battle is won.



### Recommended Reading & Benchmarks

* **Context Engineering:** [Phil Schmid’s Part 2](https://www.philschmid.de/context-engineering-part-2)
* **Effective Agents:** [Anthropic’s Research Guide](https://www.google.com/url?sa=E&source=gmail&q=https://www.anthropic.com/research/building-effective-agents)
* **2025 Benchmarks:** [SWE-bench Leaderboard](https://www.swebench.com/) & [GAIA Benchmark](https://hal.cs.princeton.edu/gaia)
* **Reliability:** [Cleanlab’s Case Study on Tau-bench](https://cleanlab.ai/blog/tau-bench/)



### Let’s Chat (0 Sales)

I’m sad I don't have the Seer UI to show you yet, but we are on track for a **New Year’s Eve launch**.

In the meantime, if you are building something curious or struggling with agentic workflows, **reach out at akshay@getseer.dev.** I genuinely want to hear what you’re building and swap notes. No sales, no pitch—just two devs in the trenches.

See you on the other side of the year.
