import project from "./project";
import resume from './resume'
import app from './app'
export const getReducers = () => {
    return {
        [project.namespace]: project.reducer,
        [resume.namespace]: resume.reducer,
        [app.namespace]: app.reducer,
    }
}