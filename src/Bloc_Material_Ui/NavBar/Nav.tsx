import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import s from "./Nav.module.css";
import { NavLink } from 'react-router-dom';


const style = {
    borderRadius:'8px 8px 0 0',
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};


export default function ListDividers() {
    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button>
                <AccountCircleIcon/>
                <NavLink  className={s.navLink} activeClassName={s.navLink}  to='/profile'>
                <ListItemText sx={{marginLeft:'10%'}} primary="Profile" />
                </NavLink>
            </ListItem>
            <Divider />
            <ListItem button divider>
                <SupervisedUserCircleIcon/>
                <NavLink  className={s.navLink}activeClassName={s.navLink} to='/friends'>
                <ListItemText sx={{marginLeft:'10%'}} primary="Friends" />
                </NavLink>
            </ListItem>
            <ListItem button>
                <MessageIcon/>
                <NavLink className={s.navLink} activeClassName={s.navLink} to='/messages'>
                <ListItemText sx={{marginLeft:'10%'}} primary="Messages" />
                </NavLink>
            </ListItem>
            <Divider light />
            <ListItem button>
                <SettingsIcon/>
                <NavLink className={s.navLink} activeClassName={s.navLink} to='/settings'>
                <ListItemText sx={{marginLeft:'10%'}} primary="Settings" />
                </NavLink>
            </ListItem>
        </List>
    );
}
