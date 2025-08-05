// // function hex(r, g, b) {
// //     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice
// // }

// function makeColor(r, g, b) {
//     const color = {};

//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r},${g},${b})`;;
//     }
//     return color;
// }



class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = this.name;
    }
}

const c1 = new Color(255, 67, 89, 'tomato');






// 🧱 簡単にいうと？
// 新しく作るときに最初に1回だけ動く“はじめまして関数”
// （＝そのオブジェクトの初期設定をする場所）

// 🧪 JavaScript クラスでの例
// js
// Copy
// Edit
// class Dog {
//   constructor(name, age) {
//     this.name = name; // ← 初期設定
//     this.age = age;
//   }
// }

// const pochi = new Dog('ポチ', 3);
// console.log(pochi);
// // → { name: 'ポチ', age: 3 }

"hsl(130, 50% 80%)"