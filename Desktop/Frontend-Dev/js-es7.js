"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

for (let op of operations) {
  try {
    let result;

    switch (op) {
      case "add":
        result = num1 + num2;
        break;

      case "subtract":
        result = num1 - num2;
        break;

      case "divide":
        if (num2 === 0) throw "DivideByZeroError";
        result = num1 / num2;
        break;

      case "power":
        result = num1 ** num2;
        break;

      case "root":
        if (num1 < 0) throw "NegativeRootError";
        result = Math.sqrt(num1);
        break;

      default:
        throw "InvalidOperationError";
    }

    console.log(
      `Operation: ${op}
Numbers: ${num1}, ${num2}
Result: ${result}
-------------------------`
    );

  } catch (err) {
    console.log(
      `Operation: ${op}
Error: ${err}
-------------------------`
    );
  }
}
