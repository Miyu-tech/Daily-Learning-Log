import './Box.css';
import { useState } from 'react';

function Box({ isActive, toggle }) {
    // const [isActive, setIsActive] = useState(false);
    // const toggleIsActive = () => setIsActive(!isActive);

    return (
        <div
            onClick={toggle}
            className='Box'
            style={{ backgroundColor: isActive ? 'red' : 'black' }}
        ></div>
    );
}

export default Box;