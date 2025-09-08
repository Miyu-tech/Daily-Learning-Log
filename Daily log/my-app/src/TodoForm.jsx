import ListItem from "@mui/material/ListItem";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import { Create } from '@mui/icons-material';

export default function TodoForm() {
    const [text, setText] = useState('');

    const handleChange = (evt) => {
        setText(evt.target.value);
    };

    return (
        <ListItem>
            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={text}
                onChange={handleChange}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label='create todo'
                                    edge="end">
                                    <create />
                                </IconButton>
                            </InputAdornment>
                        )

                    },
                }}
            />
        </ListItem >
    )
};