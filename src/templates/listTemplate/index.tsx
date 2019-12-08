/* eslint-disable no-unused-vars */
import * as React from 'react';
import { List, makeStyles, ListItem, ListItemText } from '@material-ui/core';
import ReservationList from '../../organisms/reservationList';

const useStyles = makeStyles({
    listContainer: {
        position: 'absolute',
        top: '200px',
        width: '92%'
    },
    columList: {
        paddingTop: '0px',
        paddingBottom: '0px'
    },
    columItem: {
        paddingBottom: '0px',
        paddingTop: '0px',
        color: '#FFF8F0'
    }
});

const ListTemplate = () => {
    const classes = useStyles();
    const list = [1, 2, 3, 4];
    const createList = () => {
        const array: JSX.Element[] = [];
        list.forEach((a: number)=>{
            array.push(
                <ReservationList key={a}/>
            );
        });
        return array;
    };
    return(
        <div className={classes.listContainer}>
            <List className={classes.columList}>
                <ListItem className={classes.columItem}>
                    <ListItemText primary={'日付'} />
                    <ListItemText primary={'時間'} />
                    <ListItemText primary={'人数'} />
                    <ListItemText primary={'名前'} />
                    <ListItemText primary={'電話番号'} />
                    <ListItemText primary={'備考'} />
                    <ListItemText primary={'受付者'} />
                </ListItem>
            </List>
            <List>
                {createList()}
            </List>
        </div>
    );
};

export default ListTemplate;