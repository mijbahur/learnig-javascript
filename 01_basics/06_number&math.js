let goalScore = 30
console.log(goalScore); // 30

let gaol = new Number(3)
console.log(gaol); // [Number: 3]

console.log(goalScore.toString().length); // after converting to string, all string method can be used

console.log(gaol.toFixed(2)); // 3.00

const number = 3244.879
console.log(number.toPrecision(4)); // return as a string // 3245
console.log(number.toPrecision(3)); // 3.24e+3

console.log(typeof(number.toPrecision(4))); // string

let totalGoal = 2788880
console.log(totalGoal.toLocaleString('en-IN')); // default is US standard. 'en-IN' is optional.
// add ',' in the number // output -> 27,88,880




// -------------------------------------------------------- Maths --------------------------------------------------------

console.log(Math); // Object [Math] {}
console.log(Math.abs(-3)); // 3

console.log(Math.round(8.9)); // 9
console.log(Math.floor(8.9)); // 8
console.log(Math.ceil(8.1)); // 9
console.log(Math.sqrt(35)); // 5.916079783099616
console.log(Math.pow(4, 2));
console.log(Math.min(4, 2, 6, 6, 2, 76)); // 2


console.log(Math.random()); // return number is always between 0 and 1.
console.log(Math.random() * 10 + 1); // between 1 and 11. 1 is added to avoid 0.004 this type of range

let min = 30
let max = 50

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // value will  be between 30 to 50
 