// Start with example number
let num = 4783712;
console.log(num);

// Loop through values
while (num > 1) {
  if (num % 2 === 1) {
    num = num * 3 + 1;
    console.log(num);
  } else {
    num = num / 2;
    console.log(num);
  }
}
