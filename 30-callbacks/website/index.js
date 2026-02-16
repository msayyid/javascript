// callback = a function that is passed as an argument to handle another
//            used to handle asynchronous operations
//            1. Reading file 
//            2. Network requests 
//            3. Interacting with databases 
// "Hey when you are done, call this next" !!!!!!

// function hello(callback) {
//     console.log("hello!");
//     callback();
// }

// function goodbye() {
//     console.log("BYE");
// }

// function wait() {
//     console.log("wait");
// }

// function leave() {
//     console.log("Leave");
// }

// hello(leave);

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}

function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}

sum(displayPage, 1, 2);