import { Question } from "./types";

const question1: Question = {
  id: "week-of-awesome-2024-1",
  title: "What is 1+1?",
  content: "Please answer this very difficult question.",
  evaluate: (input: string): boolean => {
    // Add your evaluation logic here
    return true;
  },
  startDate: new Date("2024-09-07"),
  endDate: new Date("2024-09-15"),
};

const question2: Question = {
  id: "week-of-awesome-2024-2",
  title: "What is 1+2?",
  content: "Please answer this very difficult question.",
  evaluate: (input: string): boolean => {
    // Add your evaluation logic here
    return true;
  },
  startDate: new Date("2024-09-09"),
  endDate: new Date("2024-09-15"),
};

const question3: Question = {
  id: "week-of-awesome-2024-3",
  title: "What is 1+3?",
  content: "Please answer this very difficult question.",
  evaluate: (input: string): boolean => {
    // Add your evaluation logic here
    return true;
  },
  startDate: new Date("2024-09-10"),
  endDate: new Date("2024-09-15"),
};

const question4: Question = {
  id: "week-of-awesome-2024-4",
  title: "What is 1+4?",
  content: "Please answer this very difficult question.",
  evaluate: (input: string): boolean => {
    // Add your evaluation logic here
    return true;
  },
  startDate: new Date("2024-09-11"),
  endDate: new Date("2024-09-15"),
};

const question5: Question = {
  id: "week-of-awesome-2024-5",
  title: "What is 1+1?",
  content: "Please answer this very difficult question.",
  evaluate: (input: string): boolean => {
    // Add your evaluation logic here
    return true;
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
