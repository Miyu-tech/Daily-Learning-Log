// ## async function 長く書かなければいけないものを、より短く書くためのもの（非同期）

// 2 Key words = async & await

// asyncはfunctionの前に書く。asyncはpromiseなので、promiseと書かなくても大丈夫

async function hello() {

}

const sing = async () => {  //アロー関数の前につけても有効
    throw new Error("There's an error");
    return 'Lalalala';
}

sing().then((data) => {
    console.log('Success', data)
})
    .catch((err) => {
        console.log('Error!')
        console.log(err);
    });

-------------------------

    const login = async (username, password) => {
    if (!username || !password) {
        throw new Error('Either username or password is wrong')
    }
    if (password === 'secret') {
        return = 'Welcome Back!';
    }
    throw new Error('Wrong password');
}

login('hoge')
    .then(msg => {
        console.log('Successfully login!')
        console.log('msg');
    })
    .catch(err => {
        console.log('Error!');
        console.log(err);
    })