


export const SINGLE_TONE_AUTH = {
        username: 'ranneh', password: 'secret'
};

export const TONE_LIST_AUTH = {
        username: 'ranneh', password: 'secret'
};




//   zain urls


export const ZAIN_TOKEN_URL='http://apps2you.jo.zain.com:8090/HEInteractive/InteractiveAPIs.svc/GenerateInteractiveUserToken';


export const ZAIN_MSISDN_URL='https://apps2you.jo.zain.com/InteractiveAPI/InteractiveAPIs.svc/GetMSISDNByTokenID';


export const GET_SINGLE_TONE_URL = (toneId)=>`https://webservice-dev.ranneh.com/api/v1/ranneh/tones/${toneId}`;


export const GET_TONE_LIST_URL = `https://webservice-dev.ranneh.com/api/v1/ranneh/tones/`;


export const ZAIN_AVAILABLE_FEATURES='https://apps2you.jo.zain.com/InteractiveAPI/InteractiveAPIs.svc/GetAvailableInteractiveFeatures';


export const ZAIN_ADD_SERVICE = 'https://apps2you.jo.zain.com/InteractiveAPI/InteractiveAPIs.svc/SubscribeService';


export const ZAIN_ACTIVE_FEATURES = 'https://apps2you.jo.zain.com/InteractiveAPI/InteractiveAPIs.svc/GetActiveFeatures';


export const ZAIN_REMOVE_SERVICE ='https://apps2you.jo.zain.com/InteractiveAPI/InteractiveAPIs.svc/UnsubscribeService';


export const ZAIN_RTF_REQUEST ='https://apps2you.jo.zain.com/InteractiveAPI/InteractiveAPIs.svc/GetRTFRequest';

