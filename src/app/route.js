import React from 'react';
import { Router, Route, Link, BrowserRouter, Switch} from 'react-router-dom'
import Self from '../pages/self'
import Loadable from 'react-loadable'
//import Project from '../pages/project'
//import Main from '../pages'

const User = Loadable({loader: () => import(/* webpackChunkName: "user" */'../pages'), loading: () => <div></div>})
//const Project = Loadable({loader: () => import(/* webpackChunkName: "project" */'../pages/project'), loading: () => <div>beckwuproject</div>})
export default function (){
    return <BrowserRouter>
        <Switch>
            <Route path="/" 
                    exact 
                    component={User} /> 
            <Route path="/project" component={User} />
        </Switch>
    </BrowserRouter>
}