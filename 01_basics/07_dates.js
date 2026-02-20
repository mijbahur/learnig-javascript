let matchDay = new Date()

// console.log(matchDay); // 2026-02-20T18:18:41.378Z

// console.log(matchDay.toString()); // Sat Feb 21 2026 00:18:41 GMT+0600 (Bangladesh Standard Time)

// console.log(matchDay.toDateString()); // Sat Feb 21 2026

// console.log(matchDay.toLocaleDateString()); // 21/02/202

// console.log(matchDay.toLocaleString()); // 21/02/2026, 00:18:41

// console.log(matchDay.toISOString()); // 2026-02-20T18:18:41.378Z

// console.log(matchDay.toJSON()); // 2026-02-20T18:18:41.378Z

// console.log(matchDay.toTimeString()); // 03:33:31 GMT+0600 (Bangladesh Standard Time)

// console.log(matchDay.toUTCString()); // Fri, 20 Feb 2026 21:35:49 GMT


// let dob = new Date(2006, 10, 7) // 07/11/2006, 00:00:00
// let dob = new Date(2006, 10, 7, 4, 62) // 07/11/2006, 05:02:00
let dob = new Date("2006-10-03") // 03/01/2006, 00:00:00
console.log(dob.toLocaleString());


console.log(dob.getFullYear()); // 2006
console.log(dob.getMonth()); // 9. noted that month index is strting from 0
// console.log(dob.getMonth() + 1); // month index will be start from 01


let timeStamp = Date.now()
console.log(timeStamp); // return value as mili sec
console.log(dob.getTime()); // return value as mili sec
console.log(Math.floor(Date.now() / 1000)); // return value as sec


console.log(dob.toLocaleString('default', {
    weekday:"long", month: "short", day:"2-digit" // Tuesday 03 Oct
})); 
