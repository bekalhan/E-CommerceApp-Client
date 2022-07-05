import React from 'react';
import './AllProduct.css';
import {AllProducts} from '../../data';

function AllProduct() {
  return (
    <div className='AllProduct'>
        {AllProducts.map((product) =>(
            <div className='product-container'>
                 <img className='product-img' src={product.img}></img>
            </div>
        ))}
    </div>
  )
}

export default AllProduct