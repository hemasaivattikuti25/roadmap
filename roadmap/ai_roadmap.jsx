import { useState } from "react";

/* ─────────────────────────────────────────────
   COMPLETE DATA
───────────────────────────────────────────── */
const PHASES = [
  {
    id: 0,
    icon: "⚙️",
    title: "CS Foundations",
    subtitle: "Lock the base. No shortcuts. This phase decides everything.",
    duration: "Month 1–2",
    salary: "Not hireable yet — building the floor",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg,#78350f,#1c1008)",
    role: "Required for ALL roles",
    topics: [
      {
        name: "Python Deep Dive",
        tag: "MANDATORY",
        what: "OOP (classes, inheritance, dunder methods), decorators, generators, async/await, type hints, list comprehensions, file I/O, error handling, modules & packages.",
        depth: "Write production Python without GPT assistance. Explain every line you write. You claimed Python on your resume — own it completely.",
        why: "Python is your primary tool for ALL phases. Shaky Python = shaky foundation for everything above it.",
        fast: { label: "Corey Schafer – Python OOP Playlist · YouTube · Free", url: "https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc" },
        deep: { label: "Real Python – Python OOP + Async IO · Free Articles", url: "https://realpython.com/async-io-python/" },
      },
      {
        name: "DSA in Python",
        tag: "MANDATORY",
        what: "Arrays, Strings, HashMap, Two Pointers, Sliding Window, Binary Search, Sorting (Merge/Quick), Stack, Queue, Basic Trees. 2 problems/day minimum. Start from absolute zero — that's fine.",
        depth: "Easy problems fluently in < 15 min. Medium in < 30 min. 80+ problems solved by end of Phase 1. Zero AI assistance during practice.",
        why: "DSA is Round 1 filter at every company. Zero DSA = resume never read. You said you're a beginner — START TODAY, not tomorrow.",
        fast: { label: "Striver A2Z DSA Sheet – takeuforward.org · Free", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" },
        deep: { label: "Striver DSA Full Playlist · YouTube · Free", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz" },
      },
      {
        name: "CS Fundamentals",
        tag: "MANDATORY",
        what: "OS – processes, threads, deadlocks, memory (stack vs heap). Networking – HTTP/HTTPS, TCP/IP, DNS, request lifecycle. Concurrency vs parallelism.",
        depth: "Explain any concept without notes. Know WHY threads exist, what a deadlock is, what happens when you type a URL.",
        why: "Every product company has a CS fundamentals round. Fastest elimination path if skipped.",
        fast: { label: "Neso Academy – OS Concepts Full Playlist · YouTube · Free", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O" },
        deep: { label: "CS50 – Harvard Full Free Course · edX · Free", url: "https://cs50.harvard.edu/x/" },
      },
      {
        name: "Git & Terminal",
        tag: "MANDATORY",
        what: "Branching (GitFlow), rebase vs merge, pull requests, resolving conflicts, git hooks. Linux: navigation, file ops, permissions, grep, curl, SSH, env vars.",
        depth: "Comfortable with daily Git on a team. Set up GitHub Actions. Deploy an app on a server using only terminal.",
        why: "Every engineering job uses Git daily. All production AI systems run on Linux. Non-negotiable.",
        fast: { label: "Learn Git Branching – Interactive · Free", url: "https://learngitbranching.js.org/" },
        deep: { label: "Missing Semester of CS – MIT Shell Tools · Free", url: "https://missing.csail.mit.edu/2020/shell-tools/" },
      },
      {
        name: "SQL Basics",
        tag: "MANDATORY",
        what: "SELECT, JOINs (inner/left/right), GROUP BY, HAVING, subqueries, indexes, basic schema design.",
        depth: "Write complex JOIN queries from memory. Design a normalized schema for a given use case.",
        why: "SQL is tested in backend + AI roles. pgvector (used in AI projects) runs ON PostgreSQL — you need SQL first.",
        fast: { label: "SQLZoo – Interactive SQL · Free", url: "https://sqlzoo.net/wiki/SQL_Tutorial" },
        deep: { label: "PostgreSQL Tutorial – postgresqltutorial.com · Free", url: "https://www.postgresqltutorial.com/" },
      },
    ],
    project: null,
    systemDesign: null,
    frontend: "❌ No frontend this phase. Pure CS + DSA + Git. Any distraction now costs you the foundation. Focus is everything.",
    checklist: ["80+ DSA problems solved (Easy + some Medium)", "Can explain OS/networking concepts cold", "GitHub profile with daily commits visible", "Can write Python OOP without AI", "Complex SQL JOINs from memory"],
  },
  {
    id: 1,
    icon: "🔧",
    title: "Backend Engineering",
    subtitle: "Build real APIs you can deploy and fully defend. This is your engineering backbone.",
    duration: "Month 2–5",
    salary: "₹5–9 LPA (Backend Developer entry)",
    color: "#10b981",
    gradient: "linear-gradient(135deg,#064e3b,#0a1a12)",
    role: "Required: Backend Dev · Good foundation for AI Engineer",
    topics: [
      {
        name: "FastAPI Mastery",
        tag: "MANDATORY",
        what: "Routing, Pydantic models, dependency injection, middleware, background tasks, async endpoints, WebSockets, project structure, request validation.",
        depth: "Build a full REST API from scratch without GPT. Explain every part — dependency injection, why Pydantic, how async works under the hood.",
        why: "FastAPI is the most popular Python backend framework for AI systems. It's on 70%+ of AI Engineer JDs in India.",
        fast: { label: "FastAPI Official Tutorial – tiangolo · Docs · Free", url: "https://fastapi.tiangolo.com/tutorial/" },
        deep: { label: "FastAPI Best Practices – GitHub · zhanymkanov · Free", url: "https://github.com/zhanymkanov/fastapi-best-practices" },
      },
      {
        name: "PostgreSQL + Redis",
        tag: "MANDATORY",
        what: "Advanced JOINs, indexes, EXPLAIN ANALYZE, connection pooling (asyncpg), Alembic migrations, pgvector basics. Redis: TTL, caching patterns, session storage.",
        depth: "Design a schema, write optimized queries, run migrations without help. Explain why Redis reduces LLM API costs.",
        why: "pgvector is used in every RAG project (Phase 3). Redis caching = cost savings = senior-level thinking. Both appear in AI Engineer JDs.",
        fast: { label: "PostgreSQL Tutorial – postgresqltutorial.com · Free", url: "https://www.postgresqltutorial.com/" },
        deep: { label: "CMU Database Systems – Andy Pavlo · Free Course", url: "https://15445.courses.cs.cmu.edu/fall2022/" },
      },
      {
        name: "Auth – JWT & OAuth2",
        tag: "MANDATORY",
        what: "JWT token flow, OAuth2 patterns, password hashing (bcrypt), RBAC, API key auth, refresh tokens, HTTPS basics.",
        depth: "Implement auth from scratch in FastAPI without copying code. Know what each piece does and what breaks if you skip it.",
        why: "Every production app has auth. Product companies always ask this in interviews. No auth = not production-ready.",
        fast: { label: "FastAPI Security – Official Docs · JWT + OAuth2 · Free", url: "https://fastapi.tiangolo.com/tutorial/security/" },
        deep: { label: "Hussein Nasser – JWT Deep Dive · YouTube · Free", url: "https://www.youtube.com/watch?v=7Q17ubqLfaM" },
      },
      {
        name: "SOLID + Design Patterns",
        tag: "MANDATORY",
        what: "SOLID principles with Python examples. Patterns: Singleton, Factory, Builder, Adapter, Decorator, Observer, Strategy.",
        depth: "Explain each SOLID principle with a real example from YOUR own codebase. Implement Singleton & Factory from memory.",
        why: "Standard technical interview topic at every product company. Also makes your AI backend genuinely better structured.",
        fast: { label: "Refactoring.Guru – Design Patterns · Free", url: "https://refactoring.guru/design-patterns" },
        deep: { label: "SOLID in Python – Real Python · Free Article", url: "https://realpython.com/solid-principles-python/" },
      },
      {
        name: "Testing with pytest",
        tag: "MANDATORY",
        what: "Unit tests, fixtures, conftest.py, pytest-mock, TestClient for FastAPI, pytest-cov for coverage reports.",
        depth: "Write tests for your own FastAPI project. Achieve 70%+ coverage. Explain what mocking is and WHY you use it.",
        why: "Almost no junior candidates test their code. Instant differentiation in any technical interview.",
        fast: { label: "pytest Official Docs · Free", url: "https://docs.pytest.org/en/stable/" },
        deep: { label: "Real Python – Testing with pytest · Free Guide", url: "https://realpython.com/pytest-python-testing/" },
      },
      {
        name: "Docker + Deployment",
        tag: "MANDATORY",
        what: "Dockerfile, docker-compose, volumes, networking, env vars, .env secrets, deploy to Railway/Render/Fly.io.",
        depth: "Containerize any app. Explain what Docker solves. Every project you build MUST have a live deployed URL.",
        why: "Localhost-only projects don't count. Recruiters need to click a live link. Docker is universal in all AI teams.",
        fast: { label: "Docker in 100s + Full Course – Fireship · YouTube · Free", url: "https://www.youtube.com/watch?v=Gjnup-PuquQ" },
        deep: { label: "Docker + FastAPI Guide – TestDriven.io · Free", url: "https://testdriven.io/blog/fastapi-docker-traefik/" },
      },
      {
        name: "Message Queues (Celery/RQ)",
        tag: "OPTIONAL",
        what: "Background task processing, Celery + Redis broker, task queues, async jobs for file processing.",
        depth: "Add async document processing to your backend project using Celery.",
        why: "Used in AI systems for async document ingestion. Not mandatory for ₹15 LPA but differentiates you.",
        fast: { label: "Celery Docs – Getting Started · Free", url: "https://docs.celeryq.dev/en/stable/getting-started/introduction.html" },
        deep: { label: "Real Python – Celery + FastAPI · Free Article", url: "https://testdriven.io/blog/fastapi-and-celery/" },
      },
    ],
    systemDesign: {
      title: "Backend System Design",
      topics: ["Client-server architecture & REST principles", "Database indexing & query optimization", "Load balancing basics (Round Robin, Least Connections)", "Monolith vs Microservices tradeoffs", "API Gateway pattern & rate limiting", "Caching strategies (read-through, write-through, cache-aside)"],
      r1: { label: "System Design Primer – GitHub · donnemartin · Free", url: "https://github.com/donnemartin/system-design-primer" },
      r2: { label: "ByteByteGo – System Design Newsletter · Free Tier", url: "https://bytebytego.com/" },
    },
    project: {
      name: "🚀 Project 1 — Task Manager API",
      tag: "Your first real deployed project",
      stack: "FastAPI + PostgreSQL + JWT Auth + Redis + Docker + Render/Railway",
      features: [
        "User registration/login with JWT + bcrypt password hashing",
        "Full CRUD for tasks with RBAC (users see only their tasks)",
        "Redis caching on GET /tasks endpoints (TTL = 60s)",
        "Pagination, filtering by status/priority, rate limiting",
        "pytest suite with 70%+ coverage (unit + integration tests)",
        "Dockerized app with docker-compose + live deployed URL",
      ],
      architecture: "Client → FastAPI (JWT middleware) → PostgreSQL (SQLAlchemy + Alembic). Redis for response caching. Docker Compose locally. Deployed on Render with CI via GitHub Actions.",
      standout: "Recruiters hit your LIVE API. Shows you can ship, test, and deploy — not just code on localhost. 70%+ test coverage = top 5% of junior candidates.",
    },
    frontend: "🖼 Streamlit only — simple UI to demo your API. Backend quality matters 10x more than frontend at this stage. 1 day max on Streamlit UI.",
    checklist: ["Live deployed API with a public URL", "Auth + RBAC working end-to-end", "70%+ pytest coverage", "Redis caching implemented and measurable", "Docker Compose running locally", "Can explain every line of code in an interview"],
  },
  {
    id: 2,
    icon: "🧠",
    title: "Applied AI Core",
    subtitle: "Your core differentiator. Build LLM systems you can explain every line of — no vibe coding.",
    duration: "Month 5–8",
    salary: "₹10–15 LPA (Applied AI Engineer)",
    color: "#3b82f6",
    gradient: "linear-gradient(135deg,#1e3a8a,#0a0f2e)",
    role: "Required: Applied AI Engineer · AI Engineer",
    topics: [
      {
        name: "LLM Fundamentals",
        tag: "MANDATORY",
        what: "Tokens, context windows, temperature, top-p, embeddings, fine-tuning vs prompting, model families (GPT-4, Claude, Gemini, Llama 3). How attention works conceptually.",
        depth: "Explain how any LLM works to a non-technical person. Answer 'why GPT-4 vs Gemini?' cold in an interview.",
        why: "AI engineers who don't understand LLMs are just API callers. You need the mental model to make good engineering decisions.",
        fast: { label: "Andrej Karpathy – Intro to LLMs (1hr) · YouTube · Free", url: "https://www.youtube.com/watch?v=zjkBMFhNj_g" },
        deep: { label: "fast.ai – Practical Deep Learning for Coders · Free", url: "https://course.fast.ai/" },
      },
      {
        name: "Prompt Engineering",
        tag: "MANDATORY",
        what: "Zero-shot, few-shot, chain-of-thought, ReAct, system prompts, structured JSON outputs, prompt injection defense, prompt versioning.",
        depth: "Write prompts that reliably produce structured outputs. Know why each technique works. Run evaluations on your prompts.",
        why: "80% of Applied AI daily work IS prompt engineering. Master it or stay junior forever.",
        fast: { label: "Prompt Engineering Guide – DAIR.AI · Free", url: "https://www.promptingguide.ai/" },
        deep: { label: "DeepLearning.AI – ChatGPT Prompt Engineering · Free Course", url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" },
      },
      {
        name: "LLM APIs (OpenAI / Anthropic / Gemini)",
        tag: "MANDATORY",
        what: "API auth, chat completions, streaming responses (SSE), function/tool calling, token counting, cost management, error handling + retry logic, rate limit handling.",
        depth: "Integrate any LLM API into a FastAPI backend. Handle streaming properly. Estimate cost before running at scale.",
        why: "You use this every single day as an Applied AI engineer. Own the API, not just the wrapper library.",
        fast: { label: "OpenAI API Quickstart – Official Docs · Free", url: "https://platform.openai.com/docs/quickstart" },
        deep: { label: "Anthropic Python SDK Docs · Free", url: "https://docs.anthropic.com/en/api/getting-started" },
      },
      {
        name: "Embeddings Deep Dive",
        tag: "MANDATORY",
        what: "What embeddings are, text-embedding-3 models, cosine vs dot product vs L2 similarity, batch embedding, embedding caching, when to use which model.",
        depth: "Explain pgvector operators (<->, <=>, <#>) from memory. Implement embedding pipeline for a new document type without help.",
        why: "Every RAG project uses embeddings. Interviewers WILL ask 'why cosine similarity?' — wrong answer = fail.",
        fast: { label: "OpenAI Embeddings Guide – Official Docs · Free", url: "https://platform.openai.com/docs/guides/embeddings" },
        deep: { label: "What are Embeddings? – Vicki Boykis · Free", url: "https://vickiboykis.com/what_are_embeddings/" },
      },
      {
        name: "RAG Pipeline (End-to-End)",
        tag: "MANDATORY",
        what: "Ingest → chunk → embed → store. Retrieve → augment prompt → generate → stream. Chunking strategies, hybrid search (BM25 + semantic), Cohere reranking, RAGAS evaluation.",
        depth: "Build a RAG pipeline from scratch WITHOUT LangChain first. Then rebuild with LangChain. Compare. Evaluate with RAGAS. This is THE skill for Indian AI Engineer roles.",
        why: "60–70% of AI Engineer JDs in India ask for RAG experience. It's the most hireable Applied AI skill right now.",
        fast: { label: "RAG From Scratch – LangChain YouTube Series · Free", url: "https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x" },
        deep: { label: "DeepLearning.AI – Building & Evaluating Advanced RAG · Free", url: "https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/" },
      },
      {
        name: "LangChain / LlamaIndex",
        tag: "MANDATORY",
        what: "Chains, LCEL runnables, document loaders, text splitters, memory types, callbacks. LlamaIndex query engines and ingestion pipelines.",
        depth: "Use both frameworks confidently. Know what they do under the hood. Know when NOT to use them.",
        why: "Appears in 70%+ of AI engineer JDs. Understand it deeply, not just call .run() blindly.",
        fast: { label: "LangChain Docs – Quickstart + How-To · Free", url: "https://python.langchain.com/docs/introduction/" },
        deep: { label: "Greg Kamradt – LangChain Full Course · YouTube · Free", url: "https://www.youtube.com/watch?v=_v_fgW2SkkQ" },
      },
      {
        name: "Vector Databases",
        tag: "MANDATORY",
        what: "pgvector (for PostgreSQL), Pinecone, Qdrant, Weaviate. Index types (HNSW vs IVFFlat), namespaces, metadata filtering, similarity search.",
        depth: "Set up pgvector + Qdrant. Explain HNSW vs IVFFlat tradeoffs. Know when to use managed DB vs self-hosted.",
        why: "Every RAG system needs a vector DB. pgvector is in most Indian startup stacks due to cost savings.",
        fast: { label: "pgvector GitHub + Docs · Free", url: "https://github.com/pgvector/pgvector" },
        deep: { label: "Pinecone Learn – Vector DB Deep Dive · Free", url: "https://www.pinecone.io/learn/vector-database/" },
      },
      {
        name: "LLM Eval & Observability",
        tag: "OPTIONAL",
        what: "LLM evals (RAGAS metrics), hallucination detection, latency tracking, LangSmith tracing, cost monitoring.",
        depth: "Set up basic eval pipeline + LangSmith tracing on your RAG project.",
        why: "Almost no junior candidates think about eval. Instant differentiation in interviews. Shows production mindset.",
        fast: { label: "RAGAS – RAG Evaluation Framework · Docs · Free", url: "https://docs.ragas.io/en/latest/" },
        deep: { label: "LangSmith Official Docs · Free", url: "https://docs.smith.langchain.com/" },
      },
    ],
    systemDesign: {
      title: "AI System Design",
      topics: ["LLM API cost modeling and optimization", "Caching strategies for LLM responses (semantic cache)", "Streaming architecture for AI APIs (SSE, WebSockets)", "Token budget management & context window optimization", "Fallback model patterns (GPT-4 → GPT-3.5 on failure)", "RAG architecture patterns (naive → advanced → modular)"],
      r1: { label: "LLM Patterns – eugeneyan.com · Free Blog", url: "https://eugeneyan.com/writing/llm-patterns/" },
      r2: { label: "Chip Huyen – Designing ML Systems · Book Preview", url: "https://huyenchip.com/2023/10/10/open-challenges-llm-serving.html" },
    },
    project: {
      name: "🚀 Project 2 — AI Streaming Chat API",
      tag: "Proves you understand LLMs end-to-end",
      stack: "FastAPI + OpenAI/Anthropic API + Redis (cache) + PostgreSQL (history) + Docker + Deployed URL",
      features: [
        "Streaming chat endpoint with Server-Sent Events (SSE)",
        "Conversation memory stored in PostgreSQL (per user, per session)",
        "Redis caching for repeated identical queries (saves API cost)",
        "Token counting + cost estimation per request (logged to DB)",
        "API key auth for multi-user support",
        "Fallback from GPT-4 to GPT-3.5 on rate limit/error",
      ],
      architecture: "Client → FastAPI → Redis (cache check) → LLM API (streaming SSE) → PostgreSQL (save history + cost log). Full Docker Compose. Deployed with live URL.",
      standout: "Streaming + caching + cost tracking = senior-level thinking. Walk any interviewer through every layer. Token cost log shows you understand production constraints.",
    },
    frontend: "⚛️ Start React here. Build a simple chat UI in React that connects to your streaming backend. Learn: useState, useEffect, fetch API, handling SSE streams. 1 week max.",
    checklist: ["Can explain tokens/embeddings/attention without notes", "RAG pipeline built from scratch (no LangChain first)", "RAGAS eval scores documented", "Live streaming chat API deployed", "Can answer 'why cosine similarity?' cold"],
  },
  {
    id: 3,
    icon: "🤖",
    title: "Agents & Production AI",
    subtitle: "Agents are the current frontier. Every AI JD in 2025–26 mentions this. Build one that actually works.",
    duration: "Month 8–12",
    salary: "₹15–25 LPA (AI Engineer / Senior AI Engineer)",
    color: "#a855f7",
    gradient: "linear-gradient(135deg,#4c1d95,#0f0a1e)",
    role: "Required: AI Engineer · Senior AI · AI Platform",
    topics: [
      {
        name: "Agent Architecture (ReAct)",
        tag: "MANDATORY",
        what: "ReAct pattern (Reason + Act), tool use loop, planning, observation → action → observation cycle, multi-step reasoning, failure handling, agent guardrails.",
        depth: "Build an agent that uses 3+ tools and handles multi-step tasks reliably. Explain the ReAct loop without notes.",
        why: "Agents are the current frontier in Applied AI. Every JD mentions this. Building one = immediate senior signal.",
        fast: { label: "LangGraph Quickstart – Official Docs · Free", url: "https://langchain-ai.github.io/langgraph/tutorials/introduction/" },
        deep: { label: "ReAct Paper – Yao et al. · Arxiv · Free", url: "https://arxiv.org/abs/2210.03629" },
      },
      {
        name: "Tool Use & Function Calling",
        tag: "MANDATORY",
        what: "OpenAI function calling, Anthropic tool use API, custom tool creation (web search, DB query, file read, API calls), tool error handling, tool chaining.",
        depth: "Build 3+ custom tools. Handle tool errors gracefully without breaking the agent loop. Test edge cases.",
        why: "Tool use is how agents interact with the world. You will build this in every AI role at ₹15 LPA+.",
        fast: { label: "Anthropic Tool Use Docs · Free", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview" },
        deep: { label: "DeepLearning.AI – Functions Tools & Agents · Free", url: "https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/" },
      },
      {
        name: "LangGraph Deep Dive",
        tag: "MANDATORY",
        what: "State machines for agents, conditional edges, cycles, persistence, human-in-the-loop, streaming from graphs, checkpointing.",
        depth: "Rebuild a LangChain agent using LangGraph. Understand why graph-based orchestration > chain-based for complex agents.",
        why: "LangGraph is becoming the industry standard for production agents. Early knowledge = strong signal in 2025–26 India market.",
        fast: { label: "LangGraph Full Tutorial – YouTube · Free", url: "https://www.youtube.com/watch?v=R-o_a6dvzQM" },
        deep: { label: "LangGraph Official Docs · Free", url: "https://langchain-ai.github.io/langgraph/" },
      },
      {
        name: "Memory Systems",
        tag: "MANDATORY",
        what: "Conversation buffer, summary memory, entity memory, vector store memory, external memory in PostgreSQL, Mem0. When to use each type.",
        depth: "Implement 3 different memory types for the same agent. Explain the tradeoffs cold in an interview.",
        why: "Memory is what makes agents useful beyond one-shot tasks. Long-term memory = retention + personalization = real product.",
        fast: { label: "LangGraph Persistence & Memory · Free Docs", url: "https://langchain-ai.github.io/langgraph/concepts/memory/" },
        deep: { label: "Mem0 – Memory Layer for AI · Docs · Free", url: "https://docs.mem0.ai/overview" },
      },
      {
        name: "Production Deployment & Scaling",
        tag: "MANDATORY",
        what: "Kubernetes basics, horizontal scaling, load balancing AI APIs, async queues for long AI tasks, rate limiting, cost controls, monitoring (Prometheus + Grafana basics).",
        depth: "Deploy your AI system on a cloud platform (GCP/AWS free tier). Explain how you'd handle 1000 concurrent users.",
        why: "₹15 LPA+ requires production mindset. Anyone can call an API. Scaling it is the real skill.",
        fast: { label: "Kubernetes in 100s – Fireship · YouTube · Free", url: "https://www.youtube.com/watch?v=PziYflu8cB8" },
        deep: { label: "Google Cloud – Free AI/ML Courses · Free", url: "https://cloud.google.com/learn/training/machinelearning-ai" },
      },
      {
        name: "Multi-Agent Systems",
        tag: "OPTIONAL",
        what: "Supervisor pattern, agent orchestration, CrewAI, AutoGen, task delegation, output validation between agents.",
        depth: "Build a 2-agent system where agents delegate tasks. Know when multi-agent is overkill vs necessary.",
        why: "Overkill for most apps — but knowing the pattern signals you understand the frontier. Differentiator, not requirement.",
        fast: { label: "CrewAI Docs · Free", url: "https://docs.crewai.com/" },
        deep: { label: "DeepLearning.AI – AI Agents in LangGraph · Free", url: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/" },
      },
      {
        name: "Fine-tuning & Open Source Models",
        tag: "OPTIONAL",
        what: "LoRA / QLoRA fine-tuning, Hugging Face transformers, PEFT, running Llama 3 locally (Ollama), when to fine-tune vs prompt.",
        depth: "Fine-tune one small model on a custom dataset. Understand when fine-tuning beats prompting.",
        why: "Not mandatory for ₹15 LPA but opens doors to ₹20–30 LPA ML Engineer roles later.",
        fast: { label: "Hugging Face – Fine-tuning Quickstart · Free Docs", url: "https://huggingface.co/docs/transformers/training" },
        deep: { label: "DeepLearning.AI – Finetuning LLMs · Free Course", url: "https://www.deeplearning.ai/short-courses/finetuning-large-language-models/" },
      },
    ],
    systemDesign: {
      title: "AI Production System Design",
      topics: ["Agent orchestration architecture (LangGraph state machine design)", "Async job queues for long-running AI tasks", "Cost control strategies (caching, model fallback, batching)", "Multi-tenant AI system isolation", "Observability stack for AI systems (traces, evals, costs)", "Scaling LLM backends on cloud (horizontal + vertical)"],
      r1: { label: "Chip Huyen – LLM Serving Open Challenges · Free Blog", url: "https://huyenchip.com/2023/10/10/open-challenges-llm-serving.html" },
      r2: { label: "a16z – Emerging AI Stack · Free Blog", url: "https://a16z.com/emerging-architectures-for-llm-applications/" },
    },
    project: {
      name: "🚀 Project 4 — AI Research Agent (SaaS-style)",
      tag: "Your ₹15 LPA hiring project",
      stack: "FastAPI + LangGraph + OpenAI/Anthropic + Tavily Search + pgvector + Redis + React + Docker + GCP/AWS",
      features: [
        "ReAct agent with 4+ tools: web search, PDF reader, DB query, calculator",
        "LangGraph state machine with human-in-the-loop approval",
        "Long-term memory via Mem0 + PostgreSQL (remembers user context)",
        "Multi-user support with auth, per-user agent state isolation",
        "Real-time progress streaming via WebSocket to React frontend",
        "Cost tracking dashboard — per user, per session, per tool call",
        "LangSmith tracing for full observability of every agent run",
      ],
      architecture: "React UI (WebSocket) ↔ FastAPI ↔ LangGraph Agent (state machine) → Tools: [Tavily Search, pgvector RAG, PostgreSQL, Calculator] → PostgreSQL (memory + cost log) + Redis (cache) → LangSmith (traces). Docker + deployed on GCP/AWS.",
      standout: "This is a real product. Multi-user, agent with tools, memory, cost tracking, full observability. Walk an interviewer through the LangGraph state machine. Most candidates have tutorial projects — you have a system.",
    },
    frontend: "⚛️ Full React frontend. Build a proper agent chat UI: streaming responses, tool call visualization (show WHICH tool is being used), cost display per session. This is now a portfolio piece.",
    checklist: ["Agent with 3+ tools deployed and live", "LangGraph state machine diagram explainable in interview", "Cost tracking per user in DB", "LangSmith traces showing full agent reasoning", "React frontend with WebSocket streaming", "Can explain every architecture decision"],
  },
];

const PROJECTS = [
  { phase: "Phase 2", name: "Task Manager API", level: "Beginner", salary: "₹5–9 LPA proof", color: "#10b981", icon: "📋", desc: "Full CRUD API with auth, Redis cache, pytest, Docker, live deploy. Your first real engineering project." },
  { phase: "Phase 3", name: "AI Streaming Chat", level: "Intermediate", salary: "₹10–12 LPA proof", color: "#3b82f6", icon: "💬", desc: "Streaming LLM API with SSE, conversation memory, cost tracking, Redis. Shows you understand LLMs deeply." },
  { phase: "Phase 3", name: "RAG Document Q&A", level: "Intermediate+", salary: "₹12–15 LPA proof", color: "#8b5cf6", icon: "📄", desc: "PDF upload → chunk → embed → pgvector → hybrid search → Cohere rerank → answer with sources. Built from scratch first, then with LangChain." },
  { phase: "Phase 4", name: "AI Research Agent", level: "Advanced", salary: "₹15–20 LPA proof", color: "#a855f7", icon: "🤖", desc: "LangGraph agent with 4+ tools, long-term memory, multi-user, cost dashboard, full observability. This is your ₹15 LPA project." },
  { phase: "Phase 4", name: "SaaS AI Copilot", level: "Expert", salary: "₹20–25 LPA proof", color: "#ec4899", icon: "🚀", desc: "Productionized AI assistant: Stripe billing, usage limits, admin dashboard, horizontal scaling. If you build this, you're past ₹15 LPA." },
];

const CHECKLIST = [
  { cat: "Backend", items: ["Live deployed API with public URL", "JWT auth + RBAC working", "70%+ pytest coverage on a project", "Docker Compose locally + Docker deployed", "Can explain every line in 30-min interview"] },
  { cat: "Applied AI", items: ["RAG pipeline built from scratch (no framework)", "Embeddings / cosine similarity explainable cold", "Streaming LLM API deployed and working", "Prompt engineering for structured JSON output", "RAGAS eval scores documented for 1 project"] },
  { cat: "Agents", items: ["ReAct loop explainable without notes", "LangGraph state machine built + deployed", "3+ custom tools working in an agent", "Long-term memory working (Mem0 / PostgreSQL)", "Full agent observability in LangSmith"] },
  { cat: "DSA & CS", items: ["80+ LeetCode problems (Easy + Medium)", "System design mock done (backend + AI)", "OS/networking concepts explainable cold", "Git: branching, rebase, PR workflow daily", "Linux terminal comfortable (SSH, grep, curl)"] },
  { cat: "Portfolio", items: ["GitHub: daily commits for 6+ months", "4 projects with live deployed URLs", "README for every project (arch diagram)", "LinkedIn updated with skills + projects", "1 blog post / technical writeup published"] },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function Roadmap() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeTab, setActiveTab] = useState("topics");
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [view, setView] = useState("roadmap"); // roadmap | projects | checklist

  const phase = PHASES[activePhase];
  const c = phase.color;

  const tabs = [
    { id: "topics", label: "Topics" },
    { id: "project", label: "Project" },
    { id: "sysdesign", label: "Sys Design" },
    { id: "frontend", label: "Frontend" },
    { id: "checklist", label: "Checklist" },
  ];

  return (
    <div style={{
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
      background: "#060810",
      color: "#cdd5f0",
      minHeight: "100vh",
      padding: "0",
      WebkitFontSmoothing: "antialiased",
    }}>

      {/* ── HEADER ── */}
      <div style={{
        background: "linear-gradient(180deg,#0d0f1e 0%,#060810 100%)",
        padding: "20px 16px 0",
        borderBottom: "1px solid #131826",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        {/* Top Bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 9, color: "#2a3050", letterSpacing: 3, marginBottom: 4 }}>APPLIED AI ENGINEERING</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#e8eeff", letterSpacing: -0.5 }}>12-Month Roadmap</div>
            <div style={{ fontSize: 10, color: "#3a4060", marginTop: 2 }}>Target: ₹15 LPA+ · India Market · 2025–26</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 8, color: "#2a3050", letterSpacing: 2, marginBottom: 4 }}>YOUR PROFILE</div>
            <div style={{ fontSize: 9, color: "#4a5580" }}>Basic Python · Beginner DSA</div>
            <div style={{ fontSize: 9, color: "#4a5580" }}>3–4 hrs/day · Student</div>
          </div>
        </div>

        {/* View Toggle */}
        <div style={{ display: "flex", gap: 4, marginBottom: 14 }}>
          {[["roadmap","🗺 Roadmap"],["projects","🏗 Projects"],["checklist","✅ Checklist"]].map(([v,l]) => (
            <button key={v} onClick={() => setView(v)} style={{
              padding: "6px 12px", fontSize: 10, fontWeight: 700,
              background: view === v ? "#e8eeff" : "#0d0f1e",
              color: view === v ? "#060810" : "#3a4060",
              border: `1px solid ${view === v ? "#e8eeff" : "#131826"}`,
              borderRadius: 6, cursor: "pointer", fontFamily: "inherit", letterSpacing: 0.5,
            }}>{l}</button>
          ))}
        </div>

        {/* Phase Selector (roadmap view only) */}
        {view === "roadmap" && (
          <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 12, scrollbarWidth: "none" }}>
            {PHASES.map((ph, i) => (
              <button key={i} onClick={() => { setActivePhase(i); setActiveTab("topics"); setExpandedTopic(null); }} style={{
                flexShrink: 0,
                padding: "8px 14px",
                background: activePhase === i ? ph.color : "#0d0f1e",
                color: activePhase === i ? "#060810" : "#3a4060",
                border: `1px solid ${activePhase === i ? ph.color : "#131826"}`,
                borderRadius: 8, cursor: "pointer", fontFamily: "inherit",
                fontSize: 10, fontWeight: 700, letterSpacing: 0.5,
                whiteSpace: "nowrap",
                transition: "all 0.2s",
              }}>
                {ph.icon} P{i + 1}
                <span style={{ display: "block", fontSize: 8, fontWeight: 400, opacity: 0.8 }}>{ph.duration}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ════════════════════ ROADMAP VIEW ════════════════════ */}
      {view === "roadmap" && (
        <div style={{ padding: "16px" }}>

          {/* Phase Header */}
          <div style={{
            background: phase.gradient,
            border: `1px solid ${c}30`,
            borderRadius: 12, padding: "16px",
            marginBottom: 14,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: 22, marginBottom: 4 }}>{phase.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: c, letterSpacing: -0.5 }}>Phase {activePhase + 1}: {phase.title}</div>
                <div style={{ fontSize: 10, color: "#4a5580", marginTop: 3 }}>{phase.duration}</div>
                <div style={{ fontSize: 11, color: "#6a7590", marginTop: 6, lineHeight: 1.5, maxWidth: 260 }}>{phase.subtitle}</div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontSize: 8, color: "#2a3050", letterSpacing: 2, marginBottom: 4 }}>SALARY STAGE</div>
                <div style={{ fontSize: 10, color: c, fontWeight: 700, maxWidth: 130, textAlign: "right", lineHeight: 1.5 }}>{phase.salary}</div>
                <div style={{ marginTop: 8, fontSize: 8, color: "#2a3050", letterSpacing: 1.5 }}>ROLE</div>
                <div style={{ fontSize: 9, color: "#4a5580", marginTop: 2, maxWidth: 130, textAlign: "right", lineHeight: 1.5 }}>{phase.role}</div>
              </div>
            </div>
          </div>

          {/* Tab Bar */}
          <div style={{ display: "flex", gap: 4, overflowX: "auto", marginBottom: 14, scrollbarWidth: "none" }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
                flexShrink: 0, padding: "7px 13px", fontSize: 9, fontWeight: 700, letterSpacing: 1,
                background: activeTab === t.id ? c : "#0d0f1e",
                color: activeTab === t.id ? "#060810" : "#3a4060",
                border: `1px solid ${activeTab === t.id ? c : "#131826"}`,
                borderRadius: 6, cursor: "pointer", fontFamily: "inherit",
                transition: "all 0.15s",
              }}>{t.label.toUpperCase()}</button>
            ))}
          </div>

          {/* ── TOPICS TAB ── */}
          {activeTab === "topics" && (
            <div>
              {/* Legend */}
              <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                {[["MANDATORY","#ef4444"],["OPTIONAL","#6b7280"]].map(([l,col]) => (
                  <div key={l} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 2, background: col }} />
                    <span style={{ fontSize: 9, color: "#3a4060", letterSpacing: 1.5 }}>{l}</span>
                  </div>
                ))}
              </div>

              {phase.topics.map((topic, i) => {
                const isOpen = expandedTopic === i;
                const isMandatory = topic.tag === "MANDATORY";
                return (
                  <div key={i} style={{
                    background: "#0A0C15",
                    border: `1px solid ${isOpen ? c + "40" : "#131826"}`,
                    borderRadius: 10, marginBottom: 8,
                    overflow: "hidden",
                    transition: "border-color 0.2s",
                  }}>
                    {/* Topic Header */}
                    <button onClick={() => setExpandedTopic(isOpen ? null : i)} style={{
                      width: "100%", padding: "13px 14px",
                      background: "transparent", border: "none",
                      cursor: "pointer", textAlign: "left", fontFamily: "inherit",
                      display: "flex", alignItems: "center", gap: 10,
                    }}>
                      <div style={{
                        width: 6, height: 6, borderRadius: 2, flexShrink: 0,
                        background: isMandatory ? "#ef4444" : "#374151",
                      }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: isOpen ? c : "#cdd5f0", letterSpacing: 0.3 }}>{topic.name}</div>
                        <div style={{ fontSize: 9, color: isMandatory ? "#ef444460" : "#37414180", marginTop: 2, letterSpacing: 1.5 }}>{topic.tag}</div>
                      </div>
                      <span style={{ fontSize: 10, color: "#3a4060", transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▼</span>
                    </button>

                    {/* Expanded Content */}
                    {isOpen && (
                      <div style={{ padding: "0 14px 14px", borderTop: `1px solid ${c}20` }}>
                        {[
                          ["WHAT TO LEARN", topic.what, "#e8eeff"],
                          ["REQUIRED DEPTH", topic.depth, c],
                          ["WHY IT MATTERS", topic.why, "#94a3b8"],
                        ].map(([label, content, col]) => (
                          <div key={label} style={{ marginTop: 12 }}>
                            <div style={{ fontSize: 8, color: "#2a3050", letterSpacing: 2.5, marginBottom: 5 }}>{label}</div>
                            <div style={{ fontSize: 11, color: col, lineHeight: 1.75 }}>{content}</div>
                          </div>
                        ))}
                        <div style={{ marginTop: 14 }}>
                          <div style={{ fontSize: 8, color: "#2a3050", letterSpacing: 2.5, marginBottom: 8 }}>RESOURCES</div>
                          {[["⚡ FAST-TRACK", topic.fast, "#fbbf24"],["📖 DEEP", topic.deep, c]].map(([label, r, col]) => (
                            <a key={label} href={r.url} target="_blank" rel="noopener noreferrer" style={{
                              display: "flex", alignItems: "flex-start", gap: 10,
                              padding: "10px 12px", background: "#0e1120",
                              border: `1px solid ${col}20`, borderRadius: 7,
                              marginBottom: 6, textDecoration: "none",
                            }}>
                              <span style={{ fontSize: 8, color: col, fontWeight: 700, letterSpacing: 1, flexShrink: 0, paddingTop: 1 }}>{label}</span>
                              <span style={{ fontSize: 10, color: col, lineHeight: 1.5 }}>{r.label} ↗</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* ── PROJECT TAB ── */}
          {activeTab === "project" && (
            <div>
              {phase.project ? (
                <div style={{ background: "#0A0C15", border: `1px solid ${c}28`, borderRadius: 12, padding: 16 }}>
                  <div style={{ fontSize: 8, color: "#2a3050", letterSpacing: 2.5, marginBottom: 4 }}>PHASE {activePhase + 1} PROJECT</div>
                  <div style={{ color: c, fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{phase.project.name}</div>
                  <div style={{ fontSize: 9, color: "#6b7280", marginBottom: 16, background: c + "15", display: "inline-block", padding: "3px 8px", borderRadius: 4 }}>{phase.project.tag}</div>

                  {[["TECH STACK", phase.project.stack],["HIGH-LEVEL ARCHITECTURE", phase.project.architecture]].map(([lbl,val]) => (
                    <div key={lbl} style={{ padding: 12, background: "#0e1120", border: "1px solid #131826", borderRadius: 8, marginBottom: 8 }}>
                      <div style={{ fontSize: 8, color: "#2a3050", letterSpacing: 2.5, marginBottom: 6 }}>{lbl}</div>
                      <div style={{ fontSize: 11, color: "#6a7590", lineHeight: 1.75 }}>{val}</div>
                    </div>
                  ))}

                  <div style={{ padding: 12, background: "#0e1120", border: "1px solid #131826", borderRadius: 8, marginBottom: 8 }}>
                    <div style={{ fontSize: 8, color: "#2a3050", letterSpacing: 2.5, marginBottom: 10 }}>FEATURES TO BUILD</div>
                    {phase.project.features.map((f, i) => (
                      <div key={i} style={{ display: "flex", gap: 8, marginBottom: 7 }}>
                        <span style={{ color: c, fontSize: 10, flexShrink: 0 }}>▸</span>
                        <span style={{ fontSize: 11, color: "#6a7590", lineHeight: 1.6 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ padding: 12, background: c + "08", border: `1px solid ${c}20`, borderRadius: 8 }}>
                    <div style={{ fontSize: 8, color: c + "88", letterSpacing: 2.5, marginBottom: 6 }}>⭐ WHY THIS STANDS OUT FOR HIRING</div>
                    <div style={{ fontSize: 12, color: "#8a9ab0", lineHeight: 1.75 }}>{phase.project.standout}</div>
                  </div>
                </div>
              ) : (
                <div style={{ padding: 28, color: "#2a3050", fontSize: 12, textAlign: "center", border: "1px solid #131826", borderRadius: 12, background: "#0A0C15", lineHeight: 1.8 }}>
                  No project this phase.<br/>Strong foundation now = better projects later.<br/><br/>
                  <span style={{ color: "#3a4060" }}>Focus: Python · DSA · Git · CS Fundamentals</span>
                </div>
              )}
            </div>
          )}

          {/* ── SYSTEM DESIGN TAB ── */}
          {activeTab === "sysdesign" && (
            <div>
              {phase.systemDesign ? (
                <div style={{ background: "#0A0C15", border: `1px solid ${c}28`, borderRadius: 12, padding: 16 }}>
                  <div style={{ color: c, fontSize: 14, fontWeight: 700, marginBottom: 16 }}>🔷 {phase.systemDesign.title}</div>
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 8, color: "#2a3050", letterSpacing: 2.5, marginBottom: 10 }}>TOPICS TO MASTER</div>
                    {phase.systemDesign.topics.map((t, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, padding: "9px 12px", marginBottom: 5, background: "#0e1120", border: "1px solid #131826", borderRadius: 7 }}>
                        <span style={{ color: c, fontSize: 11 }}>◈</span>
                        <span style={{ fontSize: 11, color: "#6a7590" }}>{t}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ fontSize: 8, color: "#2a3050", letterSpacing: 2.5, marginBottom: 10 }}>RESOURCES</div>
                  {[phase.systemDesign.r1, phase.systemDesign.r2].map((r, i) => (
                    <a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", background: "#0e1120", border: `1px solid ${c}20`, borderRadius: 8, marginBottom: 7, textDecoration: "none" }}>
                      <span style={{ fontSize: 10, color: c, fontWeight: 700, flexShrink: 0 }}>R{i + 1}</span>
                      <span style={{ fontSize: 11, color: c, lineHeight: 1.5 }}>{r.label} ↗</span>
                    </a>
                  ))}
                </div>
              ) : (
                <div style={{ padding: 28, color: "#2a3050", fontSize: 12, textAlign: "center", border: "1px solid #131826", borderRadius: 12, background: "#0A0C15", lineHeight: 1.8 }}>
                  System design starts in Phase 2.<br/>Coding fundamentals come first.
                </div>
              )}
            </div>
          )}

          {/* ── FRONTEND TAB ── */}
          {activeTab === "frontend" && (
            <div style={{ background: "#0A0C15", border: `1px solid ${c}28`, borderRadius: 12, padding: 16 }}>
              <div style={{ color: c, fontSize: 13, fontWeight: 700, marginBottom: 12 }}>🖥 Frontend Strategy — Phase {activePhase + 1}</div>
              <div style={{ color: "#6a7590", fontSize: 12, lineHeight: 2 }}>{phase.frontend}</div>
            </div>
          )}

          {/* ── CHECKLIST TAB ── */}
          {activeTab === "checklist" && (
            <div style={{ background: "#0A0C15", border: `1px solid ${c}28`, borderRadius: 12, padding: 16 }}>
              <div style={{ color: c, fontSize: 13, fontWeight: 700, marginBottom: 14 }}>✓ End-of-Phase Checklist</div>
              <div style={{ fontSize: 10, color: "#4a5580", marginBottom: 14 }}>You must be able to say YES to every item before moving to the next phase.</div>
              {phase.checklist.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, padding: "10px 12px", marginBottom: 6, background: "#0e1120", border: "1px solid #131826", borderRadius: 7 }}>
                  <span style={{ color: c, fontSize: 12, flexShrink: 0, marginTop: 1 }}>□</span>
                  <span style={{ fontSize: 11, color: "#8a9ab0", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ════════════════════ PROJECTS VIEW ════════════════════ */}
      {view === "projects" && (
        <div style={{ padding: 16 }}>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#e8eeff" }}>4 Projects, Increasing Difficulty</div>
            <div style={{ fontSize: 11, color: "#4a5580", marginTop: 4 }}>Each project proves you're ready for the next salary band.</div>
          </div>
          {PROJECTS.map((p, i) => (
            <div key={i} style={{
              background: "#0A0C15", border: `1px solid ${p.color}25`,
              borderRadius: 12, padding: 16, marginBottom: 10,
              borderLeft: `3px solid ${p.color}`,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <div>
                  <div style={{ fontSize: 18, marginBottom: 4 }}>{p.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: p.color }}>{p.name}</div>
                  <div style={{ fontSize: 9, color: "#3a4060", marginTop: 2, letterSpacing: 1 }}>{p.phase}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 8, background: p.color + "20", color: p.color, padding: "3px 7px", borderRadius: 4, letterSpacing: 1, marginBottom: 4 }}>{p.level}</div>
                  <div style={{ fontSize: 9, color: p.color, fontWeight: 700 }}>{p.salary}</div>
                </div>
              </div>
              <div style={{ fontSize: 11, color: "#6a7590", lineHeight: 1.75 }}>{p.desc}</div>
            </div>
          ))}

          {/* Salary Progression */}
          <div style={{ background: "#0A0C15", border: "1px solid #131826", borderRadius: 12, padding: 16, marginTop: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#e8eeff", marginBottom: 14 }}>Realistic Salary Progression (India)</div>
            {[
              ["After Phase 1", "Not hireable yet", "#374151"],
              ["After Phase 2 + P1 project", "₹5–9 LPA", "#10b981"],
              ["After Phase 3 + P2+P3 projects", "₹10–15 LPA", "#3b82f6"],
              ["After Phase 4 + P4 project", "₹15–25 LPA", "#a855f7"],
              ["SaaS project + open source", "₹20–30 LPA", "#ec4899"],
            ].map(([stage, salary, col], i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: "#0e1120", border: "1px solid #131826", borderRadius: 7, marginBottom: 5 }}>
                <span style={{ fontSize: 11, color: "#6a7590" }}>{stage}</span>
                <span style={{ fontSize: 11, color: col, fontWeight: 700 }}>{salary}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ════════════════════ CHECKLIST VIEW ════════════════════ */}
      {view === "checklist" && (
        <div style={{ padding: 16 }}>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#e8eeff" }}>Final Job-Readiness Checklist</div>
            <div style={{ fontSize: 11, color: "#4a5580", marginTop: 4 }}>All boxes checked = ready to apply for ₹15 LPA+ roles.</div>
          </div>
          {CHECKLIST.map((section, si) => {
            const colors = ["#f59e0b","#10b981","#3b82f6","#a855f7","#ec4899"];
            const col = colors[si];
            return (
              <div key={si} style={{ background: "#0A0C15", border: `1px solid ${col}20`, borderRadius: 12, padding: 14, marginBottom: 10 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: col, letterSpacing: 1, marginBottom: 12 }}>{section.cat.toUpperCase()}</div>
                {section.items.map((item, ii) => (
                  <div key={ii} style={{ display: "flex", gap: 10, padding: "8px 0", borderBottom: ii < section.items.length - 1 ? "1px solid #0e1120" : "none" }}>
                    <span style={{ color: col, fontSize: 13, flexShrink: 0 }}>□</span>
                    <span style={{ fontSize: 11, color: "#8a9ab0", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            );
          })}

          {/* Brutal Truth Footer */}
          <div style={{ background: "#0A0C15", border: "1px solid #ef444430", borderRadius: 12, padding: 16, marginTop: 8 }}>
            <div style={{ fontSize: 11, color: "#ef4444", fontWeight: 700, marginBottom: 10, letterSpacing: 1 }}>⚠ BRUTAL TRUTH</div>
            {[
              "7 CGPA is a filter. Projects are the override. Hire with 4 strong projects > 9 CGPA with zero projects.",
              "If AI writes it and you can't explain it — it's a liability in interviews, not an asset.",
              "DSA: 80 problems minimum. Skip this and you'll fail Round 1 at every product company.",
              "Localhost projects don't count. Every project needs a live URL.",
              "Week 1 starts today. Not Monday. Not next month.",
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                <span style={{ color: "#ef4444", flexShrink: 0, fontSize: 10 }}>→</span>
                <span style={{ fontSize: 11, color: "#8a9ab0", lineHeight: 1.7 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── FOOTER ── */}
      <div style={{
        margin: 16, padding: "14px 16px",
        background: "#0A0C15", border: "1px solid #131826", borderRadius: 10,
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12,
      }}>
        {[
          ["RULE #1", "If AI writes it → retype manually, explain every line aloud.", "#00E5FF"],
          ["RULE #2", "Week 1 starts today. Not Monday. Not next week.", "#FF5566"],
          ["WEAK SPOTS", "DSA (start now) · No projects (Phase 2 fixes this)", "#fbbf24"],
          ["TARGET", "₹15 LPA+ · Applied AI Engineer · 12 months", "#a855f7"],
        ].map(([lbl, val, col]) => (
          <div key={lbl}>
            <div style={{ fontSize: 7, color: "#1e2230", letterSpacing: 2.5, marginBottom: 4 }}>{lbl}</div>
            <div style={{ fontSize: 10, color: col, fontWeight: 700, lineHeight: 1.5 }}>{val}</div>
          </div>
        ))}
      </div>

    </div>
  );
}
