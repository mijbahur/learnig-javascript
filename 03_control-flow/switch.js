// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "jan"

switch (month) {
    case "jan":
        console.log("January");
        // break; // If break is not used, the program will execute the remaining code without checking further conditions.
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}