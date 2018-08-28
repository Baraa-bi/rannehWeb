

import axios from 'axios';
import {ZAIN_TOKEN_URL, RANNEH_AUTH_URL, TONE_LIST_AUTH} from './zainUrls';
import {API_TOKEN_CHANGED, ZAIN_LINE_TYPE } from './types';


export const generateUserToken = (success,error) => {

    return (dispatch, getState) => {


        axios.get(ZAIN_TOKEN_URL,{
            headers:{
                Accept:'application/json'
            }
        })
            .then(response => {
                console.log(response);
                dispatch({type:API_TOKEN_CHANGED,payload:response.data.Data});
                dispatch({type:ZAIN_LINE_TYPE,payload:response.data.Data});
                success(response);
            }).catch(e => {
                error && error();
                console.log(e.response);
            })
    }
};



export const generateRannehToken  = (success,error) => {

    return (dispatch, getState) => {


        axios.get(RANNEH_AUTH_URL,{
            headers:{
                Accept:'application/json'
            }
        })
            .then(response => {
                console.log(response);
                dispatch({type:API_TOKEN_CHANGED,payload:response.data.Data});
                dispatch({type:ZAIN_LINE_TYPE,payload:response.data.Data});
                success(response);
            }).catch(e => {
            error && error();
            console.log(e.response);
        })
    }
};




export const userTokenChanged = (token)=>{
    return {
        type:API_TOKEN_CHANGED,
        payload:token
    };           
}