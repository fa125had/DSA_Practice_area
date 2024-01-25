/*
Recursion is a powerful tool for solving problems that require the execution of a similar action multiple times until a certain condition(base case) is met.
*/

// Iterative factorial example
const iterativeFactorial = (n) => {
  let result = 1;
  while (n > 0) {
    result *= n;
    n -= 1;
  }
  return result;
};

const number = 4;
const iFactorial = iterativeFactorial(number);
console.log(`Iterative Factorial of ${number}: ${iFactorial}`);

// Recursive factorial example
const recursiveFactorial = (n) => {
  // Base Case
  if (n === 0) return 1;

  // Recursive Case
  if (n > 0) {
    console.log(`Execution context: ${n}`);

    return recursiveFactorial(n - 1) * n;
  }
};

const rFactorial = recursiveFactorial(number);
console.log(`Recursive Factorial of ${number}: ${iFactorial}`);

/*
While every recursive problem is a little different, 
the following features will always be required:

* Recursive case: the conditions under which the function will perform an action and call itself.

* Base case: the conditions under which the function returns a value without making any additional calls to itself
*/
