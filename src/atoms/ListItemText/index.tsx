/* eslint-disable no-unused-vars */
import * as React from 'react';
import ListItemText from '@material-ui/core/ListItemText';

interface IMaterialListItemTextProps {
    text: string;
}

const MaterialListItemText = (props: IMaterialListItemTextProps) => {
    const { text } = props;
    return(
        <ListItemText primary={text}/>
    );
};

export default MaterialListItemText;