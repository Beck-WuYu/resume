import React from 'react';
import ReactDom from 'react-dom';
import {getReducers} from '../reducer'
import {Provider} from 'react-redux'
import { DatePicker } from 'antd';
import { createStore, combineReducers } from 'redux'
import { browserHistory } from 'react-router-dom'
import Route from './route'
import {flow} from '../reducer/app'

const rootReducer = combineReducers(getReducers());



const store = createStore(rootReducer, undefined);

console.log(store.getState());

const APP = () => (<Provider store = {store}>
    <Route/>
</Provider>)
 
 export default APP;

