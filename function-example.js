// function functionname(parameter) {
//     // function boddy
//     // return 
// }

// var returnvalues = functionName(parameter value);


function getAverage(assignment1, assignment2, assignment3) {
    console.log(assignment1, assignment2, assignment3);
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const myAverage = getAverage(60, 56, 58);
console.log(myAverage);