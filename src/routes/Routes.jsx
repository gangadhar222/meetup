import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from "./home/Home";
import Registration from './registration/RegistrationForm';
import SearchUser from './search/SearchUser';

export default function Routes() {
    return (
            <Switch>
                <Route exact path="/" render={()=><Home />} />
                <Route exact path="/registration" render={()=><Registration />} />
                <Route exact path="/search" render={()=><SearchUser />} />
            </Switch>
    )
}
