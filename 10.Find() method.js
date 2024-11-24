//The find() method in JavaScript is used to search for the first element in an array that satisfies a given condition. It returns the value of that element if found; otherwise, it returns undefined.

const data = [

  { _id: "1", name: "Vivek" },

  { _id: "2", name: "Neha" },

  { _id: "3", name: "Satya" },

  { _id: "4", name: "Amit" },

];

//Example 1: Find a person with id=1
const res=data.find((element)=>element._id==="1");

console.log(res); //{ _id: '1', name: 'Vivek' }


//Example 2: Find an even number

const numbers = [1, 3, 4, 7, 9];
const res1=numbers.find((element)=>element%2===0);
console.log(res1);