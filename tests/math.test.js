const {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  add
} = require("../Playground/math");
test("should calulate total with tip", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});

test("should calulate total with defualt tip", () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});

test("Should convert 32 F to 0 C", () => {
  const temp = fahrenheitToCelsius(32);
  expect(temp).toBe(0);
});

test("Should convert 0 C to 32 F", () => {
  const temp = celsiusToFahrenheit(0);
  expect(temp).toBe(32);
});

test("Asyn test demo", done => {
  setTimeout(() => {
    expect(2).toBe(2);
    done();
  }, 2000);
});

test("should add two numbers", done => {
  add(3, 5).then(sum => {
    expect(sum).toBe(8);
    done();
  });
});

test("should add two numbers asyn/await", async () => {
  const sum = await add(11, 22);
  expect(sum).toBe(33);
});
