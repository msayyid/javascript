// Async/Await = Async = makes a function return a promise
//               Await - makes a sync function wait for a promise

// allows you write "asynchronous" code in a "synchronous" manner
// async doesn't have resolve or reject parameters
// everything after Await is placed in an event queue

function walkDog() {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                const dogWlalked = true;
                if (dogWlalked) {
                    resolve("you walk the dog");

                }
                else {
                    reject("You didn't walk the dog");
                }
            }, 1500);
    });
    
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = false;
            if (kitchenCleaned) {
                resolve("You cleaned the kitchen");
            }
            else {
                reject("You did't clean the kitchen");
            }
        }, 2000);
    });
}

function takeOutTrash() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if (trashTakenOut) {
                resolve("you took out the trash");
            }
            else {
                reject("you didn't take out the trash");
            }
        }, 1500);
    });
}

async function doChores() {
    try {
        const walkDogResult = await walkDog(); // wait for promise before continuing
        console.log(walkDogResult);
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
        console.log("you finisehd all the chores");
    }
    catch(error){
        console.error(error);
    }
    
}

doChores();