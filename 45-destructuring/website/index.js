// destructuring = extract values from arrays and objects,
// then assign them to variables in a convinient way
// [] = to perform array destructuring
// {} = to perform object desctructuring

// ex 1: swap the value of two variables

// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// ex 2: elements in an array
// const  colors = ["red", "green", "blue", "black", "white"];
// [colors[0], colors[4]] = [colors[4], colors[0]];
// console.log(colors);

// ex: assign array elements to variables

const  colors = ["red", "green", "blue", "black", "white"];
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
// This means:
// Take the first element → assign to firstColor
// Take the second element → assign to secondColor
// Take the third element → assign to thirdColor
// Take everything else → put into extraColors as an array

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// ex4 extract values from objects
// const person1 = {
//     firstName: "Spongebob",
//     lastName: "SquarePants", 
//     age: 30,
//     job: "Fry Cook"
// }

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star", 
//     age: 34
// }

// const {firstName, lastName, age, job="unemployed"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// ex5 destructure in function parameters

function display({firstName, lastName, age, job="unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants", 
    age: 30,
    job: "Fry Cook"
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star", 
    age: 34
}

display(person1);
display(person2);