import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductDetailRight.css';
import {getProductCtrl} from '../../redux/slices/Products/productSlices';
import { useEffect } from 'react';


function ProductDetailRight(props) {

    const id = props.id;

    const dispatch = useDispatch();

    const product = useSelector(store => store.products);
    const {loading , serverErr , appErr , ProductDetails} = product;

    useEffect(()=>{
        dispatch(getProductCtrl(id))
    },[]);

  return (
    <div className='ProductDetailRight'>
        <div className='product-name'>
            <h3>{ProductDetails?.title}</h3>
        </div>
        <div className='product-description'>
            {ProductDetails?.desc}
        </div>
        <div className='product-price'>
            {ProductDetails?.price} $
        </div>
        <div className='product-configure'>
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