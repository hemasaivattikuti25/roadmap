import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "CS Fundamentals",
    duration: "Months 1–2",
    color: "#00E5FF",
    icon: "⚙️",
    summary: "Lock the foundation. Every elite AI engineer writes clean Python and knows DSA cold.",
    topics: [
      {
        name: "Python Mastery",
        mandatory: true,
        what: "OOP, decorators, async/await, comprehensions, error handling, file I/O, modules",
        depth: "Write production code without GPT assistance. Own the language completely.",
        why: "Everything in the AI stack — LangChain, FastAPI, ML — is Python. Weak Python = constant blocker.",
        fast: { label: "Mosh Hamedani — Python Full Course (6h) · YouTube · Free", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
        deep: { label: "Python Crash Course Book — Eric Matthes · No Starch Press", url: "https://nostarch.com/pythoncrashcourse3e" },
      },
      {
        name: "DSA Fundamentals",
        mandatory: true,
        what: "Arrays, Strings, HashMap, Two Pointers, Sliding Window, Stack, Queue, Recursion basics",
        depth: "Easy fluency + Medium competence. NOT competitive programming. 80 problems minimum.",
        why: "Every ₹15 LPA product company tests DSA. Skip this = rejected at screening round.",
        fast: { label: "NeetCode 75 — Structured Practice List · Free", url: "https://neetcode.io/practice" },
        deep: { label: "Abdul Bari — DSA Full Course · YouTube · Free", url: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" },
      },
      {
        name: "Git & Version Control",
        mandatory: true,
        what: "Init, commit, branch, merge, rebase, pull requests, .gitignore, GitHub workflows",
        depth: "Comfortable with daily Git operations and can resolve merge conflicts alone.",
        why: "You will use Git every single day professionally. No Git knowledge = not hireable.",
        fast: { label: "Git & GitHub Crash Course — freeCodeCamp · YouTube · Free", url: "https://www.youtube.com/watch?v=RGOj5yH7evk" },
        deep: { label: "Pro Git — Scott Chacon · Free Book Online", url: "https://git-scm.com/book/en/v2" },
      },
      {
        name: "SQL Fundamentals",
        mandatory: true,
        what: "SELECT, JOINs, GROUP BY, indexes, subqueries, transactions, basic schema design",
        depth: "Write queries for real data problems without looking up syntax.",
        why: "Every backend and AI system reads/writes a database. PostgreSQL is the industry standard.",
        fast: { label: "SQLBolt — Interactive SQL Lessons · Free", url: "https://sqlbolt.com/" },
        deep: { label: "Mode SQL Tutorial — Intermediate + Advanced · Free", url: "https://mode.com/sql-tutorial/" },
      },
      {
        name: "Linux & Terminal",
        mandatory: false,
        what: "Navigation, file ops, permissions, grep, curl, SSH, environment variables, bash basics",
        depth: "Comfortable enough to deploy apps on a server without a GUI.",
        why: "All production AI systems run on Linux servers. Terminal fluency = 10x faster debugging.",
        fast: { label: "Missing Semester of CS — Shell Tools · MIT · Free", url: "https://missing.csail.mit.edu/2020/shell-tools/" },
        deep: { label: "Linux Command Line — William Shotts · Free PDF", url: "https://linuxcommand.org/tlcl.php" },
      },
    ],
    project: null,
    systemDesign: null,
    frontend: "No frontend this phase. Pure Python + DSA + SQL focus. Add distraction = lose the race.",
  },
  {
    id: 2,
    title: "Backend Engineering",
    duration: "Months 3–5",
    color: "#B388FF",
    icon: "🔧",
    summary: "Build real APIs you can deploy and defend in an interview. This is your engineering backbone.",
    topics: [
      {
        name: "FastAPI",
        mandatory: true,
        what: "Routing, Pydantic models, dependency injection, middleware, background tasks, async endpoints",
        depth: "Build a full REST API from scratch without GPT. Understand every single line.",
        why: "FastAPI is the #1 framework for Python AI backends. It's on your resume — own it now.",
        fast: { label: "FastAPI Official Tutorial — tiangolo · Docs · Free", url: "https://fastapi.tiangolo.com/tutorial/" },
        deep: { label: "ArjanCodes FastAPI Series · YouTube · Free", url: "https://www.youtube.com/@ArjanCodes" },
      },
      {
        name: "Authentication & Security",
        mandatory: true,
        what: "JWT tokens, OAuth2 flow, password hashing (bcrypt), RBAC, API key auth, HTTPS basics",
        depth: "Implement auth from scratch. Know what each piece does and why it exists.",
        why: "Every production app needs auth. Interviewers always ask this. Your DRDO project used it.",
        fast: { label: "FastAPI Security — Official Docs (JWT + OAuth2) · Free", url: "https://fastapi.tiangolo.com/tutorial/security/" },
        deep: { label: "Hussein Nasser — JWT Deep Dive · YouTube · Free", url: "https://www.youtube.com/watch?v=7Q17ubqLfaM" },
      },
      {
        name: "PostgreSQL Advanced",
        mandatory: true,
        what: "Advanced JOINs, indexes, EXPLAIN ANALYZE, connection pooling, migrations with Alembic, pgvector",
        depth: "Design schemas, write optimized queries, run migrations without help.",
        why: "pgvector is how you store AI embeddings. You used it in Mithra. Now understand it fully.",
        fast: { label: "PostgreSQL Tutorial — postgresqltutorial.com · Free", url: "https://www.postgresqltutorial.com/" },
        deep: { label: "CMU Database Systems — Andy Pavlo · Free Course", url: "https://15445.courses.cs.cmu.edu/fall2022/" },
      },
      {
        name: "Docker & Deployment",
        mandatory: true,
        what: "Dockerfile, docker-compose, volumes, networking, environment vars, deploy to Railway/Render",
        depth: "Containerize any app. Understand what Docker actually solves and why.",
        why: "Every AI project you build must be deployable. Docker is the universal standard.",
        fast: { label: "Docker in 100 Seconds + Full Course — Fireship · YouTube · Free", url: "https://www.youtube.com/watch?v=Gjnup-PuquQ" },
        deep: { label: "Docker Official Docs — Get Started Series · Free", url: "https://docs.docker.com/get-started/" },
      },
      {
        name: "REST API Design",
        mandatory: true,
        what: "HTTP methods, status codes, versioning, pagination, rate limiting, error handling patterns",
        depth: "Design clean APIs other developers can use without documentation.",
        why: "You'll build APIs that AI systems consume. Bad API design breaks everything downstream.",
        fast: { label: "REST API Best Practices — freeCodeCamp · YouTube · Free", url: "https://www.youtube.com/watch?v=-MTSQjw5DrM" },
        deep: { label: "API Design Patterns — JJ Geewax · Manning Books", url: "https://www.manning.com/books/api-design-patterns" },
      },
      {
        name: "Redis & Caching",
        mandatory: false,
        what: "Key-value store, TTL, caching strategies, pub/sub basics, session storage",
        depth: "Know when and why to cache. Implement basic caching in FastAPI.",
        why: "LLM APIs are expensive and slow. Caching responses = cost savings = senior-level thinking.",
        fast: { label: "Redis Crash Course — Traversy Media · YouTube · Free", url: "https://www.youtube.com/watch?v=jgpVdJB2sKQ" },
        deep: { label: "Redis University — RU101 Free Course · Free", url: "https://university.redis.com/courses/ru101/" },
      },
    ],
    systemDesign: {
      title: "Backend System Design",
      topics: ["Client-Server architecture", "Load balancing basics", "Database scaling (read replicas)", "API gateway pattern", "Monolith vs Microservices tradeoffs"],
      r1: { label: "System Design Primer — GitHub · Free", url: "https://github.com/donnemartin/system-design-primer" },
      r2: { label: "ByteByteGo System Design Newsletter · Free Tier", url: "https://bytebytego.com/" },
    },
    project: {
      name: "Task Manager API",
      stack: "FastAPI + PostgreSQL + JWT Auth + Docker + Render",
      features: ["User registration/login with JWT", "CRUD for tasks with user isolation via RBAC", "Pagination, filtering, rate limiting", "Dockerized + live deployed URL"],
      architecture: "Client → FastAPI (auth middleware) → PostgreSQL. Docker Compose locally. Deployed on Render with live URL.",
      standout: "Recruiters can hit your live API. Shows you can ship, not just code on localhost.",
    },
    frontend: "Streamlit only — build a simple UI to demo your API. No React yet. Streamlit lets you focus on backend while still having a visual demo for interviews.",
  },
  {
    id: 3,
    title: "Applied AI Engineering",
    duration: "Months 6–9",
    color: "#69FF47",
    icon: "🧠",
    summary: "This is your core differentiator. Build RAG and LLM systems you can fully explain and defend.",
    topics: [
      {
        name: "LLM Fundamentals",
        mandatory: true,
        what: "Tokens, context windows, temperature, embeddings, fine-tuning vs prompting, model families (GPT, Gemini, Llama)",
        depth: "Explain how any LLM works to a non-technical person. Understand tradeoffs between models.",
        why: "Applied AI engineers who don't understand LLMs are just API callers. You need the mental model.",
        fast: { label: "Andrej Karpathy — Intro to LLMs (1h) · YouTube · Free", url: "https://www.youtube.com/watch?v=zjkBMFhNj_g" },
        deep: { label: "fast.ai — Practical Deep Learning for Coders · Free", url: "https://course.fast.ai/" },
      },
      {
        name: "Prompt Engineering",
        mandatory: true,
        what: "Zero-shot, few-shot, chain-of-thought, ReAct, system prompts, structured outputs, prompt injection defense",
        depth: "Write prompts that reliably produce structured outputs. Know why each technique works.",
        why: "80% of Applied AI work is prompt engineering. This is your actual daily job.",
        fast: { label: "Prompt Engineering Guide — DAIR.AI · Free", url: "https://www.promptingguide.ai/" },
        deep: { label: "DeepLearning.AI — ChatGPT Prompt Engineering · Free", url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" },
      },
      {
        name: "RAG Pipelines",
        mandatory: true,
        what: "Document loading, chunking strategies, embedding models, vector storage, retrieval (similarity search), generation with context",
        depth: "Build a RAG pipeline from scratch — every layer — without LangChain abstractions first.",
        why: "RAG is the #1 pattern in enterprise AI. Every company building internal AI tools uses this.",
        fast: { label: "RAG From Scratch — LangChain YouTube Series · Free", url: "https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x" },
        deep: { label: "DeepLearning.AI — Building and Evaluating Advanced RAG · Free", url: "https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/" },
      },
      {
        name: "LangChain / LlamaIndex",
        mandatory: true,
        what: "Chains, memory, tools, retrievers, document loaders, output parsers, callbacks",
        depth: "Use the framework confidently. Know what it does under the hood.",
        why: "Industry standard tooling. Every AI startup uses one of these. Appears in 70%+ of JDs.",
        fast: { label: "LangChain Official Docs — Quickstart + How-To · Free", url: "https://python.langchain.com/docs/get_started/quickstart" },
        deep: { label: "Greg Kamradt — LangChain Full Course · YouTube · Free", url: "https://www.youtube.com/watch?v=_v_fgW2SkkQ" },
      },
      {
        name: "Vector Databases",
        mandatory: true,
        what: "Embeddings storage, similarity search (cosine/dot product), indexing (HNSW), Chroma locally, Pinecone/pgvector in prod",
        depth: "Explain why vector DBs exist, when to use vs SQL, and implement one end-to-end.",
        why: "Every RAG system needs a vector DB. pgvector is on your resume — own it completely now.",
        fast: { label: "Pinecone Learn — Vector DB Explained · Free", url: "https://www.pinecone.io/learn/vector-database/" },
        deep: { label: "DeepLearning.AI — Vector Databases: Embeddings to Applications · Free", url: "https://www.deeplearning.ai/short-courses/vector-databases-embeddings-applications/" },
      },
      {
        name: "LLM APIs (OpenAI/Gemini)",
        mandatory: true,
        what: "API auth, chat completions, streaming responses, function calling, token counting, cost management",
        depth: "Integrate any LLM API into a FastAPI backend. Handle errors, retries, cost limits.",
        why: "You will call LLM APIs every single day as an Applied AI engineer.",
        fast: { label: "OpenAI API Quickstart — Official Docs · Free", url: "https://platform.openai.com/docs/quickstart" },
        deep: { label: "DeepLearning.AI — Functions, Tools and Agents with LangChain · Free", url: "https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/" },
      },
      {
        name: "Evaluation & Observability",
        mandatory: false,
        what: "LLM evals (RAGAS), hallucination detection, latency tracking, LangSmith tracing",
        depth: "Set up basic eval pipeline and tracing for one project.",
        why: "Almost no junior candidates think about eval. Instant differentiation in interviews.",
        fast: { label: "RAGAS Documentation — RAG Evaluation Framework · Free", url: "https://docs.ragas.io/en/latest/" },
        deep: { label: "DeepLearning.AI — Evaluating and Debugging Generative AI · Free", url: "https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/" },
      },
    ],
    systemDesign: {
      title: "AI System Design",
      topics: ["RAG architecture patterns", "Embedding pipeline design", "LLM caching strategies", "Chunking strategy tradeoffs", "Multi-tenant AI system design"],
      r1: { label: "Chip Huyen — Designing ML Systems · O'Reilly Book", url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/" },
      r2: { label: "Awesome Generative AI Guide — GitHub · Free", url: "https://github.com/aishwaryanr/awesome-generative-ai-guide" },
    },
    project: {
      name: "RAG Document Q&A System",
      stack: "FastAPI + LangChain + pgvector + OpenAI/Gemini API + Streamlit + Docker",
      features: ["Upload any PDF and ask questions", "Semantic search with source citations", "Conversation memory across turns", "Source attribution for every answer", "Live deployed URL"],
      architecture: "Streamlit UI → FastAPI → LangChain RAG chain → pgvector (retrieval) + LLM (generation) → Response with sources shown",
      standout: "Every AI team needs this internally. Building it from scratch proves you understand every layer.",
    },
    frontend: "Streamlit for all AI projects this phase — fast to build, looks professional, shows AI output clearly. Your UI is a demo layer right now, not the product.",
  },
  {
    id: 4,
    title: "Advanced AI Engineering",
    duration: "Months 10–12",
    color: "#FFD740",
    icon: "🚀",
    summary: "Production thinking. Agents. Scale. This separates ₹10 LPA from ₹15 LPA+.",
    topics: [
      {
        name: "AI Agents",
        mandatory: true,
        what: "ReAct pattern, tool use, multi-step reasoning, LangGraph, agent memory, failure modes and debugging",
        depth: "Build an agent that uses 3+ tools and handles multi-step tasks reliably.",
        why: "Agents are the current frontier in Applied AI. Every JD in 2025–26 mentions this.",
        fast: { label: "LangGraph Quickstart — Official Docs · Free", url: "https://langchain-ai.github.io/langgraph/tutorials/introduction/" },
        deep: { label: "DeepLearning.AI — AI Agents in LangGraph · Free", url: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/" },
      },
      {
        name: "Production AI Systems",
        mandatory: true,
        what: "Rate limiting LLM calls, fallback models, async queues, caching LLM responses, cost optimization patterns",
        depth: "Know how to make an AI system reliable and cost-efficient at real scale.",
        why: "Building a demo is easy. Making it production-grade is what companies actually pay for.",
        fast: { label: "Full Stack LLM Bootcamp — The Full Stack · YouTube · Free", url: "https://www.youtube.com/playlist?list=PL1T8fO7ArWleMMI8KPJ_5D5XSlovTW_Ur" },
        deep: { label: "Building LLM Powered Applications — Valentina Alto · Packt", url: "https://www.packtpub.com/product/building-llm-powered-applications/9781835462317" },
      },
      {
        name: "CI/CD & DevOps Basics",
        mandatory: true,
        what: "GitHub Actions, automated testing, environment management, secrets handling, deployment pipelines",
        depth: "Set up a basic CI/CD pipeline that tests and deploys your app on every push.",
        why: "Applied AI engineers own their deployment. This is table stakes at any serious company.",
        fast: { label: "GitHub Actions Full Course — TechWorld with Nana · YouTube · Free", url: "https://www.youtube.com/watch?v=R8_veQiYBjI" },
        deep: { label: "DevOps with Docker + GitHub Actions — Full Stack Open · Free", url: "https://fullstackopen.com/en/part11" },
      },
      {
        name: "React Basics",
        mandatory: false,
        what: "Components, props, state, useEffect, fetch API calls, basic routing with React Router",
        depth: "Build a simple frontend that calls your AI backend. Not a React expert — just functional.",
        why: "Some companies want full-stack AI engineers. React makes your demos 10x more impressive.",
        fast: { label: "React Crash Course — Traversy Media · YouTube · Free", url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8" },
        deep: { label: "The Odin Project — Full Stack JavaScript Path · Free", url: "https://www.theodinproject.com/paths/full-stack-javascript" },
      },
      {
        name: "Fine-tuning Basics",
        mandatory: false,
        what: "When to fine-tune vs RAG, LoRA/QLoRA concepts, HuggingFace basics, dataset preparation",
        depth: "Understand the decision framework. Run one fine-tune on a small model.",
        why: "Most Applied AI engineers only do RAG. Fine-tuning knowledge = immediate senior signal.",
        fast: { label: "DeepLearning.AI — Finetuning Large Language Models · Free", url: "https://www.deeplearning.ai/short-courses/finetuning-large-language-models/" },
        deep: { label: "HuggingFace Course — Fine-tuning Pretrained Models · Free", url: "https://huggingface.co/learn/nlp-course/chapter3/1" },
      },
    ],
    systemDesign: {
      title: "Scaling & Production AI Design",
      topics: ["Multi-agent orchestration patterns", "LLM gateway design", "Embedding pipeline at scale", "Observability stack (LangSmith, Arize)", "Cost modeling for LLM systems"],
      r1: { label: "a16z — Emerging LLM App Stack Article · Free", url: "https://a16z.com/the-emerging-architectures-for-llm-applications/" },
      r2: { label: "LLM Patterns — eugeneyan.com · Free Blog", url: "https://eugeneyan.com/writing/llm-patterns/" },
    },
    project: {
      name: "AI Agent SaaS / Mithra Rebuild",
      stack: "FastAPI + LangGraph + pgvector + OpenAI + React + Docker + GitHub Actions CI/CD",
      features: ["Multi-step AI agent with tools (web search, DB query, file read)", "User auth with isolated workspaces", "LLM observability and cost tracking dashboard", "Full CI/CD pipeline on push", "Cost tracking per user session"],
      architecture: "React UI → FastAPI (auth + rate limit) → LangGraph Agent → Tools (search/DB/files) + LLM → Response stream → LangSmith traces for observability",
      standout: "This is production-grade. Walk any interviewer through the architecture and you're hired on the spot.",
    },
    frontend: "React this phase. Build a real frontend for your capstone. Streamlit is for demos — React is for products. This is what makes your portfolio look professional and serious.",
  },
];

const schedule = [
  { period: "Mon – Fri", slots: ["45 min → DSA on LeetCode", "90 min → Main phase topic", "45 min → Project coding", "30 min → Review & explain aloud"] },
  { period: "Saturday", slots: ["2 hrs → Project deep work", "1 hr → System design reading", "—", "—"] },
  { period: "Sunday", slots: ["Review week's learnings", "Write 5 bullet points of real understanding", "Plan next week tasks", "REST — no guilt"] },
];

const mistakes = [
  { title: "Tutorial Hell", desc: "Watching 50 videos and building nothing. After every tutorial, build something immediately from scratch." },
  { title: "GPT as a Crutch", desc: "If GPT writes it, you re-type it manually and explain each line out loud. Otherwise you learned nothing." },
  { title: "Chasing New Tools", desc: "LangGraph, CrewAI, AutoGen — new frameworks weekly. Ignore all of them until Month 9. Fundamentals first." },
  { title: "Avoiding DSA", desc: "45 minutes/day. No skipping. Companies still test it. Pain now = offer later." },
  { title: "Portfolio Polishing Loop", desc: "Your portfolio is never ready. Apply from Month 10 even if it feels early. Waiting = losing." },
  { title: "Can't Explain Mithra", desc: "You have 690 users. If you can't walk an interviewer through the architecture in 5 minutes, you're wasting your biggest asset." },
];

export default function App() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeTopic, setActiveTopic] = useState(null);
  const [activeTab, setActiveTab] = useState("topics");
  const [showSchedule, setShowSchedule] = useState(false);
  const [showMistakes, setShowMistakes] = useState(false);

  const phase = phases[activePhase];
  const c = phase.color;

  return (
    <div style={{ minHeight: "100vh", background: "#07090F", color: "#DDE1EC", fontFamily: "'Courier New', monospace", fontSize: 13 }}>
      <style>{`
        * { box-sizing: border-box; }
        a { color: inherit; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .btn { cursor: pointer; border: none; background: none; font-family: inherit; font-size: inherit; transition: all 0.15s; }
        .btn:hover { opacity: 0.85; }
        .card { transition: all 0.15s; cursor: pointer; }
        .card:hover { transform: translateX(3px); }
        @keyframes fadeIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
        .fade { animation: fadeIn 0.25s ease forwards; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .blink { animation: blink 1.8s infinite; }
      `}</style>

      {/* TOP BAR */}
      <div style={{ background: "#0B0E18", borderBottom: `1px solid ${c}33`, padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#FFF", letterSpacing: 1 }}>
            <span className="blink" style={{ color: c, marginRight: 8 }}>▶</span>
            APPLIED AI ENGINEERING ROADMAP
          </div>
          <div style={{ fontSize: 10, color: "#444", marginTop: 3, letterSpacing: 2 }}>
            HEMASAI VATTIKUTI · 12 MONTHS · 3–4 HRS/DAY · TARGET ₹15 LPA+
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn" onClick={() => { setShowSchedule(!showSchedule); setShowMistakes(false); }} style={{ padding: "7px 14px", border: `1px solid ${showSchedule ? "#FFD740" : "#222"}`, borderRadius: 6, color: showSchedule ? "#FFD740" : "#555", fontSize: 11, letterSpacing: 1 }}>
            📅 SCHEDULE
          </button>
          <button className="btn" onClick={() => { setShowMistakes(!showMistakes); setShowSchedule(false); }} style={{ padding: "7px 14px", border: `1px solid ${showMistakes ? "#FF6B6B" : "#222"}`, borderRadius: 6, color: showMistakes ? "#FF6B6B" : "#555", fontSize: 11, letterSpacing: 1 }}>
            ⚠️ MISTAKES
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "24px 20px" }}>

        {/* SCHEDULE PANEL */}
        {showSchedule && (
          <div className="fade" style={{ background: "#0B0E18", border: "1px solid #FFD74033", borderRadius: 10, padding: 24, marginBottom: 24 }}>
            <div style={{ color: "#FFD740", fontWeight: 700, fontSize: 14, marginBottom: 16, letterSpacing: 1 }}>📅 WEEKLY NON-NEGOTIABLES</div>
            {schedule.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 12, marginBottom: 12, paddingBottom: 12, borderBottom: i < schedule.length - 1 ? "1px solid #111" : "none" }}>
                <div style={{ color: "#FFD740", fontSize: 11, fontWeight: 700, paddingTop: 4 }}>{row.period}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {row.slots.map((s, j) => s !== "—" && (
                    <div key={j} style={{ padding: "5px 12px", background: "#131820", border: "1px solid #1C2333", borderRadius: 5, color: "#888", fontSize: 11 }}>{s}</div>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ marginTop: 12, padding: 12, background: "#FFD74008", border: "1px solid #FFD74022", borderRadius: 8, color: "#888", fontSize: 11, lineHeight: 1.7 }}>
              ⚡ DSA rule: 45 min every weekday without exception. Month 1–3: Easy. Month 4–9: Easy + Medium. Month 10–12: Mock interviews 3×/week.
            </div>
          </div>
        )}

        {/* MISTAKES PANEL */}
        {showMistakes && (
          <div className="fade" style={{ background: "#0B0E18", border: "1px solid #FF6B6B33", borderRadius: 10, padding: 24, marginBottom: 24 }}>
            <div style={{ color: "#FF6B6B", fontWeight: 700, fontSize: 14, marginBottom: 16, letterSpacing: 1 }}>⚠️ FATAL MISTAKES TO AVOID</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {mistakes.map((m, i) => (
                <div key={i} style={{ padding: 14, background: "#131820", border: "1px solid #FF6B6B18", borderRadius: 8 }}>
                  <div style={{ color: "#FF6B6B", fontWeight: 700, fontSize: 12, marginBottom: 6 }}>{m.title}</div>
                  <div style={{ color: "#666", fontSize: 11, lineHeight: 1.6 }}>{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PHASE TABS */}
        <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
          {phases.map((p, i) => (
            <button key={i} className="btn" onClick={() => { setActivePhase(i); setActiveTopic(null); setActiveTab("topics"); }}
              style={{ padding: "10px 16px", background: activePhase === i ? p.color + "15" : "#0B0E18", border: `1px solid ${activePhase === i ? p.color : "#1C2333"}`, borderRadius: 8, color: activePhase === i ? p.color : "#444", fontSize: 11, letterSpacing: 1, textAlign: "left" }}>
              <div style={{ fontWeight: 700 }}>{p.icon} PHASE {p.id}</div>
              <div style={{ fontSize: 10, marginTop: 2, opacity: 0.7 }}>{p.title}</div>
              <div style={{ fontSize: 10, marginTop: 1, opacity: 0.5 }}>{p.duration}</div>
            </button>
          ))}
        </div>

        {/* PHASE HEADER */}
        <div style={{ padding: "16px 20px", background: c + "08", border: `1px solid ${c}22`, borderRadius: 10, marginBottom: 20 }}>
          <div style={{ color: c, fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{phase.icon} Phase {phase.id}: {phase.title} · {phase.duration}</div>
          <div style={{ color: "#777", fontSize: 12, lineHeight: 1.6 }}>{phase.summary}</div>
        </div>

        {/* INNER TABS */}
        <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
          {["topics", "project", "sysdesign", "frontend"].map(tab => (
            <button key={tab} className="btn" onClick={() => { setActiveTab(tab); setActiveTopic(null); }}
              style={{ padding: "7px 14px", background: activeTab === tab ? c + "15" : "transparent", border: `1px solid ${activeTab === tab ? c : "#1C2333"}`, borderRadius: 6, color: activeTab === tab ? c : "#444", fontSize: 11, letterSpacing: 1 }}>
              {tab === "topics" ? "📚 TOPICS" : tab === "project" ? "🏗 PROJECT" : tab === "sysdesign" ? "🔷 SYS DESIGN" : "🖥 FRONTEND"}
            </button>
          ))}
        </div>

        {/* ── TOPICS TAB ── */}
        {activeTab === "topics" && (
          <div className="fade">
            <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 14 }}>
              <span style={{ padding: "3px 10px", background: "#00E5FF15", border: "1px solid #00E5FF33", borderRadius: 4, color: "#00E5FF", fontSize: 10, letterSpacing: 1 }}>MANDATORY = must learn</span>
              <span style={{ padding: "3px 10px", background: "#333", border: "1px solid #444", borderRadius: 4, color: "#666", fontSize: 10, letterSpacing: 1 }}>OPTIONAL = if time allows</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: activeTopic !== null ? "240px 1fr" : "1fr", gap: 14, alignItems: "start" }}>
              {/* LIST */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {phase.topics.map((t, i) => (
                  <div key={i} className="card" onClick={() => setActiveTopic(activeTopic === i ? null : i)}
                    style={{ padding: "12px 14px", background: activeTopic === i ? c + "12" : "#0B0E18", border: `1px solid ${activeTopic === i ? c : "#1C2333"}`, borderRadius: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: activeTopic === i ? c : "#BBB" }}>{t.name}</span>
                      <span style={{ fontSize: 9, padding: "2px 7px", borderRadius: 3, background: t.mandatory ? "#00E5FF15" : "#222", color: t.mandatory ? "#00E5FF" : "#555", border: `1px solid ${t.mandatory ? "#00E5FF33" : "#333"}`, whiteSpace: "nowrap", letterSpacing: 1 }}>
                        {t.mandatory ? "MUST" : "OPT"}
                      </span>
                    </div>
                    {activeTopic !== i && <div style={{ fontSize: 10, color: "#444", marginTop: 5, lineHeight: 1.5 }}>{t.why.slice(0, 70)}…</div>}
                  </div>
                ))}
              </div>

              {/* DETAIL */}
              {activeTopic !== null && (
                <div className="fade" style={{ background: "#0B0E18", border: `1px solid ${c}33`, borderRadius: 10, padding: 20 }}>
                  <div style={{ color: c, fontSize: 15, fontWeight: 700, marginBottom: 18 }}>{phase.topics[activeTopic].name}</div>

                  {[
                    { label: "📌 WHAT TO LEARN", val: phase.topics[activeTopic].what },
                    { label: "🎯 REQUIRED DEPTH", val: phase.topics[activeTopic].depth },
                    { label: "💡 WHY IT MATTERS", val: phase.topics[activeTopic].why },
                  ].map((row, i) => (
                    <div key={i} style={{ marginBottom: 16 }}>
                      <div style={{ fontSize: 9, color: "#444", letterSpacing: 2, marginBottom: 6 }}>{row.label}</div>
                      <div style={{ color: "#999", fontSize: 12, lineHeight: 1.7, paddingLeft: 10, borderLeft: `2px solid ${c}44` }}>{row.val}</div>
                    </div>
                  ))}

                  <div style={{ marginTop: 18 }}>
                    <div style={{ fontSize: 9, color: "#444", letterSpacing: 2, marginBottom: 10 }}>📚 RESOURCES</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <a href={phase.topics[activeTopic].fast.url} target="_blank" rel="noopener noreferrer"
                        style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "11px 14px", background: "#131820", border: "1px solid #00E5FF22", borderRadius: 8 }}>
                        <span style={{ fontSize: 9, padding: "3px 7px", background: "#00E5FF15", color: "#00E5FF", border: "1px solid #00E5FF33", borderRadius: 3, letterSpacing: 1, whiteSpace: "nowrap" }}>FAST TRACK</span>
                        <span style={{ fontSize: 11, color: "#00E5FF", lineHeight: 1.5 }}>{phase.topics[activeTopic].fast.label} ↗</span>
                      </a>
                      <a href={phase.topics[activeTopic].deep.url} target="_blank" rel="noopener noreferrer"
                        style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "11px 14px", background: "#131820", border: `1px solid ${c}22`, borderRadius: 8 }}>
                        <span style={{ fontSize: 9, padding: "3px 7px", background: c + "15", color: c, border: `1px solid ${c}33`, borderRadius: 3, letterSpacing: 1, whiteSpace: "nowrap" }}>DEEP DIVE</span>
                        <span style={{ fontSize: 11, color: c, lineHeight: 1.5 }}>{phase.topics[activeTopic].deep.label} ↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── PROJECT TAB ── */}
        {activeTab === "project" && (
          <div className="fade">
            {phase.project ? (
              <div style={{ background: "#0B0E18", border: `1px solid ${c}33`, borderRadius: 10, padding: 24 }}>
                <div style={{ color: c, fontSize: 15, fontWeight: 700, marginBottom: 20 }}>🏗 {phase.project.name}</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                  {[{ label: "TECH STACK", val: phase.project.stack }, { label: "ARCHITECTURE", val: phase.project.architecture }].map((item, i) => (
                    <div key={i} style={{ padding: 14, background: "#131820", border: "1px solid #1C2333", borderRadius: 8 }}>
                      <div style={{ fontSize: 9, color: "#444", letterSpacing: 2, marginBottom: 8 }}>{item.label}</div>
                      <div style={{ fontSize: 11, color: "#888", lineHeight: 1.7 }}>{item.val}</div>
                    </div>
                  ))}
                </div>
                <div style={{ padding: 14, background: "#131820", border: "1px solid #1C2333", borderRadius: 8, marginBottom: 12 }}>
                  <div style={{ fontSize: 9, color: "#444", letterSpacing: 2, marginBottom: 10 }}>FEATURES TO BUILD</div>
                  {phase.project.features.map((f, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, marginBottom: 7 }}>
                      <span style={{ color: c }}>▸</span>
                      <span style={{ fontSize: 11, color: "#888", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: 14, background: c + "08", border: `1px solid ${c}22`, borderRadius: 8 }}>
                  <div style={{ fontSize: 9, color: c + "99", letterSpacing: 2, marginBottom: 8 }}>⭐ WHY THIS STANDS OUT FOR HIRING</div>
                  <div style={{ fontSize: 12, color: "#AAA", lineHeight: 1.7 }}>{phase.project.standout}</div>
                </div>
              </div>
            ) : (
              <div style={{ padding: 24, color: "#444", fontSize: 12 }}>No project this phase. Focus entirely on fundamentals. Strong foundation = better projects later.</div>
            )}
          </div>
        )}

        {/* ── SYSTEM DESIGN TAB ── */}
        {activeTab === "sysdesign" && (
          <div className="fade">
            {phase.systemDesign ? (
              <div style={{ background: "#0B0E18", border: `1px solid ${c}33`, borderRadius: 10, padding: 24 }}>
                <div style={{ color: c, fontSize: 15, fontWeight: 700, marginBottom: 20 }}>🔷 {phase.systemDesign.title}</div>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 9, color: "#444", letterSpacing: 2, marginBottom: 10 }}>TOPICS TO COVER</div>
                  {phase.systemDesign.topics.map((t, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, padding: "9px 12px", marginBottom: 5, background: "#131820", border: "1px solid #1C2333", borderRadius: 6 }}>
                      <span style={{ color: c }}>◈</span>
                      <span style={{ fontSize: 11, color: "#888" }}>{t}</span>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 9, color: "#444", letterSpacing: 2, marginBottom: 10 }}>RESOURCES</div>
                {[phase.systemDesign.r1, phase.systemDesign.r2].map((r, i) => (
                  <a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", background: "#131820", border: `1px solid ${c}22`, borderRadius: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 10, color: c, fontWeight: 700 }}>R{i + 1}</span>
                    <span style={{ fontSize: 11, color: c, lineHeight: 1.5 }}>{r.label} ↗</span>
                  </a>
                ))}
              </div>
            ) : (
              <div style={{ padding: 24, color: "#444", fontSize: 12 }}>System design begins in Phase 2. Focus on coding fundamentals first.</div>
            )}
          </div>
        )}

        {/* ── FRONTEND TAB ── */}
        {activeTab === "frontend" && (
          <div className="fade" style={{ background: "#0B0E18", border: `1px solid ${c}33`, borderRadius: 10, padding: 24 }}>
            <div style={{ color: c, fontSize: 15, fontWeight: 700, marginBottom: 14 }}>🖥 Frontend — Phase {phase.id}</div>
            <div style={{ color: "#999", fontSize: 12, lineHeight: 1.8 }}>{phase.frontend}</div>
          </div>
        )}

        {/* FOOTER */}
        <div style={{ marginTop: 32, padding: "16px 20px", background: "#0B0E18", border: "1px solid #1C2333", borderRadius: 10, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          {[
            { label: "RULE #1", val: "If GPT writes it — you retype it manually and explain every line aloud.", col: "#00E5FF" },
            { label: "RULE #2", val: "Week 1 starts today. Not Monday. Not next week.", col: "#FF6B6B" },
            { label: "TARGET", val: "₹15 LPA+ offer by Month 12", col: "#FFD740" },
          ].map((item, i) => (
            <div key={i}>
              <div style={{ fontSize: 9, color: "#333", letterSpacing: 2, marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontSize: 11, color: item.col, fontWeight: 700 }}>{item.val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
