// ## .concat, .includes, .reverse


// let cats=["tama", "tora"];
// undefined
// let dogs = ["pochi", "hachi"];
// undefined
// cats.concat(cats);
// (4) ['tama', 'tora', 'tama', 'tora']
// dogs.contcat(cats);
// VM2526:1 Uncaught TypeError: dogs.contcat is not a function
//     at <anonymous>:1:6
// (anonymous) @ VM2526:1Understand this error
// dogs.concat(cats);

// (4) ['pochi', 'hachi', 'tama', 'tora']
// cats.concat(dogs);


// (4) ['tama', 'tora', 'pochi', 'hachi']
// let pets = dogs.concat(cats);
// undefined
// pets
// (4) ['pochi', 'hachi', 'tama', 'tora']
// cats.includes("tama");
// true
// cats.includes("Tama");
// false
// pets
// (4) ['pochi', 'hachi', 'tama', 'tora']
// pets.indexOf("pochi");
// 0
// pets.indexOf("tama");
// 2
// pets.indexOf("me");
// -1
// pets.push("tama");
// 5
// pets
// (5) ['pochi', 'hachi', 'tama', 'tora', 'tama']
// pets.indexOf("tama");
// 2
// pets.pop("tama");
// 'tama'
// pets
// (4) ['pochi', 'hachi', 'tama', 'tora']
// pets.reverse();
// (4) ['tora', 'tama', 'hachi', 'pochi']
// pets
// (4) ['tora', 'tama', 'hachi', 'pochi']

// ## .slice

// let colors = ["red", "yellow", "pink", "blue", "white"];
// undefined
// colors.slice();
// (5) ['red', 'yellow', 'pink', 'blue', 'white']
// colors.slice(1);
// (4) ['yellow', 'pink', 'blue', 'white']
// colors
// (5) ['red', 'yellow', 'pink', 'blue', 'white']
// colors.slice(4)
// ['white']
// colors
// (5) ['red', 'yellow', 'pink', 'blue', 'white']
// colors
// (5) ['red', 'yellow', 'pink', 'blue', 'white']
// colors.slice("2","4");
// (2) ['pink', 'blue']
// let warmColors = colors.slice("0","3");
// undefined
// warmColors
// (3) ['red', 'yellow', 'pink']
// colors.slice(-1);
// ['white']
// colors.splice(5,1);


// ##.slice, .splice

// colors = ["red", "yellow", "pink", "blue", "white", "black", "green"];
// (7)['red', 'yellow', 'pink', 'blue', 'white', 'black', 'green']
// colors.splice(5, 1);
// ['black']
// colors
//     (6)['red', 'yellow', 'pink', 'blue', 'white', 'green']
// days = ["Monday", "Tuesday", "Wednesday"];
// (3)['Monday', 'Tuesday', 'Wednesday']
// colors.slice(4, 0, "red-orange");
// []
// colors
//     (6)['red', 'yellow', 'pink', 'blue', 'white', 'green']
// colors.splice(4, 0, "red-orange");
// []
// colors
//     (7)['red', 'yellow', 'pink', 'blue', 'red-orange', 'white', 'green']
// colors.splice("5,0, "white - ish", "green - ish");
// VM4409: 1 Uncaught SyntaxError: missing) after argument list
// colors.splice(5, 0, "white-ish", "green-ish");
// []
// colors
//     (9)['red', 'yellow', 'pink', 'blue', 'red-orange', 'white-ish', 'green-ish', 'white', 'green']
// colors.splice(2, 2, "Deleted");
// (2)['pink', 'blue']
// colors
//     (8)['red', 'yellow', 'Deleted', 'red-orange', 'white-ish', 'green-ish', 'white', 'green']


//     ##
// let nums = [1, 2, 3];
// undefined
// let numsCopy = nums;
// undefined
// nums
//     (3)[1, 2, 3]
// numsCopy
//     (3)[1, 2, 3]
// nums.push(4)
// 4
// nums
//     (4)[1, 2, 3, 4]
// nums === numsCopy
// true



// ##

// const gameBoard = [["X", "0", "X"], ["0", null, "X"], ["0", "0", "X"]];
// undefined
// gameBoard
//     (3)[Array(3), Array(3), Array(3)]
// gameBoard[1][1];
// null
// gameBoard[1][1] = "Animal";
// 'Animal'
// gameBoard
//     (3)[Array(3), Array(3), Array(3)]
// gameBoard[1][1]
// 'Animal'

