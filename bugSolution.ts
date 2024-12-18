function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

function printNumbersSafe(n: number | string): void {
  if (typeof n === 'string') {
    n = parseInt(n, 10);
  }
  if (typeof n === 'number' && !isNaN(n)) {
      for (let i = 1; i <= n; i++) {
        console.log(i);
      }
  } else {
    console.error("Invalid input: n must be a number or a number as string");
  }
}

printNumbers(10); // Works fine
printNumbersSafe('10'); // This now works correctly
printNumbersSafe('hello'); // Handles non-numeric string input