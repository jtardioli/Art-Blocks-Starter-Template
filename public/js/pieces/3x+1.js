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
  // Grab the smaller of the window sizes and use that as the canvas size.
  createCanvas(500, 500);

  // let x1 =
  // let y1 =
  // let x2 =
  // let y2 =

  strokeWeight(1);
  line(30, 20, 85, 75);
}

function draw() {}
