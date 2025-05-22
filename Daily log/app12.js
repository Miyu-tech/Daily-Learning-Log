const cat = {
    name: 'たま',
    color: 'grey',
    breed: 'American Short Hair',
    cry() {
        console.log(`${this.name}がにゃーとなきました`):
    }
}

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg: function () {
        this.eggCount += 1;
        return 'EGG';

    }
}

##Try catch
エラーが起きたときにこういうアクションを起こしてほしいという指示

try {
    hello.toUpperCase();
} catch {
    console.log('エラーが起きました');
}
console.log('実行します');


function shout(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch {
        console.log('shoutには文字列を入れてください');
    }
}