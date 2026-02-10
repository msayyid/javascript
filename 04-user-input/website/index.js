// how to accept user input

// 1. Easy way = window prompt
// 2. profressional way = html textbook

// let username = window.prompt("What's your username?");
// console.log(username);

let username;
document.getElementById("mySubmit").onclick = function(){
    // assign the value from the text box to username
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
    console.log(username);
}
