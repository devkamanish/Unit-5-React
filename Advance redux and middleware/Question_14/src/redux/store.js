import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducer3';

export const store = createStore(rootReducer, applyMiddleware(thunk));



