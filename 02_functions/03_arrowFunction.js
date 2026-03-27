let user = {
    username: "Hacin",
    mblNumber: 239847,

    welcomeMessage: function () {
        console.log(`Thank you for logged in, ${this.username}`);
        console.log(this); // this will print the whole object
    }
}

user.welcomeMessage() // Thank you for logged in, Hacin
user.username = "Mijbahur"
user.welcomeMessage() // Thank you for logged in, Mijbahur

console.log(this); // {} --> give empty object but in in DOM it will give window


function fun() {
    let username = "Haicn"
    console.log(this.username); // this will give undefined because this do not work in function. it work on object
    // console.log(this); // "this" will give global object
}
fun()// undefined


const arrowFunction = () => {
    // let username = "Haicn"
    console.log(this); // {} --> in this case "this" will not give global object only empty object
}

arrowFunction()

// const addTowNumber = (num1, num2) => {
//     return num1 + num2 // explicit return
// }

// const addTowNumber = (num1, num2) => num1 + num2 // 
// const addTowNumber = (num1, num2) => ( num1 + num2 ) // implicit return
// multiple line can be wrinten but not recommended. for single line use only. dont need to write "return"


const addTowNumber = (num1, num2) => ({ username: "hacin" }) // for returning objet perentheses is mendatory
console.log(addTowNumber()) // { username: 'hacin' } --> addTowNumer always returning the object


let myArray = [3, 5, 2, 1]

myArray.forEach(function () { })
myArray.forEach(() => { })

myArray.forEach((value, index) => {
    console.log(value, index);
});