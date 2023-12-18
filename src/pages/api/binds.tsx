import type { NextApiRequest, NextApiResponse } from "next";

var sharedTxt = "hi b, i love you";
var greenLed = false;
var yellowLed = false;
var redLed = false;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,DELETE,PATCH,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "POST") {
    // Process a POST request
    const { msg, green, yellow, red } = req.query;
    sharedTxt = msg as string;
    greenLed = green as unknown as boolean;
    yellowLed = yellow as unknown as boolean;
    redLed = red as unknown as boolean;

    res.json({ msg: "MESSAGE SENT!!" });
  } else {
    // Handle any other HTTP method
    var dateObj = new Date();
    var time = dateObj.toLocaleTimeString([], {
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "EST",
    });
    res.status(200).json({ msg: sharedTxt, time, greenLed, yellowLed, redLed });
  }
}
