const day0fweek = promt("Friday").toLowerCase;

if (day0fweek === "Monday") {
    console.log("月曜は憂鬱");
} else if (day0fweek === "Sunday") {
    console.log(日曜は最高)
} else if (day0fweek === "Friday") {
    console.log("金曜日大好き");
} else {
    console.log("その他");
}
// const age = 3;

// if (age < 5) {
//     console.log("無料");
// } else if (age < 10) {
//     console.log("1000円です。");
// } else if (age < 65) {
//     console.log("2500円です。");
// // } else {
// console.log("senior");
// }

// function getColor(phrase){

//     if (phrase === "stop"){
//         console.log("red");

//     } else if (phrase === "slow"){
//         console.log("yellow");
//     }else if (phrase === "go"){
//         console.log("green");
//     }else {
//         console.log("purple");
//     }
// }

// const password = prompt("パスワードを入力してください");

// if (password.length >= 6) {
//     console.log("パスワードは十分な長さがあります");
// } else if (password.length <= 6) {
//     console.log("パスワードが短いです。")
// }

// if (password.index("  ") === -1) {
//     console.log("空白を含まないいパスワードです。")
// } else {
//     console.log("空白を含んではいけません");
// }

const password = prompt("パスワードを入力してください");

if (password.length >= 6) {
    if (password.indexOf(" ") === -1);
    console.log("素晴らしいパスワードです")
} else {
    console.log("空白を含んではいけません");
}