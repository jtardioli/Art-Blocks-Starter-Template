const canvasSize = 500;
const fps = 8;

function setup() {
  createCanvas(1500, 500);
  dim = width / 2;
  colorMode(HSB, 360, 100, 100);
  ellipseMode(RADIUS);
  frameRate(fps);
  clearStorage();
}

function draw() {
  angleMode(DEGREES);

  translate(1500 / 2, 500 / 2);

  let currY = 0;
  let currDiameter = 20;
  let min = 60;
  let max = 200;

  for (let i = 0; i < 360; i++) {
    let currColor = getItem(`currColor[${i}]`);
    if (!currColor && currColor !== 0) {
      console.log("no currColor");
      currColor = randomIntFromInterval(min, max);
    } else {
      if (currColor < max) {
        currColor += 5;
      } else {
        currColor = 0;
      }
    }
    storeItem(`currColor[${i}]`, currColor);
    fill(currColor, 90, randomIntFromInterval(0, 90));
    noStroke();
    circle(60, currY, currDiameter);
    rotate(230);
    currY += 4;
    currDiameter += 0.4;
  }
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
