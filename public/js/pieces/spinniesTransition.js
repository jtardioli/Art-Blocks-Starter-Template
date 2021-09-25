const canvasSize = 500;
const fps = 15;

function setup() {
  createCanvas(canvasSize, canvasSize);
  dim = width / 2;
  colorMode(HSB, 360, 100, 100);
  ellipseMode(RADIUS);
  frameRate(fps);
}

function draw() {
  angleMode(DEGREES);

  translate(canvasSize / 2, canvasSize / 2);
  noFill();

  let currY = 0;
  let currDiameter = 100;

  for (let i = 0; i < 360; i++) {
    let currColor = getItem(`currColor[${i}]`);
    if (!currColor && currColor !== 0) {
      console.log("no currColor");
      currColor = Math.floor(Math.random() * 360);
    } else {
      if (currColor < 360) {
        currColor += 5;
      } else {
        currColor = 0;
      }
    }
    storeItem(`currColor[${i}]`, currColor);
    fill(currColor, 90, 90);
    noStroke();
    circle(0, currY, currDiameter);
    rotate(5);
    currY += 1.2;
    currDiameter += 0.1;
  }
}
