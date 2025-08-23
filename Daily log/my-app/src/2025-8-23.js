フック（Hook）

React が用意している「特別な仕組み」です。
普通の JavaScript ではできない「React ならではの動き（データを覚える、画面を変えるなど）」を実現するために使います。
代表的なフックには useState や useEffect があります。

state（ステート）

アプリが「覚えているデータ」のことです。
例えば「カウンターアプリ」なら、現在の数字（0, 1, 2…）を state として保存しておきます。
state が変わると、自動的に画面も更新されます。

useState

React のフックの一つです。
「この変数をずっと覚えておいて、変わったら画面も直してね」と React にお願いする仕組みです。

例（カウンターアプリ）:

import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>いまの数字: {count}</p>
            <button onClick={() => setCount(count + 1)}>増やす</button>
        </div>
    );
}


ここで count が state（現在の数字）、setCount がその数字を変更するための関数です。

クリック

ボタンなどを押すことです。
React では onClick というイベントを使って、「クリックされたときに実行する処理」を書きます。

例:

<button onClick={() => alert("押された！")}>ここを押す</button>