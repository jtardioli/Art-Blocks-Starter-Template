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
  let min = 30;
  let max = 60;
  let increment = 1;

  for (let i = 0; i < 360; i++) {
    let currColor = getItem(`currColor[${i}]`);
    let incrementing = !!getItem(`incrementing[${i}]`);
    if (!currColor && currColor !== 0) {
      currColor = randomIntFromInterval(min, max);
    } else {
      if (currColor <= max && currColor >= min) {
        if (incrementing) {
          currColor += increment;
        } else {
          currColor -= increment;
        }
      } else {
        storeItem(`incrementing[${i}]`, !incrementing);
        if (currColor < min) {
          currColor += increment
        }
        if (currColor > max) {
          currColor -= increment
        }
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

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
