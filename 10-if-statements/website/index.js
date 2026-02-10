// IF statements

// let age = 13;

// if(age >= 18) {
//     console.log("You are old enough to enter this site");
// }
// else{
//     console.log("You must be 18+ to enter this site");
// }

// let time = 14;

// if(time < 12) {
//     console.log("Good morning!");

// }
// else {
//     console.log("Good afternoon");
// }

// let isStudent = false;

// if (isStudent){
//     console.log("you are a student");
// }
// else{
//     console.log("you are not a student");
// }

// let age = 13;
// let hasLicense = 1;

// if(age >= 16){
//     console.log("you are old enough to drive");
//     if(hasLicense) {
//         console.log("You have your license");
//     }
//     else {
//         console.log("You do not have your licence yet");
//     }
// }
// else{
//     console.log("You must be 16+ to have a license");
// }

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age = 0;

mySubmit.onclick = function() {
    age = myText.value;
    age = Number(age);
    if(age >= 100) {
        resultElement.textContent = `You are too old to enter this site`
    }
    else if(age == 0){
        resultElement.textContent = `You can't enter. You were just born`
    }
    else if (age >= 18) {
        resultElement.textContent = `you are old enough to enter this site`
    }
    else if(age < 0) {
        resultElement.textContent = `You age can't be below 0`

    }
    else{
        resultElement.textContent = `You must be 18+ to enter this site`

    }
}

