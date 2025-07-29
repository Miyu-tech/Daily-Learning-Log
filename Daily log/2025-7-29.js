.hidden { display: none; } の意味
    .hidden という名前のクラスをつけた要素を、見えなくします

display: none; は「その場所にないよ」と言って、ページから完全に消す。

-----------------------------

    なぜ()ではなく[]を使うの？
js
Copy
Edit
const stickers = [
    "https://emoji.slack-edge.com/T02T9KCE5/nya/6e601228cfa7f116.png",
    "https://emoji.slack-edge.com/T02T9KCE5/milk/3a3ee7c6bb998f25.png",
    "https://emoji.slack-edge.com/T02T9KCE5/pikachu/52f55a093a3fa63e.png"
];
ポイント：
[]（角かっこ）は「配列」を作るための記号です。
→ いくつかのものを順番に並べた「リスト」を表す。

()（丸かっこ）は、関数の「呼び出し」や「計算の順番」を示すもの。

-----------------------------

return now.toLocaleDateString("ja-JP", { ... }); とは
「今の時間（now）」を日本のカレンダーの形（2025 /07 / 28みたいな）に変えて返す、という意味」

"ja-JP" は「日本の書き方で見せてください！」という意味。