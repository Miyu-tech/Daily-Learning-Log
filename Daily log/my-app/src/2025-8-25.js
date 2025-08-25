1️⃣ state が「未定義」だと困るから

React のコンポーネントはレンダリングされるときに、まず 初期状態の値を使って画面を描画 します。
もし初期値を与えないとこうなります👇

const [count, setCount] = useState(); // 初期値なし → undefined
console.log(count); // undefined


undefined のままだと count + 1 などの処理がエラーになります。

2️⃣ UI を安定して表示するため

React は state に基づいて UI を作る ので、初期値がないと画面に表示できません。

例：

const [name, setName] = useState("");


初期値を "" にすると、入力欄が最初から「空文字」として扱われるので安全。

3️⃣ 正しいデータ型を保証するため

初期値を入れておくことで「この state は文字列？数値？オブジェクト？」と分かりやすくなる。

例：

const [scores, setScores] = useState({ p1: 0, p2: 0 });


最初からオブジェクトを入れておけば scores.p1 を安心して参照できる。

4️⃣ ユーザーに「初期画面」を見せるため

初期値があることで、ユーザーが何も操作していない状態でも UI が意味を持つ。

例：

const [color, setColor] = useState("purple");


クリック前の ColorBox は紫色で表示される。

初期値がなければ「最初は何色にすればいいの？」という状態になる。
