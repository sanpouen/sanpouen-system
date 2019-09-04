/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Login from '../src/pages/login/index';
import TabPanel from '../src/pages/tabPanel/index';
import history from '../src/pages/history';


const App:React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Router history={history}>
                <Switch>
                    <Route exact={true} path='/login' component={Login}/>
                    <Route exact={true} path='/tabPanel' component={TabPanel}/>
                </Switch>
            </Router>
        </React.Fragment>
    );
};

export default App;
