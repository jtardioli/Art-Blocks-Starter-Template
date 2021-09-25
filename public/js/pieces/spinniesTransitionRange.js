const canvasSize = 500;
const fps = 2;

function setup() {
  createCanvas(canvasSize, canvasSize);
  dim = width / 2;
  colorMode(HSB, 360, 100, 100);
  ellipseMode(RADIUS);
  frameRate(fps);
  clearStorage();
}

function draw() {
  angleMode(DEGREES);

  translate(canvasSize / 2, canvasSize / 2);
  noFill();

  let currY = 0;
  let currDiameter = 100;
  let min = 30;
  let max = 60;
  let colorIncrement = 1;

  for (let i = 0; i < 360; i++) {
    let currColor = getItem(`currColor[${i}]`);
    let incrementing = !!getItem(`incrementing[${i}]`);
    if (!currColor && currColor !== 0) {
      currColor = randomIntFromInterval(min, max);
    } else {
      const {value, newIncrementing} = incrementInRange(currColor, min, max, incrementing, colorIncrement)
      currColor = value
      storeItem(`incrementing[${i}]`, newIncrementing);
    }
    storeItem(`currColor[${i}]`, currColor);
    fill(currColor, 90, 90);
    noStroke();
    circle(0, currY, currDiameter);
    rotate(5);
    currY += 2;
    currDiameter += -1.2;
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function incrementInRange(value, min, max, incrementing, incrementAmt) {
  if (value <= max && value >= min) {
    if (incrementing) {
      value += incrementAmt;
    } else {
      value -= incrementAmt;
    }
  } else {
    incrementing = !incrementing
    if (value < min) {
      value += incrementAmt
    }
    if (value > max) {
      value -= incrementAmt
    }
  }
  return {value, newIncrementing: incrementing};
} 