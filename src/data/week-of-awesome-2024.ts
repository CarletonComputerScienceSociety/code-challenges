import { Question } from "./types";

const question1Body = `
<p><b>De-duplicate this array of numbers!</b></p>
<i>Challenge: Try to get the answer without a set.</i>
<p><code>[58, 19, 35, 6, 31, 6, 80, 44, 83, 92, 8, 56, 37, 58, 58, 88, 87, 14, 32, 32, 35, 89, 21, 4, 6, 91, 33, 90, 17, 14, 84, 42, 97, 38, 94, 28, 64, 66, 48, 95, 51, 60, 8, 30, 88, 31, 35, 74, 15, 35, 96, 82, 100, 37, 75, 17, 95, 10, 89, 32, 26, 22, 49, 81, 11, 17, 4, 76, 20, 98, 69, 7, 68, 46, 86, 88, 100, 78, 56, 47, 86, 73, 13, 10, 84, 90, 86, 100, 9, 10, 32, 36, 17, 97, 22, 40, 99, 55, 42, 80, 92, 44, 6, 32, 77, 89, 19, 86, 23, 1, 24, 80, 56, 2, 13, 22, 31, 69, 53, 46, 1, 71, 10, 62, 52, 98, 3, 22, 28, 28, 75, 91, 50, 51, 31, 7, 4, 71, 23, 26, 10, 4, 79, 62, 23, 65, 87, 71, 96, 57, 66, 55, 36, 32, 30, 47, 99, 1, 11, 70, 36, 53, 26, 38, 21, 65, 76, 87, 27, 20, 86, 29, 10, 31, 3, 4, 33, 92, 76, 16, 92, 76, 40, 34, 64, 31, 7, 49, 91, 11, 28, 84, 1, 68, 87, 11, 11, 43, 98, 13, 82, 84, 57, 11, 80, 28, 59, 69, 13, 87, 70, 80, 49, 15, 46, 29, 70, 61, 61, 77, 45, 70, 74, 20, 68, 16, 5, 6, 77, 94, 4, 74, 24, 17, 55, 43, 96, 55, 43, 80, 46, 76, 70, 85, 26, 19, 94, 2, 48, 82, 48, 55, 47, 86, 44, 15, 86, 40, 29, 25, 88, 12, 93, 90, 2, 86, 28, 55, 64, 93, 100, 8, 92, 22, 42, 49, 70, 68, 15, 14, 47, 70, 85, 35, 47, 88, 3, 45, 84, 12, 34, 71, 97, 36, 92, 76, 49, 69, 40, 80, 54, 51, 96, 32, 17, 70, 57, 62, 62, 71, 5, 6, 89, 15, 60, 68, 67, 78, 24, 69, 54, 87, 54, 12, 25, 29, 7, 32, 34, 49, 66, 78, 98, 84, 48, 57, 27, 7, 96, 69, 76, 94, 29, 10, 27, 22, 64, 20, 63, 29, 8, 1, 78, 22, 37, 16, 11, 83, 68, 8, 46, 33, 27, 48, 7, 94, 7, 73, 90, 56, 61, 85, 11, 47, 1, 95, 53, 89, 29, 30, 95, 68, 33, 27, 93, 35, 27, 28, 40, 47, 9, 5, 83, 28, 82, 55, 52, 93, 17, 24, 64, 9, 1, 68, 34, 48, 49, 49, 11, 18, 41, 88, 91, 39, 100, 44, 12, 76, 86, 96, 20, 87, 83, 76, 63, 6, 12, 77, 54, 34, 8, 60, 38, 14, 31, 88, 18, 35, 41, 6, 76, 6, 95, 20, 26, 33, 87, 71, 96, 10, 65, 16, 37, 43, 31, 86, 62, 81, 67, 46, 30, 65, 68, 16, 35, 10, 97, 56, 16, 72, 53, 51, 63, 11, 46, 97, 11, 46, 78, 32, 78, 60, 65, 28, 19, 46, 74, 70, 80, 30, 88, 83, 69, 66, 41, 52, 62, 59, 73, 60, 72, 6, 52, 42, 16, 21, 10, 27, 5, 65, 45, 90, 11, 35, 82, 2, 19, 14, 27, 50, 75, 13, 52, 87, 48, 49, 42, 99, 2, 49, 86, 38, 3, 75, 20, 37, 49, 94, 85, 3, 73, 50, 40, 23, 97, 90, 32, 31, 26, 68, 23, 6, 87, 67, 58, 70, 45, 58, 48, 57, 13, 79, 37, 60, 44, 36, 5, 59, 15, 64, 19, 89, 93, 55, 54, 91, 19, 31, 17, 15, 26, 94, 52, 51, 30, 88, 40, 74, 37, 61, 69, 10, 59, 97, 64, 74, 11, 54, 51, 68, 27, 71, 68, 13, 14, 19, 76, 53, 70, 93, 37, 19, 58, 1, 10, 28, 59, 4, 42, 28, 26, 25, 38, 68, 82, 61, 4, 89, 57, 31, 33, 43, 15, 24, 60, 30, 65, 20, 27, 91, 22, 62, 32, 85, 10, 33, 98, 21, 51, 17, 47, 95, 41, 37, 58, 9, 23, 21, 79, 68, 69, 36, 38, 64, 62, 90, 16, 12, 43, 82, 49, 88, 4, 17, 73, 8, 94, 14, 49, 36, 32, 78, 55, 82, 61, 13, 92, 99, 20, 61, 3, 94, 45, 56, 6, 32, 37, 44, 68, 26, 18, 26, 64, 75, 38, 33, 89, 5, 48, 47, 100, 95, 44, 71, 91, 80, 60, 54, 78, 27, 32, 11, 43, 52, 43, 16, 86, 51, 68, 58, 91, 36, 84, 74, 81, 65, 62, 66, 8, 47, 42, 12, 40, 29, 51, 67, 29, 28, 55, 44, 85, 30, 72, 27, 8, 10, 33, 46, 35, 3, 13, 24, 37, 16, 62, 91, 54, 62, 74, 61, 60, 64, 74, 5, 36, 5, 84, 56, 73, 41, 37, 34, 1, 44, 70, 95, 6, 26, 19, 69, 55, 18, 25, 77, 39, 35, 17, 74, 18, 75, 34, 78, 96, 31, 67, 89, 82, 42, 10, 65, 22, 82, 10, 43, 22, 86, 96, 3, 28, 19, 96, 48, 56, 12, 45, 18, 18, 32, 88, 35, 35, 17, 8, 22, 65, 13, 80, 83, 84, 4, 18, 95, 27, 81, 24, 98, 2, 3, 27, 86, 45, 74, 34, 33, 14, 30, 16, 7, 4, 82, 38, 91, 14, 25, 84, 28, 70, 15, 77, 56, 68, 42, 4, 35, 96, 82, 87, 57, 38, 93, 91, 5, 79, 37, 56, 96, 86, 43, 80, 55, 50, 41, 5, 30, 11, 26, 94, 48, 95, 24, 29, 32, 63, 6, 57, 75, 31, 41, 11, 30, 79, 64, 16, 56, 16, 64, 58, 90, 9, 22, 20, 44, 23, 71, 8, 88, 56, 52, 67, 3, 32, 17, 57, 80, 62, 29, 97, 15, 70, 69, 93, 54, 14, 78, 76, 78, 60, 15, 87, 83, 5, 1, 78, 62, 85, 5, 50, 65, 11, 9, 69, 62, 80, 65, 40, 88, 79, 20, 56, 68, 83, 70, 49, 29, 52, 74, 51, 12, 77, 77, 76, 34, 23, 95, 54, 93, 70, 91, 60, 7, 78, 36, 43, 58, 96, 98, 80, 66, 23, 15]</code></p>
<p>Example submission: <code>[1, 2, 3, 4, 5, 6, 7]</code></p>
`;

