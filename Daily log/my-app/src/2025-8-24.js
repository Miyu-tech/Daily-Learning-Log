togglerとは？

「toggler（トグラー）」は、ある状態をオン・オフで切り替える役割を持つ仕組みや関数のこと を指します。
英語の toggle = 切り替える が語源です。

🖥️ プログラミングでの例
1. 状態を切り替える関数
function toggle(value) {
    return !value;
}

let isOn = false;
isOn = toggle(isOn); // true
isOn = toggle(isOn); // false

2. Reactでの「toggler」

例えば、ボタンを押すたびに色や表示を切り替えるときによく使います。

import { useState } from "react";

export default function TogglerExample() {
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        setIsOn(prev => !prev); // true ⇔ false を切り替え
    };

    return (
        <button onClick={toggle}>
            {isOn ? "ON 🔆" : "OFF 🌙"}
        </button>
    );
}


isOn → 状態（true / false）

toggle → 状態を反転させる関数（トグラー）

---------------------------------

    レンダリングとは？

レンダリング(rendering) とは、
「プログラムやデータを画面に実際の見た目（UI）として描画する処理」のことです。

🖥️ Web開発でのレンダリング

ブラウザのレンダリング

HTML, CSS, JavaScript を読み込んで

それを「視覚的なWebページ」として表示すること

例: <h1>Hello</h1> を実際に大きな文字で画面に出す

Reactのレンダリング

コンポーネント（関数やクラス）で書いたコードを

「仮想DOM」経由で本当のDOMに反映して、画面に表示すること

2種類のレンダリング

初回レンダリング(Mount)

アプリを開いたとき、最初に画面を描画すること

再レンダリング(Re - render)

状態（useState の値など）が変わるたびに、UIを更新して描画し直すこと

例：

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>  {/* ← 状態が変わると再レンダリングされる */}
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}


---------------------------------------

    1. まず useState の基本
const [state, setState] = useState(initialValue);


useState の 引数 initialValue は、状態として保持したい値です。

() は 関数呼び出しの構文 なので必須です。

2. { } がついている理由
useState({ p1Score: 0, p2Score: 0 })


{ p1Score: 0, p2Score: 0 } は JavaScriptのオブジェクト を作っています

オブジェクト型を状態として持たせたいときは { } で囲みます

ポイント

1つの状態で 複数の値をまとめて管理 したいときにオブジェクトを使う

例：2人分のスコアを1つの state にまとめて管理したい場合

const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });

// p1のスコアを更新する
setScores(prev => ({ ...prev, p1Score: prev.p1Score + 1 }));


...prev → 既存の値をコピー

p1Score: prev.p1Score + 1 → p1Scoreだけ更新

-----------------------------------

    オブジェクトを丸ごと更新する

useState でオブジェクトを管理する場合、部分だけを書き換えると既存のプロパティは消えるので注意。

const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });

// NG: 既存のp2Scoreが消える
setScores({ p1Score: 1 });

// OK: 既存の値をコピーして更新
setScores(prev => ({ ...prev, p1Score: prev.p1Score + 1 }));


...prev → 元のオブジェクトをコピー

更新したいプロパティだけ上書き

stateはイミュータブルに扱う

直接書き換えはNG

scores.p1Score = 10; // ❌


必ず setScores を使って新しいオブジェクトを作る

setScores(prev => ({ ...prev, p1Score: 10 })); // ✅

部分更新はスプレッド構文で

複数のプロパティがある場合、必要なものだけ更新して他はコピー

setScores(prev => ({
    ...prev,
    p2Score: prev.p2Score + 5
}));
