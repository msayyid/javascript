// error = an object that is created to represent a problem that occurs
// occur often with user input or establishing a connection

// try { } = encloses code that might potentially cause an error
// catch { } = catch and handle any thrown errors from try { }
// finally { } = (optional) always executes. used mostly for clean up
//              ex. close files, close connections, release resources

// try {
//     console.log(s);
//     // NETWORK ERRORS
//     // PROMISE REJECTIONS
//     // SECURITY ERRORS
// }

// catch(error) {
//     // console.error(error);
//     console.log(error);
// }

// finally{ 
//     console.log("this always executes");
// }

// console.log("you have reached the end");
try {
    // this code is considered dangerous due to error possibility if not in try block
    const divident = Number(window.prompt("Enter a dividend: "));
    const divisor = window.prompt("Enter a divisor: ");

    if (divisor == 0) {
        throw new Error("you can't divide by zero!");
    }

    if (isNaN(divident) || isNaN(divisor)) {
        throw new Error("values must be a number");
    }

    const result = divident / divisor;
    console.log(result);
}

catch(error) {
    console.error(error);
}


console.log("you have reached the end");