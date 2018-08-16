

import axios from "axios";
import {  GET_SINGLE_TONE_URL , SINGLE_TONE_AUTH} from "./zainUrls";
import {tonesModel} from "../modles";
import {TONE_CHANGED} from "./types";
import _ from 'lodash';
export const getSingleTone = (toneId='',success,error) => {

    return (dispatch, getState) => {
        axios.get(GET_SINGLE_TONE_URL(toneId,
            getState().auth.userNumber),{
            headers:{
                Accept:'application/json'
            },
            auth:{...SINGLE_TONE_AUTH}
        }).then(response => {
            console.log(response);
            dispatch({type:TONE_CHANGED , payload:[tonesModel(response.data)]});
            success && success();
            }).catch(e => {
              console.log(e.response);
              error && error();
        })
    }
};