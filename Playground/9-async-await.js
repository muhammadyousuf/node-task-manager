const doWork = async () => {
  const sum = await add(2, 5);
  const sum2 = await add(sum, -6);
  const sum3 = await add(sum2, 4);
  return sum3;
};

doWork()
  .then(result => console.log("result", result))
  .catch(err => console.log("err", err));
