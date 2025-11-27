"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

let clean = [];
let errors = [];

for (let i = 0; i < rawData.length; i++) {
  try {
    debugger;
    let entry = JSON.parse(rawData[i]);
    if (!Object.prototype.hasOwnProperty.call(entry, "user") || !Object.prototype.hasOwnProperty.call(entry, "age")) {
      throw new Error("Missing keys (required: user, age)");
    }
    entry.age = Number(entry.age);
    if (isNaN(entry.age)) throw new Error("Age is not a number");
    clean.push(entry);
  } catch (err) {
    let type = err instanceof SyntaxError ? "Invalid JSON" : "Validation Error";
    let message = err instanceof Error ? err.message : String(err);
    errors.push({ line: i + 1, raw: rawData[i], type, message });
  }
}

const adults = clean.filter(e => e.age >= 18);
const minors = clean.filter(e => e.age < 18);

console.log("===== JSON Audit Report =====");
console.log("\nClean Entries:");
for (let e of clean) {
  console.log(`User: ${e.user}, Age: ${e.age}`);
}
console.log("\nAdults (18+):", adults.map(a => `${a.user}(${a.age})`));
console.log("Minors (<18):", minors.map(m => `${m.user}(${m.age})`));

console.log("\nErrors:");
for (let err of errors) {
  console.log(`Line ${err.line}: ${err.type} -> ${err.message}`);
  console.log(`Raw: ${err.raw}`);
  console.log("-------------------------");
}

console.log(`\nSummary: total=${rawData.length}, valid=${clean.length}, errors=${errors.length}`);
