export const SUBTOPIC_DOCS: Record<string, string> = {
  // Python Fundamentals
  'Variables & memory references': 'https://docs.python.org/3/reference/datamodel.html#objects-values-and-types',
  'Mutable vs immutable types': 'https://docs.python.org/3/reference/datamodel.html#objects-values-and-types',
  'List comprehensions & speed analysis': 'https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions',
  'Generators & yield memory footprint': 'https://docs.python.org/3/howto/functional.html#generators',
  'Execution flow & call stack': 'https://docs.python.org/3/library/inspect.html',
  'Typing, dataclasses & enums': 'https://docs.python.org/3/library/dataclasses.html',

  // Python OOP
  'Classes & dynamic attribute binding': 'https://docs.python.org/3/tutorial/classes.html',
  'Encapsulation using prefix modifiers': 'https://docs.python.org/3/tutorial/classes.html#private-variables',
  'Composition over Inheritance': 'https://docs.python.org/3/tutorial/classes.html',
  'Magic methods (__init__, __repr__, __enter__, __exit__)': 'https://docs.python.org/3/reference/datamodel.html#specialnames',
  'SOLID principles for backends': 'https://docs.python.org/3/tutorial/classes.html',

  // Async/Await
  'Async/await syntax & coroutines': 'https://docs.python.org/3/library/asyncio-task.html',
  'The Single-Threaded Event Loop': 'https://docs.python.org/3/library/asyncio-eventloop.html',
  'CPU-bound vs I/O-bound bottlenecks': 'https://docs.python.org/3/library/asyncio-subprocess.html',
  'asyncio.gather vs asyncio.as_completed': 'https://docs.python.org/3/library/asyncio-task.html#asyncio.gather',
  'Async Context Managers & Generators': 'https://docs.python.org/3/reference/datamodel.html#asynchronous-context-managers',
  'The Global Interpreter Lock (GIL)': 'https://docs.python.org/3/glossary.html#term-global-interpreter-lock',

  // HTTP, REST & Core API Standards
  'RESTful architecture constraints': 'https://developer.mozilla.org/en-US/docs/Glossary/REST',
  'The complete HTTP Request/Response lifecycle': 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview',
  'HTTP methods, statuses & header design': 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods',
  'JWT Authentication & Signature Verification': 'https://jwt.io/introduction',
  'Middlewares, Request validation & rate limiting': 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429',

  // FastAPI
  'Pydantic v2 schemas & validations': 'https://docs.pydantic.dev/latest/',
  'Dependency Injection & lifecycle scopes': 'https://fastapi.tiangolo.com/tutorial/dependencies/',
  'Advanced middlewares & routing layout': 'https://fastapi.tiangolo.com/tutorial/middleware/',
  'Async background task processing': 'https://fastapi.tiangolo.com/tutorial/background-tasks/',
  'Server-Sent Events & streaming APIs': 'https://fastapi.tiangolo.com/advanced/custom-response/#streamingresponse',

  // Relational DB
  'ACID transactional properties': 'https://postgresql.org/docs/current/tutorial-transactions.html',
  'Indexes: B-Trees & hash layouts': 'https://postgresql.org/docs/current/indexes-types.html',
  'Explain Analyze & execution planning': 'https://postgresql.org/docs/current/using-explain.html',
  'Complex joins, aggregates & CTEs': 'https://postgresql.org/docs/current/queries-with.html',
  'Locking, deadlocks & isolation levels': 'https://postgresql.org/docs/current/transaction-iso.html',

  // SQL & Alchemy
  'SQLAlchemy 2.0 async session patterns': 'https://docs.sqlalchemy.org/en/20/orm/extensions/asyncio.html',
  'N+1 query loading: Joined vs Selectin mechanics': 'https://docs.sqlalchemy.org/en/20/orm/queryguide/relationships.html',
  'Database connection pooling & timeouts': 'https://docs.sqlalchemy.org/en/20/core/pooling.html',
  'Alembic schema migrations systems': 'https://alembic.sqlalchemy.org/en/latest/',
  'pgvector storage & similarity queries': 'https://github.com/pgvector/pgvector',

  // Redis & Messaging
  'In-memory key estimation & data types': 'https://redis.io/docs/manual/data-types/',
  'Cache eviction policies & stale policies': 'https://redis.io/docs/reference/eviction/',
  'Redis Distributed Lock systems (Redlock)': 'https://redis.io/docs/manual/patterns/distributed-locks/',
  'Asynchronous queues & Celery task workers': 'https://docs.celeryq.dev/en/stable/',
  'Semantic Caching for AI endpoints': 'https://redis.io/blog/what-is-semantic-caching/',

  // Docker
  'Linux process management & permissions': 'https://docs.docker.com/get-started/',
  'Writable layers vs host volumes': 'https://docs.docker.com/storage/volumes/',
  'Multi-stage secure Dockerfiles': 'https://docs.docker.com/build/building/multi-stage/',
  'Docker Compose networks & volumes': 'https://docs.docker.com/compose/networking/',
  'GitHub Actions testing & lint pipelines': 'https://docs.github.com/en/actions',

  // Applied AI
  'Tokenization & API limits calculation': 'https://github.com/google-gemini/generative-ai-python',
  'Chunking algorithms (Fixed vs Semantic)': 'https://docs.llamaindex.ai/en/stable/module_guides/loading/documents_and_nodes/usage_documents/',
  'Embeddings dimensions and Similarity metrics': 'https://ai.google.dev/gemini-api/docs/embeddings',
  'Retrieval mechanisms & top-k rerankers': 'https://docs.llamaindex.ai/en/stable/',
  'Context injection & Citation groundings': 'https://ai.google.dev/gemini-api/docs/',

  // AI Workflows
  'Structured responses via JSON Schemas': 'https://ai.google.dev/gemini-api/docs/structured-outputs',
  'Model routing & fallback strategies': 'https://ai.google.dev/gemini-api/docs/',
  'Workflow State Management & retries': 'https://docs.llamaindex.ai/en/stable/module_guides/workflows/',
  'Structured tracing: Latency & Cost monitoring': 'https://opentelemetry.io/',
  'OpenTelemetry & observability patterns': 'https://opentelemetry.io/docs/',

  // DSA
  'Complexity Analysis & Big O metrics': 'https://en.wikipedia.org/wiki/Big_O_notation',
  'O(1) lookup: hashmaps in practice': 'https://docs.python.org/3/faq/design.html#how-are-dictionaries-implemented-in-python',
  'Sliding Window & Two Pointer problems': 'https://leetcode.com/',
  'Binary Search & Tree representations': 'https://docs.python.org/3/library/bisect.html',
  'Breadth First Search & Depth First Search': 'https://docs.python.org/3/tutorial/datastructures.html'
};
