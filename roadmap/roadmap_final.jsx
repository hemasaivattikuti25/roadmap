import { useState } from "react";

/* ── PALETTE ── */
const C = {
  bg:      "#080A0F",
  s1:      "#0D1017",
  s2:      "#12161F",
  s3:      "#171C28",
  border:  "rgba(255,255,255,0.06)",
  border2: "rgba(255,255,255,0.11)",
  text:    "#C9D1E0",
  text2:   "#5A6480",
  text3:   "#2E3650",
};

/* ── PHASE DATA ── */
const phases = [
  {
    id: "DSA",
    label: "PARALLEL · EVERY DAY",
    title: "DSA",
    subtitle: "Run this every single day in parallel",
    tags: ["Striver A2Z Sheet", "2–3 problems/day", "Arrays → LinkedList → Trees → Graphs → DP"],
    color: "#818CF8",
    optional: false,
    topics: [
      {
        name: "Striver A2Z Sheet",
        tags: ["Arrays", "LinkedList", "Trees", "Graphs", "DP"],
        why: "The single most structured DSA path for product company interviews. Follow in order.",
        fast: { label: "Striver A2Z Sheet — take.u-forward.org", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" },
        quality: { label: "Abdul Bari DSA Full Course — YouTube", url: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" },
      },
    ],
  },
  {
    id: 1,
    label: "PHASE 1",
    title: "Python Foundation",
    subtitle: "Core · OOP · Decorators · Generators · Async",
    tags: ["Core", "OOP", "Decorators", "Generators", "Async"],
    color: "#34D399",
    optional: false,
    topics: [
      {
        name: "Python Core + OOP",
        tags: ["Variables", "Functions", "Classes", "Inheritance", "Dunder methods"],
        why: "Everything in your stack runs on Python. Weak Python = constant blocker in every phase.",
        fast: { label: "Python Full Course — Mosh Hamedani · 6h · YouTube", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
        quality: { label: "Python Tutorial Playlist — Corey Schafer · YouTube", url: "https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU" },
      },
      {
        name: "Decorators + Generators + Async",
        tags: ["@decorator", "yield", "async/await", "event loop"],
        why: "FastAPI is built on async. Decorators are used everywhere in real codebases.",
        fast: { label: "Python Asyncio — ArjanCodes · 1h · YouTube", url: "https://www.youtube.com/watch?v=2IW-ZEui4h4" },
        quality: { label: "asyncio Official Docs — Python 3", url: "https://docs.python.org/3/library/asyncio.html" },
      },
    ],
  },
  {
    id: 2,
    label: "PHASE 2",
    title: "FastAPI Backend",
    subtitle: "Routing · Pydantic · Auth · Middleware · Testing · Logging",
    tags: ["Routing", "Pydantic", "Auth", "Middleware", "Testing", "Logging"],
    color: "#60A5FA",
    optional: false,
    topics: [
      {
        name: "FastAPI Core",
        tags: ["Routing", "Pydantic", "DI", "Middleware", "Background tasks"],
        why: "#1 Python framework for AI backends. On your resume — own every line of it.",
        fast: { label: "FastAPI Official Tutorial — fastapi.tiangolo.com", url: "https://fastapi.tiangolo.com/tutorial/" },
        quality: { label: "FastAPI Full Course — Bitfumes · 5h · YouTube", url: "https://www.youtube.com/results?search_query=FastAPI+full+course+Bitfumes" },
      },
      {
        name: "JWT Auth + OAuth2",
        tags: ["JWT structure", "Access/Refresh tokens", "bcrypt", "OAuth2 flow"],
        why: "Interviewers ask this every round. You must explain the token flow — not just 'I used a library'.",
        fast: { label: "JWT Explained — Web Dev Simplified · 15min · YouTube", url: "https://www.youtube.com/watch?v=7Q17ubqLfaM" },
        quality: { label: "FastAPI Security Docs — Official JWT + OAuth2", url: "https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/" },
      },
      {
        name: "LLD + Design Patterns",
        tags: ["SOLID", "Strategy", "Factory", "Observer", "Class design"],
        why: "Product companies (Razorpay, Groww) ask LLD in every backend round. Cannot skip.",
        fast: { label: "SOLID in Python — ArjanCodes · YouTube", url: "https://www.youtube.com/results?search_query=ArjanCodes+SOLID+principles+Python" },
        quality: { label: "LLD Full Playlist — Concept && Coding · YouTube", url: "https://www.youtube.com/results?search_query=Concept+and+Coding+LLD+low+level+design+playlist" },
      },
      {
        name: "REST API Design",
        tags: ["HTTP methods", "Status codes", "Versioning", "Pagination", "Error handling"],
        why: "You'll build APIs that AI systems consume. Bad API design breaks everything downstream.",
        fast: { label: "REST API Best Practices — freeCodeCamp · YouTube", url: "https://www.youtube.com/watch?v=-MTSQjw5DrM" },
        quality: { label: "API Design Patterns — JJ Geewax · Manning", url: "https://www.manning.com/books/api-design-patterns" },
      },
      {
        name: "pytest + Logging",
        tags: ["Unit tests", "Fixtures", "Mocking", "logging module", "Structured logs"],
        why: "Every serious backend role expects tests. No tests = 'this engineer isn't production-ready'.",
        fast: { label: "pytest Tutorial — Corey Schafer · YouTube", url: "https://www.youtube.com/watch?v=cHYq1MRoyI0" },
        quality: { label: "pytest Official Docs — docs.pytest.org", url: "https://docs.pytest.org/en/stable/" },
      },
    ],
  },
  {
    id: 3,
    label: "PHASE 3",
    title: "Database Layer",
    subtitle: "PostgreSQL · SQLAlchemy · MongoDB · Redis",
    tags: ["PostgreSQL", "SQLAlchemy", "MongoDB", "Redis"],
    color: "#A78BFA",
    optional: false,
    topics: [
      {
        name: "PostgreSQL + SQLAlchemy",
        tags: ["JOINs", "Indexes", "Transactions", "ORM", "pgvector", "Alembic"],
        why: "pgvector is how you store AI embeddings — you used it in Mithra. Own it completely.",
        fast: { label: "SQL Full Course — freeCodeCamp · YouTube", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
        quality: { label: "PostgreSQL Tutorial — postgresqltutorial.com", url: "https://www.postgresqltutorial.com/" },
      },
      {
        name: "MongoDB",
        tags: ["Documents", "Collections", "Aggregation", "Indexes", "PyMongo"],
        why: "You used MongoDB at DRDO. Know it deeply enough to defend every design decision.",
        fast: { label: "MongoDB Crash Course — Traversy Media · YouTube", url: "https://www.youtube.com/watch?v=-56x56UppqQ" },
        quality: { label: "MongoDB University — M001 Free Course", url: "https://university.mongodb.com/courses/M001/about" },
      },
      {
        name: "Redis + Caching",
        tags: ["Cache-aside", "Write-through", "TTL", "Rate limiting", "Pub/Sub", "Session storage"],
        why: "Every backend interview: 'How do you rate limit?' 'Why Redis over DB?' LLM caching = cost savings.",
        fast: { label: "Redis Crash Course — Traversy Media · 30min · YouTube", url: "https://www.youtube.com/watch?v=jgpVdJB2sKQ" },
        quality: { label: "Redis University — RU101 Free Course", url: "https://university.redis.com/courses/ru101/" },
      },
    ],
  },
  {
    id: 4,
    label: "PHASE 4 · WAS MISSING",
    title: "System Design",
    subtitle: "HLD · Load balancing · CAP · Queues · AI System Design",
    tags: ["HLD", "Load balancing", "CAP theorem", "Queues", "AI System Design"],
    color: "#F59E0B",
    optional: false,
    topics: [
      {
        name: "HLD Fundamentals",
        tags: ["Client-Server", "Load balancing", "CDN", "Caching layer", "DB replication"],
        why: "Every ₹15 LPA+ interview has a system design round. No prep here = automatic reject.",
        fast: { label: "System Design Primer — GitHub · donnemartin", url: "https://github.com/donnemartin/system-design-primer" },
        quality: { label: "ByteByteGo — System Design Newsletter + YouTube", url: "https://bytebytego.com/" },
      },
      {
        name: "CAP Theorem + Distributed Systems",
        tags: ["Consistency", "Availability", "Partition tolerance", "BASE vs ACID"],
        why: "Interviewers ask CAP in almost every distributed systems conversation.",
        fast: { label: "CAP Theorem Explained — ByteByteGo · YouTube", url: "https://www.youtube.com/results?search_query=CAP+theorem+explained+ByteByteGo" },
        quality: { label: "Designing Data-Intensive Applications — Martin Kleppmann", url: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/" },
      },
      {
        name: "Message Queues + Async Patterns",
        tags: ["Kafka basics", "RabbitMQ", "Event-driven", "Worker queues", "Celery"],
        why: "AI pipelines use queues for long-running tasks (embedding jobs, LLM calls).",
        fast: { label: "Message Queues Explained — Hussein Nasser · YouTube", url: "https://www.youtube.com/results?search_query=message+queues+Hussein+Nasser" },
        quality: { label: "Kafka Official Docs — Introduction", url: "https://kafka.apache.org/documentation/" },
      },
      {
        name: "OS + Computer Networks",
        tags: ["Process vs Thread", "Deadlock", "HTTP/HTTPS", "TCP vs UDP", "DNS"],
        why: "CS fundamentals rounds staple. 'What happens when you type a URL' — must answer cold.",
        fast: { label: "OS + Networks 1hr each — Gate Smashers · YouTube", url: "https://www.youtube.com/results?search_query=operating+systems+interview+Gate+Smashers+1+hour" },
        quality: { label: "Computer Networks Full — Neso Academy · YouTube", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhX6r2uhhlubuF5QextdCSM" },
      },
    ],
  },
  {
    id: 5,
    label: "PHASE 5",
    title: "AI Core",
    subtitle: "LLM fundamentals · HuggingFace · Embeddings · NumPy · PyTorch",
    tags: ["LLM fundamentals", "HuggingFace", "Embeddings", "NumPy", "PyTorch"],
    color: "#F472B6",
    optional: false,
    topics: [
      {
        name: "LLM Fundamentals",
        tags: ["Tokens", "Context window", "Temperature", "Sampling", "Model families"],
        why: "Applied AI engineers who don't understand LLMs are just API callers. Build the mental model.",
        fast: { label: "Intro to LLMs — Andrej Karpathy · 1h · YouTube", url: "https://www.youtube.com/watch?v=zjkBMFhNj_g" },
        quality: { label: "Build GPT from Scratch — Andrej Karpathy · YouTube", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY" },
      },
      {
        name: "HuggingFace + Transformers",
        tags: ["Pipelines", "Tokenizers", "Model hub", "Inference API"],
        why: "Industry standard for loading and running any open-source model.",
        fast: { label: "HuggingFace Crash Course — Patrick Loeber · 1h · YouTube", url: "https://www.youtube.com/watch?v=QEaBAZQCtwE" },
        quality: { label: "HuggingFace NLP Course — huggingface.co · Free", url: "https://huggingface.co/learn/nlp-course/chapter1/1" },
      },
      {
        name: "Embeddings + Similarity",
        tags: ["Word2Vec", "Sentence embeddings", "Cosine similarity", "HNSW indexing"],
        why: "Embeddings are the core of every RAG system. You need to understand them, not just call an API.",
        fast: { label: "Vector Embeddings Explained — Pinecone Learn", url: "https://www.pinecone.io/learn/vector-embeddings/" },
        quality: { label: "Vector DB + Embeddings — DeepLearning.AI · Free", url: "https://www.deeplearning.ai/short-courses/vector-databases-embeddings-applications/" },
      },
      {
        name: "NumPy + Pandas",
        tags: ["Arrays", "Broadcasting", "DataFrames", "Filtering", "Groupby"],
        why: "Data layer for all AI pipelines. You process documents, embeddings, and outputs with these.",
        fast: { label: "NumPy + Pandas — Keith Galli · YouTube", url: "https://www.youtube.com/watch?v=vmEHCJofslg" },
        quality: { label: "NumPy Full Course — freeCodeCamp · YouTube", url: "https://www.youtube.com/watch?v=GPVsHOlRBBI" },
      },
    ],
  },
  {
    id: 6,
    label: "PHASE 6",
    title: "Applied AI — Your Main Niche",
    subtitle: "LangChain · RAG · LangGraph · Agents · Streaming · Prompt Eng",
    tags: ["LangChain", "RAG", "LangGraph", "Agents", "Streaming", "Prompt Eng"],
    color: "#34D399",
    optional: false,
    topics: [
      {
        name: "Prompt Engineering",
        tags: ["Zero-shot", "Few-shot", "Chain-of-thought", "ReAct", "Structured outputs"],
        why: "80% of Applied AI work is prompt engineering. This is your actual daily job.",
        fast: { label: "Prompt Engineering Guide — DAIR.AI · Free", url: "https://www.promptingguide.ai/" },
        quality: { label: "Prompt Engineering for Devs — DeepLearning.AI · Free", url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" },
      },
      {
        name: "LangChain + RAG Pipeline",
        tags: ["Chains", "Retrievers", "Memory", "Document loaders", "Output parsers"],
        why: "Industry standard. Every AI startup uses this. Appears in 70%+ of AI JDs.",
        fast: { label: "LangChain Full Course — freeCodeCamp · 5h · YouTube", url: "https://www.youtube.com/watch?v=HSZ_uaif57o" },
        quality: { label: "RAG From Scratch — LangChain Official · YouTube Series", url: "https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x" },
      },
      {
        name: "LangGraph + Agents",
        tags: ["ReAct pattern", "Tool use", "Multi-step reasoning", "Agent memory", "Workflows"],
        why: "Agents are the current frontier. Every AI JD in 2025–26 mentions this.",
        fast: { label: "LangGraph Quickstart — Official Docs · Free", url: "https://langchain-ai.github.io/langgraph/tutorials/introduction/" },
        quality: { label: "AI Agents in LangGraph — DeepLearning.AI · Free", url: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/" },
      },
      {
        name: "Streaming + LLM API Integration",
        tags: ["Server-sent events", "Streaming responses", "Function calling", "Cost management"],
        why: "Production AI apps stream. You must know how to wire streaming from LLM API to frontend.",
        fast: { label: "OpenAI API Quickstart — Official Docs", url: "https://platform.openai.com/docs/quickstart" },
        quality: { label: "Functions, Tools & Agents — DeepLearning.AI · Free", url: "https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/" },
      },
    ],
  },
  {
    id: 7,
    label: "PHASE 7",
    title: "Deployment + Production AI",
    subtitle: "Docker · Fine-tuning · RAG Evaluation · LLMOps · Interview Prep",
    tags: ["Docker", "Fine-tuning", "RAG Evaluation", "LLMOps", "Interview Prep"],
    color: "#60A5FA",
    optional: false,
    topics: [
      {
        name: "Docker + CI/CD",
        tags: ["Dockerfile", "docker-compose", "GitHub Actions", "Render/Railway", "Secrets"],
        why: "Every AI project must be deployable. Docker is the universal standard.",
        fast: { label: "Docker Full Course — freeCodeCamp · YouTube", url: "https://www.youtube.com/watch?v=fqMOX6JJhGo" },
        quality: { label: "Docker Official Docs — Get Started Series", url: "https://docs.docker.com/get-started/" },
      },
      {
        name: "RAG Evaluation + LLMOps",
        tags: ["RAGAS", "Hallucination detection", "LangSmith tracing", "Latency tracking"],
        why: "No junior candidate thinks about eval. Instant differentiation. Shows senior-level thinking.",
        fast: { label: "RAGAS Docs — RAG Evaluation Framework", url: "https://docs.ragas.io/en/latest/" },
        quality: { label: "Evaluating Generative AI — DeepLearning.AI · Free", url: "https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/" },
      },
      {
        name: "Production AI Patterns",
        tags: ["Rate limiting LLM", "Fallback models", "Async queues", "Cost optimization", "Caching responses"],
        why: "Building a demo is easy. Making it production-grade is what companies pay for.",
        fast: { label: "LLM Patterns — eugeneyan.com · Free Blog", url: "https://eugeneyan.com/writing/llm-patterns/" },
        quality: { label: "Full Stack LLM Bootcamp — The Full Stack · YouTube", url: "https://www.youtube.com/playlist?list=PL1T8fO7ArWleMMI8KPJ_5D5XSlovTW_Ur" },
      },
    ],
  },
  {
    id: 8,
    label: "PHASE 8 · OPTIONAL",
    title: "ML / DL — Depth Layer",
    subtitle: "Use when needed · Adds depth · Not required for ₹15 LPA",
    tags: ["ML Fundamentals", "Deep Learning", "PyTorch deep", "Fine-tuning", "Transformers architecture"],
    color: "#FB923C",
    optional: true,
    topics: [
      {
        name: "ML Fundamentals",
        tags: ["Regression", "Classification", "Clustering", "Bias-variance", "Cross-validation"],
        why: "Gives you language to talk about model behaviour in interviews. Needed if you explain ML decisions.",
        fast: { label: "scikit-learn Crash Course — freeCodeCamp · 2.5h · YouTube", url: "https://www.youtube.com/watch?v=0B5eIE_1vpU" },
        quality: { label: "Hands-On ML — Aurélien Géron · O'Reilly Book", url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/" },
      },
      {
        name: "Deep Learning Basics",
        tags: ["Neural networks", "Backpropagation", "Activation functions", "Overfitting", "Regularization"],
        why: "Foundation for understanding transformers and why LLMs work the way they do.",
        fast: { label: "Neural Networks from Scratch — 3Blue1Brown · YouTube", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" },
        quality: { label: "Deep Learning Specialization — Andrew Ng · Coursera", url: "https://www.coursera.org/specializations/deep-learning" },
      },
      {
        name: "PyTorch — Deep Dive",
        tags: ["Tensors", "Autograd", "Training loop", "Dataloaders", "Save/load model"],
        why: "Every ML interview tests basic PyTorch. If you explain RAG internals, you'll need this.",
        fast: { label: "PyTorch in 1 Hour — Daniel Bourke · YouTube", url: "https://www.youtube.com/watch?v=Z_ikDlimN6A&t=0s" },
        quality: { label: "PyTorch Full Course — Daniel Bourke · YouTube · 26h", url: "https://www.youtube.com/watch?v=Z_ikDlimN6A" },
      },
      {
        name: "Transformers Architecture",
        tags: ["Attention mechanism", "Self-attention", "Positional encoding", "Encoder-Decoder", "BERT vs GPT"],
        why: "If you can explain attention in an interview, you immediately signal senior AI engineer level.",
        fast: { label: "Attention is All You Need — Yannic Kilcher · YouTube", url: "https://www.youtube.com/watch?v=iDulhoQ2pro" },
        quality: { label: "Illustrated Transformer — Jay Alammar · Blog", url: "https://jalammar.github.io/illustrated-transformer/" },
      },
      {
        name: "Fine-tuning (LoRA / QLoRA)",
        tags: ["When to fine-tune vs RAG", "LoRA concept", "QLoRA", "Dataset prep", "HuggingFace Trainer"],
        why: "Most AI engineers only do RAG. Fine-tuning knowledge = immediate senior signal in interviews.",
        fast: { label: "Finetuning LLMs — DeepLearning.AI · Free Short Course", url: "https://www.deeplearning.ai/short-courses/finetuning-large-language-models/" },
        quality: { label: "HuggingFace Fine-tuning Guide — huggingface.co", url: "https://huggingface.co/learn/nlp-course/chapter3/1" },
      },
    ],
  },
];

/* ── COMPONENT ── */
export default function App() {
  const [open, setOpen] = useState(null);       // phase id
  const [topic, setTopic] = useState(null);     // topic index

  const toggle = (id) => {
    if (open === id) { setOpen(null); setTopic(null); }
    else { setOpen(id); setTopic(null); }
  };

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #080A0F; }
    a { text-decoration: none; color: inherit; }
    .hov:hover { opacity: 0.82; }
    .hov-card:hover { background: rgba(255,255,255,0.035) !important; }
    .hov-res:hover { border-color: rgba(255,255,255,0.14) !important; transform: translateX(2px); }
    @keyframes fi { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
    .fi { animation: fi 0.2s ease both; }
    ::-webkit-scrollbar { width: 3px; }
    ::-webkit-scrollbar-thumb { background: #1a2030; border-radius: 2px; }
  `;

  const mono = "'JetBrains Mono', monospace";
  const sans = "'Inter', sans-serif";

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: sans, fontSize: 13 }}>
      <style>{css}</style>

      {/* ── HEADER ── */}
      <div style={{ borderBottom: `1px solid ${C.border}`, padding: "20px 20px 18px", background: C.s1 }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ fontFamily: mono, fontSize: 10, color: C.text3, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>
            Hemasai Vattikuti · AI Engineer Roadmap · 25 LPA Target
          </div>
          <div style={{ fontFamily: sans, fontSize: 18, fontWeight: 600, color: "#fff", letterSpacing: "-0.02em", marginBottom: 14 }}>
            Stack: Python → FastAPI → PostgreSQL → LLMs → RAG → Agents
          </div>
          {/* Resource tier key */}
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {[
              { tag: "F", label: "Fast — covers everything, optimised for time (6-month pressure)", bg: "#34D39918", col: "#34D399", border: "#34D39930" },
              { tag: "Q", label: "Quality — deeper understanding, full mastery (12-month approach)", bg: "#818CF818", col: "#818CF8", border: "#818CF830" },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontFamily: mono, fontSize: 10, fontWeight: 500, padding: "2px 8px", borderRadius: 5, background: r.bg, color: r.col, border: `1px solid ${r.border}`, flexShrink: 0 }}>{r.tag}</span>
                <span style={{ fontSize: 12, color: C.text2 }}>{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PHASES ── */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "20px 20px 80px" }}>
        {phases.map((phase, pi) => {
          const isOpen = open === phase.id;
          const c = phase.color;

          return (
            <div key={phase.id}>
              {/* connector */}
              {pi > 0 && (
                <div style={{ display: "flex", justifyContent: "center", padding: "3px 0" }}>
                  <div style={{ width: 1, height: 18, background: C.border }} />
                </div>
              )}

              {/* PHASE CARD */}
              <div style={{ border: `1px solid ${isOpen ? c + "35" : C.border}`, borderRadius: 12, background: isOpen ? c + "08" : C.s1, overflow: "hidden", transition: "border-color 0.2s, background 0.2s" }}>

                {/* header row */}
                <div className="hov-card" onClick={() => toggle(phase.id)}
                  style={{ display: "flex", alignItems: "center", gap: 14, padding: "15px 18px", cursor: "pointer", transition: "background 0.15s" }}>

                  {/* circle */}
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: phase.optional ? "transparent" : c + "20", border: `1.5px solid ${c}50`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {phase.optional
                      ? <span style={{ fontFamily: mono, fontSize: 8, color: c, letterSpacing: "0.05em" }}>OPT</span>
                      : <span style={{ fontFamily: mono, fontSize: 11, fontWeight: 500, color: c }}>{typeof phase.id === "number" ? phase.id : "∞"}</span>
                    }
                  </div>

                  {/* text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: sans, fontSize: 14, fontWeight: 600, color: isOpen ? c : "#a0aabf" }}>{phase.title}</span>
                      {phase.optional && (
                        <span style={{ fontFamily: mono, fontSize: 8, padding: "1px 7px", borderRadius: 999, background: c + "15", color: c, border: `1px solid ${c}30`, letterSpacing: "0.1em" }}>OPTIONAL</span>
                      )}
                    </div>
                    <div style={{ fontFamily: mono, fontSize: 10, color: C.text3, lineHeight: 1.5, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{phase.subtitle}</div>
                  </div>

                  {/* chevron */}
                  <div style={{ fontFamily: mono, fontSize: 11, color: C.text3, transform: isOpen ? "rotate(90deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }}>▶</div>
                </div>

                {/* DSA special tag row */}
                {isOpen && phase.id === "DSA" && (
                  <div style={{ padding: "0 18px 14px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
                      {phase.tags.map((t, i) => (
                        <span key={i} style={{ fontFamily: mono, fontSize: 9, padding: "2px 8px", borderRadius: 4, background: c + "12", color: c + "cc", border: `1px solid ${c}25` }}>{t}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* EXPANDED BODY */}
                {isOpen && (
                  <div className="fi" style={{ padding: "0 18px 18px" }}>

                    {/* tag row for non-DSA */}
                    {phase.id !== "DSA" && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
                        {phase.tags.map((t, i) => (
                          <span key={i} style={{ fontFamily: mono, fontSize: 9, padding: "2px 8px", borderRadius: 4, background: c + "12", color: c + "cc", border: `1px solid ${c}25` }}>{t}</span>
                        ))}
                      </div>
                    )}

                    {/* optional note */}
                    {phase.optional && (
                      <div style={{ padding: "10px 14px", borderRadius: 8, background: c + "0a", border: `1px solid ${c}20`, marginBottom: 14 }}>
                        <div style={{ fontFamily: mono, fontSize: 10, color: c + "90", lineHeight: 1.65 }}>
                          Use when time allows · Add to Phase 5 topics as depth layer · Not required to reach ₹15 LPA · Instant senior signal if you can explain these in interviews
                        </div>
                      </div>
                    )}

                    {/* TOPIC LIST */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                      {phase.topics.map((t, ti) => {
                        const sel = topic === ti;
                        return (
                          <div key={ti}>
                            {/* topic row */}
                            <div className="hov-card" onClick={() => setTopic(sel ? null : ti)}
                              style={{ padding: "11px 14px", borderRadius: 8, border: `1px solid ${sel ? c + "40" : C.border}`, background: sel ? c + "0d" : C.s2, cursor: "pointer", transition: "all 0.15s" }}>
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                                <div>
                                  <div style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, color: sel ? c : "#8892a8", marginBottom: 5 }}>{t.name}</div>
                                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                                    {t.tags.map((tag, j) => (
                                      <span key={j} style={{ fontFamily: mono, fontSize: 9, padding: "1px 6px", borderRadius: 3, background: C.s3, color: C.text3, border: `1px solid ${C.border}` }}>{tag}</span>
                                    ))}
                                  </div>
                                </div>
                                <span style={{ fontFamily: mono, fontSize: 9, color: C.text3, flexShrink: 0, transform: sel ? "rotate(90deg)" : "none", transition: "transform 0.2s" }}>▶</span>
                              </div>
                            </div>

                            {/* topic detail */}
                            {sel && (
                              <div className="fi" style={{ margin: "5px 0 5px 14px", padding: "14px 16px", borderRadius: 8, background: C.s1, border: `1px solid ${c}20`, borderLeft: `2px solid ${c}50` }}>
                                {/* why */}
                                <div style={{ fontFamily: mono, fontSize: 9, color: C.text3, letterSpacing: "0.14em", marginBottom: 7 }}>WHY IT MATTERS</div>
                                <div style={{ fontSize: 11, color: "#4a5570", lineHeight: 1.75, marginBottom: 16 }}>{t.why}</div>

                                {/* resources */}
                                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                                  {[
                                    { key: "fast", tier: "F", label: "Fast", col: "#34D399", meta: "Covers everything · Optimised for time · Use under 6-month pressure", data: t.fast },
                                    { key: "quality", tier: "Q", label: "Quality", col: "#818CF8", meta: "Full mastery · Deeper understanding · Use for 12-month approach", data: t.quality },
                                  ].map((r) => (
                                    <a key={r.key} href={r.data.url} target="_blank" rel="noopener noreferrer"
                                      className="hov-res" style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 12px", borderRadius: 7, background: C.s2, border: `1px solid ${C.border}`, transition: "all 0.15s" }}>
                                      <span style={{ fontFamily: mono, fontSize: 9, fontWeight: 500, padding: "2px 7px", borderRadius: 4, background: r.col + "15", color: r.col, border: `1px solid ${r.col}30`, flexShrink: 0, marginTop: 1, letterSpacing: "0.06em" }}>{r.tier}</span>
                                      <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ fontSize: 11, color: r.col, marginBottom: 2, lineHeight: 1.4 }}>{r.data.label} ↗</div>
                                        <div style={{ fontFamily: mono, fontSize: 9, color: C.text3, lineHeight: 1.4 }}>{r.meta}</div>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* ── BOTTOM STRIP ── */}
        <div style={{ marginTop: 28, padding: "16px 20px", background: C.s1, border: `1px solid ${C.border}`, borderRadius: 10 }}>
          <div style={{ fontFamily: mono, fontSize: 9, color: C.text3, letterSpacing: "0.14em", marginBottom: 14 }}>FINAL TRUTH</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { range: "Phase 1–2", result: "Entry level + first income", col: "#34D399" },
              { range: "Phase 3–4", result: "₹10–15 LPA readiness", col: "#60A5FA" },
              { range: "Phase 5–7", result: "₹15–20 LPA target", col: "#F472B6" },
              { range: "Phase 8", result: "Optional depth · Pushes to ₹20–25 LPA", col: "#FB923C" },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontFamily: mono, fontSize: 10, color: row.col, fontWeight: 500, minWidth: 80 }}>{row.range}</span>
                <span style={{ width: 1, height: 14, background: C.border, flexShrink: 0 }} />
                <span style={{ fontSize: 11, color: C.text2 }}>{row.result}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
