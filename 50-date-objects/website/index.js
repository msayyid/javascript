// Date(year, month, day, hour, minute, second, ms)

// const date = new Date();
// console.log(date);


// const date = new Date(2024, 0, 1, 2, 3, 5, 3);
// console.log(date);


// const date = new Date("2024-01-02T12:00:00Z");
// console.log(date);

// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const dayOfWeek = date.getDay();
// console.log(year);
// console.log(month);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);

// date.setFullYear(2024);
// date.setMonth(0);
// date.setDate(1);
// date.setHours(2);
// date.setMinutes(3);
// date.setSeconds(2);
// console.log(date);

// compare
const date1 = new Date("2023-12-31");
const date2 = new Date("2023-01-01");

if (date2 > date1) {
    console.log("happy new year");
}

(date1 > date2) ? console.log("not happy new year yet") : console.log("happy new year actually");