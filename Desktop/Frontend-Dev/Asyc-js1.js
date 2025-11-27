function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 ? resolve("Water boiled") : reject("Boiling failed");
    }, 1500);
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 ? resolve("Coffee brewed") : reject("Brewing failed");
    }, 1500);
  });
}

function pourCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 ? resolve("Coffee poured") : reject("Pouring failed");
    }, 1500);
  });
}

boilWater()
  .then(msg => {
    console.log(msg);
    return brewCoffee();
  })
  .then(msg => {
    console.log(msg);
    return pourCoffee();
  })
  .then(msg => {
    console.log(msg);
    console.log("Coffee ready for the team!");
  })
  .catch(err => console.log("Error:", err));
