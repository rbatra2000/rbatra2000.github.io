var sharedTxt = "hi b, i love you";
var greenLed = false;
var yellowLed = false;
var redLed = false;

const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};
const handler = (req, res) => {
  if (req.method === "POST") {
    // Process a POST request
    const { msg, green, yellow, red } = req.query;
    sharedTxt = msg;
    greenLed = green;
    yellowLed = yellow;
    redLed = red;

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
};

module.exports = allowCors(handler);
