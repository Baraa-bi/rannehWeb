

import axios from "axios";
import {  GET_TONE_LIST_URL , TONE_LIST_AUTH} from "./zainUrls";
import {tonesModel} from "../modles";
import {TONE_CHANGED} from "./types";

import _ from 'lodash';
export const getToneList = () => {
    return (dispatch, getState) => {
        axios.get(GET_TONE_LIST_URL(getState().auth.userNumber),{
            headers:{Accept:'application/json'},
            auth:{...TONE_LIST_AUTH}
        }).then(response => {
                dispatch({type:TONE_CHANGED , payload:_.map(response.data.data,(tone)=>tonesModel(tone))});
            }).catch(e => {
              console.log(e.response);
        })
    }
};