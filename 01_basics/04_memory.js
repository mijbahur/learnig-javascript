// Primitive Types (call by value)
// 1. Stored in stack.
// 2. Passed or assigned by value.
// 3. Changes to copies don't affect the original.

// Non-Primitive (Reference Types)
// 1. Stored in heap; accessed via references.
// 2. Changing the value through another reference affects the original.

let myName = "Hacin"

let changedName = myName;

changedName = "Mijbahur"

console.log(myName);
console.log(changedName);


let userOne = {
    fullName : "Nahin Muntasir Rahman",
    email : "nahin@gamil.com"
}

let userTwo = userOne

console.log(userOne);
userTwo.fullName = "Mijba"
userTwo.email = "xyz@gamil.com"
console.log(userTwo);
