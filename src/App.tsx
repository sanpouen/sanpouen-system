/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Login from '../src/pages/login/index';
import Management from '../src/pages/management/index';
import history from '../src/pages/history';


const App:React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Router history={history}>
                <Switch>
                    <Route exact={true} path='/login' component={Login}/>
                    <Route exact={true} path='/management' component={Management}/>
                </Switch>
            </Router>
        </React.Fragment>
    );
};

export default App;
