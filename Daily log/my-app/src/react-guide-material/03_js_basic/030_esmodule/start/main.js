// const fnArrowObj = number => ({result: number * 2})
// console.log(fnArrowObj(2));

// import {hello } from 

// function print(callback) {
//  const result = callback();
//  console.log(result);   
// }

// function fn(number) {
//     return number *2;
// }
// debugger;
// print(fn);


// const h1Element = document.querySelector('h1');
// console.log('h1Element');

// h1Element.textContent = 'Chenged sentence';

// const btnEl = document.querySelector('button');
// btnEl.addEventListener('click', () => {
//     console.log('hello')
// })

const arry = [10, 20, 30, 40];
const newArry2 = arry.map(val => val * 2);
const newArry3 = newArry2.filter(val => val > 50);
console.log(newArry3)

const restB = (n, argB) => console.log(argB);
restB(1,3,4);

const a = true;
let resultA = a ? 'True' : 'False';

setTimeout(()=> {
    a = 1;
}, 2000);
console.log(a);


async function init() {
    await new Promise((resolve, reject)=> {
    setTimeout(()=> {
        a = 1;
        resolve()
    }, 2000);
}).then(()=> {
    console.log(a);
})
};