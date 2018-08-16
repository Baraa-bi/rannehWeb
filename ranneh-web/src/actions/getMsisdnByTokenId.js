import axios from "axios";
import {ZAIN_MSISDN_URL} from "./zainUrls";
import {USER_NUMBER_CHANGED} from "./types";


export const getMsisdnByTokenId = (success,error) => {

    return (dispatch, getState) => {


        axios.post(ZAIN_MSISDN_URL,{
            TokenID: getState().auth.apiToken
        },{headers:{Accept:'application/json'}})
            .then(response => {
                dispatch({type:USER_NUMBER_CHANGED , payload:response.data.MSISDN});
                console.log(response);
                success(response);
            }).catch(e => {
            console.log(e.response);
        })
    }
}