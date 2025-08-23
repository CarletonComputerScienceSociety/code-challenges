import { Question } from "./types";

/**
 * Question 1: Library Book Inventory System
 *
 * TOPICS: Hash Maps/Dictionaries, Array Traversal, Frequency Analysis
 *
 * SOLUTION APPROACH:
 * 1. Use a hash map to count frequency of each book ID
 * 2. Iterate through the array once to count frequencies
 * 3. Find the most frequent book ID
 * 4. If multiple books have same frequency, return the one with highest ID
 *
 * ALGORITHM COMPLEXITY: O(n) time, O(n) space
 *
 * KEY CONCEPTS: Hash maps, frequency counting, max finding
 */
const question1Body = `
<p><b>A librarian is organizing a massive collection of books. Given the book IDs, find the most frequent book ID. If there are multiple books with the same frequency, return the one with the highest ID. Return this single string.</b></p>
<p><code>[101, 203, 101, 305, 203, 101, 407, 203, 509, 101, 610, 203, 712, 101, 814, 203, 915, 101, 1020, 203, 1125, 101, 1230, 203, 1335, 101, 1440, 203, 1545, 101, 1650, 203, 1755, 101, 1860, 203, 1965, 101, 2070, 203, 2175, 101, 2280, 203, 2385, 101, 2490, 203, 2595, 101, 2700, 203, 2805, 101, 2910, 203, 3015, 101, 3120, 203, 3225, 101, 3330, 203, 3435, 101, 3540, 203, 3645, 101, 3750, 203, 3855, 101, 3960, 203, 4065, 101, 4170, 203, 4275, 101, 4380, 203, 4485, 101, 4590, 203, 4695, 101, 4800, 203, 4905, 101, 5010, 203, 5115, 101, 5220, 203, 5325, 101, 5430, 203, 5535, 101, 5640, 203, 5745, 101, 5850, 203, 5955, 101, 6060, 203, 6165, 101, 6270, 203, 6375, 101, 6480, 203, 6585, 101, 6690, 203, 6795, 101, 6900, 203, 7005, 101, 7110, 203, 7215, 101, 7320, 203, 7425, 101, 7530, 203, 7635, 101, 7740, 203, 7845, 101, 7950, 203, 8055, 101, 8160, 203, 8265, 101, 8370, 203, 8475, 101, 8580, 203, 8685, 101, 8790, 203, 8895, 101, 9000, 203]</code></p>
<p>Example submission: <code>101</code></p>
`;

/**
 * Question 2: Password Strength Analyzer
 *
 * TOPICS: String Manipulation, Character Classification, Boolean Logic
 *
 * SOLUTION APPROACH:
 * 1. Check each password for length >= 8
 * 2. Check for uppercase letters, lowercase letters, and numbers
 * 3. Track the longest valid password
 * 4. Return the first one if multiple have same length
 *
 * ALGORITHM COMPLEXITY: O(n*m) time where n is passwords and m is avg length
 *
 * KEY CONCEPTS: String validation, character checking, conditional logic
 */
const question2Body = `
<p><b>A security system needs to analyze password strength across a large dataset. Find the longest valid password (at least 8 characters, contains both uppercase and lowercase letters, and has at least one number). If there are multiple passwords with the same length, return the one that appears first in the list. Return this single string.</b></p>
<p><code>["RaceCar2024!", "weak123", "STRONG456", "mixedCase789", "noNumbers", "ALLUPPER", "alllower", "Special@#$%", "ComplexP@ss1", "Simple123", "VeryLongPassword123!", "Short1", "NoDigitsHere", "UPPERlower123", "Mixed@#$%123", "JustLetters", "123456789", "!@#$%^&*()", "Password123!", "SecureP@ss1"]</code></p>
<p>Example submission: <code>Password123!</code></p>
`;

/**
 * Question 3: Student Grade Distribution Analyzer
 *
 * TOPICS: Hash Maps/Sets, Data Cleaning, Statistical Analysis
 *
 * SOLUTION APPROACH:
 * 1. Use a set to find unique grades
 * 2. Count frequency of grade 78 (corrupted)
 * 3. Calculate median of unique valid grades (excluding 78)
 * 4. Sum: unique count + frequency of 78 + median
 *
 * ALGORITHM COMPLEXITY: O(n log n) time for sorting to find median
 *
 * KEY CONCEPTS: Data cleaning, frequency analysis, median calculation
 */
