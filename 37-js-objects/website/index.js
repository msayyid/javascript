// object = A collection of related properties and/or methods
//          can represent real world objects (people, products, places)
//          object = {key: value,
//                   function()}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function() {console.log("Hi, i am Songebob")},
    eat: function() {console.log("I am eating a krabby patty")}
}

const person2 = {
    firstName: "Patric",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    // sayHello: function() {console.log("Hi, i am Patrick")}
    sayHello: () => console.log("Hi, i am Patrick"),
    eat: () => console.log("i am eating roast beef, chicken and pizza")

}

console.log(person1.firstName);
console.log(person2.firstName);
person1.sayHello();
person2.sayHello();
person1.eat();
person2.eat();