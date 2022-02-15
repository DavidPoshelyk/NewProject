import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ValidationTextFields({input, meta, ...props}:any) {
    const {touched,error,warning} = meta
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    label={props.nameInput}
                    {...input}
                    {...props}
                    sx={{minWidth:'280px'}}
                    error={touched}
                    id="outlined-error-helper-text"
                />
            </div>

        </Box>
    );
}
