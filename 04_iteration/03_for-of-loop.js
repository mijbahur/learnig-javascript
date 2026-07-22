// for of loop

const arr = [4, 5, "hacin"]
for (const i of arr) {
    console.log(i);
}

const greetings = "Hellow World!"
for (const greet of greetings) {
    console.log(`Each character is ${greet}`);   
}

const map = new Map(); // doesn't add duplicate value
map.set("BAN", "Bangladesh")
map.set("ENG", "England")
map.set("FR", "France")
map.set("ENG", "England")

console.log(map);
for (const [k, v] of map) {
    console.log(`Key -> ${k}, Value -> ${v}`);
}

const gameName = {
    "game1" : "Fifa",
    "game2" : "PUBG"
}
// for (const [key, value] of gameName) { 
//     // console.log(`${key} :- ${value}`);// object is not iterable, so we can't do this
// }

const mobileGame = ["pubg mobile", ""]

