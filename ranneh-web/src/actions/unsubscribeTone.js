

import axios from 'axios';
import { RANNEH_SUBSCRIBE_TONE_URL,SINGLE_TONE_AUTH ,  } from './zainUrls';
import { zainFeaturesModel } from '../modles';
import _ from 'lodash';
import {UNSUBSCRIBING_TONE ,TONE_CHANGED} from './types';

import {tonesModel} from "../modles";
export const unSubscribeTone = (plan_id, callback) => {

    return (dispatch, getState) => {

        const msisdn=getState().auth.userNumber;
        dispatch({ type: UNSUBSCRIBING_TONE, payload: true });

        axios.delete(RANNEH_SUBSCRIBE_TONE_URL, {
            msisdn,
            plan_id,
        },{
            auth:SINGLE_TONE_AUTH
        }).then(response => {
             console.log(response);
             dispatch({type:TONE_CHANGED , payload:[tonesModel(response.data)]});
             dispatch({ type: UNSUBSCRIBING_TONE, payload: false });
             callback && callback(response);
    }).catch(error => {
            dispatch({ type: UNSUBSCRIBING_TONE, payload: false });
        console.log(error.response);
    })
    }
}



