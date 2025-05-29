## if文を簡略化する方法

function rollDie(numSides) {
    // if (typeof numSides !== 'undefined') {
    //     numSides = numSides;
    // } else {
    //     numSides = 6;
    // }
    numSides = typeof numSides !== 'undefined' ? numSides : 6;
    return Math.floor(Math.random() * numSides) + 1;

}


スプレッド構文

Math.max(13, 4, 5, 6, 21, 9, 21, 2222)

Math.max(...)
この...を使用すると最大値の2222が出てくる

配列リテラル[]のこと

const cats = ['Tama', 'Tora', 'Momo'];
const dogs = ['Hachi', 'Pochi'];

const allPets = [...cats, ...dogs];