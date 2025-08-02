JavaScriptの Promise（プロミス） とは、
“非同期処理の結果を表すオブジェクト” です。

簡単に言うと、
「今は結果がわからないけど、そのうち成功（resolve）するか、失敗（reject）するかを教えてくれる“約束”」のようなものです。


Promiseが使われる場面
API通信、データ取得

タイマー処理

ファイル読み込み
→ 結果がすぐに分からない“時間のかかる処理”で使います！

const promise = new Promise((resolve, reject) => {
    // 非同期処理を書く

    if (成功したとき) {
        resolve(結果);
    } else {
        reject(エラー);
    }
});


promise
    .then((結果) => {
        console.log("成功:", 結果);
    })
    .catch((エラー) => {
        console.error("失敗:", エラー);
    });

なぜPromiseを使うの？
コールバック地獄（callback hell）を解消して、コードを読みやすくするため

async / await と組み合わせて、もっと直感的に書くための基礎になる