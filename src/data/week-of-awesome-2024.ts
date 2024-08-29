import { Question } from "./types";

const question1: Question = {
  id: "week-of-awesome-2024-1",
  title: "What is 1+1?",
  content: "Please answer this very difficult question.",
  answer: "2",
  startDate: new Date(), // set start date to tomorrow
  endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // set end date to tomorrow
};

export const questions = [question1];