// ##
// const cat = {
//     name: "Tama",
//     age: 2,
//     colors: ["orange", "white"],
//     isHungry: true
// }
// undefined
// cat
// { name: 'Tama', age: 2, colors: Array(2), isHungry: true }
// age
// :
// 2
// colors
// :
// (2)['orange', 'white']
// isHungry
// :
// true
// name
// :
// "Tama"
// [[Prototype]]
// :
// Object




// オブジェクトの演習問題
// オブジェクトリテラルでオブジェクトを作りましょう！productという変数を作って、以下のプロパティを設定してくだださい：

// name - Stringで'Icecream'

// inStock - booleanでtrue

// price - numberで198

// flavors - 配列で、少なくとも3つのstringを定義してください（例えば['grape', 'apple', 'cherry']）

// Answer:
// const product = {
//     name: "Icecream",
//     inStock: true,
//     price: 198,
//     flavors: ["grape", "apple", "cherry"]
// }

// const years = { 1999: "good", 2020: "bad" }
// undefined
// years
// { 1999: 'good', 2020: 'bad' }
// years["1999"]
// 'good'
// years["bad"]
// undefined
// years["2020"]
// 'bad'
// const hoge = { true: "data", null: "moge" };
// undefined
// hoge["true"]
// 'data'
// hoge["true"]
// 'data'
// hoge[true]
// 'data'
// const midterm = { taro: 96, jira: 78 };
// undefined
// midterms
// VM6285: 1 Uncaught ReferenceError: midterms is not defined
// at < anonymous >: 1: 1
//     (anonymous) @VM6285: 1Understand this error
// midterm
// { taro: 96, jira: 78 }
// midterm.jiro
// undefined
// midterm.taro
// 96
// midterm.jira = 79
// 79
// midterm.jira
// 79
// midterm
// { taro: 96, jira: 79 }
// midterm.jira = "C+"
// 'C+'
// midterm["taro"] = "A+"
// 'A+'
// midterm
// { taro: 'A+', jira: 'C+' }
// midterm.saburo = "B+"
// 'B+'
// midterm
// { taro: 'A+', jira: 'C+', saburo: 'B+' }


// ##

// const comments = [
//     { username: "yamada", text: "aaaa", votes: 9 },
//     { username: "tanaka", text: "eeee", votes: 123 }
// ]
// undefined
// comments
//     (2)[{… }, {… }]0: { username: 'yamada', text: 'aaaa', votes: 9 } 1: { username: 'tanaka', text: 'eeee', votes: 123 } length: 2[[Prototype]]: Array(0)
// comments[1].text
// 'eeee'


// ## for

// for(let i=1; i <=10; i++){
//     console.log(i);
// }
// VM7140:2 1
// VM7140:2 2
// VM7140:2 3
// VM7140:2 4
// VM7140:2 5
// VM7140:2 6
// VM7140:2 7
// VM7140:2 8
// VM7140:2 9
// VM7140:2 10
// undefined
// for (let i=1; i<=20; i+=){
//     console.log(i);
// }
// VM7208:1 Uncaught SyntaxError: Unexpected token ')'Understand this error
// for (let i=0; i<=20; i+=2){
//     console.log(i);
// }
// VM7214:2 0
// VM7214:2 2
// VM7214:2 4
// VM7214:2 6
// VM7214:2 8
// VM7214:2 10
// VM7214:2 12
// VM7214:2 14
// VM7214:2 16
// VM7214:2 18
// VM7214:2 20
// undefined
// for(let i=1; i<=20; i+=2){
//     console.log(i);
// }
// VM7282:2 1
// VM7282:2 3
// VM7282:2 5
// VM7282:2 7
// VM7282:2 9
// VM7282:2 11
// VM7282:2 13
// VM7282:2 15
// VM7282:2 17
// VM7282:2 19
// undefined
// for (i=100; i>=0; i-=10){
//     console.log(i);
// }
// VM7362:2 100
// VM7362:2 90
// VM7362:2 80
// VM7362:2 70
// VM7362:2 60
// VM7362:2 50
// VM7362:2 40
// VM7362:2 30
// VM7362:2 20
// VM7362:2 10
// VM7362:2 0
// undefined
// for(let i=10; i<=1000; i*=10){
//     console.log(i);
// }
// VM7429:2 10
// VM7429:2 100
// VM7429:2 1000