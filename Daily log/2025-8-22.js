今日学んだこと

return と改行の注意

return の後に改行すると React が何も返さなくなってしまう。

正しくは return (と同じ行に書く。

props（プロップス）とは？

親コンポーネントから子コンポーネントに渡す「データのプレゼント」。

<Greeter person="Toro" from="Tanaka" /> のように書いて渡す。

ダイス（numSizes の役割）

props を使ってサイコロの面の数を指定できる。

例えば numSizes = { 20} なら「20面サイコロ」。

配列とは？

複数のものを順番に入れておける箱。

例：["りんご", "バナナ", "みかん"]

ランダムに取り出す方法

Math.floor(Math.random() * values.length) → 配列の長さの中からランダムな番号を作る。

values[randomIdx] → その番号に入ってるものを取り出す。

条件分岐

「もし ○○ なら △△、そうでなければ ××」と動きを変える仕組み。

React では ? : を使って「色」や「スタイル」を変えられる。

map とリスト表示

配列の中身を 1つずつ取り出して < li > に変換できる。

items.map(i => <ShoppingListItem {...i} />) みたいに使う。

{...i }（スプレッド構文）

オブジェクトを「ひっくり返して中身を全部渡す」書き方。

<ShoppingListItem item={i.item} quantity={i.quantity} completed={i.completed} /> を省略して書ける。

なぜ key が必要？

React はリストの要素を更新するときに「どの要素が新しいか、どれが削除されたか」を見分ける必要があります。

key がないと React は正しく比較できず、無駄に全部描き直したり、バグが出たりします。

例：key なし
    < ul >
{
    items.map((i) => (
        <ShoppingListItem
            item={i.item}
            quantity={i.quantity}
            completed={i.completed}
        />
    ))
}
</ul >


⚠️ これだと React から「Warning: Each child in a list should have a unique 'key' prop.」と警告されます。

key あり（正しい書き方）
<ul>
    {items.map((i) => (
        <ShoppingListItem
            key={i.id}   // ← ここが大事！
            item={i.item}
            quantity={i.quantity}
            completed={i.completed}
        />
    ))}
</ul>

{...i } と組み合わせた書き方
    < ul >
{
    items.map((i) => (
        <ShoppingListItem key={i.id} {...i} />
    ))
}
</ul >


    ここでは i がオブジェクト（例：{ id: 1, item: "りんご", quantity: 3, completed: false }）なので

key = { i.id } は リストの識別用

{...i } は 中身を展開して props として渡す

という役割になります。
