

import axios from 'axios';
import { RANNEH_SUBSCRIBE_TONE_URL,SINGLE_TONE_AUTH  } from './zainUrls';
import { zainFeaturesModel } from '../modles';
import _ from 'lodash';
import {SUBSCRIBING_TONE} from './types';

export const subscribeTone = (tone, callback) => {

    return (dispatch, getState) => {

        const mobile_number=getState().auth.userNumber;
        const { planId,toneId } = tone;
        dispatch({ type: SUBSCRIBING_TONE, payload: true });

        axios.post(RANNEH_SUBSCRIBE_TONE_URL, {
            mobile_number,
            subscription_plan_id:planId,
            tone_id:toneId,
            contacts:[],
            schedule:{
                from:'00:00:00',
                to:'00:00:00'
            },
            auto_renewal:1
        },{
            auth:SINGLE_TONE_AUTH
        }).then(response => {
            console.log(response);
            dispatch({ type: SUBSCRIBING_TONE, payload: false });
            callback && callback(response);
    }).catch(error => {
            dispatch({ type: SUBSCRIBING_TONE, payload: false });
            console.log(error.response);
    })
    }
}



