// string methods

// let userName = "BroCode"

// userName.charAt(0)
// console.log(userName.indexOf("o"))
// console.log(userName.lastIndexOf("o"))
// console.log(userName.charAt(4))
// console.log(userName.length)

// userName = "BroCode   "

// console.log(userName.trim());
// console.log(userName.toUpperCase());
// console.log(userName.repeat(3));

// let result = userName.startsWith(" ");
// console.log(result);

// if (result) {
//     console.log("Your username can't begin with an empty space");
// }
// else{
//     console.log(userName);
// }

// result = userName.includes(" ");
// console.log(result)

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "");
phoneNumber = phoneNumber.padStart(15, "0");
console.log(phoneNumber);