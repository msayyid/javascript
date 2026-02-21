// setTimeout() = function in js that allows you to schedule
// the execution of a function after an amount of time(ms)
// times are approximate (varies based on the workload of the js runtime env.)
// setTimeout(callback, delay);
// clearTimeout(timeoutId) = can cancel a timeout before it triggers

// function sayHello(){
//     window.alert("hello");
// }

// // setTimeout(sayHello, 3000); // say hello after 3 seconds
// // setTimeout(function() {window.alert("hello")}, 3000);

// const timeoutId = setTimeout(() => window.alert("hello"), 3000);

// clearTimeout(timeoutId);
let timeoutId;
function startTimer() {
    timeoutId = setTimeout(() => window.alert("hello"), 3000);
    console.log("started");
}


function clearTimer() {
    clearTimeout(timeoutId);
    console.log("cleared");
}