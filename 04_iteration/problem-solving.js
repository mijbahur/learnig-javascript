/*
  Problem 2: Merge & Deduplicate Arrays
  Merge two arrays and remove duplicates using spread + Set.

  Example: [1,2,3] + [2,3,4] -> [1,2,3,4]
*/

let arr1 = [10, 20, 30, 40, 50];
let arr2 = [50, 60, 20, 90];

// let margedArr = [... new Set([...arr1, ...arr2])]
let margedArr = Array.from(new Set([...arr1, ...arr2]));

console.log(margedArr);

/*
  Problem 1: Add Grade to Each Student (Without Changing Original)
  
  You have an array of student objects, each with name and marks.
  Create a NEW array where every student also has a "grade" field,
  based on their marks. The ORIGINAL array must stay exactly the same.

  Grading rule:
    marks >= 90 -> "A+"
    marks >= 80 -> "A"
    marks >= 60 -> "B"
    below 60    -> "Fail"

  Input:
    [
      { name: "Rafi", marks: 85 },
      { name: "Karim", marks: 45 }
    ]

  Output (new array):
    [
      { name: "Rafi", marks: 85, grade: "A" },
      { name: "Karim", marks: 45, grade: "Fail" }
    ]

  Original array must remain untouched (no "grade" field added to it).
*/

let students = [
    { name: "Rafi", marks: 85 },
    { name: "Karim", marks: 45 },
    { name: "Utsho", marks: 95 },
    { name: "Akash", marks: 65 },
];

const addGrade = (students) => {
    const getGrade = (grade) => {
        return grade >= 90
            ? "A+"
            : grade >= 80
              ? "A"
              : grade >= 60
                ? "B"
                : "Fail";
    };
    const modifiedStudent = students.map((student) => {
        const { name, marks } = student; //

        // const newStudentWithGrade = {name: name, marks: marks, grade: getGrade(marks)}
        // if key & value name is same, keep only one.
        const newStudentWithGrade = { name, marks, grade: getGrade(marks) };

        return newStudentWithGrade;
    });

    return modifiedStudent;
    // console.log(modifiedStudent, "modifiedStudent");
};

console.log("modifiedStudent", addGrade(students));
console.log("students", students);


/*
  Problem 2: Cart Total Calculator
  
  You have an array of cart items, each with a name, price, and qty
  (quantity). Calculate:
    1. Total number of items in the cart (sum of all qty)
    2. Total cost (sum of price x qty for each item)

  Then print one final message using a template string:
    "Total: X items, Y Taka"

  Input:
    [
      { name: "Pen", price: 100, qty: 1 },
      { name: "Notebook", price: 100, qty: 2 }
    ]

  Output:
    "Total: 3 items, 300 Taka"

  Bonus: if the cart is missing (null/undefined), don't crash —
  print "Total: 0 items, 0 Taka" instead.
*/

const cart = [
      { name: "Pen", price: 100, qty: 1 },
      { name: "Notebook", price: 100, qty: 2 }
    ]

	