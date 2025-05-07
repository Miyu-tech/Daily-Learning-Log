// const day = 2;

// if (day === 1); {
//     console.log("Monday")
// }else if (day === 2); {
//     console.log("Tuesday")
// }else if (day === 3); {
//     console.log("Wednesday")
// }else if (day === 4); {
//     console.log("Thurday")
// }else if (day === 5); {
//     console.log("Friday")
// }

const day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thuesday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
    case 7:
        console.log("週末です")
    default:
        console.log("無効な数字です")
}