
import { LOADING_ACTIVE_SERVICES,
         LOADING_REMOVING_SERVICE,
         LOADING_ADDING_SERVICE, 
         ZAIN_FEATURES_CHANGED,
         ACTIVE_SERVICES,
         LOADING_FEATURES 
} from '../actions/types';


const INIT_STATE = {
    zainFeatures: [],
    zainActiveServices: [],
    loadingFeatures: true,
    loadingActiveServices: true
    
}

export default (state = INIT_STATE, action) => {
    
    switch (action.type) {

        case ZAIN_FEATURES_CHANGED:
            return { ...state, zainFeatures:action.payload }
        case ACTIVE_SERVICES:
            return { ...state, zainActiveServices: action.payload};

        case LOADING_FEATURES:
            return { ...state, loadingFeatures: action.payload };

        case LOADING_ACTIVE_SERVICES:
            return { ...state, loadingActiveServices: action.payload };

        case LOADING_ADDING_SERVICE:
            return { ...state,loadingAddingService: action.payload };

        case LOADING_REMOVING_SERVICE:
            return {...state,loadingRemovingService:action.payload};   

        default:
            return state;
    }
}