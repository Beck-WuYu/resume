import React from 'react';
import { Router, Route, Link, BrowserRouter, Switch} from 'react-router-dom'
import Self from '../pages/self'
import Project from '../pages/project'
export default function (){
    return <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Self} /> 
            <Route path="/project" component={Project} />
        </Switch>
    </BrowserRouter>
}