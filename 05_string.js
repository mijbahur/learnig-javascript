const teamName = "Real Madrid"
const win = 570

// console.log(teamName + " wins " + win + " matches");
// not used in mordern Time

console.log(`${teamName} wins ${win} matches`); // string interpolation

const gameName = new String('Football')

console.log(gameName[4]);




// console.log(Object.getPrototypeOf(gameName));
console.log(gameName.length);
console.log(gameName.toUpperCase());


console.log(gameName.charAt(4));
// If index is invalid → returns empty string ""
// Does NOT support negative indexing


// at() is mordern method
console.log(gameName.at(-1));
// If index is invalid → returns undefined
// Supports negative indexing



console.log(gameName.indexOf('ball'));

console.log(gameName.substring(2, 5));
console.log(gameName.slice(-5, 7));

let newString = "    Hacin       "
console.log(newString.trim(newString));



let fullName = "Hacin-Mijbahur-Rahman"
console.log(fullName.split("-"));

console.log(fullName.includes("mijbahur"));


let url = "https://haicn.com/hacin%20mijbahur"
console.log(url.replace("%20", " "));




// link to read
// http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

console.log(gameName);
console.log(gameName);
console.log(gameName);
console.log(gameName);
console.log(gameName);
console.log(gameName);
console.log(gameName);
console.log(gameName);
console.log(gameName);
console.log(gameName);