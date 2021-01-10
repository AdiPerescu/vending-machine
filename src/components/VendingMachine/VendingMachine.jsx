import * as React from 'react';
import ProductsList from '../ProductsList';
import CreditManager from '../CreditManager';
import SelectionKeypad from '../SelectionKeypad';
import {products} from '../../constants';
import { connect } from 'react-redux';
import { setProducts } from '../../store/reducers/productsReducer';


class VendingMachine extends React.Component{

    componentDidMount(){    
        this.props.setProducts(products);
    }

    render(){

        return(
            <div className="vending-machine-container">
				<div className="products-list">
					<ProductsList></ProductsList>
				</div>
				<div className="sidebar">
						<CreditManager></CreditManager>
						<SelectionKeypad></SelectionKeypad>
				</div>	
            </div>
        )
    }

}


const mapDispatchToProps = {
	setProducts
}


export default  connect(null, mapDispatchToProps)(VendingMachine);