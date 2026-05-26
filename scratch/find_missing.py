import re

html_path = "/Users/sai2005/Downloads/gitprojects/roadmap/interview.html"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Let's find all occurrences of "id: <number>" inside the QUESTIONS_DB array in the file
matches = re.findall(r"id:\s*(\d+)", content)
# Convert to ints and filter out any duplicates or non-database IDs
all_ids = sorted(list(set([int(x) for x in matches if int(x) <= 250])))

print("Total IDs found by simple search:", len(all_ids))

# Let's check which numbers between 1 and 250 are missing
missing = []
for i in range(1, 251):
    if i not in all_ids:
        missing.append(i)

print("Missing IDs from 1 to 250:", missing)
