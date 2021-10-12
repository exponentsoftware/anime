import React from 'react';
import {Route,Switch} from 'react-router-dom';
// import Cards from '../Cards';
import Cards from './../Cards'
import Login from '../User/login/Login';
import Register from './../User/Register/Register';
import Data from './../details/Data';

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Cards}/>
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login}/>
            <Route path={"/:id"} component={Data}/>
        </Switch>
    )
}

export default Routes
