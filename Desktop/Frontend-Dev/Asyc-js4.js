function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 ? resolve("Server A deployed") : reject("Server A failed");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 ? resolve("Server B deployed") : reject("Server B failed");
    }, 3000);
  });
}

Promise.all([serverA(), serverB()])
  .then(() => console.log("Deployment completed for all servers"))
  .catch(err => console.log("Error:", err));

Promise.race([serverA(), serverB()])
  .then(result => console.log("Fastest response:", result))
  .catch(err => console.log("Error:", err));
