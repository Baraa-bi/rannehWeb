

import axios from 'axios';
import {ZAIN_RTF_REQUEST} from './zainUrls';


export const getZainRtf = (callback) => {

    return (dispatch, getState) => {


        axios.post(ZAIN_RTF_REQUEST,{

            TokenID:getState().auth.apiToken,

            LanguageID:getState().app.language=='ar'?1:2,

            SurveyID:124559

        }).then(response => {

             console.log(response);

             window.location.href = response.data.Msg;

             callback &&  callback(response);

        }).catch(error => {

            console.log(error);

        })
    }
}



