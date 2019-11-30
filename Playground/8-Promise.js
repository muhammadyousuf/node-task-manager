const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([3, 5, 2]);
    reject("Something Wrong");
  }, 2000);
});

doWorkPromise
  .then(result => {
    console.log("Success", result);
  })
  .catch(err => {
    console.log("Error", err);
  });
