

import axios from 'axios';
import { ZAIN_ADD_SERVICE } from './zainUrls';
import { zainFeaturesModel } from '../modles';
import _ from 'lodash';
import { ZAIN_FEATURES_CHANGED, LOADING_ADDING_SERVICE } from './types';

export const addService = (service,nextBillRun=0, callback) => {

    return (dispatch, getState) => {

        const { offerId } = service;

        dispatch({ type: LOADING_ADDING_SERVICE, payload: true });

        axios.post(ZAIN_ADD_SERVICE, {
            TokenID: getState().auth.apiToken,
            LanguageID: getState().app.language=='ar'?1:2,
            effictiveDate:nextBillRun,
            FeatureCode:offerId
        }).then(response => {
           // console.log(response);

            dispatch({ type: LOADING_ADDING_SERVICE, payload: false });
 
            callback && callback(response);

        }).catch(error => {
            dispatch({ type: LOADING_ADDING_SERVICE, payload: false });
            console.log(error);
        })
    }
}



