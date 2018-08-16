

import axios from 'axios';
import { RANNEH_SUBSCRIBE_TONE_URL,SINGLE_TONE_AUTH  } from './zainUrls';
import { zainFeaturesModel } from '../modles';
import _ from 'lodash';
import {SUBSCRIBING_TONE ,TONE_CHANGED} from './types';

import {tonesModel} from "../modles";
export const subscribeTone = (tone, callback) => {

    return (dispatch, getState) => {

        const msisdn=getState().auth.userNumber;
        const { planId,toneId } = tone;
        dispatch({ type: SUBSCRIBING_TONE, payload: true });

        axios.post(RANNEH_SUBSCRIBE_TONE_URL, {
            msisdn,
            plan_id:planId
        },{
            auth:SINGLE_TONE_AUTH
        }).then(response => {
            console.log(response);
            dispatch({type:TONE_CHANGED , payload:[tonesModel(response.data)]}); 
            dispatch({ type: SUBSCRIBING_TONE, payload: false });
            callback && callback(response);
    }).catch(error => {
            dispatch({ type: SUBSCRIBING_TONE, payload: false });
            console.log(error.response);
    })
    }
}



