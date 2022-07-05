import React from 'react';
import './ProductDetailLeft.css';
import {dark} from '../../data';

function ProductDetailLeft() {
  return (
    <div className='ProductDetailLeft'>
        {dark.map((d)=>(
            <div className='dark-pro'>
                <img className="dark-img" src={d.img}></img>
            </div>
        ))}
    </div>
  )
}

export default ProductDetailLeft