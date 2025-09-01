// Write a Javascript program to check two numbers and return true if one of the number is 100 
// or if the sum of the two numbers is 100 

// For beginner (me right now)
function checkNum (num1, num2) {
    if (num1 === 100 || num2 === 100) {
        console.log(true);
    } else if (num1 + num2 === 100) {
        console.log(true);
    } else {
        console.log(false)
    }
}

// For intermediate (maybe later)
const checkNum = (num1, num2) => num1 === 100 || num2 === 100 || (num1 + num2) === 100;





