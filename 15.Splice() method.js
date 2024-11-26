//The splice() method in JavaScript is used to add, remove, or replace elements in an array. It modifies the original array and can return the removed elements (if any) as a new array.

//Task-1:Create a function remove() that

//Accepts three arguments an array of strings names, a number startIndex, and a number deleteCount.

//Removes the elements starting from startIndex till the number of elements to be removed is equal to deleteCount

//Returns the removed elements in the form of an array.

function remove(names,startIndex,deleteCount)
{
    let res=names.splice(startIndex,deleteCount);
    return res;
}

//Task-2: remove 'Song 2' from the playlist and add 'New Song' in its place using the splice() method.


let playlist=['Song 1','Song 2','Song 3','Song 4'];
playlist.splice(1,1,"New Song")
console.log(playlist)

//Task-3 : Add Elements

const fruits = ["apple", "date"];
fruits.splice(1, 0, "banana", "cherry"); // Add elements at index 1
console.log(fruits); // Output: ["apple", "banana", "cherry", "date"]


//Task-4 : Replace Elements

const fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "orange"); // Replace 1 element at index 1 with "orange"
console.log(fruits); // Output: ["apple", "orange", "cherry"]