const question3Body = `
<p><b>A teacher has recorded grades for multiple classes with some corrupted data. The system has incorrectly recorded one grade (78) multiple times due to a sensor malfunction. Calculate the sum of: (1) the actual number of unique valid grades (excluding the corrupted repeated grade), (2) the frequency count of the corrupted grade, and (3) the median of all unique valid grades. Return this single number.</b></p>
<p><code>[78, 92, 85, 78, 94, 87, 78, 95, 89, 92, 78, 88, 91, 78, 96, 83, 78, 90, 85, 78, 93, 86, 78, 97, 84, 78, 88, 92, 78, 89, 95, 78, 91, 87, 78, 94, 86, 78, 90, 88, 78, 93, 85, 78, 96, 89, 78, 92, 87, 78, 95, 91, 78, 88, 94, 78, 89, 93, 78, 87, 96, 78, 85, 92, 78, 90, 88, 78, 94, 86, 78, 91, 89, 78, 95, 87, 78, 93, 85, 78, 96, 88, 78, 92, 90, 78, 89, 94, 78, 87, 91, 78, 95, 86, 78, 93, 88, 78, 96, 85]</code></p>
<p>Example submission: <code>125</code></p>
`;

/**
 * Question 4: Array Element Finder
 *
 * TOPICS: Set Operations, Sorting, Array Processing
 *
 * SOLUTION APPROACH:
 * 1. Use Set to find unique elements
 * 2. Sort unique elements in descending order
 * 3. Return the second element (second largest)
 * 4. Return -1 if fewer than 2 unique elements
 *
 * ALGORITHM COMPLEXITY: O(n log n) time for sorting unique elements
 *
 * KEY CONCEPTS: Set operations, sorting, conditional logic
 */
const question4Body = `
<p><b>A data analyst needs to find the second largest unique number in a dataset. Find the second largest unique number. If there are fewer than 2 unique numbers, return -1. Return this single number.</b></p>
<p><code>[45, 67, 23, 89, 12, 67, 45, 34, 78, 23, 56, 89, 91, 34, 45, 67, 23, 78, 56, 34, 89, 45, 67, 23, 78, 56, 34, 89, 45, 67, 23, 78, 56, 34, 89, 45, 67, 23, 78, 56, 34, 89, 45, 67, 23, 78, 56, 34, 89, 45, 67, 23, 78, 56, 34, 89, 12, 91]</code></p>
<p>Example submission: <code>91</code></p>
`;

/**
 * Question 5: String Pattern Matching
 *
 * TOPICS: String Traversal, Pattern Matching, Case Insensitive Comparison
 *
 * SOLUTION APPROACH:
 * 1. Convert text to lowercase for case-insensitive matching
 * 2. Count occurrences of pattern in text
 * 3. Multiply count by pattern length
 *
 * ALGORITHM COMPLEXITY: O(n * m) where n is text length and m is pattern length
 *
 * KEY CONCEPTS: String searching, case insensitive comparison, counting
 */
const question5Body = `
<p><b>A text processing system needs to count pattern occurrences in a large document. Given the text string and the pattern "programming", count how many times the pattern appears in the text (case-insensitive). Then multiply this count by the length of the pattern. Return this single number.</b></p>
<p>Text: <code>"programming is fun and programming helps solve problems programming makes programming easier when programming with good programming practices"</code></p>
<p>Pattern: <code>"programming"</code></p>
<p>Example submission: <code>55</code></p>
`;

/**
 * Question 6: Programming Language Syntax Analyzer
 *
 * TOPICS: Stack Data Structure, Character Matching, String Traversal
 *
 * SOLUTION APPROACH:
 * 1. For each code snippet, use stack to validate brackets
 * 2. Count valid snippets and sum their lengths
 * 3. Return total count + total length
 *
 * ALGORITHM COMPLEXITY: O(n) time with O(n) space per snippet
 *
 * KEY CONCEPTS: Stack operations, bracket validation, string processing
 */
const question6Body = `
<p><b>A code editor needs to analyze multiple code snippets for bracket balance. Calculate the sum of the total number of valid code snippets and the sum of all snippet lengths. Return this single number.</b></p>
<p><code>["function() { return [1, 2, 3]; }", "if (x > 0) { y = [a, b]; }", "for (i = 0; i < n; i++) { arr[i] = {val: i}; }", "while (condition) { do { something(); } while (inner); }", "switch (x) { case 1: { return [1]; } case 2: { return [2]; } }", "try { func(); } catch (e) { log(e); }", "class Test { constructor() { this.arr = []; } }", "function nested() { if (x) { while (y) { for (z) { } } } }", "array.map(x => { return {val: x}; })", "obj.method({param: [1, 2, 3]});"]</code></p>
<p>Example submission: <code>431</code></p>
`;

