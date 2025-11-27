function waitLog(msg) {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, 1000)
  );
}

async function pipeline() {
  await waitLog("Design completed");
  await waitLog("Build completed");
  await waitLog("Testing completed");
  await waitLog("Deployment completed");
  await waitLog("Celebration started!");
}

pipeline();
