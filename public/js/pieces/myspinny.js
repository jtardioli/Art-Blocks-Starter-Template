const canvasSize = 500;

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setup() {
  createCanvas(canvasSize, canvasSize);
  dim = width / 2;
  colorMode(HSB, 360, 100, 100);
  ellipseMode(RADIUS);
  frameRate(12);
}

function draw() {
  angleMode(DEGREES);

  translate(canvasSize / 2, canvasSize / 2);
  noFill();

  let currY = 0;
  let currDiameter = 100;
  let min = 30;
  let max = 60;

  for (let i = 0; i < 360 * 4; i++) {
    let rgbVal = randomIntFromInterval(min, max);
    fill(rgbVal, 90, 90);
    noStroke();
    circle(0, currY, currDiameter);
    rotate(5);
    currY += -1.09;
    currDiameter += -1;
  }
}
