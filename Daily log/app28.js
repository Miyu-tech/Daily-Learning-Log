const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTermInput = form.elements.query;
    const config = {
        params: {
            q: searchTermInput.value
        }
    }
    const res = await axios.get('https://api.tvmaze.com/search/shows', config);
    makeImages(res.data);
    searchTermInput.value = '';
});

const makeImages = (results) => {
    for (let result of results) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}

// ##configの使い方
// プログラムに“どう動けばいいか”を細かく教える設定メモのことです。

// たとえば、APIにアクセスするときに：

// 認証情報（パスワードみたいなもの）

// もらうデータの形式

// 時間切れ（タイムアウト）の秒数

// …などを指定したいときがあります。

// それをまとめて渡す箱が config です！
// 	axios に渡す“細かい指示書”（設定）を入れる変数
//     params	URLの後ろにつく 「? ～」 のクエリ文字列を作りたいよ、という指示
// q: ...q = という名前で送るクエリパラメータ → TVmaze APIが求めている形式