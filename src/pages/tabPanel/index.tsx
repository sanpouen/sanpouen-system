/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import { CalendarToday, Storage, PersonAdd } from '@material-ui/icons';
import { useStyles } from './styles';
import Calendar from '../calendar';
import TabContainer from '../../templates/tabContainer';

const TabPanel: React.FunctionComponent = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        console.log(newValue);
        setValue(newValue);
    }

    const a11yProps = (index: any) => {
        return {
            id: `scrollable-force-tab-${index}`,
            'aria-controls': `scrollable-force-tabpanel-${index}`,
        };
    }

    return(
        <React.Fragment>
            <AppBar  square className={classes.paper}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="secondary"
                    aria-label="icon label tabs example"
                >
                    <Tab icon={<CalendarToday />} label="Calendar" {...a11yProps(0)} />
                    <Tab icon={<Storage />} label="Shift" />
                    <Tab icon={<PersonAdd />} label="Invite" />
                </Tabs>
            </AppBar >
            <TabContainer value={value} index={0}>
                <Calendar />
            </TabContainer>
        </React.Fragment>
    );
};

export default TabPanel;