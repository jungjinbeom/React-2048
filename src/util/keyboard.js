import hotkeys from "hotkeys-js";

const observerMap = {}
export const addKeyCallback=(key,callback)=>{
    if(!observerMap[key]) {
        observerMap[key] = [];
        hotkeys(key, () =>executeCallbacks(key))
    }
    observerMap[key].push(callback)
}
export const removeKeyCallback=(key,callback)=>{
    observerMap[key] =observerMap[key].filter(item=>item !== callback)
}
const executeCallbacks=(key)=>{
    for(const ob of observerMap[key]){
        ob()
    }
}