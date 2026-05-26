export interface InterviewQuestion {
  id: number;
  section: number;
  tier1: boolean;
  q: string;
  ans: string;
}

export const QUESTIONS_DB: InterviewQuestion[] = [
  {
    id: 1,
    section: 1,
    tier1: true,
    q: "Difference between list and tuple?",
    ans: `<table>
<tr><td><strong>List</strong></td><td><strong>Tuple</strong></td></tr>
<tr><td>Mutable</td><td>Immutable</td></tr>
<tr><td>Higher memory usage</td><td>Lower memory usage</td></tr>
<tr><td>Slower</td><td>Faster</td></tr>
<tr><td>Dynamic modification</td><td>Fixed structure</td></tr>
</table>
<br>
<strong>Use:</strong>
<ul>
<li>list ➔ changing collections</li>
<li>tuple ➔ fixed records/configuration</li>
</ul>
<strong>Important:</strong><br>
Tuples are hashable if contents are immutable, so they can be dictionary keys.`
  },
  {
    id: 2,
    section: 1,
    tier1: true,
    q: "Mutable vs immutable objects?",
    ans: `<strong>Mutable:</strong>
<ul>
<li>can change after creation</li>
<li>examples: list, dict, set</li>
</ul>
<strong>Immutable:</strong>
<ul>
<li>cannot change</li>
<li>examples: tuple, str, int</li>
</ul>
<strong>Important production issue:</strong><br>
Mutable default arguments cause bugs.<br>
<strong>Bad:</strong>
<pre>def f(x=[]):
    x.append(1)</pre>`
  },
  {
    id: 3,
    section: 1,
    tier1: false,
    q: "What is shallow copy vs deep copy?",
    ans: `<strong>Shallow copy:</strong>
<ul>
<li>copies outer container only</li>
<li>nested objects are shared</li>
</ul>
<strong>Deep copy:</strong>
<ul>
<li>recursively copies everything</li>
</ul>
<strong>Example:</strong>
<pre>import copy
a = [[1]]
b = copy.copy(a)
c = copy.deepcopy(a)</pre>
<strong>Production relevance:</strong><br>
Shared references create hidden mutation bugs.`
  },
  {
    id: 4,
    section: 1,
    tier1: false,
    q: "What are Python iterators?",
    ans: `<strong>Iterator:</strong><br>
Object with:
<ul>
<li>__iter__()</li>
<li>__next__()</li>
</ul>
Allows sequential lazy traversal.<br>
Used internally in:
<ul>
<li>loops</li>
<li>generators</li>
<li>streams</li>
</ul>`
  },
  {
    id: 5,
    section: 1,
    tier1: true,
    q: "What are generators?",
    ans: `Functions using yield.<br>
They:
<ul>
<li>pause execution</li>
<li>preserve state</li>
<li>produce values lazily</li>
</ul>
Useful for:
<ul>
<li>large datasets</li>
<li>streaming</li>
<li>memory efficiency</li>
</ul>`
  },
  {
    id: 6,
    section: 1,
    tier1: false,
    q: "Generator vs list comprehension?",
    ans: `<strong>List comprehension:</strong>
<ul>
<li>eager evaluation</li>
<li>stores entire result</li>
</ul>
<strong>Generator:</strong>
<ul>
<li>lazy evaluation</li>
<li>computes on demand</li>
</ul>
Large-scale systems prefer generators for memory efficiency.`
  },
  {
    id: 7,
    section: 1,
    tier1: false,
    q: "What problem do generators solve?",
    ans: `They avoid loading everything into memory.<br>
Critical for:
<ul>
<li>log processing</li>
<li>PDF ingestion</li>
<li>streaming AI outputs</li>
<li>large ETL pipelines</li>
</ul>`
  },
  {
    id: 8,
    section: 1,
    tier1: false,
    q: "What is yield?",
    ans: `<strong>yield:</strong>
<ul>
<li>pauses function execution</li>
<li>returns value</li>
<li>preserves internal state</li>
</ul>
Function becomes generator.`
  },
  {
    id: 9,
    section: 1,
    tier1: true,
    q: "What are decorators?",
    ans: `Functions wrapping other functions.<br>
Used for:
<ul>
<li>logging</li>
<li>retries</li>
<li>auth</li>
<li>caching</li>
<li>metrics</li>
</ul>
<strong>Example:</strong>
<pre>@retry
def api_call():
    pass</pre>`
  },
  {
    id: 10,
    section: 1,
    tier1: false,
    q: "Why use decorators?",
    ans: `They separate cross-cutting concerns from business logic.<br>
Without decorators:
<ul>
<li>duplicated code</li>
<li>poor maintainability</li>
</ul>`
  },
  {
    id: 11,
    section: 1,
    tier1: false,
    q: "What are closures?",
    ans: `Function remembering variables from outer scope.<br>
<strong>Example:</strong>
<pre>def outer(x):
    def inner():
        return x
    return inner</pre>
Used internally by decorators.`
  },
  {
    id: 12,
    section: 1,
    tier1: false,
    q: "LEGB scope rule?",
    ans: `Python variable lookup order:
<ol>
<li>Local</li>
<li>Enclosing</li>
<li>Global</li>
<li>Built-in</li>
</ol>
Interviewers ask this often.`
  },
  {
    id: 13,
    section: 1,
    tier1: false,
    q: "What are context managers?",
    ans: `Objects managing setup/cleanup automatically.<br>
Usually implemented using:
<ul>
<li>__enter__</li>
<li>__exit__</li>
</ul>
<strong>Example:</strong>
<pre>with open("a.txt") as f:</pre>`
  },
  {
    id: 14,
    section: 1,
    tier1: false,
    q: "Why use with statements?",
    ans: `Guarantees cleanup.<br>
Prevents:
<ul>
<li>file leaks</li>
<li>connection leaks</li>
<li>resource leaks</li>
</ul>
Critical in production systems.`
  },
  {
    id: 15,
    section: 1,
    tier1: false,
    q: "What is duck typing?",
    ans: `“If it behaves correctly, type doesn’t matter.”<br>
Python focuses on behavior over strict interfaces.`
  },
  {
    id: 16,
    section: 1,
    tier1: false,
    q: "What is monkey patching?",
    ans: `Modifying classes/modules at runtime.<br>
<strong>Dangerous:</strong>
<ul>
<li>unpredictable behavior</li>
<li>debugging complexity</li>
</ul>
Rarely good in production.`
  },
  {
    id: 17,
    section: 1,
    tier1: false,
    q: "Difference between is and ==?",
    ans: `<strong>==</strong>
<ul>
<li>value equality</li>
</ul>
<strong>is</strong>
<ul>
<li>identity equality (same object reference)</li>
</ul>
Critical bug source.`
  },
  {
    id: 18,
    section: 1,
    tier1: false,
    q: "What are dataclasses?",
    ans: `Auto-generated classes for structured data.<br>
Provide:
<ul>
<li>init</li>
<li>repr</li>
<li>equality</li>
</ul>
Cleaner than manual boilerplate.`
  },
  {
    id: 19,
    section: 1,
    tier1: false,
    q: "Why use type hints?",
    ans: `<strong>Benefits:</strong>
<ul>
<li>readability</li>
<li>static analysis</li>
<li>IDE support</li>
<li>maintainability</li>
</ul>
Large systems rely heavily on typing.`
  },
  {
    id: 20,
    section: 1,
    tier1: false,
    q: "What are Python enums?",
    ans: `Named constant collections.<br>
Improves:
<ul>
<li>readability</li>
<li>validation</li>
<li>correctness</li>
</ul>`
  },
  {
    id: 21,
    section: 1,
    tier1: false,
    q: "Difference between module and package?",
    ans: `<strong>Module:</strong>
<ul>
<li>single Python file</li>
</ul>
<strong>Package:</strong>
<ul>
<li>directory of modules</li>
</ul>`
  },
  {
    id: 22,
    section: 1,
    tier1: false,
    q: "What happens during Python imports?",
    ans: `Python:
<ol>
<li>checks cache</li>
<li>searches paths</li>
<li>compiles if needed</li>
<li>executes module</li>
</ol>
Import side effects are important production concern.`
  },
  {
    id: 23,
    section: 1,
    tier1: false,
    q: "What is __init__.py?",
    ans: `Marks directory as Python package.<br>
Also used for package initialization logic.`
  },
  {
    id: 24,
    section: 1,
    tier1: false,
    q: "Explain Python memory management.",
    ans: `Mainly:
<ul>
<li>reference counting</li>
<li>garbage collector for cycles</li>
</ul>
Memory leaks still possible with references/caches.`
  },
  {
    id: 25,
    section: 1,
    tier1: false,
    q: "What is reference counting?",
    ans: `Each object tracks references.<br>
When count reaches zero:
<ul>
<li>memory is automatically released</li>
</ul>`
  },
  {
    id: 26,
    section: 1,
    tier1: false,
    q: "What is garbage collection?",
    ans: `Handles cyclic references.<br>
Python GC supplements reference counting.`
  },
  {
    id: 27,
    section: 1,
    tier1: false,
    q: "What are Python dunder methods?",
    ans: `Special methods:
<ul>
<li>__init__</li>
<li>__str__</li>
<li>__len__</li>
</ul>
Enable operator overloading and object behavior customization.`
  },
  {
    id: 28,
    section: 1,
    tier1: false,
    q: "What is polymorphism in Python?",
    ans: `Different objects responding to same interface.<br>
<strong>Example:</strong>
<pre>obj.save()</pre>
without caring about the concrete object type.`
  },
  {
    id: 29,
    section: 1,
    tier1: false,
    q: "Composition vs inheritance?",
    ans: `Composition is preferred.<br>
Why?
<strong>Inheritance:</strong>
<ul>
<li>tight coupling</li>
<li>fragile hierarchies</li>
</ul>
<strong>Composition:</strong>
<ul>
<li>modular</li>
<li>flexible</li>
</ul>
Modern backend systems heavily prefer composition.`
  },
  {
    id: 30,
    section: 1,
    tier1: false,
    q: "Explain SOLID principles briefly.",
    ans: `<ul>
<li><strong>S</strong> ➔ single responsibility</li>
<li><strong>O</strong> ➔ open/closed</li>
<li><strong>L</strong> ➔ Liskov substitution</li>
<li><strong>I</strong> ➔ interface segregation</li>
<li><strong>D</strong> ➔ dependency inversion</li>
</ul>
<strong>Purpose:</strong> Maintainable scalable codebases.`
  },
  {
    id: 31,
    section: 1,
    tier1: true,
    q: "Concurrency vs parallelism?",
    ans: `<strong>Concurrency:</strong>
<ul>
<li>multiple tasks progressing (interleaved)</li>
</ul>
<strong>Parallelism:</strong>
<ul>
<li>tasks literally executing simultaneously on multiple cores</li>
</ul>
Async systems use concurrency mostly.`
  },
  {
    id: 32,
    section: 1,
    tier1: true,
    q: "Threading vs multiprocessing?",
    ans: `<strong>Threads:</strong>
<ul>
<li>shared memory</li>
<li>GIL limitations</li>
</ul>
<strong>Multiprocessing:</strong>
<ul>
<li>separate processes</li>
<li>true parallel CPU execution</li>
</ul>`
  },
  {
    id: 33,
    section: 1,
    tier1: true,
    q: "CPU-bound vs I/O-bound tasks?",
    ans: `<strong>CPU-bound:</strong>
<ul>
<li>computation heavy</li>
</ul>
<strong>I/O-bound:</strong>
<ul>
<li>waiting on network/disk/API</li>
</ul>
AI systems are mostly I/O-bound.`
  },
  {
    id: 34,
    section: 1,
    tier1: false,
    q: "What is asyncio?",
    ans: `Python async framework using cooperative multitasking.<br>
Optimized for I/O-heavy systems.`
  },
  {
    id: 35,
    section: 1,
    tier1: true,
    q: "What is an event loop?",
    ans: `Core async scheduler.<br>
It:
<ul>
<li>tracks tasks</li>
<li>resumes paused coroutines</li>
<li>manages async execution</li>
</ul>`
  },
  {
    id: 36,
    section: 1,
    tier1: false,
    q: "What is a coroutine?",
    ans: `Suspendable function.<br>
Defined using:
<pre>async def</pre>`
  },
  {
    id: 37,
    section: 1,
    tier1: true,
    q: "What happens when await is called?",
    ans: `Coroutine pauses.<br>
Control returns to event loop.<br>
Other tasks execute meanwhile.`
  },
  {
    id: 38,
    section: 1,
    tier1: false,
    q: "Why async improves API throughput?",
    ans: `Requests spend most time waiting:
<ul>
<li>DB</li>
<li>network</li>
<li>APIs</li>
</ul>
Async avoids blocking execution threads during waiting periods.`
  },
  {
    id: 39,
    section: 1,
    tier1: false,
    q: "When async does NOT help?",
    ans: `CPU-heavy workloads:
<ul>
<li>ML training</li>
<li>image processing</li>
<li>large computation</li>
</ul>
Need multiprocessing/GPU instead.`
  },
  {
    id: 40,
    section: 1,
    tier1: true,
    q: "What blocks the event loop?",
    ans: `Blocking operations:
<ul>
<li>time.sleep()</li>
<li>sync DB calls</li>
<li>CPU-heavy work</li>
</ul>
Causes latency spikes.`
  },
  {
    id: 41,
    section: 1,
    tier1: false,
    q: "How do async APIs fail?",
    ans: `Common failures:
<ul>
<li>blocking calls</li>
<li>memory leaks</li>
<li>too many concurrent tasks</li>
<li>timeout mismanagement</li>
</ul>`
  },
  {
    id: 42,
    section: 1,
    tier1: false,
    q: "What are race conditions?",
    ans: `Multiple tasks modifying shared state unpredictably.<br>
Dangerous in:
<ul>
<li>caches</li>
<li>counters</li>
<li>DB updates</li>
</ul>`
  },
  {
    id: 43,
    section: 1,
    tier1: false,
    q: "What are deadlocks?",
    ans: `Processes/tasks waiting on each other forever.<br>
Usually caused by improper lock ordering.`
  },
  {
    id: 44,
    section: 1,
    tier1: false,
    q: "What is backpressure?",
    ans: `System overload causing producer faster than consumer.<br>
Without handling:
<ul>
<li>memory explosion</li>
<li>queue growth</li>
<li>crashes</li>
</ul>`
  },
  {
    id: 45,
    section: 1,
    tier1: false,
    q: "Why streaming matters?",
    ans: `Reduces perceived latency.<br>
Critical for:
<ul>
<li>chat systems</li>
<li>AI outputs</li>
<li>realtime UX</li>
</ul>`
  },
  {
    id: 46,
    section: 1,
    tier1: false,
    q: "What are async tasks?",
    ans: `Independent coroutine executions scheduled concurrently.`
  },
  {
    id: 47,
    section: 1,
    tier1: false,
    q: "asyncio.gather() vs sequential execution?",
    ans: `<strong>Sequential:</strong>
<ul>
<li>one-by-one</li>
</ul>
<strong>Gather:</strong>
<ul>
<li>concurrent execution</li>
</ul>
Massively reduces waiting time.`
  },
  {
    id: 48,
    section: 1,
    tier1: false,
    q: "How would you debug async bottlenecks?",
    ans: `Check:
<ul>
<li>blocking sync calls</li>
<li>queue buildup</li>
<li>slow DB queries</li>
<li>excessive concurrency</li>
<li>event loop delays</li>
</ul>
Use:
<ul>
<li>tracing</li>
<li>profiler</li>
<li>structured logs</li>
</ul>`
  },
  {
    id: 50,
    section: 1,
    tier1: true,
    q: "Why do AI systems heavily depend on async?",
    ans: `AI systems constantly wait on:
<ul>
<li>LLM APIs</li>
<li>vector DBs</li>
<li>retrieval</li>
<li>OCR</li>
<li>embeddings</li>
</ul>
Without async:
<ul>
<li>throughput collapses</li>
<li>latency increases heavily</li>
</ul>`
  },
  {
    id: 49,
    section: 1,
    tier1: true,
    q: "How do retries interact with async systems?",
    ans: `Retries increase concurrency load.<br>
Without limits:
<ul>
<li>retry storms</li>
<li>cascading failures</li>
</ul>
Need:
<ul>
<li>backoff</li>
<li>rate limiting</li>
<li>circuit breakers</li>
</ul>`
  },
  {
    id: 51,
    section: 2,
    tier1: true,
    q: "Explain HTTP request lifecycle.",
    ans: `<strong>Flow:</strong>
<ol>
<li>Client sends request</li>
<li>DNS resolution</li>
<li>TCP/TLS connection</li>
<li>Request reaches server</li>
<li>Middleware processing</li>
<li>Route handler execution</li>
<li>DB/API calls</li>
<li>Response serialization</li>
<li>Response returned</li>
</ol>
<strong>Production bottlenecks:</strong>
<ul>
<li>DB latency</li>
<li>blocking middleware</li>
<li>network delays</li>
<li>serialization overhead</li>
</ul>`
  },
  {
    id: 52,
    section: 2,
    tier1: false,
    q: "REST vs WebSockets?",
    ans: `<table>
<tr><td><strong>REST</strong></td><td><strong>WebSockets</strong></td></tr>
<tr><td>Request-response</td><td>Persistent connection</td></tr>
<tr><td>Stateless</td><td>Stateful</td></tr>
<tr><td>Good for CRUD</td><td>Good for realtime</td></tr>
<tr><td>Simpler scaling</td><td>Harder scaling</td></tr>
</table>
<br>
<strong>Use WebSockets for:</strong>
<ul>
<li>chat</li>
<li>realtime AI streaming</li>
<li>collaborative apps</li>
</ul>`
  },
  {
    id: 53,
    section: 2,
    tier1: false,
    q: "HTTP vs HTTPS?",
    ans: `HTTPS = HTTP + TLS encryption.<br>
<strong>Benefits:</strong>
<ul>
<li>encrypted traffic</li>
<li>integrity</li>
<li>authentication</li>
</ul>
Without HTTPS:
<ul>
<li>credentials exposed</li>
<li>MITM attacks possible</li>
</ul>
Mandatory in production.`
  },
  {
    id: 54,
    section: 2,
    tier1: false,
    q: "Difference between PUT and PATCH?",
    ans: `<strong>PUT:</strong>
<ul>
<li>replaces full resource</li>
</ul>
<strong>PATCH:</strong>
<ul>
<li>partial update</li>
</ul>
<strong>Example:</strong>
<pre>PATCH /user
{
  "name": "John"
`
  },
  {
    id: 55,
    section: 2,
    tier1: false,
    q: "What are status codes?",
    ans: `<strong>Categories:</strong>
<ul>
<li>2xx ➔ success</li>
<li>3xx ➔ redirects</li>
<li>4xx ➔ client errors</li>
<li>5xx ➔ server errors</li>
</ul>
Critical production signal.`
  },
  {
    id: 56,
    section: 2,
    tier1: false,
    q: "What are middleware layers?",
    ans: `Middleware intercepts requests/responses.<br>
<strong>Common uses:</strong>
<ul>
<li>auth</li>
<li>logging</li>
<li>rate limiting</li>
<li>tracing</li>
<li>CORS</li>
</ul>
Runs before/after route logic.`
  },
  {
    id: 57,
    section: 2,
    tier1: false,
    q: "What is serialization?",
    ans: `Converting objects into transferable formats.<br>
Usually:
<ul>
<li>JSON</li>
</ul>
Needed because raw programming objects cannot travel over HTTP.`
  },
  {
    id: 58,
    section: 2,
    tier1: true,
    q: "Authentication vs authorization?",
    ans: `<strong>Authentication:</strong>
<ul>
<li>who are you? (identifying credentials)</li>
</ul>
<strong>Authorization:</strong>
<ul>
<li>what can you access? (verifying permissions)</li>
</ul>
People confuse these constantly.`
  },
  {
    id: 59,
    section: 2,
    tier1: true,
    q: "What is JWT?",
    ans: `JSON Web Token.<br>
Contains:
<ul>
<li>payload</li>
<li>signature</li>
<li>metadata</li>
</ul>
Used for stateless authentication.`
  },
  {
    id: 60,
    section: 2,
    tier1: false,
    q: "JWT advantages/disadvantages?",
    ans: `<strong>Advantages:</strong>
<ul>
<li>stateless</li>
<li>scalable</li>
<li>portable</li>
</ul>
<strong>Disadvantages:</strong>
<ul>
<li>hard revocation</li>
<li>token leakage risk</li>
<li>oversized payload issues</li>
</ul>`
  },
  {
    id: 61,
    section: 2,
    tier1: false,
    q: "Stateless vs stateful APIs?",
    ans: `<strong>Stateless:</strong>
<ul>
<li>server stores no session records</li>
</ul>
<strong>Stateful:</strong>
<ul>
<li>server tracks session state in memory/database</li>
</ul>
Modern APIs usually prefer stateless design.`
  },
  {
    id: 62,
    section: 2,
    tier1: false,
    q: "What is rate limiting?",
    ans: `Restricting request frequency.<br>
Prevents:
<ul>
<li>abuse</li>
<li>overload</li>
<li>DDoS amplification</li>
</ul>
Usually implemented using Redis counters.`
  },
  {
    id: 63,
    section: 2,
    tier1: false,
    q: "How would you implement pagination?",
    ans: `Two common approaches:
<ul>
<li>offset pagination</li>
<li>cursor pagination</li>
</ul>
Used to avoid huge responses.`
  },
  {
    id: 64,
    section: 2,
    tier1: false,
    q: "Offset vs cursor pagination?",
    ans: `<strong>Offset:</strong>
<ul>
<li>simpler</li>
<li>slower at scale</li>
</ul>
<strong>Cursor:</strong>
<ul>
<li>scalable</li>
<li>stable ordering</li>
<li>better performance</li>
</ul>
Production systems prefer cursor pagination.`
  },
  {
    id: 65,
    section: 2,
    tier1: false,
    q: "Why validation matters?",
    ans: `Prevents:
<ul>
<li>malformed data</li>
<li>crashes</li>
<li>injection attacks</li>
<li>corrupted DB state</li>
</ul>
Validation is reliability engineering.`
  },
  {
    id: 66,
    section: 2,
    tier1: false,
    q: "How would you secure APIs?",
    ans: `<strong>Core measures:</strong>
<ul>
<li>HTTPS</li>
<li>JWT/auth</li>
<li>rate limiting</li>
<li>validation</li>
<li>input sanitization</li>
<li>least privilege</li>
<li>secrets management</li>
</ul>`
  },
  {
    id: 67,
    section: 2,
    tier1: true,
    q: "Explain dependency injection.",
    ans: `Dependencies supplied externally instead of created internally.<br>
<strong>Benefits:</strong>
<ul>
<li>testability</li>
<li>modularity</li>
<li>loose coupling</li>
</ul>
FastAPI heavily uses DI.`
  },
  {
    id: 68,
    section: 2,
    tier1: false,
    q: "FastAPI sync vs async routes?",
    ans: `<strong>Sync:</strong>
<pre>def route():</pre>
<strong>Async:</strong>
<pre>async def route():</pre>
Async routes improve throughput for I/O-heavy operations.`
  },
  {
    id: 69,
    section: 2,
    tier1: false,
    q: "Why Pydantic matters?",
    ans: `Provides:
<ul>
<li>validation</li>
<li>parsing</li>
<li>serialization</li>
<li>typing integration</li>
</ul>
Prevents invalid request data entering system.`
  },
  {
    id: 70,
    section: 2,
    tier1: false,
    q: "What are background tasks?",
    ans: `Tasks executed outside request lifecycle.<br>
<strong>Examples:</strong>
<ul>
<li>email sending</li>
<li>logging</li>
<li>notifications</li>
</ul>
Prevents blocking HTTP responses.`
  },
  {
    id: 71,
    section: 2,
    tier1: false,
    q: "Explain SQL JOINs.",
    ans: `JOIN combines rows from multiple tables.<br>
Core relational database operation.`
  },
  {
    id: 72,
    section: 2,
    tier1: false,
    q: "INNER vs LEFT JOIN?",
    ans: `<strong>INNER:</strong>
<ul>
<li>only matching rows</li>
</ul>
<strong>LEFT:</strong>
<ul>
<li>all left rows + matches</li>
</ul>
Critical for analytics queries.`
  },
  {
    id: 73,
    section: 2,
    tier1: true,
    q: "What are indexes?",
    ans: `Special data structures improving lookup speed.<br>
<strong>Tradeoff:</strong>
<ul>
<li>faster reads</li>
<li>slower writes</li>
<li>extra storage</li>
</ul>`
  },
  {
    id: 74,
    section: 2,
    tier1: false,
    q: "Why indexes improve speed?",
    ans: `Avoid full table scans.<br>
Usually implemented using:
<ul>
<li>B-trees</li>
</ul>
Massive performance difference.`
  },
  {
    id: 75,
    section: 2,
    tier1: false,
    q: "Index tradeoffs?",
    ans: `<strong>Benefits:</strong>
<ul>
<li>faster queries</li>
</ul>
<strong>Costs:</strong>
<ul>
<li>slower inserts/updates</li>
<li>storage overhead</li>
<li>maintenance complexity</li>
</ul>
Too many indexes hurt performance.`
  },
  {
    id: 76,
    section: 2,
    tier1: false,
    q: "What is normalization?",
    ans: `Structuring DB to reduce duplication.<br>
<strong>Benefits:</strong>
<ul>
<li>consistency</li>
<li>integrity</li>
</ul>
<strong>Tradeoff:</strong>
<ul>
<li>more JOIN complexity</li>
</ul>`
  },
  {
    id: 77,
    section: 2,
    tier1: false,
    q: "What are foreign keys?",
    ans: `Constraints enforcing table relationships.<br>
Prevent orphaned or broken data references.`
  },
  {
    id: 78,
    section: 2,
    tier1: true,
    q: "What is a transaction?",
    ans: `Group of operations treated atomically.<br>
Either:
<ul>
<li>all succeed</li>
<li>all rollback</li>
</ul>
Critical for consistency.`
  },
  {
    id: 79,
    section: 2,
    tier1: true,
    q: "Explain ACID.",
    ans: `<ul>
<li><strong>A</strong>tomicity (all or nothing)</li>
<li><strong>C</strong>onsistency (valid state)</li>
<li><strong>I</strong>solation (independent runs)</li>
<li><strong>D</strong>urability (persisted on disk)</li>
</ul>
Foundation of relational DB reliability.`
  },
  {
    id: 80,
    section: 2,
    tier1: true,
    q: "What is transaction isolation?",
    ans: `Controls visibility of changes between concurrent transactions.<br>
<strong>Higher isolation:</strong>
<ul>
<li>safer data read states</li>
<li>slower execution speeds</li>
</ul>
Tradeoff between correctness and performance.`
  },
  {
    id: 81,
    section: 2,
    tier1: false,
    q: "What causes DB bottlenecks?",
    ans: `Common causes:
<ul>
<li>missing indexes</li>
<li>N+1 queries</li>
<li>poor schema</li>
<li>large table scans</li>
<li>locking contention</li>
</ul>`
  },
  {
    id: 82,
    section: 2,
    tier1: true,
    q: "What is N+1 query problem?",
    ans: `One query triggers many additional queries.<br>
Destroys database latency.<br>
Common ORM issue (e.g. lazy loading relations).`
  },
  {
    id: 83,
    section: 2,
    tier1: true,
    q: "What is EXPLAIN ANALYZE?",
    ans: `Shows:
<ul>
<li>query execution plan</li>
<li>timings</li>
<li>scan strategies</li>
</ul>
Used for query profiling and optimization.`
  },
  {
    id: 84,
    section: 2,
    tier1: false,
    q: "Clustered vs non-clustered indexes?",
    ans: `<strong>Clustered:</strong>
<ul>
<li>data physically ordered on disk</li>
</ul>
<strong>Non-clustered:</strong>
<ul>
<li>separate lookup structure pointing to data rows</li>
</ul>
PostgreSQL behaves differently from SQL Server here (Postgres uses heap storage).`
  },
  {
    id: 85,
    section: 2,
    tier1: true,
    q: "What is query optimization?",
    ans: `Improving query performance using:
<ul>
<li>indexes</li>
<li>schema design</li>
<li>query rewriting</li>
</ul>
Major production skill.`
  },
  {
    id: 86,
    section: 2,
    tier1: false,
    q: "Why locking exists?",
    ans: `Prevents concurrent data corruption.<br>
Without locking:
<ul>
<li>inconsistent state</li>
<li>race conditions</li>
</ul>`
  },
  {
    id: 87,
    section: 2,
    tier1: false,
    q: "Row-level vs table-level locks?",
    ans: `<strong>Row-level:</strong>
<ul>
<li>granular</li>
<li>highly scalable</li>
</ul>
<strong>Table-level:</strong>
<ul>
<li>blocks whole table</li>
</ul>
Modern systems prefer row-level locking.`
  },
  {
    id: 88,
    section: 2,
    tier1: false,
    q: "What are deadlocks in DBs?",
    ans: `Transactions waiting on each other's locks forever.<br>
DB engine automatically detects deadlocks and kills one transaction.`
  },
  {
    id: 89,
    section: 2,
    tier1: false,
    q: "Why caching reduces DB load?",
    ans: `Repeated reads served from memory instead of DB.<br>
<strong>Benefits:</strong>
<ul>
<li>lower latency</li>
<li>reduced DB CPU pressure</li>
</ul>`
  },
  {
    id: 90,
    section: 2,
    tier1: false,
    q: "SQL vs NoSQL?",
    ans: `<strong>SQL:</strong>
<ul>
<li>relational</li>
<li>ACID transactional</li>
<li>structured schemas</li>
</ul>
<strong>NoSQL:</strong>
<ul>
<li>flexible schema</li>
<li>easy horizontal scaling</li>
</ul>
Most AI/backend systems still heavily use SQL.`
  },
  {
    id: 91,
    section: 2,
    tier1: true,
    q: "Why Redis is fast?",
    ans: `In-memory storage. Avoids disk latency.<br>
Also uses efficient data structures and single-threaded non-blocking event loops.`
  },
  {
    id: 92,
    section: 2,
    tier1: false,
    q: "Redis vs PostgreSQL?",
    ans: `<table>
<tr><td><strong>Redis</strong></td><td><strong>PostgreSQL</strong></td></tr>
<tr><td>In-memory</td><td>Disk-based</td></tr>
<tr><td>Fast cache</td><td>Persistent DB</td></tr>
<tr><td>Key-value</td><td>Relational</td></tr>
<tr><td>Temporary data</td><td>Durable data</td></tr>
</table>`
  },
  {
    id: 93,
    section: 2,
    tier1: false,
    q: "What is TTL?",
    ans: `Time-to-live expiration.<br>
Automatically removes stale cache entries to free memory.`
  },
  {
    id: 94,
    section: 2,
    tier1: false,
    q: "What is Redis Pub/Sub?",
    ans: `Messaging system:
<ul>
<li>publishers send messages to channels</li>
<li>active subscribers receive them instantly</li>
</ul>
Used for:
<ul>
<li>realtime notifications</li>
<li>chat presence</li>
<li>event networks</li>
</ul>`
  },
  {
    id: 95,
    section: 2,
    tier1: false,
    q: "What are Redis queues?",
    ans: `FIFO task storage using Redis lists/streams.<br>
Common for background jobs.`
  },
  {
    id: 96,
    section: 2,
    tier1: true,
    q: "Why caching matters?",
    ans: `Reduces:
<ul>
<li>latency</li>
<li>DB load</li>
<li>API cost</li>
</ul>
Critical in AI systems due to expensive LLM inferences.`
  },
  {
    id: 97,
    section: 2,
    tier1: false,
    q: "Cache invalidation problems?",
    ans: `Hardest issue: Keeping cache synchronized with the source of truth.<br>
Stale data causes client inconsistencies.`
  },
  {
    id: 98,
    section: 2,
    tier1: true,
    q: "What is Docker?",
    ans: `Containerization platform packaging:
<ul>
<li>code</li>
<li>dependencies</li>
<li>runtime</li>
</ul>
Ensures environment consistency across servers.`
  },
  {
    id: 99,
    section: 2,
    tier1: false,
    q: "Container vs VM?",
    ans: `<table>
<tr><td><strong>Container</strong></td><td><strong>VM</strong></td></tr>
<tr><td>Shared OS kernel</td><td>Full guest OS</td></tr>
<tr><td>Lightweight</td><td>Heavy</td></tr>
<tr><td>Faster startup</td><td>Slower</td></tr>
<tr><td>Lower isolation</td><td>Higher isolation</td></tr>
</table>`
  },
  {
    id: 100,
    section: 2,
    tier1: false,
    q: "What is a Docker image?",
    ans: `Immutable blueprint for containers.<br>
Contains:
<ul>
<li>filesystem</li>
<li>dependencies</li>
<li>runtime config layers</li>
</ul>`
  },
  {
    id: 101,
    section: 2,
    tier1: false,
    q: "What is Dockerfile?",
    ans: `Instructions for building Docker images.<br>
Defines:
<ul>
<li>base OS</li>
<li>dependencies</li>
<li>commands & port configurations</li>
</ul>`
  },
  {
    id: 102,
    section: 2,
    tier1: false,
    q: "Docker layers?",
    ans: `Each Dockerfile step creates a cache layer.<br>
<strong>Benefits:</strong>
<ul>
<li>caching</li>
<li>reuse</li>
<li>faster image rebuilds</li>
</ul>`
  },
  {
    id: 103,
    section: 2,
    tier1: false,
    q: "What is docker-compose?",
    ans: `Tool managing multi-container applications.<br>
Useful for local setups combining:
<ul>
<li>FastAPI</li>
<li>PostgreSQL</li>
<li>Redis services</li>
</ul>`
  },
  {
    id: 104,
    section: 2,
    tier1: false,
    q: "What are environment variables?",
    ans: `Configuration values outside codebase.<br>
Examples:
<ul>
<li>DB URLs</li>
<li>API keys</li>
<li>secrets</li>
</ul>
Critical for deployment security.`
  },
  {
    id: 105,
    section: 2,
    tier1: false,
    q: "Why CI/CD matters?",
    ans: `Automates testing, builds, and deployments.<br>
Reduces:
<ul>
<li>human error</li>
<li>deployment bugs</li>
</ul>`
  },
  {
    id: 106,
    section: 2,
    tier1: false,
    q: "What are deployment pipelines?",
    ans: `Automated workflows from code commit (e.g. git push) to building and promoting assets directly to production.`
  },
  {
    id: 107,
    section: 2,
    tier1: false,
    q: "Blue-green deployment?",
    ans: `Two production environments:
<ul>
<li>Blue (old version)</li>
<li>Green (new version)</li>
</ul>
Traffic switched safely via router, minimizing deploy downtime.`
  },
  {
    id: 108,
    section: 2,
    tier1: false,
    q: "Canary deployment basics?",
    ans: `Deploy changes to small subset of traffic first (e.g. 5%).<br>
<strong>Benefits:</strong>
<ul>
<li>gradual rollout</li>
<li>reduced failure blast radius</li>
</ul>`
  },
  {
    id: 109,
    section: 2,
    tier1: false,
    q: "What causes deployment failures?",
    ans: `Common causes:
<ul>
<li>environment variables mismatch</li>
<li>missing database migrations</li>
<li>dependency conflicts</li>
<li>bad configuration keys</li>
</ul>`
  },
  {
    id: 110,
    section: 2,
    tier1: false,
    q: "How do you debug production issues?",
    ans: `<strong>Process:</strong>
<ol>
<li>Check structured logs</li>
<li>Trace requests via APM metrics</li>
<li>Identify bottleneck (CPU, DB lock)</li>
<li>Rollback deployment if critical</li>
</ol>
<strong>Key skill:</strong> Systematic logical debugging, not guessing.`
  },
  {
    id: 111,
    section: 3,
    tier1: false,
    q: "What is latency?",
    ans: `Latency = time taken to complete a request.
<br><br>
<strong>Examples:</strong>
<ul>
<li>API response time</li>
<li>DB query time</li>
<li>model inference time</li>
</ul>
In AI systems, high latency destroys UX quickly.
<br><br>
<strong>Important distinction:</strong>
<ul>
<li>throughput = how many</li>
<li>latency = how fast</li>
</ul>`
  },
  {
    id: 112,
    section: 3,
    tier1: false,
    q: "What is throughput?",
    ans: `Throughput = amount of work processed per unit time.
<br><br>
<strong>Example:</strong>
<ul>
<li>requests/sec</li>
<li>tokens/sec</li>
<li>jobs/minute</li>
</ul>
High throughput systems maximize concurrency.`
  },
  {
    id: 113,
    section: 3,
    tier1: false,
    q: "What are bottlenecks?",
    ans: `Component limiting overall system performance.
<br><br>
<strong>Common bottlenecks:</strong>
<ul>
<li>DB</li>
<li>network</li>
<li>CPU</li>
<li>external APIs</li>
<li>vector search</li>
<li>model inference</li>
</ul>
System performance is constrained by slowest component.`
  },
  {
    id: 114,
    section: 3,
    tier1: false,
    q: "Horizontal vs vertical scaling?",
    ans: `<strong>Vertical scaling:</strong>
<ul>
<li>stronger machine</li>
</ul>
<strong>Horizontal scaling:</strong>
<ul>
<li>more machines</li>
</ul>
Modern distributed systems prefer horizontal scaling because vertical scaling has limits.`
  },
  {
    id: 115,
    section: 3,
    tier1: false,
    q: "What is load balancing?",
    ans: `Distributing traffic across servers.
<br><br>
<strong>Benefits:</strong>
<ul>
<li>reliability</li>
<li>fault tolerance</li>
<li>scalability</li>
</ul>
<strong>Common algorithms:</strong>
<ul>
<li>round robin</li>
<li>least connections</li>
</ul>`
  },
  {
    id: 116,
    section: 3,
    tier1: true,
    q: "Why queues improve reliability?",
    ans: `Queues decouple producers and consumers.
<br><br>
Without queues:
<ul>
<li>service spikes cascade failures</li>
</ul>
With queues:
<ul>
<li>work buffered safely</li>
</ul>
<strong>Critical for:</strong>
<ul>
<li>AI jobs</li>
<li>PDF ingestion</li>
<li>embeddings</li>
<li>email systems</li>
</ul>`
  },
  {
    id: 117,
    section: 3,
    tier1: true,
    q: "Why retries matter?",
    ans: `Distributed systems fail constantly:
<ul>
<li>network timeout</li>
<li>API failure</li>
<li>transient DB issues</li>
</ul>
Retries improve resilience. But uncontrolled retries can worsen outages.`
  },
  {
    id: 118,
    section: 3,
    tier1: false,
    q: "What are circuit breakers?",
    ans: `Mechanism preventing repeated requests to failing service.
<br><br>
Without circuit breakers:
<ul>
<li>retry storms</li>
<li>cascading failures</li>
</ul>
<strong>Circuit breaker states:</strong>
<ul>
<li>closed</li>
<li>open</li>
<li>half-open</li>
</ul>`
  },
  {
    id: 119,
    section: 3,
    tier1: false,
    q: "Polling vs SSE vs WebSockets?",
    ans: `<table>
<tr><td><strong>Polling</strong></td><td><strong>SSE</strong></td><td><strong>WebSockets</strong></td></tr>
<tr><td>repeated requests</td><td>one-way stream</td><td>bidirectional</td></tr>
<tr><td>inefficient</td><td>lightweight</td><td>realtime</td></tr>
<tr><td>simple</td><td>AI streaming</td><td>chat/games</td></tr>
</table>
<br>
AI systems commonly use SSE for token streaming.`
  },
  {
    id: 120,
    section: 3,
    tier1: false,
    q: "What is eventual consistency?",
    ans: `Data may not become immediately consistent across distributed systems.
<br><br>
<strong>Tradeoff:</strong>
<ul>
<li>scalability</li>
<li>availability</li>
</ul>
vs
<ul>
<li>immediate consistency</li>
</ul>`
  },
  {
    id: 121,
    section: 3,
    tier1: false,
    q: "What causes cascading failures?",
    ans: `One failing service overloads others.
<br><br>
<strong>Common causes:</strong>
<ul>
<li>retries</li>
<li>dependency chains</li>
<li>queue buildup</li>
</ul>
Very common in AI systems.`
  },
  {
    id: 122,
    section: 3,
    tier1: false,
    q: "Why observability matters?",
    ans: `Without observability:
<ul>
<li>impossible debugging</li>
<li>unknown bottlenecks</li>
<li>hidden failures</li>
</ul>
<strong>Production systems require:</strong>
<ul>
<li>logs</li>
<li>metrics</li>
<li>traces</li>
</ul>`
  },
  {
    id: 123,
    section: 3,
    tier1: false,
    q: "What is structured logging?",
    ans: `Machine-readable logs. Usually JSON.
<br><br>
<strong>Benefits:</strong>
<ul>
<li>searchable</li>
<li>analyzable</li>
<li>traceable</li>
</ul>
Essential for distributed systems.`
  },
  {
    id: 124,
    section: 3,
    tier1: false,
    q: "What is distributed tracing?",
    ans: `Tracks request flow across services.
<br><br>
<strong>Useful for:</strong>
<ul>
<li>latency debugging</li>
<li>dependency bottlenecks</li>
<li>retry tracking</li>
</ul>`
  },
  {
    id: 125,
    section: 3,
    tier1: false,
    q: "What are metrics?",
    ans: `Numerical measurements.
<br><br>
<strong>Examples:</strong>
<ul>
<li>latency</li>
<li>CPU</li>
<li>error rate</li>
<li>queue size</li>
<li>token usage</li>
</ul>
Metrics drive production monitoring.`
  },
  {
    id: 126,
    section: 3,
    tier1: false,
    q: "What is backpressure?",
    ans: `Consumers cannot process incoming work fast enough.
<br><br>
Without handling:
<ul>
<li>memory explosion</li>
<li>queue overflow</li>
<li>service crashes</li>
</ul>`
  },
  {
    id: 127,
    section: 3,
    tier1: false,
    q: "How do distributed systems fail?",
    ans: `<strong>Common failure modes:</strong>
<ul>
<li>network partition</li>
<li>timeouts</li>
<li>retries</li>
<li>partial failures</li>
<li>inconsistent state</li>
</ul>
Distributed systems fail by default.`
  },
  {
    id: 128,
    section: 3,
    tier1: false,
    q: "CAP theorem basics?",
    ans: `Distributed systems trade off:
<ul>
<li>Consistency</li>
<li>Availability</li>
<li>Partition tolerance</li>
</ul>
Under partition: must choose consistency or availability.`
  },
  {
    id: 129,
    section: 3,
    tier1: false,
    q: "What is fault tolerance?",
    ans: `System continuing despite failures.
<br><br>
<strong>Achieved through:</strong>
<ul>
<li>retries</li>
<li>redundancy</li>
<li>replication</li>
<li>queues</li>
<li>graceful degradation</li>
</ul>`
  },
  {
    id: 130,
    section: 3,
    tier1: true,
    q: "Why idempotency matters?",
    ans: `Repeated execution should not corrupt state. Critical for retries.
<br><br>
<strong>Bad:</strong>
<ul>
<li>duplicate payment</li>
</ul>
<strong>Good:</strong>
<ul>
<li>safe repeated execution</li>
</ul>
One of the highest-value backend concepts.`
  },
  {
    id: 131,
    section: 3,
    tier1: true,
    q: "What is Celery?",
    ans: `Distributed task queue system for Python.
<br><br>
<strong>Used for:</strong>
<ul>
<li>background jobs</li>
<li>async workflows</li>
<li>distributed processing</li>
</ul>
Separates slow tasks from request lifecycle.`
  },
  {
    id: 132,
    section: 3,
    tier1: false,
    q: "Why Celery instead of async?",
    ans: `Async improves concurrency inside a single process. Celery distributes work across workers, processes, and machines.
<br><br>
<strong>Celery handles:</strong>
<ul>
<li>retries</li>
<li>persistence</li>
<li>queues</li>
<li>scaling</li>
<li>scheduling</li>
</ul>
Async alone cannot fully replace task queues.`
  },
  {
    id: 133,
    section: 3,
    tier1: true,
    q: "What is a broker?",
    ans: `Message intermediary storing tasks temporarily.
<br><br>
<strong>Examples:</strong>
<ul>
<li>Redis</li>
<li>RabbitMQ</li>
</ul>
Workers pull tasks from the broker.`
  },
  {
    id: 134,
    section: 3,
    tier1: false,
    q: "Redis vs RabbitMQ?",
    ans: `<table>
<tr><td><strong>Redis</strong></td><td><strong>RabbitMQ</strong></td></tr>
<tr><td>simpler</td><td>more robust</td></tr>
<tr><td>faster setup</td><td>advanced routing</td></tr>
<tr><td>memory-based</td><td>durable messaging</td></tr>
<tr><td>common startup choice</td><td>enterprise-grade queues</td></tr>
</table>
<br>
Redis is easier initially; RabbitMQ is more reliable at scale.`
  },
  {
    id: 135,
    section: 3,
    tier1: true,
    q: "What is a worker?",
    ans: `Process executing queued tasks.
<br><br>
<strong>Workers:</strong>
<ul>
<li>consume tasks</li>
<li>execute jobs</li>
<li>report status</li>
</ul>`
  },
  {
    id: 136,
    section: 3,
    tier1: false,
    q: "What is task acknowledgment?",
    ans: `Worker confirms successful task processing.
<br><br>
Without acknowledgments, tasks may disappear or duplicate.`
  },
  {
    id: 137,
    section: 3,
    tier1: false,
    q: "What happens if worker crashes?",
    ans: `<strong>Possible outcomes:</strong>
<ul>
<li>task retried</li>
<li>task lost</li>
<li>duplicate execution</li>
</ul>
Depends on acknowledgment strategy. This is why idempotency matters.`
  },
  {
    id: 138,
    section: 3,
    tier1: true,
    q: "How retries work?",
    ans: `Failed tasks requeued automatically.
<br><br>
<strong>Retry strategy usually includes:</strong>
<ul>
<li>retry count</li>
<li>delay</li>
<li>exponential backoff</li>
</ul>`
  },
  {
    id: 139,
    section: 3,
    tier1: false,
    q: "What is exponential backoff?",
    ans: `Retry delay increases progressively. Prevents retry storms and service overload.
<br><br>
<strong>Example:</strong><br>
1s ➔ 2s ➔ 4s ➔ 8s`
  },
  {
    id: 140,
    section: 3,
    tier1: false,
    q: "What are dead-letter queues?",
    ans: `Failed tasks routed to separate queue after retry exhaustion.
<br><br>
<strong>Useful for:</strong>
<ul>
<li>debugging</li>
<li>manual inspection</li>
<li>failure isolation</li>
</ul>`
  },
  {
    id: 141,
    section: 3,
    tier1: false,
    q: "What is idempotency?",
    ans: `Same operation repeated safely. Required because distributed systems retry constantly.`
  },
  {
    id: 142,
    section: 3,
    tier1: false,
    q: "Why retry-safe systems matter?",
    ans: `Retries without idempotency cause:
<ul>
<li>duplicated emails</li>
<li>duplicate charges</li>
<li>corrupted DB state</li>
</ul>
Production reliability depends heavily on retry safety.`
  },
  {
    id: 143,
    section: 3,
    tier1: false,
    q: "How duplicate tasks happen?",
    ans: `<strong>Causes:</strong>
<ul>
<li>worker crash</li>
<li>network timeout</li>
<li>acknowledgment failure</li>
<li>retry race conditions</li>
</ul>
Distributed systems naturally create duplicates.`
  },
  {
    id: 144,
    section: 3,
    tier1: false,
    q: "How would you prevent duplicate execution?",
    ans: `<strong>Methods:</strong>
<ul>
<li>idempotency keys</li>
<li>deduplication tables</li>
<li>distributed locks</li>
<li>unique constraints</li>
</ul>`
  },
  {
    id: 145,
    section: 3,
    tier1: false,
    q: "What are queue bottlenecks?",
    ans: `When task production exceeds processing capacity.
<br><br>
<strong>Symptoms:</strong>
<ul>
<li>queue growth</li>
<li>latency spikes</li>
<li>worker overload</li>
</ul>`
  },
  {
    id: 146,
    section: 3,
    tier1: false,
    q: "What is task routing?",
    ans: `Sending tasks to specific queues/workers.
<br><br>
<strong>Useful when tasks differ:</strong>
<ul>
<li>CPU-heavy</li>
<li>GPU-heavy</li>
<li>latency-sensitive</li>
</ul>`
  },
  {
    id: 147,
    section: 3,
    tier1: false,
    q: "CPU-bound vs I/O-bound workers?",
    ans: `<strong>CPU-bound:</strong>
<ul>
<li>computation-heavy</li>
<li>need multiprocessing</li>
</ul>
<strong>I/O-bound:</strong>
<ul>
<li>waiting-heavy</li>
<li>benefit from async/concurrency</li>
</ul>
AI inference may be both depending on architecture.`
  },
  {
    id: 148,
    section: 3,
    tier1: false,
    q: "Horizontal worker scaling?",
    ans: `Adding more workers increases throughput.
<br><br>
But introduces:
<ul>
<li>coordination complexity</li>
<li>DB contention</li>
<li>queue contention</li>
</ul>`
  },
  {
    id: 149,
    section: 3,
    tier1: false,
    q: "What are concurrency pools?",
    ans: `Worker execution models.
<br><br>
<strong>Examples:</strong>
<ul>
<li>prefork</li>
<li>threads</li>
<li>gevent</li>
</ul>
Tradeoffs depend on workload type.`
  },
  {
    id: 150,
    section: 3,
    tier1: false,
    q: "How do AI pipelines use Celery?",
    ans: `<strong>Common AI pipeline tasks:</strong>
<ul>
<li>OCR</li>
<li>embeddings</li>
<li>PDF ingestion</li>
<li>chunking</li>
<li>vector indexing</li>
<li>report generation</li>
</ul>
Celery orchestrates slow distributed processing reliably.`
  },
  {
    id: 151,
    section: 4,
    tier1: false,
    q: "What are tokens?",
    ans: `Tokens are chunks of text models process internally. Not equal to words.
<br><br>
<strong>Examples:</strong>
<ul>
<li>"hello" ➔ 1 token</li>
<li>long words may split</li>
<li>punctuation also counts</li>
</ul>
LLM pricing and limits are token-based.`
  },
  {
    id: 152,
    section: 4,
    tier1: false,
    q: "Context window meaning?",
    ans: `Maximum tokens model can process at once.
<br><br>
<strong>Includes:</strong>
<ul>
<li>input</li>
<li>system prompt</li>
<li>conversation history</li>
<li>output</li>
</ul>
Large context improves memory but increases:
<ul>
<li>latency</li>
<li>cost</li>
</ul>`
  },
  {
    id: 153,
    section: 4,
    tier1: false,
    q: "What is temperature?",
    ans: `Controls randomness.
<br><br>
<strong>Low temperature:</strong>
<ul>
<li>deterministic</li>
<li>stable</li>
</ul>
<strong>High temperature:</strong>
<ul>
<li>creative</li>
<li>unpredictable</li>
</ul>
Production systems usually prefer lower temperatures.`
  },
  {
    id: 154,
    section: 4,
    tier1: true,
    q: "Why hallucinations happen?",
    ans: `LLMs predict statistically plausible text, not factual truth.
<br><br>
<strong>Hallucinations increase when:</strong>
<ul>
<li>retrieval poor</li>
<li>prompts ambiguous</li>
<li>context insufficient</li>
</ul>
<strong>Core issue:</strong> LLMs are probabilistic generators.`
  },
  {
    id: 155,
    section: 4,
    tier1: false,
    q: "Prompting vs fine-tuning?",
    ans: `<strong>Prompting:</strong>
<ul>
<li>instruction-based behavior shaping</li>
</ul>
<strong>Fine-tuning:</strong>
<ul>
<li>modifying model weights</li>
</ul>
Most production systems use prompting because it is cheaper, faster, and allows easier iteration.`
  },
  {
    id: 156,
    section: 4,
    tier1: false,
    q: "What are structured outputs?",
    ans: `LLM responses constrained into schemas.
<br><br>
<strong>Usually:</strong>
<ul>
<li>JSON</li>
<li>Pydantic models</li>
</ul>
Critical for reliability.`
  },
  {
    id: 157,
    section: 4,
    tier1: true,
    q: "What is tool calling?",
    ans: `Model requests external tools/functions.
<br><br>
<strong>Examples:</strong>
<ul>
<li>DB query</li>
<li>search</li>
<li>calculator</li>
<li>API calls</li>
</ul>
Moves systems from pure text generation to workflow execution.`
  },
  {
    id: 158,
    section: 4,
    tier1: false,
    q: "Why JSON schemas matter?",
    ans: `They:
<ul>
<li>validate outputs</li>
<li>reduce hallucinated structure</li>
<li>improve parsing reliability</li>
</ul>
Production AI systems depend heavily on schema enforcement.`
  },
  {
    id: 159,
    section: 4,
    tier1: false,
    q: "Why token counting matters?",
    ans: `<strong>Affects:</strong>
<ul>
<li>cost</li>
<li>latency</li>
<li>truncation risk</li>
</ul>
Large prompts become expensive quickly.`
  },
  {
    id: 160,
    section: 4,
    tier1: false,
    q: "Function calling vs agents?",
    ans: `<strong>Function calling:</strong>
<ul>
<li>deterministic tool execution</li>
</ul>
<strong>Agents:</strong>
<ul>
<li>autonomous multi-step reasoning/workflows</li>
</ul>
Agents are more flexible but less reliable.`
  },
  {
    id: 161,
    section: 4,
    tier1: false,
    q: "Why streaming improves UX?",
    ans: `Users see partial output immediately, which reduces perceived latency dramatically. Critical because LLM inference is slow.`
  },
  {
    id: 162,
    section: 4,
    tier1: false,
    q: "What causes LLM latency?",
    ans: `<strong>Major causes:</strong>
<ul>
<li>inference time</li>
<li>large context</li>
<li>retrieval latency</li>
<li>network overhead</li>
<li>tool execution</li>
</ul>`
  },
  {
    id: 163,
    section: 4,
    tier1: false,
    q: "Why LLM APIs fail?",
    ans: `<strong>Failures:</strong>
<ul>
<li>timeouts</li>
<li>rate limits</li>
<li>malformed outputs</li>
<li>model overload</li>
<li>API outages</li>
</ul>
AI systems require strong retry/fallback logic.`
  },
  {
    id: 164,
    section: 4,
    tier1: false,
    q: "Cost optimization strategies?",
    ans: `<strong>Main approaches:</strong>
<ul>
<li>caching</li>
<li>smaller models</li>
<li>prompt compression</li>
<li>retrieval optimization</li>
<li>batching</li>
<li>routing</li>
</ul>
Production AI systems are cost-sensitive.`
  },
  {
    id: 165,
    section: 4,
    tier1: false,
    q: "Prompt compression?",
    ans: `Reducing unnecessary tokens while preserving meaning, reducing cost and latency. Important at scale.`
  },
  {
    id: 166,
    section: 4,
    tier1: false,
    q: "Cheap vs expensive model routing?",
    ans: `<strong>Simple tasks:</strong>
<ul>
<li>cheap model</li>
</ul>
<strong>Complex tasks:</strong>
<ul>
<li>stronger model</li>
</ul>
Reduces operational cost significantly.`
  },
  {
    id: 167,
    section: 4,
    tier1: false,
    q: "Why fallback systems matter?",
    ans: `LLMs fail unpredictably. Fallbacks improve reliability:
<ul>
<li>alternate model</li>
<li>cached response</li>
<li>reduced-context retry</li>
</ul>`
  },
  {
    id: 168,
    section: 4,
    tier1: false,
    q: "Deterministic vs probabilistic systems?",
    ans: `<strong>Traditional software:</strong>
<ul>
<li>deterministic</li>
</ul>
<strong>LLMs:</strong>
<ul>
<li>probabilistic</li>
</ul>
This creates reliability engineering challenges.`
  },
  {
    id: 169,
    section: 4,
    tier1: false,
    q: "Why LLM reliability is difficult?",
    ans: `Because outputs are non-deterministic, context-sensitive, and probabilistic. Same prompt may produce different outputs.`
  },
  {
    id: 170,
    section: 4,
    tier1: false,
    q: "How do you reduce hallucinations?",
    ans: `<strong>Main techniques:</strong>
<ul>
<li>RAG</li>
<li>grounding</li>
<li>citations</li>
<li>structured outputs</li>
<li>prompt constraints</li>
<li>lower temperature</li>
</ul>
Hallucinations cannot be fully eliminated.`
  },
  {
    id: 171,
    section: 4,
    tier1: true,
    q: "What are embeddings?",
    ans: `Numerical vector representations of semantic meaning. Similar meanings ➔ nearby vectors. Foundation of semantic search.`
  },
  {
    id: 172,
    section: 4,
    tier1: false,
    q: "Semantic search vs keyword search?",
    ans: `<strong>Keyword:</strong>
<ul>
<li>exact matching</li>
</ul>
<strong>Semantic:</strong>
<ul>
<li>meaning-based retrieval</li>
</ul>
Example: "car" may retrieve "vehicle".`
  },
  {
    id: 173,
    section: 4,
    tier1: false,
    q: "What is cosine similarity?",
    ans: `Measures angle similarity between vectors. Most common embedding similarity metric. Closer angle ➔ more semantically similar.`
  },
  {
    id: 174,
    section: 4,
    tier1: false,
    q: "Why vector dimensions matter?",
    ans: `<strong>Higher dimensions:</strong>
<ul>
<li>more representational power</li>
</ul>
<strong>But:</strong>
<ul>
<li>higher storage</li>
<li>slower retrieval</li>
</ul>
Tradeoff exists.`
  },
  {
    id: 175,
    section: 4,
    tier1: true,
    q: "What is chunking?",
    ans: `Splitting documents into smaller pieces before embedding. Critical RAG component. Bad chunking destroys retrieval quality.`
  },
  {
    id: 176,
    section: 4,
    tier1: false,
    q: "Fixed vs semantic chunking?",
    ans: `<strong>Fixed:</strong>
<ul>
<li>simple</li>
<li>uniform</li>
</ul>
<strong>Semantic:</strong>
<ul>
<li>meaning-aware</li>
<li>better retrieval quality</li>
</ul>
Semantic chunking usually performs better.`
  },
  {
    id: 177,
    section: 4,
    tier1: false,
    q: "Why overlap strategy matters?",
    ans: `Overlap preserves context continuity across chunks. Without overlap:
<ul>
<li>information fragmentation</li>
<li>retrieval failures</li>
</ul>`
  },
  {
    id: 178,
    section: 4,
    tier1: true,
    q: "What is retrieval?",
    ans: `Finding relevant chunks/documents for a query.
<br><br>
<strong>Core RAG pipeline:</strong>
<ol>
<li>embed query</li>
<li>similarity search</li>
<li>retrieve relevant chunks</li>
</ol>`
  },
  {
    id: 179,
    section: 4,
    tier1: false,
    q: "What is top-k retrieval?",
    ans: `Returning top K most similar results.
<br><br>
<strong>Tradeoff:</strong>
<ul>
<li>higher K ➔ better recall</li>
<li>but more noise/context cost</li>
</ul>`
  },
  {
    id: 180,
    section: 4,
    tier1: false,
    q: "What is ANN search?",
    ans: `Approximate nearest neighbor search. Speeds vector retrieval massively.
<br><br>
<strong>Tradeoff:</strong>
<ul>
<li>slightly reduced accuracy</li>
<li>huge performance gain</li>
</ul>`
  },
  {
    id: 181,
    section: 4,
    tier1: true,
    q: "Why reranking matters?",
    ans: `Initial retrieval may contain noisy results. Rerankers improve relevance ordering. Huge quality improvement in production RAG.`
  },
  {
    id: 182,
    section: 4,
    tier1: false,
    q: "BM25 vs vector search?",
    ans: `<strong>BM25:</strong>
<ul>
<li>keyword/statistical matching</li>
</ul>
<strong>Vector search:</strong>
<ul>
<li>semantic similarity</li>
</ul>
Hybrid systems often combine both.`
  },
  {
    id: 183,
    section: 4,
    tier1: false,
    q: "Hybrid retrieval?",
    ans: `Combines keyword retrieval and semantic retrieval. Usually stronger than either alone.`
  },
  {
    id: 184,
    section: 4,
    tier1: false,
    q: "What causes poor retrieval quality?",
    ans: `<strong>Common causes:</strong>
<ul>
<li>bad chunking</li>
<li>weak embeddings</li>
<li>insufficient overlap</li>
<li>noisy documents</li>
<li>poor metadata</li>
</ul>
Most RAG failures are retrieval failures.`
  },
  {
    id: 185,
    section: 4,
    tier1: false,
    q: "How would you evaluate retrieval?",
    ans: `<strong>Metrics:</strong>
<ul>
<li>recall@k</li>
<li>precision@k</li>
<li>hit rate</li>
<li>reranking quality</li>
</ul>
Must evaluate retrieval independently from generation.`
  },
  {
    id: 186,
    section: 4,
    tier1: false,
    q: "What is recall@k?",
    ans: `Measures "How often relevant document appears in top K?". Critical RAG metric.`
  },
  {
    id: 187,
    section: 4,
    tier1: false,
    q: "What is precision@k?",
    ans: `Measures "How many retrieved documents are actually relevant?". Tradeoff exists with recall.`
  },
  {
    id: 188,
    section: 4,
    tier1: true,
    q: "What is grounding?",
    ans: `Constraining generation using retrieved context. Prevents unsupported generation.`
  },
  {
    id: 189,
    section: 4,
    tier1: false,
    q: "Why citations matter?",
    ans: `<strong>Benefits:</strong>
<ul>
<li>traceability</li>
<li>trust</li>
<li>hallucination reduction</li>
</ul>
Enterprise systems increasingly require citations.`
  },
  {
    id: 190,
    section: 4,
    tier1: false,
    q: "How do RAG systems fail?",
    ans: `<strong>Major failure modes:</strong>
<ul>
<li>poor retrieval</li>
<li>bad chunking</li>
<li>irrelevant context</li>
<li>retrieval latency</li>
<li>stale embeddings</li>
<li>hallucinated synthesis</li>
</ul>
Most failures are NOT model failures.`
  },
  {
    id: 191,
    section: 4,
    tier1: true,
    q: "What is pgvector?",
    ans: `PostgreSQL extension for vector similarity search.
<br><br>
<strong>Benefits:</strong>
<ul>
<li>relational + vector search together</li>
<li>simpler infrastructure</li>
<li>strong production fit</li>
</ul>`
  },
  {
    id: 192,
    section: 4,
    tier1: false,
    q: "Why pgvector is important?",
    ans: `Combines SQL, transactions, and vector search. Very practical for startups and production systems.`
  },
  {
    id: 193,
    section: 4,
    tier1: false,
    q: "Pinecone vs Qdrant?",
    ans: `<table>
<tr><td><strong>Pinecone</strong></td><td><strong>Qdrant</strong></td></tr>
<tr><td>managed SaaS</td><td>open-source friendly</td></tr>
<tr><td>easier ops</td><td>more control</td></tr>
<tr><td>proprietary</td><td>self-hostable</td></tr>
</table>
<br>
Choice depends on operational needs.`
  },
  {
    id: 194,
    section: 4,
    tier1: false,
    q: "Metadata filtering?",
    ans: `Filtering retrieval using metadata.
<br><br>
<strong>Examples:</strong>
<ul>
<li>document type</li>
<li>user permissions</li>
<li>timestamps</li>
</ul>
Improves relevance significantly.`
  },
  {
    id: 195,
    section: 4,
    tier1: true,
    q: "Retrieval latency bottlenecks?",
    ans: `<strong>Causes:</strong>
<ul>
<li>large vector indexes</li>
<li>reranking</li>
<li>network overhead</li>
<li>metadata filtering</li>
<li>slow ANN configuration</li>
</ul>`
  },
  {
    id: 196,
    section: 4,
    tier1: false,
    q: "ANN indexing tradeoffs?",
    ans: `Faster retrieval vs lower exact accuracy. Production systems prioritize speed.`
  },
  {
    id: 197,
    section: 4,
    tier1: false,
    q: "Why vector DBs exist?",
    ans: `Traditional DBs are inefficient for high-dimensional similarity search. Vector DBs optimize:
<ul>
<li>ANN indexing</li>
<li>vector retrieval</li>
<li>semantic search</li>
</ul>`
  },
  {
    id: 198,
    section: 4,
    tier1: false,
    q: "Why embeddings alone are insufficient?",
    ans: `Embeddings retrieve similarity only. Need:
<ul>
<li>reranking</li>
<li>metadata</li>
<li>orchestration</li>
<li>grounding</li>
<li>evaluation</li>
</ul>
RAG quality is a system-level problem.`
  },
  {
    id: 199,
    section: 4,
    tier1: false,
    q: "How do you optimize retrieval speed?",
    ans: `<strong>Methods:</strong>
<ul>
<li>ANN indexes</li>
<li>metadata filtering</li>
<li>smaller embeddings</li>
<li>caching</li>
<li>reranking optimization</li>
</ul>`
  },
  {
    id: 200,
    section: 4,
    tier1: false,
    q: "What causes hallucinations despite RAG?",
    ans: `<strong>Common reasons:</strong>
<ul>
<li>irrelevant retrieval</li>
<li>insufficient context</li>
<li>poor grounding</li>
<li>model synthesis errors</li>
<li>chunk fragmentation</li>
</ul>
RAG reduces hallucinations but does not eliminate them.`
  },
  {
    id: 201,
    section: 5,
    tier1: false,
    q: "What is orchestration?",
    ans: `Managing workflow execution across multiple steps, services, and models.
<br><br>
<strong>Examples:</strong>
<ul>
<li>retrieval</li>
<li>tool calls</li>
<li>routing</li>
<li>retries</li>
</ul>
Orchestration coordinates AI systems reliably.`
  },
  {
    id: 202,
    section: 5,
    tier1: false,
    q: "What are AI workflows?",
    ans: `Multi-step AI pipelines.
<br><br>
<strong>Example:</strong>
<ol>
<li>OCR</li>
<li>chunking</li>
<li>embeddings</li>
<li>retrieval</li>
<li>generation</li>
<li>evaluation</li>
</ol>
Production AI systems are workflows, not single prompts.`
  },
  {
    id: 203,
    section: 5,
    tier1: false,
    q: "What is routing logic?",
    ans: `Choosing model, workflow, tool, or prompt path based on request characteristics.`
  },
  {
    id: 204,
    section: 5,
    tier1: false,
    q: "What are fallback systems?",
    ans: `Backup strategies when primary path fails.
<br><br>
<strong>Examples:</strong>
<ul>
<li>smaller model</li>
<li>cached response</li>
<li>retry</li>
<li>alternate provider</li>
</ul>
Critical for reliability.`
  },
  {
    id: 205,
    section: 5,
    tier1: false,
    q: "Why retries matter in AI systems?",
    ans: `LLM systems fail constantly (timeouts, rate limits, API overload). Retries improve robustness.`
  },
  {
    id: 206,
    section: 5,
    tier1: false,
    q: "LangGraph vs LangChain?",
    ans: `<strong>LangChain:</strong>
<ul>
<li>general framework</li>
</ul>
<strong>LangGraph:</strong>
<ul>
<li>workflow/state-machine orchestration</li>
</ul>
LangGraph is better for deterministic workflows with loops.`
  },
  {
    id: 207,
    section: 5,
    tier1: false,
    q: "Why workflow observability matters?",
    ans: `Without tracing, debugging is impossible and bottlenecks remain hidden. AI systems require full workflow visibility.`
  },
  {
    id: 208,
    section: 5,
    tier1: false,
    q: "What are multi-step agents?",
    ans: `Agents performing sequential reasoning/tool execution.
<br><br>
<strong>Examples:</strong>
<ul>
<li>research agent</li>
<li>coding assistant</li>
<li>planning systems</li>
</ul>`
  },
  {
    id: 209,
    section: 5,
    tier1: false,
    q: "Why agents fail?",
    ans: `<strong>Common failures:</strong>
<ul>
<li>hallucinated planning</li>
<li>infinite loops</li>
<li>tool misuse</li>
<li>context loss</li>
<li>unreliable reasoning</li>
</ul>
Agents are difficult to productionize.`
  },
  {
    id: 210,
    section: 5,
    tier1: false,
    q: "How do you debug AI workflows?",
    ans: `<strong>Approach:</strong>
<ol>
<li>inspect traces</li>
<li>inspect prompts</li>
<li>inspect retrieval</li>
<li>inspect tool outputs</li>
<li>evaluate latency/cost/errors</li>
</ol>
Need observability everywhere.`
  },
  {
    id: 211,
    section: 5,
    tier1: false,
    q: "Why AI evaluation matters?",
    ans: `AI outputs are probabilistic. Without evaluation, quality is unknown and regressions go unnoticed. Evaluation is mandatory in production AI.`
  },
  {
    id: 212,
    section: 5,
    tier1: false,
    q: "Faithfulness vs relevance?",
    ans: `<strong>Faithfulness:</strong>
<ul>
<li>output supported by context</li>
</ul>
<strong>Relevance:</strong>
<ul>
<li>output answers user need</li>
</ul>
Both matter independently.`
  },
  {
    id: 213,
    section: 5,
    tier1: false,
    q: "Hallucination detection methods?",
    ans: `<strong>Methods:</strong>
<ul>
<li>grounding checks</li>
<li>retrieval validation</li>
<li>citation verification</li>
<li>LLM-as-judge</li>
<li>human review</li>
</ul>
No perfect method exists.`
  },
  {
    id: 214,
    section: 5,
    tier1: false,
    q: "Why subjective evaluation fails?",
    ans: `Human intuition is inconsistent and unscalable. Need measurable metrics and benchmarks.`
  },
  {
    id: 215,
    section: 5,
    tier1: false,
    q: "What is LangSmith?",
    ans: `Observability/evaluation platform for LLM applications.
<br><br>
<strong>Tracks:</strong>
<ul>
<li>traces</li>
<li>prompts</li>
<li>failures</li>
<li>metrics</li>
</ul>`
  },
  {
    id: 216,
    section: 5,
    tier1: false,
    q: "What is Langfuse?",
    ans: `Open-source LLM observability platform.
<br><br>
<strong>Used for:</strong>
<ul>
<li>tracing</li>
<li>cost tracking</li>
<li>evaluation</li>
<li>debugging</li>
</ul>`
  },
  {
    id: 217,
    section: 5,
    tier1: false,
    q: "What metrics matter for AI systems?",
    ans: `<strong>Important metrics:</strong>
<ul>
<li>latency</li>
<li>token cost</li>
<li>hallucination rate</li>
<li>recall@k</li>
<li>precision</li>
<li>throughput</li>
<li>success rate</li>
</ul>`
  },
  {
    id: 218,
    section: 5,
    tier1: false,
    q: "Why tracing matters?",
    ans: `Shows request flow across retrieval, prompts, tools, and models. Critical for debugging.`
  },
  {
    id: 219,
    section: 5,
    tier1: false,
    q: "Token cost tracking?",
    ans: `Necessary because LLM costs scale rapidly with usage. Without tracking:
<ul>
<li>runaway costs</li>
<li>operational instability</li>
</ul>`
  },
  {
    id: 220,
    section: 5,
    tier1: false,
    q: "Latency monitoring?",
    ans: `Tracks response delays across pipeline stages. Critical for UX optimization.`
  },
  {
    id: 221,
    section: 5,
    tier1: false,
    q: "Why AI observability is difficult?",
    ans: `AI systems are probabilistic, multi-stage, and nondeterministic. Failures are harder to detect than in traditional systems.`
  },
  {
    id: 222,
    section: 5,
    tier1: false,
    q: "How do retries affect metrics?",
    ans: `Retries may:
<ul>
<li>inflate latency</li>
<li>distort success rates</li>
<li>increase costs</li>
</ul>
Metrics must account for retries.`
  },
  {
    id: 223,
    section: 5,
    tier1: false,
    q: "Why production AI differs from demos?",
    ans: `Demos ignore scale, retries, observability, malformed outputs, costs, latency, and reliability. Production complexity is much higher.`
  },
  {
    id: 224,
    section: 5,
    tier1: false,
    q: "How do you measure AI quality?",
    ans: `Combination of:
<ul>
<li>automated evaluation</li>
<li>retrieval metrics</li>
<li>human review</li>
<li>business metrics</li>
</ul>`
  },
  {
    id: 225,
    section: 5,
    tier1: false,
    q: "What causes silent failures?",
    ans: `Failures producing plausible but incorrect outputs. The most dangerous AI failure mode.`
  },
  {
    id: 226,
    section: 5,
    tier1: false,
    q: "What is vLLM?",
    ans: `High-performance inference engine for LLM serving.
<br><br>
<strong>Optimized for:</strong>
<ul>
<li>batching</li>
<li>throughput</li>
<li>GPU efficiency</li>
</ul>`
  },
  {
    id: 227,
    section: 5,
    tier1: false,
    q: "Why batching improves throughput?",
    ans: `Processes multiple requests together. Better GPU utilization.
<br><br>
<strong>Tradeoff:</strong>
<ul>
<li>possible latency increase</li>
</ul>`
  },
  {
    id: 228,
    section: 5,
    tier1: true,
    q: "GPU memory bottlenecks?",
    ans: `LLMs consume massive VRAM. Limits model size, batch size, and concurrency.`
  },
  {
    id: 229,
    section: 5,
    tier1: false,
    q: "What is LoRA?",
    ans: `Low-Rank Adaptation. Efficient fine-tuning method updating small adapter weights. Much cheaper than full fine-tuning.`
  },
  {
    id: 230,
    section: 5,
    tier1: false,
    q: "What is PEFT?",
    ans: `Parameter-Efficient Fine-Tuning. Techniques minimizing trainable parameters.`
  },
  {
    id: 231,
    section: 5,
    tier1: false,
    q: "Fine-tuning vs prompting?",
    ans: `<strong>Prompting:</strong>
<ul>
<li>flexible</li>
<li>cheap</li>
</ul>
<strong>Fine-tuning:</strong>
<ul>
<li>stronger specialization</li>
<li>operational complexity</li>
</ul>
Most companies prioritize prompting/RAG first.`
  },
  {
    id: 232,
    section: 5,
    tier1: false,
    q: "Prompt injection attacks?",
    ans: `Malicious prompts manipulating model behavior. Major AI security issue.`
  },
  {
    id: 233,
    section: 5,
    tier1: false,
    q: "What are guardrails?",
    ans: `Constraints protecting AI systems.
<br><br>
<strong>Examples:</strong>
<ul>
<li>schema validation</li>
<li>moderation</li>
<li>policy enforcement</li>
</ul>`
  },
  {
    id: 234,
    section: 5,
    tier1: false,
    q: "Adversarial prompts?",
    ans: `Inputs intentionally designed to bypass safeguards.`
  },
  {
    id: 235,
    section: 5,
    tier1: false,
    q: "What is multimodal AI?",
    ans: `Models handling:
<ul>
<li>text</li>
<li>images</li>
<li>audio</li>
<li>video</li>
</ul>`
  },
  {
    id: 236,
    section: 5,
    tier1: false,
    q: "OCR pipeline architecture?",
    ans: `Typical flow:
<ol>
<li>upload</li>
<li>OCR extraction</li>
<li>chunking</li>
<li>embeddings</li>
<li>indexing</li>
</ol>`
  },
  {
    id: 237,
    section: 5,
    tier1: false,
    q: "What is distributed inference?",
    ans: `Serving inference across multiple machines/GPUs. Needed for large-scale systems.`
  },
  {
    id: 238,
    section: 5,
    tier1: false,
    q: "Why inference optimization matters?",
    ans: `Inference dominates latency, GPU cost, and scalability. Optimization directly affects profitability.`
  },
  {
    id: 239,
    section: 5,
    tier1: false,
    q: "Quantization basics?",
    ans: `Reducing numerical precision to shrink models.
<br><br>
<strong>Benefits:</strong>
<ul>
<li>lower memory</li>
<li>faster inference</li>
</ul>
<strong>Tradeoff:</strong>
<ul>
<li>possible accuracy loss</li>
</ul>`
  },
  {
    id: 240,
    section: 5,
    tier1: false,
    q: "Why model serving is difficult?",
    ans: `Challenges:
<ul>
<li>GPU memory</li>
<li>concurrency</li>
<li>batching</li>
<li>latency</li>
<li>autoscaling</li>
</ul>`
  },
  {
    id: 241,
    section: 5,
    tier1: true,
    q: "How would you design a production RAG system?",
    ans: `<strong>Core components:</strong>
<ul>
<li>ingestion pipeline</li>
<li>chunking</li>
<li>embeddings</li>
<li>vector DB</li>
<li>retrieval</li>
<li>reranking</li>
<li>grounding</li>
<li>evaluation</li>
<li>observability</li>
</ul>
Reliability matters more than fancy prompting.`
  },
  {
    id: 242,
    section: 5,
    tier1: true,
    q: "Biggest bottlenecks in AI systems?",
    ans: `Usually:
<ul>
<li>inference latency</li>
<li>retrieval quality</li>
<li>token cost</li>
<li>external APIs</li>
<li>orchestration overhead</li>
</ul>`
  },
  {
    id: 243,
    section: 5,
    tier1: false,
    q: "How do you optimize AI costs?",
    ans: `<strong>Methods:</strong>
<ul>
<li>caching</li>
<li>smaller models</li>
<li>batching</li>
<li>retrieval optimization</li>
<li>routing</li>
</ul>`
  },
  {
    id: 244,
    section: 5,
    tier1: true,
    q: "How do you optimize AI latency?",
    ans: `<strong>Methods:</strong>
<ul>
<li>streaming</li>
<li>async execution</li>
<li>batching</li>
<li>optimized retrieval</li>
<li>smaller context</li>
</ul>`
  },
  {
    id: 245,
    section: 5,
    tier1: true,
    q: "How do you build reliable AI systems?",
    ans: `<strong>Core principles:</strong>
<ul>
<li>retries</li>
<li>validation</li>
<li>observability</li>
<li>structured outputs</li>
<li>grounding</li>
<li>fallbacks</li>
<li>evaluation</li>
</ul>`
  },
  {
    id: 246,
    section: 5,
    tier1: false,
    q: "What production failures have you handled?",
    ans: `<strong>Good answer structure:</strong>
<ol>
<li>issue</li>
<li>root cause</li>
<li>debugging process</li>
<li>fix</li>
<li>prevention</li>
</ol>
Interviewers value debugging maturity heavily.`
  },
  {
    id: 247,
    section: 5,
    tier1: false,
    q: "What tradeoffs did you make?",
    ans: `Strong candidates discuss:
<ul>
<li>latency vs quality</li>
<li>cost vs accuracy</li>
<li>complexity vs maintainability</li>
</ul>`
  },
  {
    id: 248,
    section: 5,
    tier1: false,
    q: "What would you improve in your architecture?",
    ans: `Shows:
<ul>
<li>systems thinking</li>
<li>self-critique</li>
<li>scalability awareness</li>
</ul>`
  },
  {
    id: 249,
    section: 5,
    tier1: false,
    q: "Explain one project deeply end-to-end.",
    ans: `Must explain:
<ul>
<li>architecture</li>
<li>failures</li>
<li>bottlenecks</li>
<li>optimizations</li>
<li>tradeoffs</li>
<li>deployment</li>
<li>monitoring</li>
</ul>
Most candidates fail here.`
  },
  {
    id: 250,
    section: 5,
    tier1: false,
    q: "Why should we hire you for AI/backend engineering?",
    ans: `Strong answer:
<ul>
<li>emphasize systems thinking</li>
<li>debugging</li>
<li>reliability</li>
<li>backend depth</li>
<li>production engineering</li>
</ul>
Not hype terms.`
  },
];
