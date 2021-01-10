import * as React from 'react';
import { connect } from 'react-redux';
import { buyProduct } from '../../store/reducers/productsReducer';
import { removeCredit } from '../../store/reducers/creditReducer';
import _ from 'lodash';


class SelectionKeypad extends React.Component{

	constructor(props){
        super(props)
        this.state = {
			selectedCode: "",
			displayMessage: ""
        }
	}
	
	selectProuct = (key) => {
		
		if(this.state.selectedCode.length < 2){
			this.setState({
				selectedCode: this.state.selectedCode + key
			})
		}
	}
	
	resetSelection = () => {
		this.setState({
			selectedCode: ""
		})
	}
	
	buyProductfromMachine = () => {
		
		if(this.state.selectedCode){
			let selectedProduct = _.find(this.props.products, (o) => {return o.selectionNumber === this.state.selectedCode})
			if(!selectedProduct) {
				this.setState({
					displayMessage: `Please select an available product code`
				})
				this.resetSelection();
				return
			}
			
			if(this.props.credit.value >= selectedProduct.price){
				if(selectedProduct.count > 0){
					this.props.buyProduct(this.state.selectedCode);
					this.props.removeCredit(selectedProduct.price);
					this.setState({
						displayMessage: `You just bought ${selectedProduct.name}`
					})
				}else{
					this.setState({
						displayMessage: `Product is out of stock`
					})
				}
				
			}else{
				this.setState({
					displayMessage: `You don't have enough credit`
				})
			}
			
			
			this.resetSelection();
			
		}else{
			this.setState({
				displayMessage: "Please select a product"
			})
		}
	}
	

    render(){

        return(
            <div className="keypad-container">
				<button className="selection-key" onClick={() => this.selectProuct("1")}>1</button>
				<button className="selection-key" onClick={() => this.selectProuct("2")}>2</button>
				<button className="selection-key" onClick={() => this.selectProuct("3")}>3</button>
				<button className="selection-key" onClick={() => this.selectProuct("4")}>4</button>
				<button className="selection-key" onClick={() => this.selectProuct("5")}>5</button>
				<button className="selection-key" onClick={() => this.selectProuct("6")}>6</button>
				<button className="selection-key" onClick={() => this.selectProuct("7")}>7</button>
				<button className="selection-key" onClick={() => this.selectProuct("8")}>8</button>
				<button className="selection-key" onClick={() => this.selectProuct("9")}>9</button>
				
				<p className="selected-key">Selected: {this.state.selectedCode}</p>
				
				<button className="buy-button" onClick={() => this.buyProductfromMachine()}>Buy</button>
				<button className="reset-button" onClick={() => this.resetSelection()}>Reset</button>
				
				<p className="display-message">{this.state.displayMessage}</p>
            </div>
        )
    }

}

const mapStatetoProps = (state) => ({
	credit: state.credit,
	products: state.products
})

const mapDispatchToProps = {
	buyProduct,
	removeCredit
}



export default connect(mapStatetoProps, mapDispatchToProps)(SelectionKeypad);