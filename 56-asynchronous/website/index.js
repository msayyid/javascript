// synchronous = executes line by line consecutively in a sequential manner
//               code that waits for an operation to complete

// asynchronous = allows mutliples operation to be performed concurently without waiting
// it doesn't block the execution flow and allows the program to continue
// (i/o, network rewquests, fetching data)
// handled with: callbacks, promises, async/await

function func1(callback) {
    setTimeout(() => {console.log("Task 1");
                      callback()}, 3000);
                      // settimeout(..., 3000) says: hey browser after 3 seconds run this
}

function func2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);