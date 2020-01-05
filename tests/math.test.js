const { calculateTip } = require("../Playground/math");
test("should calulate total with tip", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});

test("should calulate total with defualt tip", () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});
