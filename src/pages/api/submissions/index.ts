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
    // case "GET":
    //   return handleGET(req, res);
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
  const { questionId, answer, email } = req.body;

  // Check if required fields are present
  if (!answer || !email || !questionId) {
    sendAlert({
      type: DiscordMessageType.ERROR,
      data: {
        message: `Failed Submission: Missing required fields`,
        submission: { questionId, answer, email },
      },
    });
    return res.status(400).json({ error: "Missing required fields" });
  }

  // TODO: Validate email is cmail.carleton.ca
  if (!email.endsWith("cmail.carleton.ca")) {
    sendAlert({
      type: DiscordMessageType.INFO,
      data: {
        message: `Failed Submission: Must use cmail.carleton.ca`,
        submission: { questionId, answer, email },
      },
    });
    return res.status(400).json({ error: "Must use cmail.carleton.ca" });
  }

  // Check if questionId is valid
  const question = questions.find((question) => question.id === questionId);
  if (!question) {
    sendAlert({
      type: DiscordMessageType.ERROR,
      data: {
        message: `Failed Submission: Invalid question ID`,
        submission: { questionId, answer, email },
      },
    });
    return res.status(400).json({ error: "Invalid question ID" });
  }

  // Check if answer is correct
  if (answer !== question.answer) {
    sendAlert({
      type: DiscordMessageType.INFO,
      data: {
        message: `Failed Submission: Incorrect answer`,
        submission: { questionId, answer, email },
      },
    });
    return res.status(400).json({ error: "Incorrect answer" });
  }

  try {
    // Check if submission already exists
    console.log(prisma.submission);
    const existingSubmission = await prisma.submission.findFirst({
      where: {
        questionId: questionId,
        answer: answer,
        email: email,
      },
    });

    if (existingSubmission) {
      sendAlert({
        type: DiscordMessageType.INFO,
        data: {
          message: `Failed Submission: Duplicate Correct submission`,
          submission: { questionId, answer, email },
        },
      });
      return res.status(400).json({ error: "Duplicate Correct submission" });
    }
  } catch (error) {
    sendAlert({
      type: DiscordMessageType.ERROR,
      data: {
        error: "Failed Submission, Internal Server Error",
        submission: { questionId, answer, email },
      },
    });

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
    sendAlert({
      type: DiscordMessageType.SUCCESS,
      data: {
        message: "Successful Submission",
        submission: { questionId, answer, email },
      },
    });
    return res.status(201).json(result);
  } catch (error) {
    sendAlert({
      type: DiscordMessageType.ERROR,
      data: {
        error: "Failed Submission, Internal Server Error",
        submission: { questionId, answer, email },
      },
    });
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// // GET /api/submissions
// export async function handleGET(req: NextApiRequest, res: NextApiResponse) {
//   const submissions = await prisma.submission.findMany();
//   return res.json(submissions);
// }
