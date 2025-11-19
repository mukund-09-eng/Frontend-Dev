let expenses = [5000, 1200, 8000, 1500, 2000];

let total = expenses[0] + expenses[1] + expenses[2] + expenses[3] + expenses[4];
let average = total / expenses.length;
let finalAmount = total;
finalAmount += finalAmount * 0.10;

console.log("Total Expenses: ₹" + total.toFixed(2));
console.log("Average Expense: ₹" + average.toFixed(2));
console.log("Final Amount After Tax: ₹" + finalAmount.toFixed(2));
