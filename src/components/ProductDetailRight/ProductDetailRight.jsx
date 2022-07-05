import React from 'react';
import './ProductDetailRight.css';

function ProductDetailRight() {
  return (
    <div className='ProductDetailRight'>
        <div className='product-name'>
            <h3>Herman T-shirt</h3>
        </div>
        <div className='product-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </div>
        <div className='product-price'>
            $ 120
        </div>
        <div className='product-configure'>
            <div>
                <h3>Color</h3>
                <select className="opt" id="" name="cars">
                </select>
            </div>
            <div>
                <h3>Size</h3>
                <select className="opt" id="" name="cars">
                </select>
            </div>
            <div>
                <h3>Quantity</h3>
                <input type="number" />
            </div>
        </div>
        <div className="add-button">
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductDetailRight