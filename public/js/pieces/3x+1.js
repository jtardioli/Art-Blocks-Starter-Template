// Start with example number
let num = 4783133712;
console.log(num);
let nums = [];

// Loop through values and create array
while (num > 1) {
  if (num % 2 === 1) {
    num = num * 3 + 1;
    nums.push(num)
    console.log(num);
  } else {
    num = num / 2;
    console.log(num);
    nums.push(num)
  }
}

// Reverse array to start with 1
nums.reverse();

function setup() {
  // Grab the smaller of the window sizes and use that as the canvas size.
  const smallerDimension =
    windowWidth < windowHeight ? windowWidth : windowHeight;
  createCanvas(smallerDimension, smallerDimension);

  let x1 = 
  let y1 = 
  let x2 =
  let y2 = 

  strokeWeight(1);
  line(30, 20, 85, 75);
}

function draw() {}
