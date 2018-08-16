import { BUNDLE_REMOVED, BUNDLE_PURCHASED,SERVICE_ID_CHANGED } from "./types";




export const bundlePurchase = (bundle) =>{
    return{
        type:BUNDLE_PURCHASED,
        payload:bundle
    }
}


export const bundleRemove = (bundle)=>{
    return{
        type:BUNDLE_REMOVED,
        payload:bundle
    }
}


export const serviceIdChanged = (serviceId) =>{
    return {
        type:SERVICE_ID_CHANGED,
        payload:serviceId
    }
}