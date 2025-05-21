function bankRobbery() {
    const heroes = ['スパイダーマン', 'スーパーマン', 'ブラックパンサー'];
    function help() {
        for (let hero of heroes) {
            console.log(`助けて、${hero}！！！`)
        }
    }
    help();
}


const add = function (x, y) {
    return x + y;
}

const square = function (num) {
    return num * num;
}