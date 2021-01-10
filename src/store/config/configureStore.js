import { createStore } from 'redux';
import initialStore from './initialStore';
import rootReducer from '../reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

/** Store */
const store = createStore(
    rootReducer,
    initialStore,
    composeWithDevTools()
);

export default store;
