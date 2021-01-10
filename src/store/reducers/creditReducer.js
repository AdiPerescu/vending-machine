
import initialStore from "../config/initialStore";
import produce from 'immer';

// Actions

const ADD_CREDIT = "ADD_CREDIT";
const REMOVE_CREDIT = "REMOVE_CREDIT";

// Action Creators


export const addCredit = (payload) => ({
	type: ADD_CREDIT,
	payload: payload
})

export const removeCredit = (payload) => ({
	type: REMOVE_CREDIT,
	payload: payload
})

// Reducer

	

const creditReducer = (state = initialStore, action) => {
	return produce(state, draft => {
		switch(action.type) {
			case ADD_CREDIT:
				draft.value = draft.value + action.payload;
				break;
			case REMOVE_CREDIT:	
				draft.value = draft.value - action.payload;
				break;
			default:
				return state;	
		}
		
	});
	
}	


export default  creditReducer;