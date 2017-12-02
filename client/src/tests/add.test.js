const add = (a, b) => a + b;

test('Sollte 2 Zahlen addieren.', () => {
  const result = add(4, 8);

  expect(result).toBe(12);
});
