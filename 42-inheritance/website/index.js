// inheritance = allows a new class to inherit properties and methods
// from an existing class (parent -> child)
// helps with code reusability

class Animal{
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`);
    }

    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "Rabbit";
    run(){
        console.log(`this ${this.name} is running`)
    }
}

class Fish extends Animal{
    name = "Fish";
    swim(){
        console.log(`this ${this.name} is swimming`)
    }
}

class Hawk extends Animal{
    name = "Hawk";
    fly(){
        console.log(`this ${this.name} is flying`)
    }
}

const rabbit = new Rabbit();
console.log(rabbit.alive);
rabbit.eat();
const fish = new Fish();
fish.sleep();
const hawk = new Hawk();
console.log(hawk.alive = false);
hawk.eat();

rabbit.run();
fish.swim();
hawk.fly();

