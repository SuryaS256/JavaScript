//sort() method modifies the original array.

//Sort Strings in Lexicographical Order:

const fruits = ["banana", "apple", "orange"];
fruits.sort();
console.log(fruits); // Output: ["apple", "banana", "orange"]

//Sort Numbers in Ascending Order:
const numbers = [40, 1, 5, 200];
numbers.sort((a, b) => a - b); // Ascending
console.log(numbers); // Output: [1, 5, 40, 200]

//Sort Numbers in Descending Order:
const numbers = [40, 1, 5, 200];
numbers.sort((a, b) => b - a); // Descending
console.log(numbers); // Output: [200, 40, 5, 1]

//Sort Objects by Property:
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 }
];

people.sort((a, b) => a.age - b.age); // Sort by age in ascending order
console.log(people);
// Output: [{name: "Bob", age: 20}, {name: "Alice", age: 25}, {name: "Charlie", age: 30}]
