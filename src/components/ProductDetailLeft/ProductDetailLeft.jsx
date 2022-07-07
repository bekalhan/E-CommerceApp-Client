import React from 'react';
import './ProductDetailLeft.css';
import {dark} from '../../data';
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {getProductCtrl} from '../../redux/slices/Products/productSlices';
import { useEffect } from 'react';

function ProductDetailLeft(props) {
  const id = props.id;

  const dispatch = useDispatch();

  const product = useSelector(state=> state.products);
  const {loading , serverErr , appErr , ProductDetails} = product;

  useEffect(()=>{
    dispatch(getProductCtrl(id))
  },[]);


  return (
    <div className='ProductDetailLeft'>
        <div className='dark-pro'>
          <img className='dark-img' src={ProductDetails?.img}></img>
        </div>
    </div>
  )
}

export default ProductDetailLeft