import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import { createReducer } from './reducerhelper'
import { flowMiddware } from './flowmiddware'
import { applyMiddleware, combineReducers, createStore} from 'redux';
export default class Application {
    constructor(options) {
        const defaultOptions = { model: [] }
        this.options = { ...defaultOptions, ...options };
        this.reducer = this.createReducer();
        this.store = this.createStore();
        this.flows = this.getFlows();

    }
    getFlows = () => {
        let flows = {};
        const { models } = this.options;
        for(let model of models){
            if (typeof model.flow != "object") {
                console.warn("model flow must be a Object");
                continue;
            }
            for (let flowKey of Object.keys(model.flow)) {
                let key = `${model.namespace}/${flowKey}`;
                flows[key] = model.flow[flowKey];
            }
        }
        return flows;

    }
    createReducer = () => {
        const { models } = this.options;
        const rootReducer = models.reduce((reducers, model) => {
            reducers[model.namespace] = createReducer(model.state, model.namespace);
            return reducers;
        }, {});
        const reducer = combineReducers(rootReducer);
        return reducer;
    }
    createStore = () => {
        const store = createStore(this.reducer, applyMiddleware(flowMiddware));
        return store;
    }

    start = (element, container, callback) => {
        if (typeof container == 'string') {
            container = document.querySelector(container);
        }
        const Root = <Provider store={this.store}>{element}</Provider>
        ReactDom.render(Root, container, callback)
    }
}