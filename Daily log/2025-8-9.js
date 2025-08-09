似ているもの集

## getElementById, querySelector, querySelectorAll

書き方の違い

// getElementById → 名前だけ書く
document.getElementById('title');

// querySelector → CSSセレクタを書くので # が必要
document.querySelector('#title');

速度の違い
getElementById は IDだけを探す専用 なので、ほんの少し速い。

querySelector は CSSルール全般を理解して探すので、内部的には少し遅い（けど人間の感覚ではほぼ同じ速さ）。

柔軟性の違い
getElementById は IDしか探せない。

querySelector は タグ名・クラス名・ID・組み合わせ なんでも探せる。

動きの違い
メソッド名	取れる数	返す形
querySelector	見つかった最初の1個だけ	要素そのもの（HTMLElement）
querySelectorAll	見つかった全部	NodeList（配列みたいなリスト）

----------------------------------

    textContent, innerText, innerHTML の違い

1. textContent（テキストコンテント）
その要素の中にある「すべての文字」をそのまま取り出す・書き換える。

スペースや改行も含めて、画面に見えるかどうかに関係なく文字を扱います。

HTMLタグは文字として扱うのではなく、「タグは無視して中のテキストだけ」を取得・変更します。

例:

html

    < div id = "example" > <p>Hello <span>World</span></p></div >
        js

document.getElementById('example').textContent; // "Hello World"
2. innerText（インナーテキスト）
その要素の「画面に見えている文字」だけを取り出す・書き換える。

CSSで非表示になっているテキストは無視されます。

画面の見た目に近いテキストを扱う。

例:

html

    < div id = "example" >
        Hello < span style = "display:none;" > Invisible</span > World
</div >
    js

document.getElementById('example').innerText; // "Hello  World"（Invisibleは含まれない）
3. innerHTML（インナーエイチティーエムエル）
その要素の中身の「HTMLコード全体」を取り出す・書き換える。

タグも含めてそのままの形で操作できます。

例:

html

    < div id = "example" > <p>Hello <span>World</span></p></div >
        js

document.getElementById('example').innerHTML; // "<p>Hello <span>World</span></p>

-----------------------------------------

return, append

return（リターン）
「関数が何かの結果を外に渡すために使う」もの。

関数の中で「この値を呼んだ場所に返します」という意味です。

例えると、「お店で買ったものを渡す」みたいな感じ。

例：
js

function add(a, b) {
    return a + b;  // 足した結果を返す
}

const result = add(3, 4);  // 7 が返ってきて result に入る

append（アペンド）
「HTMLの要素の中に、新しいものをくっつけて追加する」ために使う。

例えると、「箱の中に新しいおもちゃを入れる」感じ。

画面に何かを新しく表示したい時に使います。

例：
js

const div = document.createElement('div');
div.textContent = 'こんにちは';

const body = document.querySelector('body');
body.append(div);  // 画面のbodyの中にdivを追加する


--------------------------------------------

    append, appendChild

1. append()
何ができる？
複数のノード（要素）やテキストを一度に追加できる。
文字列や要素、複数を同時に入れられます。

戻り値
なし（何も返さない）

使い方例

js

const div = document.createElement('div');
div.append('こんにちは', document.createElement('span'));
2. appendChild()
何ができる？
1つのノード（要素）だけを追加できる。
文字列は入れられない（ノードじゃないから）

戻り値
追加したノード（要素）を返す

使い方例

js

const div = document.createElement('div');
const span = document.createElement('span');
div.appendChild(span);

1. append()（アペンド）
いくつでもいっぺんに「何かを」くっつけられます。

くっつけられるのは、文字でも箱（要素）でも大丈夫！

たとえば、「こんにちは」って文字と、小さな箱（<span>）を同時にくっつけられます。

    2. appendChild()（アペンドチャイルド）
    １つだけ「箱（要素）」をくっつけられます。

    文字はくっつけられません。

    たとえば、小さな箱（<span>）をひとつだけくっつけるときに使います。