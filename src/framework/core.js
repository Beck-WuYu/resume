import Application from './application'
window.appCore = null;
/*
    option: {models: 模具集合}
 */
export const createApp = (options) => {
    if(window.appCore){
        return window.appCore;
    }
    appCore = new Application(options);
    
    return appCore
}