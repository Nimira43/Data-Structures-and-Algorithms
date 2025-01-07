function calculator(a, b, op) {
  let result

  if (op === '+') result = a + b
  else if (op === '-') result = a - b
  else if (op === '*') result = a * b
  else if (op === '/') {
    if (b !== 0) {
      result = a / b
    } else {
      throw new Error('Division by zero')
    }
  } else {
    throw new Error('Invalid operator')
  }

  return result
}

module.exports = calculator

