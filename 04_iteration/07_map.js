let numbers = [2, 4, 6, 5, 8];

let mapedNum = numbers.map( (num) => num+10)
console.log(mapedNum); // [ 12, 14, 16, 15, 18]

let chainMapNum = numbers
                        .map( (num) => num * 10) // [ 20, 40, 60, 50, 80 ]
                        .map( (num) => num + 1) //[ 21, 41, 61, 51, 81 ]
                        .filter( (num) => num > 50) //[ 61, 51, 81 ] -> filnal ans.
console.log(chainMapNum);
