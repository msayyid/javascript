// switch

// let day = 1;

// switch(day){
//     case 1:
//         console.log("it is Monday");
//         break;
//     case 2:
//         console.log("it is Tuesday");
//         break;
//     case 3:
//         console.log("it is wed");
//         break;
//     case 4:
//         console.log("it is thurs");
//         break;
//     case 5:
//         console.log("it is froid");
//         break;
//     case 6:
//         console.log("it is satur");
//         break;
//     case 7:
//         console.log("it is sund");
//         break;
//     default:
//         console.log(`${day} is not a day`);
// }

let testScore = 12;
let letterGrade;

switch (true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}

console.log(letterGrade);
