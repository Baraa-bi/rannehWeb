import { APP_LANGUAGE_CHANGED } from "./types";
import { PURGE } from "redux-persist";


// common app actions


export const appLanguageChanged = (language)=>{
    return {
        type:APP_LANGUAGE_CHANGED,
        payload:language
    }
}



export const isValidResponse = (response)=>{
    if(response.data.Response === -1){
        alert(response.data.Msg);
        return false;
    }
    return true;
}


export const clearAllData = ()=>{
    return(dispath)=>{
        dispath({
            type:PURGE,
            key:'root',
            result:()=>console.log('cleared')
        })
    }
}

export const handleJson = (value, defaultValue) => {
    try {
        return value();
    } catch (err) {
        return defaultValue;
    }
};