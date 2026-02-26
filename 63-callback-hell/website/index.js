// callback hell = situation in js where callbacks are nested within other
// callbacks to the degree where the code is difficult to read
// old pattern to handle asynchronous functions
// use promises + async/await to avoid callback hell

function task1(callback) {
    setTimeout(() => {
        console.log("task 1 complete");
        callback();
    }, 3200);
    // console.log("task1 complete");
}
function task2(callback) {
    setTimeout(() => {
        console.log("task 2 complete");
        callback();
    }, 1000);
    // console.log("task2 complete");
}
function task3(callback) {
    setTimeout(() => {
        console.log("task 3 now cojmplete");
        callback();
    }, 2000);
    // console.log("task3 complete");
}
function task4(callback) { 
    setTimeout(() => {
        console.log("task 4 complete");
        callback();
    }, 1500);
    // console.log("task4 complete");
}
function task5(callback) {
    setTimeout(() => {
        console.log("task 5 complete");
        callback();
    }, 2000);
}

// task1();
// task2();
// task3();
// task4();

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => console.log("All tasks complete"));
            });
        });
    });
});
console.log("all tasks complete");