
import {createReducer} from './model'

const namespace = "project";
const state = {
    name: "project",
    age: 22
}
export default {
    namespace,
    state,
    reducer: createReducer(state, namespace)
}




