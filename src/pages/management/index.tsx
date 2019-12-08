/* eslint-disable no-unused-vars */
import * as React from 'react';
import clsx from 'clsx';
import { AppBar, CssBaseline, Toolbar, Typography, Drawer, Divider, List } from '@material-ui/core';
import { useStyles } from './styles';
import Reservation from '../reservation';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { DRAWER_CALENDAR, DRAWER_INVITE, DRAWER_SHIFT } from '../../const/share';
import ListItems from '../../molecules/listItems';

const Management = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(1);
    const [open, setOpen] = React.useState(false);

    const handleChange = (type: number) => {
        setValue(type);
    };

    const handleDrawer = () => {
        if(open){
            setOpen(false);
        } else {
            setOpen(true);
        }
    };

    return(
        <React.Fragment>
            <CssBaseline />
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Mini variant drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={ handleDrawer }>
                        { open
                            ? <ChevronLeftIcon />
                            : <ChevronRightIcon />
                        }
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItems
                        text={'Reservation'}
                        type={DRAWER_CALENDAR}
                        onClick={handleChange}
                    />
                    <ListItems
                        text={'Shift'}
                        type={DRAWER_SHIFT}
                        onClick={handleChange}
                    />
                    <ListItems
                        text={'Invite'}
                        type={DRAWER_INVITE}
                        onClick={handleChange}
                    />
                </List>
            </Drawer>
            <div className={open ? classes.open : classes.close }>
                {value === DRAWER_CALENDAR && (
                    <Reservation open={open}/>
                )}
            </div>
        </React.Fragment>
    );
};

export default Management;