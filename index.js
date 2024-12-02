// Function expression: Divide
const divide = function () {
    return 2000 / 100;
  };
  
  // Arrow function: Square
  const square = x => x * x;
  
  // Arrow function: Add
  const add = (a, b) => a + b;
  
  // Export functions if necessary for tests
  module.exports = { divide, square, add };
  
  // Test examples (optional)
  console.log(divide()); // 20
  console.log(square(5)); // 25
  console.log(add(3, 4)); // 7
  