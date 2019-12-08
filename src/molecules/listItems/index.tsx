/* eslint-disable no-unused-vars */
import * as React from 'react';
import { ListItem, ListItemIcon, ListItemText, Tooltip } from '@material-ui/core';
import { CalendarToday, Storage, PersonAdd, Error } from '@material-ui/icons';
import { DRAWER_CALENDAR, DRAWER_SHIFT, DRAWER_INVITE } from '../../const/share';

interface IListItemsProps{
    text: string;
    type: number;
    onClick: (type: number) => void;
}

const ListItems = (props: IListItemsProps) => {
    const { text, type } = props;

    const selectIcons = () => {
        switch( type ){
        case DRAWER_CALENDAR:
            return <CalendarToday key={ DRAWER_CALENDAR }/>;
        case DRAWER_SHIFT:
            return <Storage key={ DRAWER_SHIFT }/>;
        case DRAWER_INVITE:
            return <PersonAdd key={ DRAWER_INVITE }/>;
        default:
            return <Error />;
        }
    };
    return(
        <ListItem
            button
            onClick={() => props.onClick(type)}
        >
            <Tooltip title={text}>
                <ListItemIcon>
                    {selectIcons()}
                </ListItemIcon>
            </Tooltip>
            <ListItemText primary={text} />
        </ListItem>
    );
};

export default ListItems;