## Jest Testing

#### Test Structure

###### describe: Groups related tests.
```
describe('Calculator', () => {
  // tests go here
})
```

###### test: Defines a test case.
```
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
})
```

###### beforeAll: Runs once before all tests in the describe block.
```
beforeAll(() => {
  // setup code
})
```

###### afterAll: Runs once after all tests in the describe block.
```
afterAll(() => {
  // cleanup code
})
```

###### beforeEach: Runs before each test in the describe block.
```
beforeEach(() => {
  // setup code for each test
})
```

###### afterEach: Runs after each test in the describe block.
```
afterEach(() => {
  // cleanup code for each test
})
```

#### Matchers

###### toBe(value): Checks for strict equality.
```
expect(42).toBe(42)
```

###### toEqual(value): Checks for deep equality.
```
expect([1, 2]).toEqual([1, 2])
```

###### toBeTruthy(): Checks if a value is truthy.
```
expect('hello').toBeTruthy()
```

###### toBeFalsy(): Checks if a value is falsy.
```
expect('').toBeFalsy()
```

###### toContain(item): Checks if an array or string contains an item.
```
expect(['apple', 'banana']).toContain('banana')
```

###### toThrow(error): Checks if a function throws an error.
```
expect(() => { throw new Error('error'); }).toThrow('error')
```

#### Mocking

###### jest.mock(moduleName): Mocks a module.
```
jest.mock('moduleName')
```

###### jest.fn(): Creates a mock function.
```
const mockFn = jest.fn()
```

###### mockReturnValue(value): Sets the return value of a mock function.
```
mockFn.mockReturnValue(42)
```

#### Asynchronous Testing

###### async/await: Handles asynchronous code.
```
test('async test', async () => {
  const result = await asyncFunction();
  expect(result).toBe('result');
})
```

#### Snapshot Testing

###### toMatchSnapshot(): Creates and compares snapshots.
```
expect(component).toMatchSnapshot()
```

#### Code Coverage

###### --coverage: Generates a code coverage report.
```
jest --coverage
```
