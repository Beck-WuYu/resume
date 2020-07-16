import {createReducer} from '../lib/reducerhelper'

const namespace = "resume";
const state = {
    name: "beckwu"
}

export default {
    namespace,
    state,
    reducer: createReducer(state, namespace)
}