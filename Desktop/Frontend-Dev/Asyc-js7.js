function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3 ? resolve("Profile Loaded") : reject("Profile Failed");
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3 ? resolve("Posts Loaded") : reject("Posts Failed");
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3 ? resolve("Messages Loaded") : reject("Messages Failed");
    }, 1000);
  });
}

const start = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]).then(results => {
  results.forEach((res, i) => {
    const mod = ["Profile", "Posts", "Messages"][i];
    if (res.status === "fulfilled") console.log(mod, "Success:", res.value);
    else console.log(mod, "Failed:", res.reason);
  });

  console.log("Total time:", Date.now() - start, "ms");
});
