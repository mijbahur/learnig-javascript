const game = ["Fifa", "Pubg", "COC", "Efootball"]

// game.forEach( function (val) {
//     console.log(val);    
// } )

game.forEach( (val) => {
    console.log(val);    
} )

console.log("------------------------------");

function print(val) {
    console.log(val);    
}

game.forEach(print); // only referance of the function
// game.forEach(print()); // this is wrong
// game.forEach(print(val)); // this is wrong

console.log("------------------------------");
const programmingLanguage = [
    {
        languageName: "C++",
        extension: "cpp"
    },
    {
        languageName: "Python",
        extension: "py"
    },
    {
        languageName: "Java Script",
        extension: "js"
    }
]

programmingLanguage.forEach( (item) => {
    console.log(`${item.languageName} -> ${item.extension}`);    
} )
// C++ -> cpp
// Python -> py
// Java Script -> js


const values = game.forEach( (item) => {
    return item;
})
console.log(values); // undefined. //foreach loop doesn't return any value.

let numbers = [2, 4, 6, 5, 8, 89, 8];

let filteredNum = numbers.filter( (num) => {
    return (num > 4); 
})

console.log(filteredNum.sort()); //[ 5, 6, 8, 8, 89 ]

const newNums = [];
numbers.forEach( (num) => {
    if(num > 5){
        newNums.push(num);
    }
} )

console.log(newNums); // [ 6, 8, 89, 8 ]