/**
 * Question 7: Shopping Cart Price Analyzer
 *
 * TOPICS: Two Pointers, Sorted Array Properties, Array Processing
 *
 * SOLUTION APPROACH:
 * 1. For each price list and budget, use two pointers to find pairs that sum to budget
 * 2. Count successful purchases and sum their indices
 * 3. Return total count + total indices
 *
 * ALGORITHM COMPLEXITY: O(n) with O(1) space per list
 *
 * KEY CONCEPTS: Two pointers, target sum, sorted arrays
 */
const question7Body = `
<p><b>An e-commerce system has multiple sorted lists of product prices. Calculate the sum of the total number of successful purchases (where two items can be found that add up to the budget) and the sum of all successful purchase indices. Return this single number.</b></p>
<p>Price lists: <code>[[10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [15, 25, 35, 45, 55, 65, 75, 85, 95, 105], [5, 15, 25, 35, 45, 55, 65, 75, 85, 95], [20, 40, 60, 80, 100, 120, 140, 160, 180, 200], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]</code></p>
<p>Target budgets: <code>[150, 200, 100, 300, 15]</code></p>
<p>Example submission: <code>12</code></p>
`;

/**
 * Question 8: Social Media Hashtag Analyzer
 *
 * TOPICS: Sliding Window, Hash Maps, Two Pointers
 *
 * SOLUTION APPROACH:
 * 1. Use sliding window technique with hash map to track unique hashtags
 * 2. Expand window when new hashtag, contract when duplicate found
 * 3. Track maximum window size
 *
 * ALGORITHM COMPLEXITY: O(n) with O(min(m,n)) space
 *
 * KEY CONCEPTS: Sliding window, hash maps, string processing
 */
const question8Body = `
<p><b>A social media platform needs to find the longest sequence of unique hashtags in a post. Find the length of the longest substring without repeating hashtags. Return this single number.</b></p>
<p>Hashtag sequence: <code>"#coding #programming #coding #python #java #python #algorithm"</code></p>
<p>Example submission: <code>3</code></p>
`;

/**
 * Question 9: Water Tank Optimization System
 *
 * TOPICS: Two Pointers, Greedy Algorithm, Area Calculation
 *
 * SOLUTION APPROACH:
 * 1. Use two pointers from both ends
 * 2. Calculate area = width * min(height1, height2)
 * 3. Move pointer with smaller height
 * 4. Track maximum area
 *
 * ALGORITHM COMPLEXITY: O(n) time, O(1) space
 *
 * KEY CONCEPTS: Two pointers, greedy algorithms, optimization
 */
const question9Body = `
<p><b>A water management company has tank heights representing storage capacity. Find the maximum amount of water that can be stored between any two tanks, where the water level is limited by the shorter tank. Return this single number.</b></p>
<p>Tank heights: <code>[3, 8, 6, 2, 5, 4, 8, 3, 7]</code></p>
<p>Example submission: <code>42</code></p>
`;

/**
 * Question 10: Code Generator for Nested Functions
 *
 * TOPICS: Backtracking, Recursion, Constraint Checking
 *
 * SOLUTION APPROACH:
 * 1. Use recursion to generate all valid combinations
 * 2. Each function has exactly one parameter
 * 3. Generate 3 levels of nesting
 * 4. Count total valid combinations
 *
 * ALGORITHM COMPLEXITY: Exponential time for generating combinations
 *
 * KEY CONCEPTS: Backtracking, recursion, combinatorics
 */
const question10Body = `
<p><b>A code generation tool needs to create all valid combinations of nested function calls with 3 levels of nesting. Generate all valid combinations where each function has exactly one parameter. Return the total number of valid combinations as a single number.</b></p>
<p>Example submission: <code>6</code></p>
`;

/**
 * Question 11: Advanced Game Level Progression with Minimum Jumps
 *
 * TOPICS: Dynamic Programming, Greedy Algorithm, Array Traversal
 *
 * SOLUTION APPROACH:
 * 1. Use dynamic programming to track minimum jumps to each position
 * 2. For each position, try all possible jumps
 * 3. Update minimum jumps for reachable positions
 * 4. Return minimum jumps to reach the end
 *
 * ALGORITHM COMPLEXITY: O(n²) with standard DP, O(n) with greedy optimization
 *
 * KEY CONCEPTS: Dynamic programming, greedy algorithms, optimization
 */
const question11Body = `
<p><b>A game developer needs to find the minimum number of jumps required to reach the final level. Each level number represents the maximum number of levels the player can skip from that position. Find the minimum number of jumps needed to reach the final level. If it's impossible to reach the end, return -1. Return this single number.</b></p>
<p>Level progression: <code>[2, 3, 1, 1, 4, 2, 1, 3, 2, 1, 4, 3, 2, 1, 5, 2, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 2, 5, 1, 3, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3, 2, 4, 1, 5, 2, 3, 1, 4]</code></p>
<p>Example submission: <code>20</code></p>
`;

