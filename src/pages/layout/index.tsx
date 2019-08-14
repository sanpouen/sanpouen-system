/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useStyles } from './index-css';

const Layout:React.FC = () => {
    const classes = useStyles();
    return(
        <div className={classes.wallpaper}></div>
    );
};

export default Layout;