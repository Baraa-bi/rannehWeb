
import {BUNDLE_PURCHASED,BUNDLE_REMOVED ,SERVICE_ID_CHANGED}  from '../actions/types';
import _ from 'lodash';

const INIT_STATE ={
    bundles:[],
    serviceId:-1
}

export default (state =  INIT_STATE,action)=>{
    switch(action.type){
        
        case BUNDLE_PURCHASED:
            return {...state,bundles:[...state.bundles,{id:state.bundles.length+1,...action.payload}]};

        case BUNDLE_REMOVED:
            return{...state,bundles:_.remove(state.bundles,bundle=>{
                return bundle.id !== action.payload.id;    
            })}    

        case  SERVICE_ID_CHANGED:
            return {...state, serviceId:action.payload}    

        default:
            return state;    
    }
}