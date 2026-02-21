// sort() = sort elements of an array in place
// sorts elements as strings in lexicographic order, not alphabetical
// lexicographic = (alphabet + numbers + symbols) as strings

// let fruits = ["apple", "orange", "banana", "coconut", "pineappale"];


// fruits.sort();
// console.log(fruits);

// numbers = [1, 10, 2, 3, 6, 4, 3, 6, 7, 8];
// console.log(numbers.sort());

// numbers.sort((a, b) => a - b); // “If a is smaller, put it first.”
// // The rule is:
// // If return value < 0 → a comes before b
// // If return value > 0 → b comes before a
// // If return value = 0 → keep order
// console.log(numbers);

// numbers.sort((a, b) => b - a);
// console.log(numbers);

const people = [{name: "spongebob", age: 30, gpa: 3.0},
                {name: "patrick", age: 37, gpa: 1.5},
                {name: "squidward", age: 51, gpa: 2.5},
                {name: "sandy", age: 27, gpa: 4.0}
];

people.sort((a, b) => a.age - b.age);
console.log(people);
people.sort((a, b) => b.gpa - a.gpa);
console.log(people);

people.sort((a, b) => a.name.localeCompare(b.name)); // sort strings 
console.log(people);

people.sort();
console.log(people);