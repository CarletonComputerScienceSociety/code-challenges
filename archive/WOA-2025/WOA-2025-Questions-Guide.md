# Week of Awesome 2025 - Coding Challenge Guide

## Overview
This document contains 14 coding challenges for the Week of Awesome 2025 event. The first 7 questions are designed for first-year Computer Science students (Easy difficulty), while the last 7 questions target third and fourth-year students (Medium difficulty). Questions are ordered by increasing difficulty within each section.

---

## First-Year Student Questions (Easy Difficulty)

### Question 1: Library Book Inventory System
**Question ID:** `week-of-awesome-2025-1`  
**Difficulty:** Easy  
**Start Date:** September 7, 2025  
**End Date:** September 14, 2025  

### Problem Description
A librarian is organizing a massive collection of books. Given the book IDs `[101, 203, 101, 305, 203, 101, 407, 203, 509, 101, 610, 203, 712, 101, 814, 203, 915, 101, 1020, 203, 1125, 101, 1230, 203, 1335, 101, 1440, 203, 1545, 101, 1650, 203, 1755, 101, 1860, 203, 1965, 101, 2070, 203, 2175, 101, 2280, 203, 2385, 101, 2490, 203, 2595, 101, 2700, 203, 2805, 101, 2910, 203, 3015, 101, 3120, 203, 3225, 101, 3330, 203, 3435, 101, 3540, 203, 3645, 101, 3750, 203, 3855, 101, 3960, 203, 4065, 101, 4170, 203, 4275, 101, 4380, 203, 4485, 101, 4590, 203, 4695, 101, 4800, 203, 4905, 101, 5010, 203, 5115, 101, 5220, 203, 5325, 101, 5430, 203, 5535, 101, 5640, 203, 5745, 101, 5850, 203, 5955, 101, 6060, 203, 6165, 101, 6270, 203, 6375, 101, 6480, 203, 6585, 101, 6690, 203, 6795, 101, 6900, 203, 7005, 101, 7110, 203, 7215, 101, 7320, 203, 7425, 101, 7530, 203, 7635, 101, 7740, 203, 7845, 101, 7950, 203, 8055, 101, 8160, 203, 8265, 101, 8370, 203, 8475, 101, 8580, 203, 8685, 101, 8790, 203, 8895, 101, 9000, 203]`, find the most frequent book ID. If there are multiple books with the same frequency, return the one with the highest ID. Return this single string.

### Expected Answer
```
203
```

### Fundamental Concepts
- **Hash Maps/Dictionaries**: Store book ID frequencies
- **Array Traversal**: Iterate through book IDs
- **Key-Value Pairs**: Basic data structure usage
- **Mathematical Operations**: Sum frequencies and count unique items
- **Time Complexity**: O(n) where n is number of books

---

### Question 2: Password Strength Analyzer
**Question ID:** `week-of-awesome-2025-2`  
**Difficulty:** Easy  
**Start Date:** September 8, 2025  
**End Date:** September 14, 2025  

### Problem Description
A security system needs to analyze password strength across a large dataset. Given the passwords `["RaceCar2024!", "weak123", "STRONG456", "mixedCase789", "noNumbers", "ALLUPPER", "alllower", "Special@#$%", "ComplexP@ss1", "Simple123", "VeryLongPassword123!", "Short1", "NoDigitsHere", "UPPERlower123", "Mixed@#$%123", "JustLetters", "123456789", "!@#$%^&*()", "Password123!", "SecureP@ss1"]`, find the longest valid password (at least 8 characters, contains both uppercase and lowercase letters, and has at least one number). If there are multiple passwords with the same length, return the one that appears first in the list. Return this single string.

### Expected Answer
```
VeryLongPassword123!
```

### Fundamental Concepts
- **String Manipulation**: Character checking and case handling
- **Character Classification**: Identify letter types and numbers
- **Boolean Logic**: Combine multiple conditions
- **Array Processing**: Handle multiple passwords
- **Mathematical Operations**: Count and sum operations

---

