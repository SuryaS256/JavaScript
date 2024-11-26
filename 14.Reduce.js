//The reduce() method in JavaScript is used to reduce an array to a single value by applying a specified function to each element of the array. It accumulates a result as it iterates through the array.

//Example: Calculate total price with Reduce Method
const cart = [
    
{ item: 'Book', price: 15 }

,{ item: 'T-shirt', price: 16 }
,{ item: 'Pant', price: 17 }

];

let total=cart.reduce((total,ele)=>total=total+ele.price,0);
console.log(total);