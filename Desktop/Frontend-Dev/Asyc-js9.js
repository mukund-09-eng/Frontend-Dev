/*
Predicted Output:
1. Script start
2. Script end
3. Promise callback   (microtask)
4. Timeout callback   (macrotask)
*/

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
Explanation:
- Microtasks (Promise callbacks) run immediately after the synchronous code.
- Macrotasks (setTimeout) run AFTER the microtask queue is empty.
*/
