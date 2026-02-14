// variable scope
// global vs local

let x = 3; // global, not recommended to use

function function1() {
    let x = 1;
    console.log(x);
}

function function2() {
    let x = 2;
    console.log(x);
}

function1();
function2();