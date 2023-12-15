import type { NextApiRequest, NextApiResponse } from 'next'

var sharedTxt = "hi b, i love you"
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process a POST request
    const { msg } = req.query
    sharedTxt = (msg as string)
    res.status(200).json({ msg: "MESSAGE SENT!!" });
  } else {
    // Handle any other HTTP method
    var dateObj = new Date();
    var time = dateObj.toLocaleTimeString([], {weekday: 'short', hour: '2-digit', minute: '2-digit', timeZone: "EST"})
    res.status(200).json({ msg: sharedTxt, time });
  }
}