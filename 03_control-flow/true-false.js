const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// false == 0 => true
// false == '' => true
// 0 == '' => true

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
//(??) is used to provide a default value when a variable is: null or undefined

let val1;
// val1 = 5 ?? 10            // --> 5
// val1 = null ?? 10         // --> 10
// val1 = undefined ?? 15    // --> 15
val1 = null ?? 10 ?? 20      // --> 10
console.log(val1);

console.log(null ?? "Hello");        // "Hello"
console.log(undefined ?? "Hi");      // "Hi"
console.log("Mijba" ?? "Guest");     // "Mijba"
console.log(0 ?? 100);               // 0
console.log(false ?? true);          // false


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
// more than 80