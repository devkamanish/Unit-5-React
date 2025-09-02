import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { coffeeReducer } from './reducers';

const store = createStore(coffeeReducer, applyMiddleware(thunk));

export default store;
