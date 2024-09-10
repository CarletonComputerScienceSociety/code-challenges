import { Question } from "./types";
import { questions } from "./week-of-awesome-2024";
import { describe, expect, it } from "vitest";

describe("Week of Awesome 2024 Questions", () => {
  it("should have 7 questions", () => {
    expect(questions.length).toBe(7);
  });

  describe("week-of-awesome-2024-1", () => {
    const question = questions.find(
      (question) => question.id === "week-of-awesome-2024-1",
    ) as Question;

    const answer =
      "[58, 19, 35, 6, 31, 80, 44, 83, 92, 8, 56, 37, 88, 87, 14, 32, 89, 21, 4, 91, 33, 90, 17, 84, 42, 97, 38, 94, 28, 64, 66, 48, 95, 51, 60, 30, 74, 15, 96, 82, 100, 75, 10, 26, 22, 49, 81, 11, 76, 20, 98, 69, 7, 68, 46, 86, 78, 47, 73, 13, 9, 36, 40, 99, 55, 77, 23, 1, 24, 2, 53, 71, 62, 52, 3, 50, 79, 65, 57, 70, 27, 29, 16, 34, 43, 59, 61, 45, 5, 85, 25, 12, 93, 54, 67, 63, 18, 41, 39, 72]";

    const differentOrderAnswer =
      "[19, 58, 35, 6, 31, 80, 44, 83, 92, 8, 56, 37, 88, 87, 14, 32, 89, 21, 4, 91, 33, 90, 17, 84, 42, 97, 38, 94, 28, 64, 66, 48, 95, 51, 60, 30, 74, 15, 96, 82, 100, 75, 10, 26, 22, 49, 81, 11, 76, 20, 98, 69, 7, 68, 46, 86, 78, 47, 73, 13, 9, 36, 40, 99, 55, 77, 23, 1, 24, 2, 53, 71, 62, 52, 3, 50, 79, 65, 57, 70, 27, 29, 16, 34, 43, 59, 61, 45, 5, 85, 25, 12, 93, 54, 67, 63, 18, 41, 39, 72]";

    const wrongAnswer = "[]";

    it("will be successful given the right answer", () => {
      expect(question.evaluate(answer)).toBe(true);
    });

    it("will be successful given the right answer in a different order", () => {
      expect(question.evaluate(differentOrderAnswer)).toBe(true);
    });

    it("will fail given the wrong answer", () => {
      expect(question.evaluate(wrongAnswer)).toBe(false);
    });
  });

  describe("week-of-awesome-2024-2", () => {
    const question = questions.find(
      (question) => question.id === "week-of-awesome-2024-2",
    ) as Question;

    const answer =
      "10010010010111111316161617171818182121222327292931333333434384041414244444647525253545555575757575859595960626366666666769697171737375767777797979808383858586868787890909191919192949495959899";

    const wrongAnswer = "1";

    it("will be successful given the right answer", () => {
      expect(question.evaluate(answer)).toBe(true);
    });

    it("will fail given the wrong answer", () => {
      expect(question.evaluate(wrongAnswer)).toBe(false);
    });
  });

  describe("week-of-awesome-2024-3", () => {
    const question = questions.find(
      (question) => question.id === "week-of-awesome-2024-3",
    ) as Question;

    const answer = '["((((()))))", "(((()())))", "(((())()))", "(((()))())", "(((())))()", "((()(())))", "((()()()))", "((()())())", "((()()))()", "((())(()))", "((())()())", "((())())()", "((()))(())", "((()))()()", "(()((())))", "(()(()()))", "(()(())())", "(()(()))()", "(()()(()))", "(()()()())", "(()()())()", "(()())(())", "(()())()()", "(())((()))", "(())(()())", "(())(())()", "(())()(())", "(())()()()", "()(((())))", "()((()()))", "()((())())", "()((()))()", "()(()(()))", "()(()()())", "()(()())()", "()(())(())", "()(())()()", "()()((()))", "()()(()())", "()()(())()", "()()()(())", "()()()()()"]';

    const differentOrderAnswer = '["(((()())))", "((((()))))", "(((())()))", "(((()))())", "(((())))()", "((()(())))", "((()()()))", "((()())())", "((()()))()", "((())(()))", "((())()())", "((())())()", "((()))(())", "((()))()()", "(()((())))", "(()(()()))", "(()(())())", "(()(()))()", "(()()(()))", "(()()()())", "(()()())()", "(()())(())", "(()())()()", "(())((()))", "(())(()())", "(())(())()", "(())()(())", "(())()()()", "()(((())))", "()((()()))", "()((())())", "()((()))()", "()(()(()))", "()(()()())", "()(()())()", "()(())(())", "()(())()()", "()()((()))", "()()(()())", "()()(())()", "()()()(())", "()()()()()"]';

    const wrongAnswer = '[]';

    it("will be successful given the right answer", () => {
      expect(question.evaluate(answer)).toBe(true);
    });

    it("will be successful given the right answer in a different order", () => {
      expect(question.evaluate(differentOrderAnswer)).toBe(true);
    });

    it("will fail given the wrong answer", () => {
      expect(question.evaluate(wrongAnswer)).toBe(false);
    });
  });

  describe("week-of-awesome-2024-4", () => {
    const question = questions.find(
      (question) => question.id === "week-of-awesome-2024-4",
    ) as Question;

    const answer = "300";

    const wrongAnswer = "0";

    it("will be successful given the right answer", () => {
      expect(question.evaluate(answer)).toBe(true);
    });

    it("will fail given the wrong answer", () => {
      expect(question.evaluate(wrongAnswer)).toBe(false);
    });
  });

  describe("week-of-awesome-2024-5", () => {
    const question = questions.find(
      (question) => question.id === "week-of-awesome-2024-5",
    ) as Question;

    const answer = "31465";

    const wrongAnswer = "0";

    it("will be successful given the right answer", () => {
      expect(question.evaluate(answer)).toBe(true);
    });

    it("will fail given the wrong answer", () => {
      expect(question.evaluate(wrongAnswer)).toBe(false);
    });
  });
});
