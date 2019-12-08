const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

add(5, 3)
  .then(sum => {
    console.log("sum ", sum);
    return add(sum, 2);
  })
  .then(sum2 => console.log("sum2", sum2))
  .catch(err => console.log("err", err));
