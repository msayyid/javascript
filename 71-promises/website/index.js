// Promise = an object that manages asynchronous operations
// wrap a promise object around {asynchronous code}
// "I promise to return a value"
// PENDING -> RESOLVED -> REJECTED
// new Promise((resolve, reject) => {asynchronous code})


// we put callback() inside setTimeOut because we want the next task to start
// after the delay and after the first task finishes

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if (dogWalked) {
                resolve("You walked the dog");
            }
            else {
                reject("You didint walk the dog");
            }
            // resolve("you walk the dog 🐕");
    }, 2500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if (kitchenCleaned) {
                resolve("You cleaned the kitchen");
            }
            else {
                reject("you didn't cleant the kitchen");
            }
            // resolve("You clean the kitchen 🧹");
        }, 2500);
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const takenTrashOut = true;
            if (takenTrashOut) {
                resolve("You have taken the trash out");
            }
            else {
                reject("You haven't taken the trasho ut");
            }
            // resolve("You take out the trash");
        }, 1500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores");})

// walkDog(() => { // timer starts 2500ms, prints walk dog, and callback - cleanKitchen
//     cleanKitchen(() => { // timer, prints, callback - takeOutTrash
//         takeOutTrash(() => console.log("You finished all the work")); // timer, print, print
//     })
// })

// walkDog(what to do next)
// cleanKitchen(what to do next)
// takeOutTrash(what to do next)