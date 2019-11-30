const doWorkCallback = callback => {
  setTimeout(() => {
    //  callback("This is an error", undefined);
    callback(undefined, [2, 4, 5]);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
});
