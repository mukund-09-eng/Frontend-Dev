function submitOrder() {
  return new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve("Order Success") : reject("Order Failed");
  });
}

async function processOrder() {
  for (let i = 1; i <= 3; i++) {
    try {
      await submitOrder();
      console.log("Attempt", i + ": Success");
      return;
    } catch {
      console.log("Attempt", i + ": Failed");
    }
  }
  throw "Order could not be processed";
}

async function start() {
  try {
    await processOrder();
  } catch (err) {
    console.log(err);
  }
}

start();
