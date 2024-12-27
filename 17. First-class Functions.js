//Case-1:Assigned to variables: Functions can be stored in variables

const greet = function(name) {
    return `Hello, ${name}!`;
};

//Case-2:Passed as arguments: Functions can be passed as arguments to other functions.

var b=function(param1){
    console.log(param1);
}
function xyz()
{
    console.log("Hi");
}
b(xyz);

//Case-3:Returned from other functions: Functions can be returned as the result of other functions.

var b=function(){
    return function xyz()
    {
        console.log("Hi");
    }
}
var call=b();
call();