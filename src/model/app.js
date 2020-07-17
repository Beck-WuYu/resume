const namespace = "app";
const state = {
    curMenu: "self"
}
const flow = {
    setName: async(action, state, dispatch) => {
        console.log("flow app model ", state);
    }
}
export default {
    namespace,
    state,
    flow,
}
