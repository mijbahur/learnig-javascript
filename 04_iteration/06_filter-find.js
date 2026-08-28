// filter out element and create new array based on condition
// if not match return empty array. []
let numbers = [2, 4, 6, 5, 8, 89, 8];

let filteredNum = numbers.filter( (num) => {
    return (num > 4); 
})
console.log(filteredNum); // [ 6, 5, 8, 89, 8 ]

let mapedNum = numbers.map( (num) => num+10)
console.log(mapedNum); // [ 12, 14, 16, 15, 18, 99, 18 ]


const books = [
    { title: 'Book One',   genre: 'Fiction',     publish: 1981, edition: 2004 },
    { title: 'Book Two',   genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History',     publish: 1999, edition: 2007 },
    { title: 'Book Four',  genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five',  genre: 'Science',     publish: 2009, edition: 2014 },
    { title: 'Book Six',   genre: 'Fiction',     publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History',     publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science',     publish: 2011, edition: 2016 },
    { title: 'Book Nine',  genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === "Fiction");
// [
    //   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    //   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 }
// ]

userBooks = books.filter( (bk) => {return (bk.publish >= 1995 && bk.genre === "History")})
// [
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 }
// ]
console.log(userBooks);

// Removing falsy/invalid values
const values = [0, "hello", null, undefined, "world", false, 42];
const clean = values.filter(Boolean); // ["hello", "world", 42]

// Filtering by condition + combined with .map()
const students = [
    { name: "Hacin", marks: 95 },
    { name: "Tanvir", marks: 60 },
    { name: "Rafi", marks: 85 },
];
const topStudentNames = students
    .filter((s) => s.marks >= 80)
    .map((s) => s.name);
// ["Hacin", "Rafi"]

//find() return the first element of match case. if not matches return undefined.
let userBook = books.find((bk) => bk.genre === "History")