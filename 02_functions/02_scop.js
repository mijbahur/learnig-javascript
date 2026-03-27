var c = 234
// let c = 234
if (true) {
    let a = 10
    const b = 20
    var c = 30 // if c is declared using let and const before this will give an error. otherwise value will be updated
}

// console.log(a); // will give error
// console.log(b); // will give error
console.log(c); // 30


function one() {
    const username = "hacin"

    function two() {
        const website = "Chrome"
        console.log(username);
    }
    // console.log(website); --> this will give error
    two()

}

one() // hacin

function addOne(num) {
    return num + 1
}

let addTwo = function (num) {
    return num + 2
}
