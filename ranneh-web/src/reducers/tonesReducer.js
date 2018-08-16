

import {TONE_CHANGED,SUBSCRIBING_TONE}  from '../actions/types';
import _ from 'lodash';

const INIT_STATE ={
    tone:{},
    subscribingTone:false
};

export default (state =  INIT_STATE,action)=>{
    switch(action.type){
        
        case TONE_CHANGED:
            return {...state,tone:action.payload};
            
        case SUBSCRIBING_TONE:
            return {...state,subscribingTone:action.payload};
            
        default:
            return state;
    }
}