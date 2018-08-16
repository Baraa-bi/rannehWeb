
// general app types

export const APP_LANGUAGE_CHANGED = 'app_language_changed'; 

export const TONE_CHANGED = 'TONE_CHANGED';



// bundles  types

export const BUNDLE_PURCHASED ='BUNDLE_PURCHASED';
export const BUNDLE_REMOVED ='BUNDLE_REMOVED';




//auth types

export const API_TOKEN_CHANGED = 'API_TOKEN_CHANGED';

export const USER_NUMBER_CHANGED = 'USER_NUMBER_CHANGED';

// zain types


export const ZAIN_LINE_TYPE ='ZAIN_LINE_TYPE';

export const ZAIN_FEATURES_CHANGED  = 'ZAIN_FEATURES_CHANGED';

export const SERVICE_ID_CHANGED='SERVICE_ID_CHANGED';

export const ACTIVE_SERVICES  = 'ACTIVE_SERVICES';

export const LOADING_FEATURES = 'LOADING_FEATURES';

export const LOADING_ACTIVE_SERVICES = 'LOADING_ACTIVE_SERVICES';

export const LOADING_ADDING_SERVICE = 'LOADING_ADDING_SERVICE';

export const LOADING_REMOVING_SERVICE = 'LOADING_REMOVING_SERVICE';



export const ACTIVE_PAY_AS_YOU_GO = {
    "bundleNameEn":"Pay as you go barring",
    "bundleNameAr":"التحكم بالمحاسبة بالكيلوبايت",
    "bundleCode":"220010",
    "renewable":0,
    "volume":{"en":"0 Bytes","ar":"0 بايت"},
    "remaining":{"en":"0 Bytes","ar":"0 بايت"},
    "used":{"en":"0 Bytes","ar":"0 بايت"},
    "expiryDate":"",
    "renewalDate":"Invalid date",
    "offerId":"9000",
    "price":"0",
    "expirationDate":"",
    "statusExpiry":"",
    "serviceType":"67",
    "statusDescription":"Active",
    "status":"1"
};


export const AVAILABLE_PAY_AS_YOU_GO = {
    "code":"9000",
    "description":"Pay as you go barring",
    "billingCode":"220010",
    "offerId":"9000",
    "price":"0",
    "serviceType":67,
    "renewable":{"en":"No","ar":"لا"},
    "validity":{"en":"Monthly","ar":"شهري"}
};