import { useState } from "react"
import './Example.css';

const Example = () => {
    const [isSelected, setIsSelected] = useState(false);

    const clickHandler = () => setIsSelected(prev => !prev);

    return (
        <>
            <button onClick={clickHandler} className={isSelected ? 'btn selected' : 'btn'}>ボタン</button>
            <div style={{textAlign: 'center'}}>{isSelected && "クリックされました。"}</div>
        </>
    )
};

export default Example;
