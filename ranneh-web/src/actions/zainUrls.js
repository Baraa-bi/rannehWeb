


export const SINGLE_TONE_AUTH = {
        username: 'ranneh', password: 'secret'
};

export const TONE_LIST_AUTH = {
        username: 'ranneh', password: 'secret'
};


//   zain urls


export const ZAIN_TOKEN_URL='http://apps2you.jo.zain.com:8090/HEInteractive/InteractiveAPIs.svc/GenerateInteractiveUserToken';

export const ZAIN_MSISDN_URL='https://apps2you.jo.zain.com/InteractiveAPI/InteractiveAPIs.svc/GetMSISDNByTokenID';

//ranneh app urls

export const GET_SINGLE_TONE_URL = (toneId)=>`https://webservice-dev.ranneh.com/api/v1/ranneh/tones/${toneId}`;

export const GET_TONE_LIST_URL = `https://webservice-dev.ranneh.com/api/v1/ranneh/tones/`;

export const RANNEH_SUBSCRIBE_TONE_URL = 'https://app-dev.ranneh.com/api/v1/subscriptions/subscribe'