/* eslint-disable no-unused-vars */
import * as React from 'react';
import ReactCalendar from 'react-calendar';

const Calendar = () => {
    return (
        <ReactCalendar
            locale='ja-JP'
            value={new Date()}
        />
    );
};
export default Calendar;
