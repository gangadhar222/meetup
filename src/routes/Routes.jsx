import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from "./home/Home";
import Registration from './registration/RegistrationForm';
import SearchUser from './search/SearchUser';
import UserDetails from './user/UserDetails';
import Reports from './reports/Reports';

export default function Routes() {
    return (
            <Switch>
                <Route exact path="/" render={()=><Home />} />
                <Route exact path="/registration" render={()=><Registration />} />
                <Route exact path="/search" render={(props) =><SearchUser {...props}/>} />
                <Route exact path="/search/:id" render={(props) =><UserDetails {...props}/>}></Route>
                <Route exact path="/reports" render={()=><Reports />} />
            </Switch>
    )
}
