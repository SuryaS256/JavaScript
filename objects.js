//Object creation
let student={
    firstName:"Surya",
    lastName:"S",
    age:25
};
//Add a new property fullName to the student object by combining firstName and lastName
student.fullName=`${student.firstName} ${student.lastName}`;

//Check if the isEngineer and fullName properties exist in the student object
console.log(student.hasOwnProperty('isEngineer'));
console.log(student.hasOwnProperty('fullName'));

//Remove the age property from the student object.
delete student.age;

//Print the object and its properties
console.log(student);
