/*Accepts three string arguments firstName, middleName, and lastName

Returns an object with

Key as fullName

Value as a concatenated string of firstName, middleName, and lastName separated by a whitespace (" “)
*/
function getFullName(firstName,middleName,lastName)
{
  let res=[];
  res.fullName=`${firstName} ${middleName} ${lastName}`;
  return res; 
}