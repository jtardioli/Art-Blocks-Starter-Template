const canvasHeight = 500;
const canvasWidth = 1500;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  dim = width / 2;
  colorMode(HSB, 360, 100, 100);
  ellipseMode(RADIUS);
  frameRate(8);
}

function draw() {
  angleMode(DEGREES);
  background(0);

  translate(canvasWidth / 2, canvasHeight / 2);
  noFill();

  let currY = 0;
  let currDiameter = 700;
  let min = 0;
  let max = 60;

  for (let i = 0; i < 360 * 4; i++) {
    let rgbVal = randomIntFromInterval(min, max);
    fill(rgbVal, 65, randomIntFromInterval(0, 90));
    noStroke();
    circle(0, currY, currDiameter);
    rotate(300);
    currY += 3;
    currDiameter += 1.2;
  }

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
