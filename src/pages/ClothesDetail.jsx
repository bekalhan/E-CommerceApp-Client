import React from 'react';
import ProductDetail from '../components/ProductDetail/ProductDetail';

function ClothesDetail(props) {
  const id = props.match.params.id;
  return (
    <div>
        <ProductDetail id={id} />
    </div>
  )
}

export default ClothesDetail