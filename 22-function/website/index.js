// function

// function happyBirthday(username, age){ // username, age - parameters
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log(`Happy birthday to you ${username}!`);
//     console.log("Happy birthday to you!");
//     console.log(`You are ${age} years old`);
// }

// happyBirthday("Brocode", 25);// arguments


function add(x, y) {
    let result = x + y;
    return result;
}

function subtract(x, y){
    return x - y;
}

function multiply (x, y) {
    return x*y;
}

function divide(x, y) {
    return x/y;
}

function isEven(number) {
    // if (number % 2 === 0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return number % 2 == 0 ? true : false
}

function isValidEmail(email){
    // if (email.includes("@")){
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return email.includes("@") ? true : false;
}

// let answer = add(2, 3);
// console.log(answer);
// console.log(subtract(2, 3));
// console.log(multiply(2, 3));
// console.log(divide(2, 3));

console.log(isValidEmail("bro@fake.com"));
console.log(isValidEmail("brofake.com"));
// console.log(isEven(8));