// array


let fruits = ["apple", "orange", "banana", "coconut"]

// fruits.push("coconut");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.unshift("mango"); // add in the beginning
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("banana");
// console.log(numOfFruits);
// console.log(index);

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// fruits.sort().reverse();
for (let fruit of fruits) {
    console.log(fruit);
}