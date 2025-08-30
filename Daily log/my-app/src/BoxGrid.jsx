import Box from './Box';
import { useState } from 'react';

function BoxGrid() {
    const [boxes, setBoxes] = useState([
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
    ]);

    const toggleBox = (idx) => {
        return setBoxes((prevBoxes) => {
            prevBoxes.map((boxIsActive, i) => {
                if (i === idx) {
                    return !boxIsActive;
                } else {
                    return boxIsActive;
                }
            });
        });
    };


    const reset = () => {
        setBoxes([
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
        ])
    }

    return (
        <div className='BoxGrid'>
            {boxes.map((b, idx) => (
                <Box key={idx} isActive={b} toggle={() => toggleBox(idx)} />
            ))}
            <button onClick={reset} >Reset</button>
        </div>
    );
}

export default BoxGrid;