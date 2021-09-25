const MAX_COLOR = 360
const MIN_COLOR = 0

const txHash = '0xd01ea1542d0e83a824783af06a8072267042147b178bebae37979907236bfebf'

const hashPairs = [];
for (let j = 0; j < 32; j++) {
  hashPairs.push(txHash.slice(2 + (j * 2), 4 + (j * 2)));
}

const decPairs = hashPairs.map(x => {
  return parseInt(x, 16);
});

const canvasSize = 500;
const fps = 60;

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

  let colorMin = decPairs[0] / 255 * 360;
  let colorMax = decPairs[1] / 255 * 360;
  if (colorMin > colorMax) {
    let tempColorMin = colorMin
    colorMin = colorMax
    colorMax = tempColorMin
  }
  let colorIncrement = 1;
  
  let yMin = 0;
  let yMax = 200;
  let yIncrement = 1;

  let diaMin = 1;
  let diaMax = 5;
  let diaIncrement = 1;

  for (let i = 0; i < 90; i++) {
    // Get dynamic color
    let currColor = getItem(`currColor[${i}]`);
    let colorIncrementing = !!getItem(`colorIncrementing[${i}]`);

    if (!currColor && currColor !== 0) {
      currColor = randomIntFromInterval(colorMin, colorMax);
    } else {
      const {value, newIncrementing} = incrementInRange(currColor, colorMin, colorMax, colorIncrementing, colorIncrement)
      currColor = value
      storeItem(`colorIncrementing[${i}]`, newIncrementing);
    }
    
    // Get dynamic y index
    let currY = getItem(`currY[${i}]`);
    let yIncrementing = !!getItem(`yIncrementing[${i}]`);

    if (!currY && currY !== 0) {
      currY = randomIntFromInterval(yMin, yMax)
    } else {
      const {value, newIncrementing} = incrementInRange(currY, yMin, yMax, yIncrementing, yIncrement)
      currY = value
      storeItem(`yIncrementing[${i}]`, newIncrementing);
    }

    // Get dynamic diameter
    let currDiameter = getItem(`currDiameter[${i}]`);
    let diaIncrementing = !!getItem(`diaIncrementing[${i}]`);

    if (!currDiameter && currDiameter !== 0) {
      currDiameter = randomIntFromInterval(diaMin, diaMax)
    } else {
      const {value, newIncrementing} = incrementInRange(currDiameter, diaMin, diaMax, diaIncrementing, diaIncrement)
      currDiameter = value
      storeItem(`diaIncrementing[${i}]`, newIncrementing);
    }

    storeItem(`currColor[${i}]`, currColor);
    storeItem(`currY[${i}]`, currY);
    storeItem(`currDiameter[${i}]`, currDiameter);
    fill(currColor, 90, 90);
    noStroke();
    circle(0, currY, currDiameter);
    rotate(5);
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