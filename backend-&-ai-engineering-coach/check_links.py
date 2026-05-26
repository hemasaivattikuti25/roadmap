import urllib.request
import ssl
import json
import re

# Disable SSL verification for check
ssl_context = ssl._create_unverified_context()

urls = [
    'https://realpython.com/python-first-steps/',
    'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
    'https://realpython.com/python3-object-oriented-programming/',
    'https://www.youtube.com/watch?v=ZDa-Z5JzLYM',
    'https://realpython.com/async-io-python/',
    'https://www.youtube.com/watch?v=BI0asZuMTOY',
    'https://docs.python-guide.org/writing/style/',
    'https://www.youtube.com/watch?v=m9fThofep_o',
    'https://docs.pytest.org/en/stable/getting-started.html',
    'https://www.youtube.com/watch?v=cHYq1uxNId4',
    'https://fastapi.tiangolo.com/tutorial/',
    'https://www.youtube.com/watch?v=GN6ICac3OXY',
    'https://fastapi.tiangolo.com/tutorial/sql-databases/',
    'https://www.youtube.com/watch?v=0sOvCWFmrtA',
    'https://owasp.org/www-project-top-ten/',
    'https://www.youtube.com/watch?v=6h58LajsM90',
    'https://www.postgresqltutorial.com/',
    'https://www.youtube.com/watch?v=W2Z5_5VYU74',
    'https://sqlbolt.com/',
    'https://www.youtube.com/watch?v=HXV3zeQKqGY',
    'https://tatiyants.com/explain-visualizer/',
    'https://www.youtube.com/watch?v=H7Z4Y8mR-U8',
    'https://docs.sqlalchemy.org/en/20/tutorial/index.html',
    'https://www.youtube.com/watch?v=b09ALbW6mB8',
    'https://university.redis.io/courses/ru101/',
    'https://www.youtube.com/watch?v=OqPpX07ZAn8',
    'https://docs.celeryq.dev/en/stable/getting-started/first-steps-with-celery.html',
    'https://www.youtube.com/watch?v=68QWZM_g6S0',
    'https://www.rabbitmq.com/getstarted.html',
    'https://www.youtube.com/watch?v=uqZMXHeZ07s',
    'https://fastapi.tiangolo.com/advanced/websockets/',
    'https://www.youtube.com/watch?v=XshbSshS178',
    'https://docs.celeryq.dev/en/stable/userguide/canvas.html',
    'https://www.youtube.com/watch?v=vYp4LYb4WEM',
    'https://docs.docker.com/get-started/',
    'https://www.youtube.com/watch?v=3c-iLsGje98',
    'https://docs.railway.app/deploy/overview',
    'https://www.youtube.com/watch?v=488PCO9s9P8',
    'https://www.atlassian.com/git/tutorials',
    'https://www.youtube.com/watch?v=RGOj5yH7evk',
    'https://jalammar.github.io/illustrated-transformer/',
    'https://www.youtube.com/watch?v=kCc8FmEb1nY',
    'https://platform.openai.com/docs/guides/rate-limits',
    'https://www.youtube.com/watch?v=2xxziIW_ymU',
    'https://platform.openai.com/docs/guides/embeddings',
    'https://www.youtube.com/watch?v=gQdb7S1aZp0',
    'https://docs.llamaindex.ai/en/stable/understanding/rag/',
    'https://www.youtube.com/watch?v=sV0mS46KPhE',
    'https://www.pinecone.io/learn/vector-embeddings/',
    'https://www.youtube.com/watch?v=klTvEwg3o7Q',
    'https://python.langchain.com/v0.2/docs/how_to/structured_output/',
    'https://www.youtube.com/watch?v=Ky0s9S6T768',
    'https://langchainai.github.io/langgraph/',
    'https://www.youtube.com/watch?v=P_XqR9GPrfU',
    'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events',
    'https://www.youtube.com/watch?v=0b7C6mXpI0o',
    'https://docs.ragas.io/en/stable/concepts/metrics/index.html',
    'https://www.youtube.com/watch?v=gSbeF_1H4U0',
    'https://docs.langfuse.com/tracing',
    'https://www.youtube.com/watch?v=tY8G_8f3_U0',
    'https://redis.io/blog/semantic-caching-with-redis/',
    'https://www.youtube.com/watch?v=p6K_673H_98',
    'https://docs.vllm.ai/en/latest/getting_started/quickstart.html',
    'https://www.youtube.com/watch?v=5-680XP-6mY',
    'https://huggingface.co/docs/peft/en/index',
    'https://www.youtube.com/watch?v=ldGgWbSVyvA',
    'https://ai.google.dev/gemini-api/docs/multimodal',
    'https://www.youtube.com/watch?v=yP61fPhLAbY',
    'https://pytorch.org/docs/stable/notes/cuda.html',
    'https://www.youtube.com/watch?v=tOM6f_8A3sc',
    'https://www.bigocheatsheet.com/',
    'https://www.youtube.com/watch?v=V6mKVRU1evA',
    'https://bytebytego.com/',
    'https://www.youtube.com/watch?v=m8Iof_oKu9o',
    'https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns',
    'https://www.youtube.com/watch?v=RBSGKlAoiGs',
    'https://github.com/donnemartin/system-design-primer',
    'https://www.youtube.com/watch?v=y8XvMpe8Tjg',
    'https://www.kalzumeus.com/2012/01/23/salary-negotiation/',
    'https://www.youtube.com/watch?v=guZa7mQV1l0'
]

print(f"Checking {len(urls)} URLs...")
for i, url in enumerate(urls, 1):
    try:
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        )
        with urllib.request.urlopen(req, timeout=5, context=ssl_context) as response:
            code = response.getcode()
            print(f"[{i}/{len(urls)}] SUCCESS: {url} (status: {code})")
    except Exception as e:
        print(f"[{i}/{len(urls)}] FAILED: {url} - Error: {e}")
