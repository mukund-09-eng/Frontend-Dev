function delay(msg) {
  return new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 1000) + 1000;
    setTimeout(() => {
      Math.random() > 0.2 ? resolve(msg) : reject(msg + " Failed");
    }, time);
  });
}

function takeOrder() { return delay("Order taken"); }
function prepare() { return delay("Food prepared"); }
function pack() { return delay("Package ready"); }
function dispatch() { return delay("Out for delivery"); }
function deliver() { return delay("Delivery completed"); }

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    console.log("Step 1:", await takeOrder());
    console.log("Step 2:", await prepare());
    console.log("Step 3:", await pack());
    console.log("Step 4:", await dispatch());
    console.log(await deliver());
  } catch {
    console.log("Pipeline failed!");
  }
}

runPipeline();

/*
Explanation:
- async/await pauses execution until each Promise resolves.
- If any step rejects, control jumps to catch().
- This creates a clean, readable async pipeline flow.
*/