/**
 * Question 12: Robot Navigation Path Counter
 *
 * TOPICS: Dynamic Programming, Combinatorics, Grid Traversal
 *
 * SOLUTION APPROACH:
 * 1. Use dynamic programming with 2D array
 * 2. dp[i][j] = number of paths to reach cell (i,j)
 * 3. Base case: dp[0][0] = 1
 * 4. Recurrence: dp[i][j] = dp[i-1][j] + dp[i][j-1]
 * 5. Alternative: Use combinatorics formula C(m+n-2, m-1)
 *
 * ALGORITHM COMPLEXITY: O(m*n) time, O(m*n) space
 *
 * KEY CONCEPTS: Dynamic programming, combinatorics, grid traversal
 */
const question12Body = `
<p><b>A robotics engineer needs to calculate unique paths for a robot navigating from top-left to bottom-right of a warehouse grid. Given a 4x6 warehouse layout, find the number of unique paths (robot can only move right or down). Return this single number.</b></p>
<p>Grid size: 4 rows × 6 columns</p>
<p>Example submission: <code>70</code></p>
`;

/**
 * Question 13: Data Mining Subset Generator
 *
 * TOPICS: Backtracking, Bit Manipulation, Recursion
 *
 * SOLUTION APPROACH:
 * 1. Generate all possible subsets of the feature set
 * 2. Use backtracking or bit manipulation
 * 3. Count total number of combinations (2^n)
 *
 * ALGORITHM COMPLEXITY: O(2^n) time and space
 *
 * KEY CONCEPTS: Power set, backtracking, bit manipulation
 */
const question13Body = `
<p><b>A data scientist needs to generate all possible combinations of features for machine learning analysis. Given the feature set [age, income, education, location], generate all possible feature combinations. Return the total number of possible combinations as a single number.</b></p>
<p>Feature set: <code>[age, income, education, location]</code></p>
<p>Example submission: <code>15</code></p>
`;

/**
 * Question 14: Binary Tree Maximum Depth Calculator
 *
 * TOPICS: Tree Traversal, Recursion, Depth-First Search
 *
 * SOLUTION APPROACH:
 * 1. Use recursive depth-first search
 * 2. For each node, calculate max depth of left and right subtrees
 * 3. Return 1 + max(left_depth, right_depth)
 * 4. Base case: null node returns 0
 *
 * ALGORITHM COMPLEXITY: O(n) time where n is number of nodes
 *
 * KEY CONCEPTS: Tree traversal, recursion, depth-first search
 */
const question14Body = `
<p><b>A software engineer needs to calculate the maximum depth of a binary tree to optimize memory allocation. Given a binary tree represented as a nested list structure, find the maximum depth of the tree. The depth of a tree is the number of nodes along the longest path from the root node down to the farthest leaf node. Return this single number.</b></p>
<p>Binary tree: <code>[3, [9, null, null], [20, [15, null, null], [7, null, null]]]</code></p>
<p>Format: <code>[value, left_child, right_child]</code> where null represents no child</p>
<p>Example submission: <code>4</code></p>
`;

// Expected answers
const question1Answer = "203";
const question2Answer = "VeryLongPassword123!";
const question3Answer = "138";
const question4Answer = "89";
const question5Answer = "66";
const question6Answer = "441";
const question7Answer = "15";
const question8Answer = "4";
const question9Answer = "49";
const question10Answer = "8";
const question11Answer = "17";
const question12Answer = "56";
const question13Answer = "16";
const question14Answer = "3";

const checkArrayEquivalency = <T>(input: string, answer: T[]): boolean => {
  try {
    const parsedInput = JSON.parse(input);

    if (!Array.isArray(parsedInput) || parsedInput.length !== answer.length) {
      return false;
    }

    const sortedParsedInput = [...parsedInput].sort();
    const sortedAnswer = [...answer].sort();

    return sortedParsedInput.every(
      (value, index) => value === sortedAnswer[index],
    );
  } catch (e) {
    return false;
  }
};

const question1: Question = {
  id: "week-of-awesome-2025-1",
  title: "Library Book Inventory System",
  difficulty: "Easy",
  content: question1Body,
  evaluate: (input: string): boolean => {
    return input.trim() === question1Answer;
  },
  startDate: new Date("2025-09-07"),
  endDate: new Date("2025-09-14"),
};

