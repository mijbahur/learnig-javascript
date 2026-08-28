// accumulator: The value resulting(return value) from the previous call to callbackFn. On the first call, 
//              its value is initialValue if the latter is specified; otherwise its value is array[0].

// currentValue: The value of the current element. On the first call, its value is array[0] 
//               if initialValue is specified; otherwise its value is array[1].

const numbers = [1, 2, 3];
const initialValue = 0;
let newNums = numbers.reduce(function(acc, currentValue){
    console.log(`acc: ${acc}, currentValue: ${currentValue}`);    
    // acc: 0, currentValue: 1 // acc is 0 cz we passed initialValue 0.
    // acc: 1, currentValue: 2
    // acc: 3, currentValue: 3
    return acc + currentValue;
}, initialValue)

console.log(newNums); //6

let myTotal = numbers.reduce( (acc, currentValue) => acc +  currentValue, initialValue )
console.log(newNums); //6


const shoppingCart = [
    { itemName: "js course",            price: 2999 },
    { itemName: "py course",            price: 999 },
    { itemName: "mobile dev course",    price: 5999 },
    { itemName: "data science course",  price: 12999 }
]

let totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0);
console.log(totalPrice);

function topRatedRestaurant(restaurants) {
    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return "Invalid";
    }

    const bestRatedResturent = restaurants.reduce((max, current) => {
        return current.rating > max.rating ? current : max;
    });

    return bestRatedResturent.name.toUpperCase();
}
console.log(
    topRatedRestaurant([
        { name: "KFC", rating: 4.2 },
        { name: "Pizza Hut", rating: 5.6 },
        { name: "Chillox", rating: -4.5 },
        { name: "Sultan's Dine", rating: 7.8 },
    ]),
); // SULTAN'S DINE


//used for shoping cart, Calulating total shoping cost, etc.
