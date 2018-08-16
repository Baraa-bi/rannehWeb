

import {TONE_CHANGED}  from '../actions/types';
import _ from 'lodash';

const INIT_STATE ={
    tone:{}
};

export default (state =  INIT_STATE,action)=>{
    switch(action.type){
        case TONE_CHANGED:
            return {...state,tone:action.payload};
        default:
            return state;
    }
}