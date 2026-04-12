let obj1 = new Object(); // singleton object through constructor
let obj2 = {}; // non singleton object through string literal

let user = {
    eamil: "example@gamil.com",
    fullName: {
        userFullName: {
            firstName: "Hacin",
            lastName: "Mijbahur Rahman"
        }
    }
}

console.log(user.fullName); // { userFullName: { firstName: 'Hacin', lastName: 'Mijbahur Rahman' } }
console.log(user.fullName.userFullName.firstName); // Hacin

obj1 = {1: "a", 2: "b"}
obj2 = {3: "c", 4: "d", 5: "e"}
let obj3 = {1: "r", 2: "s"}

// Object.assign() --> very first parameter is the target and rest are source that means first parameter's object will change
console.log(Object.assign(obj1, obj2)); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e' }

console.log(Object.assign({}, obj3, obj2)); // { '1': 'r', '2': 's', '3': 'c', '4': 'd', '5': 'e' } --> obj3 is not changed and first object(empty object) is target
// console.log(Object.assign({ ...obj1, ...obj2, ...obj3})); // syntax.. { '1': 'r', '2': 's', '3': 'c', '4': 'd', '5': 'e' }


console.log(obj1); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e' }
console.log(obj2); // { '3': 'c', '4': 'd', '5': 'e' }
console.log(obj3); // { '1': 'r', '2': 's' }




// for database
let users = [
    {
        id: 23,
        name: "Hacin",
        eamil: "hacin@gamil.com"
    },

    {
        id: 33,
        name: "Nahin",
        eamil: "nahin@gamil.com"
    }
]

console.log(users[1].name); // Nahin

// **Imporatant** --> return as array
console.log(Object.keys(user)); // [ 'eamil', 'fullName' ] 
console.log(Object.keys(user.fullName.userFullName)); // [ 'firstName', 'lastName' ]
console.log(Object.values(user.fullName.userFullName)); // [ 'Hacin', 'Mijbahur Rahman' ]

//entries() --> return as array. first property is key and second is value
console.log(Object.entries(user)); // [[ 'eamil', 'example@gamil.com' ], [ 'fullName', { userFullName: [Object] } ]]

console.log(user.hasOwnProperty('userFullName')); // false
console.log(user.fullName.hasOwnProperty('userFullName')); // true


console.log("------------------------------- de-structure --------------------------------");


let {userFullName: name} = user.fullName // user.fullName.userFullName => will treate as name
name.firstName = "HACIN"
name.lastName = "MIJBAHUR RAHMAN"
console.log(name); //{ firstName: 'HACIN', lastName: 'MIJBAHUR RAHMAN' }