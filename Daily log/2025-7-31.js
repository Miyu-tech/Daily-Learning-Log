console.log('Send request to sever');
setTimeout(() => {
    console.log('There is a respose from a sever');
}, 3000);
console.log('end of file');

#Web API
This refers to a system that allows communication with other services and data via the Internet.

    #HTMLでグラデーションを作成するときはこれ
transition: 1s background - color;

##Public function
    A “public function” is a function that is “made public” so that it can be used from other parts of the program.


    🔁 同期 vs 非同期
👎 同期（synchronous）
処理が1個ずつ順番に終わらないと、次に進めない。

js
Copy
Edit
console.log("1");
alert("ストップ！"); // ユーザーがOKを押すまで止まる
console.log("2");     // 押すまで表示されない
👍 非同期（asynchronous）
時間がかかる処理を **“待たずに”他の処理を先に進める **。

js
Copy
Edit
console.log("1");

setTimeout(() => {
    console.log("2 (3秒後に表示)");
}, 3000);

console.log("3"); // すぐ表示される

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//     }, 1000);
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'yellow';
//     }, 1000);
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'green';
//     }, 1000);
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'blue';
//     }, 1000);
// }, 1000);

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay);
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                });
            });
        });
    });
});