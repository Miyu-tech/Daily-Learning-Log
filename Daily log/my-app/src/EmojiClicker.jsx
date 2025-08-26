import { v4 as uuid } from 'uuid';
import { useState } from "react";

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: '😢' }]);
    const addEmoji = () => {
        setEmojis((previousEmojis) => [
            ...previousEmojis,
            { id: uuid(), emoji: '😊' }
        ]);
    };

    const deleteEmoji = (id) => {
        setEmojis((previousEmojis) => {
            return previousEmojis.filter(e => e.id !== id);
        });
    };

    const makeEverythingHeart = () => {
        setEmojis((previousEmojis) => {
            return previousEmojis.map(e => {
                return { ...e, emoji: '💛' }
            });
        });
    };

    return (
        <div>
            {emojis.map((e) => (
                <span key={e.id} style={{ fontSize: '4rem' }} onClick={() => deleteEmoji(e.id)}
                >{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>絵文字を追加</button>
            <button onClick={makeEverythingHeart}>すべてをハートにする</button>
        </div>
    );
}