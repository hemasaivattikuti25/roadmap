import { useState } from "react";

const phases = [
  {
    id: 0, title: "CS Foundations", duration: "Month 1–2", color: "#fbbf24", icon: "⚙️",
    summary: "Lock the base. No shortcuts. Every interview starts here.",
    topics: [
      { name: "CS Fundamentals", mandatory: true,
        what: "OS — processes, threads, deadlocks, memory (stack vs heap). Networking — HTTP/HTTPS, TCP/IP, DNS. Concurrency vs parallelism. How browsers work (request lifecycle).",
        depth: "Explain any concept without notes. Know why threads exist, what a deadlock is, what happens when you type a URL.",
        why: "Every product company SDE interview has a CS fundamentals round. Fastest elimination path if skipped.",
        fast: { label: "Neso Academy — OS Concepts Full Playlist · YouTube · Free", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O" },
        deep: { label: "CS50 — Harvard Full Free Course · edX", url: "https://cs50.harvard.edu/x/" } },
      { name: "DSA in Python/Java", mandatory: true,
        what: "Arrays, Strings, HashMap, Two Pointers, Sliding Window, Binary Search, Sorting (Merge, Quick), Stack, Queue. 2 problems/day minimum.",
        depth: "Easy fluently in under 15 mins. Medium in under 30 mins. 80+ problems by end of phase. Zero AI assistance during practice.",
        why: "Most companies use DSA as Round 1 filter. Zero DSA = eliminated before anyone reads your resume.",
        fast: { label: "Striver A2Z DSA Sheet — takeuforward.org · Free", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" },
        deep: { label: "Striver DSA Full Playlist · YouTube · Free", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz" } },
      { name: "Git & Collaboration", mandatory: true,
        what: "Branching (GitFlow), rebase vs merge, pull requests, code review workflow, resolving merge conflicts, git hooks, CI basics.",
        depth: "Comfortable with daily Git on a team. Explain rebase vs merge tradeoffs. Set up a simple GitHub Actions workflow.",
        why: "Every professional engineering job uses Git daily. Version control knowledge is tested in rounds.",
        fast: { label: "Learn Git Branching — Interactive · Free", url: "https://learngitbranching.js.org/" },
        deep: { label: "Pro Git Book — Scott Chacon · Free Online", url: "https://git-scm.com/book/en/v2" } },
      { name: "Linux & Terminal", mandatory: false,
        what: "Navigation, file ops, permissions, grep, curl, SSH, environment variables, basic bash scripting.",
        depth: "Deploy an app on a server without a GUI. Debug issues using only terminal tools.",
        why: "All production AI systems run on Linux. Terminal fluency = 10x faster debugging in real jobs.",
        fast: { label: "Missing Semester of CS — Shell Tools · MIT · Free", url: "https://missing.csail.mit.edu/2020/shell-tools/" },
        deep: { label: "Linux Command Line — William Shotts · Free PDF", url: "https://linuxcommand.org/tlcl.php" } },
    ],
    project: null,
    systemDesign: null,
    frontend: "No frontend this phase. Pure CS + DSA + Git. Any distraction now costs you the foundation.",
  },
  {
    id: 1, title: "Python & Backend Core", duration: "Month 2–4", color: "#00ff9f", icon: "🔧",
    summary: "Build real APIs you can deploy and fully defend. This is your engineering backbone.",
    topics: [
      { name: "Python Mastery", mandatory: true,
        what: "OOP, decorators, async/await, type hints, list comprehensions, generators, error handling, modules, file I/O.",
        depth: "Write production Python without GPT. Explain every line. Own the language — it's your primary tool for everything AI.",
        why: "You claim Python on your resume. Interviewers at Groww, Setu, Razorpay will test you on this directly.",
        fast: { label: "Corey Schafer — Python OOP Full Playlist · YouTube · Free", url: "https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc" },
        deep: { label: "Real Python — Python OOP + Async IO · Free Articles", url: "https://realpython.com/async-io-python/" } },
      { name: "SOLID Principles", mandatory: true,
        what: "S — Single Responsibility, O — Open/Closed, L — Liskov Substitution, I — Interface Segregation, D — Dependency Inversion. With Python examples.",
        depth: "Explain each principle with a real example from your own codebase. Mithra code likely violates several — fix that.",
        why: "SOLID is the most commonly tested OOP topic at product companies. Your Mithra code is the live proof.",
        fast: { label: "SOLID Explained — Fireship · YouTube · Free", url: "https://www.youtube.com/watch?v=pTB30aXS77U" },
        deep: { label: "SOLID in Python — Real Python · Free Article", url: "https://realpython.com/solid-principles-python/" } },
      { name: "Design Patterns", mandatory: true,
        what: "Creational — Singleton, Factory, Builder. Structural — Adapter, Decorator, Facade. Behavioral — Observer, Strategy, Command.",
        depth: "Identify which pattern applies in under 30 seconds. Implement Singleton and Factory from memory.",
        why: "Standard technical interview question. Also makes your AI backend code genuinely better structured.",
        fast: { label: "Refactoring.Guru — Design Patterns · Free", url: "https://refactoring.guru/design-patterns" },
        deep: { label: "Design Patterns in Python — GitHub Reference", url: "https://github.com/faif/python-patterns" } },
      { name: "FastAPI Mastery", mandatory: true,
        what: "Routing, Pydantic models, dependency injection, middleware, background tasks, async endpoints, WebSockets, project structure.",
        depth: "Build a full REST API from scratch without GPT. Explain every part — dependency injection, why Pydantic, how async works.",
        why: "FastAPI is on your resume and in Mithra. Interviewers will go deep. You must own it completely.",
        fast: { label: "FastAPI Official Tutorial — tiangolo · Docs · Free", url: "https://fastapi.tiangolo.com/tutorial/" },
        deep: { label: "FastAPI Best Practices — GitHub · zhanymkanov", url: "https://github.com/zhanymkanov/fastapi-best-practices" } },
      { name: "PostgreSQL + Redis", mandatory: true,
        what: "Advanced JOINs, indexes, EXPLAIN ANALYZE, connection pooling, Alembic migrations, pgvector. Redis: TTL, caching patterns, session storage.",
        depth: "Design a schema, write optimized queries, run migrations without help. Explain why pgvector uses cosine similarity.",
        why: "pgvector is in Mithra — you MUST explain it cold. Redis caching = cost savings on LLM APIs = senior-level thinking.",
        fast: { label: "PostgreSQL Tutorial — postgresqltutorial.com · Free", url: "https://www.postgresqltutorial.com/" },
        deep: { label: "CMU Database Systems — Andy Pavlo · Free Course", url: "https://15445.courses.cs.cmu.edu/fall2022/" } },
      { name: "Auth — JWT & OAuth2", mandatory: true,
        what: "JWT token flow, OAuth2 patterns, password hashing (bcrypt), RBAC, API key auth, refresh tokens, HTTPS basics.",
        depth: "Implement auth from scratch in FastAPI without copying. Know what each piece does and what breaks if you skip it.",
        why: "Every production app has auth. Product companies always ask this. Your DRDO project used it — own it now.",
        fast: { label: "FastAPI Security — Official Docs · JWT + OAuth2 · Free", url: "https://fastapi.tiangolo.com/tutorial/security/" },
        deep: { label: "Hussein Nasser — JWT Deep Dive · YouTube · Free", url: "https://www.youtube.com/watch?v=7Q17ubqLfaM" } },
      { name: "Testing with pytest", mandatory: true,
        what: "Unit tests, fixtures, conftest.py, pytest-mock, TestClient for FastAPI, pytest-cov for coverage reports.",
        depth: "Write tests for your own FastAPI project. Achieve 70%+ coverage. Explain what mocking is and why you use it.",
        why: "Almost no junior candidates test their code. Instant differentiation in any technical interview.",
        fast: { label: "pytest Official Docs · Free", url: "https://docs.pytest.org/en/stable/" },
        deep: { label: "Real Python — Testing with pytest · Free Guide", url: "https://realpython.com/pytest-python-testing/" } },
      { name: "Docker & Deployment", mandatory: true,
        what: "Dockerfile, docker-compose, volumes, networking, env vars, deploy to Railway/Render.",
        depth: "Containerize any app. Explain what Docker solves, why you'd use it, and what happens without it.",
        why: "Every project you build must be deployable. Docker is universal. Localhost-only projects don't count.",
        fast: { label: "Docker in 100s + Full Course — Fireship · YouTube · Free", url: "https://www.youtube.com/watch?v=Gjnup-PuquQ" },
        deep: { label: "Docker + FastAPI Guide — TestDriven.io · Free", url: "https://testdriven.io/blog/fastapi-docker-traefik/" } },
    ],
    systemDesign: {
      title: "Backend System Design",
      topics: ["Client-server architecture", "Load balancing basics", "Database indexing and query optimization", "Monolith vs microservices tradeoffs", "API gateway pattern", "Rate limiting strategies"],
      r1: { label: "System Design Primer — GitHub · donnemartin · Free", url: "https://github.com/donnemartin/system-design-primer" },
      r2: { label: "ByteByteGo — System Design Newsletter · Free Tier", url: "https://bytebytego.com/" },
    },
    project: {
      name: "Task Manager API",
      stack: "FastAPI + PostgreSQL + JWT Auth + Redis + Docker + Render",
      features: ["User registration/login with JWT + bcrypt", "CRUD for tasks with RBAC user isolation", "Redis caching on GET endpoints", "Pagination, filtering, rate limiting", "pytest suite with 70%+ coverage", "Dockerized + live deployed URL"],
      architecture: "Client → FastAPI (JWT middleware) → PostgreSQL (SQLAlchemy + Alembic). Redis for response caching. Docker Compose locally. Deployed on Render.",
      standout: "Recruiters can hit your live API. Shows you can ship, test, and deploy — not just code on localhost.",
    },
    frontend: "Streamlit only — simple UI to demo your API. Backend quality matters 10x more than frontend at this stage.",
  },
  {
    id: 2, title: "AI & LLM Integration", duration: "Month 4–6", color: "#00c8ff", icon: "🧠",
    summary: "Your core differentiator. Build LLM systems you can explain every line of — no vibe coding.",
    topics: [
      { name: "LLM Fundamentals", mandatory: true,
        what: "Tokens, context windows, temperature, top-p, embeddings, fine-tuning vs prompting, model families (GPT-4, Claude, Gemini, Llama). How attention works conceptually.",
        depth: "Explain how any LLM works to a non-technical person. Answer 'why did you use GPT-4 instead of Gemini' in an interview.",
        why: "Applied AI engineers who don't understand LLMs are just API callers. You need the mental model to make good engineering decisions.",
        fast: { label: "Andrej Karpathy — Intro to LLMs (1hr) · YouTube · Free", url: "https://www.youtube.com/watch?v=zjkBMFhNj_g" },
        deep: { label: "fast.ai — Practical Deep Learning for Coders · Free", url: "https://course.fast.ai/" } },
      { name: "Prompt Engineering", mandatory: true,
        what: "Zero-shot, few-shot, chain-of-thought, ReAct, system prompts, structured JSON outputs, prompt injection defense, prompt versioning.",
        depth: "Write prompts that reliably produce structured outputs. Know why each technique works. Run evals on your prompts.",
        why: "80% of Applied AI daily work is prompt engineering. Mithra's quality depends on your prompts — understand why they work.",
        fast: { label: "Prompt Engineering Guide — DAIR.AI · Free", url: "https://www.promptingguide.ai/" },
        deep: { label: "DeepLearning.AI — ChatGPT Prompt Engineering · Free", url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" } },
      { name: "LLM APIs (OpenAI / Anthropic)", mandatory: true,
        what: "API auth, chat completions, streaming responses, function/tool calling, token counting, cost management, error handling + retry logic.",
        depth: "Integrate any LLM API into a FastAPI backend. Handle streaming properly. Know how to estimate cost before running at scale.",
        why: "You use this every single day as an Applied AI engineer. Own the API, not just the wrapper.",
        fast: { label: "OpenAI API Quickstart — Official Docs · Free", url: "https://platform.openai.com/docs/quickstart" },
        deep: { label: "Anthropic Python SDK Docs · Free", url: "https://docs.anthropic.com/en/api/getting-started" } },
      { name: "Embeddings Deep Dive", mandatory: true,
        what: "What embeddings are, text-embedding-3 models, cosine vs dot product vs L2 similarity, batch embedding, embedding caching, when to use which.",
        depth: "Explain pgvector's operators (<->, <=>, <#>) from memory. Implement embedding pipeline for a new document type without help.",
        why: "pgvector is in Mithra. Interviewers will ask 'why cosine similarity?' If you can't answer that, it looks like you copied the code.",
        fast: { label: "OpenAI Embeddings Guide · Official Docs · Free", url: "https://platform.openai.com/docs/guides/embeddings" },
        deep: { label: "What are Embeddings? — Vicki Boykis · Free", url: "https://vickiboykis.com/what_are_embeddings/" } },
      { name: "LangChain / LlamaIndex", mandatory: true,
        what: "Chains, LCEL runnables, document loaders, text splitters, memory types, callbacks. LlamaIndex query engines and ingestion pipelines.",
        depth: "Use both frameworks confidently. Know what they do under the hood. Know when NOT to use them.",
        why: "Appears in 70%+ of AI engineer JDs. You already use LangChain in Mithra — now actually understand it.",
        fast: { label: "LangChain Docs — Quickstart + How-To · Free", url: "https://python.langchain.com/docs/introduction/" },
        deep: { label: "Greg Kamradt — LangChain Full Course · YouTube · Free", url: "https://www.youtube.com/watch?v=_v_fgW2SkkQ" } },
      { name: "Eval & Observability", mandatory: false,
        what: "LLM evals (RAGAS), hallucination detection, latency tracking, LangSmith tracing, cost monitoring.",
        depth: "Set up basic eval pipeline and LangSmith tracing on one project.",
        why: "Almost no junior candidates think about eval. Instant differentiation in interviews.",
        fast: { label: "RAGAS — RAG Evaluation Framework · Docs · Free", url: "https://docs.ragas.io/en/latest/" },
        deep: { label: "LangSmith Official Docs · Free", url: "https://docs.smith.langchain.com/" } },
    ],
    systemDesign: {
      title: "AI System Design",
      topics: ["LLM API cost modeling and optimization", "Caching strategies for LLM responses", "Streaming architecture for AI APIs", "Token budget management", "Fallback model patterns"],
      r1: { label: "Chip Huyen — Designing ML Systems · O'Reilly", url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/" },
      r2: { label: "LLM Patterns — eugeneyan.com · Free Blog", url: "https://eugeneyan.com/writing/llm-patterns/" },
    },
    project: {
      name: "AI Chat API with Streaming",
      stack: "FastAPI + OpenAI/Anthropic API + Redis (cache) + PostgreSQL (history) + Docker",
      features: ["Streaming chat endpoint with SSE", "Conversation memory stored in PostgreSQL", "Redis caching for repeated queries", "Token counting + cost estimation per request", "API key auth for multi-user support"],
      architecture: "Client → FastAPI → Redis (cache check) → LLM API (streaming) → PostgreSQL (save history). Every line written and understood by you.",
      standout: "Proves you understand streaming, caching, cost management — all senior-level thinking. Walk any interviewer through every layer.",
    },
    frontend: "Streamlit for chat UI. Add streaming output display. Focus on the backend — frontend is just a demo layer still.",
  },
  {
    id: 3, title: "Data Science & ML", duration: "Month 5–7", color: "#f97316", icon: "📊",
    summary: "The math and ML behind the AI. You need this to go beyond being an API caller.",
    topics: [
      { name: "Math & Stats Foundations", mandatory: true,
        what: "Linear algebra — vectors, matrices, dot products. Probability — Bayes theorem, conditional probability. Statistics — mean, std, distributions. Calculus — gradients, derivatives (conceptual).",
        depth: "Understand enough to read an ML paper and not be lost. Explain what a vector is, why dot product measures similarity.",
        why: "You cannot understand embeddings, attention, or model eval without this. You have Stanford ML cert — the math should be solid.",
        fast: { label: "3Blue1Brown — Linear Algebra Series · YouTube · Free", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" },
        deep: { label: "StatQuest — Stats & ML Math · YouTube · Free", url: "https://www.youtube.com/c/joshstarmer" } },
      { name: "NumPy & Pandas", mandatory: true,
        what: "NumPy arrays, broadcasting, vectorized operations. Pandas DataFrames, data cleaning, null handling, groupby, merge, pivot tables, feature engineering.",
        depth: "Clean a messy CSV and produce a model-ready dataset without Googling syntax. This is daily work in any AI role.",
        why: "Every ML and data pipeline uses NumPy and Pandas. Non-negotiable tools.",
        fast: { label: "Kaggle — Pandas Course · Free Micro-course", url: "https://www.kaggle.com/learn/pandas" },
        deep: { label: "Pandas Official User Guide · Free", url: "https://pandas.pydata.org/docs/user_guide/index.html" } },
      { name: "EDA & Visualization", mandatory: true,
        what: "Matplotlib, Seaborn, Plotly for interactive charts. Correlation heatmaps, distribution plots, outlier detection, feature importance visualization.",
        depth: "Given a dataset, produce a clear EDA report that reveals patterns and problems before modelling.",
        why: "Data quality determines model quality. EDA shows you understand data, not just code.",
        fast: { label: "Kaggle — Data Visualization Course · Free", url: "https://www.kaggle.com/learn/data-visualization" },
        deep: { label: "Seaborn Official Tutorial · Free", url: "https://seaborn.pydata.org/tutorial.html" } },
      { name: "ML Algorithms", mandatory: true,
        what: "Linear & Logistic Regression, Decision Trees, Random Forest, XGBoost/LightGBM, K-Means, SVM. Understand the intuition behind each.",
        depth: "Explain any algorithm's intuition without notes. Know when to use XGBoost vs Neural Networks. Implement Logistic Regression from scratch once.",
        why: "Applied AI engineers pick the right tool for the problem. Heavy LLM where XGBoost works = bad engineering.",
        fast: { label: "StatQuest — ML Algorithms Playlist · YouTube · Free", url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF" },
        deep: { label: "Scikit-learn User Guide · Free", url: "https://scikit-learn.org/stable/user_guide.html" } },
      { name: "Model Training & Evaluation", mandatory: true,
        what: "Train/val/test splits, K-Fold CV, Precision/Recall/F1/AUC-ROC, confusion matrix, overfitting, L1/L2 regularization, hyperparameter tuning (Optuna).",
        depth: "Run a full ML experiment: train, evaluate, tune, explain results. Know why AUC-ROC matters for imbalanced datasets.",
        why: "If you can't evaluate a model properly, your AI systems will fail silently in production.",
        fast: { label: "Google ML Crash Course · Free", url: "https://developers.google.com/machine-learning/crash-course" },
        deep: { label: "Kaggle — Intermediate ML Course · Free", url: "https://www.kaggle.com/learn/intermediate-machine-learning" } },
      { name: "Deep Learning Basics", mandatory: false,
        what: "Neural network architecture, forward/backpropagation, PyTorch tensors + autograd, CNNs, Transformers (attention, BERT, GPT concepts).",
        depth: "Understand how a Transformer works at a high level. Run one training loop in PyTorch without copying.",
        why: "Building on top of these models. Understanding the architecture makes you a better AI engineer, not just an API caller.",
        fast: { label: "Andrej Karpathy — Neural Nets Zero to Hero · YouTube · Free", url: "https://www.youtube.com/watch?v=VMj-3S1tku0" },
        deep: { label: "fast.ai — Practical Deep Learning · Free", url: "https://course.fast.ai/" } },
    ],
    systemDesign: {
      title: "ML System Design",
      topics: ["Feature engineering pipelines", "Train/serve skew prevention", "Model versioning and registry", "Batch vs real-time inference tradeoffs", "Data drift detection"],
      r1: { label: "Chip Huyen — Designing ML Systems · O'Reilly", url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/" },
      r2: { label: "Made With ML — MLOps Course · Free", url: "https://madewithml.com/" },
    },
    project: {
      name: "ML-Powered Insight API",
      stack: "FastAPI + scikit-learn/XGBoost + PostgreSQL + pandas + Docker",
      features: ["Train a model on a real dataset (e.g. churn prediction)", "FastAPI endpoint for batch predictions", "Feature importance endpoint", "Model versioning with MLflow", "Dockerized + deployed"],
      architecture: "Client → FastAPI → Feature pipeline (pandas) → Trained model (scikit-learn/XGB) → Prediction + confidence score → PostgreSQL (log predictions).",
      standout: "Shows you can close the loop from data → model → API → deployment. Most candidates can only do one part.",
    },
    frontend: "Streamlit dashboard showing predictions + confidence scores + feature importance charts. Visual output impresses in interviews.",
  },
  {
    id: 4, title: "RAG Systems", duration: "Month 6–8", color: "#bf5fff", icon: "🔍",
    summary: "RAG is the #1 pattern in enterprise AI. You built one in Mithra — now understand every layer.",
    topics: [
      { name: "Vector Databases", mandatory: true,
        what: "pgvector — setup, HNSW vs IVFFlat indexing, operators (<->, <=>, <#>). Pinecone, Qdrant. Similarity metrics — cosine, dot product, L2. Metadata filtering.",
        depth: "Explain what HNSW is and why it's faster than brute force. Explain when you'd use Qdrant vs pgvector. This is in Mithra — own it.",
        why: "pgvector is on your resume. Interviewers will ask you to explain it. Fumbling this = immediate red flag.",
        fast: { label: "pgvector GitHub + Docs · Free", url: "https://github.com/pgvector/pgvector" },
        deep: { label: "Pinecone Learn — Vector DB Deep Dive · Free", url: "https://www.pinecone.io/learn/vector-database/" } },
      { name: "Chunking Strategies", mandatory: true,
        what: "Fixed-size chunking, semantic chunking, recursive splitter, chunk overlap, parent-child chunks, document hierarchy.",
        depth: "Explain why chunk size affects retrieval quality. Test 3 different strategies on the same dataset and compare results.",
        why: "Chunking is the most underrated part of RAG. Wrong chunking = wrong retrieval = hallucinations.",
        fast: { label: "Chunking Strategies — Pinecone Blog · Free", url: "https://www.pinecone.io/learn/chunking-strategies/" },
        deep: { label: "Greg Kamradt — Chunking Methods Compared · YouTube · Free", url: "https://www.youtube.com/watch?v=8OJC21T2SL4" } },
      { name: "Retrieval & Reranking", mandatory: true,
        what: "Semantic search, hybrid search (BM25 + semantic), re-ranking with Cohere, MMR for diversity, query expansion, multi-query retrieval.",
        depth: "Implement hybrid search from scratch. Explain why reranking improves results over pure vector search.",
        why: "Basic RAG fails in production. Hybrid + reranking is what makes it work at scale.",
        fast: { label: "LangChain Hybrid Search Docs · Free", url: "https://python.langchain.com/docs/how_to/hybrid/" },
        deep: { label: "Cohere Reranking Docs · Free", url: "https://docs.cohere.com/docs/reranking" } },
      { name: "RAG Pipeline End-to-End", mandatory: true,
        what: "Ingest → chunk → embed → store. Retrieve → augment prompt → generate → stream. Eval with RAGAS (faithfulness, relevancy, context precision).",
        depth: "Build a RAG pipeline from scratch WITHOUT LangChain first. Then rebuild it with LangChain. Compare. Eval it with RAGAS.",
        why: "This is exactly what Mithra does. If you can't explain your own RAG pipeline in an interview, your biggest project works against you.",
        fast: { label: "RAG From Scratch — LangChain YouTube Series · Free", url: "https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x" },
        deep: { label: "DeepLearning.AI — Building and Evaluating Advanced RAG · Free", url: "https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/" } },
      { name: "Production RAG Patterns", mandatory: false,
        what: "Caching embedding results, query caching, async ingestion pipelines, multi-tenant vector isolation, RAG eval dashboards.",
        depth: "Refactor Mithra's RAG pipeline using at least 2 of these patterns. Measure latency before/after.",
        why: "Mithra has 690 users. This is how you scale it. Senior AI interviews always ask about production considerations.",
        fast: { label: "RAGAS Documentation · Free", url: "https://docs.ragas.io/en/latest/" },
        deep: { label: "Awesome Generative AI Guide — GitHub · Free", url: "https://github.com/aishwaryanr/awesome-generative-ai-guide" } },
    ],
    systemDesign: {
      title: "RAG System Design",
      topics: ["RAG architecture patterns (naive vs advanced)", "Embedding pipeline design for scale", "Multi-tenant vector store isolation", "Chunking strategy selection framework", "Latency vs quality tradeoffs"],
      r1: { label: "RAG Survey Paper — Lewis et al. · Arxiv · Free", url: "https://arxiv.org/abs/2005.11401" },
      r2: { label: "Advanced RAG Techniques — Arxiv 2312.10997 · Free", url: "https://arxiv.org/abs/2312.10997" },
    },
    project: {
      name: "RAG Document Q&A System",
      stack: "FastAPI + LangChain + pgvector + OpenAI/Gemini + Cohere (reranking) + Docker",
      features: ["Upload any PDF — chunk, embed, store", "Semantic + hybrid search retrieval", "Reranking with Cohere for quality", "Source citations with every answer", "RAGAS eval pipeline", "Streamed responses"],
      architecture: "Streamlit UI → FastAPI → LangChain RAG chain → pgvector (hybrid retrieval) → Cohere rerank → LLM (streaming) → Response with sources.",
      standout: "Every AI team needs this internally. Building it from scratch with eval proves you understand every layer — not just LangChain.run().",
    },
    frontend: "Streamlit for the demo. Show source citations clearly. Add a confidence score display. Portfolio centrepiece — make it visually clean.",
  },
  {
    id: 5, title: "Agents & Orchestration", duration: "Month 8–10", color: "#ff9f00", icon: "🤖",
    summary: "Agents are the current frontier. Every AI JD in 2025–26 mentions this. Build one that actually works.",
    topics: [
      { name: "Agent Architecture", mandatory: true,
        what: "ReAct pattern (Reason + Act), tool use loop, planning, observation → action → observation cycle, multi-step reasoning, failure handling.",
        depth: "Build an agent that uses 3+ tools and handles multi-step tasks reliably. Explain the ReAct loop without notes.",
        why: "Agents are the current frontier in Applied AI. Every JD mentions this. Being able to explain and build one = immediate senior signal.",
        fast: { label: "LangGraph Quickstart — Official Docs · Free", url: "https://langchain-ai.github.io/langgraph/tutorials/introduction/" },
        deep: { label: "ReAct Paper — Yao et al. · Arxiv · Free", url: "https://arxiv.org/abs/2210.03629" } },
      { name: "Tool Use & Function Calling", mandatory: true,
        what: "OpenAI function calling, Anthropic tool use API, custom tool creation, tool error handling, tool chaining.",
        depth: "Build 3+ custom tools (web search, DB query, file read). Handle tool errors gracefully without breaking the agent loop.",
        why: "Tool use is how agents interact with the world. You will build this in every AI role.",
        fast: { label: "Anthropic Tool Use Docs · Free", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview" },
        deep: { label: "DeepLearning.AI — Functions Tools and Agents · Free", url: "https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/" } },
      { name: "Memory Systems", mandatory: true,
        what: "Conversation buffer, summary memory, entity memory, vector store memory, external memory in PostgreSQL. When to use each.",
        depth: "Implement 3 different memory types for the same agent. Explain the tradeoffs cold.",
        why: "Memory is what makes agents useful for more than one-shot tasks. Mithra's memory could be much better — fix it.",
        fast: { label: "LangGraph Persistence & Memory · Free Docs", url: "https://langchain-ai.github.io/langgraph/concepts/memory/" },
        deep: { label: "Mem0 — Memory Layer for AI · Docs · Free", url: "https://docs.mem0.ai/overview" } },
      { name: "Multi-Agent Systems", mandatory: false,
        what: "Supervisor pattern, agent orchestration, CrewAI, AutoGen, task delegation, output validation between agents.",
        depth: "Build a 2-agent system where agents delegate tasks. Understand when multi-agent is overkill vs necessary.",
        why: "Multi-agent systems are overkill for most apps — but knowing the pattern signals you understand the frontier.",
        fast: { label: "CrewAI Docs · Free", url: "https://docs.crewai.com/" },
        deep: { label: "DeepLearning.AI — AI Agents in LangGraph · Free", url: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/" } },
      { name: "LangGraph Deep Dive", mandatory: false,
        what: "State machines for agents, conditional edges, cycles, persistence, human-in-the-loop, streaming from graphs.",
        depth: "Rebuild a LangChain agent using LangGraph. Understand why graph-based orchestration is better for complex agents.",
        why: "LangGraph is becoming the industry standard for production agents. Early knowledge = strong signal.",
        fast: { label: "LangGraph Full Tutorial Series · YouTube · Free", url: "https://www.youtube.com/watch?v=R-o_a6dvzQM" },
        deep: { label: "LangGraph Official Docs · Free", url: "https://langchain-ai.github.io/langgraph/" } },
    ],
    systemDesign: {
      title: "Agent System Design",
      topics: ["Multi-agent orchestration patterns", "Tool reliability and fallback design", "Agent state management at scale", "Human-in-the-loop architecture", "Cost modeling for agentic workflows"],
      r1: { label: "a16z — Emerging LLM App Stack Article · Free", url: "https://a16z.com/the-emerging-architectures-for-llm-applications/" },
      r2: { label: "LLM Patterns — eugeneyan.com · Free", url: "https://eugeneyan.com/writing/llm-patterns/" },
    },
    project: {
      name: "AI Agent with Tools",
      stack: "FastAPI + LangGraph + OpenAI/Anthropic + Tavily (search) + PostgreSQL + Docker",
      features: ["Agent with 3+ tools: web search, DB query, file reader", "Multi-step task execution with state", "Persistent memory across sessions", "LangSmith tracing for every run", "Streaming responses from the graph"],
      architecture: "FastAPI → LangGraph agent (state machine) → Tools (search/DB/files) → LLM → Response stream. LangSmith captures all traces.",
      standout: "A working agent with real tools and tracing = production-grade thinking. Walk the interviewer through the state graph and you're hired.",
    },
    frontend: "React this phase. Build a real chat interface with tool output display. Streamlit won't cut it for agents — show the reasoning steps visually.",
  },
  {
    id: 6, title: "Production & Scale", duration: "Month 10–12", color: "#ff4566", icon: "🚀",
    summary: "Production thinking separates ₹10 LPA from ₹15 LPA+. Apply for jobs from here.",
    topics: [
      { name: "CI/CD with GitHub Actions", mandatory: true,
        what: "Automated testing on push, environment secrets, deployment pipelines, Docker build + push, staging vs production environments.",
        depth: "Set up a CI/CD pipeline that tests + deploys your app on every push to main. Zero manual deployment steps.",
        why: "Applied AI engineers own their deployment. Table stakes at any serious company. Zero candidates at your level have this.",
        fast: { label: "GitHub Actions Full Course — TechWorld with Nana · YouTube · Free", url: "https://www.youtube.com/watch?v=R8_veQiYBjI" },
        deep: { label: "DevOps with Docker + GitHub Actions — Full Stack Open · Free", url: "https://fullstackopen.com/en/part11" } },
      { name: "Observability Stack", mandatory: true,
        what: "LangSmith for LLM tracing, Sentry for error tracking, Prometheus + Grafana for metrics, API usage dashboards, cost alerting.",
        depth: "Set up LangSmith on Mithra. Add Sentry to one project. Know what to monitor and what alerts to set.",
        why: "Monitoring turns a demo into a production system. Mithra has 690 users — it needs proper observability now.",
        fast: { label: "LangSmith Official Docs · Free", url: "https://docs.smith.langchain.com/" },
        deep: { label: "Prometheus + Grafana Setup Guide · Grafana Docs", url: "https://grafana.com/docs/grafana/latest/getting-started/get-started-grafana-prometheus/" } },
      { name: "Security & Zero Trust", mandatory: true,
        what: "Row-Level Security (RLS) in PostgreSQL/Supabase, zero-trust architecture, API key rotation, rate limiting with Redis, input sanitization, OWASP API top 10.",
        depth: "You already implemented RLS in Mithra — explain exactly how it works and why it prevents data leakage.",
        why: "RLS is in Mithra. If you can't explain it, it looks like you copied it. Security is always in fintech interviews.",
        fast: { label: "Supabase RLS Guide · Free", url: "https://supabase.com/docs/guides/database/postgres/row-level-security" },
        deep: { label: "OWASP API Security Top 10 · Free", url: "https://owasp.org/www-project-api-security/" } },
      { name: "Production AI Patterns", mandatory: true,
        what: "Rate limiting LLM calls, fallback models, async queues for heavy tasks, response caching, cost optimization, prompt versioning in production.",
        depth: "Implement at least 3 of these in Mithra. Measure cost reduction from caching. Know how to handle LLM outages.",
        why: "Building a demo is easy. Making it production-grade is what companies pay ₹15 LPA for.",
        fast: { label: "Full Stack LLM Bootcamp · YouTube · Free", url: "https://www.youtube.com/playlist?list=PL1T8fO7ArWleMMI8KPJ_5D5XSlovTW_Ur" },
        deep: { label: "Designing ML Systems — Chip Huyen · O'Reilly", url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/" } },
      { name: "Fine-tuning Basics", mandatory: false,
        what: "When to fine-tune vs RAG vs prompting, LoRA/QLoRA concepts, HuggingFace basics, dataset preparation, evaluation of fine-tuned models.",
        depth: "Understand the decision framework. Run one fine-tune on a small open model (Mistral 7B or Llama 3).",
        why: "Most Applied AI engineers only do RAG. Fine-tuning knowledge = immediate senior signal.",
        fast: { label: "DeepLearning.AI — Finetuning LLMs · Free", url: "https://www.deeplearning.ai/short-courses/finetuning-large-language-models/" },
        deep: { label: "HuggingFace — Fine-tuning Pretrained Models · Free", url: "https://huggingface.co/learn/nlp-course/chapter3/1" } },
    ],
    systemDesign: {
      title: "Production AI System Design",
      topics: ["Multi-tenant AI system architecture", "LLM gateway design (rate limit, routing, fallback)", "Embedding pipeline at scale", "Observability stack for AI (LangSmith, Arize, Grafana)", "Cost modeling and budget controls"],
      r1: { label: "a16z — Emerging LLM App Stack · Free Article", url: "https://a16z.com/the-emerging-architectures-for-llm-applications/" },
      r2: { label: "Awesome Generative AI Guide — GitHub · Free", url: "https://github.com/aishwaryanr/awesome-generative-ai-guide" },
    },
    project: {
      name: "Production AI SaaS — Mithra 2.0",
      stack: "FastAPI + LangGraph + pgvector + OpenAI + React + Docker + GitHub Actions + LangSmith",
      features: ["Multi-step AI agent with tools (web search, DB, file read)", "User auth with isolated workspaces (RLS)", "LLM observability + cost tracking per user", "Full CI/CD pipeline (test → build → deploy on push)", "Rate limiting + fallback model logic", "React frontend with streaming UI"],
      architecture: "React → FastAPI (auth + rate limit + cost tracking) → LangGraph agent → Tools + LLM → LangSmith (traces) → PostgreSQL + pgvector. GitHub Actions CI/CD.",
      standout: "Genuinely production-grade. Walk any interviewer through this architecture and you're hired on the spot. This is the Mithra 2.0 you should be building.",
    },
    frontend: "React is required this phase. Build a real product frontend — streaming, auth, user dashboard. This is what makes your portfolio look like a product, not a project.",
  },
];

const schedule = [
  { day: "Mon–Fri", slots: ["45 min — DSA (LeetCode / Striver)", "90 min — Main phase topic", "45 min — Project coding", "30 min — Review & explain aloud"] },
  { day: "Saturday", slots: ["2 hrs — Project deep work", "1 hr — System design reading", "30 min — Mock interview Q&A"] },
  { day: "Sunday", slots: ["Review week learnings", "Write 5 bullets of real understanding", "Plan next week", "REST — no guilt"] },
];

const mistakes = [
  { t: "Tutorial Hell", d: "Watching videos and building nothing. After every resource, build something from scratch immediately." },
  { t: "GPT as Crutch", d: "If AI writes it, retype it manually and explain each line aloud. Otherwise you learned nothing." },
  { t: "Skipping DSA", d: "45 min/day, no exceptions. Companies test it as Round 1. Zero DSA = eliminated before anyone reads your resume." },
  { t: "Can't Explain Mithra", d: "690 users. If you can't walk an interviewer through the RAG pipeline and RLS in 5 minutes, you're wasting your biggest asset." },
  { t: "Chasing New Tools", d: "New frameworks drop weekly. Ignore all of them until Month 9. Deep fundamentals beat shallow tool knowledge every time." },
  { t: "Applying Too Late", d: "Start applying from Month 10. Waiting until you feel 'ready' = never applying. Move fast." },
];

const TABS = ["topics", "project", "sysdesign", "frontend"];
const TAB_LABELS = { topics: "📚 Topics", project: "🏗 Project", sysdesign: "🔷 Sys Design", frontend: "🖥 Frontend" };

export default function App() {
  const [ap, setAp] = useState(0);
  const [at, setAt] = useState(null);
  const [tab, setTab] = useState("topics");
  const [showSched, setShowSched] = useState(false);
  const [showMist, setShowMist] = useState(false);

  const ph = phases[ap];
  const c = ph.color;

  const switchPhase = (i) => { setAp(i); setAt(null); setTab("topics"); };

  return (
    <div style={{ minHeight: "100vh", background: "#060810", color: "#D8DCE8", fontFamily: "'Courier New', monospace" }}>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        a{color:inherit;text-decoration:none}
        a:hover{opacity:.75;text-decoration:underline}
        .btn{cursor:pointer;border:none;background:none;font-family:inherit;transition:all .15s}
        .btn:hover{opacity:.8}
        .card{transition:all .15s;cursor:pointer}
        .card:hover{transform:translateX(4px)}
        @keyframes fi{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        .fi{animation:fi .22s ease forwards}
        @keyframes bl{0%,100%{opacity:1}50%{opacity:.2}}
        .bl{animation:bl 2s infinite}
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-thumb{background:#1e2330;border-radius:2px}
      `}</style>

      {/* ── HEADER ── */}
      <div style={{ background: "#0A0C15", borderBottom: `1px solid ${c}28`, padding: "14px 20px", position: "sticky", top: 0, zIndex: 50, backdropFilter: "blur(10px)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", letterSpacing: 1.5 }}>
              <span className="bl" style={{ color: c, marginRight: 8 }}>▶</span>
              APPLIED AI ENGINEERING ROADMAP
            </div>
            <div style={{ fontSize: 9, color: "#333", marginTop: 3, letterSpacing: 2.5 }}>
              HEMASAI VATTIKUTI · 7 PHASES · 12 MONTHS · 3–4 HRS/DAY · ₹15 LPA+
            </div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {[["📅", "SCHEDULE", showSched, "#FFD740", () => { setShowSched(!showSched); setShowMist(false); }],
              ["⚠️", "MISTAKES", showMist, "#FF5566", () => { setShowMist(!showMist); setShowSched(false); }]
            ].map(([ico, lbl, active, col, fn], i) => (
              <button key={i} className="btn" onClick={fn} style={{ padding: "6px 12px", border: `1px solid ${active ? col : "#1a1e2e"}`, borderRadius: 6, color: active ? col : "#444", fontSize: 10, letterSpacing: 1.5 }}>
                {ico} {lbl}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "24px 16px" }}>

        {/* ── SCHEDULE ── */}
        {showSched && (
          <div className="fi" style={{ background: "#0A0C15", border: "1px solid #FFD74028", borderRadius: 12, padding: 22, marginBottom: 22 }}>
            <div style={{ color: "#FFD740", fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 18 }}>📅 WEEKLY NON-NEGOTIABLES</div>
            {schedule.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "90px 1fr", gap: 14, marginBottom: 14, paddingBottom: 14, borderBottom: i < schedule.length - 1 ? "1px solid #0e1120" : "none" }}>
                <div style={{ color: "#FFD740", fontSize: 11, fontWeight: 700, paddingTop: 3 }}>{row.day}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {row.slots.map((s, j) => (
                    <div key={j} style={{ padding: "5px 11px", background: "#0e1120", border: "1px solid #1a1e30", borderRadius: 5, color: "#666", fontSize: 10 }}>{s}</div>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ marginTop: 10, padding: "10px 14px", background: "#FFD74008", border: "1px solid #FFD74018", borderRadius: 8, color: "#666", fontSize: 10, lineHeight: 1.8 }}>
              ⚡ DSA is non-negotiable every weekday. Month 1–3: Easy only. Month 4–9: Easy + Medium. Month 10–12: Mock interviews 3×/week.
            </div>
          </div>
        )}

        {/* ── MISTAKES ── */}
        {showMist && (
          <div className="fi" style={{ background: "#0A0C15", border: "1px solid #FF556628", borderRadius: 12, padding: 22, marginBottom: 22 }}>
            <div style={{ color: "#FF5566", fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 18 }}>⚠️ FATAL MISTAKES TO AVOID</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {mistakes.map((m, i) => (
                <div key={i} style={{ padding: "13px 15px", background: "#0e1120", border: "1px solid #FF556615", borderRadius: 9 }}>
                  <div style={{ color: "#FF5566", fontSize: 11, fontWeight: 700, marginBottom: 6, letterSpacing: .5 }}>{m.t}</div>
                  <div style={{ color: "#555", fontSize: 10, lineHeight: 1.7 }}>{m.d}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── PHASE SELECTOR ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6, marginBottom: 22 }}>
          {phases.map((p, i) => (
            <button key={i} className="btn" onClick={() => switchPhase(i)}
              style={{ padding: "10px 6px", background: ap === i ? p.color + "12" : "#0A0C15", border: `1px solid ${ap === i ? p.color : "#131826"}`, borderRadius: 9, color: ap === i ? p.color : "#333", textAlign: "center" }}>
              <div style={{ fontSize: 14, marginBottom: 3 }}>{p.icon}</div>
              <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: 1, lineHeight: 1.4 }}>{p.title.toUpperCase()}</div>
              <div style={{ fontSize: 7, marginTop: 2, opacity: .6 }}>{p.duration}</div>
            </button>
          ))}
        </div>

        {/* ── PHASE HEADER ── */}
        <div style={{ padding: "16px 20px", background: c + "08", border: `1px solid ${c}1a`, borderRadius: 11, marginBottom: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
            <div>
              <div style={{ color: c, fontSize: 15, fontWeight: 700, letterSpacing: .5 }}>{ph.icon} Phase {ph.id}: {ph.title}</div>
              <div style={{ fontSize: 9, color: c + "77", marginTop: 3, letterSpacing: 2 }}>{ph.duration}</div>
            </div>
            <div style={{ fontSize: 10, color: "#555", maxWidth: 420, lineHeight: 1.7, textAlign: "right" }}>{ph.summary}</div>
          </div>
        </div>

        {/* ── INNER TABS ── */}
        <div style={{ display: "flex", gap: 6, marginBottom: 18, flexWrap: "wrap" }}>
          {TABS.map(t => (
            <button key={t} className="btn" onClick={() => { setTab(t); setAt(null); }}
              style={{ padding: "7px 14px", background: tab === t ? c + "12" : "transparent", border: `1px solid ${tab === t ? c : "#131826"}`, borderRadius: 6, color: tab === t ? c : "#333", fontSize: 10, letterSpacing: 1.5 }}>
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>

        {/* ── TOPICS ── */}
        {tab === "topics" && (
          <div className="fi">
            <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
              <span style={{ padding: "3px 10px", background: "#00E5FF0e", border: "1px solid #00E5FF22", borderRadius: 4, color: "#00E5FF", fontSize: 9, letterSpacing: 1.5 }}>MANDATORY — must learn</span>
              <span style={{ padding: "3px 10px", background: "#1a1e2e", border: "1px solid #252a3a", borderRadius: 4, color: "#444", fontSize: 9, letterSpacing: 1.5 }}>OPTIONAL — only if time allows</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: at !== null ? "220px 1fr" : "1fr 1fr", gap: 10, alignItems: "start" }}>
              {/* LIST */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6, gridColumn: at !== null ? "1" : "1 / -1", ...(at !== null ? {} : { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }) }}>
                {ph.topics.map((t, i) => (
                  <div key={i} className="card" onClick={() => setAt(at === i ? null : i)}
                    style={{ padding: "12px 14px", background: at === i ? c + "10" : "#0A0C15", border: `1px solid ${at === i ? c : "#131826"}`, borderRadius: 9, gridColumn: at !== null ? "auto" : "auto" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: at === i ? c : "#AAA" }}>{t.name}</span>
                      <span style={{ fontSize: 8, padding: "2px 7px", borderRadius: 3, background: t.mandatory ? "#00E5FF0e" : "#1a1e2e", color: t.mandatory ? "#00E5FF" : "#444", border: `1px solid ${t.mandatory ? "#00E5FF22" : "#252a3a"}`, letterSpacing: 1, whiteSpace: "nowrap" }}>
                        {t.mandatory ? "MUST" : "OPT"}
                      </span>
                    </div>
                    <div style={{ fontSize: 10, color: "#444", marginTop: 6, lineHeight: 1.6 }}>{t.why.slice(0, 90)}…</div>
                  </div>
                ))}
              </div>
              {/* DETAIL */}
              {at !== null && (
                <div className="fi" style={{ background: "#0A0C15", border: `1px solid ${c}28`, borderRadius: 11, padding: 20 }}>
                  <div style={{ color: c, fontSize: 14, fontWeight: 700, marginBottom: 20, letterSpacing: .5 }}>{ph.topics[at].name}</div>
                  {[["📌 WHAT TO LEARN", ph.topics[at].what], ["🎯 REQUIRED DEPTH", ph.topics[at].depth], ["💡 WHY IT MATTERS", ph.topics[at].why]].map(([lbl, val], i) => (
                    <div key={i} style={{ marginBottom: 16 }}>
                      <div style={{ fontSize: 8, color: "#2a2e40", letterSpacing: 2.5, marginBottom: 6 }}>{lbl}</div>
                      <div style={{ color: "#777", fontSize: 11, lineHeight: 1.75, paddingLeft: 10, borderLeft: `2px solid ${c}30` }}>{val}</div>
                    </div>
                  ))}
                  <div style={{ marginTop: 18 }}>
                    <div style={{ fontSize: 8, color: "#2a2e40", letterSpacing: 2.5, marginBottom: 12 }}>📚 RESOURCES</div>
                    {[["FAST TRACK", ph.topics[at].fast, "#00E5FF"], ["DEEP DIVE", ph.topics[at].deep, c]].map(([tag, res, col], i) => (
                      <a key={i} href={res.url} target="_blank" rel="noopener noreferrer"
                        style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "11px 13px", background: "#0e1120", border: `1px solid ${col}18`, borderRadius: 8, marginBottom: 8 }}>
                        <span style={{ fontSize: 8, padding: "3px 7px", background: col + "12", color: col, border: `1px solid ${col}28`, borderRadius: 3, letterSpacing: 1.5, whiteSpace: "nowrap", marginTop: 1 }}>{tag}</span>
                        <span style={{ fontSize: 11, color: col, lineHeight: 1.6 }}>{res.label} ↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── PROJECT ── */}
        {tab === "project" && (
          <div className="fi">
            {ph.project ? (
              <div style={{ background: "#0A0C15", border: `1px solid ${c}28`, borderRadius: 11, padding: 22 }}>
                <div style={{ color: c, fontSize: 14, fontWeight: 700, marginBottom: 20 }}>🏗 {ph.project.name}</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                  {[["TECH STACK", ph.project.stack], ["ARCHITECTURE", ph.project.architecture]].map(([lbl, val], i) => (
                    <div key={i} style={{ padding: 14, background: "#0e1120", border: "1px solid #131826", borderRadius: 9 }}>
                      <div style={{ fontSize: 8, color: "#2a2e40", letterSpacing: 2.5, marginBottom: 8 }}>{lbl}</div>
                      <div style={{ fontSize: 11, color: "#666", lineHeight: 1.75 }}>{val}</div>
                    </div>
                  ))}
                </div>
                <div style={{ padding: 14, background: "#0e1120", border: "1px solid #131826", borderRadius: 9, marginBottom: 10 }}>
                  <div style={{ fontSize: 8, color: "#2a2e40", letterSpacing: 2.5, marginBottom: 10 }}>FEATURES TO BUILD</div>
                  {ph.project.features.map((f, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                      <span style={{ color: c, fontSize: 11 }}>▸</span>
                      <span style={{ fontSize: 11, color: "#666", lineHeight: 1.6 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: 14, background: c + "07", border: `1px solid ${c}18`, borderRadius: 9 }}>
                  <div style={{ fontSize: 8, color: c + "88", letterSpacing: 2.5, marginBottom: 8 }}>⭐ WHY THIS STANDS OUT FOR HIRING</div>
                  <div style={{ fontSize: 12, color: "#888", lineHeight: 1.75 }}>{ph.project.standout}</div>
                </div>
              </div>
            ) : (
              <div style={{ padding: 28, color: "#2a2e40", fontSize: 12, textAlign: "center", border: "1px solid #131826", borderRadius: 11, background: "#0A0C15" }}>
                No project this phase — strong foundation now = better projects later.
              </div>
            )}
          </div>
        )}

        {/* ── SYSTEM DESIGN ── */}
        {tab === "sysdesign" && (
          <div className="fi">
            {ph.systemDesign ? (
              <div style={{ background: "#0A0C15", border: `1px solid ${c}28`, borderRadius: 11, padding: 22 }}>
                <div style={{ color: c, fontSize: 14, fontWeight: 700, marginBottom: 20 }}>🔷 {ph.systemDesign.title}</div>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 8, color: "#2a2e40", letterSpacing: 2.5, marginBottom: 12 }}>TOPICS TO COVER</div>
                  {ph.systemDesign.topics.map((t, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, padding: "9px 12px", marginBottom: 5, background: "#0e1120", border: "1px solid #131826", borderRadius: 7 }}>
                      <span style={{ color: c, fontSize: 11 }}>◈</span>
                      <span style={{ fontSize: 11, color: "#666" }}>{t}</span>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 8, color: "#2a2e40", letterSpacing: 2.5, marginBottom: 12 }}>RESOURCES</div>
                {[ph.systemDesign.r1, ph.systemDesign.r2].map((r, i) => (
                  <a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", background: "#0e1120", border: `1px solid ${c}18`, borderRadius: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 10, color: c, fontWeight: 700 }}>R{i + 1}</span>
                    <span style={{ fontSize: 11, color: c, lineHeight: 1.5 }}>{r.label} ↗</span>
                  </a>
                ))}
              </div>
            ) : (
              <div style={{ padding: 28, color: "#2a2e40", fontSize: 12, textAlign: "center", border: "1px solid #131826", borderRadius: 11, background: "#0A0C15" }}>
                System design begins in Phase 1. Focus on coding fundamentals first.
              </div>
            )}
          </div>
        )}

        {/* ── FRONTEND ── */}
        {tab === "frontend" && (
          <div className="fi" style={{ background: "#0A0C15", border: `1px solid ${c}28`, borderRadius: 11, padding: 22 }}>
            <div style={{ color: c, fontSize: 13, fontWeight: 700, marginBottom: 14 }}>🖥 Frontend Strategy — Phase {ph.id}</div>
            <div style={{ color: "#666", fontSize: 12, lineHeight: 1.9 }}>{ph.frontend}</div>
          </div>
        )}

        {/* ── FOOTER ── */}
        <div style={{ marginTop: 28, padding: "14px 20px", background: "#0A0C15", border: "1px solid #131826", borderRadius: 11, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
          {[["RULE #1", "If AI writes it — retype manually and explain every line aloud.", "#00E5FF"],
            ["RULE #2", "Week 1 starts today. Not Monday. Not next week.", "#FF5566"],
            ["TARGET", "₹15 LPA+ offer · 12 months", "#FFD740"]
          ].map(([lbl, val, col], i) => (
            <div key={i}>
              <div style={{ fontSize: 8, color: "#1e2230", letterSpacing: 2.5, marginBottom: 4 }}>{lbl}</div>
              <div style={{ fontSize: 11, color: col, fontWeight: 700, letterSpacing: .5 }}>{val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
