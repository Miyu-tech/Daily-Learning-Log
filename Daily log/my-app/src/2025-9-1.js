今日学んだこと

変数名の一貫性が大事

firstname と firstName は大文字小文字が違うだけでも別物。

React では一致していないとエラーになる。

イベントオブジェクト(evt) の役割

evt.target = イベントが起きた要素（例：input）

evt.target.value = その要素の入力内容

evt.target.name = その要素の name 属性

入力フォームと onChange

入力内容が変わるたびに onChange が呼ばれる。

そのたびに evt が渡されるので、どの欄が変わったか・何が入力されたかを取れる。

state 更新の考え方

setState（ここでは setFormData）は「新しい状態」を渡してあげる関数。

setFormData((currData) => { ... }) という書き方は「最新の state を確実に使う」ための方法。

currData[fieldName] = value は「特定のキーを更新しようとしている」コード。

React のルール

state は直接書き換えちゃダメ（オブジェクトをコピーして新しいものを返すのが基本）。

でも「今のコードは何を意図しているか」としては「入力欄の値を formData に入れたい」という意味。