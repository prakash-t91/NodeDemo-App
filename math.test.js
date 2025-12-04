// math.test.js
const math = require('./math'); // Import the function to be tested

describe('math function', () => { // Group related test cases
  test('adds 1 + 2 to equal 3', () => { // Define an individual test case
    const result = math(1, 2);           // Act: Call the function
    expect(result).toBe(3);            // Assert: Check the result with a matcher
  });

  test('adds negative numbers correctly', () => {
    expect(math(-1, -2)).toBe(-3);
  });

  test('adds 0 + 0 to equal 0', () => {
    expect(math(0, 0)).toBe(0);
  });
});
