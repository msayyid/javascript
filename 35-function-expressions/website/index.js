// function declaration = define a reusable block of code 

// function hello() {
//     console.log("hello");
// }

// function exressions = a way to define functions as values or variables


// 1. Callbacks in asynchronous operations
// 2. Higher-order functions
// 3. Closures
// 4. Event listeners

// const hello = function() {
//     console.log("Hello");
// }

// hello();

// setTimeout(hello, 7000);

// setTimeout(function() {
//     console.log("Hello");
// }, 4000);

const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(square);
const squares = numbers.map(function(element) {
    return Math.pow(element, 2)
});

const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});


const evenNums = numbers.filter(function(element) {
    return element % 2 === 0;
});

const oddNums = numbers.filter(function(element) {
    return element % 2 !== 0;
});

const total = numbers.reduce(function(accumulator, element) {
    return accumulator + element;
})
console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);
// function square(element) {
//     return Math.pow(element, 2);
// }

