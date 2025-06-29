import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { sendAlert } from "../../../lib/discord";
import { questions } from "../../../data";
import { DiscordMessageType } from "../../../lib/discord";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case "POST":
      return handlePOST(req, res);

    default:
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`,
      );
  }
}

// POST /api/submissions
// Required fields in body: questionId, answer, email
export async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
  const { questionId, answer, email, optionId } = req.body;

  // Check if required fields are present
  if (!answer || !email || !questionId) {
    // sendAlert({
    //   type: DiscordMessageType.ERROR,
    //   data: {
    //     message: `Failed Submission: Missing required fields`,
    //     submission: { questionId, answer, email },
    //   },
    // });
    return res.status(400).json({ error: "Missing required fields" });
  }

  // TODO: Validate email is cmail.carleton.ca
  // if (!email.endsWith("cmail.carleton.ca")) {
  //   // sendAlert({
  //   //   type: DiscordMessageType.INFO,
  //   //   data: {
  //   //     message: `Failed Submission: Must use cmail.carleton.ca`,
  //   //     submission: { questionId, answer, email },
  //   //   },
  //   // });
  //   return res.status(400).json({ error: "Must use cmail.carleton.ca" });
  // }

  // Check if questionId is valid
  const question = questions.find((question) => question.id === questionId);
  if (!question) {
    // sendAlert({
    //   type: DiscordMessageType.ERROR,
    //   data: {
    //     message: `Failed Submission: Invalid question ID`,
    //     submission: { questionId, answer, email },
    //   },
    // });
    return res.status(400).json({ error: "Invalid question ID" });
  }

  let evaluationFunc;
  if (question.options && optionId) {
    evaluationFunc = question.options.find(
      (option) => option.id === optionId,
    )?.evaluate;
  } else {
    evaluationFunc = question.evaluate;
  }

  if (!evaluationFunc) {
    return res.status(500).json({ error: "Internal Server Error" });
  }

  // Check if answer is correct
  const result = evaluationFunc(answer);
  if (result !== true) {
    // sendAlert({
    //   type: DiscordMessageType.INFO,
    //   data: {
    //     message: `Failed Submission: Incorrect answer`,
    //     submission: { questionId, answer, email },
    //   },
    // });
    return res.status(400).json({ error: "Incorrect answer" });
  }

  return res.status(201).json({ success: true });

  try {
    // Check if submission already exists
    const existingSubmission = await prisma.submission.findFirst({
      where: {
        questionId: questionId,
        email: email,
      },
    });

    if (existingSubmission) {
      // sendAlert({
      //   type: DiscordMessageType.INFO,
      //   data: {
      //     message: `Failed Submission: Duplicate Correct submission`,
      //     submission: { questionId, answer, email },
      //   },
      // });
      return res.status(400).json({
        error: "You've already submitted a correct answer to this question",
      });
    }
  } catch (error) {
    console.log(error);
    // sendAlert({
    //   type: DiscordMessageType.ERROR,
    //   data: {
    //     message: "Failed Submission, Internal Server Error",
    //     submission: { questionId, answer, email },
    //   },
    // });

    return res.status(500).json({ error: "Internal Server Error" });
  }

  try {
    const result = await prisma.submission.create({
      data: {
        questionId: questionId,
        answer: answer,
        email: email,
      },
    });
    // sendAlert({
    //   type: DiscordMessageType.SUCCESS,
    //   data: {
    //     message: "Successful Submission",
    //     submission: { questionId, answer, email },
    //   },
    // });
    return res.status(201).json(result);
  } catch (error) {
    // sendAlert({
    //   type: DiscordMessageType.ERROR,
    //   data: {
    //     message: "Failed Submission, Internal Server Error",
    //     submission: { questionId, answer, email },
    //   },
    // });
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
