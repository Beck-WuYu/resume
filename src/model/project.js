const namespace = "project";
const state = {
    name: "project",
    age: 22
}
const flow = {
    setName: async(action, state, dispatch) => {
        console.log("flow setName ", state);

    },
    setAge: async(action, state, dispatch) => {
        console.log("flow state ", state);

    }
}
export default {
    namespace,
    state,
    flow,
}





