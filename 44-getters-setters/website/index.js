// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validatea and modify a value when reading/writing a property

// class Rectangle{

//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth) {
//         if(newWidth > 0) {
//             this._width = newWidth; // _ means it is a private property, shouldn't be changed
//         }
//         else {
//             console.error("Width must be a positive number");
//         }
//     }

//     set height(newHeight) {
//         if(newHeight > 0) {
//             this._height = newHeight; // _ means it is a private property, shouldn't be changed
//         }
//         else {
//             console.error("Height must be a positive number");
//         }
//     }

//     get width() {
//         return this._width.toFixed(1);
//     }

//     get height() {
//         return this._height.toFixed(1);
//     }


//     get area() {
//         return (this._height * this._width).toFixed(1);
//     }
// }


// const rectange = new Rectangle(3, 4); // getters/setters are used to make no fancy value is set

// console.log(rectange.height);
// console.log(rectange.width);
// console.log(rectange.area);

class Person{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else {
            console.error("First name must a non-empty string");
        }
    }

    set lastName(lastName) {
        if(typeof lastName === "string" && lastName.length > 0){
            this._lastName = lastName;
        }
        else {
            console.error("Last name must a non-empty string");
        }
    }

    set age(newAge) {
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else {
            console.error("Age must a non-negative number");
        }
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }

    get age() {
        return this._age;
    }


}

const person = new Person("Spongebob", "Squarepants", 32);
// person.firstName = "Bro";
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);