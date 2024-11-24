//Using forEach with Arrow syntax

const nums = [1, 2, 3, 4];

nums.forEach((element)=>
{
  console.log(element)
}
);

//Using forEach with index

const nums = [1, 2, 3, 4];

nums.forEach((value, index) => {

  console.log("Element " + value + " is at index " + index);

});
