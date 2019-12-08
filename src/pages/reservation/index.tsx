/* eslint-disable no-unused-vars */
import * as React from 'react';
import CalendarTemplate from '../../templates/calendarTemplate';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import TabContainer from '../../templates/tabContainer';
import { useStyles } from './styles';
import ListTemplate from '../../templates/listTemplate';

interface IReservationProps{
    open: boolean;
}

const Reservation = (props: IReservationProps) => {
    const { open } = props;
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const a11yProps = (index: any) => {
        return {
            id: `nav-tab-${index}`,
            'aria-controls': `nav-tabpanel-${index}`,
        };
    };
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return(
        <React.Fragment>
            <AppBar className={open ? classes.openAppBar : classes.closeAppBar}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Calendar" {...a11yProps(0)} disableRipple/>
                    <Tab label="List" {...a11yProps(1)} disableRipple/>
                </Tabs>
            </AppBar>
            <TabContainer value={value} index={0}>
                <CalendarTemplate />
            </TabContainer>
            <TabContainer value={value} index={1}>
                <ListTemplate />
            </TabContainer>
        </React.Fragment>
    );
};

export default Reservation;