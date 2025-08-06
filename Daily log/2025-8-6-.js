アロー関数ってなに？
JavaScriptで関数を書く新しい・短い書き方のこと。
見た目が「⇒（=>）」に似ているので“アロー（矢）関数”と呼ばれているよ

書き方（基本）
① ふつうの関数
js
Copy
Edit
function add(a, b) {
    return a + b;
}
② アロー関数
js
Copy
Edit
const add = (a, b) => {
    return a + b;
};
✅ 同じ意味だけど、短くてすっきり書けるのが特徴！

⏱ さらに短くすることもできる
引数が1つだけの場合 → () を省略できる

処理が1行だけで、returnするだけの場合 → { } と return を省略できる

js
Copy
Edit
const sayHi = name => `Hello, ${name}!`;

this を自動で引き継ぐ
アロー関数には自分の this がない。
外側の this をそのまま使うよ。

js
Copy
Edit
function Timer() {
    this.count = 0;
    setInterval(() => {
        this.count++;   // ← ここでthisが使える！（外側のthis）
        console.log(this.count);
    }, 1000);
}
➡ this を使う場面では「アロー関数」が便利なことも多い！