### Question 3: Student Grade Distribution Analyzer
**Question ID:** `week-of-awesome-2025-3`  
**Difficulty:** Easy-Medium  
**Start Date:** September 9, 2025  
**End Date:** September 14, 2025  

### Problem Description
A teacher has recorded grades for multiple classes with some corrupted data. Given the grade data `[78, 92, 85, 78, 94, 87, 78, 95, 89, 92, 78, 88, 91, 78, 96, 83, 78, 90, 85, 78, 93, 86, 78, 97, 84, 78, 88, 92, 78, 89, 95, 78, 91, 87, 78, 94, 86, 78, 90, 88, 78, 93, 85, 78, 96, 89, 78, 92, 87, 78, 95, 91, 78, 88, 94, 78, 89, 93, 78, 87, 96, 78, 85, 92, 78, 90, 88, 78, 94, 86, 78, 91, 89, 78, 95, 87, 78, 93, 85, 78, 96, 88, 78, 92, 90, 78, 89, 94, 78, 87, 91, 78, 95, 86, 78, 93, 88, 78, 96, 85]`, the system has incorrectly recorded one grade (78) multiple times due to a sensor malfunction. Calculate the sum of: (1) the actual number of unique valid grades (excluding the corrupted repeated grade), (2) the frequency count of the corrupted grade, and (3) the median of all unique valid grades. Return this single number.

### Expected Answer
```
138
```

### Fundamental Concepts
- **Hash Maps/Sets**: Track unique grades and frequencies
- **Data Cleaning**: Identify and handle corrupted data
- **Statistical Analysis**: Calculate median from unique values
- **Array Processing**: Handle large datasets efficiently
- **Frequency Analysis**: Count occurrences of specific values
- **Time Complexity**: O(n log n) for sorting to find median

---

### Question 4: Array Element Finder
**Question ID:** `week-of-awesome-2025-4`  
**Difficulty:** Easy  
**Start Date:** September 10, 2025  
**End Date:** September 14, 2025  

### Problem Description
A data analyst needs to find the second largest unique number in a dataset. Given the numbers `[45, 67, 23, 89, 12, 67, 45, 34, 78, 23, 56, 89, 91, 34, 45, 67, 23, 78, 56, 34, 89, 45, 67, 23, 78, 56, 34, 89, 45, 67, 23, 78, 56, 34, 89, 45, 67, 23, 78, 56, 34, 89, 45, 67, 23, 78, 56, 34, 89, 45, 67, 23, 78, 56, 34, 89, 12, 91]`, find the second largest unique number. If there are fewer than 2 unique numbers, return -1. Return this single number.

### Expected Answer
```
89
```

### Fundamental Concepts
- **Set Operations**: Use set to find unique elements
- **Sorting**: Sort unique elements to find second largest
- **Array Processing**: Handle duplicate values
- **Conditional Logic**: Check if enough unique elements exist
- **Time Complexity**: O(n log n) for sorting unique elements

---

### Question 5: String Pattern Matching
**Question ID:** `week-of-awesome-2025-5`  
**Difficulty:** Easy-Medium  
**Start Date:** September 11, 2025  
**End Date:** September 14, 2025  

### Problem Description
A text processing system needs to count pattern occurrences in a large document. Given the text string `"programming is fun and programming helps solve problems programming makes programming easier when programming with good programming practices"` and the pattern `"programming"`, count how many times the pattern appears in the text (case-insensitive). Then multiply this count by the length of the pattern. Return this single number.

### Expected Answer
```
66
```

### Fundamental Concepts
- **String Traversal**: Search through text character by character
- **Pattern Matching**: Find substring occurrences
- **Case Insensitive Comparison**: Handle different letter cases
- **Mathematical Operations**: Count occurrences and multiply by pattern length
- **Time Complexity**: O(n * m) where n is text length and m is pattern length

---

### Question 6: Programming Language Syntax Analyzer
**Question ID:** `week-of-awesome-2025-6`  
**Difficulty:** Easy  
**Start Date:** September 12, 2025  
**End Date:** September 14, 2025  

