import TextField from '@mui/material/TextField'
import { useState } from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box'

export default function FormDemo() {
    const [name, setName] = useState('');
    const [volume, setVolume] = useState(50);

    const updateName = (evt) => {
        setName(evt.target.value);
    };
    const changeVolume = (evt, newValue) => {
        setVolume(newValue);
    }

    return (
        <Box sx={{
            border: '5px solid grey',
            p: 2,
            width: 300,
            height: 300,
            margin: '0 auto',
            mt: 2,
        }}
        >

            <h1>氏名：{name}</h1>
            <TextField
                id="outlined-basic"
                label="氏名"
                variant="outlined"
                placeholder='山田太郎'
                value={name}
                onChange={updateName}
            />
            <h1>音量：{volume}</h1>
            <Slider aria-label="Volume" value={volume} onChange={changeVolume} />
        </Box>
    );
}