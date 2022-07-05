import React from 'react';
import ProductDetailLeft from '../ProductDetailLeft/ProductDetailLeft';
import ProductDetailRight from '../ProductDetailRight/ProductDetailRight';
import './ProductDetail.css';

function ProductDetail() {
  return (
    <div className='ProductDetail'>
        <ProductDetailLeft />
        <ProductDetailRight />
    </div>
  )
}

export default ProductDetail