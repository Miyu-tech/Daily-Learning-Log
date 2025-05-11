// for (let i = 0; i < animals.length; i = ++) {
//     console.log(i);
// }

// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(i, animals[i]);
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`iは${i}`);
//     for (let j = 1; j = < 4; J++);
//     console.log(`jは${j}`);
// }

// const seatChart = {
//     ['Ito', 'Tao', 'Ut'],
//     ['Yu', 'Nh', 'Fg'],
//     ['Tf', 'Sd', 'Ml']
// };

// for (let i = 0; i < seatChart.length; i++) {
//     const row = seatChart[i];
//     console.log(`${i + 1}行目`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }

## while

// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }


// const secret = 'supersecret';

// let guess = prompt('秘密のコードを入力して下さい');

// while (guess !== secret) {
//     guess = prompt('秘密のコードを入力して下さい');
//     console.log('正解');
// }

## break

// let input = prompt("何か入力してください");
// while (true) {
//     input = prompt(input);
//     if (input === "quit") {
//         break;
//     }
// }


## Creating a small game!

// let maximum = parseInt(prompt('数字を入力してください'));
// while (!maximum) {
//     maximum = parseInt(prompt('エラー。有効な数字を入れてください。'));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// // console.log(targetNum);
// let count = 1;

// let guess = (prompt("一つ数字を決めました。数字を当ててみてください"));
// while (parseInt(guess) !=== targetNum) {
//     if (guess === 'q') break;
//     count++;
//     if (guess > targetNum) {
//         prompt('その数字より小さいです。')
//     } else {
//         guess = (prompt('その数字よりも大きいです。'))
//     }
//     if (guess === "q") {
//         console.log("終了します")
//     } else { }
//     console.log('おめでとう！${count}回で当てました')
// }