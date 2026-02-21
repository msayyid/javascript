// closures = a function defined inside of another function,
// the inner function has access to the variables
// and scope of the outer function
// allow for private variables and state maintenance
// used frequenctly in JS frameworks: React, Vue, Angular

// function outer() {
//     let message = "hello";
//     function inner() {
//         console.log(message);
//     }

//     // inner();
// }

// outer();
// inner();

// function createCounter() {
//     let count = 0;

//     function increment() {
//         count++;
//         console.log(`Count increased to ${count}`);
//     }

//     function getCount() {
//         return count;
//     }

//     return {increment, getCount}; // this returns increment:increment getcount:getcount
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();


// console.log(counter.getCount());
function createGame() {
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore() {
        return score;
    }
    return {increaseScore, decreaseScore, getScore};
}


const game = createGame();
game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}pts`);
