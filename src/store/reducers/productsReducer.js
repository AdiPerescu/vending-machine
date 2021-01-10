
import initialStore from "../config/initialStore";
import produce from 'immer';
import _ from 'lodash';
import {duplicateProduct, addSelectionNumbers} from "../../utils/productsManipulation";

// Actions

const SET_PRODUCTS = "SET_PRODUCTS"
const BUY_PRODUCT = "BUY_PRODUCT"

// Action Creators


export const setProducts = (payload) => ({
	type: SET_PRODUCTS,
	payload: payload
})

export const buyProduct = (payload) => ({
	type: BUY_PRODUCT,
	payload: payload
})


// Reducer

	
const productsReducer = (state = initialStore, action) => {
	return produce(state, draft => {
		switch(action.type) {
			case BUY_PRODUCT:
				_.forEach(draft, (product) => {
					if(product.selectionNumber === action.payload){
						product.count --;
					}
				})
				break;
			case SET_PRODUCTS:
				let products = action.payload
				let modifiedProducts = addSelectionNumbers(duplicateProduct(products));
				return [...modifiedProducts]
			default:
				return state;	
		}
		
	});
	
}	

export default  productsReducer;