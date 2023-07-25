const minSize = 10
const maxSize = 100
const stepSize = 10;
const lineWeight = 1.5;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noLoop();
}

function draw() {
  background(200);
  push();
  for (let i = 0; i < width; i += maxSize) {
    for (let j = 0; j < height; j += maxSize)
    makeSquare(i, j, maxSize);
  }
  pop();
}

function makeSquare(x, y, length) {
  if (length < minSize) {
    return;
  }
  const xOffset = Math.random() * stepSize/2 - stepSize;
  const yOffset = Math.random() * stepSize/2 - stepSize/2;
  noFill();
  strokeWeight(lineWeight);
  rect(x+xOffset,y+yOffset, length, length);
  const newLength = length-stepSize;
  makeSquare(x+stepSize/2,y+stepSize/2,newLength)
}