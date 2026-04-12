// function AddTwoNumber(num1, num2){
//     console.log(num1 + num2); // this will not return sum.
// }
function AddTwoNumber(num1, num2){
    return (num1 + num2); // this will return sum.

    console.log("I'm after return"); // this will never exicute. cz it is after return
}


let result = AddTwoNumber(3, 5);
console.log(`Summation: ${result}`);


function loginUserMessage(userName){
    if(userName === undefined){
        console.log("Please Enter an username");
        return
    }
    return `${userName} logged in.`
}

loginUserMessage("Hacin") // this will not print anything but function returns
console.log(loginUserMessage("Hacin")); // this will print return value
console.log(loginUserMessage("")); // passing empty string //  logged in.
console.log(loginUserMessage()); // Please Enter an username
                                 // undefined --> bcs function doesn't return anything 



function calculateCartPrice(...para){
    return para // return as an array
}
// function calculateCartPrice(val1, val2, ...para){
//     return para // [ 324, 323, 'haicn' ] --> 233 and 432 are stored in val1 and val2
// }

console.log(calculateCartPrice(233, 432, 324, 323, "haicn")); // [ 233, 432, 324, 323, 'haicn' ]


let user = {
    name: "Hacin",
    number: 928743
}

function objectCall(obj){
    console.log(`Username is ${obj.name} and mobile number is ${obj.number}`);
    //check in function, parameter name is used rather than main on]bject name
}

objectCall(user) // Username is Hacin and mobile number is 928743

function array(arr){
    return arr[1]
}

console.log(array([0, 1, 2, 3])); //1
