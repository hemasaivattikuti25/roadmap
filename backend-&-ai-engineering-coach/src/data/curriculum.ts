import { EnrichedCurriculumTopic, ProjectDef } from '../types';

export const PHASES = [
  { id: 1, title: 'Phase 1: Python Backend Core',              estHours: 40, goal: 'Master modern object-oriented Python, asynchronous cooperative multitasking, and automated testing setups.' },
  { id: 2, title: 'Phase 2: FastAPI Web Services',             estHours: 35, goal: 'Build robust REST APIs, design clean layered architectures, and enforce token-based security boundaries.' },
  { id: 3, title: 'Phase 3: Database & Vector Layer',          estHours: 45, goal: 'Write advanced SQL, optimize transaction boundaries, and integrate pgvector for similarity searches.' },
  { id: 4, title: 'Phase 4: Distributed Event Systems',        estHours: 40, goal: 'Implement caching strategies, manage async background jobs, and design real-time WebSocket channels.' },
  { id: 5, title: 'Phase 5: DevOps & Cloud Infrastructure',   estHours: 30, goal: 'Containerize multi-service applications using Docker and automate deployment pipelines to production.' },
  { id: 6, title: 'Phase 6: Foundation LLMs & RAG',            estHours: 50, goal: 'Learn Transformer mechanics, engineer prompts for JSON schemas, and build semantic RAG pipelines.' },
  { id: 7, title: 'Phase 7: Agentic AI & Workflows',           estHours: 45, goal: 'Orchestrate multi-turn reasoning graphs using LangGraph and implement Server-Sent Token streaming.' },
  { id: 8, title: 'Phase 8: Production AI Operations',         estHours: 35, goal: 'Implement semantic caching, configure local inference pipelines, and optimize latencies/costs.' },
  { id: 9, title: 'Phase 9: Computer Science & System Design', estHours: 50, goal: 'Analyze algorithmic complexities, partition scaling nodes, and construct high-availability architectures.' },
  { id: 10, title: 'Phase 10: Capstones & Career Preparation', estHours: 25, goal: 'Formulate production-tier portfolios, prepare system checklists, and master salary negotiations.' }
];

