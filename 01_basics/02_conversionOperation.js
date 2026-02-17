let int = 44
console.log(typeof (int));

int = "44sdf";
let intStr = Number (int);
console.log(intStr);
console.log(typeof intStr);

// 33 -> 33
// "33ab" -> NaN
// true -> 1

let x = Boolean ("1")
console.log(x);
console.log(typeof x);

// 33 -> true
// "ab" -> true
// "" -> false
// 1 -> true; 0 -> false


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// --------------------- Operations ---------------------

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hacin"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // not preferable

let gameCounter = 100
++gameCounter;
console.log(gameCounter);