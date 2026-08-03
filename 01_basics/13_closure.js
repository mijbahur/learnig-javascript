// in a function, from where we can access a variable.

//clasure is when a function is able to remember and access its lexical scope even 
//when that function is excuting outside its lexical scope


function createCounter() {
    let counter = 0

    return function () {
        return ++counter
    }
}

let cartItem = createCounter()
console.log(cartItem); //[Function (anonymous)] //. basically return the function() { return ++counter}
// function cartItem() {
//     return ++counter
// } this function is created in [Function (anonymous)]


console.log(cartItem()); //1. in this case counter is not declared in cartItem() function. counter is accessing from ist outer scop(lexical scope)
console.log(cartItem()); //2.
console.log(cartItem()); //3.

function cashRegister() {
    let amount = 0;

    return function (payableAmount) {
        // console.log(payableAmount);
        amount += payableAmount;
        return amount;
    }
}

let coffeeShopCashCounter = cashRegister();
let restaurantShopCashCounter = cashRegister();


console.log(`Total earning from Cofffe Shop: ${coffeeShopCashCounter(200)}`); //200
console.log(`Total earning from Cofffe Shop: ${coffeeShopCashCounter(100)}`); //300

console.log(`Total earning from Restaurant: ${restaurantShopCashCounter(50)}`); //50

console.log(`Total earning from Cofffe Shop: ${coffeeShopCashCounter(500)}`); //800

// resister is same but work for different business


// Qus: Does Closure can leak memory?
// Ans: variables stay alive as long as the closure exists, which can cause memory leaks if not managed)

        function createBankAccount(balance) {
    return {
        deposit: (amt) => (balance += amt),
        withdraw: (amt) => (balance -= amt),
        getBalance: () => balance,
    };
}
// balance is NOT accessible directly: account.balance is undefined


// Qus: Why don't the variables in a closure get garbage collected?
// Ans: Because the inner function still holds a reference to them — and anything still reachable from running code doesn't get garbage collected.
        // cartItem = null; // no more references to the inner function
        // NOW counter has nothing pointing to it → eligible for garbage collection
