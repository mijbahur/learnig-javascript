// arrays are resizable and can contain a mix of different data types.
// must be accessed using nonnegative integers as indexes.
// *** JavaScript array-copy operations create shallow copies.


let arr = [2, 4, 76, "hacin"]
const arr2 = new Array(2, 5, "goal")

// console.log(arr);
console.log(arr2);


arr2.push(43) // add in the last
// arr2.pop(0) // pop the last element
console.log(arr2); // [ 2, 5, 'goal', 43 ]


arr2.unshift("value"); // less used -> memory consuming
console.log(arr2); // [ 'value', 2, 5, 'goal', 43 ]



let arr3 = new Array(0, 1, 2, 3, 4, "hacin")

console.log(arr3.includes(9)); // false
console.log(arr3.indexOf(878)); // -1
console.log(arr3.indexOf(2)); // 2

stringArray = arr3.join()
console.log(stringArray); // 0,1,2,3,4,hacin
console.log(typeof stringArray); // string


console.log();
console.log("---------------------- slice and splice ----------------------");
// arr3 = [ 0, 1, 2, 3, 4, 'hacin' ]

console.log("For slice ", arr3); // include the 1st parameter and exclude the last
const sliceArr = arr3.slice(1, 3)
console.log(sliceArr); // [ 1, 2 ]
console.log("For slice oparation main array(arr3) doesn't change", arr3); // [ 0, 1, 2, 3, 4, 'hacin' ]


console.log("For splice", arr3); // include both 1st and 2nd parameter
console.log(arr3.splice(1, 3)); // [ 1, 2, 3 ]
console.log("For splice oparation splice portion is deleted fome main array(arr3)", arr3); // [ 0, 4, 'hacin' ]



console.log();
console.log("-----------------------------------------------------------------------------------");

let ogPlayer = ["Ronaldo", "Modric", "Kroos"]
let newPlayer = ["Vini", "Rodrigo", "Mbappe"]

// realMadridPlayer.push(brasil) // not recommended cause it will push as an array
// console.log(realMadridPlayer); // [ 'Ronaldo', 'Modric', 'Kroos', [ 'Vini', 'Rodrigo', 'Militao' ] ]
// console.log(realMadridPlayer[3][2]); // Militao

let player = ogPlayer.concat(newPlayer)
console.log(player); // [ 'Ronaldo', 'Modric', 'Kroos', 'Vini', 'Rodrigo', 'Militao' ]


//best practice. can be added 2 or more array. just add "...arrayName" with comma
let madridPlayer = [...ogPlayer, ...newPlayer]
console.log(madridPlayer); // [ 'Ronaldo', 'Modric', 'Kroos', 'Vini', 'Rodrigo', 'Militao' ]

let multipleArray = [0, 1, 2, 4, [5, 6], 7, [8, 9, ['a', 'b', ['x', 3]]]]
let singleArray = multipleArray.flat(Infinity); //flat parameter can be actual depth of multiple array
console.log(singleArray); 
// [
//   0, 1, 2, 4,   5,   6,
//   7, 8, 9, 'a', 'b', 'x',
//   3
// ]
console.log(singleArray[10]); // b



console.log(Array.isArray("Haicn")); // false
console.log(Array.from("Hacin")); // [ 'H', 'a', 'c', 'i', 'n' ].... // convert all data type into array

console.log(Array.from({name: "Hacin"})); // will return empty array // []
let myObject = {team: "Real Marid", UCL: 15, laliga: 38}
console.log(Object.keys(myObject)); // [ 'team', 'UCL', 'laliga' ]
console.log(Object.values(myObject)); // [ 'Real Marid', 15, 38 ]


team = ["Real Madrid", "Bercelona", "Mancity"]
let score1 = 4
let score2 = 5
let score3 = 6
console.log(Array.of(team, score1, score2, score3)); // [ [ 'Real Madrid', 'Bercelona', 'Mancity' ], 4, 5, 6 ]

function sum(num1, num2, num3, ...restNumber) {
    console.log(`Rest Number: ${restNumber}`); //Rest Number: 12,3,5,64,32,2,12
}
sum(2, 3, 4, 12, 3, 5, 64, 32, 2, 12)
