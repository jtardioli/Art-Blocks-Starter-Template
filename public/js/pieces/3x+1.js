// Start with example number
let num = 4783133712;
let nums = [];

// Loop through values and create array
while (num > 1) {
  if (num % 2 === 1) {
    num = num * 3 + 1;
    nums.push(num);
  } else {
    num = num / 2;
    nums.push(num);
  }
}

// Reverse array to start with 1
nums.reverse();

console.log(nums);

// Set random angles
const evenAngle = 14;
const oddAngle = 8;

// Starting line length
const lineLength = 25;

function setup() {
  // Use fixed canvas size
  createCanvas(500, 500);
  // Move to the center of the canvas and draw a square that encompasses the canvas.
  push();
  translate(width / 2, width / 2);
  rectMode(CENTER);
  square(0, 0, width / 2);
  pop();

  // Set starting coordinates
  let x1 = 250;
  let y1 = 250;
  let x2 = 250;
  let y2 = x2 - lineLength;

  strokeWeight(1);
  line(x1, y1, x2, y2);

  let prevX = x2;
  let prevY = y2;

  for (let i = 0; i < nums.length; i++) {
    const odd = num % 2 === 1;
    const { x, y } = getNextCoordinates(odd);
    line(prevX, prevY, x, y);
    prevX = x;
    prevY = y;
  }
}

function draw() {}

function getNextCoordinates(odd) {
  const x = lineLength * Math.cos() * odd ? oddAngle : evenAngle;
  const y = lineLength * Math.sin() * odd ? oddAngle : evenAngle;
  return { x, y };
}
