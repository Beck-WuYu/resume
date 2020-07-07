
import {createReducer} from './model'

const namespace = "app";
const state = {
    curMenu: "self"
}
export default {
    namespace,
    state,
    reducer: createReducer(state, namespace)
}
