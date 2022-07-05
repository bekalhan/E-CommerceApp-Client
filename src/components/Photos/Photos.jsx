import React from 'react';
import {popularProducts} from '../../data';
import {popularProducts2} from '../../data';
import './Photos.css';

function Photos() {
  return (
    <div className='Photos'>
        <div className="f-photos">       
            {popularProducts.map((product)=>(
                <div className='p-images'>
                    <img className="p-img" src={product.img}></img>
                </div>
            ))}
        </div>
        <div className="s-photos">
            {popularProducts2.map((product)=>(
                <div className='p-images'>
                    <img className="p-img" src={product.img}></img>
                </div>
            ))}  
        </div>
    </div>
  )
}

export default Photos