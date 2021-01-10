import * as React from 'react';
import { connect } from 'react-redux';
import { addCredit } from '../../store/reducers/creditReducer';

class CreditManager extends React.Component{

	addCreditToMachine = (amount) => {
		this.props.addCredit(amount)
	}
	
    render(){

        return(
            <div className="credit-manager-container">
					<p className="credit-display">Available credit: {this.props.credit.value}$</p>
					<button className="credit-button" onClick={() => this.addCreditToMachine(2)}>2 $</button>
					<button className="credit-button" onClick={() => this.addCreditToMachine(5)}>5 $</button>
					<button className="credit-button" onClick={() => this.addCreditToMachine(10)}>10 $</button>
					<button className="credit-button" onClick={() => this.addCreditToMachine(20)}>20 $</button>
				
            </div>
        )
    }

}

const mapStatetoProps = (state) => ({
	credit: state.credit
})


const mapDispatchToProps = {
    addCredit
}


export default connect(mapStatetoProps, mapDispatchToProps)(CreditManager);