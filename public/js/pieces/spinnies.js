const canvasSize = 500;

function setup() {
  createCanvas(canvasSize, canvasSize);
  dim = width / 2;
  colorMode(HSB, 360, 100, 100);
  ellipseMode(RADIUS);
  frameRate(15);
}

function draw() {
  angleMode(DEGREES);

  translate(canvasSize / 2, canvasSize / 2);
  noFill();

  let currY = 0;
  let currDiameter = 100;

  for (let i = 0; i < 360 * 4; i++) {
    let rgbVal = Math.floor(Math.random() * 255);
    fill(rgbVal, 90, 90);
    noStroke();
    circle(0, currY, currDiameter);
    rotate(5);
    currY += 1.2;
    currDiameter += 0.1;
  }
}
