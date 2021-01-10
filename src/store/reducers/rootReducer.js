import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import creditReducer from './creditReducer';

const rootReducer = combineReducers({
	products: productsReducer,
	credit: creditReducer
  })


export default rootReducer;