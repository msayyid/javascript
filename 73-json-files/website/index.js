// JSON = (JavaScript Object Notation) data-interchange format
// used for exchanging data between a server and a web application
// JSON fiels {key:value} or [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string
// JSON.parse() = converts a JSON string to a JS object

// const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// console.log(names);
// const jsonString = JSON.stringify(names);
// console.log(jsonString);

// const person = {
//     "name":"Spongebob",
//     "age":30,
//     "isEmployed":true,
//     "hobbies":["jellyfishing", "karate", "cooking"]
// }

// console.log(person);
// const jsonString1 = JSON.stringify(person);
// console.log(jsonString1);

// const people = [{
//     "name":"Spongebob",
//     "age":30,
//     "isEmployed":true,
//     "hobbies":["jellyfishing", "karate", "cooking"]
// }, 
// {
//     "name":"Patrick",
//     "age":34,
//     "isEmployed": false,
//     "hobbies":["jellyfishing", "karate", "cooking"]
// },
// {
//     "name":"Squidward",
//     "age":50,
//     "isEmployed":true,
//     "hobbies":["jellyfishing", "karate", "cooking"]
// },
// {
//     "name":"Sandy",
//     "age":27,
//     "isEmployed": false,
//     "hobbies":["jellyfishing", "karate", "cooking"]
// }];
// console.log(people);
// const jsonString2 = JSON.stringify(people);
// console.log(jsonString2);

// JSON.parse()
// const names = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;

// const person = `{
//     "name":"Spongebob",
//     "age":30,
//     "isEmployed":true,
//     "hobbies":["jellyfishing", "karate", "cooking"]
// }`;

// const people = `[{
//     "name":"Spongebob",
//     "age":30,
//     "isEmployed":true,
//     "hobbies":["jellyfishing", "karate", "cooking"]
// }, 
// {
//     "name":"Patrick",
//     "age":34,
//     "isEmployed": false,
//     "hobbies":["jellyfishing", "karate", "cooking"]
// },
// {
//     "name":"Squidward",
//     "age":50,
//     "isEmployed":true,
//     "hobbies":["jellyfishing", "karate", "cooking"]
// },
// {
//     "name":"Sandy",
//     "age":27,
//     "isEmployed": false,
//     "hobbies":["jellyfishing", "karate", "cooking"]
// }]`;
// console.log(names);
// const parsedData = JSON.parse(people);
// console.log(parsedData);


// fetch()

fetch("people.json") // when the file is successfully fetched, .then() runs
        .then(response => response.json()) // 
        .then(value => {
                console.log(value); 
                return value;})
        .then(values => values.forEach(value => console.log(value.age)))
        .catch(error => console.error(error));