import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from "./home/Home";
import Registration from './registration/RegistrationForm'

export default function Routes() {
    return (
            <Switch>
                <Route exact path="/" render={()=><Home />} />
                <Route exact path="/registration" render={()=><Registration />} />
            </Switch>
    )
}
