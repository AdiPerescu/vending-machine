import * as React from 'react';
import { connect } from 'react-redux';



class ProductsList extends React.Component{


	
	
    render(){

        return(
            <div className="products-container">
                {this.props.products.map((product) => (
						<div className="product" key={product.selectionNumber}>
							<p className="product-title">{product.name}</p>
							<p className="product-price">{product.price} $</p>
							<p className="product-count">Number available: {product.count ? product.count : "Out of stock"}</p>
							<p className="product-selection-number">Product code: {product.selectionNumber}</p>
						</div>
					))
				}
					
				
            </div>
        )
    }

}


const mapStateToProps = (state) => ({
    products: state.products
})


export default connect(mapStateToProps)(ProductsList);