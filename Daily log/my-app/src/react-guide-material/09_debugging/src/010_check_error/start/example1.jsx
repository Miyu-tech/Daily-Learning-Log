1. immutability（イミュータビリティ / 不変性）

一度作ったデータは直接変えないで、新しいデータを作る考え方。

例：

const fruits = ["apple", "banana"];
const newFruits = [...fruits, "orange"]; // 元を壊さない


Reactでは、stateを直接変えずにsetStateで更新するのが基本。

2. 状態管理・純粋関数

状態管理：今の値（state）を覚えて、必要なときに変える仕組み。

純粋関数：同じ入力 → 同じ結果。外の変数を変えない関数。

Reactでは「状態管理」と「処理（関数）」を分けて書くことで、バグを減らす。

3. 関数型プログラミングの考え方

「データを変える」ではなく「新しいデータを作る」

不変性（immutability）＋純粋関数が大事。

JavaScriptでも .map() や .filter() は関数型の考え方。

4. Reactの再レンダーと変数のスコープ

let value = 0 のようなコンポーネントの外の変数は全コンポーネントで共有される。

<Child /> を複数並べると、それぞれ実行されて value が1, 2, 3 と増える。

Reactではこういう外部変数を使うのはNG。
→ useState で状態を管理するのが正解。

5. debuggerの使い方

debugger; を入れるとコードのその行で止まり、変数の中身や流れを確認できる。

undefined や TypeError が出たら値の扱いを確認。

関数の最初・state更新の直前・直後などに置くと効果的。

