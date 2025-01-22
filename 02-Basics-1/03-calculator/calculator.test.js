const calculator = require('./calculator')

test('Performing arithmetic operations using the calculator function', () => {
  const num1 = 5
  const num2 = 7

  expect(calculator(num1, num2, '+')).toBe(12)
  expect(calculator(num1, num2, '-')).toBe(-2)
  expect(calculator(num1, num2, '*')).toBe(35)
  expect(calculator(num1, num2, '/')).toBeCloseTo(0.7143, 4)
})
