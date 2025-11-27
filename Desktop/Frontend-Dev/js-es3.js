"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

let valid = [];
let invalid = [];

for (let t of transactions) {
  try {
    if (t === null) throw "Null transaction";
    if (!t.id || t.amount === undefined) throw "Missing fields";
    if (t.amount < 0) throw "Negative amount";

    valid.push(t);

  } catch (err) {
    invalid.push({ transaction: t, error: err });
  }
}

console.log("===== Transaction Report =====");
console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log(`Successful: ${valid.length}`);
console.log(`Failed: ${invalid.length}`);
