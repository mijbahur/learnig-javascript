// Create a new array with the same length as another array
// map(Element, Index, Array)

let numbers = [2, 4, 6, 5, 8];

let mapedNum = numbers.map((num) => num + 10);
console.log(mapedNum); // [ 12, 14, 16, 15, 18]

// 1. Maths
let chainMapNum = numbers
    .map((num) => num * 10) // [ 20, 40, 60, 50, 80 ]
    .map((num) => num + 1) //[ 21, 41, 61, 51, 81 ]
    .filter((num) => num > 50); //[ 61, 51, 81 ] -> filnal ans.
console.log(chainMapNum);

// 2. Transforming API data for display
const users = [
    { id: 1, firstName: "Rafi", lastName: "Ahmed" },
    { id: 2, firstName: "Nadia", lastName: "Islam" },
];

const fullNames = users.map((user) => `${user.firstName} ${user.lastName}`);
// ["Rafi Ahmed", "Nadia Islam"]

// 3. Extracting a single field from an array of objects
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
];
const prices = products.map((p) => p.price); // [50000, 500]

// 4. Doing math/calculations on every item
const cart = [{ price: 200, qty: 2 }, { price: 100, qty: 3 }];
const totals = cart.map((item) => item.price * item.qty); // [400, 300]


