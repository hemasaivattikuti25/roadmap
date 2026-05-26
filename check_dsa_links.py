import re
import json
import asyncio
import aiohttp
import urllib.parse

async def check_url(session, url, key):
    if not url or url.startswith('javascript:'):
        return url, key, True
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
        # Fetch the content to check for soft 404s
        async with session.get(url, headers=headers, timeout=15, allow_redirects=True) as response:
            if response.status >= 400 and response.status not in [403, 401]:
                return url, key, False
            if response.status == 200:
                text = await response.text()
                # Check soft 404 on takeuforward
                if 'takeuforward' in url and ('Page not found' in text or '404' in text):
                    return url, key, False
                # Check soft 404 on geeksforgeeks
                if 'geeksforgeeks' in url and ('Page Not Found' in text or '404' in text):
                    return url, key, False
            return url, key, True
    except Exception as e:
        return url, key, False

async def main():
    with open('dsa.html', 'r', encoding='utf-8') as f:
        content = f.read()

    start_idx = content.find('const CHAPTERS = [')
    
    stack = 0
    end_idx = -1
    in_str = False
    escape = False
    str_char = ''
    for i in range(start_idx + 17, len(content)):
        c = content[i]
        if in_str:
            if escape: escape = False
            elif c == '\\': escape = True
            elif c == str_char: in_str = False
        else:
            if c in '"\'`':
                in_str = True
                str_char = c
            elif c == '[': stack += 1
            elif c == ']':
                stack -= 1
                if stack == 0:
                    end_idx = i + 1
                    break
    
    json_str = content[start_idx + 17: end_idx]
    data = json.loads(json_str)
    
    urls_to_check = [] # tuples of (url, key)
    for chap in data:
        for p in chap.get('problems', []):
            for key in ['gfg', 'yt']:
                url = p.get(key)
                if url and url.startswith('http'):
                    urls_to_check.append((url, key, p['id']))
            if p.get('lc'):
                urls_to_check.append((f"https://leetcode.com/problems/{p['lc']}/", 'lc', p['id']))
                    
    print(f"Checking {len(urls_to_check)} unique URLs...")
    
    # We will process in batches to avoid overwhelming servers
    broken_entries = []
    
    async with aiohttp.ClientSession() as session:
        chunk_size = 50
        for i in range(0, len(urls_to_check), chunk_size):
            chunk = urls_to_check[i:i+chunk_size]
            tasks = [check_url(session, u, k) for u, k, pid in chunk]
            results = await asyncio.gather(*tasks)
            for j, (url, key, is_ok) in enumerate(results):
                if not is_ok:
                    pid = chunk[j][2]
                    broken_entries.append((pid, key, url))
            print(f"Processed {min(i+chunk_size, len(urls_to_check))}/{len(urls_to_check)}")

    print(f"Found {len(broken_entries)} broken entries.")
    
    # Modify data
    changes = 0
    for chap in data:
        for p in chap.get('problems', []):
            title = p.get('name', '')
            for pid, key, url in broken_entries:
                if p['id'] == pid:
                    query = urllib.parse.quote(f"{title} data structures algorithm")
                    if key == 'lc':
                        # if lc is broken, we must just remove the lc link so it doesn't try to link to leetcode
                        # but we can't put a full url in lc because dsa.html constructs it: `https://leetcode.com/problems/${p.lc}/`
                        # So we can set it to null and maybe add a google search in gfg instead.
                        # Wait, user said "just kee as google serch one"
                        p['lc'] = None
                        p['gfg'] = f"https://www.google.com/search?q={query}"
                    else:
                        p[key] = f"https://www.google.com/search?q={query}"
                    changes += 1

    if changes > 0:
        new_json_str = json.dumps(data, indent=2)
        new_content = content[:start_idx + 17] + new_json_str + content[end_idx:]
        with open('dsa.html', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {changes} links in dsa.html")
    else:
        print("No changes made.")

if __name__ == '__main__':
    asyncio.run(main())
