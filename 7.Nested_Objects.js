
const personalDetails = {

   name: "John Doe",

   designation: "Data Analyst",

   age: 24,

   address: {

      locality: "1600 roselane colony",

      city: "Mumbai",

      state: "Maharashtra",

      country: "India"

   }

}


//Accessing the nested objects


console.log (personalDetails.address); 

console.log (personalDetails.address.city); 

console.log(personalDetails['address']['city']);

//Adding new Properties to address

personalDetails.address.pincode=577204;