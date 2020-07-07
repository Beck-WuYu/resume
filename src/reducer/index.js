import project from "./project";
import resume from './resume'

export const getReducers = () => {
    return {
        [project.namespace]: project.reducer,
        [resume.namespace]: resume.reducer
    }
}