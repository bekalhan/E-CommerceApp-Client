import React from 'react';
import ProductDetailLeft from '../ProductDetailLeft/ProductDetailLeft';
import ProductDetailRight from '../ProductDetailRight/ProductDetailRight';
import './ProductDetail.css';

function ProductDetail(props) {
  const id = props.id;
  return (
    <div className='ProductDetail'>
        <ProductDetailLeft id={id} />
        <ProductDetailRight id={id} />
    </div>
  )
}

export default ProductDetail