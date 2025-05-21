function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}

fuction rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie)



-----------------------
    公開関数

function makeRandomFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log('おめでとう');
        }
            else {
            return function () {
                alert('ウイルスに感染しました')
            }
        }
    }
}

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

----------------------------

const myMath = {
    PI: 3.14,
    square: function (num) {  //functionを消して省略して書いてもいい
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }
}


const square = {
    area: function (side) {
        return side * side
    },
    perimeter: function (side) {
        return side * 4;
    }
}