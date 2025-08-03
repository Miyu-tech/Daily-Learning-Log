new Promise((resolve, result)) => {  //resolve=whenyou success, reject=when you failed

}

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();

        setTimeout(() => {
            if (rand < 0.7) {
                resolve('Dummy data');
            } else {
                reject('Connection timeout');
            }
        }, 1000);
    });
};

fakeRequest('/hoge')
    .then((data) => {
        console.log('Success!');
        console.log(data);
    })
    .catch((err) => {
        console.log('Error!', err);
    });

//     例えると…
// 'err' だけ表示するのは、火事の時に「火事だ！」って言うだけで、どこで火が出てるか教えてくれないようなもの。

// 'Error!', err は「火事だ！リビングのカーテンが燃えてる！」って詳しく教えてくれる感じ。


const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve(); //色を変えたら「約束を果たしたよ！」とカードを返す（resolve()）
        }, delay);
    });
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('violet', 1000))
    .catch(() => { })  //もし何かあったときはcatchを使う