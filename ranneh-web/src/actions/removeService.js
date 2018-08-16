

import axios from 'axios';
import { ZAIN_REMOVE_SERVICE } from './zainUrls';
import { zainFeaturesModel } from '../modles';
import _ from 'lodash';
import { ZAIN_FEATURES_CHANGED ,LOADING_REMOVING_SERVICE } from './types';
export const removeService = (service,nextbillRun,callback) => {

    return (dispatch, getState) => {

        const {offerId}=service;

        dispatch({type:LOADING_REMOVING_SERVICE,payload:true});

        axios.post(ZAIN_REMOVE_SERVICE,{
            TokenID:getState().auth.apiToken,
            LanguageID:getState().app.language=='ar'?1:2,
            FeatureCode:offerId,
            effectiveDate:nextbillRun
        }).then(response => { 
          //  console.log(response);
            dispatch({type:LOADING_REMOVING_SERVICE,payload:false});

            callback &&  callback(response);
  
        }).catch(error => {
            dispatch({type:LOADING_REMOVING_SERVICE,payload:false});

            console.log(error);
        })
    }
}



