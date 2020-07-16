
import {createReducer} from '../lib/reducerhelper'

const namespace = "app";
const state = {
    curMenu: "self"
}
const flow = {
    setName: async(state, dispatch) => {
        console.log("flow state " = state);

    }
}
export default {
    namespace,
    state,
    flow,
    reducer: createReducer(state, namespace)
}
