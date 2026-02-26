// DOM navigation = the process of navigating through the structure 
// of an html document using js

// .firstElement
// .lastElement
// .nextElementSibling
// . previousElementSibling
// .parentElement
// .children

// .firstElement

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// })

// .lastElementChild
// const element = document.getElementById("vegs");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "red";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "red";
// });

// .nextElementSibling
// const element = document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "green";

// .previousElementSibling

// const element = document.getElementById("desserts");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "green";

// .parentElement
// const element = document.getElementById("apple");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";

// .children

const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach(child =>{
    child.style.backgroundColor = "gray";
})
children[1].style.backgroundColor = "red";