import { Question } from "./types";
import { questions } from "./week-of-awesome-2025";
import { describe, expect, it } from "vitest";

describe("Week of Awesome 2025 Questions", () => {
  it("should have 14 questions", () => {
    expect(questions.length).toBe(14);
  });

  it("should find question 1 and evaluate correctly", () => {
    const question = questions.find((q) => q.id === "week-of-awesome-2025-1")!;
    expect(question).toBeDefined();
    expect(question.evaluate("203")).toBe(true);
    expect(question.evaluate("101")).toBe(false);
  });

  it("should find question 2 and evaluate correctly", () => {
    const question = questions.find((q) => q.id === "week-of-awesome-2025-2")!;
    expect(question).toBeDefined();
    expect(question.evaluate("VeryLongPassword123!")).toBe(true);
    expect(question.evaluate("wrong")).toBe(false);
  });

  it("should find question 3 and evaluate correctly", () => {
    const question = questions.find((q) => q.id === "week-of-awesome-2025-3")!;
    expect(question).toBeDefined();
    expect(question.evaluate("138")).toBe(true);
    expect(question.evaluate("0")).toBe(false);
  });

  it("should find question 4 and evaluate correctly", () => {
    const question = questions.find((q) => q.id === "week-of-awesome-2025-4")!;
    expect(question).toBeDefined();
    expect(question.evaluate("89")).toBe(true);
    expect(question.evaluate("0")).toBe(false);
  });

  it("should find question 5 and evaluate correctly", () => {
    const question = questions.find((q) => q.id === "week-of-awesome-2025-5")!;
    expect(question).toBeDefined();
    expect(question.evaluate("66")).toBe(true);
    expect(question.evaluate("0")).toBe(false);
  });

  it("should find question 6 and evaluate correctly", () => {
    const question = questions.find((q) => q.id === "week-of-awesome-2025-6")!;
    expect(question).toBeDefined();
    expect(question.evaluate("441")).toBe(true);
    expect(question.evaluate("0")).toBe(false);
  });

  it("should find question 7 and evaluate correctly", () => {
    const question = questions.find((q) => q.id === "week-of-awesome-2025-7")!;
    expect(question).toBeDefined();
    expect(question.evaluate("15")).toBe(true);
    expect(question.evaluate("0")).toBe(false);
  });

  it("should find question 8 and evaluate correctly", () => {
    const question = questions.find((q) => q.id === "week-of-awesome-2025-8")!;
    expect(question).toBeDefined();
    expect(question.evaluate("4")).toBe(true);
    expect(question.evaluate("0")).toBe(false);
  });

  it("should find question 9 and evaluate correctly", () => {
    const question = questions.find((q) => q.id === "week-of-awesome-2025-9")!;
    expect(question).toBeDefined();
    expect(question.evaluate("49")).toBe(true);
    expect(question.evaluate("0")).toBe(false);
  });

  it("should find question 10 and evaluate correctly", () => {
    const question = questions.find((q) => q.id === "week-of-awesome-2025-10")!;
    expect(question).toBeDefined();
    expect(question.evaluate("8")).toBe(true);
    expect(question.evaluate("0")).toBe(false);
  });

  it("should find question 11 and evaluate correctly", () => {
    const question = questions.find((q) => q.id === "week-of-awesome-2025-11")!;
    expect(question).toBeDefined();
    expect(question.evaluate("17")).toBe(true);
    expect(question.evaluate("0")).toBe(false);
  });

  it("should find question 12 and evaluate correctly", () => {
    const question = questions.find((q) => q.id === "week-of-awesome-2025-12")!;
    expect(question).toBeDefined();
    expect(question.evaluate("56")).toBe(true);
    expect(question.evaluate("0")).toBe(false);
  });

  it("should find question 13 and evaluate correctly", () => {
    const question = questions.find((q) => q.id === "week-of-awesome-2025-13")!;
    expect(question).toBeDefined();
    expect(question.evaluate("16")).toBe(true);
    expect(question.evaluate("0")).toBe(false);
  });

  it("should find question 14 and evaluate correctly", () => {
    const question = questions.find((q) => q.id === "week-of-awesome-2025-14")!;
    expect(question).toBeDefined();
    expect(question.evaluate("3")).toBe(true);
    expect(question.evaluate("0")).toBe(false);
  });
});
