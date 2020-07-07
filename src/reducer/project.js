
import {createReducer} from './model'

const namespace = "project";
const state = {
    name: "project",
    age: 22
}
const enhance = {
    add: (state, action, initState)=> {
        let newState = {...state};
        newState.age++;
        console.log(state.age);
        return newState;
    }
}
export default {
    namespace,
    state,
    reducer: createReducer(state, namespace, enhance)
}





