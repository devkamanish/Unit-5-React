

import {createStore } from 'redux'
import reduceCounter from './redux/reducers/reduceCounter';
const store = createStore(reduceCounter)

export default store;

