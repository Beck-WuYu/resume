import {createReducer} from './model'

const namespace = "resume";
const state = {
    name: "beckwu"
}

export default {
    namespace,
    state,
    reducer: createReducer(state, namespace)
}