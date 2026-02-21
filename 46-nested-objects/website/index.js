// nested objects = objects inside of other Objects
// allows you to represent more complex data strcutures
// child object is enclosed by a parent object
// Person{Address{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// const person = {
//     fullName: "Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate", "jellyfhishing", "cooking"],
//     address: {
//         street: "124 const st",
//         city: "bikini bottom",
//         country: "int. water"
//     }
// }
// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[2]);
// // console.log(person.hobbies);
// console.log(person.address.country);
// console.log("loop through the object's properties")
// for (const property in person.address) {
//     console.log(person.address[property]);
// }

class Person{
    constructor(name, age, ...address){ // this means, the the first elemnt, 
                                        // and the second element name, age; and take evetyting else and collect it into an array called address
        this.name = name;
        this.age = age;
        this.address = new Address(...address); 
    }
}

class Address{
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 const st", 
                                            "bikini bottom", 
                                            "int. water");
console.log(person1.address.city);