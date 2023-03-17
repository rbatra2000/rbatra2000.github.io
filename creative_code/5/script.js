function setup() {
  createCanvas(windowWidth, windowHeight);
}

bg_move = 0;
sm_move = 0;
delta = 0.01;

function draw() {
  background(188, 79, 48);

  fill(230, 223, 215);
  textFont("helvetica");
  textSize(24);
  text("Hilma af Klint", 10, 30);

  noStroke();
  sm = 100;
  md = 200;
  lg = 300;

  centerW = windowWidth / 2;
  centerH = windowHeight / 2;

  // biggest
  fill(104, 144, 189);
  circle(centerW, centerH, lg);

  // middle
  fill(233, 189, 93);
  circle(centerW, centerH, md);

  // smallest
  fill(229, 155, 130);
  circle(centerW, centerH, sm);

  // big moving
  fill(230, 223, 215);
  arc(centerW, centerH, lg, lg, HALF_PI + bg_move, (3 * PI) / 2 + bg_move);

  // small moving
  fill(36, 35, 36);
  arc(centerW, centerH, md, md, HALF_PI + sm_move, (3 * PI) / 2 + sm_move);

  bg_move += delta;
  sm_move -= delta;
}
