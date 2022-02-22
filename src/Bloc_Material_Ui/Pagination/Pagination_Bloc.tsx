import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination(props:any) {

    const handleChange = (event:any, value:any) => {
        props.paginationUsers(value)
    };

    return (
        <Stack spacing={2}>
            <Pagination count={Math.ceil(props.totalCount/10)} onChange={handleChange} page={props.page}/>
            {/*<Pagination count={10} color="primary" />*/}
            {/*<Pagination count={10} color="secondary" />*/}
            {/*<Pagination count={10} disabled />*/}
        </Stack>
    );
}
