function applyOperation(numbers, operation) {
  return numbers.map(operation);
}

function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

const nums = [1, 2, 3, 4];

console.log("Doubled:", applyOperation(nums, double));
console.log("Squared:", applyOperation(nums, square));
