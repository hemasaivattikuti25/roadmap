import { useState } from "react";

const phases = [
  {
    id: 0, title: "Foundations", duration: "Month 1–2", color: "#fbbf24", icon: "⚙️",
    summary: "Lock the base. EPAM Round 1 tests DSA and CS fundamentals cold. No shortcuts here.",
    topics: [
      {
        name: "CS Fundamentals", mandatory: true,
        what: "OS — processes, threads, deadlocks, memory (stack vs heap). Networking — HTTP/HTTPS, TCP/IP, DNS. Concurrency vs parallelism. How browsers work (request lifecycle).",
        depth: "Explain any concept without notes. EPAM interviewers ask this directly. Know why threads exist, what a deadlock is, what happens when you type a URL.",
        why: "Every EPAM/product company SDE interview has a CS fundamentals round. This is the fastest way to get eliminated if you skip it.",
        fast: { label: "Neso Academy — OS Concepts Full Playlist · YouTube · Free", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O" },
        deep: { label: "CS50 — Harvard · Full Free Course · edX", url: "https://cs50.harvard.edu/x/" },
      },
      {
        name: "DSA in Java", mandatory: true,
        what: "Java syntax + Collections first. Then Striver A2Z: Arrays, Strings, HashMap, Two Pointers, Sliding Window, Binary Search, Sorting (Merge, Quick). 2 problems/day minimum.",
        depth: "Solve Easy fluently in under 15 mins. Solve Mediums in under 30 mins. 80+ problems done by end of this phase. No AI assistance during practice.",
        why: "EPAM Round 1 = coding test with 2–3 DSA problems in Java. Zero DSA = eliminated before anyone even sees your resume.",
        fast: { label: "Striver A2Z DSA Sheet — takeuforward.org · Free", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" },
        deep: { label: "Striver DSA Full Playlist · YouTube · Free", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz" },
      },
      {
        name: "Git & Collaboration", mandatory: true,
        what: "Branching (GitFlow), rebase vs merge, pull requests, code review workflow, resolving merge conflicts, git hooks, CI basics.",
        depth: "Comfortable with daily Git on a team. Can explain rebase vs merge tradeoffs. Can set up a simple GitHub Actions workflow.",
        why: "Every professional engineering job uses Git daily. EPAM specifically tests version control knowledge in technical rounds.",
        fast: { label: "Learn Git Branching — Interactive · Free", url: "https://learngitbranching.js.org/" },
        deep: { label: "Pro Git Book — Scott Chacon · Free Online", url: "https://git-scm.com/book/en/v2" },
      },
      {
        name: "Linux & Terminal", mandatory: false,
        what: "Navigation, file ops, permissions, grep, curl, SSH, environment variables, basic bash scripting.",
        depth: "Deploy an app on a server without a GUI. Debug issues using only terminal tools.",
        why: "All production AI systems run on Linux. Terminal fluency = 10x faster debugging in real jobs.",
        fast: { label: "Missing Semester of CS — Shell Tools · MIT · Free", url: "https://missing.csail.mit.edu/2020/shell-tools/" },
        deep: { label: "Linux Command Line — William Shotts · Free PDF", url: "https://linuxcommand.org/tlcl.php" },
      },
    ],
    project: null,
    systemDesign: null,
    frontend: "No frontend this phase. Pure CS + DSA + Git focus. Any distraction now costs you the EPAM opportunity.",
  },
  {
    id: 1, title: "Python & Backend Core", duration: "Month 2–4", color: "#00ff9f", icon: "🔧",
    summary: "Build real APIs you can deploy and fully defend in interviews. This is your engineering backbone.",
    topics: [
      {
        name: "Python Mastery", mandatory: true,
        what: "OOP, decorators, async/await, type hints, list comprehensions, generators, error handling, modules, file I/O.",
        depth: "Write production Python without GPT. Explain every line. Own the language — it's your primary tool for everything AI.",
        why: "You call yourself a Python developer on your resume. Interviewers at Groww, Setu, Razorpay will test you on this directly.",
        fast: { label: "Corey Schafer — Python OOP Full Playlist · YouTube · Free", url: "https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc" },
        deep: { label: "Real Python — Python OOP + Async IO · Free Articles", url: "https://realpython.com/async-io-python/" },
      },
      {
        name: "SOLID Principles", mandatory: true,
        what: "S — Single Responsibility, O — Open/Closed, L — Liskov Substitution, I — Interface Segregation, D — Dependency Inversion. With Python and Java examples.",
        depth: "Explain each principle with a real example from your codebase. EPAM interviewers ask this by name.",
        why: "SOLID is the most commonly tested OOP topic at EPAM and product companies. Your Mithra code likely violates several of these — fix that.",
        fast: { label: "SOLID Explained — Fireship · YouTube · Free", url: "https://www.youtube.com/watch?v=pTB30aXS77U" },
        deep: { label: "SOLID in Python — Real Python · Free Article", url: "https://realpython.com/solid-principles-python/" },
      },
      {
        name: "Design Patterns", mandatory: true,
        what: "Creational — Singleton, Factory, Builder. Structural — Adapter, Decorator, Facade. Behavioral — Observer, Strategy, Command. Know when to use each.",
        depth: "Identify which pattern applies to a given problem in under 30 seconds. Implement Singleton and Factory from memory.",
        why: "Standard EPAM technical interview question. Also makes your AI backend code genuinely better structured.",
        fast: { label: "Refactoring.Guru — Design Patterns · Free", url: "https://refactoring.guru/design-patterns" },
        deep: { label: "Design Patterns in Python — GitHub Reference", url: "https://github.com/faif/python-patterns" },
      },
      {
        name: "FastAPI Mastery", mandatory: true,
        what: "Routing, Pydantic models, dependency injection, middleware, background tasks, async endpoints, WebSockets, project structure.",
        depth: "Build a full REST API from scratch without GPT. Explain every part — dependency injection, why Pydantic, how async works in FastAPI.",
        why: "FastAPI is on your resume and in Mithra. Interviewers will go deep. You must own it completely.",
        fast: { label: "FastAPI Official Tutorial — tiangolo · Docs · Free", url: "https://fastapi.tiangolo.com/tutorial/" },
        deep: { label: "FastAPI Best Practices — GitHub · zhanymkanov", url: "https://github.com/zhanymkanov/fastapi-best-practices" },
      },
      {
        name: "Databases — Postgres + Redis", mandatory: true,
        what: "PostgreSQL: advanced JOINs, indexes, EXPLAIN ANALYZE, connection pooling, Alembic migrations, pgvector. Redis: TTL, caching patterns, session storage.",
        depth: "Design a schema, write optimized queries, run migrations without help. Explain why pgvector uses cosine similarity. Implement response caching in FastAPI.",
        why: "pgvector is in Mithra — you MUST explain it cold. Redis caching = cost savings on LLM APIs = senior-level thinking interviewers love.",
        fast: { label: "PostgreSQL Tutorial — postgresqltutorial.com · Free", url: "https://www.postgresqltutorial.com/" },
        deep: { label: "CMU Database Systems — Andy Pavlo · Free Course", url: "https://15445.courses.cs.cmu.edu/fall2022/" },
      },
      {
        name: "Auth — JWT & OAuth2", mandatory: true,
        what: "JWT token flow, OAuth2 patterns, password hashing (bcrypt), RBAC, API key auth, refresh tokens, HTTPS basics.",
        depth: "Implement auth from scratch in FastAPI without copying. Know what each piece does and what breaks if you skip it.",
        why: "Every production app has auth. EPAM and product companies always ask this. Your DRDO project used it — own it now.",
        fast: { label: "FastAPI Security — Official Docs · JWT + OAuth2 · Free", url: "https://fastapi.tiangolo.com/tutorial/security/" },
        deep: { label: "Hussein Nasser — JWT Deep Dive · YouTube · Free", url: "https://www.youtube.com/watch?v=7Q17ubqLfaM" },
      },
      {
        name: "Testing with pytest", mandatory: true,
        what: "Unit tests, fixtures, conftest.py, pytest-mock, TestClient for FastAPI, pytest-cov for coverage.",
        depth: "Write tests for your own FastAPI project. Achieve 70%+ coverage. Explain what mocking is and why you use it.",
        why: "EPAM specifically evaluates testing knowledge. Almost no junior candidates test their code — instant differentiation.",
        fast: { label: "pytest Official Docs · Free", url: "https://docs.pytest.org/en/stable/" },
        deep: { label: "Real Python — Testing with pytest · Free Guide", url: "https://realpython.com/pytest-python-testing/" },
      },
      {
        name: "Docker & Deployment", mandatory: true,
        what: "Dockerfile, docker-compose, volumes, networking, env vars, deploy to Railway/Render.",
        depth: "Containerize any app. Explain what Docker solves, why you'd use it, and what happens without it.",
        why: "Every project you build must be deployable. Docker is universal. If your portfolio apps aren't live, they don't count.",
        fast: { label: "Docker in 100s + Full Course — Fireship · YouTube · Free", url: "https://www.youtube.com/watch?v=Gjnup-PuquQ" },
        deep: { label: "Docker + FastAPI Guide — TestDriven.io · Free", url: "https://testdriven.io/blog/fastapi-docker-traefik/" },
      },
    ],
    systemDesign: {
      title: "Backend System Design",
      topics: ["Client-server architecture", "Load balancing basics", "Database indexing and query optimization", "Monolith vs microservices tradeoffs", "API gateway pattern", "Rate limiting strategies"],
      r1: { label: "System Design Primer — GitHub · donnemartin · Free", url: "https://github.com/donnemartin/system-design-primer" },
      r2: { label: "ByteByteGo — System Design Newsletter · Free Tier", url: "https://bytebytego.com/" },
    },
    project: {
      name: "Task Manager API (EPAM Portfolio)",
      stack: "FastAPI + PostgreSQL + JWT Auth + Redis + Docker + Render",
      features: ["User registration/login with JWT + bcrypt", "CRUD for tasks with RBAC user isolation", "Redis caching on GET endpoints", "Pagination, filtering, rate limiting", "pytest suite with 70%+ coverage", "Dockerized + live deployed URL"],
      architecture: "Client → FastAPI (JWT middleware) → PostgreSQL (SQLAlchemy + Alembic). Redis for response caching. Docker Compose locally. Deployed on Render.",
      standout: "Recruiters can hit your live API. Shows you can ship, test, and deploy — not just code on localhost. Perfect EPAM interview talking point.",
    },
    frontend: "Streamlit only — build a simple UI to demo your API. No React yet. Backend quality matters 10x more than frontend at this stage.",
  },
  {
    id: 2, title: "AI & LLM Integration", duration: "Month 4–6", color: "#00c8ff", icon: "🧠",
    summary: "This is your core differentiator. Build LLM systems you can explain every line of — no vibe coding.",
    topics: [
      {
        name: "LLM Fundamentals", mandatory: true,
        what: "Tokens, context windows, temperature, top-p, embeddings, fine-tuning vs prompting, model families (GPT-4, Claude, Gemini, Llama). How attention works conceptually.",
        depth: "Explain how any LLM works to a non-technical person. Explain tradeoffs between models. You should be able to answer 'why did you use GPT-4 instead of Gemini' in an interview.",
        why: "Applied AI engineers who don't understand LLMs are just API callers. You need the mental model to make good engineering decisions.",
        fast: { label: "Andrej Karpathy — Intro to LLMs (1hr) · YouTube · Free", url: "https://www.youtube.com/watch?v=zjkBMFhNj_g" },
        deep: { label: "fast.ai — Practical Deep Learning for Coders · Free", url: "https://course.fast.ai/" },
      },
      {
        name: "Prompt Engineering", mandatory: true,
        what: "Zero-shot, few-shot, chain-of-thought, ReAct, system prompts, structured JSON outputs, prompt injection defense, prompt versioning.",
        depth: "Write prompts that reliably produce structured outputs. Know why each technique works. Run evals on your prompts.",
        why: "80% of Applied AI daily work is prompt engineering. Mithra's quality depends on your prompts — understand why they work.",
        fast: { label: "Prompt Engineering Guide — DAIR.AI · Free", url: "https://www.promptingguide.ai/" },
        deep: { label: "DeepLearning.AI — ChatGPT Prompt Engineering · Free", url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" },
      },
      {
        name: "LLM APIs (OpenAI / Anthropic)", mandatory: true,
        what: "API auth, chat completions, streaming responses, function/tool calling, token counting, cost management, error handling + retry logic.",
        depth: "Integrate any LLM API into a FastAPI backend. Handle streaming properly. Know how to estimate cost before running at scale.",
        why: "You use this every single day as an Applied AI engineer. Own the API, not just the wrapper.",
        fast: { label: "OpenAI API Quickstart — Official Docs · Free", url: "https://platform.openai.com/docs/quickstart" },
        deep: { label: "Anthropic Python SDK Docs · Free", url: "https://docs.anthropic.com/en/api/getting-started" },
      },
      {
        name: "Embeddings Deep Dive", mandatory: true,
        what: "What embeddings are, text-embedding-3 models, cosine vs dot product vs L2 similarity, batch embedding, embedding caching, when to use which.",
        depth: "Explain pgvector's operators (<->, <=>, <#>) from memory. Implement embedding pipeline for a new document type without help.",
        why: "pgvector is in Mithra. Interviewers will ask 'why cosine similarity?' If you can't answer that, it looks like you copied the code.",
        fast: { label: "OpenAI Embeddings Guide · Official Docs · Free", url: "https://platform.openai.com/docs/guides/embeddings" },
        deep: { label: "What are Embeddings? — Vicki Boykis · Free", url: "https://vickiboykis.com/what_are_embeddings/" },
      },
      {
        name: "LangChain / LlamaIndex", mandatory: true,
        what: "Chains, LCEL runnables, document loaders, text splitters, memory types, callbacks. LlamaIndex query engines and ingestion pipelines.",
        depth: "Use both frameworks confidently. Know what they do under the hood. Know when NOT to use them (simple tasks don't need LangChain).",
        why: "Appears in 70%+ of AI engineer JDs. You already use LangChain in Mithra — now actually understand it.",
        fast: { label: "LangChain Docs — Quickstart + How-To · Free", url: "https://python.langchain.com/docs/introduction/" },
        deep: { label: "Greg Kamradt — LangChain Full Course · YouTube · Free", url: "https://www.youtube.com/watch?v=_v_fgW2SkkQ" },
      },
      {
        name: "Eval & Observability", mandatory: false,
        what: "LLM evals (RAGAS), hallucination detection, latency tracking, LangSmith tracing, cost monitoring.",
        depth: "Set up basic eval pipeline and LangSmith tracing on one project.",
        why: "Almost no junior candidates think about eval. Instant differentiation in interviews at Groww, Setu, Postman.",
        fast: { label: "RAGAS — RAG Evaluation Framework · Docs · Free", url: "https://docs.ragas.io/en/latest/" },
        deep: { label: "LangSmith Official Docs · Free", url: "https://docs.smith.langchain.com/" },
      },
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
      standout: "Proves you understand streaming, caching, cost management — all senior-level thinking. You can walk any interviewer through every layer.",
    },
    frontend: "Streamlit for chat UI. Add streaming output display. Focus on the backend — frontend is just a demo layer still.",
  },
  {
    id: 3, title: "Data Science", duration: "Month 5–7", color: "#f97316", icon: "📊",
    summary: "The math and ML behind the AI. You need this to go beyond being an API caller.",
    topics: [
      {
        name: "Math & Stats Foundations", mandatory: true,
        what: "Linear algebra — vectors, matrices, dot products. Probability — Bayes theorem, conditional probability. Statistics — mean, std, distributions, hypothesis testing, p-values. Calculus — gradients, derivatives (conceptual).",
        depth: "Understand enough to read an ML paper and not be lost. Explain what a vector is, why dot product measures similarity, what a normal distribution is.",
        why: "You cannot understand embeddings, attention, or model eval without this. You have Stanford ML cert — the math behind it should be solid.",
        fast: { label: "3Blue1Brown — Linear Algebra Series · YouTube · Free", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" },
        deep: { label: "StatQuest — Stats & ML Math · YouTube · Free", url: "https://www.youtube.com/c/joshstarmer" },
      },
      {
        name: "NumPy & Pandas", mandatory: true,
        what: "NumPy arrays, broadcasting, vectorized operations. Pandas DataFrames, data cleaning, null handling, groupby, merge, pivot tables, feature engineering.",
        depth: "Clean a messy CSV and produce a model-ready dataset without Googling syntax. This is daily work in any AI role.",
        why: "Every ML and data pipeline uses NumPy and Pandas. These are non-negotiable tools.",
        fast: { label: "Kaggle — Pandas Course · Free Micro-course", url: "https://www.kaggle.com/learn/pandas" },
        deep: { label: "Pandas Official User Guide · Free", url: "https://pandas.pydata.org/docs/user_guide/index.html" },
      },
      {
        name: "EDA & Visualization", mandatory: true,
        what: "Matplotlib, Seaborn for static charts. Plotly for interactive. Correlation heatmaps, distribution plots, outlier detection, feature importance visualization.",
        depth: "Given a dataset, produce a clear EDA report that reveals patterns and problems before modelling.",
        why: "Data quality determines model quality. EDA skills show you understand data, not just code.",
        fast: { label: "Kaggle — Data Visualization Course · Free", url: "https://www.kaggle.com/learn/data-visualization" },
        deep: { label: "Seaborn Official Tutorial · Free", url: "https://seaborn.pydata.org/tutorial.html" },
      },
      {
        name: "ML Algorithms", mandatory: true,
        what: "Linear & Logistic Regression, Decision Trees, Random Forest, XGBoost/LightGBM, K-Means, SVM. Understand the intuition behind each.",
        depth: "Explain any algorithm's intuition without notes. Know when to use XGBoost vs Neural Networks. Implement Logistic Regression from scratch once.",
        why: "Applied AI engineers pick the right tool for the problem. Using a heavy LLM where XGBoost works = bad engineering.",
        fast: { label: "StatQuest — ML Algorithms Playlist · YouTube · Free", url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF" },
        deep: { label: "Scikit-learn User Guide · Free", url: "https://scikit-learn.org/stable/user_guide.html" },
      },
      {
        name: "Model Training & Evaluation", mandatory: true,
        what: "Train/val/test splits, K-Fold cross-validation, Precision/Recall/F1/AUC-ROC, confusion matrix, overfitting, L1/L2 regularization, hyperparameter tuning (Optuna).",
        depth: "Run a full ML experiment: train, evaluate, tune, explain results. Know why AUC-ROC matters for imbalanced datasets.",
        why: "If you can't evaluate a model properly, your AI systems will fail silently in production.",
        fast: { label: "Google ML Crash Course · Free", url: "https://developers.google.com/machine-learning/crash-course" },
        deep: { label: "Kaggle — Intermediate ML Course · Free", url: "https://www.kaggle.com/learn/intermediate-machine-learning" },
      },
      {
        name: "Deep Learning Basics", mandatory: false,
        what: "Neural network architecture, forward/backpropagation, PyTorch tensors + autograd, CNNs, Transformers architecture (attention, BERT, GPT concepts).",
        depth: "Understand how a Transformer works at a high level. Run one training loop in PyTorch without copying.",
        why: "You're building on top of these models. Understanding the architecture makes you a better AI engineer, not just an API caller.",
        fast: { label: "Andrej Karpathy — Neural Nets Zero to Hero · YouTube · Free", url: "https://www.youtube.com/watch?v=VMj-3S1tku0" },
        deep: { label: "fast.ai — Practical Deep Learning · Free", url: "https://course.fast.ai/" },
      },
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
      standout: "Shows you can close the loop from data → model → API → deployment. Most candidates can only do one part of this.",
    },
    frontend: "Streamlit dashboard showing predictions + confidence scores + feature importance charts. Visual output impresses in interviews.",
  },
  {
    id: 4, title: "RAG Systems", duration: "Month 6–8", color: "#bf5fff", icon: "🔍",
    summary: "RAG is the #1 pattern in enterprise AI. You built one in Mithra — now understand every layer.",
    topics: [
      {
        name: "Vector Databases", mandatory: true,
        what: "pgvector — setup, HNSW vs IVFFlat indexing, operators (<->, <=>, <#>). Pinecone, Qdrant. Similarity metrics — cosine, dot product, L2. Metadata filtering.",
        depth: "Explain what HNSW is and why it's faster than brute force. Explain when you'd use Qdrant vs pgvector. This is in Mithra — you must own it.",
        why: "pgvector is on your resume. Interviewers at Setu, Groww, Postman will ask you to explain it. Fumbling this = red flag.",
        fast: { label: "pgvector GitHub + Docs · Free", url: "https://github.com/pgvector/pgvector" },
        deep: { label: "Pinecone Learn — Vector DB Deep Dive · Free", url: "https://www.pinecone.io/learn/vector-database/" },
      },
      {
        name: "Chunking Strategies", mandatory: true,
        what: "Fixed-size chunking, semantic chunking, recursive splitter, chunk overlap, parent-child chunks, document hierarchy.",
        depth: "Explain why chunk size affects retrieval quality. Test 3 different strategies on the same dataset and compare results.",
        why: "Chunking is the most underrated part of RAG. Wrong chunking = wrong retrieval = hallucinations. Interviewers love candidates who know this.",
        fast: { label: "Chunking Strategies — Pinecone Blog · Free", url: "https://www.pinecone.io/learn/chunking-strategies/" },
        deep: { label: "Greg Kamradt — Chunking Methods Compared · YouTube · Free", url: "https://www.youtube.com/watch?v=8OJC21T2SL4" },
      },
      {
        name: "Retrieval & Reranking", mandatory: true,
        what: "Semantic search, hybrid search (BM25 + semantic), re-ranking with Cohere, MMR for diversity, query expansion, multi-query retrieval.",
        depth: "Implement hybrid search from scratch. Explain why reranking improves results over pure vector search.",
        why: "Basic RAG fails in production. Hybrid + reranking is what makes it work at scale. Knowing this puts you ahead of 90% of candidates.",
        fast: { label: "LangChain Hybrid Search Docs · Free", url: "https://python.langchain.com/docs/how_to/hybrid/" },
        deep: { label: "Cohere Reranking Docs · Free", url: "https://docs.cohere.com/docs/reranking" },
      },
      {
        name: "RAG Pipeline End-to-End", mandatory: true,
        what: "Ingest → chunk → embed → store. Retrieve → augment prompt → generate → stream. Eval with RAGAS (faithfulness, relevancy, context precision).",
        depth: "Build a RAG pipeline from scratch WITHOUT LangChain first. Then rebuild it with LangChain. Compare. Eval it with RAGAS.",
        why: "This is exactly what Mithra does. If you can't explain your own RAG pipeline in an interview, your biggest project works against you.",
        fast: { label: "RAG From Scratch — LangChain YouTube Series · Free", url: "https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x" },
        deep: { label: "DeepLearning.AI — Building and Evaluating Advanced RAG · Free", url: "https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/" },
      },
      {
        name: "Production RAG Patterns", mandatory: false,
        what: "Caching embedding results, query caching, async ingestion pipelines, multi-tenant vector isolation, RAG eval dashboards.",
        depth: "Refactor Mithra's RAG pipeline using at least 2 of these patterns. Measure latency before/after.",
        why: "Mithra has 690 users. This is how you scale it. Also: every senior AI interview asks about production considerations.",
        fast: { label: "RAGAS Documentation · Free", url: "https://docs.ragas.io/en/latest/" },
        deep: { label: "Awesome Generative AI Guide — GitHub · Free", url: "https://github.com/aishwaryanr/awesome-generative-ai-guide" },
      },
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
      standout: "Every AI team needs this internally. Building it from scratch and adding eval proves you understand every layer — not just LangChain.run().",
    },
    frontend: "Streamlit for the demo. Show source citations clearly. Add a confidence score display. This is a portfolio centrepiece — make it visually clean.",
  },
  {
    id: 5, title: "Agents & Orchestration", duration: "Month 8–10", color: "#ff9f00", icon: "🤖",
    summary: "Agents are the current frontier. Every AI JD in 2025–26 mentions this. Build one that actually works.",
    topics: [
      {
        name: "Agent Architecture", mandatory: true,
        what: "ReAct pattern (Reason + Act), tool use loop, planning, observation → action → observation cycle, multi-step reasoning, failure handling.",
        depth: "Build an agent that uses 3+ tools and handles multi-step tasks reliably. Explain the ReAct loop without notes.",
        why: "Agents are the current frontier in Applied AI. Every JD mentions this. Being able to explain and build one = immediate senior signal.",
        fast: { label: "LangGraph Quickstart — Official Docs · Free", url: "https://langchain-ai.github.io/langgraph/tutorials/introduction/" },
        deep: { label: "ReAct Paper — Yao et al. · Arxiv · Free", url: "https://arxiv.org/abs/2210.03629" },
      },
      {
        name: "Tool Use & Function Calling", mandatory: true,
        what: "OpenAI function calling, Anthropic tool use API, custom tool creation, tool error handling, tool chaining.",
        depth: "Build 3+ custom tools (web search, DB query, file read). Handle tool errors gracefully without breaking the agent loop.",
        why: "Tool use is how agents interact with the world. This is the practical part of agents — you will build this in every AI role.",
        fast: { label: "Anthropic Tool Use Docs · Free", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview" },
        deep: { label: "DeepLearning.AI — Functions Tools and Agents · Free", url: "https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/" },
      },
      {
        name: "Memory Systems", mandatory: true,
        what: "Conversation buffer, summary memory, entity memory, vector store memory, external memory in PostgreSQL. When to use each.",
        depth: "Implement 3 different memory types for the same agent. Explain the tradeoffs.",
        why: "Memory is what makes agents useful for more than one-shot tasks. Mithra's memory could be much better — fix it.",
        fast: { label: "LangGraph Persistence & Memory · Free Docs", url: "https://langchain-ai.github.io/langgraph/concepts/memory/" },
        deep: { label: "Mem0 — Memory Layer for AI · Docs · Free", url: "https://docs.mem0.ai/overview" },
      },
      {
        name: "Multi-Agent Systems", mandatory: false,
        what: "Supervisor pattern, agent orchestration, CrewAI, AutoGen, task delegation, output validation between agents.",
        depth: "Build a 2-agent system where agents delegate tasks. Understand when multi-agent is overkill vs necessary.",
        why: "Multi-agent systems are overkill for most apps — but knowing the pattern signals you understand the frontier.",
        fast: { label: "CrewAI Docs · Free", url: "https://docs.crewai.com/" },
        deep: { label: "DeepLearning.AI — AI Agents in LangGraph · Free", url: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/" },
      },
      {
        name: "LangGraph Deep Dive", mandatory: false,
        what: "State machines for agents, conditional edges, cycles, persistence, human-in-the-loop, streaming from graphs.",
        depth: "Rebuild a LangChain agent using LangGraph. Understand why graph-based orchestration is better for complex agents.",
        why: "LangGraph is becoming the industry standard for production agents. Early knowledge = strong signal.",
        fast: { label: "LangGraph Full Tutorial Series · YouTube · Free", url: "https://www.youtube.com/watch?v=R-o_a6dvzQM" },
        deep: { label: "LangGraph Official Docs · Free", url: "https://langchain-ai.github.io/langgraph/" },
      },
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
    summary: "Production thinking separates ₹10 LPA from ₹15 LPA+. This is where you apply for jobs.",
    topics: [
      {
        name: "CI/CD with GitHub Actions", mandatory: true,
        what: "Automated testing on push, environment secrets, deployment pipelines, Docker build + push, staging vs production environments.",
        depth: "Set up a CI/CD pipeline that tests + deploys your app on every push to main. Zero manual deployment steps.",
        why: "Applied AI engineers own their deployment. This is table stakes at any serious company. Zero candidates at your level have this.",
        fast: { label: "GitHub Actions Full Course — TechWorld with Nana · YouTube · Free", url: "https://www.youtube.com/watch?v=R8_veQiYBjI" },
        deep: { label: "DevOps with Docker + GitHub Actions — Full Stack Open · Free", url: "https://fullstackopen.com/en/part11" },
      },
      {
        name: "Observability Stack", mandatory: true,
        what: "LangSmith for LLM tracing, Sentry for error tracking, Prometheus + Grafana for metrics, API usage dashboards, cost alerting.",
        depth: "Set up LangSmith on Mithra. Add Sentry to one project. Know what to monitor and what alerts to set.",
        why: "Monitoring is what turns a demo into a production system. Mithra has 690 users — it needs proper observability.",
        fast: { label: "LangSmith Official Docs · Free", url: "https://docs.smith.langchain.com/" },
        deep: { label: "Prometheus + Grafana Setup Guide · Grafana Docs", url: "https://grafana.com/docs/grafana/latest/getting-started/get-started-grafana-prometheus/" },
      },
      {
        name: "Security & Zero Trust", mandatory: true,
        what: "Row-Level Security (RLS) in PostgreSQL/Supabase, zero-trust architecture, API key rotation, rate limiting with Redis, input sanitization, OWASP API top 10.",
        depth: "You already implemented RLS in Mithra — explain exactly how it works and why it prevents data leakage. Implement one OWASP fix in your codebase.",
        why: "RLS is in Mithra. If you can't explain it, it looks like you copied it. Also: security is always in interviews at fintech companies.",
        fast: { label: "Supabase RLS Guide · Free", url: "https://supabase.com/docs/guides/database/postgres/row-level-security" },
        deep: { label: "OWASP API Security Top 10 · Free", url: "https://owasp.org/www-project-api-security/" },
      },
      {
        name: "Production AI Patterns", mandatory: true,
        what: "Rate limiting LLM calls, fallback models, async queues for heavy tasks, response caching, cost optimization, prompt versioning in production.",
        depth: "Implement at least 3 of these in Mithra. Measure cost reduction from caching. Know how to handle LLM outages.",
        why: "Building a demo is easy. Making it production-grade is what companies pay for. Mithra at 690 users needs this now.",
        fast: { label: "Full Stack LLM Bootcamp · YouTube · Free", url: "https://www.youtube.com/playlist?list=PL1T8fO7ArWleMMI8KPJ_5D5XSlovTW_Ur" },
        deep: { label: "Designing ML Systems — Chip Huyen · O'Reilly", url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/" },
      },
      {
        name: "Fine-tuning Basics", mandatory: false,
        what: "When to fine-tune vs RAG vs prompting, LoRA/QLoRA concepts, HuggingFace basics, dataset preparation, evaluation of fine-tuned models.",
        depth: "Understand the decision framework. Run one fine-tune on a small open model (Mistral 7B or Llama 3).",
        why: "Most Applied AI engineers only do RAG. Fine-tuning knowledge = immediate senior signal in interviews.",
        fast: { label: "DeepLearning.AI — Finetuning LLMs · Free", url: "https://www.deeplearning.ai/short-courses/finetuning-large-language-models/" },
        deep: { label: "HuggingFace — Fine-tuning Pretrained Models · Free", url: "https://huggingface.co/learn/nlp-course/chapter3/1" },
      },
    ],
    systemDesign: {
      title: "Production AI System Design",
      topics: ["Multi-tenant AI system architecture", "LLM gateway design (rate limit, routing, fallback)", "Embedding pipeline at scale", "Observability stack for AI (LangSmith, Arize, Grafana)", "Cost modeling and budget controls"],
      r1: { label: "a16z — Emerging LLM App Stack · Free Article", url: "https://a16z.com/the-emerging-architectures-for-llm-applications/" },
      r2: { label: "Awesome Generative AI Guide — GitHub · Free", url: "https://github.com/aishwaryanr/awesome-generative-ai-guide" },
    },
    project: {
      name: "Production AI SaaS (Mithra Rebuild or New)",
      stack: "FastAPI + LangGraph + pgvector + OpenAI + React + Docker + GitHub Actions CI/CD + LangSmith",
      features: ["Multi-step AI agent with tools", "User auth with isolated workspaces (RLS)", "LLM observability + cost tracking per user", "Full CI/CD pipeline (test → build → deploy on push)", "Rate limiting + fallback model logic", "React frontend with streaming UI"],
      architecture: "React → FastAPI (auth + rate limit + cost tracking) → LangGraph agent → Tools + LLM → LangSmith (traces) → PostgreSQL + pgvector. GitHub Actions CI/CD.",
      standout: "This is genuinely production-grade. Walk any interviewer through this architecture and you're hired on the spot. This is the Mithra 2.0 you should be building.",
    },
    frontend: "React is required this phase. Build a real product frontend — streaming, auth, user dashboard. This is what makes your portfolio look like a product, not a project.",
  },
];

const schedule = [
  { period: "Mon–Fri", slots: ["45 min → DSA (LeetCode, Striver)", "90 min → Main phase topic", "45 min → Project coding", "30 min → Review: explain aloud"] },
  { period: "Saturday", slots: ["2 hrs → Project deep work", "1 hr → System design reading", "30 min → Mock interview Q&A"] },
  { period: "Sunday", slots: ["Review week's learnings", "Write 5 bullet points of real understanding", "Plan next week tasks", "Rest — no guilt"] },
];

const mistakes = [
  { title: "Tutorial Hell", desc: "Watching videos and building nothing. After every resource, immediately build something from scratch without copying." },
  { title: "GPT as a Crutch", desc: "If AI writes it, you re-type it manually and explain each line out loud. Otherwise you learned nothing and interviews will prove it." },
  { title: "Skipping DSA", desc: "45 mins/day, no exceptions. EPAM Round 1 is a coding test. Zero DSA = eliminated before anyone reads your resume." },
  { title: "Can't Explain Mithra", desc: "690 users. If you can't walk an interviewer through the RAG pipeline, pgvector, and RLS in 5 minutes, you're wasting your biggest asset." },
  { title: "Chasing New Tools", desc: "New frameworks drop weekly. Ignore all of them until Month 9. Deep fundamentals beat shallow tool knowledge every time." },
  { title: "Applying Too Late", desc: "Start applying from Month 9. Waiting until you feel 'ready' = never applying. EPAM referral has a deadline — move fast." },
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
      <div style={{ background: "#0B0E18", borderBottom: `1px solid ${c}33`, padding: "14px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#FFF", letterSpacing: 1 }}>
            <span className="blink" style={{ color: c, marginRight: 8 }}>▶</span>
            APPLIED AI ENGINEERING ROADMAP
          </div>
          <div style={{ fontSize: 10, color: "#444", marginTop: 3, letterSpacing: 2 }}>
            HEMASAI VATTIKUTI · 7 PHASES · 3–4 HRS/DAY · TARGET ₹15 LPA+ · OCT 2026
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn" onClick={() => { setShowSchedule(!showSchedule); setShowMistakes(false); }}
            style={{ padding: "7px 14px", border: `1px solid ${showSchedule ? "#FFD740" : "#222"}`, borderRadius: 6, color: showSchedule ? "#FFD740" : "#555", fontSize: 11, letterSpacing: 1 }}>
            📅 SCHEDULE
          </button>
          <button className="btn" onClick={() => { setShowMistakes(!showMistakes); setShowSchedule(false); }}
            style={{ padding: "7px 14px", border: `1px solid ${showMistakes ? "#FF6B6B" : "#222"}`, borderRadius: 6, color: showMistakes ? "#FF6B6B" : "#555", fontSize: 11, letterSpacing: 1 }}>
            ⚠️ MISTAKES
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 20px" }}>

        {/* SCHEDULE PANEL */}
        {showSchedule && (
          <div className="fade" style={{ background: "#0B0E18", border: "1px solid #FFD74033", borderRadius: 10, padding: 24, marginBottom: 24 }}>
            <div style={{ color: "#FFD740", fontWeight: 700, fontSize: 14, marginBottom: 16, letterSpacing: 1 }}>📅 WEEKLY NON-NEGOTIABLES</div>
            {schedule.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "90px 1fr", gap: 12, marginBottom: 12, paddingBottom: 12, borderBottom: i < schedule.length - 1 ? "1px solid #111" : "none" }}>
                <div style={{ color: "#FFD740", fontSize: 11, fontWeight: 700, paddingTop: 4 }}>{row.period}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {row.slots.map((s, j) => s !== "—" && (
                    <div key={j} style={{ padding: "5px 12px", background: "#131820", border: "1px solid #1C2333", borderRadius: 5, color: "#888", fontSize: 11 }}>{s}</div>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ marginTop: 12, padding: 12, background: "#FFD74008", border: "1px solid #FFD74022", borderRadius: 8, color: "#888", fontSize: 11, lineHeight: 1.7 }}>
              ⚡ DSA rule: 45 min every weekday without exception. Phase 0–1: Easy. Phase 2–4: Easy + Medium. Phase 5–6: Mock interviews 3×/week on Pramp.
            </div>
          </div>
        )}

        {/* MISTAKES PANEL */}
        {showMistakes && (
          <div className="fade" style={{ background: "#0B0E18", border: "1px solid #FF6B6B33", borderRadius: 10, padding: 24, marginBottom: 24 }}>
            <div style={{ color: "#FF6B6B", fontWeight: 700, fontSize: 14, marginBottom: 16, letterSpacing: 1 }}>⚠️ FATAL MISTAKES TO AVOID</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 10 }}>
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
              style={{ padding: "10px 14px", background: activePhase === i ? p.color + "15" : "#0B0E18", border: `1px solid ${activePhase === i ? p.color : "#1C2333"}`, borderRadius: 8, color: activePhase === i ? p.color : "#444", fontSize: 11, letterSpacing: 1, textAlign: "left" }}>
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

        {/* TOPICS TAB */}
        {activeTab === "topics" && (
          <div className="fade">
            <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 14 }}>
              <span style={{ padding: "3px 10px", background: "#00E5FF15", border: "1px solid #00E5FF33", borderRadius: 4, color: "#00E5FF", fontSize: 10, letterSpacing: 1 }}>MUST = mandatory</span>
              <span style={{ padding: "3px 10px", background: "#333", border: "1px solid #444", borderRadius: 4, color: "#666", fontSize: 10, letterSpacing: 1 }}>OPT = if time allows</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: activeTopic !== null ? "240px 1fr" : "1fr", gap: 14, alignItems: "start" }}>
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
                    {activeTopic !== i && <div style={{ fontSize: 10, color: "#444", marginTop: 5, lineHeight: 1.5 }}>{t.why.slice(0, 72)}…</div>}
                  </div>
                ))}
              </div>

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

        {/* PROJECT TAB */}
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

        {/* SYS DESIGN TAB */}
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
              <div style={{ padding: 24, color: "#444", fontSize: 12 }}>System design begins in Phase 1. Focus on coding fundamentals first.</div>
            )}
          </div>
        )}

        {/* FRONTEND TAB */}
        {activeTab === "frontend" && (
          <div className="fade" style={{ background: "#0B0E18", border: `1px solid ${c}33`, borderRadius: 10, padding: 24 }}>
            <div style={{ color: c, fontSize: 15, fontWeight: 700, marginBottom: 14 }}>🖥 Frontend — Phase {phase.id}</div>
            <div style={{ color: "#999", fontSize: 12, lineHeight: 1.8 }}>{phase.frontend}</div>
          </div>
        )}

        {/* FOOTER */}
        <div style={{ marginTop: 32, padding: "16px 20px", background: "#0B0E18", border: "1px solid #1C2333", borderRadius: 10, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          {[
            { label: "RULE #1", val: "If AI writes it — retype manually and explain every line aloud.", col: "#00E5FF" },
            { label: "RULE #2", val: "Phase 0 + Phase 1 done = EPAM SDE/Backend ready.", col: "#fbbf24" },
            { label: "TARGET", val: "₹15 LPA+ offer by Oct 2026", col: "#FFD740" },
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
