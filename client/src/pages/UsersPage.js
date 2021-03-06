import React from 'react';
import {Switch, Route} from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Users from '../components/Users/Users';
import CreateUser from "../components/User/CreateUser";
import EditUser from "../components/User/EditUser";

const UsersPage = () => {
    return (
        <div style={{display: "flex"}}>
            <Sidebar user={true}/>
            <Switch>
                <Route path='/users/edit/id:id' exect component={EditUser} />
                <Route path='/users/create' exect component={CreateUser} />
                <Route path='/users' exect component={Users} />
            </Switch>
        </div>
    );
};

export default UsersPage;