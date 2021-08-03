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

function setup() {
  // Use fixed canvas size
  createCanvas(500, 500);
  // Move to the center of the canvas and draw a square that encompasses the canvas.
  push();
  translate(width / 2, width / 2);
  rectMode(CENTER);
  square(0, 0, width / 2);
  pop();

  // Starting line length
  const lineLength = 25;

  // Set starting coordinates
  let x1 = 250;
  let y1 = 250;
  let x2 = 250;
  let y2 = x2 - lineLength;

  strokeWeight(1);
  line(x1, y1, x2, y2);

  // for (let i = 0; i < num.length; i++) {
  //   const line = getNextCoordinates(x1)
  // }
}

function draw() {}

function getNextCoordinates(x1, y1, x2, y2) {
  // const x = lineLength * Math.cos() * 2;
}
