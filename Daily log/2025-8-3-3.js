// ## await はasync関数の中でした使えない。
// 一時的にpromiseを止めてくれるもの
// 非同期のものを同期のような感じで使えます

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('violet', 1000))
//     .catch(() => { }) 


async function rainbow() {
    await delayedColorChange('red', 1000); //awaitをすることにより、ここで一時停止をしてくれる（オレンジを実行する前に赤を表示させてくれる）
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);

} //awaitを使うことにより、.thenを使用していた時よりもきれいに見える

rainbow()
    .then(() => {
        console.log('Rainbow Completed!'); // 上の色が全部終わった後表示される
    });

------------------------------
## resolveされた場合
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;

        setTimeout(() => {
            if (delay < 4000) {
                reject('Connection timeout');
            } else {
                resolve('Dummy data');
            }
        }, delay);
    });
};

async function makeRequest() {
    constdata1 = await fakeRequest('/hoge'); //awaitで手に入れたデータをどこかにしまわないといけない、だからconstに入れておく
    console.log('data1');
}

--------------------------------------

##Rejectされた場合

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;

        setTimeout(() => {
            if (delay < 4000) {
                reject('Connection timeout');
            } else {
                resolve('Dummy data');
            }
        }, delay);
    });
};

async function makeRequest() {
    try {
        const data1 = await fakeRequest('/hoge1');
        console.log(`data1: ${data1}`);
        const data2 = await fakeRequest('/hoge2');
        console.log(`data2: ${data2}`);
    } catch (e) {
        console.log('Error!');
        console.log(e);
    }
}