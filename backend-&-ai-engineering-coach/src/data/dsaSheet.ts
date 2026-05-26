export interface DSAProblem {
  id: number;
  name: string;
  lc: string | null;
  gfg: string | null;
  diff: 'Easy' | 'Medium' | 'Hard';
  yt: string | null;
}

export interface DSAChapter {
  id: string;
  num: number;
  title: string;
  problems: DSAProblem[];
}

export const DSA_CHAPTERS: DSAChapter[] = [
  {
    "id": "math",
    "num": 1,
    "title": "Math & Number Theory",
    "problems": [
      {
        "id": 261,
        "name": "Count Digits in a Number",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/count-digits-in-a-number/",
        "diff": "Easy",
        "yt": "https://youtu.be/1xNbjMdbjug"
      },
      {
        "id": 262,
        "name": "Reverse a Number",
        "lc": "reverse-integer",
        "gfg": "https://takeuforward.org/maths/reverse-digits-of-a-number",
        "diff": "Easy",
        "yt": "https://youtu.be/1xNbjMdbjug?t=930"
      },
      {
        "id": 263,
        "name": "Palindrome Number",
        "lc": "palindrome-number",
        "gfg": "https://takeuforward.org/data-structure/check-if-a-number-is-palindrome-or-not/",
        "diff": "Easy",
        "yt": "https://youtu.be/1xNbjMdbjug?t=1230"
      },
      {
        "id": 264,
        "name": "Armstrong Number",
        "lc": "armstrong-number",
        "gfg": "https://www.geeksforgeeks.org/program-for-armstrong-numbers/",
        "diff": "Easy",
        "yt": "https://youtu.be/1xNbjMdbjug?t=1418"
      },
      {
        "id": 265,
        "name": "Print All Divisors of N",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/find-all-divisors-of-a-natural-number-set-2/",
        "diff": "Easy",
        "yt": "https://youtu.be/1xNbjMdbjug?t=1580"
      },
      {
        "id": 266,
        "name": "Check if N is Prime",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/primality-test-set-1-introduction-and-school-method/",
        "diff": "Easy",
        "yt": "https://youtu.be/1xNbjMdbjug?t=2381"
      },
      {
        "id": 267,
        "name": "GCD / HCF \u2014 Euclidean Algorithm",
        "lc": "find-greatest-common-divisor-of-array",
        "gfg": "https://takeuforward.org/data-structure/find-gcd-of-two-numbers/",
        "diff": "Easy",
        "yt": "https://youtu.be/1xNbjMdbjug?t=2684"
      },
      {
        "id": 268,
        "name": "Count Primes (Sieve of Eratosthenes)",
        "lc": "count-primes",
        "gfg": "https://www.geeksforgeeks.org/sieve-of-eratosthenes/",
        "diff": "Medium",
        "yt": "https://youtu.be/g5Fuxn_AvSk?si=fv6Q-Po7wrMW0a5n"
      },
      {
        "id": 269,
        "name": "LCM of Two Numbers",
        "lc": "count-good-numbers",
        "gfg": "https://www.geeksforgeeks.org/program-to-find-lcm-of-two-numbers/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=1xNbjMdbjug"
      },
      {
        "id": 270,
        "name": "Excel Sheet Column Number",
        "lc": "excel-sheet-column-number",
        "gfg": "https://www.geeksforgeeks.org/find-excel-column-number-given-column-title/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=gKxH9_wD88A"
      },
      {
        "id": 271,
        "name": "Pow(x, n) \u2014 Fast Exponentiation",
        "lc": "powx-n",
        "gfg": "https://takeuforward.org/data-structure/implement-powxn-x-raised-to-the-power-n/",
        "diff": "Medium",
        "yt": "https://youtu.be/l0YC3876qxg"
      },
      {
        "id": 272,
        "name": "Majority Element (n/3 occurrences)",
        "lc": "majority-element-ii",
        "gfg": "https://takeuforward.org/data-structure/majority-elementsn-3-times-find-the-elements-that-appears-more-than-n-3-times-in-the-array/",
        "diff": "Medium",
        "yt": "https://youtu.be/vwZj1K0e9U8"
      },
      {
        "id": 273,
        "name": "Frequency of Each Element in Array",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/counting-frequencies-of-array-elements/",
        "diff": "Easy",
        "yt": "https://youtu.be/37E9ckMDdTk?t=526"
      },
      {
        "id": 274,
        "name": "Longest Subarray with Sum 0",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/find-the-largest-subarray-with-0-sum/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=xmguZ6GbatA&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=23"
      },
      {
        "id": 374,
        "name": "Set Mismatch",
        "lc": "set-mismatch",
        "gfg": "https://www.geeksforgeeks.org/set-mismatch-find-two-elements-occurring-twice-missing/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=2eS5WshN8_s"
      },
      {
        "id": 375,
        "name": "Minimum Deletions to Make Array Divisible",
        "lc": "minimum-deletions-to-make-array-divisible",
        "gfg": "https://www.geeksforgeeks.org/minimum-deletions-to-make-array-divisible/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=kYJzX8Z5ZgM"
      },
      {
        "id": 275,
        "name": "Count Subarrays with Sum Divisible by K",
        "lc": "subarray-sums-divisible-by-k",
        "gfg": "https://takeuforward.org/arrays/count-subarray-sum-equals-k/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=xvNwoz-ufXA&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&index=32"
      }
    ]
  },
  {
    "id": "sorting",
    "num": 2,
    "title": "Sorting Algorithms",
    "problems": [
      {
        "id": 276,
        "name": "Selection Sort",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/selection-sort/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=HGk_ypEuS24"
      },
      {
        "id": 277,
        "name": "Bubble Sort",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/bubble-sort/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=HGk_ypEuS24"
      },
      {
        "id": 278,
        "name": "Insertion Sort",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/insertion-sort/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=HGk_ypEuS24"
      },
      {
        "id": 279,
        "name": "Merge Sort",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/merge-sort/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=ogjf7ORKfd8"
      },
      {
        "id": 280,
        "name": "Quick Sort",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/quick-sort/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=WIrA4YexLRQ"
      },
      {
        "id": 281,
        "name": "Heap Sort",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/heap-sort/",
        "diff": "Medium",
        "yt": "https://youtu.be/5lZ0iJMrUMk"
      },
      {
        "id": 282,
        "name": "Counting Sort",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/counting-sort/",
        "diff": "Easy",
        "yt": "https://youtu.be/1xNbjMdbjug"
      }
    ]
  },
  {
    "id": "recursion",
    "num": 3,
    "title": "Recursion Basics",
    "problems": [
      {
        "id": 283,
        "name": "Print 1 to N using Recursion",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/print-1-to-n-without-using-loops/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=un6PLygfXrA&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=2"
      },
      {
        "id": 284,
        "name": "Print N to 1 using Recursion",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/program-print-n-1-without-loop/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=un6PLygfXrA&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=2"
      },
      {
        "id": 285,
        "name": "Factorial of N",
        "lc": "factorial-trailing-zeroes",
        "gfg": "https://takeuforward.org/data-structure/factorial-of-a-number-iterative-and-recursive/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=69ZCDFy-OUo&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=3"
      },
      {
        "id": 286,
        "name": "Fibonacci Number",
        "lc": "fibonacci-number",
        "gfg": "https://takeuforward.org/arrays/print-fibonacci-series-up-to-nth-term/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=kvRjNm4rVBE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=5"
      },
      {
        "id": 287,
        "name": "Reverse an Array",
        "lc": "reverse-string",
        "gfg": "https://takeuforward.org/data-structure/reverse-a-given-array/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=twuC1F6gLI8&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=4"
      },
      {
        "id": 288,
        "name": "Check if String is Palindrome (Recursion)",
        "lc": "valid-palindrome",
        "gfg": "https://takeuforward.org/data-structure/check-if-the-given-string-is-palindrome-or-not/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=twuC1F6gLI8&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=4"
      },
      {
        "id": 289,
        "name": "Sum of First N Numbers",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/sum-of-natural-numbers-using-recursion/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=69ZCDFy-OUo&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=3"
      },
      {
        "id": 290,
        "name": "Multiple Recursion Calls (Fibonacci Tree)",
        "lc": "fibonacci-number",
        "gfg": "https://takeuforward.org/arrays/print-fibonacci-series-up-to-nth-term/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=kvRjNm4rVBE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=5"
      },
      {
        "id": 291,
        "name": "Subsequences of a String (Recursion)",
        "lc": "subsets",
        "gfg": "https://takeuforward.org/data-structure/power-set-print-all-the-possible-subsequences-of-the-string/",
        "diff": "Medium",
        "yt": "https://youtu.be/b7AYbpM5YrE"
      },
      {
        "id": 292,
        "name": "Check if Array is Sorted (Recursion)",
        "lc": "check-if-array-is-sorted-and-rotated",
        "gfg": "https://takeuforward.org/data-structure/check-if-an-array-is-sorted/",
        "diff": "Easy",
        "yt": "https://youtu.be/37E9ckMDdTk?t=17224"
      }
    ]
  },
  {
    "id": "arr1",
    "num": 4,
    "title": "Arrays \u2014 Basics",
    "problems": [
      {
        "id": 1,
        "name": "Largest Element in Array",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/c-program-find-largest-element-array/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=37E9ckMDdTk"
      },
      {
        "id": 2,
        "name": "Second Largest Element",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/find-second-largest-element-array/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=37E9ckMDdTk"
      },
      {
        "id": 3,
        "name": "Check if Array is Sorted",
        "lc": "check-if-array-is-sorted-and-rotated",
        "gfg": "https://takeuforward.org/data-structure/check-if-an-array-is-sorted/",
        "diff": "Easy",
        "yt": "https://youtu.be/37E9ckMDdTk?t=17224"
      },
      {
        "id": 4,
        "name": "Remove Duplicates from Sorted Array",
        "lc": "remove-duplicates-from-sorted-array",
        "gfg": "https://takeuforward.org/data-structure/remove-duplicates-in-place-from-sorted-array/",
        "diff": "Easy",
        "yt": "https://youtu.be/37E9ckMDdTk?t=1887"
      },
      {
        "id": 5,
        "name": "Left Rotate Array by One",
        "lc": "rotate-array",
        "gfg": "https://www.geeksforgeeks.org/array-rotation/",
        "diff": "Easy",
        "yt": "https://youtu.be/wvcQg43_V8U?t=61"
      },
      {
        "id": 6,
        "name": "Left Rotate by K Places",
        "lc": "rotate-array",
        "gfg": "https://takeuforward.org/data-structure/left-rotate-the-array-by-one/",
        "diff": "Medium",
        "yt": "https://youtu.be/wvcQg43_V8U?t=61"
      },
      {
        "id": 7,
        "name": "Move Zeroes to End",
        "lc": "move-zeroes",
        "gfg": "https://takeuforward.org/data-structure/move-all-zeros-to-the-end-of-the-array/",
        "diff": "Easy",
        "yt": "https://youtu.be/wvcQg43_V8U?t=1633"
      },
      {
        "id": 8,
        "name": "Linear Search",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/linear-search/",
        "diff": "Easy",
        "yt": "https://youtu.be/wvcQg43_V8U?t=2465"
      },
      {
        "id": 9,
        "name": "Union of Two Sorted Arrays",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/union-and-intersection-of-two-sorted-arrays-2/",
        "diff": "Easy",
        "yt": "https://youtu.be/wvcQg43_V8U?t=2584"
      },
      {
        "id": 10,
        "name": "Intersection of Two Sorted Arrays",
        "lc": "intersection-of-two-arrays-ii",
        "gfg": "https://takeuforward.org/data-structure/binary-search-explained/",
        "diff": "Easy",
        "yt": "https://youtu.be/MHf6awe89xw"
      },
      {
        "id": 11,
        "name": "Missing Number",
        "lc": "missing-number",
        "gfg": "https://takeuforward.org/arrays/find-the-missing-number-in-an-array/",
        "diff": "Easy",
        "yt": "https://youtu.be/bYWLJb3vCWY?t=57"
      },
      {
        "id": 12,
        "name": "Max Consecutive Ones",
        "lc": "max-consecutive-ones",
        "gfg": "https://takeuforward.org/data-structure/count-maximum-consecutive-ones-in-the-array/",
        "diff": "Easy",
        "yt": "https://youtu.be/bYWLJb3vCWY?t=1124"
      },
      {
        "id": 13,
        "name": "Single Number",
        "lc": "single-number",
        "gfg": "https://takeuforward.org/arrays/find-the-number-that-appears-once-and-the-other-numbers-twice/",
        "diff": "Easy",
        "yt": "https://youtu.be/bYWLJb3vCWY?t=1369"
      }
    ]
  },
  {
    "id": "arr2",
    "num": 5,
    "title": "Arrays \u2014 Medium",
    "problems": [
      {
        "id": 14,
        "name": "Two Sum",
        "lc": "two-sum",
        "gfg": "https://takeuforward.org/data-structure/two-sum-check-if-a-pair-with-given-sum-exists-in-array/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=dRUpbt8vHpo"
      },
      {
        "id": 15,
        "name": "Sort 0s 1s and 2s (Dutch Flag)",
        "lc": "sort-colors",
        "gfg": "https://takeuforward.org/data-structure/sort-an-array-of-0s-1s-and-2s/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=oaVa-9wmpns"
      },
      {
        "id": 16,
        "name": "Majority Element (> n/2 times)",
        "lc": "majority-element",
        "gfg": "https://takeuforward.org/data-structure/find-the-majority-element-that-occurs-more-than-n-2-times/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=nP_ns3uSh80"
      },
      {
        "id": 17,
        "name": "Kadane's Algorithm \u2014 Max Subarray",
        "lc": "maximum-subarray",
        "gfg": "https://takeuforward.org/data-structure/kadanes-algorithm-maximum-subarray-sum-in-an-array/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=AHZpyENo7k4"
      },
      {
        "id": 18,
        "name": "Best Time to Buy and Sell Stock",
        "lc": "best-time-to-buy-and-sell-stock",
        "gfg": "https://takeuforward.org/data-structure/stock-buy-and-sell/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=excAOvwF_Wk"
      },
      {
        "id": 19,
        "name": "Rearrange Array by Sign",
        "lc": "rearrange-array-elements-by-sign",
        "gfg": "https://takeuforward.org/arrays/rearrange-array-elements-by-sign/",
        "diff": "Medium",
        "yt": "https://youtu.be/h4aBagy4Uok"
      },
      {
        "id": 20,
        "name": "Next Permutation",
        "lc": "next-permutation",
        "gfg": "https://takeuforward.org/data-structure/next_permutation-find-next-lexicographically-greater-permutation/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=JDOXKqF60RQ"
      },
      {
        "id": 21,
        "name": "Leaders in an Array",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/leaders-in-an-array/",
        "diff": "Easy",
        "yt": "https://youtu.be/cHrH9CQ8pmY"
      },
      {
        "id": 22,
        "name": "Longest Consecutive Sequence",
        "lc": "longest-consecutive-sequence",
        "gfg": "https://takeuforward.org/data-structure/longest-consecutive-sequence-in-an-array/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=qgizvmgeyUM"
      },
      {
        "id": 23,
        "name": "3 Sum",
        "lc": "3sum",
        "gfg": "https://takeuforward.org/data-structure/3-sum-find-triplets-that-add-up-to-a-zero/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=DhFh8Kw7ymk"
      },
      {
        "id": 24,
        "name": "Container With Most Water",
        "lc": "container-with-most-water",
        "gfg": "https://www.geeksforgeeks.org/container-with-most-water/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=UuiTKBwPgAo"
      },
      {
        "id": 25,
        "name": "Longest Subarray with Sum K",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/longest-sub-array-sum-k/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=xmguZ6GbatA&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=23"
      }
    ]
  },
  {
    "id": "arr3",
    "num": 6,
    "title": "Arrays \u2014 Hard",
    "problems": [
      {
        "id": 26,
        "name": "Trapping Rain Water",
        "lc": "trapping-rain-water",
        "gfg": "https://takeuforward.org/data-structure/trapping-rainwater/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=m18Hntz4go8"
      },
      {
        "id": 27,
        "name": "Set Matrix Zeroes",
        "lc": "set-matrix-zeroes",
        "gfg": "https://takeuforward.org/data-structure/set-matrix-zero/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=N0MgLvceX7M"
      },
      {
        "id": 28,
        "name": "Rotate Image 90\u00b0",
        "lc": "rotate-image",
        "gfg": "https://takeuforward.org/data-structure/rotate-image-by-90-degree/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=Y72QeX0Efxw"
      },
      {
        "id": 29,
        "name": "Spiral Matrix",
        "lc": "spiral-matrix",
        "gfg": "https://takeuforward.org/data-structure/spiral-traversal-of-matrix/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=3Zv61L2ugcs"
      },
      {
        "id": 30,
        "name": "Count Subarrays with Sum K",
        "lc": "subarray-sum-equals-k",
        "gfg": "https://takeuforward.org/arrays/count-subarray-sum-equals-k/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=xvNwoz-ufXA&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&index=32"
      },
      {
        "id": 31,
        "name": "Pascal's Triangle",
        "lc": "pascals-triangle",
        "gfg": "https://takeuforward.org/data-structure/program-to-generate-pascals-triangle/",
        "diff": "Easy",
        "yt": "https://youtu.be/bR7mQgwQ_o8"
      },
      {
        "id": 32,
        "name": "Merge Overlapping Intervals",
        "lc": "merge-intervals",
        "gfg": "https://takeuforward.org/data-structure/merge-overlapping-sub-intervals/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=IexN60k62jo"
      },
      {
        "id": 33,
        "name": "Merge Two Sorted Arrays (In-place)",
        "lc": "merge-sorted-array",
        "gfg": "https://takeuforward.org/data-structure/merge-two-sorted-arrays-without-extra-space/",
        "diff": "Easy",
        "yt": "https://youtu.be/n7uwj04E0I4"
      },
      {
        "id": 34,
        "name": "Find the Duplicate Number",
        "lc": "find-the-duplicate-number",
        "gfg": "https://takeuforward.org/data-structure/find-the-repeating-and-missing-numbers/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=32Ll35mhWg0"
      },
      {
        "id": 35,
        "name": "Repeat and Missing Number",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/",
        "diff": "Hard",
        "yt": "https://youtu.be/2D0D8HE6uak"
      },
      {
        "id": 36,
        "name": "Count Inversions (Merge Sort)",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/counting-inversions/",
        "diff": "Hard",
        "yt": "https://youtu.be/AseUmwVNaoY"
      },
      {
        "id": 37,
        "name": "Reverse Pairs",
        "lc": "reverse-pairs",
        "gfg": "https://takeuforward.org/data-structure/count-reverse-pairs/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=S0KWFrNuOFw"
      },
      {
        "id": 38,
        "name": "Maximum Product Subarray",
        "lc": "maximum-product-subarray",
        "gfg": "https://takeuforward.org/data-structure/maximum-product-subarray-in-an-array/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=hnswaLJvr6g"
      },
      {
        "id": 39,
        "name": "4 Sum",
        "lc": "4sum",
        "gfg": "https://takeuforward.org/data-structure/4-sum-find-quads-that-add-up-to-a-target-value/",
        "diff": "Medium",
        "yt": "https://youtu.be/eD95WRfh81c"
      },
      {
        "id": 40,
        "name": "Count Subarrays with XOR = K",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/count-number-subarrays-given-xor/",
        "diff": "Medium",
        "yt": "https://youtu.be/eZr-6p0B7ME"
      }
    ]
  },
  {
    "id": "sw",
    "num": 7,
    "title": "Sliding Window & Two Pointers",
    "problems": [
      {
        "id": 41,
        "name": "Longest Substring Without Repeating Chars",
        "lc": "longest-substring-without-repeating-characters",
        "gfg": "https://takeuforward.org/data-structure/length-of-longest-substring-without-any-repeating-character/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=oFBDd3pudPE"
      },
      {
        "id": 42,
        "name": "Max Consecutive Ones III",
        "lc": "max-consecutive-ones-iii",
        "gfg": "https://www.geeksforgeeks.org/maximum-consecutive-ones-or-zeros-in-a-binary-array-by-flipping-k-zeros/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=3E4JBHSLpYk"
      },
      {
        "id": 43,
        "name": "Fruit Into Baskets",
        "lc": "fruit-into-baskets",
        "gfg": "https://www.geeksforgeeks.org/fruits-into-baskets/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=e3bs0uA1NhQ"
      },
      {
        "id": 44,
        "name": "Longest Substring with K Distinct Chars",
        "lc": "longest-substring-with-at-most-k-distinct-characters",
        "gfg": "https://www.geeksforgeeks.org/find-the-longest-substring-with-k-unique-characters-in-a-given-string/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=teM9ZsVyqtg"
      },
      {
        "id": 45,
        "name": "Number of Subarrays with Product < K",
        "lc": "subarray-product-less-than-k",
        "gfg": "https://takeuforward.org/data-structure/count-the-number-of-subarrays-with-given-xor-k/",
        "diff": "Medium",
        "yt": "https://youtu.be/eZr-6p0B7ME"
      },
      {
        "id": 46,
        "name": "Minimum Size Subarray Sum",
        "lc": "minimum-size-subarray-sum",
        "gfg": "https://www.geeksforgeeks.org/minimum-length-subarray-sum-greater-given-value/",
        "diff": "Medium",
        "yt": "https://youtu.be/XnMdNUkX6VM?si=Nyt8EveeLUg8lmty"
      },
      {
        "id": 47,
        "name": "Longest Repeating Character Replacement",
        "lc": "longest-repeating-character-replacement",
        "gfg": "https://www.geeksforgeeks.org/maximum-length-of-a-substring-with-at-most-k-changes/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=gqXU1UyA8pk"
      },
      {
        "id": 48,
        "name": "Binary Subarrays with Sum",
        "lc": "binary-subarrays-with-sum",
        "gfg": "https://www.geeksforgeeks.org/number-subarrays-sum-less-equal-k/",
        "diff": "Medium",
        "yt": "https://youtu.be/XnMdNUkX6VM?si=Nyt8EveeLUg8lmty"
      },
      {
        "id": 49,
        "name": "Max Points from Cards",
        "lc": "maximum-points-you-can-obtain-from-cards",
        "gfg": "https://www.geeksforgeeks.org/maximum-points-you-can-obtain-from-cards/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=pBWCOCS636U"
      },
      {
        "id": 50,
        "name": "Number of Subarrays with At Most K",
        "lc": "subarrays-with-k-different-integers",
        "gfg": "https://www.geeksforgeeks.org/subarrays-with-k-different-integers/",
        "diff": "Hard",
        "yt": "https://youtu.be/7wYGbV_LsX4?si=KWa48RgLDCvdNqRb"
      },
      {
        "id": 51,
        "name": "Minimum Window Substring",
        "lc": "minimum-window-substring",
        "gfg": "https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=WJaij9ffZIY"
      }
    ]
  },
  {
    "id": "bs",
    "num": 8,
    "title": "Binary Search",
    "problems": [
      {
        "id": 52,
        "name": "Binary Search",
        "lc": "binary-search",
        "gfg": "https://takeuforward.org/data-structure/binary-search-explained/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=MHf6awe89xw"
      },
      {
        "id": 53,
        "name": "Lower Bound / First Occurrence",
        "lc": "find-first-and-last-position-of-element-in-sorted-array",
        "gfg": "https://takeuforward.org/arrays/implement-lower-bound-bs-2/",
        "diff": "Medium",
        "yt": "https://youtu.be/6zhGS79oQ4k"
      },
      {
        "id": 54,
        "name": "Search Insert Position",
        "lc": "search-insert-position",
        "gfg": "https://takeuforward.org/arrays/search-insert-position/",
        "diff": "Easy",
        "yt": "https://youtu.be/6zhGS79oQ4k"
      },
      {
        "id": 55,
        "name": "Search in Rotated Sorted Array",
        "lc": "search-in-rotated-sorted-array",
        "gfg": "https://takeuforward.org/data-structure/search-element-in-a-rotated-sorted-array/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=5qGrJbHhqFs"
      },
      {
        "id": 56,
        "name": "Minimum in Rotated Sorted Array",
        "lc": "find-minimum-in-rotated-sorted-array",
        "gfg": "https://takeuforward.org/data-structure/minimum-in-rotated-sorted-array/",
        "diff": "Medium",
        "yt": "https://youtu.be/nhEMDKMB44g"
      },
      {
        "id": 57,
        "name": "Single Element in Sorted Array",
        "lc": "single-element-in-a-sorted-array",
        "gfg": "https://takeuforward.org/data-structure/search-single-element-in-a-sorted-array/",
        "diff": "Medium",
        "yt": "https://youtu.be/AZOmHuHadxQ"
      },
      {
        "id": 58,
        "name": "Find Peak Element",
        "lc": "find-peak-element",
        "gfg": "https://takeuforward.org/data-structure/peak-element-in-array/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=cXxmbemS6XM"
      },
      {
        "id": 59,
        "name": "Sqrt of a Number",
        "lc": "sqrtx",
        "gfg": "https://www.geeksforgeeks.org/square-root-of-an-integer/",
        "diff": "Easy",
        "yt": "https://youtu.be/nttpF8kwgd4?si=x9o8PsYaA2XVZ9rV"
      },
      {
        "id": 60,
        "name": "Koko Eating Bananas",
        "lc": "koko-eating-bananas",
        "gfg": "https://takeuforward.org/binary-search/koko-eating-bananas/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=qyfekrNni90"
      },
      {
        "id": 61,
        "name": "Minimum Days to Make Bouquets",
        "lc": "minimum-number-of-days-to-make-m-bouquets",
        "gfg": "https://takeuforward.org/arrays/minimum-days-to-make-m-bouquets/",
        "diff": "Medium",
        "yt": "https://youtu.be/TXAuxeYBTdg"
      },
      {
        "id": 62,
        "name": "Aggressive Cows",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/aggressive-cows-2/",
        "diff": "Hard",
        "yt": "https://youtu.be/R_Mfw4ew-Vo"
      },
      {
        "id": 63,
        "name": "Book Allocation Problem",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/allocate-minimum-number-pages/",
        "diff": "Hard",
        "yt": "https://youtu.be/Z0hwjftStI4"
      },
      {
        "id": 64,
        "name": "Split Array Largest Sum",
        "lc": "split-array-largest-sum",
        "gfg": "https://takeuforward.org/arrays/split-array-largest-sum/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=thUd_WJn6wk&list=PLgUwDviBIf0pMFMWuuvDNMAkoQFi-h0ZF&index=20"
      },
      {
        "id": 65,
        "name": "Painter's Partition",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/painters-partition-problem/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=thUd_WJn6wk&list=PLgUwDviBIf0pMFMWuuvDNMAkoQFi-h0ZF&index=20"
      },
      {
        "id": 66,
        "name": "Kth Missing Positive Number",
        "lc": "kth-missing-positive-number",
        "gfg": "https://takeuforward.org/arrays/kth-missing-positive-number/",
        "diff": "Easy",
        "yt": "https://youtu.be/uZ0N_hZpyps"
      },
      {
        "id": 67,
        "name": "Kth Element of 2 Sorted Arrays",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/k-th-element-two-sorted-arrays/",
        "diff": "Medium",
        "yt": "https://youtu.be/D1oDwWCq50g"
      },
      {
        "id": 68,
        "name": "Median of Two Sorted Arrays",
        "lc": "median-of-two-sorted-arrays",
        "gfg": "https://takeuforward.org/data-structure/median-of-two-sorted-arrays-of-different-sizes/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=C2rRzz-JDk8"
      },
      {
        "id": 69,
        "name": "Search a 2D Matrix",
        "lc": "search-a-2d-matrix",
        "gfg": "https://takeuforward.org/data-structure/search-in-a-sorted-2d-matrix/",
        "diff": "Medium",
        "yt": "https://youtu.be/JXU4Akft7yk"
      },
      {
        "id": 352,
        "name": "Find in Mountain Array",
        "lc": "find-in-mountain-array",
        "gfg": "https://takeuforward.org/arrays/find-the-missing-number-in-an-array/",
        "diff": "Hard",
        "yt": "https://youtu.be/bYWLJb3vCWY?t=57"
      },
      {
        "id": 70,
        "name": "Row with Maximum 1s",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/find-the-row-with-maximum-number-1s/",
        "diff": "Easy",
        "yt": "https://youtu.be/SCz-1TtYxDI"
      }
    ]
  },
  {
    "id": "strings",
    "num": 9,
    "title": "Strings",
    "problems": [
      {
        "id": 71,
        "name": "Reverse Words in a String",
        "lc": "reverse-words-in-a-string",
        "gfg": "https://takeuforward.org/data-structure/reverse-words-in-a-string/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=gM70v156G8Y"
      },
      {
        "id": 72,
        "name": "Valid Palindrome",
        "lc": "valid-palindrome",
        "gfg": "https://takeuforward.org/data-structure/check-if-the-given-string-is-palindrome-or-not/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=twuC1F6gLI8&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=4"
      },
      {
        "id": 73,
        "name": "Roman to Integer",
        "lc": "roman-to-integer",
        "gfg": "https://www.geeksforgeeks.org/converting-roman-numerals-decimal-lying-1-3999/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=3y4Z7Gq1vUI"
      },
      {
        "id": 74,
        "name": "Integer to Roman",
        "lc": "integer-to-roman",
        "gfg": "https://www.geeksforgeeks.org/converting-decimal-roman-numerals/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=3y4Z7Gq1vUI"
      },
      {
        "id": 75,
        "name": "Implement Atoi",
        "lc": "string-to-integer-atoi",
        "gfg": "https://www.geeksforgeeks.org/write-your-own-atoi/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=2iI_qZ-DypQ"
      },
      {
        "id": 76,
        "name": "Valid Anagram",
        "lc": "valid-anagram",
        "gfg": "https://takeuforward.org/data-structure/check-if-two-strings-are-anagrams-of-each-other/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=vyPvVfbk2Q8"
      },
      {
        "id": 77,
        "name": "Group Anagrams",
        "lc": "group-anagrams",
        "gfg": "https://takeuforward.org/data-structure/check-if-two-strings-are-anagrams-of-each-other/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=vzdNOK2oB2E"
      },
      {
        "id": 78,
        "name": "Longest Common Prefix",
        "lc": "longest-common-prefix",
        "gfg": "https://www.geeksforgeeks.org/longest-common-prefix-using-word-by-word-matching/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=gKOXy3nC1tA"
      },
      {
        "id": 79,
        "name": "Decode String",
        "lc": "decode-string",
        "gfg": "https://www.geeksforgeeks.org/decode-string-recurrence-relation/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=qB0zZpBJlh8"
      },
      {
        "id": 80,
        "name": "Isomorphic Strings",
        "lc": "isomorphic-strings",
        "gfg": "https://www.geeksforgeeks.org/check-if-two-given-strings-are-isomorphic-to-each-other/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=2yQbsL9T4P4"
      },
      {
        "id": 81,
        "name": "Longest Palindromic Substring",
        "lc": "longest-palindromic-substring",
        "gfg": "https://www.geeksforgeeks.org/longest-palindromic-substring/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=XYQecbcd6_c"
      },
      {
        "id": 82,
        "name": "Count Palindromic Substrings",
        "lc": "palindromic-substrings",
        "gfg": "https://www.geeksforgeeks.org/count-palindromic-substrings-string/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=XmSOWnL6T_I"
      },
      {
        "id": 83,
        "name": "KMP Algorithm (Pattern Matching)",
        "lc": "find-the-index-of-the-first-occurrence-in-a-string",
        "gfg": "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=qQ8vS_n5sM0"
      },
      {
        "id": 84,
        "name": "Rabin-Karp Algorithm",
        "lc": "find-the-index-of-the-first-occurrence-in-a-string",
        "gfg": "https://takeuforward.org/data-structure/kahns-algorithm-topological-sort-algorithm-bfs-g-22/",
        "diff": "Hard",
        "yt": "https://youtu.be/73sneFXuTEg"
      },
      {
        "id": 85,
        "name": "Minimum Window Substring",
        "lc": "minimum-window-substring",
        "gfg": "https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=WJaij9ffZIY"
      },
      {
        "id": 86,
        "name": "String Compression",
        "lc": "string-compression",
        "gfg": "https://www.geeksforgeeks.org/run-length-encoding-in-python/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=3M_E7wZ1k_4"
      }
    ]
  },
  {
    "id": "ll",
    "num": 10,
    "title": "Linked List",
    "problems": [
      {
        "id": 87,
        "name": "Reverse a Linked List",
        "lc": "reverse-linked-list",
        "gfg": "https://takeuforward.org/data-structure/reverse-a-linked-list/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=iRtLEoL-r-g"
      },
      {
        "id": 88,
        "name": "Middle of Linked List",
        "lc": "middle-of-the-linked-list",
        "gfg": "https://takeuforward.org/data-structure/find-middle-element-in-a-linked-list/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=7LjQ57RqgEc"
      },
      {
        "id": 89,
        "name": "Detect Loop (Floyd Cycle)",
        "lc": "linked-list-cycle",
        "gfg": "https://takeuforward.org/data-structure/detect-a-cycle-in-a-linked-list/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=wiOo4DC5GGA"
      },
      {
        "id": 90,
        "name": "Find Start of Loop",
        "lc": "linked-list-cycle-ii",
        "gfg": "https://takeuforward.org/data-structure/starting-point-of-loop-in-a-linked-list/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=2Kn3HbyO8_I"
      },
      {
        "id": 91,
        "name": "Palindrome Linked List",
        "lc": "palindrome-linked-list",
        "gfg": "https://takeuforward.org/data-structure/check-if-given-linked-list-is-plaindrome/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=-DtNInqFUXs"
      },
      {
        "id": 92,
        "name": "Nth Node from End",
        "lc": "remove-nth-node-from-end-of-list",
        "gfg": "https://takeuforward.org/data-structure/remove-n-th-node-from-the-end-of-a-linked-list/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=Lhu3MsXZy-Q"
      },
      {
        "id": 93,
        "name": "Reverse Nodes in k-Group",
        "lc": "reverse-nodes-in-k-group",
        "gfg": "https://takeuforward.org/data-structure/reverse-linked-list-in-groups-of-size-k/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=lIar1skcQYI"
      },
      {
        "id": 94,
        "name": "Rotate List",
        "lc": "rotate-list",
        "gfg": "https://takeuforward.org/data-structure/rotate-a-linked-list/",
        "diff": "Medium",
        "yt": "https://youtu.be/uT7YI7XbTY8?si=ZaChW3a68c_v54Is"
      },
      {
        "id": 95,
        "name": "Copy List with Random Pointer",
        "lc": "copy-list-with-random-pointer",
        "gfg": "https://takeuforward.org/data-structure/clone-linked-list-with-random-and-next-pointer/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=VNf6VynTyUM"
      },
      {
        "id": 96,
        "name": "Flatten a Multilevel Linked List",
        "lc": "flatten-a-multilevel-doubly-linked-list",
        "gfg": "https://takeuforward.org/data-structure/flatten-binary-tree-to-linked-list/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=ysytSSXpAI0"
      },
      {
        "id": 97,
        "name": "Sort Linked List (Merge Sort)",
        "lc": "sort-list",
        "gfg": "https://takeuforward.org/linked-list/sort-a-linked-list",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=8ocB7a_c-Cc"
      },
      {
        "id": 98,
        "name": "Add Two Numbers (Linked List)",
        "lc": "add-two-numbers",
        "gfg": "https://takeuforward.org/data-structure/add-two-numbers-represented-as-linked-lists/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=LDFZm4iB7tA"
      },
      {
        "id": 99,
        "name": "Intersection of Two Linked Lists",
        "lc": "intersection-of-two-linked-lists",
        "gfg": "https://takeuforward.org/data-structure/find-intersection-of-two-linked-lists/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=0DYoPz2Tpt4"
      },
      {
        "id": 100,
        "name": "Delete Node without Head Reference",
        "lc": "delete-node-in-a-linked-list",
        "gfg": "https://takeuforward.org/data-structure/delete-last-node-of-linked-list/",
        "diff": "Medium",
        "yt": "https://youtu.be/VaECK03Dz-g?si=CRaBHbOo2bHFbOT5"
      },
      {
        "id": 300,
        "name": "Introduction to Doubly Linked List",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/doubly-linked-list/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=0eKMU10uEDI"
      },
      {
        "id": 301,
        "name": "Insert in Doubly Linked List",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/doubly-linked-list/",
        "diff": "Easy",
        "yt": "https://youtu.be/VaECK03Dz-g?si=vHSwdf9jhE05adKM&t=1934"
      },
      {
        "id": 302,
        "name": "Delete in Doubly Linked List",
        "lc": "delete-node-in-a-linked-list",
        "gfg": "https://www.geeksforgeeks.org/delete-a-node-in-a-doubly-linked-list/",
        "diff": "Easy",
        "yt": "https://youtu.be/VaECK03Dz-g?si=CRaBHbOo2bHFbOT5"
      },
      {
        "id": 303,
        "name": "Reverse Doubly Linked List",
        "lc": "reverse-linked-list",
        "gfg": "https://www.geeksforgeeks.org/reverse-a-doubly-linked-list/",
        "diff": "Easy",
        "yt": "https://youtu.be/D2vI2DNJGd8?si=RCaLSx01qR21IBdh"
      },
      {
        "id": 304,
        "name": "Pairs with Given Sum in DLL",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/find-pairs-given-sum-doubly-linked-list/",
        "diff": "Medium",
        "yt": "https://youtu.be/YitR4dQsddE?si=iZAC259hdngV_OxC"
      },
      {
        "id": 305,
        "name": "Remove Duplicates from Sorted DLL",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/remove-duplicates-sorted-doubly-linked-list/",
        "diff": "Easy",
        "yt": "https://youtu.be/YJKVTnOJXSY?si=AsZoNUoewetsBjr0"
      },
      {
        "id": 351,
        "name": "Merge Two Sorted Lists",
        "lc": "merge-two-sorted-lists",
        "gfg": "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=Xb4sra3Cg0U"
      },
      {
        "id": 352,
        "name": "Reorder List",
        "lc": "reorder-list",
        "gfg": "https://www.geeksforgeeks.org/reorder-a-linked-list-in-place/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=mRIrTkI6fRY"
      },
      {
        "id": 353,
        "name": "Odd Even Linked List",
        "lc": "odd-even-linked-list",
        "gfg": "https://takeuforward.org/data-structure/segregate-even-and-odd-nodes-in-linkedlist",
        "diff": "Medium",
        "yt": "https://youtu.be/qf6qp7GzD5Q?si=JozAyXUdT8EJMSCQ"
      },
      {
        "id": 101,
        "name": "Add 1 to Number (Linked List)",
        "lc": "add-two-numbers",
        "gfg": "https://www.geeksforgeeks.org/add-1-number-represented-linked-list/",
        "diff": "Easy",
        "yt": "https://youtu.be/XmRrGzR6udg?si=VYuZYUcaVCrZCgpA"
      }
    ]
  },
  {
    "id": "stacks",
    "num": 11,
    "title": "Stacks & Queues",
    "problems": [
      {
        "id": 102,
        "name": "Implement Stack using Queue",
        "lc": "implement-stack-using-queues",
        "gfg": "https://takeuforward.org/data-structure/implement-stack-using-single-queue/",
        "diff": "Easy",
        "yt": "https://youtu.be/tqQ5fTamIN4?si=ofLt8Zt1ZvhikZ6w"
      },
      {
        "id": 103,
        "name": "Implement Queue using Stack",
        "lc": "implement-queue-using-stacks",
        "gfg": "https://takeuforward.org/data-structure/implement-queue-using-stack/",
        "diff": "Easy",
        "yt": "https://youtu.be/tqQ5fTamIN4?si=ofLt8Zt1ZvhikZ6w"
      },
      {
        "id": 104,
        "name": "Min Stack",
        "lc": "min-stack",
        "gfg": "https://takeuforward.org/data-structure/implement-min-stack-o2n-and-on-space-complexity/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=V09NfaGf2ao"
      },
      {
        "id": 105,
        "name": "Valid Parentheses",
        "lc": "valid-parentheses",
        "gfg": "https://takeuforward.org/data-structure/check-for-balanced-parentheses/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=wkDfsKijrZ8"
      },
      {
        "id": 106,
        "name": "Next Greater Element I",
        "lc": "next-greater-element-i",
        "gfg": "https://takeuforward.org/data-structure/next-greater-element-using-stack/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=Du881K7Jtk8"
      },
      {
        "id": 107,
        "name": "Next Greater Element II (Circular)",
        "lc": "next-greater-element-ii",
        "gfg": "https://www.geeksforgeeks.org/next-greater-element-ii/",
        "diff": "Medium",
        "yt": "https://youtu.be/7PrncD7v9YQ?si=UkBc7eVy9HGlBpeW"
      },
      {
        "id": 108,
        "name": "Largest Rectangle in Histogram",
        "lc": "largest-rectangle-in-histogram",
        "gfg": "https://takeuforward.org/data-structure/area-of-largest-rectangle-in-histogram/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=vcv3REtIvEo"
      },
      {
        "id": 109,
        "name": "Maximal Rectangle",
        "lc": "maximal-rectangle",
        "gfg": "https://www.geeksforgeeks.org/maximal-rectangle-2/",
        "diff": "Hard",
        "yt": "https://youtu.be/ttVu6G7Ayik?si=RhyeKepNwjRUYp7A"
      },
      {
        "id": 110,
        "name": "Sliding Window Maximum",
        "lc": "sliding-window-maximum",
        "gfg": "https://takeuforward.org/data-structure/sliding-window-maximum/",
        "diff": "Hard",
        "yt": "https://youtu.be/NwBvene4Imo?si=eU1PY-bcQfk5wdog"
      },
      {
        "id": 111,
        "name": "LRU Cache",
        "lc": "lru-cache",
        "gfg": "https://takeuforward.org/data-structure/implement-lru-cache/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=xDEuM5qa0zg"
      },
      {
        "id": 112,
        "name": "LFU Cache",
        "lc": "lfu-cache",
        "gfg": "https://www.geeksforgeeks.org/lfu-cache-implementation/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=0PSB9y8ehbk"
      },
      {
        "id": 113,
        "name": "Celebrity Problem",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/the-celebrity-problem/",
        "diff": "Medium",
        "yt": "https://youtu.be/cEadsbTeze4?si=olXYfOs7l-SEn2zl"
      },
      {
        "id": 114,
        "name": "Stock Span Problem",
        "lc": "online-stock-span",
        "gfg": "https://www.geeksforgeeks.org/the-stock-span-problem/",
        "diff": "Medium",
        "yt": "https://youtu.be/eay-zoSRkVc?si=deNNe5i38BOAntha"
      },
      {
        "id": 115,
        "name": "Asteroid Collision",
        "lc": "asteroid-collision",
        "gfg": "https://www.geeksforgeeks.org/asteroid-collision/",
        "diff": "Medium",
        "yt": "https://youtu.be/_eYGqw_VDR4?si=YyxibcHq800RqgIQ"
      },
      {
        "id": 334,
        "name": "Sum of Subarray Minimums",
        "lc": "sum-of-subarray-minimums",
        "gfg": "https://www.geeksforgeeks.org/sum-of-minimum-elements-of-all-subarrays/",
        "diff": "Medium",
        "yt": "https://youtu.be/v0e8p9JCgRc?si=XAU7ekECgS5nboRw"
      },
      {
        "id": 335,
        "name": "Trapping Rain Water (Stack approach)",
        "lc": "trapping-rain-water",
        "gfg": "https://takeuforward.org/data-structure/trapping-rainwater/",
        "diff": "Hard",
        "yt": "https://youtu.be/1_5VuquLbXg?si=NFG6df318_6OtGvg"
      },
      {
        "id": 336,
        "name": "Remove K Digits to Make Smallest",
        "lc": "remove-k-digits",
        "gfg": "https://www.geeksforgeeks.org/build-lowest-number-by-removing-n-digits/",
        "diff": "Medium",
        "yt": "https://youtu.be/jmbuRzYPGrg?si=WN387gwQ7aXWkUao"
      },
      {
        "id": 337,
        "name": "Number of Visible People in Queue",
        "lc": "number-of-visible-people-in-queue",
        "gfg": "https://takeuforward.org/data-structure/number-of-provinces/",
        "diff": "Hard",
        "yt": "https://youtu.be/ACzkVtewUYA"
      },
      {
        "id": 354,
        "name": "Longest Valid Parentheses",
        "lc": "longest-valid-parentheses",
        "gfg": "https://www.geeksforgeeks.org/length-of-the-longest-valid-substring/",
        "diff": "Hard",
        "yt": "https://youtu.be/cHT6sG_hUZI?si=XRHeyh7jOaLaTy3g"
      },
      {
        "id": 355,
        "name": "Evaluate Reverse Polish Notation",
        "lc": "evaluate-reverse-polish-notation",
        "gfg": "https://www.geeksforgeeks.org/evaluate-the-value-of-an-arithmetic-expression-in-reverse-polish-notation-in-java/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=84BsI5V57D8"
      },
      {
        "id": 356,
        "name": "Basic Calculator",
        "lc": "basic-calculator",
        "gfg": "https://www.geeksforgeeks.org/program-to-calculate-value-of-an-expression/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=3AE0TAs27v8"
      },
      {
        "id": 116,
        "name": "Decode String",
        "lc": "decode-string",
        "gfg": "https://www.geeksforgeeks.org/decode-string-recurrence-relation/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=qB0zZpBJlh8"
      }
    ]
  },
  {
    "id": "trees",
    "num": 12,
    "title": "Binary Trees",
    "problems": [
      {
        "id": 117,
        "name": "Inorder Traversal (Iterative)",
        "lc": "binary-tree-inorder-traversal",
        "gfg": "https://takeuforward.org/data-structure/inorder-traversal-of-binary-tree/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=Z_NEgBgbRVI"
      },
      {
        "id": 118,
        "name": "Preorder Traversal (Iterative)",
        "lc": "binary-tree-preorder-traversal",
        "gfg": "https://takeuforward.org/data-structure/preorder-traversal-of-binary-tree/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=RlUu72JrOUM"
      },
      {
        "id": 119,
        "name": "Postorder Traversal (Iterative)",
        "lc": "binary-tree-postorder-traversal",
        "gfg": "https://takeuforward.org/data-structure/post-order-traversal-of-binary-tree/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=COQOU6klsBg"
      },
      {
        "id": 120,
        "name": "Level Order Traversal",
        "lc": "binary-tree-level-order-traversal",
        "gfg": "https://takeuforward.org/data-structure/level-order-traversal-of-a-binary-tree/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=EoAsWbO7sqg"
      },
      {
        "id": 121,
        "name": "Height / Max Depth",
        "lc": "maximum-depth-of-binary-tree",
        "gfg": "https://takeuforward.org/data-structure/maximum-depth-of-a-binary-tree/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=eD3tmO66aBA"
      },
      {
        "id": 122,
        "name": "Check if Tree is Balanced",
        "lc": "balanced-binary-tree",
        "gfg": "https://takeuforward.org/data-structure/check-if-the-binary-tree-is-balanced-binary-tree/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=Yt50Jfbd8Po"
      },
      {
        "id": 123,
        "name": "Diameter of Binary Tree",
        "lc": "diameter-of-binary-tree",
        "gfg": "https://takeuforward.org/data-structure/calculate-the-diameter-of-a-binary-tree/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=Rezetez59Nk"
      },
      {
        "id": 124,
        "name": "Max Path Sum in Binary Tree",
        "lc": "binary-tree-maximum-path-sum",
        "gfg": "https://takeuforward.org/data-structure/maximum-sum-path-in-binary-tree/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=WszrfSwMz58"
      },
      {
        "id": 125,
        "name": "Zigzag Level Order Traversal",
        "lc": "binary-tree-zigzag-level-order-traversal",
        "gfg": "https://takeuforward.org/data-structure/zig-zag-traversal-of-binary-tree/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=6ZnyEApgFYg"
      },
      {
        "id": 126,
        "name": "Boundary Traversal",
        "lc": "boundary-of-binary-tree",
        "gfg": "https://www.geeksforgeeks.org/boundary-traversal-of-binary-tree/",
        "diff": "Medium",
        "yt": "https://youtu.be/0ca1nvR0be4"
      },
      {
        "id": 127,
        "name": "Vertical Order Traversal",
        "lc": "vertical-order-traversal-of-a-binary-tree",
        "gfg": "https://takeuforward.org/data-structure/vertical-order-traversal-of-binary-tree/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=q_a6lpbKJdw"
      },
      {
        "id": 128,
        "name": "Top View of Binary Tree",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/print-nodes-top-view-binary-tree/",
        "diff": "Medium",
        "yt": "https://youtu.be/Et9OCDNvJ78"
      },
      {
        "id": 129,
        "name": "Bottom View of Binary Tree",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/bottom-view-binary-tree/",
        "diff": "Medium",
        "yt": "https://youtu.be/0FtVY6I4pB8"
      },
      {
        "id": 130,
        "name": "Right / Left Side View",
        "lc": "binary-tree-right-side-view",
        "gfg": "https://takeuforward.org/data-structure/right-left-view-of-binary-tree/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=KV4mRzTjlAk"
      },
      {
        "id": 131,
        "name": "Symmetric Tree",
        "lc": "symmetric-tree",
        "gfg": "https://takeuforward.org/data-structure/check-for-symmetrical-binary-tree/",
        "diff": "Easy",
        "yt": "https://youtu.be/nKggiEpBE"
      },
      {
        "id": 132,
        "name": "Path Sum (Root to Leaf)",
        "lc": "path-sum",
        "gfg": "https://takeuforward.org/data-structure/print-root-to-node-path-in-a-binary-tree/",
        "diff": "Easy",
        "yt": "https://youtu.be/fmflMqVOC7k"
      },
      {
        "id": 133,
        "name": "LCA of Two Nodes",
        "lc": "lowest-common-ancestor-of-a-binary-tree",
        "gfg": "https://takeuforward.org/data-structure/lowest-common-ancestor-for-two-given-nodes/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=_-QHfMDde90"
      },
      {
        "id": 134,
        "name": "Max Width of Binary Tree",
        "lc": "maximum-width-of-binary-tree",
        "gfg": "https://takeuforward.org/data-structure/maximum-width-of-a-binary-tree/",
        "diff": "Medium",
        "yt": "https://youtu.be/ZbybYvcVLks"
      },
      {
        "id": 135,
        "name": "Nodes at Distance K",
        "lc": "all-nodes-distance-k-in-binary-tree",
        "gfg": "https://www.geeksforgeeks.org/print-nodes-distance-k-given-node/",
        "diff": "Medium",
        "yt": "https://youtu.be/i9ORlEy6EsI"
      },
      {
        "id": 136,
        "name": "Serialize & Deserialize",
        "lc": "serialize-and-deserialize-binary-tree",
        "gfg": "https://takeuforward.org/data-structure/serialize-and-deserialize-a-binary-tree/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=-YbXySKJsX8"
      },
      {
        "id": 137,
        "name": "Flatten Binary Tree to Linked List",
        "lc": "flatten-binary-tree-to-linked-list",
        "gfg": "https://takeuforward.org/data-structure/flatten-binary-tree-to-linked-list/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=sli-uL8p00k"
      },
      {
        "id": 138,
        "name": "Construct from Inorder + Preorder",
        "lc": "construct-binary-tree-from-preorder-and-inorder-traversal",
        "gfg": "https://takeuforward.org/data-structure/construct-a-binary-tree-from-inorder-and-preorder-traversal/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=aZNaLrVebKQ"
      },
      {
        "id": 139,
        "name": "Count Nodes in Complete Binary Tree",
        "lc": "count-complete-tree-nodes",
        "gfg": "https://takeuforward.org/binary-tree/count-number-of-nodes-in-a-binary-tree/",
        "diff": "Easy",
        "yt": "https://youtu.be/u-yWemKGWO0"
      },
      {
        "id": 140,
        "name": "Check for Children Sum Property",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/check-for-children-sum-property-in-a-binary-tree/",
        "diff": "Medium",
        "yt": "https://youtu.be/fnmisPM6cVo"
      },
      {
        "id": 342,
        "name": "Sum Tree (Check)",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/check-if-a-given-binary-tree-is-sum-tree/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=G2M9ZfO9-1k"
      },
      {
        "id": 343,
        "name": "Burn Tree from Leaf",
        "lc": "amount-of-time-for-binary-tree-to-be-infected",
        "gfg": "https://www.geeksforgeeks.org/minimum-time-to-burn-a-binary-tree-from-a-leaf-node/",
        "diff": "Hard",
        "yt": "https://youtu.be/2r5wLmQfD6g"
      },
      {
        "id": 344,
        "name": "Maximum Sum of Non-Adjacent Nodes (Tree)",
        "lc": "house-robber",
        "gfg": "https://www.geeksforgeeks.org/maximum-sum-of-nodes-in-binary-tree-such-that-no-two-are-adjacent/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=GrMBfJNk_NY"
      },
      {
        "id": 345,
        "name": "Unique Binary Search Trees (Count)",
        "lc": "unique-binary-search-trees",
        "gfg": "https://www.geeksforgeeks.org/program-nth-catalan-number/",
        "diff": "Medium",
        "yt": "https://youtu.be/cX_kPV_foZc"
      },
      {
        "id": 357,
        "name": "Same Tree",
        "lc": "same-tree",
        "gfg": "https://takeuforward.org/data-structure/check-if-two-trees-are-identical/",
        "diff": "Easy",
        "yt": "https://youtu.be/BhuvF_-PWS0"
      },
      {
        "id": 358,
        "name": "Sum Root to Leaf Numbers",
        "lc": "sum-root-to-leaf-numbers",
        "gfg": "https://takeuforward.org/data-structure/sum-of-first-n-natural-numbers/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=69ZCDFy-OUo&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=3"
      },
      {
        "id": 359,
        "name": "Populating Next Right Pointers",
        "lc": "populating-next-right-pointers-in-each-node",
        "gfg": "https://www.geeksforgeeks.org/connect-nodes-at-same-level/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=U7n0w8_rF-A"
      },
      {
        "id": 360,
        "name": "Construct Tree from Inorder+Postorder",
        "lc": "construct-binary-tree-from-inorder-and-postorder-traversal",
        "gfg": "https://takeuforward.org/data-structure/construct-binary-tree-from-inorder-and-postorder-traversal/",
        "diff": "Medium",
        "yt": "https://youtu.be/LgLRTaEMRVc"
      },
      {
        "id": 141,
        "name": "Morris Inorder Traversal",
        "lc": "binary-tree-inorder-traversal",
        "gfg": "https://takeuforward.org/data-structure/inorder-traversal-of-binary-tree/",
        "diff": "Medium",
        "yt": "https://youtu.be/Z_NEgBgbRVI"
      }
    ]
  },
  {
    "id": "bst",
    "num": 13,
    "title": "BST",
    "problems": [
      {
        "id": 142,
        "name": "Search in BST",
        "lc": "search-in-a-binary-search-tree",
        "gfg": "https://takeuforward.org/data-structure/search-in-a-binary-search-tree-2/",
        "diff": "Easy",
        "yt": "https://youtu.be/KcNt6v_56cc"
      },
      {
        "id": 143,
        "name": "Insert into BST",
        "lc": "insert-into-a-binary-search-tree",
        "gfg": "https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/",
        "diff": "Medium",
        "yt": "https://youtu.be/FiFiNvM29ps"
      },
      {
        "id": 144,
        "name": "Delete Node in BST",
        "lc": "delete-node-in-a-bst",
        "gfg": "https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=kouxiP_H5WE"
      },
      {
        "id": 145,
        "name": "Kth Smallest in BST",
        "lc": "kth-smallest-element-in-a-bst",
        "gfg": "https://takeuforward.org/data-structure/kth-largest-smallest-element-in-binary-search-tree/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=9TJYWh0adfk"
      },
      {
        "id": 146,
        "name": "LCA of BST",
        "lc": "lowest-common-ancestor-of-a-binary-search-tree",
        "gfg": "https://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-search-tree/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=cX_kPV_foZc"
      },
      {
        "id": 147,
        "name": "Validate BST",
        "lc": "validate-binary-search-tree",
        "gfg": "https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=f-sj7I5oXEI"
      },
      {
        "id": 148,
        "name": "Two Sum in BST",
        "lc": "two-sum-iv-input-is-a-bst",
        "gfg": "https://www.geeksforgeeks.org/find-a-pair-with-given-sum-in-bst/",
        "diff": "Easy",
        "yt": "https://youtu.be/ssL3sHwPeb4"
      },
      {
        "id": 149,
        "name": "Recover BST (Swapped Nodes)",
        "lc": "recover-binary-search-tree",
        "gfg": "https://www.geeksforgeeks.org/fix-two-swapped-nodes-of-bst/",
        "diff": "Medium",
        "yt": "https://youtu.be/ZWGW7FminDM"
      },
      {
        "id": 150,
        "name": "BST Iterator",
        "lc": "binary-search-tree-iterator",
        "gfg": "https://www.geeksforgeeks.org/bst-iterator-in-java/",
        "diff": "Medium",
        "yt": "https://youtu.be/D2jMcmxU4bs"
      },
      {
        "id": 151,
        "name": "Construct BST from Preorder",
        "lc": "construct-binary-search-tree-from-preorder-traversal",
        "gfg": "https://www.geeksforgeeks.org/construct-bst-from-given-preorder-traversal-set-1/",
        "diff": "Medium",
        "yt": "https://youtu.be/UmJT3j26t1I"
      },
      {
        "id": 361,
        "name": "Convert Sorted Array to BST",
        "lc": "convert-sorted-array-to-binary-search-tree",
        "gfg": "https://www.geeksforgeeks.org/sorted-array-to-balanced-bst/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=0K0uCMYq5ng"
      },
      {
        "id": 362,
        "name": "Convert Sorted List to BST",
        "lc": "convert-sorted-list-to-binary-search-tree",
        "gfg": "https://www.geeksforgeeks.org/sorted-linked-list-to-balanced-bst/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=5V5V0mJ12cQ"
      },
      {
        "id": 363,
        "name": "Maximum Sum BST in Binary Tree",
        "lc": "maximum-sum-bst-in-binary-tree",
        "gfg": "https://www.geeksforgeeks.org/maximum-sum-bst-in-binary-tree/",
        "diff": "Hard",
        "yt": "https://youtu.be/X0oXMdtUDwo"
      },
      {
        "id": 152,
        "name": "Floor and Ceil in BST",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/floor-in-binary-search-tree-bst/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=6zhGS79oQ4k&list=PLgUwDviBIf0pMFMWuuvDNMAkoQFi-h0ZF&index=3"
      },
      {
        "id": 153,
        "name": "Inorder Successor/Predecessor",
        "lc": "inorder-successor-in-bst",
        "gfg": "https://www.geeksforgeeks.org/inorder-successor-in-binary-search-tree/",
        "diff": "Medium",
        "yt": "https://youtu.be/SXKAD2svfmI"
      }
    ]
  },
  {
    "id": "graphs",
    "num": 14,
    "title": "Graphs",
    "problems": [
      {
        "id": 154,
        "name": "BFS of Graph",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=-tgVpUgsQ5k"
      },
      {
        "id": 155,
        "name": "DFS of Graph",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=Qzf1a--rhp8"
      },
      {
        "id": 156,
        "name": "Number of Provinces",
        "lc": "number-of-provinces",
        "gfg": "https://takeuforward.org/data-structure/number-of-provinces/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=0btjpS0Ekf4"
      },
      {
        "id": 157,
        "name": "Number of Islands",
        "lc": "number-of-islands",
        "gfg": "https://takeuforward.org/graph/number-of-islands-ii-online-queries-dsu-g-51/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=muncqlKJrH0"
      },
      {
        "id": 158,
        "name": "Flood Fill",
        "lc": "flood-fill",
        "gfg": "https://takeuforward.org/graph/flood-fill-algorithm-graphs/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=C-2_uSRli8o"
      },
      {
        "id": 159,
        "name": "Rotten Oranges (Multi-source BFS)",
        "lc": "rotting-oranges",
        "gfg": "https://takeuforward.org/data-structure/rotten-oranges-min-time-to-rot-all-oranges-bfs/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=yf3oUhkvqA0"
      },
      {
        "id": 160,
        "name": "Cycle Detection \u2014 Undirected (BFS)",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/detect-cycle-undirected-graph/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=BPlrALa_1-Q"
      },
      {
        "id": 161,
        "name": "Cycle Detection \u2014 Directed (DFS)",
        "lc": "course-schedule-ii",
        "gfg": "https://www.geeksforgeeks.org/detect-cycle-in-a-graph/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=9twcmtQj4DU"
      },
      {
        "id": 162,
        "name": "0/1 Matrix (BFS Distances)",
        "lc": "01-matrix",
        "gfg": "https://takeuforward.org/graph/distance-of-nearest-cell-having-1/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=edXdVwkYHF8"
      },
      {
        "id": 163,
        "name": "Surrounded Regions",
        "lc": "surrounded-regions",
        "gfg": "https://takeuforward.org/graph/surrounded-regions-replace-os-with-xs/",
        "diff": "Medium",
        "yt": "https://youtu.be/BtdgAys4yMk"
      },
      {
        "id": 164,
        "name": "Word Ladder I",
        "lc": "word-ladder",
        "gfg": "https://takeuforward.org/graph/word-ladder-i-g-29/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=tRPda0rcf8E"
      },
      {
        "id": 165,
        "name": "Bipartite Graph Check",
        "lc": "is-graph-bipartite",
        "gfg": "https://takeuforward.org/graph/bipartite-graph-dfs-implementation/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=nbgaEu-pvkU"
      },
      {
        "id": 166,
        "name": "Topological Sort (BFS \u2014 Kahn's)",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/kahns-algorithm-vs-dfs-approach-a-comparative-analysis/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=73sneFXuTEg"
      },
      {
        "id": 167,
        "name": "Topological Sort (DFS)",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/topological-sorting/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=5lZ0iJMrUMk"
      },
      {
        "id": 168,
        "name": "Course Schedule I",
        "lc": "course-schedule",
        "gfg": "https://takeuforward.org/data-structure/course-schedule-i-and-ii-pre-requisite-tasks-topological-sort-g-24/",
        "diff": "Medium",
        "yt": "https://youtu.be/WAOfKpxYHR8"
      },
      {
        "id": 169,
        "name": "Course Schedule II",
        "lc": "course-schedule-ii",
        "gfg": "https://takeuforward.org/data-structure/detect-cycle-in-a-directed-graph-using-dfs-g-19/",
        "diff": "Medium",
        "yt": "https://youtu.be/9twcmtQj4DU"
      },
      {
        "id": 170,
        "name": "Alien Dictionary",
        "lc": "alien-dictionary",
        "gfg": "https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=U3N_Je53586"
      },
      {
        "id": 171,
        "name": "Shortest Path DAG",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/shortest-path-for-directed-acyclic-graphs/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=ZUFQfFaU-8U&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&index=27"
      },
      {
        "id": 172,
        "name": "Dijkstra's Algorithm",
        "lc": "network-delay-time",
        "gfg": "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=V3ZYZ3rFCCQ"
      },
      {
        "id": 173,
        "name": "Bellman-Ford Algorithm",
        "lc": "cheapest-flights-within-k-stops",
        "gfg": "https://takeuforward.org/data-structure/g-38-cheapest-flights-within-k-stops/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=0vVofAhAYjc"
      },
      {
        "id": 174,
        "name": "Floyd-Warshall Algorithm",
        "lc": "find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance",
        "gfg": "https://takeuforward.org/data-structure/find-the-city-with-the-smallest-number-of-neighbours-at-a-threshold-distance-g-43/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=YbY8cVwWAvk"
      },
      {
        "id": 175,
        "name": "Prim's MST",
        "lc": "min-cost-to-connect-all-points",
        "gfg": "https://takeuforward.org/data-structure/prims-algorithm-minimum-spanning-tree-c-and-java-g-45/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=mJcZjjKzeqk"
      },
      {
        "id": 176,
        "name": "Kruskal's MST (DSU)",
        "lc": "min-cost-to-connect-all-points",
        "gfg": "https://takeuforward.org/data-structure/kruskals-algorithm-minimum-spanning-tree-g-47/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=DMnDM_sxVig"
      },
      {
        "id": 177,
        "name": "Disjoint Set Union (Union-Find)",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/union-find/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=aBxjDBC4M1U"
      },
      {
        "id": 178,
        "name": "Accounts Merge",
        "lc": "accounts-merge",
        "gfg": "https://takeuforward.org/data-structure/accounts-merge-dsu-g-50/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=FMwpt_aQOGc"
      },
      {
        "id": 179,
        "name": "Bridges in Graph (Tarjan)",
        "lc": "critical-connections-in-a-network",
        "gfg": "https://takeuforward.org/graph/bridges-in-graph-using-tarjans-algorithm-of-time-in-and-low-time-g-55/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=qrAub5z8FeA"
      },
      {
        "id": 180,
        "name": "Articulation Points",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/articulation-points-or-cut-vertices-in-a-graph/",
        "diff": "Hard",
        "yt": "https://youtu.be/j1QDfU21iZk"
      },
      {
        "id": 181,
        "name": "Strongly Connected Components (Kosaraju)",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/strongly-connected-components/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=V8qIqJxCioo"
      },
      {
        "id": 306,
        "name": "Eventual Safe States",
        "lc": "find-eventual-safe-states",
        "gfg": "https://takeuforward.org/data-structure/find-eventual-safe-states-bfs-topological-sort-g-25/",
        "diff": "Medium",
        "yt": "https://youtu.be/2gtg3VsDGyc"
      },
      {
        "id": 307,
        "name": "Shortest Path in Binary Matrix",
        "lc": "shortest-path-in-binary-matrix",
        "gfg": "https://takeuforward.org/data-structure/g-36-shortest-distance-in-a-binary-maze/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=U5Mw4eyUmw4&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn&index=36"
      },
      {
        "id": 308,
        "name": "Path with Minimum Effort",
        "lc": "path-with-minimum-effort",
        "gfg": "https://takeuforward.org/data-structure/g-37-path-with-minimum-effort/",
        "diff": "Medium",
        "yt": "https://youtu.be/0ytpZyiZFhA"
      },
      {
        "id": 309,
        "name": "Number of Enclaves",
        "lc": "number-of-enclaves",
        "gfg": "https://takeuforward.org/graph/number-of-enclaves/",
        "diff": "Medium",
        "yt": "https://youtu.be/rxKcepXQgU4"
      },
      {
        "id": 310,
        "name": "Making a Large Island (DSU)",
        "lc": "making-a-large-island",
        "gfg": "https://takeuforward.org/data-structure/making-a-large-island-dsu-g-52/",
        "diff": "Hard",
        "yt": "https://youtu.be/lgiz0Oup6gM"
      },
      {
        "id": 311,
        "name": "Most Stones Removed (DSU)",
        "lc": "most-stones-removed-with-same-row-or-column",
        "gfg": "https://takeuforward.org/data-structure/most-stones-removed-with-same-row-or-column-dsu-g-53/",
        "diff": "Medium",
        "yt": "https://youtu.be/OwMNX8SPavM"
      },
      {
        "id": 364,
        "name": "Clone Graph",
        "lc": "clone-graph",
        "gfg": "https://www.geeksforgeeks.org/clone-an-undirected-graph/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=mQeF6yN8Wq4"
      },
      {
        "id": 365,
        "name": "Minimum Fuel Cost to Report to Capital",
        "lc": "minimum-fuel-cost-to-report-to-the-capital",
        "gfg": "https://www.geeksforgeeks.org/minimum-fuel-cost-to-report-to-capital/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=I312F4tUlgI"
      },
      {
        "id": 182,
        "name": "Number of Islands II (DSU)",
        "lc": "number-of-islands-ii",
        "gfg": "https://takeuforward.org/graph/number-of-islands-ii-online-queries-dsu-g-51/",
        "diff": "Hard",
        "yt": "https://youtu.be/Rn6B-Q4SNyA"
      }
    ]
  },
  {
    "id": "dp",
    "num": 15,
    "title": "Dynamic Programming",
    "problems": [
      {
        "id": 183,
        "name": "Climbing Stairs",
        "lc": "climbing-stairs",
        "gfg": "https://takeuforward.org/data-structure/dynamic-programming-climbing-stairs/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=mLfjzJsN8us"
      },
      {
        "id": 184,
        "name": "Frog Jump (Min Cost)",
        "lc": "min-cost-climbing-stairs",
        "gfg": "https://takeuforward.org/data-structure/dynamic-programming-frog-jump-dp-3/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=EgG3jsGoPvQ"
      },
      {
        "id": 185,
        "name": "House Robber",
        "lc": "house-robber",
        "gfg": "https://takeuforward.org/data-structure/maximum-sum-of-non-adjacent-elements-dp-5/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=GrMBfJNk_NY"
      },
      {
        "id": 186,
        "name": "House Robber II (Circular)",
        "lc": "house-robber-ii",
        "gfg": "https://takeuforward.org/data-structure/dynamic-programming-house-robber-dp-6/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=3WaxQMELSkw"
      },
      {
        "id": 187,
        "name": "Unique Paths",
        "lc": "unique-paths",
        "gfg": "https://takeuforward.org/data-structure/grid-unique-paths-dp-on-grids-dp8/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=sdE0A2Oxofw"
      },
      {
        "id": 188,
        "name": "Unique Paths II (With Obstacles)",
        "lc": "unique-paths-ii",
        "gfg": "https://takeuforward.org/data-structure/grid-unique-paths-2-dp-9/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=TmhpgXScLyY"
      },
      {
        "id": 189,
        "name": "Minimum Path Sum (Grid)",
        "lc": "minimum-path-sum",
        "gfg": "https://takeuforward.org/data-structure/minimum-path-sum-in-a-grid-dp-10/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=_rgTlyky1uQ"
      },
      {
        "id": 190,
        "name": "Triangle \u2014 Min Path Sum",
        "lc": "triangle",
        "gfg": "https://takeuforward.org/data-structure/minimum-path-sum-in-triangular-grid-dp-11/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=SrP-PiLSYC0"
      },
      {
        "id": 191,
        "name": "Minimum Falling Path Sum",
        "lc": "minimum-falling-path-sum",
        "gfg": "https://takeuforward.org/data-structure/minimum-maximum-falling-path-sum-dp-12/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=N_aJ5qQbYA0"
      },
      {
        "id": 192,
        "name": "Subset Sum Equal to Target",
        "lc": "partition-equal-subset-sum",
        "gfg": "https://takeuforward.org/data-structure/partition-equal-subset-sum-dp-15/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=7win3dcgo3k"
      },
      {
        "id": 193,
        "name": "Partition Equal Subset Sum",
        "lc": "partition-equal-subset-sum",
        "gfg": "https://takeuforward.org/data-structure/partition-equal-subset-sum-dp-15/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=7win3dcgo3k"
      },
      {
        "id": 194,
        "name": "0/1 Knapsack",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=GqOmJHQZivw"
      },
      {
        "id": 195,
        "name": "Coin Change \u2014 Minimum Coins",
        "lc": "coin-change",
        "gfg": "https://takeuforward.org/data-structure/minimum-coins-dp-20/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=myPeWb3X9Ow"
      },
      {
        "id": 196,
        "name": "Coin Change \u2014 Count Ways",
        "lc": "coin-change-ii",
        "gfg": "https://takeuforward.org/data-structure/coin-change-2-dp-22/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=HgyouUi11zk"
      },
      {
        "id": 197,
        "name": "Unbounded Knapsack",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/unbounded-knapsack-repetition-items-allowed/",
        "diff": "Medium",
        "yt": "https://youtu.be/OgvOZ6OrJoY"
      },
      {
        "id": 198,
        "name": "Rod Cutting Problem",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/cutting-a-rod-dp-13/",
        "diff": "Medium",
        "yt": "https://youtu.be/mO8XpGoJwuo"
      },
      {
        "id": 199,
        "name": "Longest Common Subsequence",
        "lc": "longest-common-subsequence",
        "gfg": "https://takeuforward.org/data-structure/longest-common-subsequence-dp-25/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=NPZn9jBrX8U"
      },
      {
        "id": 200,
        "name": "Longest Palindromic Subsequence",
        "lc": "longest-palindromic-subsequence",
        "gfg": "https://takeuforward.org/data-structure/longest-palindromic-subsequence-dp-28/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=6i_T5kkfv4A"
      },
      {
        "id": 201,
        "name": "Edit Distance",
        "lc": "edit-distance",
        "gfg": "https://takeuforward.org/data-structure/edit-distance-dp-33/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=fp4tVyzkNW4"
      },
      {
        "id": 202,
        "name": "Wildcard Matching",
        "lc": "wildcard-matching",
        "gfg": "https://takeuforward.org/data-structure/wildcard-matching-dp-34/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=ZmlQ3vgAOMo"
      },
      {
        "id": 203,
        "name": "Longest Increasing Subsequence",
        "lc": "longest-increasing-subsequence",
        "gfg": "https://takeuforward.org/data-structure/longest-increasing-subsequence-dp-41/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=CE2b_-XfVDk"
      },
      {
        "id": 204,
        "name": "LIS using Binary Search (nlogn)",
        "lc": "longest-increasing-subsequence",
        "gfg": "https://takeuforward.org/data-structure/longest-increasing-subsequence-dp-41/",
        "diff": "Medium",
        "yt": "https://youtu.be/ekcwMsSIzVc"
      },
      {
        "id": 205,
        "name": "Max Sum of Non-Adjacent Nodes (Tree DP)",
        "lc": "house-robber",
        "gfg": "https://www.geeksforgeeks.org/maximum-sum-of-nodes-in-binary-tree-such-that-no-two-are-adjacent/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=GrMBfJNk_NY"
      },
      {
        "id": 206,
        "name": "Matrix Chain Multiplication",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=vRVfmbCFW7Y"
      },
      {
        "id": 207,
        "name": "Burst Balloons",
        "lc": "burst-balloons",
        "gfg": "https://takeuforward.org/data-structure/burst-balloons-partition-dp-dp-51/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=Yz4LlDSlkns"
      },
      {
        "id": 208,
        "name": "Palindrome Partitioning II (DP)",
        "lc": "palindrome-partitioning-ii",
        "gfg": "https://takeuforward.org/data-structure/palindrome-partitioning-ii-front-partition-dp-53/",
        "diff": "Hard",
        "yt": "https://youtu.be/_H8V5hJUGd0"
      },
      {
        "id": 209,
        "name": "Best Time to Buy/Sell \u2014 Cooldown",
        "lc": "best-time-to-buy-and-sell-stock-with-cooldown",
        "gfg": "https://takeuforward.org/data-structure/buy-and-sell-stocks-with-cooldown-dp-39/",
        "diff": "Medium",
        "yt": "https://youtu.be/IGIe46xw3YY"
      },
      {
        "id": 210,
        "name": "Best Time to Buy/Sell \u2014 k Transactions",
        "lc": "best-time-to-buy-and-sell-stock-iv",
        "gfg": "https://takeuforward.org/data-structure/buy-and-sell-stock-iv-dp-38/",
        "diff": "Hard",
        "yt": "https://youtu.be/IV1dHbk5CDc"
      },
      {
        "id": 211,
        "name": "Distinct Subsequences",
        "lc": "distinct-subsequences",
        "gfg": "https://takeuforward.org/data-structure/distinct-subsequences-dp-32/",
        "diff": "Hard",
        "yt": "https://youtu.be/nVG7eTiD2bY"
      },
      {
        "id": 312,
        "name": "Longest Common Substring",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/longest-common-substring-dp-29/",
        "diff": "Medium",
        "yt": "https://youtu.be/_wP9mWNPL5w"
      },
      {
        "id": 313,
        "name": "Shortest Common Supersequence",
        "lc": "shortest-common-supersequence",
        "gfg": "https://takeuforward.org/data-structure/shortest-common-supersequence-dp-31/",
        "diff": "Hard",
        "yt": "https://youtu.be/xElxAuBcvsU"
      },
      {
        "id": 314,
        "name": "Min Insertions to Make String Palindrome",
        "lc": "minimum-insertion-steps-to-make-a-string-palindrome",
        "gfg": "https://takeuforward.org/data-structure/minimum-insertions-to-make-string-palindrome-dp-29/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=xPBLEj41rFU"
      },
      {
        "id": 315,
        "name": "Count Palindromic Subsequences",
        "lc": "count-palindromic-subsequences",
        "gfg": "https://www.geeksforgeeks.org/count-palindromic-subsequence-given-string/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=IP4L_cTsz8Y"
      },
      {
        "id": 316,
        "name": "Minimum Cost to Cut Stick",
        "lc": "minimum-cost-to-cut-a-stick",
        "gfg": "https://takeuforward.org/data-structure/minimum-cost-to-cut-the-stick-dp-50/",
        "diff": "Hard",
        "yt": "https://youtu.be/xwomavsC86c"
      },
      {
        "id": 317,
        "name": "Evaluate Expression to True (Boolean Parenthesization)",
        "lc": "parsing-a-boolean-expression",
        "gfg": "https://www.geeksforgeeks.org/boolean-parenthesization-problem-dp-37/",
        "diff": "Hard",
        "yt": "https://youtu.be/MM7fXopgyjw"
      },
      {
        "id": 318,
        "name": "Target Sum (Count with +/-)",
        "lc": "target-sum",
        "gfg": "https://takeuforward.org/data-structure/target-sum-dp-21/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=b3GD8263-PQ"
      },
      {
        "id": 319,
        "name": "Minimum Switchover Cost (DP on Trees)",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/dp-on-trees/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=fFstK6rWcE8"
      },
      {
        "id": 320,
        "name": "Ninja Training (3D DP)",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/find-maximum-points-can-obtained-from-n-tasks/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=AE39gJYuRog"
      },
      {
        "id": 321,
        "name": "Largest Divisible Subset",
        "lc": "largest-divisible-subset",
        "gfg": "https://takeuforward.org/data-structure/longest-divisible-subset-dp-44/",
        "diff": "Medium",
        "yt": "https://youtu.be/gDuZwBW9VvM"
      },
      {
        "id": 322,
        "name": "Longest Bitonic Subsequence",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/longest-bitonic-subsequence-dp-15/",
        "diff": "Medium",
        "yt": "https://youtu.be/y4vN0WNdrlg"
      },
      {
        "id": 323,
        "name": "Number of LIS (Count)",
        "lc": "number-of-longest-increasing-subsequence",
        "gfg": "https://takeuforward.org/data-structure/number-of-longest-increasing-subsequences-dp-47/",
        "diff": "Medium",
        "yt": "https://youtu.be/cKVl1TFdNXg"
      },
      {
        "id": 324,
        "name": "Max Profit With at Most 2 Transactions",
        "lc": "best-time-to-buy-and-sell-stock-iii",
        "gfg": "https://takeuforward.org/data-structure/buy-and-sell-stock-iii-dp-37/",
        "diff": "Hard",
        "yt": "https://youtu.be/-uQGzhYj8BQ"
      },
      {
        "id": 325,
        "name": "Reducing Dishes (Greedy/DP)",
        "lc": "reducing-dishes",
        "gfg": "https://www.geeksforgeeks.org/reducing-dishes/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=8mI6kXfC_0s"
      },
      {
        "id": 326,
        "name": "Minimum Score Triangulation of Polygon",
        "lc": "minimum-score-triangulation-of-polygon",
        "gfg": "https://www.geeksforgeeks.org/minimum-score-triangulation-of-polygon/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=h1S3M2tg3J0"
      },
      {
        "id": 327,
        "name": "Strange Printer",
        "lc": "strange-printer",
        "gfg": "https://takeuforward.org/data-structure/trapping-rainwater/",
        "diff": "Hard",
        "yt": "https://youtu.be/1_5VuquLbXg?si=NFG6df318_6OtGvg"
      },
      {
        "id": 366,
        "name": "Ones and Zeroes",
        "lc": "ones-and-zeroes",
        "gfg": "https://takeuforward.org/data-structure/count-maximum-consecutive-ones-in-the-array/",
        "diff": "Medium",
        "yt": "https://youtu.be/bYWLJb3vCWY?t=1124"
      },
      {
        "id": 212,
        "name": "Count Subsets with Sum K",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=ZHyb-A2Mte4"
      }
    ]
  },
  {
    "id": "backtrack",
    "num": 16,
    "title": "Backtracking",
    "problems": [
      {
        "id": 213,
        "name": "N-Queens",
        "lc": "n-queens",
        "gfg": "https://takeuforward.org/data-structure/n-queen-problem-return-all-distinct-solutions-to-the-n-queens-puzzle/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=i05Ju7ABtkc"
      },
      {
        "id": 214,
        "name": "Sudoku Solver",
        "lc": "sudoku-solver",
        "gfg": "https://takeuforward.org/data-structure/sudoku-solver/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=FWAIf_EVUKE"
      },
      {
        "id": 215,
        "name": "Rat in a Maze",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=bLGZhJlt4y0&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=60"
      },
      {
        "id": 216,
        "name": "Combination Sum I",
        "lc": "combination-sum",
        "gfg": "https://takeuforward.org/data-structure/combination-sum-1/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=OyZFFqQtu98"
      },
      {
        "id": 217,
        "name": "Combination Sum II (No Duplicates)",
        "lc": "combination-sum-ii",
        "gfg": "https://takeuforward.org/data-structure/combination-sum-ii-find-all-unique-combinations/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=G1fRTGiqyhw"
      },
      {
        "id": 218,
        "name": "Subsets I",
        "lc": "subsets",
        "gfg": "https://takeuforward.org/data-structure/power-set-print-all-the-possible-subsequences-of-the-string/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=REOH22Xwdkk"
      },
      {
        "id": 219,
        "name": "Subsets II (With Duplicates)",
        "lc": "subsets-ii",
        "gfg": "https://takeuforward.org/data-structure/subset-ii-print-all-the-unique-subsets/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=RIn3gOkbhQE&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=53"
      },
      {
        "id": 220,
        "name": "Permutations I",
        "lc": "permutations",
        "gfg": "https://takeuforward.org/data-structure/next_permutation-find-next-lexicographically-greater-permutation/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=f2ic2Rsc9pU"
      },
      {
        "id": 221,
        "name": "Permutations II (With Duplicates)",
        "lc": "permutations-ii",
        "gfg": "https://www.geeksforgeeks.org/distinct-permutations-of-a-string-with-duplicates-allowed-in-java/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=f2ic2Rsc9pU"
      },
      {
        "id": 222,
        "name": "Word Search",
        "lc": "word-search",
        "gfg": "https://takeuforward.org/data-structure/word-search-leetcode/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=m9TrOL1ETxI"
      },
      {
        "id": 223,
        "name": "Palindrome Partitioning",
        "lc": "palindrome-partitioning",
        "gfg": "https://takeuforward.org/data-structure/palindrome-partitioning/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=WBgsABoClE0"
      },
      {
        "id": 224,
        "name": "Letter Combinations (Phone Number)",
        "lc": "letter-combinations-of-a-phone-number",
        "gfg": "https://www.geeksforgeeks.org/letter-combinations-of-a-phone-number/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=tWnHbSHhFxo"
      },
      {
        "id": 367,
        "name": "Permutation Sequence",
        "lc": "permutation-sequence",
        "gfg": "https://takeuforward.org/data-structure/next_permutation-find-next-lexicographically-greater-permutation/",
        "diff": "Hard",
        "yt": "https://youtu.be/JDOXKqF60RQ"
      },
      {
        "id": 225,
        "name": "Generate Valid Parentheses",
        "lc": "generate-parentheses",
        "gfg": "https://www.geeksforgeeks.org/print-all-combinations-of-balanced-parentheses/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=s9fokUqJ1hA"
      }
    ]
  },
  {
    "id": "greedy",
    "num": 17,
    "title": "Greedy",
    "problems": [
      {
        "id": 226,
        "name": "Fractional Knapsack",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/fractional-knapsack-problem/",
        "diff": "Medium",
        "yt": "https://youtu.be/1ibsQrnuEEg?si=8R2By3wpHo0zZVHE"
      },
      {
        "id": 227,
        "name": "Activity Selection / N Meetings",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/n-meetings-in-one-room-using-greedy-algorithm/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=Asd8sP8hT20"
      },
      {
        "id": 228,
        "name": "Minimum Platforms",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/",
        "diff": "Medium",
        "yt": "https://youtu.be/ZSPjZuZWCME"
      },
      {
        "id": 229,
        "name": "Jump Game I",
        "lc": "jump-game",
        "gfg": "https://takeuforward.org/Greedy/jump-game-i",
        "diff": "Medium",
        "yt": "https://youtu.be/tZAa_jJ3SwQ?si=voKd7n9VTLDRRNzJ"
      },
      {
        "id": 230,
        "name": "Jump Game II (Min Jumps)",
        "lc": "jump-game-ii",
        "gfg": "https://www.geeksforgeeks.org/minimum-number-jumps-reach-end-array/",
        "diff": "Medium",
        "yt": "https://youtu.be/7SBVnw7GSTk?si=9uUouBELh9K3m2jZ"
      },
      {
        "id": 231,
        "name": "Candy Distribution",
        "lc": "candy",
        "gfg": "https://www.geeksforgeeks.org/candy-distribution/",
        "diff": "Hard",
        "yt": "https://youtu.be/IIqVFvKE6RY?si=EjmuXZJNLQLUkEd7"
      },
      {
        "id": 232,
        "name": "Insert Interval",
        "lc": "insert-interval",
        "gfg": "https://takeuforward.org/?s=Insert+Interval",
        "diff": "Medium",
        "yt": "https://youtu.be/xxRE-46OCC8?si=a7aPuIw16zDx2lAa"
      },
      {
        "id": 233,
        "name": "Non-Overlapping Intervals",
        "lc": "non-overlapping-intervals",
        "gfg": "https://www.geeksforgeeks.org/non-overlapping-intervals/",
        "diff": "Medium",
        "yt": "https://youtu.be/HDHQ8lAWakY?si=JVtLqboGdpUTOVjf"
      },
      {
        "id": 234,
        "name": "Valid Parenthesis String",
        "lc": "valid-parenthesis-string",
        "gfg": "https://www.geeksforgeeks.org/valid-parenthesis-string-check-parenthesis-string-valid-or-not/",
        "diff": "Medium",
        "yt": "https://youtu.be/cHT6sG_hUZI?si=XRHeyh7jOaLaTy3g"
      },
      {
        "id": 235,
        "name": "Job Sequencing Problem",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/job-sequencing-problem/",
        "diff": "Medium",
        "yt": "https://youtu.be/QbwltemZbRg?si=wvcemJ5BLPlTRmkG"
      },
      {
        "id": 236,
        "name": "Lemonade Change",
        "lc": "lemonade-change",
        "gfg": "https://takeuforward.org/Greedy/lemonade-change",
        "diff": "Easy",
        "yt": "https://youtu.be/n_tmibEhO6Q?si=q1NW8MfPy0QU6fIl"
      }
    ]
  },
  {
    "id": "bits",
    "num": 18,
    "title": "Bit Manipulation",
    "problems": [
      {
        "id": 237,
        "name": "Number of 1 Bits (Count Set Bits)",
        "lc": "number-of-1-bits",
        "gfg": "https://www.geeksforgeeks.org/count-set-bits-in-an-integer/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=3Zv61L2ugcs"
      },
      {
        "id": 238,
        "name": "Counting Bits (0 to n)",
        "lc": "counting-bits",
        "gfg": "https://takeuforward.org/data-structure/count-digits-in-a-number/",
        "diff": "Easy",
        "yt": "https://youtu.be/1xNbjMdbjug"
      },
      {
        "id": 239,
        "name": "Reverse Bits",
        "lc": "reverse-bits",
        "gfg": "https://takeuforward.org/data-structure/count-reverse-pairs/",
        "diff": "Easy",
        "yt": "https://youtu.be/0e4bZaP3MDI"
      },
      {
        "id": 240,
        "name": "Power of Two",
        "lc": "power-of-two",
        "gfg": "https://www.geeksforgeeks.org/program-to-find-whether-a-given-number-is-power-of-2/",
        "diff": "Easy",
        "yt": "https://youtu.be/nttpF8kwgd4?si=x9o8PsYaA2XVZ9rV"
      },
      {
        "id": 241,
        "name": "XOR of Numbers from 1 to N",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/xor-of-all-numbers-in-the-given-range/",
        "diff": "Easy",
        "yt": "https://youtu.be/WqGb7159h7Q?si=uGUEbNUUaIN_6Vvr"
      },
      {
        "id": 242,
        "name": "Two Non-Repeating Elements (XOR)",
        "lc": "single-number-iii",
        "gfg": "https://www.geeksforgeeks.org/find-two-non-repeating-elements-in-an-array-of-repeating-elements/",
        "diff": "Medium",
        "yt": "https://youtu.be/UA5JnV1J2sI?si=VFBRJyb3boZvx_r1"
      },
      {
        "id": 243,
        "name": "Find Missing and Repeating (XOR)",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/",
        "diff": "Medium",
        "yt": "https://youtu.be/2D0D8HE6uak"
      },
      {
        "id": 244,
        "name": "Pow(x, n) \u2014 Fast Exponentiation",
        "lc": "powx-n",
        "gfg": "https://takeuforward.org/data-structure/implement-powxn-x-raised-to-the-power-n/",
        "diff": "Medium",
        "yt": "https://youtu.be/l0YC3876qxg"
      },
      {
        "id": 245,
        "name": "Divide Two Integers (Bit tricks)",
        "lc": "divide-two-integers",
        "gfg": "https://www.geeksforgeeks.org/divide-two-integers-without-using-multiplication-division-and-mod-operator/",
        "diff": "Medium",
        "yt": "https://youtu.be/pBD4B1tzgVc?si=G9c5pEE-RrzeU6sz"
      },
      {
        "id": 349,
        "name": "Single Number II (3x+1)",
        "lc": "single-number-ii",
        "gfg": "https://takeuforward.org/arrays/find-the-number-that-appears-once-and-the-other-numbers-twice/",
        "diff": "Medium",
        "yt": "https://youtu.be/bYWLJb3vCWY?t=1369"
      },
      {
        "id": 350,
        "name": "Minimum XOR Value Pair",
        "lc": null,
        "gfg": "https://www.geeksforgeeks.org/minimum-xor-value-pair/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=uGUEbNUUaIN"
      },
      {
        "id": 246,
        "name": "Power Set using Bitmask",
        "lc": "subsets",
        "gfg": "https://takeuforward.org/data-structure/power-set-print-all-the-possible-subsequences-of-the-string/",
        "diff": "Medium",
        "yt": "https://youtu.be/b7AYbpM5YrE"
      }
    ]
  },
  {
    "id": "tries",
    "num": 19,
    "title": "Tries",
    "problems": [
      {
        "id": 247,
        "name": "Implement Trie (Prefix Tree)",
        "lc": "implement-trie-prefix-tree",
        "gfg": "https://takeuforward.org/data-structure/implement-trie-1/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=dBGUmUQhjaM"
      },
      {
        "id": 248,
        "name": "Longest Common Prefix (Trie)",
        "lc": "longest-common-prefix",
        "gfg": "https://www.geeksforgeeks.org/longest-common-prefix-using-trie/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=AWnBa91lThI"
      },
      {
        "id": 249,
        "name": "Maximum XOR of Two Numbers",
        "lc": "maximum-xor-of-two-numbers-in-an-array",
        "gfg": "https://takeuforward.org/data-structure/maximum-xor-of-two-numbers-in-an-array/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=EIhAwfHubE8"
      },
      {
        "id": 250,
        "name": "Maximum XOR with Element from Array",
        "lc": "maximum-xor-with-an-element-from-array",
        "gfg": "https://takeuforward.org/trie/maximum-xor-queries-trie/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=Q8LhG9Pi5KM&list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp&index=7"
      },
      {
        "id": 251,
        "name": "Word Break",
        "lc": "word-break",
        "gfg": "https://www.geeksforgeeks.org/word-break-problem-trie-solution/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=th4O11Xi1-4"
      }
    ]
  },
  {
    "id": "heap",
    "num": 20,
    "title": "Heaps (Priority Queue)",
    "problems": [
      {
        "id": 252,
        "name": "Kth Largest Element in Array",
        "lc": "kth-largest-element-in-an-array",
        "gfg": "https://takeuforward.org/data-structure/kth-largest-smallest-element-in-an-array/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=3DyT3JHVyqa"
      },
      {
        "id": 253,
        "name": "Kth Smallest Element",
        "lc": "kth-smallest-element-in-a-sorted-matrix",
        "gfg": "https://www.geeksforgeeks.org/kth-smallest-element-in-a-row-wise-and-column-wise-sorted-2d-array-set-1/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=hGK_5n81d7c"
      },
      {
        "id": 254,
        "name": "Merge K Sorted Lists",
        "lc": "merge-k-sorted-lists",
        "gfg": "https://www.geeksforgeeks.org/merge-k-sorted-linked-lists/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=ptYUCjfNARg"
      },
      {
        "id": 255,
        "name": "Top K Frequent Elements",
        "lc": "top-k-frequent-elements",
        "gfg": "https://www.geeksforgeeks.org/find-k-most-frequent-words-from-a-file/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=YPTqKIgVk-k"
      },
      {
        "id": 256,
        "name": "Find Median from Data Stream",
        "lc": "find-median-from-data-stream",
        "gfg": "https://www.geeksforgeeks.org/median-of-stream-of-integers-running-integers/",
        "diff": "Hard",
        "yt": "https://www.youtube.com/watch?v=itmhHWaHupI"
      },
      {
        "id": 257,
        "name": "Sliding Window Median",
        "lc": "sliding-window-median",
        "gfg": "https://takeuforward.org/data-structure/sliding-window-maximum/",
        "diff": "Hard",
        "yt": "https://youtu.be/NwBvene4Imo?si=eU1PY-bcQfk5wdog"
      },
      {
        "id": 258,
        "name": "Task Scheduler",
        "lc": "task-scheduler",
        "gfg": "https://www.geeksforgeeks.org/task-scheduler/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=r8cbV943g4w"
      },
      {
        "id": 259,
        "name": "Hand of Straights",
        "lc": "hand-of-straights",
        "gfg": "https://www.geeksforgeeks.org/hand-of-straights/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=yW92W_v6Z18"
      },
      {
        "id": 376,
        "name": "Kth Largest Element in a Stream",
        "lc": "kth-largest-element-in-a-stream",
        "gfg": "https://www.geeksforgeeks.org/kth-largest-element-in-a-stream/",
        "diff": "Easy",
        "yt": "https://www.youtube.com/watch?v=3DyT3JHVyqa"
      },
      {
        "id": 260,
        "name": "K Closest Points to Origin",
        "lc": "k-closest-points-to-origin",
        "gfg": "https://www.geeksforgeeks.org/find-k-closest-points-to-the-origin/",
        "diff": "Medium",
        "yt": "https://www.youtube.com/watch?v=eaYX0Ee0Kcg"
      }
    ]
  }
];
