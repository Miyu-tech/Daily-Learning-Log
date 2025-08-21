propsとは？

props = component に渡すデータ
のことです。

React では「コンポーネント」という部品を組み合わせて画面を作りますが、その部品に 外から情報を渡す仕組み が props です。

🍎 例で説明

例えば「挨拶するコンポーネント」を作りたいとします。

function Greeting(props) {
    return <h1>こんにちは、{props.name}さん！</h1>;
}


ここで props.name が 親コンポーネントから渡されるデータです。

使う側（親コンポーネント）
function App() {
    return (
        <div>
            <Greeting name="太郎" />
            <Greeting name="花子" />
        </div>
    );
}


👉 この場合

    < Greeting name = "太郎" /> → props.name = "太郎"

        < Greeting name = "花子" /> → props.name = "花子"

結果：

こんにちは、太郎さん！
こんにちは、花子さん！

🗝 propsのポイント

読み取り専用（変更できない）
→ 子コンポーネントの中で直接書き換えはできません。

親 → 子へ一方通行
→ データは親から子に流れるイメージ。

引数として渡す
→ 関数の引数と同じようなイメージです。


