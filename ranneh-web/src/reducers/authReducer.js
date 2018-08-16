
import { API_TOKEN_CHANGED ,USER_NUMBER_CHANGED} from '../actions/types';


const INIT_STATE = {
    apiToken: null,
    defaultToken:null,
    lineType:'',
    userNumber:''
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case API_TOKEN_CHANGED:
            return { ...state,
                defaultToken:action.payload,
                lineType:action.payload.split('/')[1]!=1?'prepaid':'postpaid',    
                apiToken: action.payload.split('/')[0] 
            };

        case USER_NUMBER_CHANGED:
            return {...state,userNumber:action.payload};
        default:
            return state;
    }
}