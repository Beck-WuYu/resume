
import {createApp} from './core'
export const flowMiddware = ({ getState, dispatch }) => next => action => {
       const app = createApp();
       const flowActions = Object.keys(app.flows);
       if(flowActions.indexOf(action.type) != -1){
            if(typeof app.flows[action.type] == 'function'){
                app.flows[action.type](action, getState(), dispatch);
            }
       }else{
           next(action)
       }
}