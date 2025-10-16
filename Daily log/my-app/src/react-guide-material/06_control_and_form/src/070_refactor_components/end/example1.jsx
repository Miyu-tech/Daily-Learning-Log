コールバック関数

他の関数に引数として渡され、あとで実行される関数

非同期処理やイベント処理でよく使う

var と let の違い

var → 関数スコープ、再宣言可能、巻き上げあり

let → ブロックスコープ、安全で再宣言不可

モジュール（module）

コードを分けて整理する仕組み

export と import で関数や変数を共有できる

オブジェクトの分割代入（Object Destructuring）

オブジェクトから値を取り出して変数に代入する便利な書き方

デフォルト値や変数名の変更も可能

クラス（class）

オブジェクトを作るための設計図

constructor, method, instance, extends などの概念

Getter / Setter

クラス内で値の取得・設定を安全に制御できる特殊メソッド

forEach

配列の全要素に対して順番に関数を実行する

戻り値はなく、途中で止められない

Local Storage にオブジェクトを保存する方法

localStorage.setItem("key", JSON.stringify(obj))

JSON.parse(localStorage.getItem("key")) でオブジェクトに戻す

setTimeout

指定した時間の後に一度だけ処理を実行する

非同期処理で使う

イベントのバブリング（Bubbling）

内側の要素から外側に向かってイベントが伝わる仕組み

stopPropagation() で止められる
