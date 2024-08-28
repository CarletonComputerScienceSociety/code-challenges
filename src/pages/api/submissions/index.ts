import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

// POST /api/submissions
// Required fields in body: questionId, answer, email
export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {

    switch (req.method) {
        case 'GET':
            return handleGET(req, res)
        case 'POST':
            return handlePOST(req, res)

        default:
            throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`,
            )
    }
}

// POST /api/submissions
// Required fields in body: questionId, answer, email
export async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
    const { questionId, answer, email } = req.body
    // const result = await prisma.submission.create({
    //     data: {
    //         questionId: questionId,
    //         answer: answer,
    //         email: email,
    //     },
    // })
    // return res.status(201).json(result)
    return res.status(201).json({questionId, answer, email})
}

// GET /api/submissions
export async function handleGET(req: NextApiRequest, res: NextApiResponse) {
    // const submissions = await prisma.submission.findMany()
    // return res.json(submissions)
    return res.json({message: 'GET submissions'})
}