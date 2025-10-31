import { useState, useEffect } from "react";

function Display(props) {
    const [text, setText] = useState('Loading...');
    // const { count } = props;


    useEffect(() => {
        setTimeout(() => {
            setText(`Count: ${props.count}`)
        }, 2000);
    }, [])

    return (
        <div>
            {text}
        </div>
    )
}

export default Display;