import {PRODUCTS_PER_SLOT} from "../constants";


export const duplicateProduct = (array) => {
	let newObj = []
	
	array.forEach(product => {
		
		let newProd = {...product}
		
		if(newProd.count > PRODUCTS_PER_SLOT){
			while(newProd.count > PRODUCTS_PER_SLOT){
				newObj.push({...newProd, count: PRODUCTS_PER_SLOT})
				newProd.count = newProd.count - PRODUCTS_PER_SLOT;
			}
			newObj.push({...newProd})
			
		}else{
			newObj.push(newProd);
		}
		
	})
	return newObj
}


export const addSelectionNumbers = (array) => {
	let baseNumber = 1
	let secondNumber = 1
	let obj = array.map( product => {
		if(secondNumber === 10){
			baseNumber++;
			secondNumber = 1;
		}
		
		let newObj = {
			...product,
			selectionNumber: `${baseNumber}${secondNumber}` 
		}
		secondNumber++;
		return  newObj;
	})
	
	return obj
}