### Problem Description
A code editor needs to analyze multiple code snippets for bracket balance. Given the code snippets `["function() { return [1, 2, 3]; }", "if (x > 0) { y = [a, b]; }", "for (i = 0; i < n; i++) { arr[i] = {val: i}; }", "while (condition) { do { something(); } while (inner); }", "switch (x) { case 1: { return [1]; } case 2: { return [2]; } }", "try { func(); } catch (e) { log(e); }", "class Test { constructor() { this.arr = []; } }", "function nested() { if (x) { while (y) { for (z) { } } } }", "array.map(x => { return {val: x}; })", "obj.method({param: [1, 2, 3]});"]`, calculate the sum of the total number of valid code snippets and the sum of all snippet lengths. Return this single number.

### Expected Answer
```
441
```

### Fundamental Concepts
- **Stack Data Structure**: Use stack to track opening brackets
- **Character Matching**: Match opening and closing brackets of same type
- **String Traversal**: Process each character
- **Array Processing**: Handle multiple code snippets
- **Mathematical Operations**: Count valid snippets and sum lengths
- **Time Complexity**: O(n) with O(n) space per snippet

---

### Question 7: Shopping Cart Price Analyzer
**Question ID:** `week-of-awesome-2025-7`  
**Difficulty:** Easy  
**Start Date:** September 13, 2025  
**End Date:** September 14, 2025  

### Problem Description
An e-commerce system has multiple sorted lists of product prices. Given the price lists `[[10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [15, 25, 35, 45, 55, 65, 75, 85, 95, 105], [5, 15, 25, 35, 45, 55, 65, 75, 85, 95], [20, 40, 60, 80, 100, 120, 140, 160, 180, 200], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]` and target budgets `[150, 200, 100, 300, 15]`, calculate the sum of the total number of successful purchases (where two items can be found that add up to the budget) and the sum of all successful purchase indices. Return this single number.

### Expected Answer
```
15
```

### Fundamental Concepts
- **Two Pointers**: Use left and right pointers for O(n) solution
- **Sorted Array Properties**: Leverage sorting for efficient search
- **Pointer Movement**: Move pointers based on sum comparison
- **Array Processing**: Handle multiple price lists
- **Mathematical Operations**: Count successes and sum indices
- **Time Complexity**: O(n) with O(1) space per list

---

## Third/Fourth-Year Student Questions (Medium Difficulty)

### Question 8: Social Media Hashtag Analyzer
**Question ID:** `week-of-awesome-2025-8`  
**Difficulty:** Medium  
**Start Date:** September 7, 2025  
**End Date:** September 14, 2025  

### Problem Description
A social media platform needs to find the longest sequence of unique hashtags in a post. Given the hashtag sequence "#coding #programming #coding #python #java #python #algorithm", find the length of the longest substring without repeating hashtags. Return this single number.

### Expected Answer
```
4
```

### Fundamental Concepts
- **Sliding Window**: Maintain window of unique hashtags
- **Hash Maps**: Track hashtag positions
- **Two Pointers**: Expand and contract window
- **String Processing**: Handle hashtag symbols
- **Time Complexity**: O(n) with O(min(m,n)) space

---

### Question 9: Water Tank Optimization System
**Question ID:** `week-of-awesome-2025-9`  
**Difficulty:** Medium  
**Start Date:** September 8, 2025  
**End Date:** September 14, 2025  

### Problem Description
A water management company has tank heights representing storage capacity: `[3, 8, 6, 2, 5, 4, 8, 3, 7]`. Find the maximum amount of water that can be stored between any two tanks, where the water level is limited by the shorter tank. Return this single number.

### Expected Answer
```
49
```

### Fundamental Concepts
- **Two Pointers**: Start from both ends
- **Greedy Algorithm**: Move pointer with smaller height
- **Area Calculation**: width * min(height1, height2)
- **Optimization**: Skip unnecessary comparisons

---

### Question 10: Code Generator for Nested Functions
**Question ID:** `week-of-awesome-2025-10`  
**Difficulty:** Medium  
**Start Date:** September 9, 2025  
**End Date:** September 14, 2025  

