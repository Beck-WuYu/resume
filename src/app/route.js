import React from 'react';
import { Router, Route, Link, BrowserRouter, Switch} from 'react-router-dom'
import Self from '../pages/self'
import Project from '../pages/project'
import Main from '../pages'
export default function (){
    return <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} /> 
            <Route path="/project" component={Main} />
        </Switch>
    </BrowserRouter>
}