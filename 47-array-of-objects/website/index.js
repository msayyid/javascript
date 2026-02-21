


const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 10595},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];

// console.log(fruits[3].calories);
// console.log(fruits[3].name);
// console.log(fruits);
// fruits.pop();
// fruits.push({name: "grapes", color: "purple", calories: 62});
// console.log(fruits);
 

// fruits.splice(1, 2); // remove elements at certain elements
// console.log(fruits);

// forEach() 
// fruits.forEach(fruit => console.log(fruit.color));

// map()
// const fruitNames = fruits.map(fruit => fruit.name);
// console.log(fruitNames);

// filter()
// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// console.log(yellowFruits);
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// console.log(lowCalFruits);

// const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
// console.log(highCalFruits);

// reduce() 
const maxFruit = fruits.reduce((accumulator, fruit) => 
                                fruit.calories >= accumulator.calories ? 
                                fruit : accumulator);
console.log(maxFruit);

const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);
console.log(minFruit);