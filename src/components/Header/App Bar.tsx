import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import {NavLink} from 'react-router-dom';

export default function ButtonAppBar(props: any) {
    console.log(props)
    return (
        <Box sx={{flexGrow: 1, minWidth: "360px",}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <Avatar
                            src={props.data.myPhotos}
                            sx={{ width: 40, height: 40 }}
                        />

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>

                    </Typography>
                    {!props.data.isAuth ?
                        <Button color="inherit">
                            <NavLink to='/login'>Login</NavLink>
                        </Button>
                        :
                        <Button onClick={() => {
                            props.authLoginOutThunk()
                        }} color="inherit">
                            Login Out
                        </Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}
