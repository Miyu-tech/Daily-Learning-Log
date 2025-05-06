// const userInput = prompt("何か入力してください。");

// if (userInput) {
//     console.log("Truthy");
// } else {
//     console.log("Falthy")
// }


// if (1) {
//     console.log("Truthly");
// } else {
//     console.log("Falthy");
// }


// if (null) {
//     console.log("Truthly");
// } else {
//     console.log("Falthy");
// }


// if (undifined) {
//     console.log("Truthly");
// } else {
//     console.log("Falthy");
// }


// if (" ") {
//     console.log("Truthly");
// } else {
//     console.log("Falthy");
// }

const password = prompt("パスワードを入力してください");

if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("よいパスワードです！")
} else {
    console.log("パスワードのg￥フォーマットが無効です");
}
