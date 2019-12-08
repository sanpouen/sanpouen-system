/* eslint-disable no-unused-vars */
import * as React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, ListItemIcon, Collapse, List, Typography, TextField } from '@material-ui/core';
import { DEFAULT_ICON } from '../../const/share';
import { useStyles } from './styles';
import EditIcon from '@material-ui/icons/Edit';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

interface State {
    remarks: string;
}

const ReservationList = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [isEditing, setIsEditing] = React.useState(false);
    const [values, setValues] = React.useState<State>({
        remarks: 'ここは備考です。'
    });

    const handleClick = () => {
        if(isEditing === false){
            setOpen(!open);
        }
    };

    const editStart = (e: any) => {
        e.stopPropagation();
        if(open){
            setIsEditing(!isEditing);
        } else {
            setIsEditing(true);
            setOpen(!open);
        }
    };

    const remarksChange = (name: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [name]: event.target.value });
    };

    return(
        <>
            <ListItem className={classes.list} onClick={handleClick} button disableRipple>
                <ListItemText primary={'2019/10/05'} />
                <ListItemText primary={'17:30'} />
                <ListItemText primary={'20名'} />
                <ListItemText primary={'真寿田' + '様'} />
                <ListItemText primary={'048-****-****'} />
                <ListItemText primary={'有り'} />
                <ListItemAvatar>
                    <Avatar
                        src={DEFAULT_ICON}
                    />
                </ListItemAvatar>
                <ListItemText primary={'真寿田'} className={classes.name}/>
                <ListItemIcon onClick={editStart}>
                    <EditIcon className={classes.editIcon}/>
                </ListItemIcon>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit className={classes.collapse}>
                <Typography className={classes.remarks}>{'備考'}</Typography>
                <List component="div" disablePadding>
                    {isEditing ? (
                        <TextField
                            id="remarksText"
                            margin="dense"
                            variant="outlined"
                            value={values.remarks}
                            onChange={remarksChange('remarks')}
                            className={classes.remarksInputText}
                        />
                    ) : (
                        <ListItemText primary={'ここは備考です。'} className={classes.remarksText}/>
                    )}
                </List>
            </Collapse>
        </>
    );

};

export default ReservationList;