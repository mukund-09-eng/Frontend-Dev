console.log("Start");

setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask: Promise.then");
});

console.log("Synchronous Log");

console.log("End");

/*
Explanation:
- JavaScript first runs all synchronous code.
- Then it executes all MICROTASKS (Promise callbacks).
- After all microtasks finish, it executes MACROTASKS (setTimeout).

So the order becomes:
1. Start
2. Synchronous Log
3. End
4. Microtask: Promise.then
5. Macrotask: setTimeout
*/
