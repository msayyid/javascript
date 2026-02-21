// DOM  = DOCUMENT OBJECT MODEL
// object {} that represents the page you see in the web browser
// and provides you with an API to interact with it
// web browser constructs the DOM when it loads and HTML document
// and structures all the elements in a tree-like representation
// JS can access the DOM to dynamically
// change the content, structure, and style of a web page

const username = "";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? "Guest" : username;

console.dir(document);