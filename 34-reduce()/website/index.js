// .reduce() = reduce the elements of an array to a single value

// const price = [5, 30, 10, 25, 15, 20];

// const total = price.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

// function sum(accumulator, element) { // accumulator is like prev element and element is like the next
//     return accumulator + element;    // accumulator accumulates
// }


const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);

const minimum = grades.reduce(getMin);

console.log(maximum);

console.log(minimum);

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
    return Math.min(accumulator, element);
}