const question2: Question = {
  id: "week-of-awesome-2025-2",
  title: "Password Strength Analyzer",
  difficulty: "Easy",
  content: question2Body,
  evaluate: (input: string): boolean => {
    return input.trim() === question2Answer;
  },
  startDate: new Date("2025-09-08"),
  endDate: new Date("2025-09-14"),
};

const question3: Question = {
  id: "week-of-awesome-2025-3",
  title: "Student Grade Distribution Analyzer",
  difficulty: "Easy",
  content: question3Body,
  evaluate: (input: string): boolean => {
    return input.trim() === question3Answer;
  },
  startDate: new Date("2025-09-09"),
  endDate: new Date("2025-09-14"),
};

const question4: Question = {
  id: "week-of-awesome-2025-4",
  title: "Array Element Finder",
  difficulty: "Easy",
  content: question4Body,
  evaluate: (input: string): boolean => {
    return input.trim() === question4Answer;
  },
  startDate: new Date("2025-09-10"),
  endDate: new Date("2025-09-14"),
};

const question5: Question = {
  id: "week-of-awesome-2025-5",
  title: "String Pattern Matching",
  difficulty: "Easy",
  content: question5Body,
  evaluate: (input: string): boolean => {
    return input.trim() === question5Answer;
  },
  startDate: new Date("2025-09-11"),
  endDate: new Date("2025-09-14"),
};

const question6: Question = {
  id: "week-of-awesome-2025-6",
  title: "Programming Language Syntax Analyzer",
  difficulty: "Easy",
  content: question6Body,
  evaluate: (input: string): boolean => {
    return input.trim() === question6Answer;
  },
  startDate: new Date("2025-09-12"),
  endDate: new Date("2025-09-14"),
};

const question7: Question = {
  id: "week-of-awesome-2025-7",
  title: "Shopping Cart Price Analyzer",
  difficulty: "Easy",
  content: question7Body,
  evaluate: (input: string): boolean => {
    return input.trim() === question7Answer;
  },
  startDate: new Date("2025-09-13"),
  endDate: new Date("2025-09-14"),
};

const question8: Question = {
  id: "week-of-awesome-2025-8",
  title: "Social Media Hashtag Analyzer",
  difficulty: "Medium",
  content: question8Body,
  evaluate: (input: string): boolean => {
    return input.trim() === question8Answer;
  },
  startDate: new Date("2025-09-07"),
  endDate: new Date("2025-09-14"),
};

const question9: Question = {
  id: "week-of-awesome-2025-9",
  title: "Water Tank Optimization System",
  difficulty: "Medium",
  content: question9Body,
  evaluate: (input: string): boolean => {
    return input.trim() === question9Answer;
  },
  startDate: new Date("2025-09-08"),
  endDate: new Date("2025-09-14"),
};

const question10: Question = {
  id: "week-of-awesome-2025-10",
  title: "Code Generator for Nested Functions",
  difficulty: "Hard",
  content: question10Body,
  evaluate: (input: string): boolean => {
    return input.trim() === question10Answer;
  },
  startDate: new Date("2025-09-09"),
  endDate: new Date("2025-09-14"),
};

const question11: Question = {
  id: "week-of-awesome-2025-11",
  title: "Advanced Game Level Progression with Minimum Jumps",
  difficulty: "Medium",
  content: question11Body,
  evaluate: (input: string): boolean => {
    return input.trim() === question11Answer;
  },
  startDate: new Date("2025-09-10"),
  endDate: new Date("2025-09-14"),
};

const question12: Question = {
  id: "week-of-awesome-2025-12",
  title: "Robot Navigation Path Counter",
  difficulty: "Medium",
  content: question12Body,
  evaluate: (input: string): boolean => {
    return input.trim() === question12Answer;
  },
  startDate: new Date("2025-09-11"),
  endDate: new Date("2025-09-14"),
};

const question13: Question = {
  id: "week-of-awesome-2025-13",
  title: "Data Mining Subset Generator",
  difficulty: "Medium",
  content: question13Body,
  evaluate: (input: string): boolean => {
    return input.trim() === question13Answer;
  },
  startDate: new Date("2025-09-12"),
  endDate: new Date("2025-09-14"),
};

const question14: Question = {
  id: "week-of-awesome-2025-14",
  title: "Binary Tree Maximum Depth Calculator",
  difficulty: "Medium",
  content: question14Body,
  evaluate: (input: string): boolean => {
    return input.trim() === question14Answer;
  },
  startDate: new Date("2025-09-13"),
  endDate: new Date("2025-09-14"),
};

export const questions = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
  question11,
  question12,
  question13,
  question14,
];
