const gameName = {
    game1: "NFS",
    game2: "FIFA",
    game3: "PUBGM"
}

for (const key in gameName) {
    // console.log(key);// it will print all the keys
    // console.log(gameName[key]); // it will print only the values of key
    console.log(`${key} is ${gameName[key]}`); // it will print only the values of key
}

const map = new Map(); // doesn't add duplicate value. Not iterable
map.set("BAN", "Bangladesh")
map.set("ENG", "England")
map.set("FR", "France")
map.set("ENG", "England")

for (const key in map) {
    console.log(key); // it will print nothing cz Map is not iterable    
    console.log(map[key]); // it will print nothing
}


// Object -> for in loop
// Array -> for of loop, for each loop