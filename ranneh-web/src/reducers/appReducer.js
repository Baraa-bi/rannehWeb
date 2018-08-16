
import { APP_LANGUAGE_CHANGED } from '../actions/types';


const INIT_STATE = {
    language: 'en'
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case APP_LANGUAGE_CHANGED:
            return { ...state, language: action.payload };
        default:
            return state;
    }
}