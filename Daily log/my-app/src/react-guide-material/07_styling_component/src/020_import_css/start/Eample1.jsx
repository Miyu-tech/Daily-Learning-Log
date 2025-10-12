学んだこと
 1. 変数宣言：let と const
let count = 0;
const siteName = "My Portfolio";

説明：

let：あとで値を変える可能性があるときに使う

const：一度決めたら変えない（定数）
 一般的に constがデフォルト, 変更が必要なときだけletを使うのが現代の書き方です。

 2. 条件分岐：if / else if / else
const score = 85;

if (score >= 90) {
  console.log("Excellent!");
} else if (score >= 70) {
  console.log("Good job!");
} else {
  console.log("Keep trying!");
}

説明：

条件に応じて異なる処理を実行します。
フロントエンドでは「フォームのバリデーション」や「ボタン押下時の動作切り替え」に頻繁に使います。

 3. ループ処理：for と forEach
const fruits = ["apple", "banana", "cherry"];

// 通常のfor文
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// forEach (モダンな書き方)
fruits.forEach(fruit => console.log(fruit));

説明：

同じ処理を繰り返すときに使います。
DOMを複数まとめて操作したいとき（例：リストの全項目を表示）によく使われます。

 4. 関数（function）
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Yuki"));


またはモダンな「アロー関数」

const greet = (name) => `Hello, ${name}!`;

説明：

処理をひとまとめにして再利用できる形にします。
Reactやイベント処理で「関数」を作るのは基本中の基本です。

 5. DOM操作（HTMLとつなぐ）
const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
  alert("Button clicked!");
});

説明：

document.querySelector()：HTML要素を取得

addEventListener()：イベント（クリックなど）を監視
フロントエンドでは「ユーザーの操作に反応するUI」を作るための必須スキルです。

 6. 非同期処理（API通信など）
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

説明：

サーバーや外部API（例：天気・映画・求人など）からデータを取得するときに使います。
アプリで「外の情報を表示する」ときには必ず登場します。

 7. 配列やオブジェクト操作（データ処理）
const user = { name: "Yuki", age: 27 };
console.log(user.name); // "Yuki"

const users = ["Yuki", "Mina", "Ken"];
const newUsers = users.map(user => user.toUpperCase());
console.log(newUsers); // ["YUKI", "MINA", "KEN"]

説明：

アプリでは「リスト」や「データの集まり」を扱うことが多く、
map, filter, find, forEach などのメソッドを毎日使います。