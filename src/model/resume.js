
const namespace = "resume";
const state = {
    name: "吴宇"
}
const flow = {
    setResumeName: async(action, state, dispatch) => {
        let name = await new Promise((resolve, reject)=>{setTimeout(()=>{
            resolve(action.payload.name);
        }, 3000)})
        dispatch({
            type: "resume/change",
            payload: {
                name,
            }
        })
    }
}

export default {
    namespace,
    state,
    flow,
}