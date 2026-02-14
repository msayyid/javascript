// method chaining = calling one method after another 
//                   in one continous line of code

// no method chaining

let userName = window.prompt("Enter your username: ");
// userName = userName.trim();

// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = userName.slice(1);
// extraChars = extraChars.toLocaleLowerCase();

// userName = letter + extraChars;

// console.log(userName);

// method chaining
userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
console.log(userName);
