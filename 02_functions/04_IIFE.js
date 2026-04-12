// Imediatly Invoke Function Exoression (IIFE)
// after creating the function it exicute the function
// ex database connection


(function dbConnection() {
    //named IIFE
    console.log(`Databse connected one`);
})(); // if we dont use semicolon it will give error

(() => {
    console.log(`Databse connected tow`);
})();

(() => (console.log(`Databse connected three`)))();

((username) => {
    console.log(`Databse connected four. ${username}`);  
}) ("Hacin");