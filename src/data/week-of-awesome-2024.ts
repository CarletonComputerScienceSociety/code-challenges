import { Question } from "./types";

const question1: Question = {
  id: "week-of-awesome-2023-1",
  title: "What is the Week of Awesome?",
  content:
    "The Week of Awesome is a week-long game jam hosted by GameDevHQ where developers from all over the world come together to create games based on a theme.",
  answer: "test",
  startDate: new Date(), // set start date to tomorrow
  endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // set end date to tomorrow
};

export const questions = [question1];