### Problem Description
A code generation tool needs to create all valid combinations of nested function calls with 3 levels of nesting. Generate all valid combinations where each function has exactly one parameter. Return the total number of valid combinations as a single number.

### Expected Answer
```
8
```

### Fundamental Concepts
- **Backtracking**: Generate all valid combinations
- **Recursion**: Build function calls recursively
- **Constraint Checking**: Ensure valid nesting
- **String Building**: Construct function call strings

---

### Question 11: Advanced Game Level Progression with Minimum Jumps
**Question ID:** `week-of-awesome-2025-11`  
**Difficulty:** Hard  
**Start Date:** September 10, 2025  
**End Date:** September 14, 2025  

### Problem Description
A game developer needs to find the minimum number of jumps required to reach the final level. Each level number represents the maximum number of levels the player can skip from that position. Given level progression `[2, 3, 1, 1, 4, 2, 1, 3, 2, 1, 4, 3, 2, 1, 5, 2, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 2, 5, 1, 3, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3, 2, 4, 1, 5, 2, 3, 1, 4]`, find the minimum number of jumps needed to reach the final level. If it's impossible to reach the end, return -1. Return this single number.

### Expected Answer
```
17
```

### Fundamental Concepts
- **Dynamic Programming**: Use DP array to track minimum jumps to each position
- **Greedy Algorithm**: Track minimum jumps required
- **Array Traversal**: Check each position's reachability
- **Optimization**: Find optimal path with minimum jumps
- **Time Complexity**: O(n²) with standard DP, O(n) with greedy optimization

---

### Question 12: Robot Navigation Path Counter
**Question ID:** `week-of-awesome-2025-12`  
**Difficulty:** Medium  
**Start Date:** September 11, 2025  
**End Date:** September 14, 2025  

### Problem Description
A robotics engineer needs to calculate unique paths for a robot navigating from top-left to bottom-right of a warehouse grid. Given a 4x6 warehouse layout, find the number of unique paths (robot can only move right or down). Return this single number.

### Expected Answer
```
56
```

### Fundamental Concepts
- **Dynamic Programming**: Build solution using 2D array
- **Combinatorics**: Mathematical formula using binomial coefficients
- **Grid Traversal**: Understand path counting
- **Space Optimization**: Use 1D array instead of 2D

---

### Question 13: Data Mining Subset Generator
**Question ID:** `week-of-awesome-2025-13`  
**Difficulty:** Medium  
**Start Date:** September 12, 2025  
**End Date:** September 14, 2025  

### Problem Description
A data scientist needs to generate all possible combinations of features for machine learning analysis. Given the feature set `[age, income, education, location]`, generate all possible feature combinations. Return the total number of possible combinations as a single number.

### Expected Answer
```
16
```

### Fundamental Concepts
- **Backtracking**: Generate all combinations
- **Bit Manipulation**: Alternative approach using bit masks
- **Recursion**: Build subsets recursively
- **Power Set**: Understanding 2^n combinations

---

### Question 14: Binary Tree Maximum Depth Calculator
**Question ID:** `week-of-awesome-2025-14`  
**Difficulty:** Medium  
**Start Date:** September 13, 2025  
**End Date:** September 14, 2025  

### Problem Description
A software engineer needs to calculate the maximum depth of a binary tree to optimize memory allocation. Given a binary tree represented as a nested list structure: `[3, [9, null, null], [20, [15, null, null], [7, null, null]]]`, where each node is represented as `[value, left_child, right_child]` and `null` represents no child, find the maximum depth of the tree. The depth of a tree is the number of nodes along the longest path from the root node down to the farthest leaf node. Return this single number.

### Expected Answer
```
3
```

### Fundamental Concepts
- **Tree Traversal**: Recursively visit all nodes
- **Recursion**: Use recursive calls to explore left and right subtrees
- **Depth-First Search**: Explore each path to its maximum depth
- **Mathematical Operations**: Calculate maximum depth using max function
- **Data Structure Understanding**: Work with binary tree representation
- **Time Complexity**: O(n) where n is the number of nodes in the tree