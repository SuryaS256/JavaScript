//The filter() method in JavaScript creates a new array containing all the elements of the original array that satisfy a specified condition. It does not modify the original array.
//Filter Even Numbers in the array

const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((element)=>element%2==0)
console.log(evens); // Output: [2, 4]
