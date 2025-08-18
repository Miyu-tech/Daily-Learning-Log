1. JSXの基本とは？

JSX(JavaScript XML) とは
👉 JavaScriptの中で HTMLっぽい書き方 をできる仕組みです。

例
const element = <h1>Hello, JSX!</h1>;


これは実際にはJavaScriptに変換されます（React.createElementという関数に）。

👉 つまり 「見た目はHTML、実態はJavaScript」 というイメージ。

2. Reactアプリの基本構造

Reactアプリは「小さな部品（コンポーネント）」を組み合わせて作ります。

よくある最小構造
src /
├── App.js        ← メインのコンポーネント
├── index.js      ← アプリの入口（Appを画面に描画する）


index.js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Appコンポーネントを読み込む

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


App.js

function App() {
    return (
        <div>
            <h1>Hello React</h1>
            <p>これはReactアプリの基本構造です</p>
        </div>
    );
}

export default App;


👉 index.js が App を呼び出して、App が画面全体を構成していく流れ。

3. コンポーネントとは？

コンポーネントは UIを部品化したもの。
Reactアプリはすべてコンポーネントでできています。

例：

function Button() {
    return <button>クリック</button>;
}

function App() {
    return (
        <div>
            <h1>アプリ</h1>
            <Button /> {/* ← コンポーネントを部品として使える */}
        </div>
    );
}

4. Import と Export とは？

コンポーネントや関数を ファイル間で使えるようにする仕組み。

export（外に出す）
export default App;   // 1つだけデフォルトで出す

import（外から読み込む）
import App from "./App";   // 使いたいところで読み込む


👉 複数exportも可能（export { A, B } → import { A, B } from ...）

5. JSXのルール

JSXはHTMLに似てるけど、JavaScriptの中で使うためにいくつかルールがあります。

✅ よく出る基本ルール

1つの親タグで囲む必要がある

return (
    <div>
        <h1>Hello</h1>
        <p>World</p>
    </div>
);


属性名はキャメルケース

class → className

onclick → onClick

    < button className = "btn" onClick = { handleClick } > OK</button >


        JavaScriptを埋め込むときは { }

const name = "Taro";
return <h1>Hello, {name}!</h1>;


タグは必ず閉じる

    < img src = "image.png" />   // 正しい
        <input type="text" />     // 正しい


if文は直接書けない → 三項演算子か論理演算子を使う

{ isLogin ? <p>ログイン中</p> : <p>ログアウト中</p> }