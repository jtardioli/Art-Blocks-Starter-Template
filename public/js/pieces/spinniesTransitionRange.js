const canvasSize = 400;
const fps = 5;

function setup() {
  createCanvas(800, canvasSize);
  dim = width / 2;
  colorMode(HSB, 360, 100, 100);
  ellipseMode(RADIUS);
  frameRate(fps);

  clearStorage();
}

function draw() {
  angleMode(DEGREES);

  translate(400, 200);

  let colorMin = 30;
  let colorMax = 220;
  let colorIncrement = 1;

  let yMin = 30;
  let yMax = 200;
  let yIncrement = 0.1;

  let diaMin = 1;
  let diaMax = 30;
  let diaIncrement = 1;

  for (let i = 0; i < 90; i++) {
    let currColor = getItem(`currColor[${i}]`);
    let colorIncrementing = !!getItem(`colorIncrementing[${i}]`);

    let currY = getItem(`currY[${i}]`);
    let yIncrementing = !!getItem(`yIncrementing[${i}]`);

    let currDiameter = getItem(`currDiameter[${i}]`);
    let diaIncrementing = !!getItem(`diaIncrementing[${i}]`);

    if (!currColor && currColor !== 0) {
      currColor = randomIntFromInterval(colorMin, colorMax);
    } else {
      const { value, newIncrementing } = incrementInRange(
        currColor,
        colorMin,
        colorMax,
        colorIncrementing,
        colorIncrement
      );
      currColor = value;
      storeItem(`colorIncrementing[${i}]`, newIncrementing);
    }

    if (!currY && currY !== 0) {
      currY = randomIntFromInterval(yMin, yMax);
    } else {
      const { value, newIncrementing } = incrementInRange(
        currY,
        yMin,
        yMax,
        yIncrementing,
        yIncrement
      );

      currY = value;
      storeItem(`yIncrementing[${i}]`, newIncrementing);
    }

    if (!currDiameter && currDiameter !== 0) {
      currDiameter = randomIntFromInterval(diaMin, diaMax);
    } else {
      const { value, newIncrementing } = incrementInRange(
        currDiameter,
        diaMin,
        diaMax,
        diaIncrementing,
        diaIncrement
      );
      currDiameter = value;
      storeItem(`diaIncrementing[${i}]`, newIncrementing);
    }

    console.log(currDiameter);

    storeItem(`currColor[${i}]`, currColor);
    fill(currColor, 90, randomIntFromInterval(50, 90));
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
    incrementing = !incrementing;
    if (value < min) {
      value += incrementAmt;
    }
    if (value > max) {
      value -= incrementAmt;
    }
  }
  return { value, newIncrementing: incrementing };
}
