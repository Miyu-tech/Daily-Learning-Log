1. 基本の役割

JSXの中では文字列やタグだけでなく、{ } の中に JavaScriptの式 を書けます。

const name = "Taro";
return <h1>Hello, {name}!</h1>;


👉 { name } の部分が評価されて "Taro" に置き換わります。

2. 使えるもの（OKな式）

{ } の中には 式（評価して1つの値になるもの） だけが書けます。

✅ OK

{ user.age }             // プロパティ
{ count + 1 }            // 計算
{ isLogin ? "はい" : "いいえ" }  // 三項演算子
{ items.map(i => <li>{i}</li>) } // 配列をループ


❌ NG（文はダメ）

{ if (isLogin) { ... } }   // if文は使えない
{ for (let i = 0; i < 5; i++) { ... } } // for文も使えない


👉 if や for は文なのでダメ。その代わりに「三項演算子」や「map」を使います。

3. 具体的な使い方
🔹 動的に値を埋め込む
const age = 27;
<p>私は {age} 歳です。</p>

🔹 条件分岐（三項演算子）
{ isLogin ? <p>ログイン中</p> : <p>ログアウト中</p> }

🔹 論理演算子（&& を使って「あるときだけ表示」）
{ messages.length > 0 && <p>新しいメッセージがあります</p> }

🔹 配列をループして要素を生成
const items = ["りんご", "みかん", "バナナ"];
<ul>
    {items.map((item, index) => <li key={index}>{item}</li>)}
</ul>

4. JSXの外では不要

注意点として：
JSXの外では { } を使いません。普通にJavaScriptを書きます。

例：

// JSXの外
const msg = "Hello";

// JSXの中
return <p>{msg}</p>;