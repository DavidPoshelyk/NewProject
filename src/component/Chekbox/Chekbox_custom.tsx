import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels(props:any) {
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox {...props}  />} {...props} />
            {/*<FormControlLabel disabled control={<Checkbox />} label="Disabled" />*/}
        </FormGroup>
    );
}