const question2Body = `
<p><b>Given the following list of integers, arrange them into the smallest number possible after concatenation!</b></p>
<i>Challenge: Implement your own sorting and/or comparison algorithm!</i>
<p><code>[31, 18, 85, 59, 38, 16, 18, 11, 21, 3, 10, 77, 100, 27, 57, 21, 58, 87, 67, 66, 44, 60, 57, 6, 91, 79, 59, 33, 6, 75, 73, 52, 90, 34, 95, 5, 79, 66, 22, 4, 94, 1, 91, 83, 5, 55, 94, 9, 16, 57, 17, 69, 87, 80, 91, 23, 16, 71, 47, 41, 71, 34, 52, 57, 100, 9, 86, 46, 77, 63, 13, 85, 8, 83, 92, 79, 53, 98, 59, 42, 6, 86, 76, 41, 33, 29, 100, 17, 90, 11, 29, 62, 40, 54, 69, 73, 18, 4, 91, 95]</code></p>
<p>Example submission: <code>123456789</code></p>
`;

const question3Body = `
<p><b>You may have heard of the often-used valid parentheses question (if you haven't, search it up) - How about generating them? Please provide all combinations of 5 pairs of parentheses!</b></p>
<i>Challenge: Use recursion and backtracking!</i>
<p>Example submission: <code>["()", "(())"]</code></p>
`;

