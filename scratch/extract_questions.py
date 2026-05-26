import re

html_path = "/Users/sai2005/Downloads/gitprojects/roadmap/interview.html"
output_path = "/Users/sai2005/Downloads/gitprojects/roadmap/backend-&-ai-engineering-coach/src/data/questionsDb.ts"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Locate QUESTIONS_DB
db_start = content.find("const QUESTIONS_DB = [")
if db_start == -1:
    print("Could not find start of QUESTIONS_DB")
    exit(1)

# Find the matching closing bracket for QUESTIONS_DB
db_end = content.find("];", db_start)
if db_end == -1:
    print("Could not find end of QUESTIONS_DB")
    exit(1)

db_text = content[db_start:db_end]

# Find all blocks wrapped in curly braces
# Since ans: `...` can have nested curly braces (unlikely, but possible),
# we can find blocks between { and } that contain "id: "
blocks = []
pos = 0
while True:
    start = db_text.find("{", pos)
    if start == -1:
        break
    # Find matching }
    # Since there are no nested braces inside the question objects (only standard HTML tables/lists/paragraphs),
    # we can find the next }
    end = db_text.find("}", start)
    if end == -1:
        break
    blocks.append(db_text[start:end+1])
    pos = end + 1

print(f"Found {len(blocks)} raw blocks in QUESTIONS_DB")

questions = []
for b in blocks:
    id_match = re.search(r"id:\s*(\d+)", b)
    sec_match = re.search(r"section:\s*(\d+)", b)
    tier1_match = re.search(r"tier1:\s*(true|false)", b)
    
    if not id_match or not sec_match:
        continue
        
    qid = int(id_match.group(1))
    section = int(sec_match.group(1))
    tier1 = tier1_match.group(1) == "true" if tier1_match else False
    
    # Extract q
    # q can be single double quote or backtick
    q_match = re.search(r"q:\s*(['\"`])(.*?)\1", b, re.DOTALL)
    if q_match:
        q = q_match.group(2)
    else:
        # fallback
        print(f"Warning: q not found for id {qid}")
        q = ""
        
    # Extract ans
    ans_match = re.search(r"ans:\s*(['\"`])(.*?)\1", b, re.DOTALL)
    if ans_match:
        ans = ans_match.group(2)
    else:
        # Try finding everything after ans: up to the end of the block (excluding closing brace and trailing comma)
        # Let's search for "ans: "
        ans_idx = b.find("ans:")
        if ans_idx != -1:
            ans_part = b[ans_idx + 4:].strip()
            # It starts with a quote/backtick
            quote_char = ans_part[0]
            if quote_char in ["'", '"', "`"]:
                end_quote = ans_part.find(quote_char, 1)
                ans = ans_part[1:end_quote]
            else:
                ans = ans_part
        else:
            print(f"Warning: ans not found for id {qid}")
            ans = ""
            
    questions.append({
        "id": qid,
        "section": section,
        "tier1": tier1,
        "q": q,
        "ans": ans
    })

print(f"Parsed {len(questions)} questions successfully.")

# Verify completeness
ids = [q["id"] for q in questions]
missing = [i for i in range(1, 251) if i not in ids]
if missing:
    print(f"Warning: Missing IDs from 1 to 250: {missing}")

# Write to TypeScript file
ts_output = """export interface InterviewQuestion {
  id: number;
  section: number;
  tier1: boolean;
  q: string;
  ans: string;
}

export const QUESTIONS_DB: InterviewQuestion[] = [
"""

for q in questions:
    ans_escaped = q["ans"].replace("`", "\\`").replace("${", "\\${")
    q_escaped = q["q"].replace('"', '\\"')
    ts_output += f"  {{\n    id: {q['id']},\n    section: {q['section']},\n    tier1: {str(q['tier1']).lower()},\n    q: \"{q_escaped}\",\n    ans: `{ans_escaped}`\n  }},\n"

ts_output += "];\n"

with open(output_path, "w", encoding="utf-8") as f:
    f.write(ts_output)

print(f"Successfully wrote {len(questions)} questions to {output_path}")
