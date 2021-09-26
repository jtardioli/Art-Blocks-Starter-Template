const canvasHeight = 500;
const canvasWidth = 1500;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  dim = width / 2;
  colorMode(HSB, 360, 100, 100);
  ellipseMode(RADIUS);
  frameRate(8);
  clearStorage();
}

function draw() {
  angleMode(DEGREES);

  translate(canvasWidth / 2, canvasHeight / 2);
  noFill();

  let currY = 0;
  let currDiameter = 900;
  let min = 180;
  let max = 350;

  for (let i = 0; i < 360 * 4; i++) {
    let rgbVal = randomIntFromInterval(min, max);
    fill(rgbVal, 65, randomIntFromInterval(0, 90));
    noStroke();
    circle(0, currY, currDiameter);
    rotate(5);
    currY += -3;
    currDiameter += 1.2;
  }

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