const question4Body = `
<p><b>In the range of 0-1000 (inclusive), how many times does the digit 2 appear?</b></p>
<i>Challenge: Use dynamic programming!</i>
<p>Example submission: <code>1234</code></p>
`;

const question5Body = `
<p><b>Ryan is trying to get home! If Ryan is in the bottom left cell of a 28x5 grid, and trying to get to the top right cell, what is the total number of possible unique paths that can be taken? Ryan can only move up or right, but not diagonally.</b></p>
<p>Example submission: <code>1234</code></p>
`;

const question1Answer = [
  58, 19, 35, 6, 31, 80, 44, 83, 92, 8, 56, 37, 88, 87, 14, 32, 89, 21, 4, 91,
  33, 90, 17, 84, 42, 97, 38, 94, 28, 64, 66, 48, 95, 51, 60, 30, 74, 15, 96,
  82, 100, 75, 10, 26, 22, 49, 81, 11, 76, 20, 98, 69, 7, 68, 46, 86, 78, 47,
  73, 13, 9, 36, 40, 99, 55, 77, 23, 1, 24, 2, 53, 71, 62, 52, 3, 50, 79, 65,
  57, 70, 27, 29, 16, 34, 43, 59, 61, 45, 5, 85, 25, 12, 93, 54, 67, 63, 18, 41,
  39, 72,
];
const question2Answer = "10010010010111111316161617171818182121222327292931333333434384041414244444647525253545555575757575859595960626366666666769697171737375767777797979808383858586868787890909191919192949495959899";
const question3Answer = ["((((()))))", "(((()())))", "(((())()))", "(((()))())", "(((())))()", "((()(())))", "((()()()))", "((()())())", "((()()))()", "((())(()))", "((())()())", "((())())()", "((()))(())", "((()))()()", "(()((())))", "(()(()()))", "(()(())())", "(()(()))()", "(()()(()))", "(()()()())", "(()()())()", "(()())(())", "(()())()()", "(())((()))", "(())(()())", "(())(())()", "(())()(())", "(())()()()", "()(((())))", "()((()()))", "()((())())", "()((()))()", "()(()(()))", "()(()()())", "()(()())()", "()(())(())", "()(())()()", "()()((()))", "()()(()())", "()()(())()", "()()()(())", "()()()()()"];
const question4Answer = "300";
const question5Answer = "31465";

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
}

const question1: Question = {
  id: "week-of-awesome-2024-1",
  title: "Array De-duplication",
  content: question1Body,
  evaluate: (input: string): boolean => {
    return checkArrayEquivalency(input, question1Answer);
  },
  startDate: new Date("2024-09-07"),
  endDate: new Date("2024-09-15"),
};

const question2: Question = {
  id: "week-of-awesome-2024-2",
  title: "Smallest Number",
  content: question2Body,
  evaluate: (input: string): boolean => {
    return input === question2Answer;
  },
  startDate: new Date("2024-09-09"),
  endDate: new Date("2024-09-15"),
};

const question3: Question = {
  id: "week-of-awesome-2024-3",
  title: "Valid Parentheses?",
  content: question3Body,
  evaluate: (input: string): boolean => {
    return checkArrayEquivalency(input, question3Answer);
  },
  startDate: new Date("2024-09-10"),
  endDate: new Date("2024-09-15"),
};

const question4: Question = {
  id: "week-of-awesome-2024-4",
  title: "Pair Programming",
  content: question4Body,
  evaluate: (input: string): boolean => {
    return input === question4Answer;
  },
  startDate: new Date("2024-09-11"),
  endDate: new Date("2024-09-15"),
};

const question5: Question = {
  id: "week-of-awesome-2024-5",
  title: "Finding His Way Home",
  content: question5Body,
  evaluate: (input: string): boolean => {
    return input === question5Answer;
  },
  startDate: new Date("2024-09-12"),
  endDate: new Date("2024-09-15"),
};

const question6: Question = {
  id: "week-of-awesome-2024-6",
  title: "What is 1+1?",
  content: "Please answer this very difficult question.",
  evaluate: (input: string): boolean => {
    // Add your evaluation logic here
    return true;
  },
  startDate: new Date("2024-09-13"),
  endDate: new Date("2024-09-15"),
};

const question7: Question = {
  id: "week-of-awesome-2024-7",
  title: "What is 1+1?",
  content: "Please answer this very difficult question.",
  evaluate: (input: string): boolean => {
    // Add your evaluation logic here
    return true;
  },
  startDate: new Date("2024-09-14"),
  endDate: new Date("2024-09-15"),
};

export const questions = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
];
