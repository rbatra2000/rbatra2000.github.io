import type { NextApiRequest, NextApiResponse } from 'next'

var TESTING = "DEFAULT"
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process a POST request
    const { msg } = req.query
    TESTING = (msg as string)
    res.status(200).json({ text: "DONE" });
  } else {
    // Handle any other HTTP method
    res.status(200).json({ text: TESTING });
  }
}