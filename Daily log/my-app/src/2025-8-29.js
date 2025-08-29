プログラミング（React / JS）

CSS調整

padding: 1em 0 1em 0; だと左右が詰まって見える → padding: 1em 2em; などで余白をつけると中央にきれいに配置できる。

React Hooks

useState の正しいインポートは

import { useState } from 'react';


→ 'react' を必ずクォーテーションで囲む必要がある。

getRolls関数

サイコロを振る処理は自分で定義する必要がある：

function getRolls(numDice) {
    return Array.from({ length: numDice }, () => Math.floor(Math.random() * 6) + 1);
}


mainタグの意味

    < main > は HTML の「そのページで一番大事な部分」を表すタグ。

見た目は < div > と同じだが、アクセシビリティや検索エンジンに「ここが重要」と伝えられる。

コンポーネントの役割分担

LuckyN：ゲーム全体の管理（勝敗判定・ボタン操作など）

Dice：複数のサイコロを表示

Die：サイコロ1つの見た目を表示

propsの扱い

winCheck のような関数を props で渡せば、勝敗判定のルールを柔軟に変えられる。

ただし props が渡されないと undefined(dice) でエラーになる → デフォルト関数を設定するか、呼び出し側で必ず渡す。