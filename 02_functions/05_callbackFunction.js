// A callback function is a function passed as an argument to another function.
// "I will callback letter"

function registerUser(rs) {
    console.log("User is resitaring, need more data");

    // console.log(rs()); //{ name: 'Hacin', id: '23=55589-3', age: 22 }
    return rs();

}

function userBasicInfo() {
    let student = {
        name: "Hacin",
        id: "23=55589-3",
        age: 22
    }
    return student;
}

function pastAcademicInfo() {
    let academicInfo = {
        ssc: 5.00,
        hsc: 5.00
    }
    console.log(academicInfo);
}


console.log(registerUser(userBasicInfo)); //{ name: 'Hacin', id: '23=55589-3', age: 22 }
registerUser(pastAcademicInfo); //{ ssc: 5, hsc: 5 }


function calculator(a, b, cb) {
    let sum = a + b;
    cb(sum);
}

function displayResult(result) {
    console.log(result);
}

calculator(10, 15, displayResult) // 25


// etting the caller decide what happens inside the function
function processOrder(order, onSuccess, onFailure) {
    if (order.paid) {
        onSuccess(order);
    } else {
        onFailure("Payment not received");
    }
}

processOrder(
    { paid: true },
    (order) => console.log("Order processed:", order),
    (err) => console.log("Error:", err)
); //Order processed: { paid: true }