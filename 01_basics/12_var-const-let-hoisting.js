//in var 
console.log(var1); //undefined. in var only declared the the the variable name in top of the code. 
// like var var1; so variable is declared but not defined
var var1 = "hacin"


console.log(const1); // error: reference error. 
// hoisting but const1 goes to "Temporal Dead Zone". same for let
const const1 = "hacin"


console.log(sum(30, 60));//90
//hoist the function's full body. so function calling work perfectly
function sum(a, b) {
    return a + b;
}