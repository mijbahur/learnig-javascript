// primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// References (Non Primitive)
// Array, Objects, Function


// JavaScript is a dynamically typed language. 
// This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. 
// You can assign different types of values to a variable during its lifetime.


let id = Symbol("43")
let id2 = Symbol(43)

console.log(id === id2);

const bigNumber = 5879435349839845345987n;

const myArray = [543, "name", "age"]
console.log(myArray);
console.log(typeof myArray);

let myObject = {
    name: "Hacin",
    age: 23
}
console.log(myObject);



let myFunction = function(){
    console.log("this is function");
    
}

console.log(myFunction);


// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object