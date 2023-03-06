let sound;
let amp;
let fft;
let design;
let starCoords;

function preload() {
  sound = loadSound("audio.mp3");
  design = loadImage("design.png");
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  amp = new p5.Amplitude();
  noStroke();

  // Set up star locations
  let maxStars = 300;
  let minStars = 100;
  let numStars = Math.random() * (maxStars - minStars) + minStars;

  starCoords = [];
  for (let i = 0; i < numStars; i++) {
    do {
      x = Math.random() * windowWidth;

      y = (Math.random() * windowHeight) / 4;
    } while (starCoords.includes((x, y)));
    let angle = Math.random() * 360;

    starCoords.push({ x: x, y: y, angle: angle });
  }
}

function draw() {
  background(0);
  // Instruction
  fill(255, 255, 255);
  textSize(16);
  textAlign(CENTER);
  text("click anywhere to play/pause", 0, height * (19 / 20), width);

  // Set up Image
  let factor = 0.4;
  let newWidth = design.width * factor;
  let newHeight = design.height * factor;
  image(
    design,
    width / 2 - newWidth / 2,
    height / 2 - newHeight / 2,
    newWidth,
    newHeight
  );

  // Waveform
  let wf = fft.waveform();
  let level = amp.getLevel();
  fill(255, 255, 255);
  noStroke();
  smooth();
  for (let i = 0; i < wf.length; i++) {
    let x = map(i, 0, wf.length, 0, width);
    let y = map(wf[i], -1, 1, height, height / 2);
    circle(x, y, 5);
  }

  // Stars
  let size = map(level, 0, 1, 0, width / 50);

  fill(255, 255, 255);
  for (let i = 0; i < starCoords.length; i++) {
    let x = starCoords[i].x;
    let y = starCoords[i].y;
    let angle = starCoords[i].angle;

    star(x, y, (3 / 5) * size, size, 5, angle);
    glow(x, y, size * (5 / 3));
  }
}

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}

function star(x, y, radius1, radius2, npoints, halfAngle) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function glow(x, y, size) {
  noStroke();

  fill(255, 255, 100, 4);
  for (i = 0; i < size; i++) {
    ellipse(x, y, i);
  }

  fill(255);
  stroke(0);
}
