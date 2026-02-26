// element selectors = methods used to target and manipulate HTML elements
// they allow you to select one or multiple HTML elements from the DOM

// 1. document.getElementById() // Element or NULL
// 2. document.getElementClassName() // HTML collection
// 3. document.getElementByTagName() // HTML collection
// 4. document.querySelector() // element or null
// 5. document.querySelectorAll()// nodelist

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// const fruits = document.getElementsByClassName("fruits");

// fruits[2].style.backgroundColor = "green";

// for (let fruit of fruits) {
//     fruit.style.backgroundColor = "yellow";
// }

// // fruits.forEach(); // html collection do not have for each method

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "red";
// });



// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// h4Elements[0].style.backgroundColor = "yellow";

// for (let h4Element of h4Elements) {
//     h4Element.style.backgroundColor = "yellow";
// }

// for (let liElement of liElements) {
//     liElement.style.backgroundColor = "green";
// }
// console.log(h4Elements)

// console.log(fruits);

// querySelector

// const element = document.querySelector(".fruits"); // selects first matching elment or nul
// element.style.backgroundColor = "red";


// queryselectorall

const fruits = document.querySelectorAll("li");
fruits[2].style.backgroundColor = "yellow";

fruits.forEach(fruit => {
    fruit.style.backgroundColor = "green";
})

