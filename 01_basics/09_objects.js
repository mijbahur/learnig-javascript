// singleton - An object that is created only once in the entire application, and the same instance is reused everywhere.
// Object.create --> it will create singleton 

// object literals

let mySym = Symbol("key1")
let FootballTeam = {
    name: "Real Madrid",
    UCL: 15,
    Laliga: 36,
    isWin: true,
    "country": "spain",
    [mySym]: "value1"
}

console.log(FootballTeam.name);
console.log(FootballTeam["name"]);
// console.log(FootballTeam.country); // country can not be accessed through dot
console.log(FootballTeam["country"]);

//** what will happen if we want to access a undeclared keys from an object?
//compiler will give an error. so we call it as optional 
// Errors when accessing properties of null or undefined */
console.log(FootballTeam?.player?.name, FootballTeam?.Laliga?.year); //undefined undefined



let myObj = {
    // mySym: "value1" // if we use this style mySym will act as string
    [mySym]: "value1"
}
console.log(myObj[mySym]); // this syntax is mandatory for symbol

// Object.seal(FootballTeam); //Add and delete is not allowed but edit is allowed
// delete FootballTeam.UCL;// can't possible
// FootballTeam.UCL = 16; // possible. valur will be updated


FootballTeam.name = "Real Madrid FC"


//**in freez add, delete, edit nothing possible. main object will not change */
// Object.freeze(FootballTeam) // it will freeze the object modification
// FootballTeam.name = "Barcelona" // name will not change if Object is freezed
console.log(FootballTeam);

    // {
    //   name: 'Real Madrid FC',
    //   UCL: 15,
    //   Laliga: 36,
    //   isWin: true,
    //   country: 'spain',
    //   Symbol(key1): 'value1' // Symbol looks like this
    // }


FootballTeam.fun1 = function(){
    console.log("in fun1");
}
FootballTeam.fun2 = function(){
    console.log(`in fun2 and football team is ${this.name}`);
    return true;
}

// console.log(FootballTeam.fun1); // [Function (anonymous)] --> printing the function itself, not executing it. It has no name, so JavaScript calls it an anonymous function.

console.log(FootballTeam.fun1()); //prints function output and its return value
    // in fun1
    // undefined --> if a function doesn't return a value: return undefined

console.log(FootballTeam.fun2());
    // in fun2 and football team is Real Madrid FC
    // true