//A closure is a feature in JavaScript (and many other programming languages) where a function can "close over" and access variables from its lexical scope, even after the outer function has finished executing.

function outerFunction(outerVariable) 
{
    var k=10;
    function innerFunction() 
    {
        console.log(outerVariable);
        console.log(k);
    }
    return innerFunction;
}

const newFunction = outerFunction("I am outer"); // 'outerVariable' is set to "I am outer"
newFunction();