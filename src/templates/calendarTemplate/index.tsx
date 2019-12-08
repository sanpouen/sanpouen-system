/* eslint-disable no-unused-vars */
import * as React from 'react';
import Calendar from '../../organisms/calendar';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    calendarContainer: {
        position: 'absolute',
        top: '200px'
    }
});

const CalendarTemplate = () => {
    const classes = useStyles();
    return(
        <div className={classes.calendarContainer}>
            <Calendar/>
        </div>
    );
};

export default CalendarTemplate;
