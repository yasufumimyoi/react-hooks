const add = (a, b) => {
  return a + b;
};

test("add two number", () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});
