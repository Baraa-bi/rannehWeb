


import  {combineReducers} from 'redux';
import app from './appReducer'; 
import auth from './authReducer';
import tones from './tonesReducer';


export default combineReducers({
    app, 
    tones, 
    auth
});