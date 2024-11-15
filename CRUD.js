/*Step 1: Create Operation

Creating an object named person. This object should contain the following properties:

name

jobTitle

email

isVerified ( with initial value false)

Step 2: Read Operation

Print only the name and the isVerified status of the person

Step 3: Update Operation

Change the isVerified status to true

Step 4: Delete Operation

Remove the property name and add two new properties firstName and lastName

Step 5: Print the final object person.
*/
let person = {
    name: "Alice Smith",
    jobTitle: "Software Engineer",
    email: "alice.smith@example.com",
    isVerified : false
};
console.log(person.name);
console.log(person.isVerified);
person.isVerified=true;
delete person.name;
person.fisrtName="Alice";
person.lastName="Smith";
console.log(person);

