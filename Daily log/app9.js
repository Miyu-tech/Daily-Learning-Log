function sing() {
    console.log('ド');
    console.log('レ');
    console.log('ミ');
}

singSong();
singSong();
singSong();
singSong();
singSong();

// 関数を書いて、その上下に事項を書く

function greet(firstName, lastName) {
    console.log(`Hi: ${firstName}`)
}
greet('Ken', 'Fukuyama')

function shout(message) {
    const upperMessage = message.toUpperCase();
    console.log(upperMessage);
    console.log(upperMessage);
    console.log(upperMessage)
}

shout('hello world');


function greet(firstName, lastName) {
    console.log(`Hi, ${firstName}, ${lastName[0]}.`)
}

greet('Ken', 'Fukunaga')


function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
        console.log(result);
    }
}

function isSameNumbers(num1, num2) {
    if (num1 === num2) {
        console.log('ゾロ目');
    } else {
        console.log('ゾロ目じゃない');
    }
}

function add(x, y) {
    const sum = x + y;
    return sum;
}

function multiply(x, y) {
    const multiply = x * y;
    return multiply;
}

function isShortsWeather(temperture) {
    if (temperture >= 25) {
        return true;
    } else {
        return false;
    }
}

function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1];
    }
}

function capitalize(str) {
    const firstChar = str[0].toUpperCase();
    const rest = str.slice(1);
    return firstChar + rest
}


function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total;
}

function returnDay(num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
        return null;
    }
    return days[num - 1]
}