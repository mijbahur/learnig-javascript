const numbres = [10, 20, 30, 40, 50];

const [ten, twenty, , , fifty] = numbres;
console.log(ten, twenty, fifty); //10 20 50

const [first, ...others] = numbres;
console.log(others); // [20, 30, 40, 50]


// ---------------object destructuring------------------

const student = {
    name: "Hacin",
    id: "23-55589-3",
    age: 22,
    marks: {
        physics: 95,
        math: 100,
        chemistry: 98,
    },
};

// const name = student.name;
// const id = student.id;

const {
    age,
    name: fullName,
    marks,
    marks: { math },
} = student; // here age=22, name=Hacin

console.log(fullName, age, marks, math); // Hacin 22 { physics: 95, math: 100, chemistry: 98 } 100

const {city = "Dhaka" } = student;
console.log(city); // Dhaka (student has no city field so default value will be showen)


// in function 
function printStudent({ name, age, marks: { math } }) {
    console.log(name, age, math); //Hacin 22 100
}
printStudent(student);

const { name, ...rest } = student;
console.log(rest); 
// {
//   id: '23-55589-3',
//   age: 22,
//   marks: { physics: 95, math: 100, chemistry: 98 }
// }
