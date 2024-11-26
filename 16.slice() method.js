//The slice() method in JavaScript is used to create a shallow copy of a portion of an array or a string. It does not modify the original array or string but returns a new one.

const arr = [1, 2, 3, 4, 5];

// Extract from index 1 to 3 (end is exclusive)
console.log(arr.slice(1, 3)); // Output: [2, 3]

// Extract from index 2 to the end
console.log(arr.slice(2)); // Output: [3, 4, 5]

// Using negative indices
//If negative, it is treated as array.length + start/end
console.log(arr.slice(-3, -1)); // Output: [3, 4]

// No arguments (copy the entire array)
console.log(arr.slice()); // Output: [1, 2, 3, 4, 5]
