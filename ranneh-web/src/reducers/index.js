


import  {combineReducers} from 'redux';
import app from './appReducer';
import zain from './zainReducer';
import bundle from './bundleReducer';
import auth from './authReducer';
import tones from './tonesReducer';


export default combineReducers({
    app,
    bundle,
    tones,
    zain,
    auth
});