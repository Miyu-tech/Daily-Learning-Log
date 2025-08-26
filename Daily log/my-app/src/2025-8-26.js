1️⃣ push

配列の末尾に1つ以上の要素を追加

元の配列を直接変更する（破壊的操作）

const arr = [1, 2];
arr.push(3);
console.log(arr); // → [1, 2, 3]

2️⃣ map

配列の各要素を変換して、新しい配列を作る

元の配列は変更しない（非破壊的）

const arr = [1, 2, 3];
const doubled = arr.map(x => x * 2);
console.log(doubled); // → [2, 4, 6]
console.log(arr);     // → [1, 2, 3]

3️⃣ concat

配列と配列を結合して、新しい配列を作る

元の配列は変更しない（非破壊的）

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined); // → [1, 2, 3, 4]
console.log(arr1);     // → [1, 2]

4️⃣ filter

条件に合う要素だけ抽出して、新しい配列を作る

元の配列は変更しない（非破壊的）

const arr = [1, 2, 3, 4];
const even = arr.filter(x => x % 2 === 0);
console.log(even); // → [2, 4]
console.log(arr);  // → [1, 2, 3, 4]

---------------------------------------

    1️⃣ immutable とは

「変更できない」という意味

変数やデータを直接書き換えずに、新しいコピーを作って操作する

2️⃣ 例：配列
mutable（変更可能）
const arr = [1, 2, 3];
arr.push(4); // 元の配列を直接変更
console.log(arr); // → [1, 2, 3, 4]

immutable（変更不可）
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // 新しい配列を作る
console.log(arr);    // → [1, 2, 3]
console.log(newArr); // → [1, 2, 3, 4]

3️⃣ Reactとの関係

Reactでは stateを直接変更してはいけない

setState(oldState => oldState.push(newValue)); // NG


immutable操作 で新しい配列やオブジェクトを作る

setState(oldState => [...oldState, newValue]); // OK


理由：

Reactは 前回と新しいstateを比較して再レンダリングする

直接変更するとReactが変化を検知できず、表示が更新されないことがある