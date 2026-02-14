// while loop

// let userName = "";

// while(userName === "" || userName === null){
//     userName = window.prompt(`Enter your name: `);
// }
// console.log(`Hello ${userName}`);


// do{
//     userName = window.prompt(`Enter your name: `);
// }while(userName === "" || userName === null)

// console.log(`Hello ${userName}`);

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username: `);
    password = window.prompt(`Password: `);

    if (username === "myUsername" && "myPassword") {
        loggedIn = true;
        console.log("You are logged in!");
    }
    else {
        console.log("Invalid credentials, please try again.");
    }

}
