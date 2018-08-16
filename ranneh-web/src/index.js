import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reducers from './reducers';
import { unregister as unregisterServiceWorker } from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import ChooseBundle from './screens/MainPage';
import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session';
import { PersistGate } from 'redux-persist/integration/react';
import { CircularProgress } from '../node_modules/@material-ui/core';


const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);


const persistConfig = {
  key: 'root',
  storage: storageSession,
  whiteList:['auth']
};


const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStoreWithMiddleware(persistedReducer);
const persistor = persistStore(store);


ReactDOM.render(

  <Provider store={store}>
    <PersistGate loading={<CircularProgress size={40} />} persistor={persistor}>
      <BrowserRouter >
        <Switch>
          <Route path='/' component={ChooseBundle} />
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  , document.getElementById('root'));
unregisterServiceWorker();
