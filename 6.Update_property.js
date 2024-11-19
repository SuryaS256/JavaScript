/*Implement the function updateProperty() that

Accepts three arguments an object obj, a string representing a property name propName, and a string str

Updates the property propName of the input object obj with the value str

Returns the updated property*/

function updateProperty(obj, propName, str) 
{
  // You only need to implement this function.
  obj[propName]=str;
  return obj[propName];
}