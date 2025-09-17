export default function ListPicker({ values }) {
    const randomIdx = Math.floor(Math.random() * values.length);
    const randomElement = values[randomIdx];
    return (
        <div>
            <p>値の一覧:{values}</p>
            <p>選択された要素は:{randomElement}</p>
        </div>
    );
}