export const CURRICULUM_DATA: EnrichedCurriculumTopic[] = [
  // --- PHASE 1 ---
  {
    id: 'python-core',
    category: 'Python & OOP',
    title: '1. Python Core & OOP',
    description: 'Master OOP design patterns, inheritance, polymorphism, encapsulation, decorators, context managers, dunder methods, and Python memory references.',
    subtopics: ['OOP', 'inheritance', 'polymorphism', 'decorators', 'context managers', 'dunder methods', 'GIL', 'memory management'],
    exactDepth: 'Understand GIL execution limits. Build modular classes using polymorphism and custom dunder methods. Implement decorators caching states or throttling runtime executions.',
    whatToSkip: 'Skip writing custom C-bindings or hacking compiler-level bytecode registry tables.',
    bestResource: {
      title: 'Fluent Python by Luciano Ramalho',
      chapters: 'Chapter 1: Python Data Model, Chapter 11: Interfaces & OOP'
    },
    bestDocs: {
      title: 'Python Official Data Model Reference',
      url: 'https://docs.python.org/3/reference/datamodel.html'
    },
    youtubeUsage: 'Corey Schafer: Python OOP Tutorial Series',
    interviewImportance: 9,
    projectRelevance: 9,
    estHours: 8,
    stopDepth: 'Stop at writing custom metaclasses.',
    commonMistakes: [
      'Using mutable default arguments (like empty lists/dicts) in constructors, causing state leaks across instances.',
      'Forgetting to release resource file handles, causing silent descriptor exhaustion under high load.'
    ],
    productionRelevance: 'Ensures robust OOP modeling and prevents memory leaks in high-throughput API processes.',
    implementationExercise: {
      title: 'Method Execution Timing Decorator',
      description: 'Write a decorator tracking method execution times and validation bounds, logging outcomes in real time.',
      codeSnippet: `import time\ndef time_execution(func):\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        result = func(*args, **kwargs)\n        print(f"{func.__name__} took {time.perf_counter() - start:.4f}s")\n        return result\n    return wrapper`
    },
    debuggingExercise: {
      title: 'The Shared Mutable List Trap',
      description: 'Fix a class where modifying an instance list mutates other instances due to an incorrectly configured default constructor argument.',
      codeSnippet: `class Account:\n    # FIX THIS: def __init__(self, txs=[]):\n    def __init__(self, txs=None):\n        self.txs = txs if txs is not None else []`
    },
    interviewQAs: [
      {
        question: 'What is the GIL? How does it affect CPU-bound vs I/O-bound multi-threaded workflows in Python?',
        answer: 'The GIL is a mutex protecting access to Python objects, preventing multiple threads from executing bytecodes at once. For CPU-bound tasks, GIL makes multi-threading slow (since it executes sequentially); use multiprocessing instead. For I/O-bound tasks, the GIL is released during system calls, allowing threads to run concurrently.',
        focusType: 'Architecture/Internals'
      }
    ],
    importanceTier: 'S',
    importanceScore: 10,
    importanceDescription: 'Critical Core. Foundational programming and OOP principles. Absolute must-know for interviews and production-tier systems.',
    alternativeDocs: { title: 'Real Python OOP Guide', url: 'https://realpython.com/python3-object-oriented-programming/' },
    alternativeVideo: { title: 'Corey Schafer OOP Series', url: 'https://www.youtube.com/watch?v=ZDa-Z5JzLYM' },
    phase: 1,
    phaseTitle: 'Phase 1: Python Backend Core'
  },
  {
    id: 'python-advanced',
    category: 'Python & OOP',
    title: '2. Advanced Async & Testing',
    description: 'Deep dive into asyncio, event loops, cooperative multitasking, non-blocking I/O, and writing unit/integration tests using pytest.',
    subtopics: ['asyncio', 'coroutines', 'event loops', 'async/await', 'unit testing', 'pytest fixtures', 'mocking', 'integration tests'],
    exactDepth: 'Write concurrent loops using asyncio.gather. Explain how event loops coordinate I/O context switching. Structure clean testing suites using pytest fixtures and mocks.',
    whatToSkip: 'Skip writing custom event loop engines or overrides.',
    bestResource: {
      title: 'Real Python Async IO Guide & Pytest Standard Manuals',
      chapters: 'Core Guides: Cooperative Multitasking and Mocking boundaries'
    },
    bestDocs: {
      title: 'Pytest Official Documentation: Fixtures and Mocking',
      url: 'https://docs.pytest.org/en/stable/'
    },
    youtubeUsage: 'ArjanCodes: Asyncio Cooperative Multitasking',
    interviewImportance: 9,
    projectRelevance: 10,
    estHours: 8,
    stopDepth: 'Stop at writing custom event loops.',
    commonMistakes: [
      'Blocking the asyncio event loop by calling synchronous time.sleep or blocking DB calls instead of using await and non-blocking drivers.',
      'Writing tests that hit real production APIs instead of mock objects, causing flakey test pipelines.'
    ],
    productionRelevance: 'Enables highly scalable microservices handling thousands of open connections on low CPU footprints.',
    implementationExercise: {
      title: 'Asynchronous Rate-Limited Queue',
      description: 'Write an asyncio task worker pool that fetches URLs concurrently while respecting rate limits.',
      codeSnippet: `import asyncio\nasync def worker(name, queue):\n    while True:\n        url = await queue.get()\n        print(f"Worker {name} fetching {url}")\n        await asyncio.sleep(0.5)\n        queue.task_done()`
    },
    debuggingExercise: {
      title: 'The Silent Blocking Event Loop',
      description: 'Identify and fix why an async FastAPI route stalls all concurrent requests when processing a large file synchronously.',
      codeSnippet: `# Replace: time.sleep(10) or sync_read()\n# Fix: await asyncio.sleep(10) or run_in_executor()`
    },
    interviewQAs: [
      {
        question: 'What is the difference between concurrency and parallelism, and how does asyncio achieve scalability?',
        answer: 'Concurrency is about dealing with lots of things at once (structure), while parallelism is about doing lots of things at once (execution). Asyncio achieves concurrency on a single thread using cooperative multitasking: when a task waits for I/O (e.g. database query, API call), it yields control back to the event loop so other tasks can execute in the meantime.',
        focusType: 'Architecture/Internals'
      }
    ],
    importanceTier: 'S',
    importanceScore: 10,
    importanceDescription: 'Critical Core. Asynchronous patterns are standard for high-performance python API layers. Critical testing habits prevent bugs.',
    alternativeDocs: { title: 'Real Python: Async IO Guide', url: 'https://realpython.com/async-io-python/' },
    alternativeVideo: { title: 'ArjanCodes: Asyncio Tutorial', url: 'https://www.youtube.com/watch?v=BI0asZuMTOY' },
    phase: 1,
    phaseTitle: 'Phase 1: Python Backend Core'
  },

  // --- PHASE 2 ---
  {
    id: 'fastapi-core',
    category: 'Core Backend & APIs',
    title: '3. FastAPI & REST API Design',
    description: 'Build web APIs using FastAPI, handle request routing, request/response Pydantic models, dependency injection, and clean architecture layout.',
    subtopics: ['FastAPI routing', 'Pydantic models', 'dependency injection', 'layered architecture', 'response schemas', 'exception handlers'],
    exactDepth: 'Write production FastAPI routes. Map nested Pydantic schemas. Master FastAPI\'s dependency injection system. Set up global exception middlewares.',
    whatToSkip: 'Skip writing custom HTTP servers or manual sockets binders.',
    bestResource: {
      title: 'FastAPI Web Development Tutorial by tiangolo',
      chapters: 'Core Chapters: Dependencies, Query Parameters, Pydantic validations'
    },
    bestDocs: {
      title: 'FastAPI Official Reference Manuals',
      url: 'https://fastapi.tiangolo.com/'
    },
    youtubeUsage: 'Amigoscode: FastAPI 101 Intensive Crash Course',
    interviewImportance: 10,
    projectRelevance: 10,
    estHours: 8,
    stopDepth: 'Stop at writing custom ASGI servers.',
    commonMistakes: [
      'Returning database ORM models directly to clients, leaking sensitive fields (like password hashes) due to missing Response Schemas.'
    ],
    productionRelevance: 'Creates robust, self-documenting REST APIs serving web clients and external integrations.',
    implementationExercise: {
      title: 'Build a Layered API with Dependencies',
      description: 'Write a FastAPI router utilizing a dependency injection function to fetch database sessions.',
      codeSnippet: `from fastapi import FastAPI, Depends\napp = FastAPI()\ndef get_db_session():\n    return "DBConnectionActive"\n@app.get("/items")\ndef read_items(db: str = Depends(get_db_session)):\n    return {"status": "success", "db": db}`
    },
    debuggingExercise: {
      title: 'The Leaky User Response Exception',
      description: 'Fix a route that crashes with a validation error when database records contain missing or null profile fields.',
      codeSnippet: `# Configure Response Model: response_model=UserResponseDTO\n# Pydantic: make optional fields Optional[str] = None`
    },
    interviewQAs: [
      {
        question: 'Why does FastAPI perform better than Django/Flask for high-concurrency workloads? What is ASGI?',
        answer: 'FastAPI is built on Starlette and Uvicorn, which run on ASGI (Asynchronous Server Gateway Interface). Unlike WSGI (which blocks one thread per request), ASGI supports async/await natively, allowing a single worker thread to handle thousands of concurrent open HTTP or WebSocket connections asynchronously.',
        focusType: 'Architecture/Internals'
      }
    ],
    importanceTier: 'S',
    importanceScore: 10,
    importanceDescription: 'Critical Core. FastAPI is the primary modern python web framework. Must-know for designing and building microservices.',
    alternativeDocs: { title: 'FastAPI Tutorial Reference', url: 'https://fastapi.tiangolo.com/tutorial/' },
    alternativeVideo: { title: 'freeCodeCamp: FastAPI Full Course', url: 'https://www.youtube.com/watch?v=0sOvCWFmrtA' },
    phase: 2,
    phaseTitle: 'Phase 2: FastAPI Web Services'
  },
  {
    id: 'backend-security',
    category: 'Core Backend & APIs',
    title: '4. API Security & Protections',
    description: 'Secure backends using JWT tokens, OAuth2 flows, CORS configurations, rate-limiting middlewares, and secure password hashing libraries.',
    subtopics: ['JWT', 'OAuth2', 'CORS policies', 'rate limiting', 'bcrypt hashing', 'HTTPS configuration', 'OWASP standards'],
    exactDepth: 'Generate and decode JWT tokens securely. Implement OAuth2 password bearer schemes in FastAPI. Restrict domains using CORS policies.',
    whatToSkip: 'Skip writing custom cryptographic algorithms (use passlib/bcrypt).',
    bestResource: {
      title: 'OWASP API Security Top 10 Reference Standard',
      chapters: 'Top Risks: Broken User Authentication, CORS policy misconfigurations'
    },
    bestDocs: {
      title: 'FastAPI Security & Credentials guides',
      url: 'https://fastapi.tiangolo.com/tutorial/security/'
    },
    youtubeUsage: 'm_coding: FastAPI Security, Secrets and Hashing',
    interviewImportance: 9,
    projectRelevance: 10,
    estHours: 6,
    stopDepth: 'Stop at writing custom cryptography standards.',
    commonMistakes: [
      'Configuring CORS policies to allow wildcard "*" origins in production, exposing database APIs to cross-site scripting vulnerabilities.',
      'Storing secrets, private keys, or passwords as raw text inside git repositories.'
    ],
    productionRelevance: 'Protects backend resources, private user data, and system infrastructure from exploit vectors.',
    implementationExercise: {
      title: 'JWT Authentication Guard',
      description: 'Write a function encoding user profiles into tokens with custom expiration times, and a security dependency decoding tokens.',
      codeSnippet: `import jwt\nimport datetime\nSECRET = "super_secret_key"\ndef make_token(user_id):\n    payload = {"user_id": user_id, "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)}\n    return jwt.encode(payload, SECRET, algorithm="HS256")`
    },
    debuggingExercise: {
      title: 'The Expired Token Crash',
      description: 'Fix a security wrapper that throws a raw 500 error instead of a clean 401 Unauthorized status when client tokens expire.',
      codeSnippet: `try:\n    jwt.decode(token, SECRET, algorithms=["HS256"])\nexcept jwt.ExpiredSignatureError:\n    raise HTTPException(status_code=401, detail="Token expired")`
    },
    interviewQAs: [
      {
        question: 'Explain how JWT-based stateless authentication works. What are the pros and cons?',
        answer: 'JWT is stateless: the server encodes user metadata and signs it with a secret key. The client stores it and sends it on every request. Pros: server doesn\'t need to query a database/session cache to verify user state, enabling easy scaling. Cons: tokens cannot be easily invalidated before expiration (without building blacklist caches), and payload size increases bandwidth.',
        focusType: 'Architecture/Internals'
      }
    ],
    importanceTier: 'A',
    importanceScore: 8,
    importanceDescription: 'Highly Important. Standard requirement for mid-to-senior software engineers to protect web APIs from abuse and exploit vectors.',
    alternativeDocs: { title: 'OWASP Security Risks Standard', url: 'https://owasp.org/www-project-top-ten/' },
    alternativeVideo: { title: 'FastAPI Security Deep Dive', url: 'https://www.youtube.com/watch?v=6h58LajsM90' },
    phase: 2,
    phaseTitle: 'Phase 2: FastAPI Web Services'
  },

  // --- PHASE 3 ---
  {
    id: 'sql-databases',
    category: 'SQL & Databases',
    title: '5. Relational Theory & SQL Mastery',
    description: 'Master relational theories, ACID guarantees, transactional isolation boundaries, GROUP BY aggregates, complex JOINS, and Common Table Expressions (CTEs).',
    subtopics: ['ACID', 'normalization', 'JOIN types', 'aggregations', 'Common Table Expressions', 'transactions', 'isolation levels'],
    exactDepth: 'Write complex SQL queries manually. Implement Inner, Left, and Full joins. Define relational tables up to 3NF. Design transaction isolation bounds.',
    whatToSkip: 'Skip writing database compiler parse engines or block allocations on physical disks.',
    bestResource: {
      title: 'Designing Data-Intensive Applications by Martin Kleppmann',
      chapters: 'Chapter 3: Storage & Retrieval, Chapter 7: Transactions'
    },
    bestDocs: {
      title: 'PostgreSQL Manual: Joins & Transaction Isolation',
      url: 'https://www.postgresql.org/docs/current/queries-tableexpr.html'
    },
    youtubeUsage: 'Hussein Nasser: Relational Databases vs NoSQL',
    interviewImportance: 10,
    projectRelevance: 8,
    estHours: 8,
    stopDepth: 'Stop at optimizing kernel page cache buffers.',
    commonMistakes: [
      'Applying Serializable isolation boundaries everywhere, causing massive rollback rates and database locking wait delays under concurrent operations.'
    ],
    productionRelevance: 'Prevents race conditions, duplicate record inserts, and slow request loops during concurrent database hits.',
    implementationExercise: {
      title: 'Recursive Org Hierarchy CTE',
      description: 'Write an SQL query traversing a nested manager-employee hierarchy using recursive Common Table Expressions.',
      codeSnippet: `WITH RECURSIVE org_tree AS (\n    SELECT id, manager_id, name FROM employees WHERE manager_id IS NULL\n    UNION ALL\n    SELECT e.id, e.manager_id, e.name FROM employees e\n    JOIN org_tree o ON e.manager_id = o.id\n)\nSELECT * FROM org_tree;`
    },
    debuggingExercise: {
      title: 'The Silent Transaction Deadlock',
      description: 'Diagnose why concurrent operations running on accounts balances fail under high load due to alternate lock order updates.',
      codeSnippet: `# Transaction A updates 1 then 2. Transaction B updates 2 then 1.\n# Fix: Enforce unified lock order across all database routines.`
    },
    interviewQAs: [
      {
        question: 'Explain ACID properties in database management systems.',
        answer: 'ACID guarantees reliability: Atomicity (all operations in transaction succeed or all fail), Consistency (database state moves only between valid states), Isolation (concurrent transactions execute independently without interference), and Durability (committed changes survive crashes).',
        focusType: 'Architecture/Internals'
      }
    ],
    importanceTier: 'S',
    importanceScore: 10,
    importanceDescription: 'Critical Core. Relational database foundations are mandatory. Essential for transactional consistency and system design.',
    alternativeDocs: { title: 'PostgreSQL Isolation Levels Manual', url: 'https://www.postgresql.org/docs/current/transaction-iso.html' },
    alternativeVideo: { title: 'Hussein Nasser: Relational vs NoSQL', url: 'https://www.youtube.com/watch?v=W2Z5_5VYU74' },
    phase: 3,
    phaseTitle: 'Phase 3: Database & Vector Layer'
  },
  {
    id: 'postgres-vector',
    category: 'SQL & Databases',
    title: '6. Postgres Tuning & pgvector',
    description: 'Tune indexes, read EXPLAIN plans, prevent SQLAlchemy ORM N+1 query bugs, configure pgvector fields, and write HNSW similarity searches.',
    subtopics: ['EXPLAIN ANALYZE', 'database indexing', 'pgvector', 'SQLAlchemy 2.0 async', 'N+1 query problem', 'connection pooling'],
    exactDepth: 'Run EXPLAIN ANALYZE on SQL scripts to detect Sequential Scans. Prevent ORM N+1 issues using selectinload/joinedload. Build HNSW indexes for vectors.',
    whatToSkip: 'Skip multi-region replication setups or master-slave routing layers.',
    bestResource: {
      title: 'PostgreSQL High Performance by Gregory Smith',
      chapters: 'Chapter 5: Indexing and EXPLAIN, Chapter 11: Connection Poolers'
    },
    bestDocs: {
      title: 'Explain Visualizer: Analyze Database Explain Plans',
      url: 'https://explain.dalibo.com/'
    },
    youtubeUsage: 'Hussein Nasser: Database Indexing Internals Deep Dive',
    interviewImportance: 9,
    projectRelevance: 9,
    estHours: 8,
    stopDepth: 'Stop at writing custom pgvector distance functions.',
    commonMistakes: [
      'Writing pgvector lookups on massive datasets without setting up proper HNSW fast indexes, crashing database performance.',
      'Allowing SQLAlchemy ORM relationships to lazy-load inside loops, causing N+1 database roundtrips.'
    ],
    productionRelevance: 'Keeps queries fast and handles vector similarity lookups efficiently directly inside PostgreSQL.',
    implementationExercise: {
      title: ' pgvector Table with HNSW Index',
      description: 'Write raw SQL initiating the pgvector extension and building a cosine distance index on 1536-dim vector arrays.',
      codeSnippet: `CREATE EXTENSION IF NOT EXISTS vector;\nCREATE TABLE docs (id serial PRIMARY KEY, embedding vector(1536));\nCREATE INDEX ON docs USING hnsw (embedding vector_cosine_ops);`
    },
    debuggingExercise: {
      title: 'ORM N+1 Loop Exhaustion',
      description: 'Refactor a SQLAlchemy async repository method fetching child orders inside a loop to execute in a single selectinload call.',
      codeSnippet: `# Fix: select(User).options(selectinload(User.orders))`
    },
    interviewQAs: [
      {
        question: 'Under SQLAlchemy, when should you choose selectinload vs joinedload?',
        answer: 'Use `joinedload` for 1-to-1 relationships, which emits a single SQL JOIN query. Avoid using `joinedload` for 1-to-many or many-to-many relationships, as it creates a Cartesian product that transmits duplicated parent columns. For collection lists, use `selectinload`, which emits exactly one secondary query with an SELECT ... WHERE parent_id IN (...) clause.',
        focusType: 'Product Focus'
      }
    ],
    importanceTier: 'S',
    importanceScore: 10,
    importanceDescription: 'Critical Core. Relational database optimization and vector databases are key to low latency in modern web and AI apps.',
    alternativeDocs: { title: 'Explain Visualizer Reference', url: 'https://explain.dalibo.com/' },
    alternativeVideo: { title: 'Hussein Nasser: Database Indexing', url: 'https://www.youtube.com/watch?v=H7Z4Y8mR-U8' },
    phase: 3,
    phaseTitle: 'Phase 3: Database & Vector Layer'
  },

  // --- PHASE 4 ---
  {
    id: 'redis-caching',
    category: 'Redis & Messaging',
    title: '7. Redis Caching & Latency Opt',
    description: 'Implement caching strategies, study memory eviction policies, prevent cache stampede/thundering herd, and set up sliding window rate limiters.',
    subtopics: ['Redis keys', 'eviction policies', 'thundering herd', 'rate limiting', 'data types', 'caching strategies'],
    exactDepth: 'Implement Redis caching with fallback logic. Set up sliding window rate limiters. Design cache invalidation patterns.',
    whatToSkip: 'Skip setting up Redis Sentinel or cluster sharding partitions.',
    bestResource: {
      title: 'Redis University: Intro to Redis Data Structures (RU101)',
      chapters: 'Core Guides: Keyspace commands, Hashes, and TTL expiry bounds'
    },
    bestDocs: {
      title: 'Redis Caching Use Case Solutions',
      url: 'https://redis.io/solutions/use-cases/caching/'
    },
    youtubeUsage: 'Hussein Nasser: Redis Cache Crash Course',
    interviewImportance: 9,
    projectRelevance: 10,
    estHours: 7,
    stopDepth: 'Stop at configuring Redis cluster consensus layers.',
    commonMistakes: [
      'Setting cache TTLs to never expire, eventually exhausting available RAM and triggering random key evictions.',
      'Caching giant raw JSON payloads without compression, inflating network latencies.'
    ],
    productionRelevance: 'Protects databases from spikes in traffic and returns repeat queries in single-digit milliseconds.',
    implementationExercise: {
      title: 'Redis Sliding Window Rate Limiter',
      description: 'Write a python decorator using Redis transaction pipelines to rate-limit client IPs.',
      codeSnippet: `import time\ndef limit_request(redis_conn, ip, max_reqs=10):\n    pipe = redis_conn.pipeline()\n    now = time.time()\n    pipe.zadd(ip, {str(now): now})\n    pipe.zremrangebyscore(ip, 0, now - 60)\n    pipe.zcard(ip)\n    _, _, count = pipe.execute()\n    return count <= max_reqs`
    },
    debuggingExercise: {
      title: 'The Cache Stampede Collapse',
      description: 'Fix a system that crashes under high concurrent queries when an expensive cache key expires.',
      codeSnippet: `# Fix: Use locking (Mutex) or background cron task to pre-warm cache before expiration.`
    },
    interviewQAs: [
      {
        question: 'What is Cache Stampede? How can you mitigate it?',
        answer: 'Cache Stampede (or thundering herd) occurs when a highly requested cache key expires, and thousands of concurrent requests read from the database at the same time to recalculate the value, overloading the database. Mitigation: use mutual exclusion locks (so only one thread refreshes the cache) or recalculate values in the background before expiry.',
        focusType: 'Architecture/Internals'
      }
    ],
    importanceTier: 'S',
    importanceScore: 10,
    importanceDescription: 'Critical Core. Caching is standard to prevent database bottlenecks. Required knowledge for scaling web architectures.',
    alternativeDocs: { title: 'Redis University Courses', url: 'https://university.redis.io/courses/ru101/' },
    alternativeVideo: { title: 'Hussein Nasser: Redis Caching', url: 'https://www.youtube.com/watch?v=OqPpX07ZAn8' },
    phase: 4,
    phaseTitle: 'Phase 4: Distributed Event Systems'
  },
  {
    id: 'celery-workers',
    category: 'Redis & Messaging',
    title: '8. Celery Workers & Async Tasks',
    description: 'Offload heavy computations to background tasks, configure Celery worker concurrency, manage job states, and coordinate canvases.',
    subtopics: ['Celery tasks', 'Redis broker', 'task retries', 'celery canvas', 'worker concurrency', 'flower dashboard'],
    exactDepth: 'Configure Celery background tasks. Set retry policies with exponential backoffs. Design workflows using Celery canvas (groups, chains).',
    whatToSkip: 'Skip writing custom Celery message serialization protocols.',
    bestResource: {
      title: 'Celery User Guide: Worker Workflows and Canvas',
      chapters: 'Main Guides: Getting started, Task retries, Canvas workflows'
    },
    bestDocs: {
      title: 'Celery Project: Official Reference and Walkthroughs',
      url: 'https://docs.celeryq.dev/en/stable/'
    },
    youtubeUsage: 'CodingWithMitch: Async Tasks in Python with Celery',
    interviewImportance: 8,
    projectRelevance: 9,
    estHours: 8,
    stopDepth: 'Stop at customizing Celery internal compiler processes.',
    commonMistakes: [
      'Failing to handle network timeouts inside background tasks, causing worker threads to lock up indefinitely.'
    ],
    productionRelevance: 'Decouples heavy calculations from request-response cycles, keeping HTTP response times under 50ms.',
    implementationExercise: {
      title: 'Task Worker with Exponential Backoff',
      description: 'Write a Celery task that processes incoming image files, retrying with exponential backoff on connection errors.',
      codeSnippet: `@celery.task(bind=True, max_retries=5)\ndef process_file(self, file_path):\n    try:\n        return run_heavy_conversion(file_path)\n    except Exception as exc:\n        raise self.retry(exc=exc, countdown=2 ** self.request.retries)`
    },
    debuggingExercise: {
      title: 'The Clogged Background Queue',
      description: 'Resolve why short notification tasks stall in a Celery queue behind heavy, hours-long analytics jobs.',
      codeSnippet: `# Fix: Configure multiple queues (e.g., default vs priority) and assign workers accordingly.`
    },
    interviewQAs: [
      {
        question: 'How does Celery route messages? What is the difference between group and chain in Celery canvas?',
        answer: 'Celery uses a message broker (like Redis or RabbitMQ) to pass messages. A group executes a list of tasks in parallel. A chain link executes a list of tasks sequentially, passing the output of one task as the input to the next task in the pipeline.',
        focusType: 'Product Focus'
      }
    ],
    importanceTier: 'A',
    importanceScore: 8,
    importanceDescription: 'Highly Important. Essential for building responsive APIs that offload heavy computations, reports, or file uploads.',
    alternativeDocs: { title: 'Celery Canvas User Guide', url: 'https://docs.celeryq.dev/en/stable/userguide/canvas.html' },
    alternativeVideo: { title: 'Decoupled Queue Architectures', url: 'https://www.youtube.com/watch?v=68QWZM_g6S0' },
    phase: 4,
    phaseTitle: 'Phase 4: Distributed Event Systems'
  },
  {
    id: 'realtime-messaging',
    category: 'Redis & Messaging',
    title: '9. Event Broker & WebSockets',
    description: 'Implement real-time pub/sub messaging channels using RabbitMQ/Redis, and manage bidirectional WebSocket connection channels.',
    subtopics: ['WebSockets', 'RabbitMQ', 'Redis Pub/Sub', 'message brokers', 'connection pools', 'event-driven architecture'],
    exactDepth: 'Build bidirectional WebSocket servers in FastAPI. Set up Pub/Sub routines. Design connection managers tracking active sockets.',
    whatToSkip: 'Skip writing custom network socket handshakes.',
    bestResource: {
      title: 'FastAPI WebSockets Protocols and RabbitMQ Tutorials',
      chapters: 'Core Chapters: Bidirectional routes, Exchanges, and Message routing'
    },
    bestDocs: {
      title: 'RabbitMQ Getting Started Tutorials',
      url: 'https://www.rabbitmq.com/getstarted.html'
    },
    youtubeUsage: 'Hussein Nasser: RabbitMQ Message Broker Crash Course',
    interviewImportance: 8,
    projectRelevance: 9,
    estHours: 7,
    stopDepth: 'Stop at hacking raw TCP socket handshakes.',
    commonMistakes: [
      'Failing to clean up closed WebSocket handles, causing memory exhaustion over thousands of connection cycles.',
      'Allowing public WebSocket endpoints without verifying auth tokens during handshake phases.'
    ],
    productionRelevance: 'Enables live chats, collaborative whiteboards, and instant dashboard updates.',
    implementationExercise: {
      title: 'FastAPI WebSocket Room Manager',
      description: 'Write a ConnectionManager class tracking active websockets and broadcasting messages in real-time.',
      codeSnippet: `from fastapi import WebSocket\nclass ConnectionManager:\n    def __init__(self):\n        self.active: list[WebSocket] = []\n    async def connect(self, ws: WebSocket):\n        await ws.accept()\n        self.active.append(ws)\n    def disconnect(self, ws: WebSocket):\n        self.active.remove(ws)\n    async def broadcast(self, msg: str):\n        for connection in self.active:\n            await connection.send_text(msg)`
    },
    debuggingExercise: {
      title: 'The Dangling WebSocket Memory Leak',
      description: 'Diagnose why a real-time messaging server crashes due to memory exhaustion after thousands of clients connect and disconnect.',
      codeSnippet: `# Fix: Ensure ws disconnect handles remove elements from active connection list in try/except blocks.`
    },
    interviewQAs: [
      {
        question: 'Contrast HTTP polling, Server-Sent Events, and WebSockets. When should you choose each?',
        answer: 'HTTP Polling hits endpoints repeatedly (costly and high latency). Server-Sent Events (SSE) provide unidirectional streaming (low latency, great for live dashboards/GPT tokens). WebSockets provide full-duplex, bidirectional persistent channels (ideal for multiplayer games, chats).',
        focusType: 'Architecture/Internals'
      }
    ],
    importanceTier: 'B',
    importanceScore: 6,
    importanceDescription: 'Secondary Focus. Useful for specialized real-time messaging or scaling active web connections horizontally.',
    alternativeDocs: { title: 'FastAPI WebSockets Guides', url: 'https://fastapi.tiangolo.com/advanced/websockets/' },
    alternativeVideo: { title: 'TechWithTim: WebSockets Tutorial', url: 'https://www.youtube.com/watch?v=XshbSshS178' },
    phase: 4,
    phaseTitle: 'Phase 4: Distributed Event Systems'
  },

  // --- PHASE 5 ---
  {
    id: 'docker-devops',
    category: 'DevOps & DevOps Basics',
    title: '10. Docker & DevOps Basics',
    description: 'Containerize multi-service applications using Docker, optimize image sizes, optimize multi-stage builds, and configure cloud deploys.',
    subtopics: ['Dockerfiles', 'Docker Compose', 'multi-stage builds', 'container networking', 'volumes', 'image size optimization', 'cloud deployments'],
    exactDepth: 'Write Dockerfiles with multi-stage builds to optimize image footprints. Build networks and volume volumes configurations inside Docker-Compose YAML.',
    whatToSkip: 'Skip Kubernetes orchestration configurations or Helm charts.',
    bestResource: {
      title: 'Docker Guides by TechWorld with Nana',
      chapters: 'Core Manuals: Multi-stage builds, Container storage volumes, and Local port exposures'
    },
    bestDocs: {
      title: 'Docker Official Get Started Guides',
      url: 'https://docs.docker.com/get-started/'
    },
    youtubeUsage: 'TechWorld with Nana: Docker Tutorial for Beginners',
    interviewImportance: 10,
    projectRelevance: 10,
    estHours: 8,
    stopDepth: 'Stop at building multi-cluster Kubernetes configs.',
    commonMistakes: [
      'Running containers as root users in production Dockerfiles, violating security principles.',
      'Copying python node_modules or virtual environments directly into Docker images, inflating size.'
    ],
    productionRelevance: 'Ensures application code runs identically across local development machines and production cloud environments.',
    implementationExercise: {
      title: 'FastAPI Multi-Stage Dockerfile',
      description: 'Write a Dockerfile that separates build-dependencies from the final running image to keep the footprint small.',
      codeSnippet: `FROM python:3.11-slim AS builder\nWORKDIR /app\nRUN pip install poetry\nCOPY . .\nRUN poetry export -f requirements.txt > reqs.txt\n\nFROM python:3.11-slim\nWORKDIR /app\nCOPY --from=builder /app/reqs.txt .\nRUN pip install --no-cache-dir -r reqs.txt\nCOPY . .\nCMD ["uvicorn", "main:app", "--host", "0.0.0.0"]`
    },
    debuggingExercise: {
      title: 'The "Host Not Found" Network Gap',
      description: 'Fix a Docker-Compose setup where the API container crashes because it fails to connect to "localhost:5432" postgres.',
      codeSnippet: `# Fix: Change DB host string from "localhost" to the postgres container service name (e.g. "db").`
    },
    interviewQAs: [
      {
        question: 'Explain the concept and advantages of Multi-stage Docker builds.',
        answer: 'Multi-stage builds use multiple FROM instructions in a single Dockerfile. You can compile artifacts or install development dependencies in intermediate builder stages, and copy only the final compiled outputs to a minimal runtime base image. This minimizes image footprint size and enhances production security.',
        focusType: 'Architecture/Internals'
      }
    ],
    importanceTier: 'S',
    importanceScore: 10,
    importanceDescription: 'Critical Core. Containerization is standard for backend systems. Absolute prerequisite for modern cloud architectures.',
    alternativeDocs: { title: 'Docker Official Reference Guide', url: 'https://docs.docker.com/get-started/' },
    alternativeVideo: { title: 'TechWorld with Nana: Docker Tutorial', url: 'https://www.youtube.com/watch?v=3c-iLsGje98' },
    phase: 5,
    phaseTitle: 'Phase 5: DevOps & Cloud Infrastructure'
  },
  {
    id: 'cloud-deploy',
    category: 'DevOps & DevOps Basics',
    title: '11. Cloud Deployments & CI/CD',
    description: 'Deploy applications on Railway/Render, manage SSL certificates, configure ingress, and build CI/CD pipelines using GitHub Actions.',
    subtopics: ['GitHub Actions', 'Railway blueprints', 'Render hosting', 'SSL certificate management', 'environment variables', 'ingress configurations'],
    exactDepth: 'Write GitHub Actions workflows that trigger on pull requests, executing linting and automated tests. Deploy applications on Railway.',
    whatToSkip: 'Skip setting up custom physical servers or bare-metal hypervisors.',
    bestResource: {
      title: 'GitHub Actions Workflows Handbook',
      chapters: 'Main Guides: Build automation, Deploying on PaaS solutions'
    },
    bestDocs: {
      title: 'Railway Official Blueprints Manual',
      url: 'https://docs.railway.app/'
    },
    youtubeUsage: 'Render: How to Deploy FastAPIs on Render Hosting',
    interviewImportance: 8,
    projectRelevance: 9,
    estHours: 6,
    stopDepth: 'Stop at setting up custom bare-metal cloud servers.',
    commonMistakes: [
      'Hardcoding API keys or credentials in GitHub workflows instead of retrieving them from secrets vaults.',
      'Allowing public staging builds without locking them behind authorization filters.'
    ],
    productionRelevance: 'Automates tests, builds, and deployments so the codebase stays deployable with every commit.',
    implementationExercise: {
      title: 'GitHub Actions CI Pipeline',
      description: 'Write a YAML workflow running on main-branch pushes that installs python libraries and executes pytest.',
      codeSnippet: `name: CI\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n    - name: Set up Python\n      uses: actions/setup-python@v4\n    - name: Run Tests\n      run: | \n        pip install pytest\n        pytest`
    },
    debuggingExercise: {
      title: 'The Failed Deploy Env Crash',
      description: 'Fix a cloud deployment that fails immediately with a DatabaseConnectionError because database variables were not defined.',
      codeSnippet: `# Fix: Add database connection URI to Railway/Render environment variables portal.`
    },
    interviewQAs: [
      {
        question: 'What is CI/CD, and why is it important in a team context?',
        answer: 'CI/CD (Continuous Integration/Continuous Deployment) automates building, testing, and deploying code. It is important because it catches integration bugs early, ensures code quality via automated pipelines, and facilitates rapid and reliable deployments to production.',
        focusType: 'Product Focus'
      }
    ],
    importanceTier: 'A',
    importanceScore: 8,
    importanceDescription: 'Highly Important. Standard requirement for mid-to-senior software engineering roles to manage deployment pipelines.',
    alternativeDocs: { title: 'Railway: Blueprints Ingress Routing', url: 'https://docs.railway.app/' },
    alternativeVideo: { title: 'Deploying FastAPIs on Render', url: 'https://www.youtube.com/watch?v=488PCO9s9P8' },
    phase: 5,
    phaseTitle: 'Phase 5: DevOps & Cloud Infrastructure'
  },

  // --- PHASE 6 ---
  {
    id: 'llm-foundations',
    category: 'Applied AI & RAG',
    title: '12. LLM Foundations & Prompts',
    description: 'Learn Transformer architectures, attention mechanisms, prompt engineering standards, structured JSON outputs, and LLM APIs.',
    subtopics: ['Transformers', 'Attention mechanism', 'tokens', 'Prompt engineering', 'structured outputs', 'Pydantic models', 'LLM APIs'],
    exactDepth: 'Explain self-attention processes. Build prompt engineering templates. Enforce structured JSON schemas using Pydantic models.',
    whatToSkip: 'Skip writing custom matrix-multiplication neural networks from scratch.',
    bestResource: {
      title: 'Jay Alammar: The Illustrated Transformer & DAIR.AI Guide',
      chapters: 'Core Guides: Self-attention matrices, Prompting templates, and JSON validation schemas'
    },
    bestDocs: {
      title: 'Google Gemini API Models Reference Guide',
      url: 'https://ai.google.dev/gemini-api/docs/models/gemini'
    },
    youtubeUsage: 'Andrej Karpathy: Intro to LLMs & Build GPT from Scratch',
    interviewImportance: 10,
    projectRelevance: 10,
    estHours: 8,
    stopDepth: 'Stop at training custom transformer models.',
    commonMistakes: [
      'Writing loose prompting guidelines, causing the LLM to output random string patterns instead of clean structured JSON schemas.'
    ],
    productionRelevance: 'Enables reliable interactions with LLM models for text classification, extractions, and summarizations.',
    implementationExercise: {
      title: 'LLM Structured Output Pipeline',
      description: 'Write a python script calling Gemini API and enforcing a strict Pydantic JSON structure.',
      codeSnippet: `from pydantic import BaseModel\nclass UserInfo(BaseModel):\n    name: str\n    age: int\n# Pass model to gemini-api to guarantee structured schemas output`
    },
    debuggingExercise: {
      title: 'The Broken JSON Parser',
      description: 'Diagnose and fix a routing pipeline that crashes because the LLM includes markdown block annotations in the output.',
      codeSnippet: `# Fix: Use JSON mode or strip markdown annotations before parsing response string.`
    },
    interviewQAs: [
      {
        question: 'How does self-attention work in Transformer models?',
        answer: 'Self-attention allows the model to look at other tokens in the input sequence to understand the context of a specific token. It computes query (Q), key (K), and value (V) matrices for each token. The attention score is calculated by taking the dot product of Q and K, dividing by the scaling factor, passing it to softmax, and multiplying the result by V.',
        focusType: 'Architecture/Internals'
      }
    ],
    importanceTier: 'S',
    importanceScore: 10,
    importanceDescription: 'Critical Core. LLMs are the foundation of modern AI engineering. Prompting and API integration are mandatory skills.',
    alternativeDocs: { title: 'Illustrated Transformer Tutorial', url: 'https://jalammar.github.io/illustrated-transformer/' },
    alternativeVideo: { title: 'Andrej Karpathy: Intro to LLMs', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' },
    phase: 6,
    phaseTitle: 'Phase 6: Foundation LLMs & RAG'
  },
  {
    id: 'vector-rag',
    category: 'Applied AI & RAG',
    title: '13. Vector Search & RAG Systems',
    description: 'Ingest documents, slice text blocks using semantic chunkers, generate embeddings, and construct RAG pipelines using pgvector or Pinecone.',
    subtopics: ['document ingestion', 'embeddings', 'semantic chunking', 'vector databases', 'Pinecone', 'pgvector', 'RAG pipeline'],
    exactDepth: 'Build vector database pipelines. Perform semantic chunking. Retrieve relevant context matching query embeddings.',
    whatToSkip: 'Skip writing custom vector distance metrics (use cosine Ops).',
    bestResource: {
      title: 'LlamaIndex: Ingestion Pipelines and Retrieval Quality',
      chapters: 'Main Guides: Document parsers, Vector index lookups, and Synthesis templates'
    },
    bestDocs: {
      title: 'Pinecone Vector Embeddings Explained Visual Guide',
      url: 'https://www.pinecone.io/learn/vector-embeddings/'
    },
    youtubeUsage: 'deeplearning.ai: Advanced RAG Architecture Techniques',
    interviewImportance: 10,
    projectRelevance: 10,
    estHours: 8,
    stopDepth: 'Stop at training custom embedding models.',
    commonMistakes: [
      'Slicing text documents at arbitrary char boundaries, breaking up sentences and destroying the retrieved context.'
    ],
    productionRelevance: 'Grounds LLM generations in real company documentation, eliminating hallucination risks.',
    implementationExercise: {
      title: 'PDF RAG Query Pipeline',
      description: 'Write a python script loading document vectors into a similarity index and querying it to retrieve context.',
      codeSnippet: `def rag_query(query_vector, vector_db, llm_client):\n    context = vector_db.search(query_vector, k=3)\n    prompt = f"Context: {context}\\nQuery: {query_vector}\\nAnswer:"\n    return llm_client.generate(prompt)`
    },
    debuggingExercise: {
      title: 'The Hallucinating RAG Pipeline',
      description: 'Diagnose why an AI assistant outputs incorrect answers even though the query is in the documents database.',
      codeSnippet: `# Fix: Audit chunk size, chunk overlap, and similarity distance thresholds to confirm context ingestion.`
    },
    interviewQAs: [
      {
        question: 'What is RAG? What are the key components of a RAG pipeline?',
        answer: 'RAG (Retrieval-Augmented Generation) optimizes LLM outputs by querying authoritative external knowledge sources before generating responses. Key components: document ingestion (parsing, chunking), embedding generation, vector database storage (indexing), query retrieval (similarity search), and generation (prompt augmentation and LLM execution).',
        focusType: 'Architecture/Internals'
      }
    ],
    importanceTier: 'S',
    importanceScore: 10,
    importanceDescription: 'Critical Core. RAG is the primary pattern for deploying LLMs on proprietary data. High demand in modern software roles.',
    alternativeDocs: { title: 'Pinecone: Embeddings Visual Guide', url: 'https://www.pinecone.io/learn/vector-embeddings/' },
    alternativeVideo: { title: 'RAG Architecture Techniques', url: 'https://www.youtube.com/watch?v=sV0mS46KPhE' },
    phase: 6,
    phaseTitle: 'Phase 6: Foundation LLMs & RAG'
  },

  // --- PHASE 7 ---
  {
    id: 'agentic-workflows',
    category: 'Applied AI & RAG',
    title: '14. AI Agents & LangGraph',
    description: 'Build multi-turn AI reasoning graphs using LangGraph, model state transitions, write custom tool boundaries, and enable human-in-the-loop triggers.',
    subtopics: ['LangGraph', 'StateGraph', 'agent nodes', 'conditional edges', 'agent state', 'human-in-the-loop', 'tool calling'],
    exactDepth: 'Construct StateGraph systems. Model state variables. Define tool nodes. Establish conditional execution loops.',
    whatToSkip: 'Skip writing custom graph database compilers or execution engines.',
    bestResource: {
      title: 'LangGraph Orchestration Manual',
      chapters: 'Main Guides: StateGraph configurations, Nodes, and Conditional routing logic'
    },
    bestDocs: {
      title: 'LangGraph: Orchestrating Complex Agent State Flows',
      url: 'https://langchain-ai.github.io/langgraph/'
    },
    youtubeUsage: 'LangChain: Building Multi-Agent Graphs Using LangGraph',
    interviewImportance: 8,
    projectRelevance: 10,
    estHours: 8,
    stopDepth: 'Stop at modifying LangGraph compilation runtime internals.',
    commonMistakes: [
      'Failing to specify loop-counters, allowing agents to cycle infinitely between nodes on ambiguous queries.',
      'Allowing state mutations without mutex locking in high-concurrency loops.'
    ],
    productionRelevance: 'Enables complex customer support, autonomous coding, and data extraction workflows.',
    implementationExercise: {
      title: 'LangGraph Support Router',
      description: 'Write a StateGraph router directing customer queries to either billing or technical support nodes based on intent.',
      codeSnippet: `from langgraph.graph import StateGraph, END\nclass State(dict):\n    pass\nbuilder = StateGraph(State)\nbuilder.add_node("tech", lambda s: {"answer": "Tech support active"})\n# Add conditional edges routing queries accordingly`
    },
    debuggingExercise: {
      title: 'The Infinite Agent Loop',
      description: 'Fix an agent that gets stuck in an infinite tool-calling loop on generic queries because the routing node fails to detect exit criteria.',
      codeSnippet: `# Fix: Add a maximum step count tracker to state variables and trigger forced exit at step >= 5.`
    },
    interviewQAs: [
      {
        question: 'Contrast simple chain routing with Agentic State Graph workflows. When should you choose each?',
        answer: 'Simple chain routing passes data sequentially from one LLM/step to the next without feedback loops. Agentic State Graphs (like LangGraph) allow cycles and conditional edges, enabling the model to make dynamic decisions, invoke tools, review outputs, and loop back if goals are not met.',
        focusType: 'Product Focus'
      }
    ],
    importanceTier: 'A',
    importanceScore: 8,
    importanceDescription: 'Highly Important. Multi-agent systems and LangGraph are the modern standard for orchestrating complex LLM pipelines.',
    alternativeDocs: { title: 'LangGraph State Graphs Manual', url: 'https://langchain-ai.github.io/langgraph/' },
    alternativeVideo: { title: 'LangGraph Multi-Agent Tutorials', url: 'https://www.youtube.com/watch?v=P_XqR9GPrfU' },
    phase: 7,
    phaseTitle: 'Phase 7: Agentic AI & Workflows'
  },
  {
    id: 'ai-streaming',
    category: 'Applied AI & RAG',
    title: '15. Token Streaming & SSE',
    description: 'Implement low-latency token streaming in LLM completions using Server-Sent Events (SSE) and asynchronous generator wrappers.',
    subtopics: ['Server-Sent Events', 'FastAPI StreamingResponse', 'EventSource API', 'async generators', 'low-latency web sockets'],
    exactDepth: 'Write asynchronous generator functions yielding text chunks. Return StreamingResponse in FastAPI. Connect Javascript clients.',
    whatToSkip: 'Skip writing custom byte-level TCP streaming drivers.',
    bestResource: {
      title: 'MDN Web Docs: Server-Sent Events (SSE) Client Specifications',
      chapters: 'Main Reference: EventSource APIs and Client subscription models'
    },
    bestDocs: {
      title: 'FastAPI StreamingResponse Reference Manuals',
      url: 'https://fastapi.tiangolo.com/advanced/custom-response/#streamingresponse'
    },
    youtubeUsage: 'FastAPI Dev: Streaming Tokens with SSE and React Clients',
    interviewImportance: 8,
    projectRelevance: 9,
    estHours: 6,
    stopDepth: 'Stop at writing custom client-side SSE parsers.',
    commonMistakes: [
      'Accumulating tokens in a list and returning the whole string instead of yielding them chunk-by-chunk, destroying the streaming benefit.'
    ],
    productionRelevance: 'Decreases Time-To-First-Token (TTFT) metrics from seconds to milliseconds, boosting perceived responsiveness.',
    implementationExercise: {
      title: 'FastAPI Async Token Streamer',
      description: 'Write a route that returns an async generator streaming mock tokens to web clients.',
      codeSnippet: `from fastapi import FastAPI\nfrom fastapi.responses import StreamingResponse\nimport asyncio\napp = FastAPI()\nasync def stream_tokens():\n    for token in ["Hello", " ", "world", "!"]:\n        yield f"data: {token}\\n\\n"\n        await asyncio.sleep(0.1)\n@app.get("/stream")\ndef get_stream():\n    return StreamingResponse(stream_tokens(), media_type="text/event-stream")`
    },
    debuggingExercise: {
      title: 'The Silent Buffering Stream',
      description: 'Diagnose and fix why a streaming response buffers and returns all tokens at once instead of printing them incrementally.',
      codeSnippet: `# Fix: Ensure no reverse proxy (like Nginx) buffers chunked responses. Set X-Accel-Buffering headers.`
    },
    interviewQAs: [
      {
        question: 'Explain how Server-Sent Events (SSE) work compared to standard HTTP requests.',
        answer: 'Standard HTTP requests follow a request-response cycle: the client sends a request and the server responds with a complete payload. SSE establishes a persistent, unidirectional HTTP connection using `text/event-stream` headers, allowing the server to stream chunks of data to the client continuously.',
        focusType: 'Architecture/Internals'
      }
    ],
    importanceTier: 'B',
    importanceScore: 6,
    importanceDescription: 'Secondary Focus. Crucial for polishing user interfaces to display generative AI text results progressively.',
    alternativeDocs: { title: 'MDN: Server-Sent Events Client Spec', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events' },
    alternativeVideo: { title: 'Streaming Tokens with SSE', url: 'https://www.youtube.com/watch?v=0b7C6mXpI0o' },
    phase: 7,
    phaseTitle: 'Phase 7: Agentic AI & Workflows'
  },

  // --- PHASE 8 ---
  {
    id: 'ai-observability',
    category: 'Applied AI & RAG',
    title: '16. AI Eval & Observability',
    description: 'Instrument LLM tracking trace trees, calculate token billing costs, audit pipelines, and evaluate output accuracy using Ragas/Langfuse.',
    subtopics: ['Langfuse', 'tracing', 'LLM telemetry', 'Ragas evaluation', 'cost calculation', 'groundness metrics'],
    exactDepth: 'Add trace telemetry to agent graphs. Track steps, token logs, and cost models. Compute RAG grounding metrics using Ragas.',
    whatToSkip: 'Skip writing custom evaluation mathematics metrics engines.',
    bestResource: {
      title: 'Langfuse Tracing and Ragas Concepts Handbooks',
      chapters: 'Core Setup: Traces, Spans, Generation metrics, and Groundness formulas'
    },
    bestDocs: {
      title: 'Langfuse Tracing Documentation',
      url: 'https://docs.langfuse.com/tracing'
    },
    youtubeUsage: 'AI Engineering: Evaluating LLM applications & Prompt sets',
    interviewImportance: 8,
    projectRelevance: 8,
    estHours: 6,
    stopDepth: 'Stop at building custom visualization frameworks.',
    commonMistakes: [
      'Deploying LLM apps in production without tracing, leaving system administrators blind to API errors or latency spikes.'
    ],
    productionRelevance: 'Audits user queries, evaluates safety guidelines, and identifies latency bottlenecks.',
    implementationExercise: {
      title: 'Ragas Groundness Evaluation',
      description: 'Write a script evaluating a retrieved context block against generated text to compute a grounding score.',
      codeSnippet: `from ragas import evaluate\n# Configure Ragas dataset with question, context, answer\n# Run evaluation matching grounding index and output logs`
    },
    debuggingExercise: {
      title: 'The Silent Telemetry Overhead',
      description: 'Debug why adding tracing hooks multiplies route latencies, and configure them asynchronously.',
      codeSnippet: `# Fix: Use async telemetry callbacks (background threads) to prevent blocking main API loops.`
    },
    interviewQAs: [
      {
        question: 'What is telemetry tracing in LLM pipelines? What metrics are key?',
        answer: 'Telemetry tracing captures execution logs for each node. Key metrics: Time-To-First-Token (TTFT), total latency, input/output token counts, dollar cost per call, and retrieval evaluation metrics (faithfulness, answer relevance).',
        focusType: 'Product Focus'
      }
    ],
    importanceTier: 'B',
    importanceScore: 6,
    importanceDescription: 'Secondary Focus. Important for monitoring production workloads, auditing user sessions, and debugging failures.',
    alternativeDocs: { title: 'Langfuse Tracing reference guide', url: 'https://docs.langfuse.com/tracing' },
    alternativeVideo: { title: 'Adding Telemetry to AI Workflows', url: 'https://www.youtube.com/watch?v=tY8G_8f3_U0' },
    phase: 8,
    phaseTitle: 'Phase 8: Production AI Operations'
  },
  {
    id: 'ai-caching-serving',
    category: 'Applied AI & RAG',
    title: '17. Semantic Cache & Serving',
    description: 'Implement Redis semantic caching, manage fallback model hierarchies, and serve models with high throughput using vLLM.',
    subtopics: ['vLLM', 'PagedAttention', 'Redis semantic cache', 'model routing', 'fallback models', 'inference batching'],
    exactDepth: 'Configure Redis vector similarity lookups to serve semantic caches. Route queries to cheaper models first. Explain vLLM PagedAttention.',
    whatToSkip: 'Skip writing custom CUDA kernels or overriding GPU memory registry blocks.',
    bestResource: {
      title: 'vLLM: PagedAttention, Serving Speeds, and Memory Optimization Guides',
      chapters: 'Core Setup: vLLM servers, Continuous batching, and Semantic Caching keyspaces'
    },
    bestDocs: {
      title: 'Redis Caching Solutions & Use Cases',
      url: 'https://redis.io/solutions/use-cases/caching/'
    },
    youtubeUsage: 'Tech with Jan: Setting up vLLM servers & continuous batching',
    interviewImportance: 9,
    projectRelevance: 9,
    estHours: 7,
    stopDepth: 'Stop at writing custom PagedAttention kernel overrides.',
    commonMistakes: [
      'Routing basic classification calls to expensive models like GPT-4, multiplying operational costs 50x unnecessarily.'
    ],
    productionRelevance: 'Keeps response latencies low and minimizes API consumption costs.',
    implementationExercise: {
      title: 'Redis Semantic Cache Setup',
      description: 'Write a python wrapper querying a Redis vector index and returning cached responses for similar queries.',
      codeSnippet: `# Search Redis index with cosine similarity. Return cached text if similarity > 0.95.`
    },
    debuggingExercise: {
      title: 'The GPU OOM serving crash',
      description: 'Resolve a vLLM serving crash caused by setting the KV cache memory allocation block too high.',
      codeSnippet: `# Fix: Reduce gpu_memory_utilization parameter inside vLLM engine initialization configurations.`
    },
    interviewQAs: [
      {
        question: 'Explain how vLLM optimizes memory usage and throughput compared to standard Hugging Face pipeline serving.',
        answer: 'vLLM introduces PagedAttention, which partitions the KV cache (keys/values for previous tokens) into virtual blocks. This eliminates fragmentation and allocates memory dynamically, boosting throughput up to 24x.',
        focusType: 'Architecture/Internals'
      }
    ],
    importanceTier: 'A',
    importanceScore: 8,
    importanceDescription: 'Highly Important. Standard requirement in senior AI engineering roles to build cost-efficient and high-throughput systems.',
    alternativeDocs: { title: 'vLLM: Getting Started Quickstart', url: 'https://docs.vllm.ai/en/latest/getting_started/quickstart.html' },
    alternativeVideo: { title: ' vLLM servers continuous batching', url: 'https://www.youtube.com/watch?v=5-680XP-6mY' },
    phase: 8,
    phaseTitle: 'Phase 8: Production AI Operations'
  },
  {
    id: 'fine-tuning-cuda',
    category: 'Applied AI & RAG',
    title: '18. PEFT Fine-Tuning & CUDA',
    description: 'Fine-tune models using LoRA/QLoRA adapters, configure quantization parameters, and profile CUDA execution boundaries.',
    subtopics: ['LoRA', 'QLoRA', 'PEFT', 'quantization', 'CUDA profiling', 'memory bandwidths', 'dataset tuning'],
    exactDepth: 'Configure LoRA adapter parameters (rank r, alpha). Load models in 4-bit/8-bit quantization. Profile GPU memory limits.',
    whatToSkip: 'Skip writing custom CUDA matrix-multiplication kernels.',
    bestResource: {
      title: 'Hugging Face PEFT: Parameter Efficient Fine-Tuning Guides',
      chapters: 'Main Guides: LoRA, QLoRA configurations, and CUDA Profiling notes'
    },
    bestDocs: {
      title: 'PyTorch CUDA Memory Profiling Guidelines',
      url: 'https://pytorch.org/docs/stable/notes/cuda.html'
    },
    youtubeUsage: 'GPUMode: Understanding CUDA Programming & Tensors',
    interviewImportance: 7,
    projectRelevance: 7,
    estHours: 7,
    stopDepth: 'Stop at writing custom C++ CUDA kernels.',
    commonMistakes: [
      'Fine-tuning models on uncurated datasets, causing the base reasoning capabilities of the model to crash.'
    ],
    productionRelevance: 'Allows hosting task-specific models that perform on par with frontier models on targeted inputs.',
    implementationExercise: {
      title: 'Configure LoRA PEFT adapters',
      description: 'Write a python script loading Llama-3, applying LoRA adapters with rank=8, and setting active layers.',
      codeSnippet: `from peft import LoraConfig, get_peft_model\nconfig = LoraConfig(r=8, lora_alpha=32, target_modules=["q_proj", "v_proj"], lora_dropout=0.05)\n# Apply configuration to model`
    },
    debuggingExercise: {
      title: 'The Adapter Saving Drift',
      description: 'Diagnose why a fine-tuned model loads without the trained weights due to incorrectly saved adapter headers.',
      codeSnippet: `# Fix: Ensure model.save_pretrained() is called, saving adapter config JSON files.`
    },
    interviewQAs: [
      {
        question: 'Explain the mathematical intuition behind LoRA.',
        answer: 'During fine-tuning, weight updates are represented as a delta matrix ΔW. LoRA factorizes ΔW into two low-rank matrices A and B (ΔW = B x A), where B is d x r and A is r x k. Since rank r is much smaller than original dimensions, this slashes parameter counts by 99%.',
        focusType: 'Architecture/Internals'
      }
    ],
    importanceTier: 'C',
    importanceScore: 4,
    importanceDescription: 'Elective Concept. Nice-to-have but not critical. Explore it for deep mastery, but skip if you are short on time.',
    alternativeDocs: { title: 'Hugging Face PEFT Documentation', url: 'https://huggingface.co/docs/peft/en/index' },
    alternativeVideo: { title: 'Andrej Karpathy: LoRA Adapter loops', url: 'https://www.youtube.com/watch?v=ldGgWbSVyvA' },
    phase: 8,
    phaseTitle: 'Phase 8: Production AI Operations'
  },
  {
    id: 'multimodal-ai',
    category: 'Applied AI & RAG',
    title: '19. Multimodal AI & Optical Parsing',
    description: 'Process visuals and text, invoke Vision APIs, handle OCR document boundaries, and design multimodal embedding indices.',
    subtopics: ['multimodal inputs', 'Vision APIs', 'OCR document parsing', 'invoice extraction', 'multimodal retrieval'],
    exactDepth: 'Execute Gemini multimodal API calls. Structure visual document extractions. Build image search databases.',
    whatToSkip: 'Skip training custom Vision Transformers (ViTs) from scratch.',
    bestResource: {
      title: 'Hugging Face: Document AI, Vision-Language Models, and Ingestion setups',
      chapters: 'Main Guides: Multimodal prompt constructs, OCR extractors, and Invoice parsers'
    },
    bestDocs: {
      title: 'Google Gemini Multimodal API Guide',
      url: 'https://ai.google.dev/gemini-api/docs/models/gemini'
    },
    youtubeUsage: 'AI Developer: Implementing Multimodal RAG with Vision tools',
    interviewImportance: 8,
    projectRelevance: 9,
    estHours: 7,
    stopDepth: 'Stop at training custom ViT encoders.',
    commonMistakes: [
      'Sending oversized raw image payloads over API connections, causing timeouts. Compress images before transmission.'
    ],
    productionRelevance: 'Automates document scraping, invoice parsing, and charts interpretation.',
    implementationExercise: {
      title: 'Scrape PDF Invoice Layouts',
      description: 'Write a python script loading invoice images, calling Gemini multimodal endpoints, and enforcing Pydantic schemas.',
      codeSnippet: `# Pass invoice bytes and prompt to gemini-model, requesting output in JSON format.`
    },
    debuggingExercise: {
      title: 'The Low Contrast Image Fail',
      description: 'Fix a pipeline that fails to parse receipts because of poor image lighting. Implement preprocessing steps.',
      codeSnippet: `# Fix: Apply image thresholding (contrast, grayscale conversion) before passing inputs to API.`
    },
    interviewQAs: [
      {
        question: 'How do VLMs (Vision-Language Models) process image inputs alongside text?',
        answer: 'VLMs divide images into fixed-size grids called patches. Each patch is projected into a linear embedding space matching the text tokens. The transformer treats these image embeddings identically to text token embeddings.',
        focusType: 'Architecture/Internals'
      }
    ],
    importanceTier: 'B',
    importanceScore: 6,
    importanceDescription: 'Secondary Focus. Useful for parsing physical invoices, visual layouts, and charts in automated pipelines.',
    alternativeDocs: { title: 'Google Gemini API specifications', url: 'https://ai.google.dev/gemini-api/docs/models/gemini' },
    alternativeVideo: { title: 'Implementing Multimodal RAG', url: 'https://www.youtube.com/watch?v=yP61fPhLAbY' },
    phase: 8,
    phaseTitle: 'Phase 8: Production AI Operations'
  },

  // --- PHASE 9 & 10 ---
  {
    id: 'cs-career',
    category: 'System Design & DSA',
    title: '20. System Design & Career Mastery',
    description: 'Master Big O analysis, distributed system design architectures, high-availability setups, portfolios, and salary negotiation.',
    subtopics: ['Big O notation', 'Distributed Systems', 'caching databases', 'load balancing', 'horizontal scaling', 'negotiation', 'portfolios'],
    exactDepth: 'Analyze algorithm complexities. Design distributed systems (load balancers, message brokers, caching, sharding). Review Patrick McKenzie\'s salary negotiation strategies.',
    whatToSkip: 'Skip memorizing specific hardware driver models.',
    bestResource: {
      title: 'System Design Primer by Donne Martin & Patrick McKenzie negotiation guide',
      chapters: 'Core Guides: Distributed scaling, Load balancers, and Negotiating salary packages'
    },
    bestDocs: {
      title: 'System Design Primer Reference Handbook',
      url: 'https://github.com/donnemartin/system-design-primer'
    },
    youtubeUsage: 'Chris Voss: Never Split the Difference (Book Summary)',
    interviewImportance: 10,
    projectRelevance: 10,
    estHours: 8,
    stopDepth: 'Stop at configuring bare-metal hardware networking boards.',
    commonMistakes: [
      'Designing complex, distributed microservices architectures for early-stage MVPs, inflating operational overheads.'
    ],
    productionRelevance: 'Guides major architectural choices, scaling strategies, and senior-level interviews.',
    implementationExercise: {
      title: 'Architect a Scalable API Gateway',
      description: 'Draw a complete architecture design flow for a high-traffic app detailing load balancers, caches, and database sharding.',
      codeSnippet: `# Design: Client -> DNS -> Load Balancer -> API Gateway -> Redis Cache -> SQL DB`
    },
    debuggingExercise: {
      title: 'The Database Write Bottleneck',
      description: 'Analyze why a system slows down on high writes, and recommend Master-Slave replication or write-buffering queues.',
      codeSnippet: `# Fix: Offload writes to RabbitMQ queue and update database asynchronously.`
    },
    interviewQAs: [
      {
        question: 'Explain load balancing and state the differences between Layer 4 and Layer 7 routing.',
        answer: 'Load balancers distribute traffic across servers. Layer 4 operates at the transport level (TCP/UDP), routing traffic based on IP and port. Layer 7 operates at the application level (HTTP), routing traffic based on headers, cookies, or URL paths, which enables smarter routing.',
        focusType: 'Architecture/Internals'
      }
    ],
    importanceTier: 'S',
    importanceScore: 10,
    importanceDescription: 'Critical Core. System design and algorithmic foundations are mandatory. Negotiation is key for career growth.',
    alternativeDocs: { title: 'Patrick McKenzie Salary Negotiation', url: 'https://www.kalzumeus.com/2012/01/23/salary-negotiation/' },
    alternativeVideo: { title: 'Chris Voss: Never Split the Difference', url: 'https://www.youtube.com/watch?v=guZa7mQV1l0' },
    phase: 9,
    phaseTitle: 'Phase 9: Computer Science & System Design'
  }
];

export const MASTER_PROJECTS: ProjectDef[] = [
  {
    id: 'crud-api',
    title: 'Project 1: Production Backend API',
    difficulty: 'Easy',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    architecture: 'Clean architectural layout: dynamic dependency injection, domain models, database repositories, custom Exception handlers. Learns robust production-grade API architecture.',
    apis: [
      'POST /users - Create active account validation',
      'POST /login - stateless token generations',
      'GET /items - dynamic query pagination filters',
      'PUT /items/{id} - atomic record modification operations'
    ],
    scalingConcerns: 'Database locking bottlenecks: implement connection pooling, configure proper query limits, indexing tables carefully.',
    observability: 'Integrated standard logging to trace endpoints load metrics and write error telemetry directly.',
    redisUsage: 'None in MVP context; pure relational persistence structure.',
    asyncUsage: 'Using asynchronous session models (async/await) completely to prevent connection blockages.',
    productionConcerns: 'Cross-Origin Resource Sharing (CORS) configurations, input boundaries sanitization, database connections timeouts.',
    checkpointChecklist: [
      'Write structural Pydantic input schemas with strict regex validation',
      'Configure unified error response middlewares capturing unhandled core exceptions',
      'Deploy localized docker containers containing both web structures and isolated DB databases'
    ]
  },
  {
    id: 'url-shortener',
    title: 'Project 2: Scalable URL Shortener',
    difficulty: 'Easy',
    stack: ['Python', 'FastAPI', 'Redis', 'Docker'],
    architecture: 'High-speed redirection engine. Focuses on in-memory operations, rapid lookups, custom analytics writing, and route protection.',
    apis: [
      'POST /shorten - Generate short slug with custom TTL or customized key aliases',
      'GET /{slug} - Performance-centric redirection lookup yielding analytics counters',
      'GET /analytics/{slug} - Retrieve detailed hit maps, time intervals, and visitor metadata'
    ],
    scalingConcerns: 'Massive simultaneous reads: utilize Redis caching as primary read-path, offload analytics updates to lazy writers.',
    observability: 'Sliding window click tracking. Monitor caching hit - ratio to verify optimization quality.',
    redisUsage: 'In-memory key estimation & data types. String storage for direct redirects, Hashes for analytics, and rate-limiting counters.',
    asyncUsage: 'Non-blocking Redis await operations for single-digit millisecond latency response.',
    productionConcerns: 'High-concurrency cache eviction policies, thundering herds mitigation, and securing redirect pathways from infinite loops.',
    checkpointChecklist: [
      'Implement a slide rate-limiter in Redis to prevent API abuse',
      'Build a lightweight dashboard displaying URL performance maps & click metrics',
      'Dockerize the API and Redis setup to run under local container networking'
    ]
  },
  {
    id: 'async-processor',
    title: 'Project 3: Async File Processor',
    difficulty: 'Medium',
    stack: ['Python', 'FastAPI', 'Redis', 'Celery', 'Docker'],
    architecture: 'Distributed queue architecture. FastAPI acts as gateway, passing heavy jobs to Redis broker, which hands them to a decoupled Celery task engine.',
    apis: [
      'POST /tasks/process - dispatch a new job task, returns task_id',
      'GET /tasks/status/{id} - poll task completion status state and telemetry outputs'
    ],
    scalingConcerns: 'Queue clogging up. Implement separate queues for fast vs slow tasks. Scale tasks consumer pods independently.',
    observability: 'Flower dashboard to monitor queue health. Active task tracing metrics.',
    redisUsage: 'Acts as highly speed messaging broker queue and storage backing.',
    asyncUsage: 'Complete non-blocking client interaction. HTTP calls return in 10ms; long-lasting calculations run on backends.',
    productionConcerns: 'Task durability: ensure workers retry crashed files processes. Clean up system files paths safely.',
    checkpointChecklist: [
      'Launch background Celery worker container within Docker Compose setup',
      'Set retry policies on worker tasks protecting against unstable API targets failures',
      'Integrate simple polling loop on API endpoint to report granular state'
    ]
  },
  {
    id: 'websocket-chat',
    title: 'Project 4: Real-Time Chat Backend',
    difficulty: 'Medium',
    stack: ['FastAPI', 'Redis', 'Docker-Compose'],
    architecture: 'Subscribing routing engine. Handles incoming persistent websocket pipelines, using Redis Pub/Sub mechanisms to mirror chat streams horizontally.',
    apis: [
      '/ws/chat/{room_id} - persistent duplex pipeline'
    ],
    scalingConcerns: 'Memory leaks on dangling handles. Max connection bottlenecks: keep state metadata in memory low.',
    observability: 'Connection lifetime telemetry tracking socket closures.',
    redisUsage: 'Redis Pub/Sub coordinates multiple running backend nodes to synchronize chat rooms globally.',
    asyncUsage: 'Asyncio loops coordinate reading and writing on sockets simultaneously.',
    productionConcerns: 'Websocket handshaking validation, token checking over connection requests, standard connection heartbeats.',
    checkpointChecklist: [
      'Implement keepalive ping loops to close inactive connections',
      'Write Pub/Sub listeners executing in structural asyncio tasks loops',
      'Set security middleware checking authentication query params'
    ]
  },
  {
    id: 'rag-system',
    title: 'Project 5: Semantical RAG System',
    difficulty: 'Hard',
    stack: ['FastAPI', 'PostgreSQL', 'pgvector', 'Google GenAI SDK'],
    architecture: 'Vector ingestion pipeline. Ingests PDFs, chunks structurally, saves similarity indexes inside pgvector, and injects context into Gemini prompt loops.',
    apis: [
      'POST /documents/ingest - process incoming documents',
      'POST /chat/query - query pipeline, returns streams of context-grounded AI text'
    ],
    scalingConcerns: 'Embedding throughput limitations. HNSW vector index tuning. Prompt token size allocations.',
    observability: 'Token calculation logging. Grounding metrics measuring retrieved relevance distances.',
    redisUsage: 'Semantic caching of similarity queries, resolving repeating questions instantly without hitting LLM API gateways.',
    asyncUsage: 'Async streams yield tokens one by one (Server-Sent-Events) for real-time generative layouts.',
    productionConcerns: 'Prompt Injection attacks, document format safety, caching expirations, system constraints enforcement.',
    checkpointChecklist: [
      'Build semantic chunker slicing paragraphs at real boundary intersections',
      'Expose search routes matching queries with pgvector Cosine Metrics',
      'Implement conversational model interface tracking histories dynamically'
    ]
  },
  {
    id: 'ai-workflow-engine',
    title: 'Project 6: AI Workflow System',
    difficulty: 'Hard',
    stack: ['FastAPI', 'PostgreSQL', 'LangGraph', 'Google GenAI API', 'Langfuse'],
    architecture: 'Functional graph state machine. Models multi-turn AI reasoning loops with strict validation schemas and automated fallbacks.',
    apis: [
      'POST /workflow/run - execute structured AI task, returns state nodes logs',
      'GET /workflow/traces - audit execution footprints and trace outputs logs'
    ],
    scalingConcerns: 'Concurrent state mutations: serialize graph paths. Manage API Rate Limits on multiple API hubs.',
    observability: 'Telemetry tracking latency, steps completions ratios, and dollar spend statistics on API loops.',
    redisUsage: 'Session state variables cache, locking concurrent operations.',
    asyncUsage: 'Runs concurrent LLM queries dynamically via async gathers in appropriate graph nodes.',
    productionConcerns: 'Fail-safe state recovery if an intermediate step crashes. Auto-retries with exponential backoffs.',
    checkpointChecklist: [
      'Write complete Pydantic model configurations verifying models structure parameters',
      'Configure error recovery nodes dynamically shifting tasks to fallback APIs',
      'Deploy full-stack gateway dashboard to audit execution histories'
    ]
  }
];
