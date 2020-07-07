 const presetReducer = {
    //普通更新
    change: (state, { payload }) => {
        return { ...state, ...payload };
    },
    //替换
    replace: (state, { payload }) => {
        return payload
    },
    //重置
    reset: (state, action, initState) => {
        return { ...initState };
    }
}
/*
    initState: 初始状态值
    namespace：命名空间
    enhanceReducer： reduecr增强 eg: {add: (state, action, initState)=> {}}
 */
export const createReducer = (initState, namespace, enhanceReducer = {}) => {
    return (state = { ...initState }, action) => {
        if (!action) {
            console.error("action not set null");
            return state
        }
        if (action.type.indexOf("/") == -1) {
            console.error("action type must be set namespace/hanlde");
            return state
        }
        let actionName = action.type.split("/")[0];
        let hanlde = action.type.split("/")[1];
        if (actionName == namespace) {
            let reducers = {...presetReducer, ...enhanceReducer}
            if( typeof reducers[hanlde] == "function"){
                return reducers[hanlde](state, action, initState);
            }
        }
        return state;
    }
}
